import type { FormEvent } from 'react';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

const Login = () => {

  async function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = e.currentTarget!.email.value;
    console.log('Logging In');
  }

  return (
    <Box
      border="2px solid black"
      borderRadius='sm'
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl
          borderColor='black'
          display='flex'
          flexDir='column'
          alignItems='center'
        >
          <Box mt='5' w='300px'>
            <FormLabel
              textColor='gray.600'
              fontSize='sm'
            >
              Email
            </FormLabel>
            <Input name="email" type="email" borderRadius='sm' placeholder='yash@example.com' borderColor="black" />
          </Box>
          <Button
            mt='3'
            mb='5'
            border='2px solid black'
            borderRadius='sm'
            bgColor='white'
            textColor='black'
            _hover={{boxShadow:'4px 4px 0 black'}}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>

  );
}

export default Login;
