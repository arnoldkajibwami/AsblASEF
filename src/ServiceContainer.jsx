import React from "react";
import { BiAnalyse } from 'react-icons/bi'
import { BiSolidDonateHeart } from 'react-icons/bi'


export default function ServiceContainerTwo() {
   return (
      <>
         <div className="services_section6 layout_padding">
            <div className="container">
               <h1 className="services_taital1">ASEF intervient dans le secteur suivants</h1>
               <p className="about_text"></p>
               <div className="services_section_2">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="icon_box">
                           <div className="icon_1">
                              <i><BiAnalyse /></i>
                           </div>
                        </div>
                        <h4 className="selection_text1 mt-3">l'humanitaire </h4>
                        <p className="ipsum_text1 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                           incididunt ut labore et dolore magna aliqua.
                           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="icon_box">
                           <div className="icon_1">
                              <i><BiSolidDonateHeart /></i>
                           </div>
                        </div>
                        <h4 className="selection_text1 mt-3">la sante </h4>
                        <p className="ipsum_text1 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                           ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                     </div>
                     <div className="col-lg-6">
                        <div className="icon_box">
                           <div className="icon_1">
                              <i><BiSolidDonateHeart /></i>
                           </div>
                        </div>
                        <h4 className="selection_text1 mt-3">l'entrepreunariat des jeunes et des femmes </h4>
                        <p className="ipsum_text1 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                           <div className="icon_box">
                           <div className="icon_1">
                              {/* <i><BiFastForward/></i> */}
                              <i><BiAnalyse /></i>
                           </div>
                        </div>
                        <h4 className="selection_text1 mt-3">l'education </h4>
                        <p className="ipsum_text1 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                           ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}