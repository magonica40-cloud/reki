"use client";
import Link from "next/link";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-primary/30 backdrop-blur-sm z-50 transition-opacity duration-500 ease-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 w-[84%] max-w-sm h-full z-50 bg-[#FAF6EE] shadow-[0_0_40px_rgba(0,0,0,0.08)] transform transition-transform duration-500 ease-out flex flex-col justify-between pt-safe pb-safe overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col">
          <div className="flex items-center justify-between pb-6 border-b border-outline-variant/30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-surface-container-high border border-outline-variant/40 shrink-0">
                <img
                  alt="DHWANI"
                  className="w-full h-full object-cover scale-150"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoshVTqEvjyAU77J1L5v58s-spP43yzAVCrpqNZTWNIaDB5TA7A7r9_wcdC3dfdXNrMucdtj0RIPMeHiaY2hms_PlM6c8XgXvfi1Ma2WfxgQhbado_jBFcMlLlkIPzxVZTdK4583kqFU7q2znHrk6qK9OLtDnLZYTZ4kBHMk0nel1wttqj4oi3nqqfWBJOhk-ITve5CXdmtYphh3xjUCNyRVUWAzC5Vt5H3TQCXAN_jA0EeqmomD5XWp4aLsg0HWRz6cc"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm tracking-wide text-on-surface uppercase">
                  DHWANI
                </span>
                <span className="font-label-caps text-label-caps tracking-[0.2em] text-secondary">
                  SANCTUARY
                </span>
              </div>
            </div>
            <button
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-on-surface"
              onClick={onClose}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <nav className="flex flex-col space-y-1 pt-4">
            <Link
              href="/"
              className="py-2.5 font-headline-sm text-lg text-secondary font-medium transition-colors"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-2.5 font-headline-sm text-lg text-on-surface-variant hover:text-secondary transition-colors"
              onClick={onClose}
            >
              About Dhwani
            </Link>
            <Link
              href="/reiki"
              className="py-2.5 font-headline-sm text-lg text-on-surface-variant hover:text-secondary transition-colors"
              onClick={onClose}
            >
              Reiki Healing
            </Link>
            <Link
              href="/yoga"
              className="py-2.5 font-headline-sm text-lg text-on-surface-variant hover:text-secondary transition-colors"
              onClick={onClose}
            >
              Mindful Yoga
            </Link>
            <Link
              href="/booking"
              className="py-2.5 font-headline-sm text-lg text-on-surface-variant hover:text-secondary transition-colors"
              onClick={onClose}
            >
              Book a Session
            </Link>
          </nav>
        </div>
        <div className="p-6 bg-surface-container-low flex flex-col gap-2 border-t border-outline-variant/30">
          <p className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
            Sacred Intention
          </p>
          <p className="font-body-sm text-body-sm text-on-surface italic">
            "Quiet the mind, soften the breath, and return home to yourself."
          </p>
        </div>
      </aside>
    </>
  );
}
