import React from 'react'
import { useState, useEffect } from "react";
import ReactTyped from "react-typed";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Contactdettails from "./Contactdetails";
import WhatsappPop from "./WhatsappPop";
import AboutDetails from "./AboutDetails";
// import ServiceContainer from "./ServiceContainer";
import ServicesSectionTwo from './ServiceContainerTwo'
import LogoSlider from "./LogoSlider";
import { useNavigate, Link } from "react-router-dom";
import './button.css'
import LoaderPage from "./Loader";


export default function Home() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }

    function GotoService() {
        window.scrollTo(0, 0)
        navigate("/about")
    }
    function GotoContact() {
        window.scrollTo(0, 0)
        navigate("/contact")
    }
    useEffect(() => {
        AOS.init({ duration: 6000 })
    }, [])

  
    return (
        <>
            <LoaderPage />
            <WhatsappPop />
            <section className=" slider_section">
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-md-6" >
                            <div className="detail_box">
                                <h1 className="">
                                    <span className="text-center">Bienvenue chez</span>{" "}<br />
                                    <h5>
                                        ACTIONS DE SOUTIEN AUX ENFANTS ET AUX FEMMES <br/> <ReactTyped className="text-center" strings={["ASEF a.s.b.l."]} typeSpeed={70} loop />
                                    </h5>
                                </h1>
                                <p className="mt-4 " >
                                    <article>Est une association à but non lucratif qui a pour but de promouvoir et defendre les droits de l'enfant et de la femme.  </article>
                                </p>
                                <div className="d-flex homeButton text-center">
                                    <button className="buttonThree" onClick={GotoService}>Apropos de Nous</button>
                                    <button className="buttonTwo" onClick={GotoContact} style={{ marginLeft: "10px" }}>Contact Nous</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

          
            <section className="logoSliderResponsive" style={{ marginTop: "50px" }}>
                <LogoSlider />
            </section>
            <section style={{ marginTop: "-50px" }}>
                <AboutDetails />
            </section>
            <section style={{ marginTop: "80px" }}>
                <ServicesSectionTwo />
               
                <div className="text-center" style={{ marginTop: "10px", marginBottom: "80px" }}>
                    <Link to="/project">
                        <button className="buttonOne" onClick={BackToTOP}>Voir Plus</button>
                    </Link>
                </div>
            </section>

            <section style={{ marginTop: "80px" }}>
                <Contactdettails />
            </section>
        </>
    )
}
