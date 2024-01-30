import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'} >

  <Stack direction={['column' ,'row']}>

  <VStack alignItems={'stretch'} w={'full'} px={'4'}>
    <Heading size="md" textTransform={'uppercase'} textAlign={['center','left']}>
        Click to know more About Me
    </Heading>

    <HStack 
    borderBottom={'2px solid white'}
    padding={"2"}>

    <Input 
    placeholder='Enter Email Here....' 
    border={'none'} 
    borderRadius={'none'} 
    outline={'none'}
    focusBorderColor='none'    
    />


        <Button 
        p={"0"}
        color={"purple"}
        variant={'ghost'}
        borderRadius={'0 20px 20px 0'}
        >
          <AiOutlineSend  size={20}/>
        </Button>
    </HStack>
  </VStack>

  <VStack w={'full'}
  borderLeft={['none' , '1px solid white' ]}
  borderRight={['none' , '1px solid white' ]}
  >
  <Heading textTransform={'uppercase'} textAlign={'center'}>
    Knowledge Hub
  </Heading>

<Text>All rights received</Text>
  </VStack>

  <VStack w={'full'}>

<Heading size={'md'} textTransform={'uppercase'}>
    Social Media
</Heading>
<Button variant={'link'} colorScheme={'purple'}>
<a  target='blank'  href="https://www.linkedin.com/in/rishabh-raj23/">Linkdin</a>
</Button>

<Button variant={'link'} colorScheme={'purple'}>
<a target='blank'  href="https://github.com/Rishabh0523">Github</a>
</Button>

<Button variant={'link'} colorScheme={'purple'}>
<a target='blank'  href="https://www.instagram.com/rishabhsingh.2305/">Instagram</a>
</Button>
  </VStack>

  </Stack>

  </Box>
}

export default Footer;
