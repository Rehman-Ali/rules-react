import React, { useState } from "react"
import AbsHeading from "../components/absHeading/AbsHeading"
import PlayCards from "../components/playCards/PlayCards"
import "./Rules.css"
import crowmCard from "../assets/images/greencrown.png"
import cardsword from "../assets/images/cardSword.png"
import cardtrophy from "../assets/images/cardtrophy.png"
import frofeit from "../assets/images/forfeit.png"
import AbsGamesRules from "../components/absGameRules/AbsGamesRules"
import payout from "../assets/images/payouts.png"
import resutls from "../assets/images/resultss.png"
import badge from "../assets/images/badge.png"
import AbsDiv from "../components/absDiv/AbsDiv"
const Rules = () => {
  const [cardData, setCardData] = useState([
    {
      icon: crowmCard,
      fonttitle: "king of the ring ",
      backsideHeading: "king of the ring",
      backsideDisp: "Simple event pools: 1D2 game mode",
      stepHeading: "step 1",
      stepPara:
        "Choose your League aka, the amount of ETH you are ready to risk on your wager. The lower the bet, the more competition in the pool.",
      stepHeading2: "step 2",
      stepPara2:
        "Pick up your bet for the event. It could be team A as a winner, a draw or team B as a winner (i.e. soccer, basketball, football etc.)",
      stepHeading3: "step 3",
      stepPara3:
        "Validate your registration into the pool by signing the transaction into your wallet.s",
    },
    {
      icon: cardsword,
      fonttitle: "clash of champions",
      backsideHeading: "clash of champions",
      backsideDisp: "Simple/Multiple event pools: tournament 1D2 game mode",
      stepHeading: "step 1",
      stepPara: "CHOOSE YOUR LEAGUE",
      stepHeading2: "step 2",
      stepPara2:
        "PICK UP YOUR BET FOR THE EVENT(S). IT COULD BE TEAM A AS A WINNNER, A DRAW OR TEAM B AS A WINNER (I.E. SOCCER, BASKETBALL, ETC).  THIS SELECTION IS MULTIPLE THROUGH MULTIPLE LIVE EVENTS (IE. DAY X OF THE NBA PLAYOFFS)",
      stepHeading3: "step 3",
      stepPara3:
        "Validate your registration into the pool; by  signing the transaction into your wallet",
    },
    {
      icon: cardtrophy,
      fonttitle: "GRAND CHELEM",
      backsideHeading: "GRAND CHELEM",
      backsideDisp: "Series multiple event pools: tournament custom game mode",
      stepHeading: "step 1",
      stepPara: "CHOOSE YOUR LEAGUE",
      stepHeading2: "step 2",
      stepPara2:
        "PICK UP YOUR BET FOR THE EVENT(S). YOU HAVE TO PICK SEVERAL TEAMS OR INDIVIDUALS ON WHICH APPLY EITHER A HANDICAP OR BONUS FACTOR OR NEITHER BONUS NOR HANDICAP FACTOR",
      stepHeading3: "step 3",
      stepPara3:
        "Validate your registration into the pool; by  signing the transaction into your wallet",
    },
  ])
  const [rulesData, setRuleData] = useState([
    {
      rulesimage: frofeit,
      heading: "forfeit",
      para: "Any user can decide to stop his participation before the live event starts (the pool will be automatically locked via Smart Contract) or during the Series through withdrawing his bet, but will forfeit:",
      para2:
        "10% of the registration fee before the launch of the event, or first of the Series,",
      para3:
        "50% of the registration fee after the first event (for series),75% of the registration fee after the second event,",
      para4: "75% of the registration fee after the second event,",
      para5: "100% after the start of the third event.",
    },
    {
      rulesimage: payout,
      heading: "payouts structure",
      para: "According to the number of participants in each pool, the payout structure will evolve accordingly.",
      para2:
        "For King of the Ring pools, the winners take it all. As there is three different bets possible in the pool as 1, D or 2, the players who wagered right will earn and split equally the other players’ wagers.",
      para3:
        "For the two other game modes, there will be a ranking among players, either over 1 or several events, and the prize pool will be split from 1 up to 2,000 players depending on the total number of the players in this pool.",
    },
    {
      rulesimage: resutls,
      heading: "RESULTS RECONCILIATION PERIOD",
      para: "During Alpha & Beta versions of the platform, this operation will be centralized (Manual) in order to be able to secure and build a robust blockchain infrastructure to guarantee the safety of the players’ funds. For Alpha & Beta versions of the platform, this period will be within 48h after the end of the event (or last event for a series). ",
      para2:
        "The DAO team will work to reduce this period to a 12h window after the implementation of oracles (automation of on chain pulling of data). The reconciliation process will be then semi-automated.",
      para3:
        "After couple months of semi-automated reconciliation system, DAO team aims to fully automates as 100% decentralized the process thus, the platform will provide, almost instantly after the final result of the live event, the winning prizes available for players into their personal dashboard.",
    },
    {
      rulesimage: badge,
      heading: "HOW TO WIN?",
      para: "No algorithm or shady tricks to manipulate odds. You play against other players! ",
      para2:
        "You don’t need to have the perfect bet but just beat your peers in the pool to win the first prize or to split the pot with the other winners (for the 1D2 simple pools game mode).",
      para3:
        "For the Clash of Champions tournament pools, for each good bet you make you earn 1 point. All the points are aggregating after each live event. The people with the most point at the end of the tournament split the prize pot according to the payout structure.",
      para4:
        "For the Grand Chelem series tournament pools, for each good bet you make you earn x points according to the real event/sport calculation mode + the potential handicap or bonus factor. All the points are aggregating after each live event and accumulating for the whole period of the series. The people with the most point at the end of the series split the prize pot according to the payout structure.",
    },
  ])
  return (
    <section className="rule_page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <AbsDiv />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="how_to_play_area ">
              <AbsHeading heading="How to play" />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          {cardData.map((e, idx) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12  item-list" key={idx}>
                <PlayCards items={e} />
              </div>
            )
          })}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <AbsDiv />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="game_rules ">
              <AbsHeading heading="Game Rules" />
            </div>
          </div>
        </div>
        <div className="row rules_data_">
          {rulesData.map((e, idx) => {
            return (
              <div
                className="col-lg-6 col-md-6 col-sm-12 rules_main_wrapper"
                key={idx}
              >
                <AbsGamesRules
                  rulesimage={e.rulesimage}
                  heading={e.heading}
                  para={e.para}
                  para2={e.para2}
                  para3={e.para3}
                  para4={e.para4}
                  para5={e.para5}
                />
              </div>
            )
          })}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <AbsDiv />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rules
