import Link from "next/link"

import { links } from "@/lib/constants"

export default function Nav() {
  return (
    <>
      <nav className="flex items-center gap-6">
        {links.map(({ external, ...link }) =>
          external ? <NavItemExternal {...link} /> : <NavItem {...link} />
        )}
      </nav>
    </>
  )
}

export function NavItem({ href = "/", label = "" }) {
  return (
    <Link
      href={href}
      className="text-sm leading-6 cursor-pointer py-1 text-neutral-900 hover:text-red-600 transition-colors"
    >
      {label}
    </Link>
  )
}

export function NavItemExternal({ href = "/", label = "" }) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="text-sm leading-6 cursor-pointer py-1 text-neutral-900 hover:text-blue-600 transition-colors relative"
    >
      <span>{label}</span>
      <ExternalSvg />
    </Link>
  )
}

export function ExternalSvg() {
  return (
    <svg
      aria-hidden="true"
      height="7"
      viewBox="0 0 6 6"
      width="7"
      className="absolute top-1 -right-2.5"
    >
      <path
        d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
        fill="#999"
      ></path>
    </svg>
  )
}
