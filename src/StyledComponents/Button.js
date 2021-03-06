import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
   background: ${({ primary }) => (primary ? '#000d1a' : '#cd853f')};
   white-space: nowrap;
   border: none;
   outline: none;
   min-width: 100px;
   max-width: 200px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
   color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
   font-size: ${({ big }) => (big ? '20px' : '14px')};

   &:hover {
      transform: translateY(-2px);
   }
`;
