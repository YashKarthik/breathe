import type { NextPage } from 'next'
import Head from 'next/head'

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import {
  Container,
} from '@chakra-ui/react';

import Login from '../components/LoginComponent';
import User from '../components/UserSetup';

const Home: NextPage = () => {
  
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      {!session ? (
        <Container>
            <Login />
        </Container>
      ) : (
        <User />
      )}
    </>
  );
}

export default Home
