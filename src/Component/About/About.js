import React from 'react'
import './About.scss'
import resume from '../../Pdf/Yogendra-Meravi.pdf'
export default function About1() {
  return (
    <>
       <div className='container-fluid ' id="about-c-f">
            <div className='container' id="about-c"> 
                <div className='col' id="about-wrap">
                    <h3>About Us</h3>
                    <p>I am Yogendra Maravi. I am from Bhopal MP. I have done my schooling from JDES Hr. Sec. School. I have done my UG in Software Development from IGNTU Amarkantak MP. currently I am pursuing Master in Computer Application(MCA) from IGNTU, Amarakantak. </p>
                    <p>I am always excited to learn new things. I have skills and knowledge in development, problem solving. These things make my mind fresh and mood happy and that's the reason I do development.</p>
                    <p>Basically I am full stack developer I have done some freelancing projects and also some personal projects from scratch, which you can see in Github page. I've done some projects for companies like Beangate Academy. I've done my intership in both offline and online site medium. This has given me a holistic idea of development. To put everything in a nutshell I'm a kind of person who wants to keep evolving, sharpening his skills and becoming a better person.</p>
                    <a href={resume}><button className='btn btn-info'>My Resume</button></a>
                </div>
            </div>
       </div>
    </>
  )
}
