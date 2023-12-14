import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const { pathname } = useRouter();
  return (
    <nav className="flex w-full items-center justify-center">
      <h1 className="font-medium text-2xl border-b text-gray-200">
        Top 10 English Premier League Stats
      </h1>
      {/* <div className="flex gap-4 font-semibold text-sm text-blue-100">
        <Link
          href="/"
          className={`${pathname === "/" ? "border-b-2" : "hover:border-b-2"}`}
        >
          Team Stats
        </Link>
        <Link
          href="/player-stats"
          className={`${
            pathname === "/player-stats" ? "border-b-2" : "hover:border-b-2"
          }`}
        >
          Player Stats
        </Link>
      </div> */}
    </nav>
  );
}
