import type { FormEvent } from 'react';

import {
  Stack,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { deflate } from 'zlib';

const User = () => {

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget!.username.value;
    const city = e.currentTarget!.city.value;
    const country = e.currentTarget!.country.value;

    console.log(e);
  }

  return (
    <form onSubmit={((e) => handleSubmit(e))}>
      <Stack direction='row'>

        {/*This box contains the card to setup name */}
        <Box p='3' border='2px solid black'>
          <FormLabel
            textColor='gray.600'
            fontSize='sm'
          >
            Name (optional)
          </FormLabel>
          <Input name="username" type="email" borderRadius='sm' placeholder='yash@example.com' borderColor="black" />

          <FormLabel
            pt='2'
            textColor='gray.600'
            fontSize='sm'
          >
            City
          </FormLabel>
          <Input name="city" type="text" borderRadius='sm' placeholder='Paris' borderColor="black" />

          <FormLabel
            pt='2'
            textColor='gray.600'
            fontSize='sm'
          >
            Country
          </FormLabel>
          <Input name="country" type="text" borderRadius='sm' placeholder='France' borderColor="black" />

          <FormLabel
            pt='2'
            textColor='gray.600'
            fontSize='sm'
          >
            State
          </FormLabel>
          <Input name="state" type="text" borderRadius='sm' placeholder='France' borderColor="black" />
        </Box>

        <Button
          type='submit'
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
      </Stack>
    </form>
  );
}

export default User;
