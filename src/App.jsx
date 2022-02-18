import Dropdown from './Components/Dropdown';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import { sliderData } from './Data/sliderData';
import GlobalStyles from './GlobalStyles';

const App = () => {
   return (
      <>
         <GlobalStyles />
         <Navbar />
         <Dropdown />
         <Hero slides={sliderData} />
      </>
   );
};

export default App;
