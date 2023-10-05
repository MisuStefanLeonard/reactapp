import './CssFiles/MainContent.css'

interface MainContentProps{
    mainImgNames:string[];
    mainImgRedLinks:string[];
    heading:string;
    imgDir:string;
    titles: string[];
}


function MainContent({mainImgNames , mainImgRedLinks , titles , heading , imgDir}: MainContentProps) {
  return (
    <>
      <div className="website-name-container">
        <h1 className="bigger">{heading}</h1>
      </div>
      <section className="section-container">
        {mainImgNames.map((item,index) => (
          <>
           <div className="contain-img">
            <a className="img-a" href={mainImgRedLinks[index]} key={item}>
                <img 
                className="img-tee"
                src={imgDir+mainImgNames[index]}
                alt="tee shirt with 3d visual efect"
                />
            </a>
            <div className="center-text">
                <h3 className="img-h3" key={item}>{titles[index]}</h3>
            </div>
            </div>
          </>
          ))}
        </section>

    </>
  );
}

export default MainContent;
