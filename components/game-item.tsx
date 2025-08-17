"use client"

import type { Game } from "@/data/games"
import { motion } from "framer-motion"
import Image from "next/image"

const MotionImage = motion.create(Image)

type Props = {
  game: Game
  onClick: () => void
}

export function GameItem({ game, onClick }: Props) {
  return (
    <motion.li
      layoutId={`card-${game.title}`}
      key={game.title}
      onClick={onClick}
      style={{ borderRadius: 8 }}
      className="group flex cursor-pointer items-center gap-4"
    >
      <MotionImage
        layoutId={`image-${game.title}`}
        height={56}
        width={56}
        alt=""
        src={game.image}
        style={{ borderRadius: 12 }}
      />
      <div className="relative flex grow items-center justify-between">
        <div className="group-not-last-of-type:h-px absolute inset-x-0 bottom-0 bg-neutral-200 dark:bg-neutral-800" />
        <div className="flex flex-col py-4">
          <motion.h2
            layoutId={`title-${game.title}`}
            className="text-sm font-medium"
          >
            {game.title}
          </motion.h2>
          <motion.p
            layoutId={`description-${game.title}`}
            className="text-sm text-neutral-500"
          >
            {game.description}
          </motion.p>
        </div>
        <motion.button
          layoutId={`button-${game.title}`}
          className="rounded-full bg-neutral-100 px-3 py-1 font-semibold text-blue-600 dark:bg-neutral-800 dark:text-blue-500"
        >
          Get
        </motion.button>
      </div>
    </motion.li>
  )
}
