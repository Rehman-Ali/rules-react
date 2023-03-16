import React from "react"
import "./AbsGamesRules.css"
const AbsGamesRules = (props) => {
  const { rulesimage, heading, para, para2, para3, para4, para5 } = props
  return (
    <>
      <div className="rules_wrapper">
        <div className="rules_img_wrapper">
          <img src={rulesimage} alt="image" className="img-fluid" />
        </div>
        <div className="rules_defined">
          <h2>{heading}</h2>
          <div className="rules_disp_wrapper">
            <p>{para}</p>
            <p>{para2}</p>
            <p>{para3}</p>
            <p>{para4}</p>
            <p>{para5}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AbsGamesRules
