import React from "react"
import { HiHome } from "react-icons/hi"
import { BiMessageAdd } from "react-icons/bi"
import { FaUserFriends } from "react-icons/fa"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
const HeaderNav = () => {
  return (
    <div className="bg-slate-800 h-12 w-full flex items-center justify-between drop-shadow-lg">
      <div className=" text-white pl-4 hidden sm:flex">Hello, Carl</div>
      <div className="flex items-baseline justify-between px-4 w-full sm:w-60 sm:pr-4">
        <HiHome className="fill-white" size={24} />
        <BiMessageAdd className="fill-white" size={24} />
        <FaUserFriends className="fill-white" size={24} />
        <Link to="/">
          <BiLogOut className="fill-white" size={24} />
        </Link>
      </div>
    </div>
  )
}
//Home

//Create new Message

//add friend

//Logout
export default HeaderNav
