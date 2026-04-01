"use client";

import { useRouter } from "next/navigation";

type NavButtonProps = {
  href: string;
  children: string;
};

export function NavButton({ href, children }: NavButtonProps) {
  const router = useRouter();

  return (
    <button className="button" type="button" onClick={() => router.push(href)}>
      {children}
    </button>
  );
}
