import React from 'react'
import {motion} from 'framer-motion';
//import global styles
import{
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled'

//import myskills styles
import { SkillsCardContainter,SkillsCard } from '../styles/MySkills.styled'
import { Skills } from '../utils/Data'
import { fadeInLeftVariant,fadeInRightVariant } from '../utils/Variants';
const MySkills = () => {
  return (
    <PaddingContainer
        id='Skills'
        top='10%'
        bottom='10%'
        responsiveLeft='1rem'
        responsiveRight='1rem'
    >

        {/** left section */}
        <FlexContainer fullWidthChild responsiveFlex responsiveDirection='column-reverse'> 
            <SkillsCardContainter as={motion.div} variants={fadeInLeftVariant} initial='hidden' whileInView='visible'>
                {Skills.map((skill) => (
                    <SkillsCard>
                        <IconContainer     size='5rem'   color='blue'>
                            {skill.icon}
                        </IconContainer>
                        <Heading as='h4'size='h4'>
                            {skill.tech}
                        </Heading>
                    </SkillsCard>
                ))}
            </SkillsCardContainter>

            {/** right section */}

            <motion.div as={motion.div} variants={fadeInRightVariant} initial='hidden' whileInView='visible'>
                <Heading as='h4' size='h4'>
                    Habilidades
                </Heading>
                <Heading as='h2' size='h2'>
                    Mis<BlueText> Skills</BlueText>
                </Heading>
                <ParaText top='2rem' bottom='1.5rem'>
                Como desarrollador tengo conocimientos y he creado aplicaciones en variados lenguajes de programación desde C, C++, C#, PHP, Java, Javascript, Python, por lo que
                siento que puedo aprender rapidamente cualquier lenguaje nuevo con el solo echo de trabajar en él.
                </ParaText>
                <ParaText >
                    Tambien he trabajado en frameworks de desarrollo web como lo son Laravel, framework monolitico, y frameworks modulares como lo son React y Django, por otro lado 
                    ademas tengo experiencia utilizando Unity para hacer desarrollo de videojuegos.
                </ParaText>
            </motion.div>
        </FlexContainer>


        

    </PaddingContainer>
  )
}

export default MySkills