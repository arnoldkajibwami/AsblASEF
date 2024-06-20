import React, { useState, useEffect } from 'react';
import './gallery.css'
import './gallery2.css'
import Image1 from './images/projet_1.jpg'
import Image2 from './images/projet_2.jpg'
import Image3 from './images/projet_3.jpg'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'

function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        { src: Image1, alt: 'constuction ecole', description: "Projet de construction de l'école primaire Mushunguri dans le groupement de Bugore en territoire de Kabare", filter: "two" },
        { src: Image2, alt: 'agriculture familiale', description: "Promotion de l'agriculture familiale des haricots par des femmes dans les villages Mwikalo et Mushunguri", filter: "one" },
        { src: Image3, alt: 'construction ecole', description: "Projet de construction de l'école primaire Nayaweza de Bagira grâce au financement du ministre d'Etat Aimé BOJI.", filter: "one" },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const filteredImages = images.filter((image) => image.filter === activeFilter || activeFilter === 'all');

    return (
        <>
            <div className='container mt-4'>

                <div className="image-list">
                    {filteredImages.map((image, index) => (
                        <li key={image.src} onClick={() => { setCurrentImageIndex(index); setIsModalOpen(true); }}>
                            <img className={`${image.filter}`} src={image.src} alt={image.alt} />
                        </li>
                    ))}
                </div>

                {isModalOpen && (
                    <div className='modelAll'>
                        <div className="modal container">
                            <div className='d-flex '>
                                <button id='nextprev' onClick={handlePrev}><FaArrowLeft /></button>

                                <div className='galleryDisplay'>
                                    <button className='Buttonclose mb-1 buttongalleryclose' onClick={() => setIsModalOpen(false)} style={{ height: "40px" }}>
                                        <span className="X"></span>
                                        <span className="Y"></span>
                                        <div className="closebutton">Fermé</div>
                                    </button>
                                    <img src={filteredImages[currentImageIndex].src} alt={filteredImages[currentImageIndex].alt} />
                                </div>
                                <button id='nextprev' onClick={handleNext}><FaArrowRight /> </button>
                            </div>

                                <div className="image-description" style={{padding:"40px"}}>{filteredImages[currentImageIndex].description}</div>
                        </div>
                    </div>
                )}

            </div>
        </>

    );
}

export default Gallery;
