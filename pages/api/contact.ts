import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const dataFolder = path.resolve('./data');
const responsesFilePath = path.join(dataFolder, 'responses.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullName, email, message } = req.body;

    // Read existing responses from the file
    let existingResponses = [];
    try {
      const data = fs.readFileSync(responsesFilePath, 'utf-8');
      existingResponses = JSON.parse(data);
    } catch (error) {
      console.error('Error reading responses file:', error);
    }

    // Add the new response
    const newResponse = { fullName, email, message };
    existingResponses.push(newResponse);

    // Write the updated responses back to the file
    try {
      fs.writeFileSync(responsesFilePath, JSON.stringify(existingResponses, null, 2), 'utf-8');
      console.log('Response saved to file successfully.');
    } catch (error) {
      console.error('Error writing responses file:', error);
    }

    res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
