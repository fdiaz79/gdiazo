import React, { useState } from "react";

import SinglePicture from '../components/SinglePicture';
 
const Galleries = (props) => {
    
    const { galleryName } = props.location.state
    const [ pictures, setPictures ] = useState([
        {
            id: '1',
            titulo: "Catleya Clásica Colombiana",
            descripcion: "Algo que mi padre pondra cuando suba los datos",
            file: "catleya-modified.png",
            thumbnail: "catleya-modified.png",
            galleries: ["Figura Humana", "Abstracto"],
            measures: "100cms x 150cms ",
            year: 2018
        },
        {
            id: '2',
            titulo: "Da Vinci",
            descripcion: "Algo que mi padre pondra cuando suba los datos",
            file: "figura1.jpg",
            thumbnail: "figura1-modified.jpg",
            galleries: ["Figura Humana"],
            measures: "100cms x 150cms ",
            year: 2018
        },
        {
            id: '3',
            titulo: "Mientras dormias",
            descripcion: "Algo que mi padre pondra cuando suba los datos",
            file: "figura2.jpg",
            thumbnail: "figura2-modified.jpg",
            galleries: ["Figura Humana"],
            measures: "100cms x 150cms ",
            year: 2018
        },
        {
            id: '4',
            titulo: "Cara rara",
            descripcion: "Algo que mi padre pondra cuando suba los datos",
            file: "abstracto1.jpg",
            thumbnail: "abstracto1-modified.jpg",
            galleries: ["Figura Humana", "Abstracto"],
            measures: "100cms x 150cms ",
            year: 2018
        },
        {
            id: '5',
            titulo: "La Roca - Magritte",
            descripcion: "Algo que mi padre pondra cuando suba los datos",
            file: "abstracto2.jpg",
            thumbnail: "abstracto2-modified.jpg",
            galleries: ["Abstracto"],
            measures: "100cms x 150cms ",
            year: 2018
        },
        {
            id: '6',
            titulo: "Musico",
            descripcion: "Algo que mi padre pondra cuando suba los datos",
            file: "costumbrismo1.jpg",
            thumbnail: "costumbrismo1-modified.jpg",
            galleries: ["Figura Humana", "Costumbrismo"],
            measures: "100cms x 150cms ",
            year: 2018
        },
        {
            id: '7',
            titulo: "Mi pueblo",
            descripcion: "Algo que mi padre pondra cuando suba los datos",
            file: "costumbrismo2.jpg",
            thumbnail: "costumbrismo2-modified.jpg",
            galleries: ["Costumbrismo", "Paisajismo"],
            measures: "100cms x 150cms ",
            year: 2018
        },
        {
            id: '8',
            titulo: "La de Van Gogh",
            descripcion: "Algo que mi padre pondra cuando suba los datos",
            file: "paisaje1.jpg",
            thumbnail: "paisaje1-modified.jpg",
            galleries: ["Paisajismo", "Abstracto"],
            measures: "100cms x 150cms ",
            year: 2018
        },
        {
            id: '9',
            titulo: "Bonito Paisaje",
            descripcion: "Algo que mi padre pondra cuando suba los datos",
            file: "paisaje2.jpg",
            thumbnail: "paisaje2-modified.jpg",
            galleries: ["Paisajismo", "Costumbrismo"],
            measures: "100cms x 150cms ",
            year: 2018
        },
        {
            id: '10',
            titulo: "Raices",
            descripcion: "Algo que mi padre pondra cuando suba los datos",
            file: "raices.png",
            thumbnail: "raices-modified.png",
            galleries: ["Figura Humana", "Abstracto", "Paisajismo"],
            measures: "100cms x 150cms",
            year: 2019
        }
    ])
    
    return(
        <div className="gallery-page">
            <h1 className="gallery-title text-center">
                Galeria {galleryName} 
            </h1>  

            <div className="row picture-list">            
                {pictures.map( picture => {
                    return(
                        <SinglePicture picture={picture} key={picture.id} />
                    )
                })}
            </div>          
        </div>
    )
}


export default Galleries;