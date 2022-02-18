import styled from 'styled-components';
import { menuData } from '../Data/menuData';
import { Button } from '../StyledComponents/Button';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dropdown = ({ toggle, isOpen }) => {
   return (
      <DropdownContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>
         <DropdownWrapper>
            <DropDownMenu>
               {menuData?.map(({ link, title }, index) => (
                  <DropdownLink to={link} key={index}>
                     {title}
                  </DropdownLink>
               ))}
            </DropDownMenu>
            <BtnWrap>
               <Button primary="true" round="true" big="true" to="contact">
                  Contact Us
               </Button>
            </BtnWrap>
         </DropdownWrapper>
      </DropdownContainer>
   );
};

const DropdownContainer = styled.section`
   position: fixed;
   top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
   left: 0;
   z-index: 100;
   width: 100%;
   height: 100%;
   background: #cd853f;
   display: grid;
   align-items: center;
   opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
   transition: 0.3s ease-in-out;
`;

const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   font-size: 2rem;
   background: transparent;
   cursor: pointer;
   outline: none;
`;

const CloseIcon = styled(FaTimes)`
   color: #000d1a;
`;

const DropdownWrapper = styled.div``;

const DropDownMenu = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(4, 80px);
   text-align: center;
   margin-bottom: 4rem;

   @media screen and (max-width: 480px) {
      grid-template-rows: repeat(4, 60px);
   }
`;

const DropdownLink = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   font-size: 1.5rem;
   text-decoration: none;
   list-style: none;
   cursor: pointer;
   transition: 0.2s ease-in-out;

   &:hover {
      color: #000d1a;
   }
`;

const BtnWrap = styled.div`
   display: flex;
   justify-content: center;
`;

export default Dropdown;
