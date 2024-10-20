
import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <Link href="/">
      <header className="navbar flex justify-between p-6 border-b border-gray-900">
        <h1 className="text-xl font-bold hover:text-gray-500">Pocket-Farm</h1>
        <div className="flex gap-2">
        </div>
      </header>
    </Link>
  );
}
