import ThemeSwitcher from "./ThemeSwitcher"
import Link from "next/link"
export default function Header() {
  return (
    <header className="shadow-md p-6 bg-[--secondrybg] text-sm sm:text-[1rem]">
        <div className="flex justify-between items-center max-w-[1350px] mx-auto">
            <Link href="/" className="font-extrabold">Where in the world?</Link>
            <ThemeSwitcher />
        </div>
    </header>
  )
}
