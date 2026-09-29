"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ReikiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Atmospheric Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface-container-low">
        <div className="relative w-full h-[430px] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center filter brightness-[0.96]"
            alt="Serene spiritual Reiki healing session in an organic sunlit minimalist sanctuary."
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md shadow-sm text-secondary font-label-caps tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              Subtle Energy Work
            </span>
          </div>
        </div>
        <div className="px-5 -mt-20 relative z-10 pb-8 flex flex-col items-center text-center">
          <p className="font-label-caps tracking-[0.25em] text-secondary uppercase mb-2">Sacred Bodywork & Resonance</p>
          <h1 className="font-headline-lg-mobile text-on-surface tracking-tight mb-3">Reiki Energy Healing</h1>
          <p className="font-body-md text-on-surface-variant max-w-xs leading-relaxed mb-6">Restoring balance to your energetic flow and recalibrating the subtle body through gentle vibrational attunement.</p>
          <div className="flex flex-col w-full gap-3">
            <Link
              href="/booking"
              className="w-full md:max-w-xs mx-auto h-13 py-3.5 px-8 rounded-full bg-primary-container text-on-primary font-label-md tracking-wider shadow-[0_8px_24px_rgba(31,30,27,0.18)] hover:bg-secondary active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Reserve a Reiki Session</span>
              <span className="material-symbols-outlined text-[18px]">east</span>
            </Link>
            <div className="flex items-center justify-center gap-4 text-on-surface-variant font-label-caps tracking-widest pt-1">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-secondary">schedule</span> 75 or 90 MIN</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-secondary">spa</span> PRIVATE SANCTUARY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial: What is Reiki? */}
      <section className="px-5 py-10 bg-surface">
        <div className="max-w-md md:max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-label-caps tracking-[0.25em] text-secondary uppercase">Sanctuary Essence</span>
            <div className="h-[1px] flex-1 bg-surface-container-high"></div>
          </div>
          <h2 className="font-headline-md text-on-surface mb-6 leading-tight">The Gentle Flow of Universal Prana</h2>
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_8px_30px_rgba(110,105,97,0.06)] relative overflow-hidden mb-6">
            <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-secondary-container/40 blur-2xl pointer-events-none"></div>
            <p className="font-body-md text-on-surface leading-relaxed text-justify mb-4">
              <span className="float-left text-4xl leading-[36px] pr-3 pt-1 font-headline-lg font-normal text-secondary">R</span>eiki—derived from the Japanese words <span className="italic text-on-surface font-headline-sm text-sm">‘Rei’</span> (universal sacred wisdom) and <span className="italic text-on-surface font-headline-sm text-sm">‘Ki’</span> (life force energy)—is an ancient, non-invasive vibrational practice designed to realign the subtle energetic pathways coursing through the physical and spiritual vessel.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Rather than manipulating muscle tissues, our master practitioners facilitate conscious channel alignment. Through unhurried presence and quiet light-touch or hover placements along the seven primary chakras, stagnant emotional patterns soften, guiding your autonomic nervous system into profound restorative equilibrium.
            </p>
          </div>
          {/* Quick Harmonic Attributes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-full bg-secondary-container/60 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[18px]">waves</span>
              </div>
              <span className="font-title-lg text-[15px] text-on-surface font-medium">Subtle Frequencies</span>
              <span className="font-body-sm text-on-surface-variant">Dissolves energetic tension without physical force.</span>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-full bg-secondary-container/60 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[18px]">self_improvement</span>
              </div>
              <span className="font-title-lg text-[15px] text-on-surface font-medium">Somatic Stillness</span>
              <span className="font-body-sm text-on-surface-variant">Invites alpha and theta brainwave states effortlessly.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break / Resonance Mood */}
      <section className="px-5 py-4">
        <div className="max-w-3xl mx-auto relative w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-sm">
          <img
            className="w-full h-full object-cover"
            alt="Delicate close-up of a bronze Tibetan singing bowl"
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=1200"
          />
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 p-5 flex flex-col justify-end text-on-primary">
            <span className="font-label-caps text-secondary-fixed tracking-[0.2em] uppercase mb-1">Acoustic & Energy Union</span>
            <p className="font-headline-sm italic leading-snug">"Where intention meets vibration, the body remembers how to rest."</p>
          </div>
        </div>
      </section>

      {/* The Four Pillars of the Session */}
      <section className="px-5 py-10 bg-surface-container-low">
        <div className="max-w-md md:max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-label-caps tracking-[0.25em] text-secondary uppercase">The Sequence</span>
            <h2 className="font-headline-md text-on-surface mt-1">Four Pillars of the Session</h2>
            <p className="font-body-sm text-on-surface-variant mt-2">Every appointment is crafted as an unbroken, reverent ceremony.</p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex gap-4 items-start">
              <span className="font-headline-sm text-secondary font-light text-2xl pt-0.5">01</span>
              <div className="flex flex-col">
                <h3 className="font-title-lg text-on-surface mb-1">Intuitive Consultation & Scan</h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  We begin with warm herbal tea and intentional dialogue, followed by a gentle Byosen aura scan to locate thermal or subtle variations along your meridians.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex gap-4 items-start">
              <span className="font-headline-sm text-secondary font-light text-2xl pt-0.5">02</span>
              <div className="flex flex-col">
                <h3 className="font-title-lg text-on-surface mb-1">Channeled Attunement & Chakras</h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  Lying fully clothed on warm organic cotton cushioning, the master therapist gently channels universal Ki to each energy vortex from crown to root.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex gap-4 items-start">
              <span className="font-headline-sm text-secondary font-light text-2xl pt-0.5">03</span>
              <div className="flex flex-col">
                <h3 className="font-title-lg text-on-surface mb-1">Singing Bowl Integration</h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  Handcrafted Himalayan bronze bells and pure quartz sound vessels produce sustained acoustic overtones, sealing and grounding the energetic work.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex gap-4 items-start">
              <span className="font-headline-sm text-secondary font-light text-2xl pt-0.5">04</span>
              <div className="flex flex-col">
                <h3 className="font-title-lg text-on-surface mb-1">Grounding Elixir & Guidance</h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  Gradual return to presence accompanied by an adaptogenic herbal tonic and individualized reflections for mindful integration into daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Intended Experience: Somatic States */}
      <section className="px-5 py-10 bg-surface">
        <div className="max-w-md md:max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-label-caps tracking-[0.25em] text-secondary uppercase">Expected Resonance</span>
            <div className="h-[1px] flex-1 bg-surface-container-high"></div>
          </div>
          <h2 className="font-headline-md text-on-surface mb-2">The Intended Experience</h2>
          <p className="font-body-sm text-on-surface-variant mb-6">Each spirit receives what it currently seeks. Guests frequently describe encountering:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4">
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-low">
              <div className="w-9 h-9 rounded-full bg-secondary-container/50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px] text-secondary">air</span>
              </div>
              <div>
                <h4 className="font-title-lg text-[15px] text-on-surface font-medium">Emotional Weightlessness</h4>
                <p className="font-body-sm text-on-surface-variant">Dissolution of accumulated cognitive fatigue and constriction.</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-low">
              <div className="w-9 h-9 rounded-full bg-secondary-container/50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px] text-secondary">favorite</span>
              </div>
              <div>
                <h4 className="font-title-lg text-[15px] text-on-surface font-medium">Vagal Nerve Regulation</h4>
                <p className="font-body-sm text-on-surface-variant">Transitioning the nervous system out of sympathetic alert into deep restorative ease.</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-low">
              <div className="w-9 h-9 rounded-full bg-secondary-container/50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px] text-secondary">wb_twilight</span>
              </div>
              <div>
                <h4 className="font-title-lg text-[15px] text-on-surface font-medium">Vivid Creative Clarity</h4>
                <p className="font-body-sm text-on-surface-variant">Unblocking inner resistance, awakening dormant intuitive insights.</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-low">
              <div className="w-9 h-9 rounded-full bg-secondary-container/50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px] text-secondary">bedtime</span>
              </div>
              <div>
                <h4 className="font-title-lg text-[15px] text-on-surface font-medium">Restorative Sleep Cycles</h4>
                <p className="font-body-sm text-on-surface-variant">A deeply grounded state carrying through into sustained nighttime slumber.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Resonance Frequency Selector / Experience Cards */}
      <section className="px-5 py-10 bg-surface-container-low">
        <div className="max-w-md md:max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-label-caps tracking-[0.25em] text-secondary uppercase">Ritual Offerings</span>
            <h2 className="font-headline-md text-on-surface mt-1">Select Your Path</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Offering 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between flex-1">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="font-label-caps text-[10px] tracking-widest text-secondary font-semibold uppercase">The Fundamental Immersion</span>
                  <h3 className="font-headline-sm text-on-surface mt-0.5">Sacred Ki Alignment</h3>
                </div>
                <span className="font-headline-sm text-on-surface text-xl font-normal">$185</span>
              </div>
              <p className="font-body-sm text-on-surface-variant mb-5">
                Full subtle body attunement targeting seven chakras with sacred resin fumigation, quartz crystal application, and quiet reflective resting.
              </p>
              <div className="flex items-center justify-between pt-3 border-t-0 bg-surface-container-low/50 -mx-6 -mb-6 px-6 py-3.5">
                <span className="font-label-md text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">timer</span> 75 Minutes
                </span>
                <Link className="px-5 py-2 rounded-full bg-primary-container text-on-primary font-label-md tracking-wider hover:bg-secondary transition-colors" href="/booking">Book</Link>
              </div>
            </div>
            {/* Offering 2: Featured */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_32px_rgba(110,105,97,0.1)] relative overflow-hidden flex flex-col justify-between flex-1">
              <div className="absolute top-0 right-0 bg-secondary-container px-3.5 py-1 rounded-bl-xl">
                <span className="font-label-caps text-[10px] tracking-widest text-on-secondary-container font-semibold uppercase">Sanctuary Signature</span>
              </div>
              <div className="flex justify-between items-start mb-3 mt-1">
                <div>
                  <span className="font-label-caps text-[10px] tracking-widest text-secondary font-semibold uppercase">Dual Vibrational Harmony</span>
                  <h3 className="font-headline-sm text-on-surface mt-0.5">Reiki & Sound Bath Synergetic</h3>
                </div>
              </div>
              <span className="font-headline-sm text-on-surface text-xl font-normal mb-3">$240</span>
              <p className="font-body-sm text-on-surface-variant mb-5">
                Our crown restorative experience uniting direct hands-on Reiki attunement with acoustic Tibetan singing bowl sound baths placed along the energy points of the body.
              </p>
              <div className="flex items-center justify-between pt-3 border-t-0 bg-surface-container-low/60 -mx-6 -mb-6 px-6 py-3.5">
                <span className="font-label-md text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">timer</span> 90 Minutes
                </span>
                <Link className="px-5 py-2 rounded-full bg-primary-container text-on-primary font-label-md tracking-wider hover:bg-secondary transition-colors" href="/booking">Book</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="px-5 py-10 bg-surface">
        <div className="max-w-md md:max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-label-caps tracking-[0.25em] text-secondary uppercase">Curiosity & Guidance</span>
            <h2 className="font-headline-md text-on-surface mt-1">Frequently Answered</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "What physical sensations might I feel during Reiki?",
                a: "Every guest experiences energetic flow uniquely. Commonly reported sensations include deep radiating warmth from the practitioner's hands, gentle tingling or micro-pulsations in fingertips and feet, a feeling of gentle drifting, or sudden profound waves of peaceful tears as old emotional tension releases.",
              },
              {
                q: "How does Reiki compare to medical care?",
                a: "At Dhwani, we view Reiki as a deeply complementary, restorative wellness ritual. Reiki does not diagnose, prescribe, or substitute for licensed clinical medicine. It serves as a gentle facilitator of holistic balance, emotional peace, and nervous system ease.",
              },
              {
                q: "Do you offer Distance Energy attunements?",
                a: "Yes. In the Usui lineage, the Hon Sha Ze Sho Nen sacred symbol bridges spatial distance. For travelers unable to visit our sanctuary physically, we offer live 60-minute remote energetic attunements paired with curated harmonic sound recordings.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full p-4 text-left flex justify-between items-center transition-colors"
                  onClick={() => toggleFaq(index)}
                  type="button"
                >
                  <span className="font-title-lg text-[15px] text-on-surface font-medium pr-3">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-secondary transition-transform duration-300 text-[20px] ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 px-4 text-on-surface-variant ${
                    openFaq === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <p className="font-body-sm pb-4 pt-1 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
