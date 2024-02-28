import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import Users from "./images/Users";
import ChooseOportunity from "./images/ChooseOportunity";
import IdeationChallange from "./images/IdeationChallange";
import PhaseGateProcess from "./images/PhaseGateProcess";
import GenerateIdeas from "./images/GenerateIdeas";
import RateIdeas from "./images/RateIdeas";
import TransformIdeas from "./images/TransformIdeas";
import Implement from "./images/Implement";
import MainIcon from "./images/MainIcon";
import PointIcon from "./images/PointIcon";
import Arrow from "./images/Arrow";
import FirstArrow from "./images/FirstArrow";
import ReverseArrow from "./images/ReverseArrow";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Noto Sans', sans-serif",
    mainBg: "#fff",
    pointIcon: <PointIcon bg="#F63D68" borderColor="#F2F4F7" />,
    arrow: <Arrow color="#000" />,
    firstArrow: <FirstArrow color="#000" />,
    step1: {
      duty: [
        {
          icon: <ChooseOportunity color="#000" />,
          title: "Choose opportunity space",
          titleColor: "#000",
          bg: "#F2F4F7",
        },
      ],
      users: <Users color="#F63D68" />,
      dutyOf: {
        label: "Strategic management",
        color: "#000",
      },
    },
    step2: {
      duty: [
        {
          icon: <IdeationChallange color="#000" />,
          title: "Set up ideation challenge",
          titleColor: "#000",
          bg: "#F2F4F7",
        },
        {
          icon: <PhaseGateProcess color="#000" />,
          title: "Define phase-gate process",
          titleColor: "#000",
          bg: "#F2F4F7",
        },
      ],
      users: <Users color="#F63D68" />,
      dutyOf: {
        label: "Innovation management",
        color: "#000",
      },
    },
    mainDiv: {
      icon: <MainIcon color="#000" circleBg="#F63D68" borderColor="#fff" />,
      innerCircleBg: "#fff",
      outerCircleBg: "#F2F4F7",
      topInfo: {
        icon: <GenerateIdeas color="#000" />,
        title: "Generate ideas",
        titleColor: "#000",
      },
      bottomInfo: {
        icon: <RateIdeas color="#000" />,
        title: "Validate and rate ideas",
        titleColor: "#000",
      },
    },
    step3: {
      duty: [
        {
          icon: <TransformIdeas color="#000" />,
          title: "Transform ideas into concepts",
          titleColor: "#000",
          bg: "#F2F4F7",
        },
        {
          icon: <Implement color="#000" />,
          title: "Implement the promising ventures",
          titleColor: "#000",
          bg: "#F2F4F7",
        },
      ],
      users: <Users color="#F63D68" />,
      dutyOf: {
        label: "R&D departments",
        color: "#000",
      },
    },

    loopBack: {
      show: true,
      label: "Rewarding system",
      color: "#000",
      arrow: <ReverseArrow color="#000" />,
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
