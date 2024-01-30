import { Avatar, Button, Container, Heading, Input, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const SignUp= () => {
  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

  <form>

    <VStack 
    alignItems={'stretch'} 
    spacing={'8'} 
    w={['full','96']} 
    m={'auto'}
    my={'16'}
     >

    <Heading>FullStack Vidoe Hub</Heading>

    <Avatar alignSelf={'center'} boxSize={'32'}/>

    <Input 
    placeholder={'Name'} 
    type={'text'} 
    required 
    focusBorderColor={'purple.500'}

    />

<Input 
    placeholder={'Email'} 
    type={'email'} 
    required 
    focusBorderColor={'purple.500'}

    />

<Input 
    placeholder={'password'} 
    type={'password'} 
    required 
    focusBorderColor={'purple.500'}
        
    />

    <Button colorScheme={'purple'}  type={'submit'}>
    Sign Up
    </Button>

    <Text textAlign={'right'}>
   Already Signed Up?{' '}
    <Button variant={'link'} colorScheme={'purple'}>
        <Link to={'/signup'} >Log In</Link>
    </Button>
    </Text>
    </VStack>
  </form>
     
  </Container>
}

export default SignUp;
