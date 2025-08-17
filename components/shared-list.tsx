"use client"

import { Backdrop } from "@/components/backdrop"
import { GAMES } from "@/data/games"
import { AnimatePresence } from "framer-motion"
import { useQueryState } from "nuqs"
import { useEffect } from "react"
import { ActiveGame } from "./active-game"
import { GameItem } from "./game-item"

export function SharedList() {
  const [activeGameId, setActiveGameId] = useQueryState("gameId", {
    history: "push",
  })
  const activeGame = GAMES.find((game) => game.id === activeGameId)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGameId(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <AnimatePresence>{activeGame ? <Backdrop /> : null}</AnimatePresence>
      <AnimatePresence>
        {activeGame ? (
          <ActiveGame
            activeGame={activeGame}
            onClickAway={() => setActiveGameId(null)}
          />
        ) : null}
      </AnimatePresence>
      <ul className="relative flex flex-col">
        {GAMES.map((game) => (
          <GameItem game={game} onClick={() => setActiveGameId(game.id)} />
        ))}
      </ul>
    </>
  )
}
