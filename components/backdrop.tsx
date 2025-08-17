"use client"

import { motion } from "motion/react"

export function Backdrop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 bg-black/20"
    />
  )
}
