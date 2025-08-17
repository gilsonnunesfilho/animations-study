"use client"
import { m, AnimatePresence } from "motion/react"
import { useState } from "react"

export function Component() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div className="text-center">
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        className="rounded-md bg-amber-300 px-4 py-2 dark:bg-amber-800"
      >
        Toggle
      </button>
      <AnimatePresence>
        {isVisible ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-auto size-40 bg-red-500"
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}
