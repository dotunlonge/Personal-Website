import React from "react";
import Image from "next/image";

const styles = {
  li: {
    height: "50px", width: "50px"
  },
  button: {
    shared: {
      marginRight: "25px"
    },
    letschat: {
      'textDecoration': 'none',
      'background': 'unset',
      'color': 'white',
      'border': '1px dashed #eee',
      'cursor': 'pointer'
    },
    skill: {
      border: '1px solid rgb(238, 238, 238)',
      borderRadius: '50px',
      padding: '0.5rem 1rem',
      marginRight: '0.75em',
      background: 'transparent',
      color: 'white',
      fontWeight: 400,
      fontSize: "10px"
    }
  },
  ul: {
    listStyleType: "none",
    padding: 0, width: "auto",
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
}

const skills = [ 'JavaScript', 'TypeScript', 'React', 'Redux', 'Zustand', 'React Query', 'React Native', 'NextJS', 'NodeJS',
'ExpressJS', "RabbitMQ", "Redis" ,"MeteorJS", "Docker", "Blockchain", "APIs (REST and GraphQL)", "GRPC", "Gatsby","Netlify CMS", "Wordpress", 'AWS', 'MongoDB', 'Postgres', 'SQL', 'Firebase', 'PHP', 'Figma', "HTML5", 'SCSS', 'TailwindCSS', 'CSS3' ];

export default function Header() {

    const [screenwidthsmall, isScreenSmall] = React.useState(typeof window !== "undefined" && window.innerWidth < 1200);

    function onAdjust() {
      if(typeof window !== "undefined"){
        isScreenSmall(window.innerWidth < 1200);
      }
    }

      React.useEffect(function mount() {
        if(typeof window !== "undefined"){
          window.addEventListener("resize", onAdjust);
          return function unMount() {
            window.removeEventListener("resize", onAdjust);
          };
        }
      });

    return (
        <header>
            <div className="header flex dark-bg">
                <div className="flex" style={{ margin: "auto", alignItems: "flex-start" }}>
                  <div className='flex' style={{ flexDirection: 'column', width: "100%" }}>
                    <img
                    src="/images/oludotunlonge.jpg"
                    alt="oludotunlonge"
                    style={{ margin: "auto", marginTop: "4em", objectFit: "cover", height: "225px", width: "225px", borderRadius: "300px" }}
                    />
                    <br/>
                    {
                      screenwidthsmall === false && <div>
                      <h5 className="gray">Skills</h5>
                      <div className="flex" style={{ flexWrap: "wrap",flexDirection: 'row', justifyContent: 'flex-start', margin: '1em 0' }}>
                      {
                        skills.map((skill,i) => {
                          return (<button style={styles.button.skill} key={i}>
                            {skill}
                          </button>)
                        })
                      }
                      </div>
                      </div>
                    }
                    </div>
                    <div style={{ padding: screenwidthsmall ? "1em 2.5% 1em 2.5%":"1em 5% 1em 5%" }}>
                        <button>Full-Stack Software Engineer</button>
                        <div className="flex-full about-text">
                              <h5 className="gray">Introduction</h5>
                              <h1 className="white">Hello, I&#39;m Oludotun Longe</h1>
                              <p className="white">As a forward-thinking Software Engineer and Internet Entrepreneur, I am driven by the vision of a more interconnected and harmonious world through technology. Specializing in JavaScript-based software systems, my expertise spans the design, development, testing, and maintenance of innovative solutions. With over 7 years of professional experience, my journey has seen significant contributions to four startups and two web development agencies, alongside impactful freelance projects.
<br/>
My portfolio showcases my ability to lead in the creation of web applications, from concept to deployment, with a particular focus on enhancing user engagement through sophisticated UX/UI design and leveraging cutting-edge technologies like AI, ML, and web3. <br/>
Adept at both independent management and collaborative teamwork, I thrive in environments that challenge the status quo and require creative problem-solving. My work is characterized by a relentless pursuit of excellence and a commitment to developing technologies that make a difference.</p>

                              <ul className="flex" style={styles.ul as React.CSSProperties}>

                                <li style={ styles.li as React.CSSProperties }>
                                      <a href="https://www.linkedin.com/in/oludotunlonge" target="_blank" rel="noreferrer">
                                          <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                                      </a>
                                  </li>

                                  <li style={ styles.li as React.CSSProperties }>
                                      <a href="https://github.com/dotunlonge" target="_blank" rel="noreferrer">
                                          <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                                      </a>
                                  </li>

                                    <li>
                                    <button
                                    style={ styles.button.shared as React.CSSProperties}
                                    onClick={()=>window.open("/files/resume.pdf", "_blank")}>My Resume</button></li>
                                    
                                    <li>                                    
                                    <button
                                    style={ styles.button.shared as React.CSSProperties}
                                    onClick={()=>window.open("https://upwork.com/freelancers/dotunlonge", "_blank")}>Chat Via Upwork </button>
                                    </li>

                                    <li>
                                    <button
                                    style={ styles.button.letschat as React.CSSProperties}
                                    onClick={()=>window.open("mailto:oludotunlonge@gmail.com", "_blank")}> Contact Me! 😊 </button></li>
                              
                              </ul>

                              <h5 className="gray">My Ventures</h5>
                              <ul className="flex" style={styles.ul as React.CSSProperties}>
                                <li>
                                  <button style={ styles.button.shared as React.CSSProperties } onClick={()=>window.open("https://beatstars.com/dopewormbeats", "_blank")}>Dopeworm</button>
                                </li>
                                <li >
                                  <button style={ styles.button.shared  as React.CSSProperties} onClick={()=>window.open("https://www.fitsbydope.com", "_blank")}>Fits By Dope</button>
                                </li>
                              </ul>
                              <h5 className="gray">My Portfolio</h5>
                              <ul className="flex" style={styles.ul as React.CSSProperties}>
                                       
                                <li>
                                  <button style={ styles.button.shared as React.CSSProperties } onClick={()=>window.open("https://www.getshield.xyz", "_blank")}>Shield</button>
                                </li>
                                
                                <li>
                                  <button style={ styles.button.shared as React.CSSProperties } onClick={()=>window.open("https://www.fireflies.ai", "_blank")}>Fireflies.ai</button>
                                </li>

                                <li>
                                  <button style={ styles.button.shared as React.CSSProperties } onClick={()=>window.open("https://versusrx.com", "_blank")}>Versus</button>
                                </li>
                         
                                <li >
                                  <button style={ styles.button.shared as React.CSSProperties } onClick={()=>window.open("https://hirebay.netlify.com", "_blank")}>Hirebay</button>
                                </li>
                                <li>
                                  <button style={ styles.button.shared  as React.CSSProperties} onClick={()=>window.open("https://www.investivgroup.com", "_blank")}>Investiv Group</button>
                                </li>
                                <li >
                                  <button style={ styles.button.shared as React.CSSProperties } onClick={()=>window.open("https://swipemax.com/products/linda-ikeji-tv", "_blank")}>Linda Ikeji TV</button>
                                </li>
                                <li >
                                  <button style={ styles.button.shared as React.CSSProperties } onClick={()=>window.open("https://nestsafari.netlify.app/", "_blank")}>NestSafari</button>
                                </li>
                              </ul>
                              { screenwidthsmall===true && <div>

                                <h5 className="gray">Skills</h5>
                                <div className="flex" style={{ flexWrap: "wrap",flexDirection: 'row', justifyContent: 'flex-start', margin: '1em 0' }}>
                                {
                                  skills.map((skill,i) => {
                                    return (<button style={styles.button.skill as React.CSSProperties} key={i}>
                                      {skill}
                                    </button>)
                                  })
                                }
                                </div>
                              </div>}
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}
