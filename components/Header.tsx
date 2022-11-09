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

const NonClickableButton = (props) => (
  <button style={{ border: "1px solid #eee", padding: "0.5rem 1rem" }}>
    {props.children}
  </button>
)

const skills = ["HTML5", 'SCSS', 'TailwindCSS', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'React Native', 'NextJS', 'NodeJS',
'ExpressJS' ,"MeteorJS", "APIs (REST and GraphQL)", "Gatsby","Netlify CMS", "Wordpress", 'AWS', 'MongoDB', 'Postgres', 'SQL', 'Firebase', 'PHP', 'Figma', "Sketch", "Adobe XD" ];

export default function Header() {

    const [screenwidthsmall, isScreenSmall] = React.useState(typeof window !== "undefined" && window.innerWidth < 1200);


      React.useEffect(function mount() {
        if(typeof window !== "undefined"){
          function onAdjust() {
            isScreenSmall(window.innerWidth < 1200);
          }
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
                  <div className='flex' style={{ flexDirection: 'column' }}>
                    <img
                    src="/images/oludotunlonge.jpg"
                    alt="oludotunlonge"
                    style={{ marginTop: "4em", objectFit: "cover", height: "225px", width: "225px", borderRadius: "300px" }}
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
                    <div style={{ padding: "1em 5% 1em 5%" }}>
                        <button>Full-Stack JavaScript Software Engineer</button>
                        <div className="flex-full about-text">
                              <h5 className="gray">Introduction</h5>
                              <h1 className="white">Hello, I&#39;m Oludotun Longe</h1>
                              <p className="white">A Creative Thinker, Innovative Programmer and Internet Entrepreneur striving to make the world a more unified and connected place. I am adept in design, development, testing and maintenance of JavaScript based Software Systems.
                              I am able to effectively self-manage during independent projects, as well as collaborate as part of a productive team. I have over four years worth of professional experience having worked at two startups, two web development agencies and as a freelancer. </p>
                              <h5 className="gray">More</h5>

                              <ul className="flex" style={styles.ul}>
                                <li style={ styles.li }>
                                      <a href="https://www.linkedin.com/in/oludotunlonge" target="_blank" rel="noreferrer">
                                          <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                                      </a>
                                  </li>
                                  <li style={ styles.li }>
                                      <a href="https://github.com/dotunlonge" target="_blank" rel="noreferrer">
                                          <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                                      </a>
                                  </li>
                                    <li>
                                    <button
                                    style={ styles.button.shared }
                                    onClick={()=>window.open("/files/cover-letter.pdf", "_blank")}>
                                    Cover Letter</button></li>
                                    <li>
                                    <button
                                    style={ styles.button.shared}
                                    onClick={()=>window.open("/files/resume.pdf", "_blank")}>Resume</button></li>
                                    <li>
                                    <button
                                    style={ styles.button.letschat }
                                    onClick={()=>window.open("mailto:oludotunlonge@gmail.com", "_blank")}>Let's Chat 😊 </button></li>
                              </ul>

                              <h5 className="gray">My Ventures</h5>
                              <ul className="flex" style={styles.ul}>
                                <li>
                                  <button style={ styles.button.shared } onClick={()=>window.open("https://dopeworm.com", "_blank")}>Dopeworm</button>
                                </li>
                                <li >
                                  <button style={ styles.button.shared } onClick={()=>window.open("https://fitsbydope.com", "_blank")}>Fits By Dope</button>
                                </li>
                              </ul>
                              <h5 className="gray">Projects I've Worked On</h5>
                              <ul className="flex" style={styles.ul}>
                                <li>
                                  <button style={ styles.button.shared } onClick={()=>window.open("https://fireflies.ai", "_blank")}>Fireflies.ai</button>
                                </li>
                                <li >
                                  <button style={ styles.button.shared } onClick={()=>window.open("https://hirebay.netlify.com", "_blank")}>Hirebay</button>
                                </li>
                                <li>
                                  <button style={ styles.button.shared } onClick={()=>window.open("https://investivgroup.com", "_blank")}>Investiv Group</button>
                                </li>
                                <li >
                                  <button style={ styles.button.shared } onClick={()=>window.open("https://swipemax.com/products/linda-ikeji-tv", "_blank")}>Linda Ikeji TV</button>
                                </li>
                              </ul>
                              { screenwidthsmall===true && <div>

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
                              </div>}
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}
