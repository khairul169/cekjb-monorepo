import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";

const colors = {
  primary: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>CekJB.id - Jual Beli Online Aman</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Jual beli aman dengan CekJB.id" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
