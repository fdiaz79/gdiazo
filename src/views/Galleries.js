import React from "react";
 
const Galleries = (props) => {
    
    const { galleryName } = props.location.state
    
    return(
        <div className="gallery-page">
            <h1 className="gallery-title text-center">
                {galleryName} Gallery
            </h1>            
        </div>
    )
}


export default Galleries;