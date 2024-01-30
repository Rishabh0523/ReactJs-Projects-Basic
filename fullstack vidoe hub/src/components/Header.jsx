import React from 'react';
import { HStack, VStack, chakra } from '@chakra-ui/react';
import { 
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi'


const Header = () => {

    const {isOpen,onOpen,onClose} = useDisclosure();

  return <>
          <Button 
          zIndex={'overlay'}
          position={"fixed"}
          top={'4'}
          left={'4'}
          colorScheme='purple'
          p={'0'}
          w={'10'}
          h={'10'}
          borderRadius={'full'}
          onClick={onOpen}
          
          >
            <BiMenuAltLeft size={'20'}/>
          </Button>


          <Drawer isOpen={isOpen} placement='left' onClose={onClose}>

          <DrawerOverlay/>

          <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>Vidoe Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>

          <Button 
          onClick={onClose} 
          variant={'ghost'} 
          colorScheme={'purple'}
          >
            <Link to={'/'}>Home</Link>
          </Button>

          <Button 
          onClick={onClose}  
          variant={'ghost'} 
          colorScheme={'purple'}
          >
            <Link to={'/vidoes'}>Vidoes</Link>
          </Button>

          <Button 
          onClick={onClose}   
          variant={'ghost'} 
          colorScheme={'purple'}
          >
            <Link to={'/vidoes?category=free'}>Free Vidoes</Link>
          </Button>

          <Button  
          onClick={onClose}  
          variant={'ghost'} 
          colorScheme={'purple'}
          >
            <Link to={'/upload'}>Upload Vidoe</Link>
          </Button>
            </VStack>

       <HStack 
       pos={'absolute'} 
       bottom={'10'} 
       left={'0'} 
       w={'full'}
       justifyContent={'space-evenly'}  
       >

        <Button colorScheme={'purple'}>
            <Link to={'/login'}>Log In</Link>
        </Button>


        <Button colorScheme={'purple'} variant={'outline'}>
            <Link to={'signup'} >Sign up</Link>
        </Button>


       </HStack>

          </DrawerBody>
          </DrawerContent>
          </Drawer>
  </>
    
  
  
}

export default Header;
