import Head from "next/head";
import DevContextProvider from "../hooks/useDevContext";
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DevContextProvider>
      <Head>
        <title>Github Search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </DevContextProvider>
  );
}

export default MyApp
