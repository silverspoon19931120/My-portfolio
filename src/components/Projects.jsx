import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import SubHeader from "./SubHeader";

import Project from "./Project";

import AZAImage from "../assets/images/aza.png";
import Assets360Image from "../assets/images/assets360.png";
import EtijarImage from "../assets/images/etijar.png";
import Gee2Image from "../assets/images/gee2.png";
import SmartboxImage from "../assets/images/smartbox.png";
import divvyImage from "../assets/images/divvy.jpg";
import solseaImage from "../assets/images/solsea.jpg";
import accelerlistImage from "../assets/images/ACCELERLIST.jpg";
import VENCRUImage from "../assets/images/VENCRU.jpg";
import AUTOMA8Image from "../assets/images/AUTOMA8.jpg";
import BOUNTYHIVEImage from "../assets/images/BOUNTYHIVE.jpg";
import KOMBATLINKImage from "../assets/images/KOMBATLINK.jpg";
import SKUSUITEImage from "../assets/images/SKUSUITE.jpg";


const items = [
  {
    name: "AZA",
    details:
      "A fintech mobile application which enables users to perform P2P transactions, invest their money, and securely store funds in a vault for future needs",
    image: AZAImage,
    site: "https://www.azanaija.com/",
    showCode: false,
    showSite: true,
    techStack:
      "React Native, Redux, Typescript, reanimated, expo-notifications, expo-linking sentry and Jest",
  },
  {
    name: "assets 360",
    details:
      "This is a sample of a project that I have completed for a client. The 360 Image Stitcher is a powerful app that allows users to create immersive 360-degree images using their mobile device's camera and motion sensors.",
    image: Assets360Image,
    site: "https://getassets360.onrender.com/",
    showCode: false,
    showSite: true,
    techStack: "React, tailwindcss, express, open-cv and python",
  },
  {
    name: "Gee2",
    details:
      "A transportation mobile app that enables passengers to request rides while providing drivers with the ability to receive payments. It is mainly used In Enugu State of Nigeria.",
    image: Gee2Image,
    site: "https://gee2rides.com/",
    showCode: false,
    showSite: true,
    techStack:
      "React Native, Redux, Typescript, reanimated + moti, Google maps and Jest",
  },
  {
    name: "Etijar",
    details: "A fintech mobile application for keeping track of loans",
    image: EtijarImage,
    site: "https://www.etijar.com/",
    showCode: false,
    showSite: true,
    techStack: "React Native, Redux, Typescript, reanimated and Jest",
  },

  {
    name: "Smart box",
    details: "React app that uses AI to detect faces and apparels in an image.",
    image: SmartboxImage,
    site: "https://silverspoon19931120.github.io/smart-box/",
    showCode: false,
    showSite: true,
    techStack: "React, Redux, Redux-thunk, MUI and clarifai",
  },
  {
    name: "DIVVY",
    details: "Created the Betting pool and House Pool and minted House Token and cron jobs with Sportsdata.io and feeds account on Switchboard and development about market and settle bet",
    image: divvyImage,
    site: "https://divvy.bet/",
    showCode: false,
    showSite: true,
    techStack: "Solana, Rust, React, Sportsdata, Switchboard, Git, Typescript, UnitTest",
  },
  {
    name: "SOLSEA",
    details: "-First NFT marketplace that enables creators to choose and embed licenses when they mint NFTs, Onesignal for marketing automation Analytics with Google, Working on Rust to develop distributed applications on Solana, Bootstrap for UI framework ,Built NFT marketplace by using SPL token",
    image: solseaImage,
    site: "https://solsea.io/",
    showCode: false,
    showSite: true,
    techStack: "Rust, Solana, React, NodeJs, Git, Express, ",
  },
  {
    name: "ACCELERLIST",
    details: "Responsible for developing one of the best third-party Amazon listing software platforms for most sellers, Platform is less expensive, faster.",
    image: accelerlistImage,
    site: "https://www.accelerlist.com/",
    showCode: false,
    showSite: true,
    techStack: "React, Python, Dymo, Zebra",
  },
  {
    name: "VENCRU",
    details: "Collaborated and coordinated development of platform to manage business operations and client facing needs, Platform captures client information, tracks inventory, sends invoices, and processes payments",
    image: VENCRUImage,
    site: "https://www.vencru.com/",
    showCode: false,
    showSite: true,
    techStack: "ASP.NET backend and AngularJS",
  },
  {
    name: "AUTOMA8",
    details: "Handled designing system infrastructure, solving all technical problems by analyzing 20+ technology systems in place and worked to consolidate them with 1 new system that encompassed all programs needed to reach business needs. ",
    image: AUTOMA8Image,
    site: "https://aevent.com/",
    showCode: false,
    showSite: true,
    techStack: "Redis, Azure Messaging(Amazon SQS), Apache Kafka, Restful API, API Integration, Powershell & Python Automation, Http Live Streaming, P2P WebSocket, PHP(Laravel), C#, Vue.JS, Multi Tenant",
  },
  {
    name: "BOUNTYHIVE",
    details: "Released the most complex and fully featured Bounty Hunting platform, connecting ICOs and Bounty Hunters",
    image: BOUNTYHIVEImage,
    site: "https://bountyhive.io/",
    showCode: false,
    showSite: true,
    techStack: "Delivered an industry leading platform to revolutionize the content while exceeding client expectations",
  },
  {
    name: "KOMBATLINK",
    details: "Developed the free-to-join online eSports community to compete against players from around the world ",
    image: KOMBATLINKImage,
    site: "https://kombatlink.com/",
    showCode: false,
    showSite: true,
    techStack: "Upgraded website, resolved issues and added features to be supported with latest responsive design strategies",
  },
  {
    name: "SKUSUITE",
    details: "Developed platform to offer complete cloud-based software solution to facilitate B2B and B2C integration",
    image: SKUSUITEImage,
    site: "https://www.skusuite.com/",
    showCode: false,
    showSite: true,
    techStack: "Improved overall efficiency in order processing and shipping from most popular marketplaces and shopping carts",
  }
];

function Projects() {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      <div className="w-full my-10">
        <SubHeader title="Chronicles of a legacy" leftText={"Vol.1 Ch.3"} />
      </div>
      <h1 className="sm:text-9xl text-7xl mb-20 -rotate-3" id="projectsId">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center sm:gap-12 gap-0">
        {items.map((item, i) => (
          <Project
            key={i}
            title={item.name}
            details={item.details}
            image={item.image}
            site={item.site}
            showCode={item.showCode}
            showSite={item.showSite}
            techStack={item.techStack}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
