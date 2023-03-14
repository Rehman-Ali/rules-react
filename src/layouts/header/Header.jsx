import React, { useContext } from "react"
import "./header.css"
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom"
import { contentCreate } from "../../context/ContextApi"
const Header = () => {
  const conxt = useContext(contentCreate)
  const _handleMobileMenuToogle = () => {
    conxt.dispatch({
      type: "TOOGLE",
    })
    console.log(conxt.state.mobileMenuToogle)
  }
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row main_row_header">
            <div iv className="col-lg-2 col-md-2 col-sm-6 logo_">
              <div className="logo_image_wrapper">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 header_left_menu">
              <button>Join a DAO Team</button>
              <Link to="#">Website</Link>
              <Link to="#">Docs</Link>
              <Link to="#">Join Us</Link>
            </div>
            <div className="col-lg-4 col-md-4 header_right_menu">
              <Link to="#">OpenSea </Link>
              <Link to="#">UniSwap </Link>
              <button>Connect Wallet</button>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 Pro">
              <i
                className="fa-sharp fa-solid fa-bars burger"
                onClick={_handleMobileMenuToogle}
              ></i>
              <div className="profile_">
                <div className="profile_icon"></div>
                <i className="fa-sharp fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
