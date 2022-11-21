import {
  Box,
  Spacer,
  Link as ChakraLink,
} from '@chakra-ui/react';

import NextLink from "next/link";

export const Header: React.FC = () => {
  return (
    <nav>
      <Box
        display="flex"
        flexDir="row"
        justifyContent="evenly"
        py="1" px="5" m="0"
        bgGradient="linear(to-r, green.200, gray.600)"
      >

        <NextLink href="/" passHref>
          <ChakraLink
            fontWeight="bold"
            fontSize="2xl"
            _hover={{textDecor: 'none'}}
          >
            Breathe App
          </ChakraLink>
        </NextLink>

        <Spacer />

        <ChakraLink href="github.com/yashkarthik/breathe" textColor="green.200">
          GitHub
        </ChakraLink>

      </Box>
    </nav>
  );
}
