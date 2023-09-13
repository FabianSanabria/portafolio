import React from 'react';
import {motion} from 'framer-motion';
import {
    PaddingContainer,
    FlexContainer,

} from '../../styles/Global.styled'

import {AiOutlineClose} from 'react-icons/ai';
import { navLinks } from '../../utils/Data';
import { MenuIcon, NavMenuContainer,MenuItem } from '../../styles/NavBar.styled';
import { slideInLeft } from '../../utils/Variants';
const NavMenu = ({setOpenMenu}) => {
  return (
    /**close button */
    <NavMenuContainer as={motion.div} variants={slideInLeft} initial='hidden' animate='visible' exit='exit'>
        <PaddingContainer left='5%' right='5%' top='1.5rem'>
            <FlexContainer justify='flex-end' responsiveFlex>
                <MenuIcon  as={motion.a} whileHover={{scale:1.2}} onClick={() =>setOpenMenu(false)}>
                    <AiOutlineClose/>
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>

        /** items */
        <PaddingContainer top='8%' >
            <FlexContainer direction='column' align='center' responsiveFlex>
                
                {navLinks.map((link) => (
                <MenuItem href={`#${link.href}`} as={motion.a} whileHover={{scale:1.2}} onClick={() =>setOpenMenu(false)}>{`${link.name}`}</MenuItem>

                ))}

                
            </FlexContainer>

        </PaddingContainer>



    </NavMenuContainer>

    
  )
}

export default NavMenu