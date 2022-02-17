import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuLinks } from '../Data/menuLinks';

const Navbar = () => {
   return (
      <Nav>
         <Logo to="/">ELIXR</Logo>
         <MenuBars />
         <NavMenu>
            {menuLinks?.map((item, index) => (
               <NavMenuLink key={index} to={item.link}>
                  {item.title}
               </NavMenuLink>
            ))}
         </NavMenu>
      </Nav>
   );
};

const Nav = styled.nav`
   
`;

const Logo = styled(Link)`
   
`;

const MenuBars = styled.i``;

const NavMenu = styled.div``;

const NavMenuLink = styled(Link)``;

export default Navbar;
