import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './about.css'

export default function AboutDetails() {
    useEffect(() => {
        AOS.init({ duration: 2200 })
    }, [])

    const navigate = useNavigate()
    function GotoTeam() {
        window.scrollTo(0, 900)
        navigate("/about")
    }
    return (
        <>
            <div className="about_section layout_padding" >
                <div className="container" data-aos="fade-up">
                    <h1 className="about_taital text-center" >ASEF a.s.b.l</h1>
                    <p className="about_text"></p>
                    <div className="about_section_2">
                        <div className="row">
                            <div className="col-lg-12 tomarginText" >
                                <div className="about_taital_main w-100 ">
                                    <p className="lorem_text" style={{ marginTop: "-25px",marginBottom: "20px" }}><span style={{ fontWeight: "bold" }}> ASEF a.s.b.l </span>
                                        est une association à but non lucratif qui a pour but de promouvoir et defendre les droits de l'enfant et de la femme.
                                        Actions de soutien aux enfants et aux femmes est une association à caractère social et humanitaire qui a été créée en
                                        juillet 2020 par un groupe de jeunes intellectuels originaires de la partie orientale de la RDC en proie à la guerre et à
                                        toutes sortes de violences spécialement envers les couches vulnérables dont font partie les enfants et les femmes dans
                                        les zones des conflits du Sud–Kivu, du Nord–Kivu et de l’Ituri.
                                    </p>

{/* 
                                    <ul className='lorem_text d-flex justify-content-center'>
                                        <div className=''>
                                            <h3 className="mt-4 mb-4 text-center" style={{ fontWeight: "800" }}>Quelques réalisations </h3>
                                            <li>
                                                Prise en charge scolaire de 64 écoliers issus des milieux ruraux et vivant dans la précarité dont 49 filles et 15 garçons
                                            </li>
                                            <li>
                                                Appui à l’autonomisation de 28 femmes vulnérables par la formation et l’octroi des crédits de start – up business
                                            </li>
                                            <li>
                                                Réhabilitation et équipement de l’école primaire Shukrani dans la commune urbaine de Bagira, Ville de Bukavu
                                            </li>
                                        </div>
                                    </ul> */}
                                    <span onClick={GotoTeam} className='detailboxa mb-5 d-flex justify-content-center' style={{ textDecoration: "none" }} data-aos="fade-up">
                                        Notre Equipe Technique
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}