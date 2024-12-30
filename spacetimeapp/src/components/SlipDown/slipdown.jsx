import React from "react";
import slipdownImage from "../../assets/img/slipdown.png";
import arrowdownImage from "../../assets/img/arrowdown.png"
import '../SlipDown/slipdown.css'

const SlipDown = () => {
    return(
        <div className="slipdown">
            <img className="slipdown-img" src={slipdownImage} alt="Imagem Ilustrativa" />

            <div className="rounded-circle">
                <img className="arrowdown-img" src={arrowdownImage} alt="Imagem Ilustrativa" />
            </div>
        </div>
    )
}

export default SlipDown;
