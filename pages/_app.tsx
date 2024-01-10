import '@/styles/globals.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <MessengerCustomerChat
    pageId="105681252100762"
    appId="602353608684679"
    htmlRef={`/api/facebook-proxy`}
  />
</>
  )
}
