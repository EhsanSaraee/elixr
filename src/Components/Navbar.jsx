import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { Button } from '../StyledComponents/Button';
import { FaBars } from 'react-icons/fa';
import { menuData } from '../Data/menuData';

const Navbar = ({ toggle }) => {
   return (
      <Nav>
         <Logo to="/">ELIXR</Logo>
         <MenuBars onClick={toggle} />
         <NavMenu>
            {menuData?.map((item, index) => (
               <NavMenuLink key={index} to={item.link}>
                  {item.title}
               </NavMenuLink>
            ))}
         </NavMenu>
         <NavBtn>
            <Button primary="true" to="/contact">
               Contact Us
            </Button>
         </NavBtn>
      </Nav>
   );
};

const Nav = styled.nav`
   height: 60px;
   display: flex;
   justify-content: space-between;
   padding: 1rem 2rem;
   z-index: 10;
   position: fixed;
   width: 100%;
   color: #fff;
`;

const NavLink = css`
   color: #fff;
   display: flex;
   align-items: center;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   text-decoration: none;
`;

const Logo = styled(Link)`
   ${NavLink}
   font-style: italic;
`;

const MenuBars = styled(FaBars)`
   display: none;

   @media screen and (max-width: 768px) {
      display: block;
      width: 25px;
      height: 25px;
      cursor: pointer;
   }
`;

const NavMenu = styled.div`
   display: flex;
   align-items: center;
   margin-left: -48px;

   @media screen and (max-width: 768px) {
      display: none;
   }
`;

const NavMenuLink = styled(Link)`
   ${NavLink}
`;

const NavBtn = styled.div`
   display: flex;
   align-items: center;
   margin-right: 24px;

   @media screen and (max-width: 768px) {
      display: none;
   }
`;

export default Navbar;
