import React from 'react'

const SinglePicture = ({ picture }) => {
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 picture-div">
            <img src={'/images/'+ picture.thumbnail} alt={picture.titulo} class="img-thumbnail"></img>
            {/* <h5>{ picture.titulo }</h5> */}
        </div>
    )
}

export default SinglePicture