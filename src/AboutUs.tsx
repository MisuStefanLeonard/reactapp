import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
import "./components/CssFiles/Footer.css";
import "./components/CssFiles/HeaderNav.css";

function AboutUs() {
  const navItems = ["MAIN PAGE", "OUR SHOP", "ABOUT US"];
  const redirectionLinks = ["index", "shop", "aboutus"];

  const navImagesDIR = "./src/images/";
  const navRedirectionLinksImages = ["shopcart", "profile"];
  const navImgNames = ["shopcart.jpeg", "usermain.png"];
  const navAltImages = [
    "shopping card",
    "user photo.click to go to user settings ",
  ];
  return (
    <>
      <HeaderNav
        LeftItems={navItems}
        LeftRedLinks={redirectionLinks}
        rightItemsNames={navImgNames}
        rightItemsRedLinks={navRedirectionLinksImages}
        rightItemsAlts={navAltImages}
        rightItemsDir={navImagesDIR}
      ></HeaderNav>
      <Footer/>
    </>
  );
}

export default AboutUs;
