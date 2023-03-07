import React, {useEffect, useState} from "react";
import "./Gallery.css"

function Gallery() {
    const [lightbox, setLightbox] = useState('inactive');
    const [lightIndex, setLightIndex] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft')
                prevIndexLightbox();
            if (event.key === 'ArrowRight')
                nextIndexLightbox();
            if (event.key === 'Escape')
                closeLightbox();
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
        // eslint-disable-next-line
    }, [lightIndex]);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 10) {
            nextIndexLightbox();
        }

        if (diff < -10) {
            prevIndexLightbox();
        }

        setTouchPosition(null)
    }

    const openLightbox = ({target}) => {
        setLightIndex(target.id);
        setLightbox('active');

    }

    const closeLightbox = () => {
        setLightbox('inactive');
    }

    const prevIndexLightbox = () => {
        if (Number(lightIndex) !== 0) setLightIndex(lightIndex => lightIndex-1);
    }

    const nextIndexLightbox = () => {
        if (Number(lightIndex) !== images.length-1)
            setLightIndex(lightIndex => Number(lightIndex)+1);
    }

    const renderGallery = (images) => {
        return images.map((image,index) => {
            return <img src={image.src} alt={image.alt} id={index} key={index} onClick={openLightbox}/>;
        });
    }

    const importAll = (r) => {
        let images = [];
        r.keys().forEach((item) => {
            images.push({
                alt: item.replace('./Photos', ''),
                src: r(item)
            });
        });
        return images;
    }

    const images = importAll(require.context('./Photos', false, /\.(png|jpe?g|svg)$/));

    return (
        <div>
            {/* Render lightbox if lightbox state is active */}

            <div id="lightbox" className={lightbox} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>

                <img src={images[lightIndex].src} alt={images[lightIndex].alt}/>

                <br/>
                {Number(lightIndex) ? <button onClick={prevIndexLightbox}>&lt;</button> : ''}
                <button onClick={closeLightbox}>X</button>
                {Number(lightIndex) !== images.length-1 && <button onClick={nextIndexLightbox}>&gt;</button>}

            </div>

            {/* Render in-line gallery from all the photos in Photos directory */}

            <div id="gallery" data-aos={"fade-down"} data-aos-duration={"1500"}>
            {
              renderGallery(images)
            }
            </div>

        </div>
    );
}

export default Gallery;