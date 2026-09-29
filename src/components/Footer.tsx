"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface mt-20 border-t border-outline-variant/30">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                alt="DHWANI The Soul"
                className="h-14 md:h-16 w-auto object-contain hidden lg:block"
                src="/logo.png"
              />
              <div className="w-14 h-14 flex items-center justify-center mb-4 lg:hidden">
                <img
                  alt="DHWANI Logo"
                  className="w-full h-full object-contain"
                  src="/logo.png"
                />
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">
              A sacred wellness sanctuary weaving harmonic acoustic frequencies,
              restorative stillness, and contemplative somatic arts for deep
              restorative equilibrium.
            </p>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <Link href="#" className="hover:text-primary transition-colors">
                <span className="material-symbols-outlined">graphic_eq</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <span className="material-symbols-outlined">self_improvement</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <span className="material-symbols-outlined">spa</span>
              </Link>
            </div>
          </div>

          {/* Pathways Links */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-semibold">
              Pathways
            </span>
            <Link
              href="/reiki"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Healing Rituals
            </Link>
            <Link
              href="/yoga"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Somatic Yoga
            </Link>
            <Link
              href="/booking"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Residency Programs
            </Link>
          </div>

          {/* Sanctuary Info */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-semibold">
              Sanctuary
            </span>
            <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary text-base mt-0.5">
                location_on
              </span>
              <span>123 Sanctuary Way, Wellness City</span>
            </div>
            <div className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary text-base mt-0.5">
                mail
              </span>
              <span>contact@dhwani.com</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-semibold mb-2">
              Resonance Dispatch
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              Receive seasonal moon journals, vibrational soundscapes, and
              contemplative literature.
            </p>
            <form className="flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  className="w-full bg-surface py-2.5 px-4 rounded-full text-on-surface font-body-sm text-body-sm outline-none placeholder:text-outline-variant shadow-inner"
                  placeholder="Your contemplation address"
                  type="email"
                />
              </div>
              <button
                className="w-full py-2.5 px-6 rounded-full bg-primary-container text-on-primary font-label-md text-label-md tracking-wider uppercase hover:bg-secondary transition-colors"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom footer text */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-on-surface-variant font-body-sm text-body-sm border-t border-outline-variant/30">
          <p>© 2026 DHWANI – the soul. All sacred rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Sanctuary
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
