"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
];
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);

        return (
          <Link
            key={link.name}
            href={link.href}
            className={isActive ? "from-bold mr-4" : "text-blue-500 mr-5"}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default AuthLayout;
