import { useState } from 'react'
import type { AppProps } from 'next/app'

import { createBrowserSupabaseClient, Session } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

import { ChakraProvider } from '@chakra-ui/react'

function Breathe({ Component, pageProps }: AppProps<{ initialSession: Session }>) {
  const [ supabaseClient ] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionContextProvider>
  );
}

export default Breathe
