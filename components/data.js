import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,

} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/launch.svg";

const benefitOne = {
  title: "Why our technology works",
  desc: "Accessing underdeveloped communities through muliple technological mediums gives us the ablity to analyze and serve skills development needs on a network currently not avalible in the market.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Locally Intergrated",
      desc: "Implemented within hundreds of schools and churches in underdeveloped communities across South Africa.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Rapid Opportunity Placement",
      desc: "Students recommended to the Nsight network are placed within a skill development opportunities within 30 days.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Continuous Development",
      desc: "Current B2B operations enable us to analyse and better communicate with undeveloped community across South Africa.",
      icon: <CursorClickIcon />,
    },
  ],
};

export { benefitOne };
