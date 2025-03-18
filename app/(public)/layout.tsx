import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Flame className="h-6 w-6 text-orange-500 animate-bounce repeat-[2] duration-700 delay-1000" />
          <span className="ml-2 text-xl font-semibold text-gray-900">
            CodeWiz
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Suspense fallback={<div className="h-9" />}>
            <>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          </Suspense>
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
    </section>
  );
}
