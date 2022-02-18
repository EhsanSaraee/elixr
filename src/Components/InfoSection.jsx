import styled from 'styled-components';
import { Button } from '../StyledComponents/Button';

const InfoSection = () => {
   return (
      <Section>
         <Container>
            <ColumnLeft>
               <h1>heading</h1>
               <p>paragraph</p>
               <p>paragraph</p>
               <Button to="/houses">Label</Button>
            </ColumnLeft>
            <ColumnRight>
               <img src="" alt="house" />
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
