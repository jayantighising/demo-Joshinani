import { useState } from 'react';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send data to a server-side endpoint 
      await axios.post('/api/contact', formData);

      setFormData({
        fullName: '',
        email: '',
        message: '',
      });

      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{  background : '#ccc',border: '1px solid #000', padding:' 50px 50px 50px 90px', borderRadius: '5px', width: '40%', margin: 'auto' }}>
      <label style={{ display: 'block', marginTop: '20px' }}>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{ marginLeft: '10px',fontSize: '25px' }}
        />
      </label>
      <br />
      <label style={{ display: 'block' }}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ marginLeft: '43px' ,fontSize: '25px'}}
        />
      </label>
      <br />
      <label style={{ display: 'block' }}>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ marginLeft: '20px', padding: '10px' ,fontSize: '25px'}}
        />
      </label>
      <br />
      <button type="submit" style={{ padding: '10px', fontSize: '14px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
