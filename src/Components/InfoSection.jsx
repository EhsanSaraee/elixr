import styled from 'styled-components';
import { Button } from '../StyledComponents/Button';

const InfoSection = ({
   heading,
   paragraphOne,
   paragraphTwo,
   buttonLabel,
   image,
   reverse,
}) => {
   return (
      <Section>
         <Container>
            <ColumnLeft>
               <h1>{heading}</h1>
               <p>{paragraphOne}</p>
               <p>{paragraphTwo}</p>
               <Button to="/houses">{buttonLabel}</Button>
            </ColumnLeft>
            <ColumnRight reverse={reverse}>
               <img src={image} alt="house" />
            </ColumnRight>
         </Container>
      </Section>
   );
};

const Section = styled.section``;

const Container = styled.div``;

const ColumnLeft = styled.div``;

const ColumnRight = styled.div``;

export default InfoSection;
