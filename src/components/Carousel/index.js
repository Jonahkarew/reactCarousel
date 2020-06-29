import React, {useState} from 'react'
import arrowRight from './assets/arrow-right.svg';
import arrowLeft from './assets/arrow-left.svg';
import styles from './style.module.css';

function Carousel() {
    const [images] = useState([
        'https://via.placeholder.com/200x150?text=first',
        'https://via.placeholder.com/200x150?text=second',
        'https://via.placeholder.com/200x150?text=third',
        'https://via.placeholder.com/200x150?text=fourth',
    ]);

    const [prevIndex, setPrevIndex] = useState(images.length - 1);
    const [index, setIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);


    const nextSlide = () =>{
     
       if (index >= images.length - 1){
            setPrevIndex(images.length)
            setIndex(0)
        }
        else if (index <= images.length){
            setPrevIndex(index)
            
            setNextIndex(index + 2)

            setIndex(index + 1)

            console.log(index)
        }

        if(nextIndex >= images.length - 1){
            setNextIndex(0)
        }

        if(prevIndex >= images.length - 1){
            setPrevIndex(0)
        }
    }
    
    const prevSlide = () =>{
        if(index <= 0){
            setIndex(images.length - 1)
        }
        else{
            setIndex(index - 1)
        }
    }
    
    const findPrevSlide = () => {

    }
    return (
        <div id={styles.container}>
            <img src={arrowLeft} onClick={(e)=>prevSlide()}/>
            <img id='previousSlide' src={images[prevIndex]} />
            <img src={images[index]}/>
            <img id='nextSlide' src={images[nextIndex]}/>
            <img src={arrowRight} onClick={(e)=>nextSlide()} />
        </div>
    )
}

export default Carousel
