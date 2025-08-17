import SharedLayout from "@/components/shared-list"
import Image from "next/image"
import COVER_IMG from "./image.png"

export default function Home() {
  return (
    <div className="grid min-h-svh grid-rows-[1fr_auto] items-center md:grid-cols-[1fr_2fr] md:grid-rows-1">
      <Image
        src={COVER_IMG}
        alt="Cover Image"
        placeholder="blur"
        className="size-full object-cover"
      />
      <div className="container mx-auto max-w-prose p-5">
        <h2 className="mb-2.5 border-b border-neutral-200 py-2.5 text-2xl font-bold dark:border-neutral-800">
          Top Picks
        </h2>
        <SharedLayout />
      </div>
    </div>
  )
}
