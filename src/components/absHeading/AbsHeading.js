import React from "react"
import "./AbsHeading.css"
const AbsHeading = (props) => {
  const { heading } = props
  return (
    <>
      <h4 className="headingss">{heading}</h4>
    </>
  )
}

export default AbsHeading
