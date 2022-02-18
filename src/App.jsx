import { useState } from 'react';
import Dropdown from './Components/Dropdown';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import { sliderData } from './Data/sliderData';
import GlobalStyles from './GlobalStyles';

const App = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <GlobalStyles />
         <Navbar toggle={toggle} />
         <Dropdown toggle={toggle} isOpen={isOpen} />
         <Hero slides={sliderData} />
      </>
   );
};

export default App;
