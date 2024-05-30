import "./HeroSection.css";


export default function HeroSection(){
    return (
        <div className="herosection">
           <div className="left">
         
         <div className="herosectionh1">
            <h1>I'm <span>BALASAI!</span></h1>
         </div>
         <div className="stack">
            <h1>Software Development Engineer</h1>
         </div>
         <div className="para2">
            <p>I hold a Bachelor of Technology degree specializing in Computer Science and Engineering from BIET, HYDERABAD.  With expertise in various Technologies like HTML, CSS3, JavaScript, jQuery, Ajax, ReactJS, PHP, POSTGRESQL, BootStrap5 and Java , I am well-equipped to excel in a software developer role.</p>
         </div>
           </div>
           {/* <div className="right">
          <img src={myimg} alt="" />
           </div> */}
           
        </div>
    )
}