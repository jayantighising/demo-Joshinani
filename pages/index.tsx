import Map from '../components/Map';

const MyPage = () => {
  return (
    <div>
      <h1>Joshinani Heritage Home</h1>
      <Map center={{ lat: 27.67988, lng: 85.27544}} zoom={15} />
    </div>
  );
};

export default MyPage;
