"use client"

import { useClickAway } from "@uidotdev/usehooks"
import { useRouter } from "next/navigation"
import type { ComponentPropsWithoutRef } from "react"

type Props = ComponentPropsWithoutRef<"div">

export function ClickAway(props: Props) {
  const router = useRouter()
  const ref = useClickAway<HTMLDivElement>(router.back)

  return <div ref={ref} {...props} />
}
