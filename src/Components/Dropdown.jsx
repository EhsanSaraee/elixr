import styled from 'styled-components';
import { menuData } from '../Data/menuData';
import { Button } from '../StyledComponents/Button';

const Dropdown = () => {
   return (
      <DropdownContainer>
         <Icon>
            <CloseIcon />
         </Icon>
         <DropdownWrapper>
            <DropdownMenu>
               {menuData?.map(({ link, title }, index) => (
                  <DropdownLink to={link} key={index}>
                     {title}
                  </DropdownLink>
               ))}
            </DropdownMenu>
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
   top: 0;
   left: 0;
   z-index: 100;
   width: 100%;
   height: 100%;
   background: #cd853f;
   display: grid;
   align-items: center;
   opacity: 1;
   transition: 0.3s ease-in-out;
`;

export default Dropdown;
