import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from './LOGO/auctux1.png'
import Logo2 from './images/logo2.png'


const LogoSlider = () => {
    const [settings] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        cssEase: 'linear',
    });

    const logos = [
       Logo2,Logo2
        // Add more logos here
    ];

    return (
        <div className='container heading_container'>
            <h4 className='text-center mb-4' style={{fontWeight:"bold"}} >Nos Partenaires</h4>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className='container'>
                        <img src={logo} alt='logo' className='logoStyle'/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default LogoSlider;
