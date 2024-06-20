import React from "react";
import { BiAnalyse } from 'react-icons/bi'
import { BiSolidDonateHeart } from 'react-icons/bi'


export default function ServiceContainerTwo() {
   return (
      <>
         <div className="services_section5 layout_padding">
            <div className="container">
               <h1 className="services_taital mb-4">ASEF intervient dans les secteurs suivants</h1>
               <p className="about_text"></p>
               <div className="services_section_2">
                  <div className="row">
                     <div className="col-lg-6 ">
                        <h4 className="selection_text">Protection de l’Enfant</h4>
                        <h4 className="selection_text">Autonomisation de la Femme </h4>
                     </div>
                     <div className="col-lg-6">

                        <h4 className="selection_text">Sécurité Alimentaire  </h4>
                        <h4 className="selection_text">Education  </h4>
                     </div>
                     <div className="col-lg-6">

                        <h4 className="selection_text">Protection de l’environnement et changements climatiques </h4>
                        <h4 className="selection_text">Santé & Nutrition  </h4>
                     </div>
                     <div className="col-lg-6">

                        <h4 className="selection_text">Entrepreneuriat des femmes </h4>

                        <h4 className="selection_text">Urgences humanitaires </h4>
                     </div>
                     <div className="col-lg-6">

                        <h4 className="selection_text">Eau, Hygiène et Assainissement </h4>
                     </div>
                     <div className="col-lg-6">

                        <h4 className="selection_text">Microfinances  </h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
