import React, { useContext } from "react"
import "./Sidebar.css"
import podium from "../../assets/images/podium.png"
import stake from "../../assets/images/stake.png"
import asset from "../../assets/images/Asset.png"
import btnCrown from "../../assets/images/btncrown.png"
import sword from "../../assets/images/dbsword.png"
import btntrophy from "../../assets/images/btntrophy.png"
import { contentCreate } from "../../context/ContextApi"

const Sidebar = () => {
  const conxt = useContext(contentCreate)
  const value = conxt.state.mobileMenuToogle
  const context = useContext(contentCreate)

  return (
    <>
      {/* web view sidebar starts */}
      <aside className="sidebar_wrapper web_view">
        <div className="sidebar_content">
          {/* pages links sextion starts her */}
          <div className="links_section">
            <a href="#">
              <img src={podium} alt="icon" className="img-fluid" />
              Dashboard
            </a>
            <a href="#">
              <img src={stake} alt="icon" className="img-fluid" />
              Leaderboard
            </a>
            <a href="#">
              <img src={asset} alt="icon" className="img-fluid" />
              DAO Overview
            </a>
          </div>
          <div className="borderss"></div>

          {/* pages links sextion ends here */}

          {/*  buttons of sidebar starts here */}

          <div className="button_section">
            <h6>Gaming Modes</h6>
            <button className="crown">
              <span>
                <img src={btnCrown} alt="crown" />
              </span>{" "}
              Kings of the ring{" "}
            </button>
            <button className="sword">
              <span>
                <img src={sword} alt="crown" />
              </span>{" "}
              Clash of champions{" "}
            </button>
            <button className="trophy">
              <span>
                <img src={btntrophy} alt="crown" />
              </span>{" "}
              Grand Chelem{" "}
            </button>
          </div>
          {/* <div className="borderss"></div> */}

          {/*  buttons of sidebar ends here */}

          {/* tabs sections starts here */}
          <div className="tabs_section">
            <div className="borderss"></div>
            <h6>NFT Holders Space</h6>

            <button>nft dahboard</button>
            <button>sponsored pools</button>
            <button className="my_dao">my dao team</button>

            {/* <p>KING OF THE RINGS leaderboard</p>
            <div className="borderss"></div>

            <p>KING OF THE RING Game mode guideline</p>
            <div className="borderss"></div>

            <p>Sponsored Pools</p>
            <div className="borderss"></div>

            <p>Learn about different leagues</p> */}
          </div>
          {/* tabs sections ends here */}
        </div>
      </aside>
      {/* web view sidebar ends */}

      {/* mobile view sidebar start */}
      <aside>
        <div
          className={
            value
              ? " mobile_view_sidebar sidebar_wrapper"
              : "mobile_sidebar_hidden"
          }
        >
          {/* <div className="overlay"></div> */}
          <div className="sidebar_content">
            {/* pages links sextion starts her */}
            <div className="links_section">
              <a href="#">
                <img src={podium} alt="icon" className="img-fluid" />
                Dashboard
              </a>
              <a href="#">
                <img src={stake} alt="icon" className="img-fluid" />
                Leaderboard
              </a>
              <a href="#">
                <img src={asset} alt="icon" className="img-fluid" />
                DAO Overview
              </a>
            </div>
            <div className="borderss"></div>

            {/* pages links sextion ends here */}

            {/*  buttons of sidebar starts here */}

            <div className="button_section">
              <h6>Gaming Modes</h6>
              <button className="crown">
                <span>
                  <img src={btnCrown} alt="crown" />
                </span>{" "}
                Kings of the ring{" "}
              </button>
              <button className="sword">
                <span>
                  <img src={sword} alt="crown" />
                </span>{" "}
                Clash of champions{" "}
              </button>
              <button className="trophy">
                <span>
                  <img src={btntrophy} alt="crown" />
                </span>{" "}
                Grand Chelem{" "}
              </button>
            </div>
            {/* <div className="borderss"></div> */}

            {/*  buttons of sidebar ends here */}

            {/* tabs sections starts here */}
            <div className="tabs_section">
              <div className="borderss"></div>
              <h6>NFT Holders Space</h6>

              <button>nft dahboard</button>
              <button>sponsored pools</button>
              <button className="my_dao">my dao team</button>
            </div>
            {/* tabs sections ends here */}
          </div>
        </div>
      </aside>
      {/* mobile view sidebar ends */}
    </>
  )
}

export default Sidebar
