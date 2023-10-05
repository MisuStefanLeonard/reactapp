import './CssFiles/Footer.css'


function Footer(){
return (
    <>
    <hr className="footer-hr"/>
    <footer className="footer-container"> 
        <div className="footer-div-right">
            <p className="footer-writing">
                CONTACT INFO: +40 744 881 992
                <br />
                acidtees@gmail.ro
            </p>
        </div>
        <div className="footer-div">
            <p className='copyright'>&copy; All rights reserved</p>
            <p className='writing'>Acid Tees</p>
        </div>
</footer>
    </>
    
);
}

export default Footer;