import "./App.css";
import { RiMenuFoldFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useState } from "react";
import Service from "./componets/Service";

import { UilEdit, UilVideoQuestion, UilPalette,UilServerConnection, UilApps, UilCube, UilMobileAndroid, UilEnvelopeMinus, UilInstagram } from '@iconscout/react-unicons'


function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" bg-black">
        {/* TOP SECTION  */}

        <div className="w-full h-screen bg-black">
          <div
            className={`bg-gray-900 sm:hidden h-screen w-[220px] ${
              open ? "left-0" : "-left-56"
            } transi  fixed z-30 transition-all `}
          >
            <h1
              className="text-orange-600 text-2xl font-semibold absolute right-4 top-2"
              onClick={() => setOpen(!open)}
            >
              X
            </h1>
            <ul className=" flex flex-col mx-12  py-12 justify-center gap-[2vw] text-gray-400 font-semibold text-sm">
              <li className="hover:text-orange-500 transition-all p-1 cursor-pointer">
                HOME
              </li>
              <li className="hover:text-orange-500 transition-all p-1 cursor-pointer">
                ABOUT ME
              </li>
              <li className="hover:text-orange-500 transition-all p-1 cursor-pointer">
                SKILLS
              </li>
             
              <li className="hover:text-orange-500 transition-all p-1 cursor-pointer">
                SERVICES
              </li>
              <li className="hover:text-orange-500 transition-all p-1 cursor-pointer">
                CONTACT
              </li>
            </ul>
          </div>

          <nav className="w-10/12 flex items-center justify-between px-8 py-8 mx-auto ">
            <img src="./shake.svg" className="w-12" />
            <ul className=" hidden sm:flex  items-center justify-center gap-[2vw] text-gray-400 font-semibold text-sm">
              <li className="hover:text-orange-500 transition-all p-1 cursor-pointer">
                HOME
              </li>
              <li className="hover:text-orange-500 transition-all p-1 cursor-pointer">
                ABOUT ME
              </li>
              <li className="hover:text-orange-500 transition-all p-1 cursor-pointer">
                SKILLS
              </li>
           
              <li className="hover:text-orange-500 transition-all p-1 cursor-pointer">
                SERVICES
              </li>
              <li className="hover:text-orange-500 transition-all p-1 cursor-pointer">
                CONTACT
              </li>
            </ul>
            <h1
              className="text-orange-600 font-bold text-2xl"
              onClick={() => setOpen(true)}
            >
              <RiMenuFoldFill />
            </h1>
          </nav>

          <div className="flex flex-col items-start mt-24 ml-[12vw] ">
            <h2
              className="text-gray-500 text-[6vw] sm:text-[4vw] -mb-1 sm:mb-0 font-bold"
              style={{
                fontFamily: "fantasy",
              }}
            >
              {" "}
              I"m a
            </h2>
            <h1
              className="text-gray-300 leading-[8.5vw] sm:leading-[6.6vw] text-[11vw] sm:text-[8vw] "
              style={{
                fontFamily: "sans-serif",
                fontWeight: 950,
                letterSpacing: "-3px",
              }}
            >
              FRONT-END <br />
              DEVELOPER
              <div className="inline-block w-5 h-5 bg-orange-600 ml-[2vw] sm:ml-[19px]"></div>
            </h1>
            <button className="bg-orange-600 my-4 px-2 ml-2  text-white font-semibold text-sm cursor-pointer">
              CONTACT ME
            </button>
          </div>
        </div>

        {/* ABOUT SECTION  */}
        <div className="bg-[#111111] min-h-screen w-full">
          <div className="relative pt-">
            <h1 className="text-[#171515] text-8xl font-bold text-center p-4 absolute z-0 mt-8  mx-auto -translate-x-1/2 left-1/2 top-4">
              About
            </h1>

            <h1 className="text-4xl text-orange-600 text-center font-bold p-8 mt-16 z-10 absolute left-1/2 -translate-x-1/2">
              About Me
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center pb-8  gap-6 pt-48">
            <div className="div1  ">
              <img src="/suraj.jpg" className="sm:w-[20vw]" />
            </div>
            <div className="div2 sm:w-[38vw] px-12 sm:p-1 flex items-start justify-center flex-col">
              <div className="name">
                <h3 className="text-white text-2xl mb-3">
                  {" "}
                  My name is{" "}
                  <strong className="text-orange-600">
                    Suraj Ahirwar
                  </strong>{" "}
                </h3>
                <p className="text-gray-300 ">
                  I'm professional front-end developer. and I am very passionate
                  and dedicated to my work. I have acquired the skills and
                  knowledge neccessay to make your project a success. I enjoy
                  every step of developing process form discussion and
                  collaboration to concept and execution.{" "}
                </p>
              </div>
              <div className="contact grid grid-cols-2 w-8/12 gap-12 my-8 ">
                <div>
                  <p className="text-orange-600"> Name</p>
                  <h1 className="text-white">Suraj Ahirwar</h1>
                </div>
                <div>
                  <p className="text-orange-600"> Phone</p>
                  <h1 className="text-white">9755864500</h1>
                </div>
                <div>
                  <p className="text-orange-600"> Address</p>
                  <h1 className="text-white">Madhya Pradesh</h1>
                </div>
                <div>
                  <p className="text-orange-600"> Email</p>
                  <h1 className="text-white">surajofficial602@gmail.com</h1>
                </div>
              </div>
              <div className="education mb-4 flex flex-col items-center justify-center">
                <h2 className="font-bold text-orange-600">Education</h2>
                <p className="text-center text-white">
                  B.Tech ( RGPV ) in Computer Science & learn Web Development
                </p>
              </div>
              <div className="links mx-auto flex items-center justify-center gap-2 text-orange-600">
                <a
                  className=" border border-gray-600 p-1"
                  rel="stylesheet"
                  href=""
                >
                  <FaFacebook />{" "}
                </a>
                <a
                  className=" border border-gray-600 p-1"
                  rel="stylesheet"
                  href=""
                >
                  <GrInstagram />{" "}
                </a>
                <a
                  className=" border border-gray-600 p-1"
                  rel="stylesheet"
                  href=""
                >
                  <FaTwitter />{" "}
                </a>
                <a
                  className=" border border-gray-600 p-1"
                  rel="stylesheet"
                  href=""
                >
                  <FaGithub />{" "}
                </a>
                <a
                  className=" border border-gray-600 p-1"
                  rel="stylesheet"
                  href=""
                >
                  <IoLogoYoutube />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* SKILL SECTION  */}

        <div className="bg-[#131313] min-h-screen w-full">
            <div className="relative pt-">
              <h1 className="text-[#171515] text-8xl font-bold text-center p-4 absolute z-0 mt-8  mx-auto -translate-x-1/2 left-1/2 top-4">
                SKILLS
              </h1>
              <h1 className="text-4xl text-orange-600 text-center font-bold p-8 mt-16 z-10 absolute left-1/2 -translate-x-1/2">
                Skills
              </h1>

              <div className=" p-16 pt-56">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-32 gap-16 items-center md:w-11/12 mx-auto text-white font-normal justify-center">
                  <div className="flex flex-col  items-center justify-between">
                      <div className="flex items-center justify-between w-full mb-3">
                      <h2>JavaScript</h2>
                      <h2>75%</h2>
                      </div>
                      <div className="w-full h-[4px] bg-gray-400  relative">
                        <div className="w-3/4 h-full bg-orange-600  absolute top-0 left-0"></div>
                        </div>
                  </div> 
                  <div className="flex flex-col  items-center justify-between">
                      <div className="flex items-center justify-between w-full mb-3">
                      <h2>HTML</h2>
                      <h2>85%</h2>
                      </div>
                      <div className="w-full h-[4px] bg-gray-400  relative">
                        <div className="w-[85%] h-full bg-orange-600  absolute top-0 left-0"></div>
                        </div>
                  </div> 
                  <div className="flex flex-col  items-center justify-between">
                      <div className="flex items-center justify-between w-full mb-3">
                      <h2>CSS</h2>
                      <h2>80%</h2>
                      </div>
                      <div className="w-full h-[4px] bg-gray-400  relative">
                        <div className="w-4/5 h-full bg-orange-600  absolute top-0 left-0"></div>
                        </div>
                  </div> 
                  <div className="flex flex-col  items-center justify-between">
                      <div className="flex items-center justify-between w-full mb-3">
                      <h2>ReactJs</h2>
                      <h2>80%</h2>
                      </div>
                      <div className="w-full h-[4px] bg-gray-400  relative">
                        <div className="w-4/5 h-full bg-orange-600  absolute top-0 left-0"></div>
                        </div>
                  </div> 
                  <div className="flex flex-col  items-center justify-between">
                      <div className="flex items-center justify-between w-full mb-3">
                      <h2>Git & GitHub</h2>
                      <h2>80%</h2>
                      </div>
                      <div className="w-full h-[4px] bg-gray-400  relative">
                        <div className="w-4/5 h-full bg-orange-600  absolute top-0 left-0"></div>
                        </div>
                  </div> 
                  <div className="flex flex-col  items-center justify-between">
                      <div className="flex items-center justify-between w-full mb-3">
                      <h2>UX/UI</h2>
                      <h2>80%</h2>
                      </div>
                      <div className="w-full h-[4px] bg-gray-400  relative">
                        <div className="w-4/5 h-full bg-orange-600  absolute top-0 left-0"></div>
                        </div>
                  </div> 
                </div>
                  <h1 className="text-center block text-white mt-24 text-2xl font-semibold  tracking-wide">I Am Available For Freelance !</h1>
              </div>
            </div>
        </div>


             {/* SERVICES SECTION */}

             <div className="bg-[#090909] min-h-screen w-full">
                 <div className="relative">
                      <h1 className="text-[#171515] text-7xl font-bold text-center p-4 absolute z-0 mt-8  m x-auto -translate-x-1/2 left-1/2 top-7">
                        SERVICES
                      </h1>
                      <h1 className="text-4xl text-orange-600 text-center font-bold p-8 mt-16 z-10 absolute left-1/2 -translate-x-1/2">
                        Serivces
                      </h1>
                  </div>

                  <div className="w-10/12 p-16 grid md:grid-cols-3 font- items-center mx-auto gap-32 pt-64">
                  <Service icon={UilServerConnection } name={"Web Desgin"} para={"There are many variation of passages of but the majority have suffered alteration in some form."}/>             
                     <Service icon={UilApps } name={"Web Development"} para={"There are many variation of passages of but the majority have suffered alteration in some form."}/>             
                     <Service icon={UilCube } name={"Web Animation"} para={"There are many variation of passages of but the majority have suffered alteration in some form."}/>  
                     <Service icon={UilEdit} name={"Graphic Design"} para={"There are many variation of passages of but the majority have suffered alteration in some form."}/>             
                     <Service icon={UilVideoQuestion} name={"Video Editing"} para={"There are many variation of passages of but the majority have suffered alteration in some form."}/>             
                     <Service icon={UilPalette } name={"Branding"} para={"There are many variation of passages of but the majority have suffered alteration in some form."}/>             
                              
                  </div>
              </div>

                    {/* CONTACT SECTION  */}

        <div className="w-full p-16 bg-orange-700">
          <h1 className="text-5xl  mb-16 text-white font-bold text-center">Contact Me</h1>
          <div className="flex sm:flex-row items-center gap-10  flex-col justify-between text-white w-10/12 mx-auto">
            <div  className="flex flex-col gap-1 items-center justify-center">
              <UilMobileAndroid/>
              <h1 className="font-bold">Call Me</h1>
              <p>+919755864500</p>
            </div>
            <div  className="flex flex-col gap-1 items-center justify-center">
              <UilEnvelopeMinus/>
              <h1 className="font-bold">Email</h1>
              <p className="text-center pr-2">surajofficial602@gmail.com</p>
            </div>
            <div  className="flex flex-col gap-1 items-center justify-center">
              <UilInstagram/>
              <h1 className="font-bold">Instagram Id</h1>
              <p>@realsuraj23</p>
            </div>
          </div>
            <button className="mt-12  mx-auto flex items-center justify-center bg-white px-8 py-2 text-xl text-orange-600 font-semibold">SEND MESSAGE</button>
        </div>            












      </div>
    </>
  );
}

export default App;
