// This component will show the galleries in Home 
import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const CarouselComp = () => {
    return (
        <div className='carousel-comp' >
            
            <CarouselProvider naturalSlideHeight={30} naturalSlideWidth={30} totalSlides={4} visibleSlides={3}>
                <Slider>
                    <Slide index={0} className="gallery-picture">
                        <Image src={'/images/raices-modified.png'} />
                    </Slide>
                    <Slide index={1} className="gallery-picture">
                        <Image src={'/images/catleya-modified.png'} />
                    </Slide>                        
                    <Slide index={2} className="gallery-picture">
                        <Image src={'/images/raices-modified.png'} />
                    </Slide>                        
                    <Slide index={3} className="gallery-picture">
                        <Image src={'/images/catleya-modified.png'} />
                    </Slide>               
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                <DotGroup disableActiveDots={false} />
           </CarouselProvider>
            
        </div>
    )
}

export default CarouselComp;