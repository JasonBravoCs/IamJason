/*React is a JavaScript library for building user interfaces. It is declarative, efficient,
 and flexible. React makes it easy to create interactive UIs by using a component-based approach.*/
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Skills from "./components/skills/Skills";

const App = () => {
  
  return (
    <div
    >
      
      <Intro />
      <About />
      <Skills />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
