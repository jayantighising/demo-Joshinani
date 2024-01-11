import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader'; 

const Map = ({ center = { lat: 27.67988, lng: 85.27544 }, zoom = 11 }) => {
  const mapRef = useRef();

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyDAO365OcUnDygeNt9O7rX_aTUo-OoSZ34', 
      version: 'weekly', 
    });

    loader.load().then((google) => {
      const map = new google.maps.Map(mapRef.current, {
        center: center,
        zoom: zoom,
      });

      const marker = new google.maps.Marker({
        position: center,
        title: 'Joshinani Heritage homes',
        map: map,
      });

      const infowindow = new google.maps.InfoWindow({
        content: `
          <div>
            <strong>Joshinani Heritage homes</strong><br />
            <a href="https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}" target="_blank">
              Get Directions
            </a>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
    });
  }, []);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '500px' }} />
  );
};

export default Map;
