import React from "react";
import Tilt from 'react-tilt'
import './logo.css'
import brain from './brain-icon.png'

const Logo = () =>{
    return (
        <div className="center ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 180 }} >
                <div className="Tilt-inner">
                    <img style={{paddingTop:"25px"}} alt="logo" src={brain}></img> 
                </div>
            </Tilt>
        </div>
    )
}
export default Logo