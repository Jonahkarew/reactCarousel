import React, { useState } from 'react'
import arrowRight from './assets/arrow-right.svg';
import arrowLeft from './assets/arrow-left.svg';

function Slide() {
    const [index, setIndex] = useState(0)
    const [images] = useState([
        { url: 'https://via.placeholder.com/200x150?text=first', id: 0 },
        { url: 'https://via.placeholder.com/200x150?text=second', id: 1 },
        { url: 'https://via.placeholder.com/200x150?text=third', id: 2 },
        { url: 'https://via.placeholder.com/200x150?text=fourth', id: 3 },
    ]);

    const nextSlide = () => {

        if (index >= images.length - 1) {
            setIndex(0)
        }
        else if (index <= images.length) {


            setIndex(index + 1)

        }

    }

    const prevSlide = () => {
        if (index <= 0) {
            setIndex(images.length - 1)
        }
        else {
            setIndex(index - 1)
        }
    }

    return (

        <div style={{position:'relative', display: 'flex', flexDirection: 'row', justifyContent: 'left', maxWidth: '100%', overflow: 'hidden' }}>
            <img style={{position: 'relative', top: 0, left:0, zIndex:1 }} src={arrowLeft} onClick={(e) => prevSlide()} />
            <img style={{position: 'relative', top: 0, right:0, zIndex:2}} src={arrowRight} onClick={(e) => nextSlide()} />
            {images.map((image) =>
                <img key={image.id} src={image.url} style={{ marginLeft: '40%' }} />
            )}
            
        </div>
    )
}

export default Slide
