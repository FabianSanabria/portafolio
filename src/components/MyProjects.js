import React from 'react';
import {motion} from 'framer-motion';
import {
  PaddingContainer,
  Heading,
  BlueText,
} from '../styles/Global.styled';

import { projectDetails } from '../utils/Data';
import Project from './layouts/Project';
import { fadeInTopVariant } from '../utils/Variants';
const MyProjects = () => {
  return (
      <PaddingContainer
        id='Projects'
        top='5%'
        bottom='5%'
        responsiveTop='20%'
        responsiveLeft='1rem'
        responsiveRight='1rem'  
      >
          <Heading as={motion.h4} size='h4' variants={fadeInTopVariant} initial='hidden' whileInView='visible'>
              Proyectos
          </Heading>
          <Heading as={motion.h2} size='h2' variants={fadeInTopVariant} initial='hidden' whileInView='visible'>
              Mis <BlueText>Proyectos</BlueText>
          </Heading>
          {projectDetails.map((project) => 
            <PaddingContainer key={project.id} top='5rem' bottom='5rem'>
                  <Project data={project}/>
              </PaddingContainer>
          )}
      </PaddingContainer>
    )
}

export default MyProjects