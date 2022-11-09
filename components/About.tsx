import React from "react";
import Image, { StaticImageData } from "next/image";


type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}

export default function About() {
    return (
        <section id="about" className="dark-bg">
          <div className="flex partners justify-space">
                <img src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <img src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <img src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <img src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <img src="/images/partners/telefy.png" height={45} width={180} alt="telefy" />
          </div>
        </section>
    )
}
