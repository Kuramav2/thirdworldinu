/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "./Header";
import Footer from "./Footer";
import Timeline from "./Timeline";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) => `perspective(600px)  scale(${s})`;

export default function Home() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <>
      <Header />
      <div className="container mx-auto flex px-5 py-36 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-7xl font-bold text-5xl items-center Avenir xl:w-2/2 text-white">
            The ERC-20 Coin
            <br /> that gives back
          </h1>

          <p className="mb-4 xl:w-3/4 font-semibold text-white text-lg">
            With the combination of the teams background, as well as the news
            that is always around the world, we have decided to make a coin
            based on giving back to those in need
          </p>

          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <a
                className="inline-flex items-center lg:px-8 lg:py-4 py-2 px-6 lg:text-sm mt-2 text-[11px] font-semibold text-white transition duration-500 ease-in-out transform rounded-full bg-black barabara"
                href="/"
              >
                <span className="justify-center text-[11px]">
                  BUY THIRD WORLD INU
                </span>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <a
                className="inline-flex items-center lg:px-8 lg:py-4 py-2 px-6 ml-10 mt-2  font-semibold text-white transition duration-500 ease-in-out transform rounded-full bg-[#2896cc] border-2 border-black barabara"
                href="https://t.me/ThirdWorldInu"
              >
                <span className="justify-center text-[11px]">TELEGRAM</span>
              </a>
            </motion.div>
          </div>
        </div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <div className="xl:mr-44 sm:mr-0 mb-12 sm:mb-28 lg:mb-16 mr-48 md:pl-10">
            <img
              className="w-[35rem] md:ml-1 ml-24 rounded-2xl"
              alt="Hero"
              src="https://cdn.discordapp.com/attachments/945342091960147968/945358588103249950/third_world_inu_logo_2.png"
            />
          </div>
        </animated.div>
      </div>
      <div className="w-full bg-[url('https://cdn.discordapp.com/attachments/931202903195127839/945418018756898856/HumanitarianRelief.png')] bg-no-repeat bg-cover">
        <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="w-[35rem] rounded-2xl"
              alt="Hero"
              src="https://cdn.discordapp.com/attachments/945342091960147968/945358588103249950/third_world_inu_logo_2.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-white">
              What is Third World Inu about?
            </h1>
            <p className="mb-8 mt-4 leading-relaxed text-lg font-semibold text-white">
              With the everlasting news of third world countries in need, we
              felt the need to bring something to change the world for those who
              are in dire need of humanitarian relief. We believe that every
              single human being deserves a chance at education, or even at the
              bare minimum, hot food and clean water to come to every day. We
              envision a day where all will be living in a world where there
              wouldn't be a need for charity. This won't be your average charity
              coin where only 2% of the total tax collected will be going
              towards charity. All money collected in the charity wallet will be
              given to those charities that fulfils our mission.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/4 flex flex-col mt-6">
                <div className="flex-grow">
                  <h2 className="text-white text-4xl font-bold mb-3">
                    How To Buy
                  </h2>
                  <p className="leading-relaxed text-lg mt-4 text-white">
                    Here is how to buy, and help our cause:
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 490.288 490.288"
                    fill="white"
                  >
                    <g>
                      <path d="M197.994,40.144l68.2-39.4c3.6-2.1,8,0.5,8,4.6v21.6h42.2c46.9,0,85.1,38.2,85.1,85.1h-35.6c0-27.3-22.2-49.5-49.5-49.5   h-42.2v21.6c0,4.1-4.4,6.7-8,4.6l-68.2-39.4C194.494,47.344,194.494,42.144,197.994,40.144z M291.794,440.944l-68.2-39.4   c-3.6-2.1-8,0.5-8,4.6v21.6h-42.2c-27.3,0-49.5-22.2-49.5-49.5h-35.6c0,46.9,38.2,85.1,85.1,85.1h42.2v21.6c0,4.1,4.4,6.7,8,4.6   l68.2-39.4C295.294,448.144,295.294,442.944,291.794,440.944z M346.194,224.244c-10.6,0-19.3,8.6-19.3,19.3   c0,10.6,8.6,19.3,19.3,19.3c10.6,0,19.3-8.6,19.3-19.3C365.494,232.844,356.794,224.244,346.194,224.244z M143.994,224.244   c-10.6,0-19.3,8.6-19.3,19.3c0,10.6,8.6,19.3,19.3,19.3c10.6,0,19.3-8.6,19.3-19.3   C163.294,232.844,154.594,224.244,143.994,224.244z M428.194,161.944v163.2c0,17.5-14.2,31.7-31.7,31.7h-302.7   c-17.5,0-31.7-14.2-31.7-31.7v-163.2c0-17.5,14.2-31.7,31.7-31.7h302.7C413.894,130.144,428.194,144.444,428.194,161.944z    M401.094,196.244c-2.5,0.6-5.2,1-7.9,1c-17.7,0-32.1-14.4-32.1-32.1c0-2.7,0.3-5.3,1-7.8h-235.8c0.4,1.9,0.6,3.9,0.6,5.9   c0,17.7-14.4,32.1-32.1,32.1c-1.9,0-3.8-0.2-5.6-0.5v97.5c1.8-0.3,3.7-0.5,5.6-0.5c17.7,0,32.1,14.4,32.1,32.1c0,2-0.2,4-0.6,5.9   h234.9c-0.2-1.3-0.3-2.6-0.3-4c0-17.7,14.4-32.1,32.1-32.1c2.7,0,5.4,0.4,7.9,1v-98.5H401.094z M314.594,243.544   c0,38.4-31.1,69.5-69.5,69.5s-69.5-31.1-69.5-69.5s31.1-69.5,69.5-69.5C283.494,173.944,314.594,205.144,314.594,243.544z    M238.594,225.444c0-2.5,0.6-4.5,1.8-6.1s3.1-2.4,5.7-2.4c2.5,0,4.6,1,6.1,2.9c1.2,1.6,1.9,3.7,2.2,6.6c0.1,1.3,1.3,2.2,2.6,2.2   l13-0.2c1.4,0,2.6-1.2,2.5-2.6c-0.3-5.7-2.2-10.5-5.5-14.3c-3.4-4-8-6.6-13.7-7.7v-9.8c0-1.2-1-2.2-2.2-2.2h-7.9   c-1.2,0-2.2,1-2.2,2.2v9.5c-6,0.9-10.9,3.1-14.7,6.7c-4.1,4-6.2,9-6.2,15.1c0,6.8,1.9,11.9,5.8,15.4c3.9,3.5,10.1,6.9,18.7,10.4   c3.5,1.5,6,3.1,7.3,4.6c1.4,1.6,2.1,3.8,2.1,6.7c0,2.5-0.7,4.5-2,6s-3.3,2.3-5.9,2.3c-3.1,0-5.6-1-7.6-3c-1.6-1.6-2.6-4.1-2.8-7.4   c-0.1-1.3-1.3-2.3-2.6-2.2l-13,0.2c-1.4,0-2.6,1.2-2.5,2.6c0.3,6.9,2.6,12.2,6.7,16c4.5,4.1,10.1,6.5,16.7,7.3v8.9   c0,1.2,1,2.2,2.2,2.2h7.9c1.2,0,2.2-1,2.2-2.2v-9.2c5.4-1,9.7-3.1,13.1-6.4c4-3.8,6-8.9,6-15.2c0-6.6-2-11.7-5.9-15.3   c-4-3.6-10.1-7.1-18.5-10.7c-3.6-1.6-6.1-3.2-7.4-4.7C239.194,229.944,238.594,227.944,238.594,225.444z" />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-3xl title-font font-medium mb-3">
                    1. Step
                  </h2>
                  <p className="leading-relaxed text-lg text-white">
                    Start by downloading MetaMask or TrustWallet as app to your
                    mobile device or install the browser extension.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 490.288 490.288"
                    fill="white"
                  >
                    <g>
                      <path d="M197.994,40.144l68.2-39.4c3.6-2.1,8,0.5,8,4.6v21.6h42.2c46.9,0,85.1,38.2,85.1,85.1h-35.6c0-27.3-22.2-49.5-49.5-49.5   h-42.2v21.6c0,4.1-4.4,6.7-8,4.6l-68.2-39.4C194.494,47.344,194.494,42.144,197.994,40.144z M291.794,440.944l-68.2-39.4   c-3.6-2.1-8,0.5-8,4.6v21.6h-42.2c-27.3,0-49.5-22.2-49.5-49.5h-35.6c0,46.9,38.2,85.1,85.1,85.1h42.2v21.6c0,4.1,4.4,6.7,8,4.6   l68.2-39.4C295.294,448.144,295.294,442.944,291.794,440.944z M346.194,224.244c-10.6,0-19.3,8.6-19.3,19.3   c0,10.6,8.6,19.3,19.3,19.3c10.6,0,19.3-8.6,19.3-19.3C365.494,232.844,356.794,224.244,346.194,224.244z M143.994,224.244   c-10.6,0-19.3,8.6-19.3,19.3c0,10.6,8.6,19.3,19.3,19.3c10.6,0,19.3-8.6,19.3-19.3   C163.294,232.844,154.594,224.244,143.994,224.244z M428.194,161.944v163.2c0,17.5-14.2,31.7-31.7,31.7h-302.7   c-17.5,0-31.7-14.2-31.7-31.7v-163.2c0-17.5,14.2-31.7,31.7-31.7h302.7C413.894,130.144,428.194,144.444,428.194,161.944z    M401.094,196.244c-2.5,0.6-5.2,1-7.9,1c-17.7,0-32.1-14.4-32.1-32.1c0-2.7,0.3-5.3,1-7.8h-235.8c0.4,1.9,0.6,3.9,0.6,5.9   c0,17.7-14.4,32.1-32.1,32.1c-1.9,0-3.8-0.2-5.6-0.5v97.5c1.8-0.3,3.7-0.5,5.6-0.5c17.7,0,32.1,14.4,32.1,32.1c0,2-0.2,4-0.6,5.9   h234.9c-0.2-1.3-0.3-2.6-0.3-4c0-17.7,14.4-32.1,32.1-32.1c2.7,0,5.4,0.4,7.9,1v-98.5H401.094z M314.594,243.544   c0,38.4-31.1,69.5-69.5,69.5s-69.5-31.1-69.5-69.5s31.1-69.5,69.5-69.5C283.494,173.944,314.594,205.144,314.594,243.544z    M238.594,225.444c0-2.5,0.6-4.5,1.8-6.1s3.1-2.4,5.7-2.4c2.5,0,4.6,1,6.1,2.9c1.2,1.6,1.9,3.7,2.2,6.6c0.1,1.3,1.3,2.2,2.6,2.2   l13-0.2c1.4,0,2.6-1.2,2.5-2.6c-0.3-5.7-2.2-10.5-5.5-14.3c-3.4-4-8-6.6-13.7-7.7v-9.8c0-1.2-1-2.2-2.2-2.2h-7.9   c-1.2,0-2.2,1-2.2,2.2v9.5c-6,0.9-10.9,3.1-14.7,6.7c-4.1,4-6.2,9-6.2,15.1c0,6.8,1.9,11.9,5.8,15.4c3.9,3.5,10.1,6.9,18.7,10.4   c3.5,1.5,6,3.1,7.3,4.6c1.4,1.6,2.1,3.8,2.1,6.7c0,2.5-0.7,4.5-2,6s-3.3,2.3-5.9,2.3c-3.1,0-5.6-1-7.6-3c-1.6-1.6-2.6-4.1-2.8-7.4   c-0.1-1.3-1.3-2.3-2.6-2.2l-13,0.2c-1.4,0-2.6,1.2-2.5,2.6c0.3,6.9,2.6,12.2,6.7,16c4.5,4.1,10.1,6.5,16.7,7.3v8.9   c0,1.2,1,2.2,2.2,2.2h7.9c1.2,0,2.2-1,2.2-2.2v-9.2c5.4-1,9.7-3.1,13.1-6.4c4-3.8,6-8.9,6-15.2c0-6.6-2-11.7-5.9-15.3   c-4-3.6-10.1-7.1-18.5-10.7c-3.6-1.6-6.1-3.2-7.4-4.7C239.194,229.944,238.594,227.944,238.594,225.444z" />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-3xl title-font font-medium mb-3">
                    2. Step
                  </h2>
                  <p className="leading-relaxed text-lg text-white">
                    Buy ETH on an exchange (i.e. Binance, Kraken, Coinbase etc.)
                    and transfer the tokens to your MetaMask wallet adress.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 490.288 490.288"
                    fill="white"
                  >
                    <g>
                      <path d="M197.994,40.144l68.2-39.4c3.6-2.1,8,0.5,8,4.6v21.6h42.2c46.9,0,85.1,38.2,85.1,85.1h-35.6c0-27.3-22.2-49.5-49.5-49.5   h-42.2v21.6c0,4.1-4.4,6.7-8,4.6l-68.2-39.4C194.494,47.344,194.494,42.144,197.994,40.144z M291.794,440.944l-68.2-39.4   c-3.6-2.1-8,0.5-8,4.6v21.6h-42.2c-27.3,0-49.5-22.2-49.5-49.5h-35.6c0,46.9,38.2,85.1,85.1,85.1h42.2v21.6c0,4.1,4.4,6.7,8,4.6   l68.2-39.4C295.294,448.144,295.294,442.944,291.794,440.944z M346.194,224.244c-10.6,0-19.3,8.6-19.3,19.3   c0,10.6,8.6,19.3,19.3,19.3c10.6,0,19.3-8.6,19.3-19.3C365.494,232.844,356.794,224.244,346.194,224.244z M143.994,224.244   c-10.6,0-19.3,8.6-19.3,19.3c0,10.6,8.6,19.3,19.3,19.3c10.6,0,19.3-8.6,19.3-19.3   C163.294,232.844,154.594,224.244,143.994,224.244z M428.194,161.944v163.2c0,17.5-14.2,31.7-31.7,31.7h-302.7   c-17.5,0-31.7-14.2-31.7-31.7v-163.2c0-17.5,14.2-31.7,31.7-31.7h302.7C413.894,130.144,428.194,144.444,428.194,161.944z    M401.094,196.244c-2.5,0.6-5.2,1-7.9,1c-17.7,0-32.1-14.4-32.1-32.1c0-2.7,0.3-5.3,1-7.8h-235.8c0.4,1.9,0.6,3.9,0.6,5.9   c0,17.7-14.4,32.1-32.1,32.1c-1.9,0-3.8-0.2-5.6-0.5v97.5c1.8-0.3,3.7-0.5,5.6-0.5c17.7,0,32.1,14.4,32.1,32.1c0,2-0.2,4-0.6,5.9   h234.9c-0.2-1.3-0.3-2.6-0.3-4c0-17.7,14.4-32.1,32.1-32.1c2.7,0,5.4,0.4,7.9,1v-98.5H401.094z M314.594,243.544   c0,38.4-31.1,69.5-69.5,69.5s-69.5-31.1-69.5-69.5s31.1-69.5,69.5-69.5C283.494,173.944,314.594,205.144,314.594,243.544z    M238.594,225.444c0-2.5,0.6-4.5,1.8-6.1s3.1-2.4,5.7-2.4c2.5,0,4.6,1,6.1,2.9c1.2,1.6,1.9,3.7,2.2,6.6c0.1,1.3,1.3,2.2,2.6,2.2   l13-0.2c1.4,0,2.6-1.2,2.5-2.6c-0.3-5.7-2.2-10.5-5.5-14.3c-3.4-4-8-6.6-13.7-7.7v-9.8c0-1.2-1-2.2-2.2-2.2h-7.9   c-1.2,0-2.2,1-2.2,2.2v9.5c-6,0.9-10.9,3.1-14.7,6.7c-4.1,4-6.2,9-6.2,15.1c0,6.8,1.9,11.9,5.8,15.4c3.9,3.5,10.1,6.9,18.7,10.4   c3.5,1.5,6,3.1,7.3,4.6c1.4,1.6,2.1,3.8,2.1,6.7c0,2.5-0.7,4.5-2,6s-3.3,2.3-5.9,2.3c-3.1,0-5.6-1-7.6-3c-1.6-1.6-2.6-4.1-2.8-7.4   c-0.1-1.3-1.3-2.3-2.6-2.2l-13,0.2c-1.4,0-2.6,1.2-2.5,2.6c0.3,6.9,2.6,12.2,6.7,16c4.5,4.1,10.1,6.5,16.7,7.3v8.9   c0,1.2,1,2.2,2.2,2.2h7.9c1.2,0,2.2-1,2.2-2.2v-9.2c5.4-1,9.7-3.1,13.1-6.4c4-3.8,6-8.9,6-15.2c0-6.6-2-11.7-5.9-15.3   c-4-3.6-10.1-7.1-18.5-10.7c-3.6-1.6-6.1-3.2-7.4-4.7C239.194,229.944,238.594,227.944,238.594,225.444z" />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-3xl title-font font-medium mb-3">
                    3. Step
                  </h2>
                  <p className="leading-relaxed text-lg text-white">
                    Swap ETH for $TWI (on UniSwap). Now add Third World Inu to
                    your Metamask or TrustWallet to view your $TWI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#5562c5]">
        <div className="container px-5 py-24 mx-auto mt-24">
          <h1 className="sm:text-5xl text-2xl font-bold title-font text-center text-white mb-20">
            Our Tokenomics
          </h1>
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center ">
                <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 490 490"
                    fill="white"
                  >
                    <g>
                      <path d="M313.58,219.083c4.919-4.92,16.576-9.749,23.534-9.749L490,209.336v-30l-152.886-0.001   c-14.944,0-34.182,7.969-44.748,18.536L160.562,329.675c-14.941,14.941-18.416,37.059-10.455,55.355H50c-27.57,0-50,22.43-50,50   s22.43,50,50,50h203.852l192.293-134.131H490v-30h-53.285L244.422,455.03H50c-11.028,0-20-8.972-20-20s8.972-20,20-20h145.939   c13.348-0.006,25.896-5.206,35.334-14.645l107.692-107.691l-21.213-21.213L210.06,379.172c-3.777,3.777-8.799,5.858-14.142,5.858   s-10.365-2.081-14.143-5.858c-7.798-7.798-7.797-20.486,0-28.284L313.58,219.083z" />
                      <path d="M106.36,289.03c58.647,0,106.36-47.713,106.36-106.36c0-23.07-7.266-45.02-21.027-63.497L106.36,4.97L21.014,119.192   C7.267,137.649,0,159.599,0,182.67C0,241.317,47.713,289.03,106.36,289.03z M45.06,137.13l61.3-82.04l61.287,82.021   c9.861,13.24,15.073,28.994,15.073,45.558c0,42.105-34.255,76.36-76.36,76.36S30,224.775,30,182.67   C30,166.105,35.212,150.351,45.06,137.13z" />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-bold mb-3">
                    3% charity
                  </h2>
                  <p className="leading-relaxed text-base text-white w-64">
                    3% of every buy and sell goes straight to the charity
                    wallet, directly donated to a charity.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 211.618 211.618"
                    fill="white"
                  >
                    <path d="M204.118,202.309H7.5c-4.142,0-7.5-3.357-7.5-7.5v-178c0-4.143,3.358-7.5,7.5-7.5s7.5,3.357,7.5,7.5v170.5h189.118  c4.142,0,7.5,3.357,7.5,7.5S208.26,202.309,204.118,202.309z M188.854,93.754c-1.932-1.413-4.424-1.819-6.703-1.092l-47.875,15.254  l-16.317-47.958c-0.74-2.176-2.437-3.892-4.604-4.656c-2.166-0.767-4.565-0.495-6.507,0.735L78.768,73.809L43.2,28.261  c-1.971-2.523-5.325-3.519-8.352-2.476c-3.027,1.042-5.059,3.891-5.059,7.092v133.863c0,4.143,3.358,7.5,7.5,7.5h147.139  c4.142,0,7.5-3.357,7.5-7.5V99.809C191.928,97.416,190.786,95.167,188.854,93.754z" />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-bold mb-3">
                    5% Marketing
                  </h2>
                  <p className="leading-relaxed text-base text-white w-64">
                    5% of every buy and sell will be used to further the reach
                    of our coin, including CEX listings.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 30.272 30.272"
                    fill="white"
                  >
                    <g>
                      <g>
                        <path d="M13.53,3.182l-0.002,13.527l13.53,0.003c0,7.473-6.055,13.528-13.528,13.528C6.058,30.241,0,24.185,0,16.713    C0,9.264,6.017,3.224,13.452,3.182C13.479,3.182,13.505,3.182,13.53,3.182z" />
                        <path d="M15.71,0.032c8.043,0,14.562,6.523,14.562,14.566L15.7,14.614C15.7,14.614,15.652,0.032,15.71,0.032z" />
                      </g>
                      <g></g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-bold mb-3">
                    2% liquidity
                  </h2>
                  <p className="leading-relaxed text-base text-white w-64">
                    2% of every buy and sell going straight to the Liquidity
                    pool to hold a stable floor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-24 mt-12">
        <div className="text-white">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-5xl text-2xl font-bold title-font text-center text-white mb-16">
              Charities that we've donated to
            </h1>
            <div className="flex flex-wrap ">
              <div className="p-4 md:w-1/3">
                <div className="h-full overflow-hidden bg-white rounded-2xl">
                  <img
                    className="lg:h-60 md:h-36 w-full object-contain object-center"
                    src="https://cdn.discordapp.com/attachments/945342091960147968/945439808312975440/IMG_0757.png"
                    alt=""
                  />
                  <div className="p-6">
                    <h2 className="text-3xl title-font font-bold text-black mb-1">
                      TBA
                    </h2>
                    <p className="mb-3 text-lg text-black">TBA</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full overflow-hidden bg-white rounded-2xl">
                  <img
                    className="lg:h-60 md:h-36 w-full object-contain object-center"
                    src="https://cdn.discordapp.com/attachments/945342091960147968/945437164349579314/IMG_0755.png"
                    alt=""
                  />
                  <div className="p-6">
                    <h2 className="text-3xl title-font font-bold text-black mb-1">
                      TBA
                    </h2>
                    <p className="mb-3 text-lg text-black">TBA</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full overflow-hidden bg-white rounded-2xl">
                  <img
                    className="lg:h-60 md:h-36 w-full object-fit object-center"
                    src="https://cdn.discordapp.com/attachments/945342091960147968/945440021165531136/IMG_0758.png"
                    alt=""
                  />
                  <div className="p-6">
                    <h2 className="text-3xl title-font font-bold text-black mb-1">
                      TBA
                    </h2>
                    <p className="mb-3 text-lg text-black">TBA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#5562c5] py-32">
        <Timeline />
      </div>
      <Footer />
    </>
  );
}
