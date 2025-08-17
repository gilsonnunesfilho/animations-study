"use client"

import { useClickAway } from "@uidotdev/usehooks"
import { motion } from "framer-motion"
import Image from "next/image"

const MotionImage = motion.create(Image)

type Props = {
  activeGame: {
    title: string
    image: string
    description: string
    longDescription: string
  }
  onClickAway: () => void
}

export function ActiveGame({ activeGame, onClickAway }: Props) {
  const ref = useClickAway<HTMLDivElement>(onClickAway)

  return (
    <div className="absolute inset-0 z-10 grid place-items-center p-2.5">
      <motion.div
        ref={ref}
        layoutId={`card-${activeGame.title}`}
        className="not-dark:shadow-lg dark:inset-ring-1 dark:inset-ring-neutral-800 flex h-fit w-full max-w-lg flex-col items-start gap-4 overflow-clip bg-white p-4 dark:bg-neutral-900"
        style={{ borderRadius: 12 }}
      >
        <div className="flex w-full items-center gap-4">
          <MotionImage
            layoutId={`image-${activeGame.title}`}
            height={56}
            width={56}
            alt=""
            src={activeGame.image}
            style={{ borderRadius: 12 }}
          />
          <div className="flex grow items-center justify-between">
            <div className="content-wrapper">
              <motion.h2
                layoutId={`title-${activeGame.title}`}
                className="text-sm font-medium"
              >
                {activeGame.title}
              </motion.h2>
              <motion.p
                layoutId={`description-${activeGame.title}`}
                className="text-sm text-neutral-500"
              >
                {activeGame.description}
              </motion.p>
            </div>
            <motion.button
              layoutId={`button-${activeGame.title}`}
              className="rounded-full bg-neutral-100 px-3 py-1 font-semibold text-blue-600 dark:bg-neutral-800 dark:text-blue-500"
            >
              Get
            </motion.button>
          </div>
        </div>
        <motion.p
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.05 } }}
          className="text-sm text-neutral-500"
        >
          {activeGame.longDescription}
        </motion.p>
      </motion.div>
    </div>
  )
}
