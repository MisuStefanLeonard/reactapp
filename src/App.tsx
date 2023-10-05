
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";
import MainContent from "./components/MainContent";
import AboutUs from "./AboutUs";
import Shop from "./components/Shop";

function App() {
  // ---- nav items ----
  // ---- left items ----
  const navItems = ["MAIN PAGE", "OUR SHOP", "ABOUT US"];
  const redirectionLinks = ["index", "shop", "aboutus"];
  // ---- right items ----
  const navImagesDIR = "./src/images/";
  const navRedirectionLinksImages = ["shopcart", "profile"];
  const navImgNames = ["shopcart.jpeg", "usermain.png"];
  const navAltImages = [
    "shopping card",
    "user photo.click to go to user settings ",
  ];
  const mainImgNames = ["TeeShirt1.png", "TeeShirt2.png", "TeeShirt4.png"];
  const mainTitles = ["LATEST RELEASE", "NEW MODELS", "DARK MODELS"];
  const mainImgRedLinks = ["shop", "shop", "shop"];
  return (
    <Router>
      <HeaderNav
        LeftItems={navItems}
        LeftRedLinks={redirectionLinks}
        rightItemsNames={navImgNames}
        rightItemsRedLinks={navRedirectionLinksImages}
        rightItemsAlts={navAltImages}
        rightItemsDir={navImagesDIR}
      ></HeaderNav>
      <MainContent
        mainImgNames={mainImgNames}
        mainImgRedLinks={mainImgRedLinks}
        heading="Acid Tees"
        titles={mainTitles}
        imgDir={navImagesDIR}
      ></MainContent>
      <Footer/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
