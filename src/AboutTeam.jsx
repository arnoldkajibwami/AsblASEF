import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { BiLogoInstagram } from "react-icons/bi"
// import { BiLogoFacebook } from "react-icons/bi"
// import { BiLogoTwitter } from "react-icons/bi"
// import { BiLogoLinkedin } from "react-icons/bi"
import Person2 from './images/person_2.png'
import Person1 from './images/person_1.png'
import Person3 from './images/person_3.png'
import Person4 from './images/person_4.png'
import Person5 from './images/person_5.png'
import Person6 from './images/person_6.png'

export default function AboutTeam() {
    useEffect(() => {
        AOS.init({ duration: 2200 })
    }, [])
    return (
        <>
            <section className="text-center mb-5">
                <div id="team" className="team">
                    <div className="container">

                        <div className="section-header text-center">
                            <h2>Notre Equipe</h2>
                            {/* <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p> */}
                        </div>

                        <div className="row gy-4 mt-2">

                            <div className="col-lg-4 col-md-6 member">
                                <div className="member-img">
                                    <img src={Person2} className="img-fluid" alt="" />
                                    {/* <div className="social">
                                        <Link to="#"><BiLogoInstagram /></Link>
                                        <Link to="#"><BiLogoFacebook /></Link>
                                        <Link to="#"><BiLogoTwitter /></Link>
                                        <Link to="#"><BiLogoLinkedin /></Link>
                                    </div> */}
                                </div>
                                <div className="member-info text-center">
                                    <h4>Madame Lydie TAMBWE SAKINA</h4>
                                    {/* <h6>Ir de Mines</h6> */}
                                    <span>CEO et Présidente ASEF ASBL</span>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 member">
                                <div className="member-img">
                                    <img src={Person1} className="img-fluid" alt="" />
                                    {/* <div className="social">
                                        <Link to="#"><BiLogoInstagram /></Link>
                                        <Link to="#"><BiLogoFacebook /></Link>
                                        <Link to="#"><BiLogoTwitter /></Link>
                                        <Link to="#"><BiLogoLinkedin /></Link>
                                    </div> */}
                                </div>
                                <div className="member-info text-center">
                                    <h4>Joseph SHABANI</h4>
                                    <span> Secrétaire Exécutif et chargée de statégies </span>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 member">
                                <div className="member-img">
                                    <img src={Person6} className="img-fluid" alt="" />
                                    {/* <div className="social">
                                        <Link to="#"><BiLogoInstagram /></Link>
                                        <Link to="#"><BiLogoFacebook /></Link>
                                        <Link to="#"><BiLogoTwitter /></Link>
                                        <Link to="#"><BiLogoLinkedin /></Link>
                                    </div> */}
                                </div>
                                <div className="member-info text-center" >
                                    <h4>Dr Jordan Mubuto</h4>
                                    <span >Coordonnateur Santé et Nutrition</span>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 member">
                                <div className="member-img">
                                    <img src={Person3} className="img-fluid" alt="" />
                                    {/* <div className="social">
                                        <Link to="#"><BiLogoInstagram /></Link>
                                        <Link to="#"><BiLogoFacebook /></Link>
                                        <Link to="#"><BiLogoTwitter /></Link>
                                        <Link to="#"><BiLogoLinkedin /></Link>
                                    </div> */}
                                </div>
                                <div className="member-info text-center" >
                                    <h4>Joselin KYATANGALWA</h4>
                                    <span >Chef du departement Protection de l'enfant et éducation</span>

                                </div>
                            </div>

                            
                            <div className="col-lg-4 col-md-6 member">
                                <div className="member-img">
                                    <img src={Person5} className="img-fluid" alt="" />
                                    {/* <div className="social">
                                        <Link to="#"><BiLogoInstagram /></Link>
                                        <Link to="#"><BiLogoFacebook /></Link>
                                        <Link to="#"><BiLogoTwitter /></Link>
                                        <Link to="#"><BiLogoLinkedin /></Link>
                                    </div> */}
                                </div>
                                <div className="member-info text-center" >
                                    <h4>Clément et Aline </h4>
                                    <span >Responsables de l'ONG Women's Refugee Care</span>

                                </div>
                            </div>

                            


                            <div className="col-lg-4 col-md-6 member">
                                <div className="member-img">
                                    <img src={Person4} className="img-fluid" alt="" />
                                    {/* <div className="social">
                                        <Link to="#"><BiLogoInstagram /></Link>
                                        <Link to="#"><BiLogoFacebook /></Link>
                                        <Link to="#"><BiLogoTwitter /></Link>
                                        <Link to="#"><BiLogoLinkedin /></Link>
                                    </div> */}
                                </div>
                                <div className="member-info text-center">
                                    <h4>Christine MBEMBA</h4>
                                    <span>Juriste chargée du genre et plaidoyer</span>

                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
