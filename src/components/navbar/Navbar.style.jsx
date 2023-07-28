import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navstyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  /* width: 100%; */
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  transition: all 1s;

  background: ${({ theme }) => theme.colors.navBgColor};
  
  @media (max-width:${({ theme }) => theme.screens.lg}) {
    
  }
`;

export const Logo = styled(NavLink)`
  color: ${({ theme }) => theme.colors.navTextColor};
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  transition: all 0.8s;
  :hover{
  color: ${({ theme }) => theme.colors.navTextHoverColor};
}
`
export const HamburgerIcon = styled.div`
display: none;
cursor: pointer;
font-size: 2rem;
@media (max-width: ${({ theme }) => theme.screens.lg}) {
display: block;
  
}
`

export const Menu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  transition: all 1s;
  max-height: ${({ showmenu }) => showmenu ? "330px" : "0px"};
}
`

export const MenuLink = styled(NavLink)`
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.navTextColor};
    transition: all 0.2s ease-in 0s;
    font-size: 1.5rem;
    font-weight:bold;
    :hover{
      color: ${({ theme }) => theme.colors.navTextHoverColor};
      text-shadow: 0px 0px 2px #152424
    }
    &.active {
    text-decoration: underline;
  }
    `;





export default Navstyled;

