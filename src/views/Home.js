// This component will show the galleries in Home 
import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Home = () => {
    return (
        <div className='carousel-comp' >
            
            <CarouselProvider naturalSlideHeight={30} naturalSlideWidth={30} totalSlides={4} visibleSlides={3} step={3}>
                <div className='carousel-container'>
                    <Slider>
                        <Slide index={0} className="gallery-picture">                            
                            {/* <img src='/images/raices-modified.png' alt='img-thumb' className='image___xtQGH carousel__image carousel__image--success' /> */}
                            <Image src={'/images/raices-modified.png'} isBgImage={true} /> 
                            <h3 className='gallery-name'>FIGURA HUMANA</h3>                            
                        </Slide>
                        <Slide index={1} className="gallery-picture">
                            <Image src={'/images/catleya-modified.png'} />
                            <h3 className='gallery-name'>ABSTRACTO</h3>
                        </Slide>                        
                        <Slide index={2} className="gallery-picture">
                            <Image src={'/images/paisaje1.jpg'} />
                            <h3 className='gallery-name'>PAISAJES</h3>
                        </Slide>                        
                        <Slide index={3} className="gallery-picture">
                            <Image src={'/images/costumbrismo1.jpg'} />
                            <h3 className='gallery-name'>COSTUMBRISMO</h3>
                        </Slide>               
                    </Slider>
                    <ButtonBack className='back-button'><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></ButtonBack>
                    <ButtonNext className='next-button'><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></ButtonNext>
                    <DotGroup className='dot-group' disableActiveDots={false} />
                </div>
                
           </CarouselProvider>
            
        </div>
    )
}

export default Home;