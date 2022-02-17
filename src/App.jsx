import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import { sliderData } from './Data/sliderData';
import GlobalStyles from './GlobalStyles';

const App = () => {
   return (
      <>
         <GlobalStyles />
         <Navbar />
         <Hero slides={sliderData} />
      </>
   );
};

export default App;
