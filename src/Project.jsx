import React from "react";
import BgImage from "./images/3.jpg"
import WhatsappPop from "./WhatsappPop";
import Breadcrumb from "./Breadcrumb";
import LoaderPage from "./Loader";
import Gallery from "./Gallery";

export default function project (){
    return(
        <>
           <LoaderPage/>
            <Breadcrumb 
            page={"Nos Projets"} image={BgImage}/>
            {/* <ServiceContainer/> */}
            <Gallery/>
            <WhatsappPop/>
        </>
    )
}