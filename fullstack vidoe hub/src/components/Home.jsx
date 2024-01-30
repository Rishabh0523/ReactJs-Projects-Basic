import React from 'react';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { Image } from '@chakra-ui/react';

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    padding:"4",
    size:"4xl"
}

const Home = () => {
  return (
  <Box >
    
<MyCarousel/>

<Container  maxW={'container.xl'} minH={'100vh'} p="16">

<Heading 
textTransform={"uppercase"} 
py="2" 
w={"fit-content"} 
borderBottom={"2px solid"}
m="auto"
>
Services
</Heading>

<Stack
    h="full"
    p={"4"}
    alignItems={"center"}
    direction={["colum","row"]}
>

<Image src={img5} h={['40','400']}  filter={"hue-rotate(-130deg)"}/>

<Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={"center"}>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatum consectetur enim odio perspiciatis ab deserunt culpa autem, ad ut dignissimos animi amet debitis. Dignissimos saepe debitis quos, aspernatur itaque deserunt laboriosam consequuntur rem animi veniam aliquid enim corporis minus sequi nihil doloremque optio, nam perferendis! Voluptatem quo id rerum incidunt, quisquam quam nesciunt labore vero reiciendis esse. Labore enim eaque veritatis quis at doloribus nostrum inventore, ipsam nihil sint qui, exercitationem nesciunt dolorum non magni velit quo asperiores incidunt libero. Optio animi maiores laudantium facere, sapiente quis cupiditate aperiam? Soluta perferendis, amet ullam odio laboriosam quo corporis quod unde totam possimus magni alias veniam expedita pariatur temporibus doloremque assumenda. Ab, perferendis. Adipisci, incidunt! Odio aliquam nam qui a, soluta cupiditate officia veritatis eveniet quasi. Velit iure voluptates dolorem tempora dolorum culpa nisi animi est numquam, vitae, dolores itaque eos accusamus ipsum, nihil pariatur labore quae consequuntur impedit rerum vel repellendus voluptas? Dignissimos deleniti quo ullam aut soluta. Eligendi accusamus excepturi nemo nihil voluptatum omnis et, dolorem delectus cupiditate dolor perferendis sit reprehenderit animi quae molestiae tempore cumque. Laborum, nemo? Similique eos ullam officia facilis laborum nesciunt, iusto molestias suscipit voluptates. Alias error ipsam quisquam corporis laborum odit incidunt ab!
</Text>
</Stack>

</Container>
  </Box>
  );
};

const MyCarousel = () =>(

    <Carousel 
    autoPlay 
    infiniteLoop 
    interval={1000} 
    showStatus={false} 
    showThumbs={false}
     showArrows={false}
     >

     <Box w='full' h={'100vh'} >
        <Image src={img1}/>
        <Heading bgColor={"blackAlpha.600" } color={'white'} {...headingOptions}>
            Watch the Futures
        </Heading>
     </Box>


     <Box w='full' h={'100vh'} >
        <Image src={img2}/>
        <Heading bgColor={"whiteAlpha.600" } color={'black'} {...headingOptions}>
            Future is gaming
        </Heading>
     </Box>


     <Box w='full' h={'100vh'} >
        <Image src={img3}/>
        <Heading bgColor={"whiteAlpha.600" } color={'white'} {...headingOptions}>
            Gaming on Console
        </Heading>
     </Box>

     <Box w='full' h={'100vh'} >
        <Image src={img4}/>
        <Heading bgColor={"whiteAlpha.600" } color={'white'} {...headingOptions}>
            Enjoy Gaming in Night
        </Heading>
     </Box>
    </Carousel>

)

export default Home;
