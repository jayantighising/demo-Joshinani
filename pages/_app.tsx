import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import WSPGallery from '../components/WSPGallery';

export default function App({ Component, pageProps }: AppProps) {
  const galleryImages = [
    {
      img: "/images/food1.png" 
    },
    {
      img: "/images/food2.png" 
    },
    {
      img: "/images/food3.png" 
    },
    {
      img: "/images/food4.png" 
    },
    {
      img: "/images/food5.png" 
    },
    {
      img: "/images/food6.png" 
    },
    {
      img: "/images/food7.png" 
    },
    {
      img: "/images/food8.png" 
    }
  ];

  return (
    <>
      <WSPGallery galleryImages={galleryImages} />
      <Component {...pageProps} />
    </>
  );
}

