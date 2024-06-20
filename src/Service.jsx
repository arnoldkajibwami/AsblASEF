import React from "react";
import "./Service.css"
import BgImage from "./images/1.jpeg"
import ServiceContainer from "./ServiceContainer";
import WhatsappPop from "./WhatsappPop";
import Breadcrumb from "./Breadcrumb";
import LoaderPage from "./Loader";

export default function Service() {
    return (
        <>
            <LoaderPage/>
            <Breadcrumb 
            page={"Nos Activites"} image={BgImage}/>
           <ServiceContainer/>
            <WhatsappPop/>
        </>
    );
}
