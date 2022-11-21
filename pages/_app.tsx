import { useState } from 'react'
import type { AppProps } from 'next/app'

export { Header } from '../components/Header';

import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/Header';

function Breathe({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Breathe
