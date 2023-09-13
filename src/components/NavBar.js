import {React, useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
        PaddingContainer,
        Container,
        FlexContainer,
} from '../styles/Global.styled';

import {GiHamburgerMenu} from 'react-icons/gi';
import { Theme } from '../utils/Theme';
import { NavBarContainer, Logo,MenuIcon } from '../styles/NavBar.styled';
import NavMenu from './layouts/NavMenu';
const NavBar = () => {

    const [openMenu,setOpenMenu] = useState(false);
    const [sticky,setSticky] = useState(false);

    useEffect(() => {
        // onScroll Function
        const onScroll = () => {
            window.scrollY > 50 ? setSticky(true): setSticky(false);
        }
        window.addEventListener('scroll',onScroll);
        return () => window.removeEventListener('scroll',onscroll);
    },[])
  return (
    <NavBarContainer bgColor={sticky ? Theme.colors.primary : 'transparent'}>
        <PaddingContainer top='1.2rem' bottom='1.2rem' resposiveLeft='1rem' responsiveRigth='1rem'>
            <Container>
                <FlexContainer justify='space-between' responsiveFlex>
                    {/** Left Logo */}
                    <Logo>
                        Fabian Sanabria A.
                    </Logo>
                    <MenuIcon as={motion.a} whileHover={{scale: 1.2}}onClick={() => {setOpenMenu(true)}}>
                        <GiHamburgerMenu/>
                    </MenuIcon>
                </FlexContainer>
            </Container>
            
            <AnimatePresence>
                {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}

            </AnimatePresence>
        </PaddingContainer>
    </NavBarContainer>
  )
}

export default NavBar