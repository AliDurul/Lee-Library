import React, { useContext, useState } from 'react'
import Navstyled, {Logo, HamburgerIcon, Menu, MenuLink } from './Navbar.style'
import AuthContext from '../../context/AuthContext'
import { menuIcon } from '../../styles/icons'


const Navbar = () => {

  const { user, setUser } = useContext(AuthContext)
const [toggle, setToggle] = useState(true)

  return (
    <Navstyled >
      <Logo to={"/"}>
        Lee Library
      </Logo>
      <HamburgerIcon  onClick={()=>setToggle(!toggle)}>
        {menuIcon}
      </HamburgerIcon>

      <Menu showmenu={toggle}>
        <MenuLink onClick={()=>setToggle(false)}to="/" >HOME</MenuLink>
        <MenuLink onClick={()=>setToggle(false)} to="about">ABOUT</MenuLink>
        {!user && <MenuLink onClick={()=>setToggle(false)} to="register">REGISTER</MenuLink>}
        {
          user ? <MenuLink  to="login" onClick={() => setUser("")}>LOGOUT</MenuLink> : <MenuLink onClick={()=>setToggle(false)} to="login">LOGIN</MenuLink>
        }
      </Menu>
    </Navstyled>
  )
}

export default Navbar