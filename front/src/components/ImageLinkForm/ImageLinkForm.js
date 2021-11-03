import React from "react";
import './imagelinkform.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
    return (
        <div className="ma4 mt0">
            <p className="fa3">{'This magic Brain will detect faces in your pictures. Git it a try!'}</p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                <input onChange={onInputChange} className="f4 pa2 w-70 center" type="text"></input>
                <button onClick={onButtonSubmit} className="detect w-20 grow f4 ph3 link dim ph3 pv2 mb2 dib black">Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm