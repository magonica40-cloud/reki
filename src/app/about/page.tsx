"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-surface pb-24">
      {/* 1. Editorial Hero Section */}
      <section className="relative w-full pt-16 md:pt-24 pb-20 px-5 lg:px-12 bg-surface">
        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
          <span className="font-label-caps text-secondary uppercase tracking-[0.25em] mb-6">
            The Story of Dhwani
          </span>
          <h1 className="font-display-hero-mobile md:font-display-hero text-[40px] md:text-[64px] text-primary leading-tight mb-8">
            A return to the profound resonance of inner silence.
          </h1>
          <div className="w-16 h-[1px] bg-secondary/50 mb-10"></div>
          <p className="font-body-lg text-on-surface-variant leading-relaxed font-light max-w-2xl text-center md:text-xl">
            In a world of constant motion and overwhelming noise, DHWANI was born from a simple but radical truth: that true healing begins when we finally allow ourselves to stop.
          </p>
        </div>
      </section>

      {/* 2. Visual & Etymology */}
      <section className="w-full px-5 lg:px-12 py-10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=1200"
                alt="Minimalist meditation space with gentle sunlight and singing bowls"
                className="w-full h-full object-cover filter sepia-[0.1] brightness-[0.95]"
              />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center px-4 md:px-8 py-10 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 relative top-[-40px] lg:top-0 lg:left-[-60px] z-10 shadow-xl">
            <div className="flex items-center gap-2 text-secondary mb-6">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="font-label-caps uppercase tracking-widest">Sacred Etymology</span>
            </div>
            <h2 className="font-headline-lg text-primary mb-4">Dhwani (ध्वनि)</h2>
            <p className="font-body-md text-on-surface-variant italic mb-6 text-lg">
              Sanskrit noun: Sound, echo, or subtle resonance.
            </p>
            <p className="font-body-md text-on-surface font-light leading-relaxed">
              In ancient philosophy, Dhwani refers not just to a physical sound, but to the unspoken vibration that remains after a bell is struck—the lingering echo that is felt rather than heard. It is the resonance of the soul when the mind finally quiets.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Practitioner Feature */}
      <section className="w-full py-20 lg:py-32 px-5 lg:px-12 bg-surface-container-low">
        <div className="max-w-[1040px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col order-2 lg:order-1">
            <span className="font-label-caps text-secondary uppercase tracking-[0.2em] mb-4">
              The Practitioner
            </span>
            <h2 className="font-headline-lg text-primary mb-6">Elena Vasanti</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed font-light mb-6">
              With over 14 years of devoted practice in energetic healing arts and somatic trauma release, Elena created DHWANI as a physical manifestation of her personal healing journey. 
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed font-light mb-8">
              "I realized that most of us don't need another thing to *do*. We need a safe place to undo. To unravel. To let the nervous system remember what safety feels like. That is what we hold space for here."
            </p>
            <div className="flex items-center gap-6 pt-6 border-t border-outline-variant/20">
              <div className="flex flex-col">
                <span className="font-title-lg text-primary font-medium">Usui Reiki Master</span>
                <span className="font-label-caps text-secondary mt-1 tracking-widest">Certification</span>
              </div>
              <div className="w-[1px] h-10 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="font-title-lg text-primary font-medium">500-ERYT Somatics</span>
                <span className="font-label-caps text-secondary mt-1 tracking-widest">Accreditation</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] rounded-full overflow-hidden max-w-sm mx-auto shadow-xl ring-8 ring-surface">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                alt="Elena Vasanti"
                className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.2]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Micro-Experience (432 Hz) */}
      <section className="w-full py-24 px-5 lg:px-12 bg-primary-container text-on-primary text-center">
        <div className="max-w-[700px] mx-auto flex flex-col items-center">
          <span className="material-symbols-outlined text-secondary text-[40px] mb-6">
            graphic_eq
          </span>
          <h2 className="font-headline-lg md:text-[48px] mb-6">Experience 432 Hz</h2>
          <p className="font-body-lg text-on-primary-container font-light mb-12">
            The frequency of 432 Hz is mathematically consistent with the patterns of the universe. It is known to induce a deep state of relaxation, slowing the heart rate and synchronizing brain waves.
          </p>
          <button 
            className="group w-24 h-24 rounded-full bg-secondary text-on-secondary flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(114,91,56,0.4)]"
            onClick={(e) => {
              const btn = e.currentTarget;
              btn.classList.add('animate-pulse');
              setTimeout(() => btn.classList.remove('animate-pulse'), 3000);
              // Audio context logic would go here in a real app
              alert("In a full implementation, a soothing 432 Hz singing bowl chime would play here!");
            }}
          >
            <span className="material-symbols-outlined text-[36px] group-hover:scale-90 transition-transform">
              play_arrow
            </span>
          </button>
          <span className="font-label-caps text-secondary mt-6 tracking-widest">
            Tap to sound the bowl
          </span>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="w-full py-24 px-5 bg-surface text-center">
        <h2 className="font-headline-md md:font-headline-lg text-primary mb-8 max-w-xl mx-auto">
          Ready to experience the sanctuary?
        </h2>
        <Link
          href="/booking"
          className="inline-flex h-14 px-10 items-center justify-center bg-primary text-on-primary rounded-full font-label-md tracking-widest uppercase hover:bg-secondary transition-all shadow-md"
        >
          View Offerings
        </Link>
      </section>
    </div>
  );
}
