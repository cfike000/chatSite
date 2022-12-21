import InnerChat from "../components/InnerChat"
import HeaderNav from "../components/HeaderNav"
import { Link } from "react-router-dom"
import React from "react"
import { motion as m } from "framer-motion"
import SideUser from "../components/SideUser"
const Home = () => {
  return (
    <m.div
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 left-0 w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white w-[90%] max-w-2xl overflow-hidden rounded">
        <HeaderNav />
        <div className="flex flex-col">
          <div className="flex h-[32rem] sm:h-[62rem]">
            <div
              className="bg-slate-200 w-48 h-border border-r-slate-500/[.15]  overflow-auto
            "
            >
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
              <SideUser />
            </div>
            <div className="bg-white w-full flex flex-col">
              <div className="overflow-auto">
                <InnerChat></InnerChat>
              </div>
            </div>
          </div>
          <div className="  bg-slate-700 h-20 w-full flex items-center justify-between">
            <input className=" mx-2 w-16 bg-slate-50 rounded-sm sm:w-[75%] sm:h-10 basis-3/4 outline-2 outline-blue-500"></input>
            <div className="flex items-center justify-around basis-1/4 h-full mr-2">
              <div className="bg-blue-500 hover:bg-blue-700 text-white rounded h-8 w-12 text-[.8em] sm:text-sm flex items-center sm:h-10 sm:w-16 justify-center ">
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Home
