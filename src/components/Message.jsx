import React from "react"

const Message = () => {
  return (
    <div className="w-full flex">
      {/* Reversed Order depending on person */}
      <div className="flex flex-col items-center justify-start my-2  w-16 h-32 space-y-2 sm:w-28 px-2">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-600"></div>
        <div className="font-bold">Jim</div>{" "}
        <div className="text-[.6em] flex justify-center items-center">
          2:13pm
        </div>
      </div>
      <div className="flex flex-col my-2 px-2">
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          commodi dolore quos neque iste voluptates iure facilis consectetur
          quibusdam ex, repudiandae blanditiis porro unde id placeat non fugit
          minus numquam dicta vel. Consequuntur alias ducimus temporibus
          voluptatum beatae, quibusdam voluptatibus?
        </div>
      </div>
    </div>
  )
}

export default Message
