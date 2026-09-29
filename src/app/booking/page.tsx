"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState({
    title: "Reiki Energy Healing & Chakra Realignment",
    price: 195,
    duration: "75 min",
    id: "reiki",
  });
  const [location, setLocation] = useState("studio");
  const [date, setDate] = useState("Friday, Oct 24");
  const [time, setTime] = useState("09:00 AM");

  const [guestInfo, setGuestInfo] = useState({
    name: "Alistair Vance",
    phone: "+1 (805) 441-2993",
    email: "alistair@haven.com",
    intention: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const submitReservation = async () => {
    setIsSubmitting(true);
    try {
      // ⚠️ Replace this URL with your actual Formspree endpoint (e.g., https://formspree.io/f/your_id)
      await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          service: service.title,
          location: location,
          date: date,
          time: time,
          guestName: guestInfo.name,
          phone: guestInfo.phone,
          email: guestInfo.email,
          intention: guestInfo.intention,
        }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
      setStep(5); // Proceed to success screen
    }
  };

  if (step === 5) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 pt-16 pb-24 max-w-2xl mx-auto">
        <div className="w-20 h-20 rounded-full bg-secondary-container/50 flex items-center justify-center text-secondary shadow-sm mb-6">
          <span className="material-symbols-outlined text-[36px]">spa</span>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em]">
            Sanctuary Reserved
          </span>
          <h3 className="font-headline-lg-mobile md:font-headline-lg text-primary">
            Your Resonance is Awaited
          </h3>
          <p className="font-body-md text-on-surface-variant max-w-sm mx-auto">
            We have consecrated your arrival. An intentional welcome guide and serene preparation instructions are en route to your inbox.
          </p>
        </div>
        <div className="w-full p-6 rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-4 text-left mb-8 border border-outline-variant/30">
          <div className="flex items-center justify-between pb-4 border-b border-surface-container">
            <span className="font-label-caps text-secondary uppercase">Confirmation Code</span>
            <span className="font-label-caps text-on-surface font-mono tracking-widest">DHW-8842</span>
          </div>
          <div className="flex justify-between items-center text-on-surface font-body-sm">
            <span className="text-on-surface-variant">Experience</span>
            <span className="font-medium text-right">{service.title.split(":")[0]}</span>
          </div>
          <div className="flex justify-between items-center text-on-surface font-body-sm">
            <span className="text-on-surface-variant">Date & Hour</span>
            <span className="font-medium text-right">
              {date.split(",")[1]} · {time}
            </span>
          </div>
          <div className="flex justify-between items-center text-on-surface font-body-sm">
            <span className="text-on-surface-variant">Location</span>
            <span className="font-medium text-right">
              {location === "studio" ? "Ojai Sanctuary" : "Virtual Distance"}
            </span>
          </div>
        </div>
        <Link
          href="/"
          className="w-full md:w-auto px-10 h-14 bg-surface-container text-on-surface rounded-full font-label-md tracking-wider uppercase transition-all duration-300 hover:bg-secondary hover:text-on-secondary flex items-center justify-center shadow-sm"
        >
          Return to Sanctuary Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-[80vh] bg-surface pb-24">
      <div className="max-w-3xl mx-auto w-full px-5">
        {/* Header & Progress */}
        <div className="pt-8 pb-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-secondary uppercase tracking-[0.2em]">
              Bespoke Reservation
            </span>
            <span className="font-label-md text-on-surface-variant">Step {step} of 4</span>
          </div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary">
            Reserve Your Resonance
          </h1>
          <div className="relative w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden mt-2">
            <div
              className="absolute left-0 top-0 h-full bg-secondary transition-all duration-500 ease-out rounded-full"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 p-5 md:p-8">
          {/* STEP 1: Modality */}
          {step === 1 && (
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-primary">I. Select Curated Modality</h3>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    id: "reiki",
                    kicker: "Harmonic Restoration",
                    title: "Reiki Energy Healing & Chakra Realignment",
                    desc: "Gentle touch, vibrational kora tuning, and subtle bio-field harmonizing to release accumulated emotional tension.",
                    time: "75 min",
                    price: 195,
                  },
                  {
                    id: "yoga",
                    kicker: "Embodied Flow",
                    title: "Private Meditative Yoga & Somatic Breath",
                    desc: "Pranayama breathwork fused with slow restorative posture sequences tailored specifically to nervous system equilibrium.",
                    time: "60 min",
                    price: 160,
                  },
                  {
                    id: "sound",
                    kicker: "Acoustic Immersion",
                    title: "Deep Sound Resonance & Energy Bath",
                    desc: "Seven-metal Himalayan singing bowls, quartz alchemy carillons, and therapeutic gongs tuned to cellular frequencies.",
                    time: "90 min",
                    price: 240,
                  },
                ].map((s) => (
                  <label
                    key={s.id}
                    className={`group relative flex flex-col p-5 md:p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                      service.id === s.id
                        ? "bg-secondary-container/10 border-secondary shadow-md"
                        : "bg-surface border-outline-variant/30 hover:border-outline hover:shadow-sm"
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      className="sr-only"
                      checked={service.id === s.id}
                      onChange={() => setService({ title: s.title, price: s.price, duration: s.time, id: s.id })}
                    />
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex flex-col">
                        <span className="font-label-caps text-secondary uppercase tracking-widest mb-1">
                          {s.kicker}
                        </span>
                        <span className="font-title-lg text-primary">{s.title}</span>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                          service.id === s.id
                            ? "bg-secondary text-on-secondary"
                            : "bg-surface-container text-transparent group-hover:bg-surface-variant"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                    </div>
                    <p className="font-body-sm text-on-surface-variant mb-4">{s.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                      <span className="font-label-md flex items-center gap-1.5 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[16px]">hourglass_empty</span>{" "}
                        {s.time}
                      </span>
                      <span className="font-title-lg text-secondary font-semibold">${s.price}</span>
                    </div>
                  </label>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-full h-14 bg-primary text-on-primary rounded-full font-label-md tracking-wider uppercase transition-all duration-300 hover:bg-secondary flex items-center justify-center gap-2 mt-4"
              >
                Continue to Format <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          )}

          {/* STEP 2: Location */}
          {step === 2 && (
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="font-headline-sm text-primary">II. Format & Location</h3>
              
              <div className="flex p-1 bg-surface-container rounded-full gap-1 w-full max-w-sm mx-auto">
                <button
                  onClick={() => setLocation("studio")}
                  className={`flex-1 py-2.5 rounded-full font-label-md transition-all ${
                    location === "studio" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  In-Studio (Ojai)
                </button>
                <button
                  onClick={() => setLocation("virtual")}
                  className={`flex-1 py-2.5 rounded-full font-label-md transition-all ${
                    location === "virtual" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Virtual Distance
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-outline-variant/30 mt-4">
                <div className="relative h-48 bg-surface-variant overflow-hidden">
                  <img
                    src={location === "studio" ? "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1000&auto=format&fit=crop" : "https://images.unsplash.com/photo-1600188769045-bc6026ab8ac5?q=80&w=1000&auto=format&fit=crop"}
                    alt={location}
                    className="w-full h-full object-cover filter brightness-90 sepia-[0.2]"
                  />
                  <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-surface/90 backdrop-blur-md">
                    <span className="font-label-caps text-primary tracking-widest uppercase">
                      {location === "studio" ? "Ojai Valley Sanctuary" : "Distance Transmission"}
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-surface">
                  <h4 className="font-title-lg text-primary mb-2">
                    {location === "studio" ? "The Pavilion at Sacred Oaks" : "Binaural Tele-Resonance"}
                  </h4>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    {location === "studio" 
                      ? "Surrounded by fragrant white sage and mountain breezes, our physical sanctuary is consecrated with acoustic cedar. Herbal tea service included." 
                      : "Live uncompressed audiophile stream with spatial audio microphone arrays. Connect from your private sacred space. High-fidelity headphone preparation ritual sent prior."}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <button onClick={handleBack} className="w-14 h-14 bg-surface-container rounded-full flex items-center justify-center hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button onClick={handleNext} className="flex-1 h-14 bg-primary text-on-primary rounded-full font-label-md tracking-wider uppercase hover:bg-secondary flex items-center justify-center gap-2">
                  Choose Time <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time */}
          {step === 3 && (
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="font-headline-sm text-primary">III. Date & Resonance Time</h3>
              
              <div className="flex flex-col gap-3 mt-2">
                <span className="font-label-caps text-on-surface-variant uppercase">Select Day</span>
                <div className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none">
                  {["Friday, Oct 24", "Saturday, Oct 25", "Sunday, Oct 26", "Monday, Oct 27"].map((d, i) => (
                    <button
                      key={i}
                      onClick={() => setDate(d)}
                      className={`snap-center flex flex-col items-center justify-center min-w-[85px] py-4 rounded-2xl transition-all ${
                        date === d ? "bg-secondary text-on-secondary shadow-md scale-105" : "bg-surface border border-outline-variant/30 hover:border-secondary text-on-surface"
                      }`}
                    >
                      <span className={`font-label-caps uppercase ${date === d ? "opacity-90" : "text-on-surface-variant"}`}>
                        {d.split(", ")[0].substring(0, 3)}
                      </span>
                      <span className="font-title-lg font-semibold my-1 text-xl">{d.split(" ")[2]}</span>
                      <span className={`font-label-caps ${date === d ? "opacity-90" : "text-on-surface-variant"}`}>
                        {d.split(", ")[1].split(" ")[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 border-t border-outline-variant/20 pt-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-[18px]">wb_sunny</span>
                    <span className="font-label-caps uppercase tracking-wider">Morning Radiance</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["09:00 AM", "10:30 AM", "11:00 AM"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTime(t)}
                        className={`py-3 px-4 rounded-xl font-title-lg transition-all ${
                          time === t ? "bg-secondary text-on-secondary shadow-md" : "bg-surface border border-outline-variant/30 hover:border-secondary"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4 pt-4">
                <button onClick={handleBack} className="w-14 h-14 bg-surface-container rounded-full flex items-center justify-center hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button onClick={handleNext} className="flex-1 h-14 bg-primary text-on-primary rounded-full font-label-md tracking-wider uppercase hover:bg-secondary flex items-center justify-center gap-2">
                  Guest Details <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Details */}
          {step === 4 && (
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="font-headline-sm text-primary">IV. Guest Details & Intention</h3>
              
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-on-surface-variant uppercase tracking-widest">Full Legal Name</label>
                  <input
                    type="text"
                    className="h-14 px-4 rounded-xl border border-outline-variant/30 bg-surface text-on-surface font-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    value={guestInfo.name}
                    onChange={(e) => setGuestInfo({...guestInfo, name: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-on-surface-variant uppercase tracking-widest">Phone Contact</label>
                    <input
                      type="tel"
                      className="h-14 px-4 rounded-xl border border-outline-variant/30 bg-surface text-on-surface font-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      value={guestInfo.phone}
                      onChange={(e) => setGuestInfo({...guestInfo, phone: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-on-surface-variant uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      className="h-14 px-4 rounded-xl border border-outline-variant/30 bg-surface text-on-surface font-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      value={guestInfo.email}
                      onChange={(e) => setGuestInfo({...guestInfo, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="font-label-caps text-secondary uppercase tracking-widest">Mindful Sanctuary Prompt</label>
                    <span className="font-label-caps text-[10px] text-on-surface-variant">Optional</span>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="What intention or energy do you wish to bring into this session?"
                    className="p-4 rounded-xl border border-outline-variant/30 bg-surface text-on-surface font-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                    value={guestInfo.intention}
                    onChange={(e) => setGuestInfo({...guestInfo, intention: e.target.value})}
                  />
                </div>
              </div>

              {/* Summary Card */}
              <div className="mt-4 bg-surface-container-low p-5 md:p-6 rounded-xl border border-secondary/20">
                <span className="font-label-caps text-secondary uppercase tracking-widest mb-4 block">Sanctuary Summary</span>
                <h4 className="font-title-lg text-primary mb-2">{service.title}</h4>
                <div className="flex flex-wrap items-center gap-2 text-on-surface-variant font-body-sm mb-4">
                  <span>{service.duration}</span>
                  <span>·</span>
                  <span>{location === "studio" ? "In-Studio Sanctuary (Ojai)" : "Virtual Distance"}</span>
                  <span>·</span>
                  <span className="text-secondary font-medium">{date} at {time}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                  <span className="font-body-md text-on-surface">Sacred Investment</span>
                  <span className="font-headline-sm text-secondary font-semibold">${service.price}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                <button onClick={handleBack} disabled={isSubmitting} className="w-full sm:w-14 h-14 bg-surface-container rounded-full flex items-center justify-center hover:bg-surface-variant transition-colors shrink-0 disabled:opacity-50">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button 
                  onClick={submitReservation} 
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 h-14 bg-primary text-on-primary rounded-full font-label-md tracking-wider uppercase hover:bg-secondary flex items-center justify-center gap-2 shadow-md disabled:opacity-70 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">sync</span> Reserving...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">lock</span> Confirm Reservation
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
