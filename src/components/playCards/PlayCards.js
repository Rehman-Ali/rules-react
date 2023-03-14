import React from "react"
import "./PlayCards.css"
const PlayCards = ({ items }) => {
  return (
    <>
      <div className="playCardWrapper">
        <img src={items.icon} alt="" className="img-fluid" />
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>{items.fonttitle}</h1>
          </div>
          <div className="flip-card-back">
            <h1>{items.backsideHeading}</h1>
            <p className="backDispcriptio">{items.backsideDisp}</p>
            <div className="step1">
              <h4>{items.stepHeading}</h4>
              <p>{items.stepPara}</p>
            </div>
            <div className="step2">
              <h4>{items.stepHeading2}</h4>
              <p>{items.stepPara2}</p>
            </div>
            <div className="step3">
              <h4>{items.stepHeading3}</h4>
              <p>{items.stepPara3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayCards
