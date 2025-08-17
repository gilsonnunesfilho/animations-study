"use client"

import { SpinnerIcon } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <motion.polyline
        initial={{
          strokeWidth: 0,
          pathLength: 0,
        }}
        animate={{
          strokeWidth: 16,
          pathLength: 1,
        }}
        transition={{
          type: "tween",
          delay: 0.5,
          duration: 0.3,
          ease: "circOut",
        }}
        points="40 144 96 200 224 72"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  )
}

const buttonCopy = {
  idle: "Send me a login link",
  loading: <SpinnerIcon size={24} className="animate-spin text-white/65" />,
  success: (
    <motion.div
      initial={{ x: 12.5 }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.5,
        bounce: 0,
      }}
      className="flex items-center gap-2"
    >
      Link sent! <CheckIcon />
    </motion.div>
  ),
}

export function SmoothButton() {
  const [buttonState, setButtonState] = useState<
    "idle" | "loading" | "success"
  >("idle")
  const disabled = buttonState !== "idle"
  return (
    <motion.button
      type="button"
      whileHover={{
        scale: disabled ? 1 : 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      data-state={buttonState}
      disabled={disabled}
      className="relative grid place-items-center overflow-hidden rounded-full bg-blue-700 px-6 py-3 transition-colors hover:bg-blue-800 data-[state=loading]:bg-gray-700 data-[state=success]:bg-green-700"
      onClick={() => {
        setButtonState("loading")
        setTimeout(() => {
          setButtonState("success")
        }, 1750)
        setTimeout(() => {
          setButtonState("idle")
        }, 4000)
      }}
    >
      <span aria-hidden className="opacity-0">
        {buttonCopy["idle"]}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          className="absolute"
          key={buttonState}
        >
          {buttonCopy[buttonState]}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}
