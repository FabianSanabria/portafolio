import React from 'react';
import {motion} from 'framer-motion';
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,

} from '../styles/Global.styled';
import {BsLinkedin,BsInstagram} from "react-icons/bs";
import { FaGithub } from 'react-icons/fa'
import { ShowcaseParticleContainer, ShowcaseImageCard,Particle } from '../styles/Showcase.styled';
import ShowcaseImg from '../assets/showcase-img.jpg';
import BackgroundImg from '../assets/particle.png';
import { fadeInLeftVariant,fadeInRightVariant } from '../utils/Variants';
const Showcase = () => {
  return (
    <PaddingContainer 
        id="Home"
        left="3%"
        right="10%"
        top="15%"
        bottom="10%"
        responsiveLeft='1rem'
        responsiveRight='1rem'
        responsiveTop='8rem'
    > 
        <FlexContainer align="left" fullWidthChild>
            {/** --left content-- */} 
            <motion.div 
                variants={fadeInLeftVariant}
                initial='hidden'
                whileInView='visible'> 
                <Heading size="h4" >¡Hola!</Heading>
                <Heading 
                    size="h1"
                    as="h1"
                    top= "0.5rem"
                    bottom= "1rem"
                    right= "0.5rem"
                >Me llamo<BlueText> Fabian Sanabria </BlueText>   </Heading>
                <Heading size="h3" as="h3" >y soy<BlueText> Desarrollador de Software</BlueText></Heading>
                <ParaText as="p" top="2rem" bottom="4rem">Hola mi nombre es Fabian Sanabria, tengo 23 años soy Desarrollador de Software con proyectos en plataformas como React, Django, Express, Laravel y con muchas ganas de aprender </ParaText>
                {/**  --social icons-- */}
                <FlexContainer gap= "20px" responsiveFlex>
                    <a href='https://www.linkedin.com/in/fabian-ignacio-sanabria-ampuero-314a1025b/' style={{zIndex: '2'}}>
                    <IconContainer color='white' size= "2rem">
                    
                    <BsLinkedin/>
                   
                    </IconContainer>
                     </a>
                    <a  href='https://github.com/FabianSanabria'style={{zIndex: '2'}}>
                    <IconContainer color='white' size='2rem'>
                        <FaGithub/>
                    </IconContainer>
                    </a>
                
                </FlexContainer>

            </motion.div>
             {/**   --right content--   */}

             <FlexContainer justify="flex-end" as={motion.div} variants={fadeInRightVariant} initial='hidden' whileInView='visible'>
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <img src={ShowcaseImg} alt='showcase'width="400"   height="600"/>
                    </ShowcaseImageCard>

                    <Particle 
                        src={BackgroundImg}
                        as={motion.img}
                        animate={{
                            x: [0,100,0],
                            rotate: 360,
                            scale: [1, 0.5, 1]
                            
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }}
                        alt='particle'
                        top='-80px'
                        left='20px'
                        rotate='60deg'
                    />
                    <Particle 
                        src={BackgroundImg}
                        as={motion.img}
                        animate={{
                            y: [0,100,0],
                            rotate: 360,
                            scale: [1, 0.8, 1]
                            
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                        }}
                        alt='particle'
                        top='50px'
                        right='-70px'
                        rotate='60deg'
                    />
                    <Particle 
                        src={BackgroundImg}
                        as={motion.img}
                        animate={{
                            x: [0,-100,0],
                            rotate: 360,
                            scale: [1, 0.9, 1]
                            
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                        }}
                        alt='particle'
                        bottom='10px'
                        left='-70px'
                        rotate='50deg'
                    />                    
                </ShowcaseParticleContainer>
             </FlexContainer>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase