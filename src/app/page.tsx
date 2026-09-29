"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<any>(null);
  const oscRef = useRef<any>(null);
  const gainNodeRef = useRef<any>(null);

  const toggleResonance = () => {
    if (isPlaying) {
      if (gainNodeRef.current && audioContextRef.current) {
        // Smooth fade out
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 1.0);
        setTimeout(() => {
          oscRef.current?.stop();
          oscRef.current?.disconnect();
          gainNodeRef.current?.disconnect();
          setIsPlaying(false);
        }, 1000);
      } else {
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(true);
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContext();
        }
        
        if (audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume();
        }
        
        const osc = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(432, audioContextRef.current.currentTime); 
        
        gainNode.gain.setValueAtTime(0.001, audioContextRef.current.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.3, audioContextRef.current.currentTime + 3.0); 
        
        osc.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);
        
        osc.start();
        
        oscRef.current = osc;
        gainNodeRef.current = gainNode;
      } catch (e) {
        console.error("Audio Context not supported", e);
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="w-full bg-background min-h-screen">
      <div className="flex flex-col w-full">
        {/* 1. HERO SECTION */}
        <section className="relative w-full pt-20 pb-20 md:pb-28 px-6 lg:px-12 bg-surface overflow-hidden">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[82vh]">
            {/* Text Column */}
            <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-6 z-10">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-secondary opacity-60"></span>
                <span className="font-label-caps text-secondary uppercase tracking-[0.2em]">Sanctuary of Consciousness</span>
              </div>
              <h1 className="font-display-hero text-primary tracking-tight mb-8">
                The journey inward begins here.
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed font-light">
                Reconnect with yourself through Reiki, yoga, meditation and mindful practices.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary-container text-on-primary font-label-md tracking-wider uppercase hover:bg-secondary transition-all duration-300 shadow-md"
                >
                  Book a Session
                </Link>
                <a
                  href="#philosophy"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-transparent text-secondary hover:bg-surface-container font-label-md tracking-wider uppercase transition-all duration-300"
                >
                  Explore Dhwani
                  <span className="material-symbols-outlined text-sm ml-2">arrow_downward</span>
                </a>
              </div>
              {/* Harmonic wave micro-accent */}
              <div className="mt-14 pt-8 flex items-center gap-8 text-on-surface-variant opacity-75">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-lg">spa</span>
                  <span className="font-label-caps uppercase">Grounded Care</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-surface-variant"></div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-lg">self_improvement</span>
                  <span className="font-label-caps uppercase">Mindful Solace</span>
                </div>
              </div>
            </div>
            {/* Hero Visual Articulation */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-surface-container-high">
                <img
                  alt="Contemplative woman seated on a woven wool mat in tranquil meditation"
                  className="w-full h-full object-cover object-center filter saturate-[0.9] brightness-[1.02]"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XDY5fzeG71jJG2wOtz7_n5JqwSGhIBNE1w4gJXJYVs39ACbQTybXFMxjaP7jbwIh93-ayovvi6vgUK3p7HL5dv-3k1KoxxPqNuB3YcZlfY03yxLLg9ERd9dMsmJVkP5HwZFCYT9d4RPBKzw0bhYF4t5PT85DmrTnkiuiHSkzjbhKmSTceYXzWv6Rbv4nGe7rqwhhj4DHc5KZKez-I6xrGzD8oYcP8GM1SL8-V2CisiIVkXzll-LqsjOfv4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none"></div>
                {/* Floating Serene Quote Pill */}
                <div className="absolute bottom-8 left-8 right-8 p-5 rounded-lg bg-surface/90 backdrop-blur-md shadow-lg flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-caps uppercase text-secondary">Present Moment</span>
                    <span className="font-headline-sm text-primary italic text-base">"Silence is not an absence, but a presence."</span>
                  </div>
                  <span className="material-symbols-outlined text-secondary/60 text-2xl ml-4">graphic_eq</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. DHWANI PHILOSOPHY */}
        <section className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-surface-container-low" id="philosophy">
          <div className="max-w-[1040px] mx-auto text-center flex flex-col items-center">
            <span className="font-label-caps uppercase text-secondary tracking-widest mb-4">The Heart of Practice</span>
            <h2 className="font-headline-lg text-primary mb-8 max-w-2xl mx-auto">
              Find Your Inner Resonance
            </h2>
            <div className="w-12 h-[1px] bg-secondary/50 mb-10"></div>
            <div className="space-y-6 max-w-2xl text-center">
              <p className="font-body-lg text-on-surface leading-relaxed">
                At DHWANI, stillness is approached not as an escape from everyday life, but as an intentional return to inner clarity. We cultivate calm through thoughtful somatic movement, the supportive warmth of touch, and conscious awareness.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Every breath invites equilibrium. Our spaces are curated to offer honest rest, quiet unhurried presence, and the gentlest invitation to listen inward without hurry or judgment.
              </p>
            </div>
            {/* Refined Architectural Meditative Iconography */}
            <div className="mt-14 grid grid-cols-3 gap-8 md:gap-16 w-full max-w-lg">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-2xl">lens_blur</span>
                <span className="font-label-caps uppercase text-on-surface-variant">Stillness</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-2xl">air</span>
                <span className="font-label-caps uppercase text-on-surface-variant">Prana</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-2xl">all_inclusive</span>
                <span className="font-label-caps uppercase text-on-surface-variant">Harmony</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FIND YOUR PATH */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-label-caps uppercase text-secondary tracking-widest block mb-3">Intuitive Orientation</span>
                <h2 className="font-headline-lg text-primary">What brings you here today?</h2>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-md">
                Listen to the subtle invitation of your current season. Choose an intention below to discover how we can walk alongside you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/meditation" className="group p-8 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-xl">self_improvement</span>
                  </div>
                  <p className="font-label-caps uppercase text-secondary mb-1">Intention</p>
                  <h3 className="font-headline-sm text-primary mb-3">I want to slow down</h3>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary transition-colors">
                  <span className="font-label-md">Meditation</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                </div>
              </Link>
              <Link href="/yoga" className="group p-8 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-xl">nature_people</span>
                  </div>
                  <p className="font-label-caps uppercase text-secondary mb-1">Intention</p>
                  <h3 className="font-headline-sm text-primary mb-3">I want to reconnect with my body</h3>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary transition-colors">
                  <span className="font-label-md">Yoga</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                </div>
              </Link>
              <Link href="/reiki" className="group p-8 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-xl">vital_signs</span>
                  </div>
                  <p className="font-label-caps uppercase text-secondary mb-1">Intention</p>
                  <h3 className="font-headline-sm text-primary mb-3">I want to explore Reiki</h3>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary transition-colors">
                  <span className="font-label-md">Reiki Healing</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                </div>
              </Link>
              <Link href="/booking" className="group p-8 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-xl">menu_book</span>
                  </div>
                  <p className="font-label-caps uppercase text-secondary mb-1">Intention</p>
                  <h3 className="font-headline-sm text-primary mb-3">I want to learn and grow</h3>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary transition-colors">
                  <span className="font-label-md">Programs & Workshops</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. CORE EXPERIENCES */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface-container-low">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-label-caps uppercase text-secondary tracking-widest block mb-2">Offerings</span>
              <h2 className="font-headline-lg text-primary">Explore the Dhwani Experience</h2>
              <p className="font-body-md text-on-surface-variant mt-4">
                Each offering is an intentional container designed to nurture self-inquiry, gentle grounding, and steady vitality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-6"><span className="material-symbols-outlined text-2xl">autorenew</span></div>
                  <span className="font-label-caps uppercase text-secondary tracking-wider block mb-2">Restorative Touch</span>
                  <h3 className="font-headline-md text-primary mb-4">Reiki Healing</h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed mb-6">Explore a gentle Reiki experience created around presence, relaxation and mindful connection.</p>
                </div>
                <Link href="/reiki" className="inline-flex items-center justify-center w-full py-3 px-4 rounded-full bg-surface-container-low text-primary hover:bg-primary-container hover:text-on-primary transition-all font-label-md uppercase tracking-wider">Explore Reiki</Link>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-6"><span className="material-symbols-outlined text-2xl">accessibility_new</span></div>
                  <span className="font-label-caps uppercase text-secondary tracking-wider block mb-2">Somatic Movement</span>
                  <h3 className="font-headline-md text-primary mb-4">Yoga</h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed mb-6">Mindful movement and breath practices designed to help you slow down, reconnect and move with awareness.</p>
                </div>
                <Link href="/yoga" className="inline-flex items-center justify-center w-full py-3 px-4 rounded-full bg-surface-container-low text-primary hover:bg-primary-container hover:text-on-primary transition-all font-label-md uppercase tracking-wider">Explore Yoga</Link>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-6"><span className="material-symbols-outlined text-2xl">radio_button_checked</span></div>
                  <span className="font-label-caps uppercase text-secondary tracking-wider block mb-2">Conscious Presence</span>
                  <h3 className="font-headline-md text-primary mb-4">Meditation</h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed mb-6">Guided practices for stillness, awareness and creating space in your day.</p>
                </div>
                <Link href="/meditation" className="inline-flex items-center justify-center w-full py-3 px-4 rounded-full bg-surface-container-low text-primary hover:bg-primary-container hover:text-on-primary transition-all font-label-md uppercase tracking-wider">Explore Meditation</Link>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-6"><span className="material-symbols-outlined text-2xl">spa</span></div>
                  <span className="font-label-caps uppercase text-secondary tracking-wider block mb-2">Holistic Rhythm</span>
                  <h3 className="font-headline-md text-primary mb-4">Inner Wellness</h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed mb-6">Personalized practices that bring together mindful movement, reflection and restorative experiences.</p>
                </div>
                <Link href="/booking" className="inline-flex items-center justify-center w-full py-3 px-4 rounded-full bg-surface-container-low text-primary hover:bg-primary-container hover:text-on-primary transition-all font-label-md uppercase tracking-wider">Explore Wellness</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHY DHWANI */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
          <div className="max-w-[1240px] mx-auto">
            <div className="max-w-xl mb-16">
              <span className="font-label-caps uppercase text-secondary tracking-widest block mb-2">Our Pillars</span>
              <h2 className="font-headline-lg text-primary">Why Dhwani</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col"><span className="font-label-caps text-secondary mb-4">01 / ATTUNEMENT</span><h3 className="font-headline-sm text-primary mb-3">Personalized Guidance</h3><p className="font-body-sm text-on-surface-variant leading-relaxed">Every person's journey is different. Dhwani creates space for practices that meet you where you are.</p></div>
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col"><span className="font-label-caps text-secondary mb-4">02 / INTEGRITY</span><h3 className="font-headline-sm text-primary mb-3">Mindful Practice</h3><p className="font-body-sm text-on-surface-variant leading-relaxed">Simple practices that encourage awareness, presence and connection.</p></div>
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col"><span className="font-label-caps text-secondary mb-4">03 / SANCTUARY</span><h3 className="font-headline-sm text-primary mb-3">A Calm & Welcoming Space</h3><p className="font-body-sm text-on-surface-variant leading-relaxed">A space designed to help you pause, breathe and be present.</p></div>
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col"><span className="font-label-caps text-secondary mb-4">04 / INTEGRATION</span><h3 className="font-headline-sm text-primary mb-3">A Journey That Continues</h3><p className="font-body-sm text-on-surface-variant leading-relaxed">Carry the awareness you cultivate here into everyday life.</p></div>
            </div>
          </div>
        </section>

        {/* 6. YOUR JOURNEY */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface-container-low">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="font-label-caps uppercase text-secondary tracking-widest block mb-2">The Arc of Return</span>
              <h2 className="font-headline-lg text-primary">Your Journey</h2>
              <p className="font-body-sm text-on-surface-variant mt-3">
                A continuous rhythm of rediscovery, grounding, and renewal.
              </p>
            </div>
            {/* Horizontal Step Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center"><div className="w-8 h-8 rounded-full bg-surface-container text-secondary font-headline-sm text-sm flex items-center justify-center mb-4">1</div><h3 className="font-headline-sm text-primary mb-2">Discover</h3><p className="font-body-sm text-on-surface-variant">Begin by understanding what you are looking for.</p></div>
              <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center"><div className="w-8 h-8 rounded-full bg-surface-container text-secondary font-headline-sm text-sm flex items-center justify-center mb-4">2</div><h3 className="font-headline-sm text-primary mb-2">Reconnect</h3><p className="font-body-sm text-on-surface-variant">Return your attention to the body, breath and present moment.</p></div>
              <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center"><div className="w-8 h-8 rounded-full bg-surface-container text-secondary font-headline-sm text-sm flex items-center justify-center mb-4">3</div><h3 className="font-headline-sm text-primary mb-2">Release</h3><p className="font-body-sm text-on-surface-variant">Create space to let go of tension and mental noise.</p></div>
              <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center"><div className="w-8 h-8 rounded-full bg-surface-container text-secondary font-headline-sm text-sm flex items-center justify-center mb-4">4</div><h3 className="font-headline-sm text-primary mb-2">Restore</h3><p className="font-body-sm text-on-surface-variant">Give yourself time for rest, reflection and renewal.</p></div>
              <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center"><div className="w-8 h-8 rounded-full bg-surface-container text-secondary font-headline-sm text-sm flex items-center justify-center mb-4">5</div><h3 className="font-headline-sm text-primary mb-2">Resonate</h3><p className="font-body-sm text-on-surface-variant">Carry that sense of awareness into everyday life.</p></div>
            </div>
          </div>
        </section>

        {/* 7. PRACTITIONER */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container-high relative">
                <img alt="Holistic wellness practitioner in tranquil studio" className="w-full h-full object-cover object-center filter saturate-[0.95]" src="https://lh3.googleusercontent.com/aida/AEtjO1XNILALgDbGrTOi46soSmyZYH9brWf5-WuZjLc7CxUK3BaD9mH4Xr2vv7svBoayIkwTIVlEeqy1zPilji2_jVdwuG4lcmJYYWD_0Un5MFFUVlzNrZXzISzOP4IGrdxUiEejej2u7vQkAaB7zCmYIRDnPaL4tIOU_xgqcWLaOZk87wjS0hrROs5DfQEXLh6_oARv4BdLQU0LuaiWWIUxFalMS0zKNeBNhpAyM8oqQvOWWc1lDzQqxWQs0AFm"/>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8">
              <span className="font-label-caps uppercase text-secondary tracking-widest mb-3">Sacred Stewardship</span>
              <h2 className="font-headline-lg text-primary mb-6">Meet Your Practitioner</h2>
              <p className="font-body-lg text-on-surface leading-relaxed mb-8 font-light">Your practitioner profile will be introduced here.</p>
              <Link href="/about" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary transition-all">Learn More</Link>
            </div>
          </div>
        </section>

        {/* 8. UPCOMING WORKSHOPS */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface-container-low">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="font-label-caps uppercase text-secondary tracking-widest block mb-2">Communal Gathering</span>
                <h2 className="font-headline-lg text-primary">Upcoming Workshops & Gatherings</h2>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 md:p-12 rounded-xl shadow-sm max-w-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-lg">notifications_active</span>
                  <span className="font-label-caps uppercase tracking-wider">Gathering Schedule</span>
                </div>
                <h3 className="font-headline-md text-primary">New experiences will be announced here.</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">Stay attuned for seasonal retreats, healing circles, and mindful communal workshops.</p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/booking" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary transition-all">Explore Workshops</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 9. WISDOM / JOURNAL */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-label-caps uppercase text-secondary tracking-widest block mb-2">Contemplative Reading</span>
                <h2 className="font-headline-lg text-primary">From the Dhwani Journal</h2>
              </div>
              <Link href="/about" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-surface-container text-on-surface font-label-md uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-all">
                Explore Wisdom
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="flex flex-col group">
                <div className="w-full aspect-[16/10] rounded-lg overflow-hidden bg-surface-container-high mb-6">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBKfDdOf9SWN5bszXSxX5hBGJYtPJPQ7QJgjqWSQ_rTjJaRcow0c_Ye7pp3X0JxlhdQFEHn3wUUWKFq09o8XpDb1RZQyfFfpVTG02bQsi3G_LS9Ff5MB2ZCft_oltqSsjAxdz9uHVuPc3d66pMPQ6t6rjIIrvu0bjW0i4KrCAuO0BXHQB7AWfyVDjPY1NIBY-YIVydN0IOPLKCK46a5tB0yOIic48ZVTLtQLiwZ7bnzJpWjsDzbgsufA')"}}></div>
                </div>
                <span className="font-label-caps uppercase text-secondary mb-2">Healing Arts</span>
                <h3 className="font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">Understanding Reiki</h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Demystifying the subtle practice of Japanese energetic balance. How touch and non-touch awareness stimulate innate somatic recovery.
                </p>
                <Link href="/reiki" className="font-label-md text-primary group-hover:underline inline-flex items-center gap-1 mt-auto">
                  Read Reflection <span className="material-symbols-outlined text-sm">east</span>
                </Link>
              </article>
              <article className="flex flex-col group">
                <div className="w-full aspect-[16/10] rounded-lg overflow-hidden bg-surface-container-high mb-6">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmX1xTh6PuFsJc4LWqKobvXz0ge4ihFA7QAKj9vavkmMFoQNHOdRkZ_-kD4z8W31vV7Gpfezpp6PzGSrn8bG_7VBovp6v5UMQI4Shbv9TIsQW5gmHDzRyY_uSpUOkQKsH5fxR5E7JvvBUb-UstZJyY9e2OGJrKkRLhDc2hCc1SZyaP9etz-1jkellWbIAvViBbL_dty9qOjCD1kwTlwe5rWouinVPquMJ_rxlwcIrDNgSujpEoYvXgxQ')"}}></div>
                </div>
                <span className="font-label-caps uppercase text-secondary mb-2">Movement</span>
                <h3 className="font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">Beginning a Mindful Yoga Practice</h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Shifting the focus from external physical alignment to internal visceral awareness. Finding stability through gentle patience.
                </p>
                <Link href="/yoga" className="font-label-md text-primary group-hover:underline inline-flex items-center gap-1 mt-auto">
                  Read Reflection <span className="material-symbols-outlined text-sm">east</span>
                </Link>
              </article>
              <article className="flex flex-col group">
                <div className="w-full aspect-[16/10] rounded-lg overflow-hidden bg-surface-container-high mb-6">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCIXDNNJEhUCwphgnTiygWjXbYSNtW_ARBJda7fRO_yV7GLKKl6Zfqc7XjCDOlEpAJzzIr9u-wNdx4y9PF8ZStM3Ua5D5hZtTzmM7JGaCvFY_Jq1H1GGcd1LNCk9Ag3bSNCt9EHkXqikRaziLBTYEqrKcew63pZa8oHeLmE8L2SbndiDSdHFlDuR8XT5nje9YLsJg9cReQMAZHtH1N0V3Ky7hF_82RVb1di0VmP_zBe9lH1_PpTLiWfQ')"}}></div>
                </div>
                <span className="font-label-caps uppercase text-secondary mb-2">Stillness</span>
                <h3 className="font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">Creating Space for Stillness</h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Practical, gentle methods for incorporating micro-pauses and mindful breathing into demanding modern schedules.
                </p>
                <Link href="/meditation" className="font-label-md text-primary group-hover:underline inline-flex items-center gap-1 mt-auto">
                  Read Reflection <span className="material-symbols-outlined text-sm">east</span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* 10. FINAL BOOKING CTA */}
        {/* Interactive Resonance Section */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface-container-low">
          <div className="max-w-[1040px] mx-auto text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined text-3xl">graphic_eq</span>
            </div>
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-secondary mb-4">Acoustic Mindful Presence</span>
            <h2 className="text-4xl md:text-5xl font-display-hero text-primary mb-6">Experience the Resonance</h2>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-lg mb-10 font-light leading-relaxed">Take a moment to pause, breathe and listen.</p>
            <div className="flex items-center justify-center gap-4 mb-10">
              <button
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary-container text-on-primary text-[15px] font-medium tracking-wider uppercase hover:bg-secondary transition-all shadow-sm w-48"
                onClick={toggleResonance}
                type="button"
              >
                {!isPlaying ? (
                  <span className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-xl">play_arrow</span> Play</span>
                ) : (
                  <span className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-xl">pause</span> Pause</span>
                )}
              </button>
            </div>
            {/* Visual wave ripple indicators */}
            <div className={`flex items-center justify-center gap-2.5 h-12 transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-40'}`}>
              <span className={`w-2 h-6 bg-secondary/50 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}></span>
              <span className={`w-2 h-10 bg-secondary rounded-full ${isPlaying ? 'animate-pulse' : ''}`}></span>
              <span className={`w-2 h-12 bg-primary rounded-full ${isPlaying ? 'animate-pulse' : ''}`}></span>
              <span className={`w-2 h-8 bg-secondary rounded-full ${isPlaying ? 'animate-pulse' : ''}`}></span>
              <span className={`w-2 h-5 bg-secondary/50 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}></span>
            </div>
          </div>
        </section>
        
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
          <div className="max-w-[1240px] mx-auto">
            <div className="rounded-2xl bg-primary-container text-on-primary px-8 py-20 lg:py-24 text-center relative overflow-hidden shadow-2xl flex flex-col items-center justify-center">
              {/* Subtle sacred background concentric glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
              <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                <span className="material-symbols-outlined text-secondary text-3xl mb-4">spa</span>
                <span className="font-label-caps text-secondary-fixed uppercase tracking-[0.2em] mb-4">The Threshold</span>
                <h2 className="font-display-hero text-on-primary mb-6 leading-tight">
                  Come back to yourself.
                </h2>
                <p className="font-body-lg text-on-primary-container mb-10 max-w-md font-light leading-relaxed">
                  Give yourself a moment to pause, reconnect and begin again.
                </p>
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
