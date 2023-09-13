import React from 'react'
import {motion} from 'framer-motion';

import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from '../../styles/Global.styled'
import { FaGithub } from 'react-icons/fa'
import Project1 from '../../assets/Project1.png'
import { fadeInLeftVariant,fadeInRightVariant } from '../../utils/Variants'
import { TechStackCard,ProjectImage, ProjectImageContainer } from '../../styles/MyProject.styled'
const Project = ({data}) => { 
  return (

    <FlexContainer fullWidthChild
        direction={data.reverse ? 'row-reverse' : false} 
    >
        {/** Left section project content */}
        <motion.div 
            variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant} initial='hidden' whileInView='visible'
            >
            <FlexContainer align='center' gap='1rem'>
                <Heading as='h3' size='h3' bottom='1rem'>
                    {data.project_name}
                </Heading>
                
            </FlexContainer>
            <PaddingContainer top='1rem'>
                <FlexContainer gap='1.5rem'>
                    {data.tech_stack.map((stack) => (
                        <TechStackCard>
                            {stack}
                        </TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>

            <ParaText top='1.5rem' bottom='2rem'>
                {data.project_desc}
            </ParaText>
            <a href={data.project_url}><Button>Abrir Website</Button></a> 
           </motion.div>
        {/** right section project content */}
        <ProjectImageContainer as={motion.div} variants={data.reverse ? fadeInLeftVariant: fadeInRightVariant} initial='hidden'
        justify={data.reverse ? 'flex-start' : 'flex-end'} whileInView='visible'>
            <ProjectImage src={data.project_img} alt={data.project_name}/> 

        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project