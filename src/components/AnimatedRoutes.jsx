import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"

import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
