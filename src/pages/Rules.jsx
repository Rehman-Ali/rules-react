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
        "CHOOSE YOUR LEAGUE BASED ON THE AMOUNT OF ETH YOU ARE READY TO RISK ON YOUR WAGER. THE LOWER THE BET, THE MORE COMPETITORS IN THE POOL.",
      stepHeading2: "step 2",
      stepPara2:
        "PLACE YOUR BET FOR THE EVENT. SOME EVENTS WILL HAVE TWO OPTIONS, OTHER EVENTS WILL HAVE A THIRD OPTION (A DRAW, FOR INSTANCE).",
      stepHeading3: "step 3",
      stepPara3: "VALIDATE YOUR BET.",
    },
    {
      icon: cardsword,
      fonttitle: "clash of champions",
      backsideHeading: "clash of champions",
      backsideDisp: "Simple/Multiple event pools: tournament 1D2 game mode",
      stepHeading: "step 1",
      stepPara: "CHOOSE YOUR LEAGUE.",
      stepHeading2: "step 2",
      stepPara2:
        "PLACE YOUR BET FOR THE EVENT. IN OUR CLASH OF CHAMPIONS MODE, BETTORS PLACE MULTIPLE BETS FOR A GIVEN EVENT/EVENTS.",
      stepHeading3: "step 3",
      stepPara3: "VALIDATE YOUR BET.",
    },
    {
      icon: cardtrophy,
      fonttitle: "GRAND CHELEM",
      backsideHeading: "GRAND CHELEM",
      backsideDisp: "Series multiple event pools: tournament custom game mode",
      stepHeading: "step 1",
      stepPara: "CHOOSE YOUR LEAGUE.",
      stepHeading2: "step 2",
      stepPara2:
        "PLACE YOUR BET FOR THE EVENT. IN OUR GRAND CHELEM (SLAM) MODE, BETTORS MAKE PICKS THAT 'RUN' FOR THE ENTIRE LENGTH OF THE TOURNAMENT.",
      stepHeading3: "step 3",
      stepPara3: "VALIDATE YOUR BET.",
    },
  ])
  const [rulesData, setRuleData] = useState([
    {
      rulesimage: frofeit,
      heading: "forfeit",
      para: "Any user can decide to stop their participation before the live event starts (the pool will be automatically locked via Smart Contract) or during the event through withdrawing their bet, but will forfeit:",
      para2:
        "10% of the registration fee before the launch of the event, or first event of the series,",
      para3:
        "50% of the registration fee after the first event (for series pools),",
      para4:
        "75% of the registration fee after the second event (for series pools),",
      para5: "100% after the start of the third event.",
    },
    {
      rulesimage: payout,
      heading: "payouts structure",
      para: "According to the number of participants in each pool, the payout structure will work as follows.",
      para2:
        "For King of the Ring pools, the winners take all. As there are up to three different bets possible in a given pool, the players who wagered correctly will earn and split equally the pool winnings.",
      para3:
        "For the two other game modes (Clash of Champions and Grand Chelem), there will be a ranking among players, either over one or several events, and the prize pool will be split from 1 up to 1,500 players depending on the total number of the players in pool for a given league.",
    },
    {
      rulesimage: resutls,
      heading: "RESULTS RECONCILIATION PERIOD",
      para: "During Alpha & Beta versions of the platform, wager reconciliation will be centralized (manual) in order to secure and build a robust blockchain infrastructure to guarantee the safety of the players’ funds. For Alpha & Beta versions of the platform, this period will be within forty-eight hours after the conclusion of the event (or last event for a series).  ",
      para2:
        "The Defi All Odds team will work quickly to reduce this period to a twelve-hour window after the implementation of oracles (automation of data pulling). The reconciliation process will then be semi-automated.",
      para3:
        "After stress-testing the semi-automated reconciliation system (estimated to be a few months in length), the DAO team aims to fully automate the reconciliation process, allowing the platform to provide, almost instantly after the final result of the live event, the winning prizes for players on their personal dashboard",
    },
    {
      rulesimage: badge,
      heading: "HOW TO WIN?",
      para: "No algorithm or shady tricks to manipulate odds. You play against other players! ",
      para2:
        "You don’t need to have the perfect bet structure; simply beat your peers in the pool to win the first prize (for Clash of Champions and Grand Chelem) or to split the pot with the other winners (for King of the Ring).",
      para3:
        "For the Clash of Champions tournament pools, for each correct wager you make you earn one point. All the points are aggregated after each live event. The bettors with the most points at the end of the event will split the prize pot according to the payout structure.",
      para4:
        "For the Grand Chelem series tournament pools, for each good bet you make you earn x points according to the real event/sport calculation mode plus the potential handicap or bonus factor. All the points are aggregated after each live event and accumulate for the whole period of the series. The bettors with the most points at the end of the series split the prize pot according to the payout structure.",
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
              <AbsHeading heading="How to play  ?" />
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
