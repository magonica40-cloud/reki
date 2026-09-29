"use client";
import Link from "next/link";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-20 max-w-[1240px] mx-auto px-5 lg:px-12 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <img
                alt="DHWANI Logo"
                className="h-14 md:h-16 w-auto object-contain"
                src="/logo.png"
              />
            </Link>
          </div>

          <div className="flex items-center gap-8 lg:gap-10">
            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-8" aria-label="Desktop Navigation">
              <Link
                href="/"
                className="uppercase tracking-widest transition-colors text-primary font-semibold text-[14px]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[14px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="/reiki"
                className="text-[14px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors font-medium"
              >
                Healing
              </Link>
              <Link
                href="/yoga"
                className="text-[14px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors font-medium"
              >
                Yoga
              </Link>
              <Link
                href="/booking"
                className="text-[14px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors font-medium"
              >
                Programs
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center h-10 px-5 lg:px-7 py-2.5 rounded-full bg-primary-container text-on-primary text-[14px] font-medium tracking-widest uppercase hover:bg-secondary transition-all shadow-sm"
              >
                Book
              </Link>

              {/* Mobile Menu Button */}
              <button
                aria-label="Open Navigation Menu"
                className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-secondary transition-colors duration-200 xl:hidden"
                onClick={() => setIsDrawerOpen(true)}
              >
                <span className="material-symbols-outlined text-[28px]">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
