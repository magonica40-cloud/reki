"use client";
import React from "react";
import Link from "next/link";

export default function YogaPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      <div className="flex flex-col w-full">
        {/* HERO SECTION */}
        <section className="relative w-full pt-32 pb-20 md:pb-28 px-6 lg:px-12 bg-surface overflow-hidden">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-6 z-10">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-secondary opacity-60"></span>
                <span className="font-label-caps text-secondary uppercase tracking-[0.2em]">Somatic Movement</span>
              </div>
              <h1 className="font-display-hero text-primary tracking-tight mb-8">
                Reconnect with your body.
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed font-light">
                Mindful movement and breath practices designed to help you slow down, find stability through gentle patience, and move with deep internal awareness.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary-container text-on-primary font-label-md tracking-wider uppercase hover:bg-secondary transition-all duration-300 shadow-md"
                >
                  Book a Session
                </Link>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-surface-container-high">
                <div 
                  className="w-full h-full bg-cover bg-center filter saturate-[0.9] brightness-[1.02]"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmX1xTh6PuFsJc4LWqKobvXz0ge4ihFA7QAKj9vavkmMFoQNHOdRkZ_-kD4z8W31vV7Gpfezpp6PzGSrn8bG_7VBovp6v5UMQI4Shbv9TIsQW5gmHDzRyY_uSpUOkQKsH5fxR5E7JvvBUb-UstZJyY9e2OGJrKkRLhDc2hCc1SZyaP9etz-1jkellWbIAvViBbL_dty9qOjCD1kwTlwe5rWouinVPquMJ_rxlwcIrDNgSujpEoYvXgxQ')"}}
                />
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-surface-container-low">
          <div className="max-w-[1040px] mx-auto text-center flex flex-col items-center">
            <span className="font-label-caps uppercase text-secondary tracking-widest mb-4">The Philosophy</span>
            <h2 className="font-headline-lg text-primary mb-8 max-w-2xl mx-auto">
              Shifting Focus Inward
            </h2>
            <div className="w-12 h-[1px] bg-secondary/50 mb-10"></div>
            <div className="space-y-6 max-w-2xl text-center">
              <p className="font-body-lg text-on-surface leading-relaxed">
                Our approach to yoga shifts the focus from external physical alignment to internal visceral awareness. We believe in finding stability through gentle patience rather than force.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Whether you are new to practice or returning after a pause, these sessions provide a sacred container to explore movement at your own pace, honoring the current season of your body.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
          <div className="max-w-[1240px] mx-auto">
            <div className="rounded-2xl bg-primary-container text-on-primary px-8 py-20 lg:py-24 text-center relative overflow-hidden shadow-2xl flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
              <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                <span className="material-symbols-outlined text-secondary text-3xl mb-4">nature_people</span>
                <span className="font-label-caps text-secondary-fixed uppercase tracking-[0.2em] mb-4">Your Practice</span>
                <h2 className="font-display-hero text-on-primary mb-6 leading-tight">
                  Begin your journey.
                </h2>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-surface text-primary font-label-md uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-all duration-300 shadow-lg"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
