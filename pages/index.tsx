import type { NextPage } from 'next'
import Head from 'next/head'

import {
  HStack,
  Box,
  Heading,
  VStack,
  Text,
  Button,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import Image from 'next/image';

const Home: NextPage = () => {

  return (
    <>
      <VStack>
        <HStack 
          m='28'
          p='3' 
          spacing='10' 
          bgColor='green.200'
          borderRadius='md'
          boxShadow='sm'
        >
          <Box>
            <Heading as={'h1'} size='xl' >
              Worried about air pollution?
            </Heading>
            <Heading
              as={'h2'}
              size='lg'
              bgGradient='linear(to-l, green, gray.600)'
              bgClip='text'
            >
              Breathe easy knowing we&apos;re on the job :)
            </Heading>
            <Text py='5' maxW='50ch' textColor='green.900'>
              Get alerts when air pollution in your city
              reaches dangerous levels.
            </Text>

            <Accordion allowToggle={true} borderWidth='0' borderColor="green.200">
              <AccordionItem>

                <h2>
                  <AccordionButton>
                    <Button colorScheme="green" textAlign='left'>
                      Join waitlist
                    </Button>
                  </AccordionButton>
                </h2>

                <AccordionPanel>
                  <form>
                    <Input name="email" type="email" borderRadius='sm' placeholder='yash@example.com' borderColor="black" />
                    <Button>
                      Submit
                    </Button>
                  </form>
                </AccordionPanel>

              </AccordionItem>
            </Accordion>
          </Box>
          <Box>
            <Image
              style={{borderRadius:'5px'}}
              alt='sample image'
              quality={100}
              src='/pollution.png'
              width='400'
              height='200'
            />
            <Text fontSize='xs' fontWeight='light' fontStyle='italic' >Source: ourworldindata.org</Text>
          </Box>
        </HStack>

        <HStack
          p='3' 
          m='28'
          spacing='10' 
          bgColor='yellow.200'
          borderRadius='md'
          boxShadow='sm'
        >
          <Box>
            <Heading
              as={'h2'}
              pb='6'
              size='lg'
              bgGradient='linear(to-l, orange.600, gray.600)'
              bgClip='text'
            >
              Stay safe, wherever you are.
            </Heading>
            <Text p='1' pt='4'>• World wide coverage.</Text>
            <Text p='1'>• Always up to date. New data every 30 minutes.</Text>
            <Text p='1' pb='0'>• Get alerted on multiple platforms:</Text>
            <Text pl='4'>• Email     </Text>
            <Text pl='4'>• WhatsApp* </Text>
            <Text pl='4'>• Discord * </Text>
            <Text pl='4'>• Slack   * </Text>
          </Box>

          <Box pt='30'>
            <Image
              style={{borderRadius:'5px'}}
              alt='sample image'
              quality={100}
              src='/sample-screenshot.png'
              width='500'
              height='120'
            />
            <Text fontSize='xs' fontWeight='light' fontStyle='italic' >* feature currently in development</Text>
          </Box>
          
        </HStack>
      </VStack>
    </>
  );
}

export default Home
