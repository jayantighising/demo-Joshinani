import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div>
    <h1 style={{marginTop:'50px',marginLeft: '40%', fontSize: '48px', fontWeight: 'bolder' }}>Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default Home;
