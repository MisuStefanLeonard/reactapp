import { Link } from "react-router-dom";
import "./CssFiles/HeaderNav.css";

interface NavigationProps{
  LeftItems:string[];
  LeftRedLinks:string[];
  rightItemsRedLinks:string[];
  rightItemsNames:string[];
  rightItemsDir:string;
  rightItemsAlts:string[];
}



function HeaderNav({LeftItems , LeftRedLinks, rightItemsRedLinks , rightItemsNames , rightItemsDir , rightItemsAlts}: NavigationProps) {

  return (
    <>
    <header className="wrapheader">
        <nav className="nav-style">
          <ul className="nav-ul">
            {LeftItems.map((item, index) => (
              <li className="nav-li-left" key={item}>
                <Link to={LeftRedLinks[index]} className="nav-a">
                  {item}
                </Link>
              </li>
            ))}
            <div className="images-container">
              {rightItemsNames.map((item, index) => (
                <li className="nav2-li-right" key={item}>
                  <Link
                    className="nav2-a"
                    to={rightItemsRedLinks[index]}
                  >
                    <img
                      className="imgstyle"
                      src={rightItemsDir + rightItemsNames[index]}
                      alt={rightItemsAlts[index]}
                    />
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default HeaderNav;
