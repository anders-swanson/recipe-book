import Link from "next/link";

interface LinkTProps {
  children: React.ReactNode;
  href: string;
}

export function LinkT({ href, children }: LinkTProps) {
  return (
    <Link target="_blank" href={href}>
      {children}
    </Link>
  );
}
