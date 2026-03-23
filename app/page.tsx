import { CountUp } from "./components/count-up";
import { HeroItem, HeroStagger, ParallaxCard } from "./components/hero-motion";
import { Reveal } from "./components/reveal";
import { MotionButton } from "./components/motion-button";
import { MotionCard } from "./components/motion-card";

const stats = [
  { prefix: "<", value: 15, suffix: " min", label: "to publish the latest buyer-ready package" },
  { value: 100, suffix: "%", label: "release traceability across every artifact" },
  { value: 1, suffix: " link", label: "shared instead of scattered email threads" },
];

const features = [
  {
    id: "01",
    title: "Release-aware by default",
    description:
      "Every SBOM, attestation, and supporting file stays tied to the exact version your buyer is reviewing.",
  },
  {
    id: "02",
    title: "A cleaner experience for buyers",
    description:
      "Replace messy attachments with a polished portal that looks trustworthy to security reviewers and procurement teams.",
  },
  {
    id: "03",
    title: "Controlled sharing and proof",
    description:
      "Use gated access, activity history, and acceptance tracking to know what was viewed and when.",
  },
];

const timeline = [
  {
    step: "Connect",
    title: "Pull from CI or upload manually",
    body: "Start with your current process, then automate generation when your team is ready.",
  },
  {
    step: "Organize",
    title: "Version every artifact around the release",
    body: "Keep each package current, searchable, and attached to the release that matters in the deal cycle.",
  },
  {
    step: "Share",
    title: "Send one secure portal instead of a thread",
    body: "Buyers get the latest approved materials with clear status, timestamps, and fewer follow-up requests.",
  },
];

const proof = [
  "Current SBOMs generated per release",
  "Attestation bundles attached in the same workflow",
  "Buyer access history and download proof",
  "Support for multiple products and release lines",
];

const faqs = [
  {
    question: "Do teams need to change how they ship?",
    answer:
      "No. You can start with uploads, then layer in CI-driven generation once you want a tighter workflow.",
  },
  {
    question: "Is this only for SBOM distribution?",
    answer:
      "No. The same portal can deliver attestations, security notes, and the supporting artifacts buyers routinely request.",
  },
  {
    question: "Can access be restricted per customer?",
    answer:
      "Yes. The model is built around secure links, controlled access, and activity visibility rather than open file sharing.",
  },
];

function ArrowUpRight({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(12,74,110,0.12)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
    />
  );
}

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-background text-foreground"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-2rem] h-[26rem] w-[26rem] rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute right-[-8rem] top-24 h-[30rem] w-[30rem] rounded-full bg-orange-100 blur-3xl" />
        <div className="absolute inset-x-0 top-[28rem] h-[38rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_36%,rgba(255,255,255,0)_100%)]" />
        <DotGrid />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 sm:px-8 lg:px-12">
        <header className="sticky top-4 z-40 pt-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line bg-white/82 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:px-6">
            <a href="#top" className="flex items-center gap-3 rounded-full cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold tracking-[0.24em] text-white">
                SB
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  SBOM Portal
                </p>
                <p className="text-sm text-slate-900">Security delivery, cleaned up.</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
              <a href="#features" className="cursor-pointer transition-colors duration-200 hover:text-slate-950">
                Features
              </a>
              <a href="#workflow" className="cursor-pointer transition-colors duration-200 hover:text-slate-950">
                Workflow
              </a>
              <a href="#faq" className="cursor-pointer transition-colors duration-200 hover:text-slate-950">
                FAQ
              </a>
            </nav>

            <MotionButton
              href="#cta"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-medium text-white cursor-pointer transition-colors duration-200 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
            >
              Book a Demo
            </MotionButton>
          </div>
        </header>

        <section className="relative pt-14 md:pt-20 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <Reveal className="max-w-4xl">
              <HeroStagger>
                <HeroItem>
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-medium text-sky-800 shadow-[0_10px_30px_rgba(14,165,233,0.08)]">
                    Built for security-heavy B2B sales motion
                  </div>
                </HeroItem>
                <HeroItem>
                  <h1 className="mt-8 max-w-4xl text-[3.4rem] font-semibold leading-[0.92] tracking-[-0.08em] text-slate-950 sm:text-[4.4rem] lg:text-[5.7rem]">
                    Modern delivery for the security artifacts buyers keep asking for.
                  </h1>
                </HeroItem>
                <HeroItem delay={0.04}>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                    Generate, version, and present SBOMs, attestations, and supporting
                    documents in one clean portal that feels current, controlled, and
                    easy to trust.
                  </p>
                </HeroItem>
                <HeroItem delay={0.08}>
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <MotionButton
                      href="#cta"
                      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 text-base font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    >
                      Get Early Access
                      <ArrowUpRight />
                    </MotionButton>
                    <MotionButton
                      href="#features"
                      className="inline-flex min-h-14 items-center justify-center rounded-full border border-line bg-white/88 px-6 text-base font-semibold text-slate-900 cursor-pointer transition-colors duration-200 hover:border-slate-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                    >
                      Explore the Product
                    </MotionButton>
                  </div>
                </HeroItem>
                <HeroItem delay={0.12}>
                  <div className="mt-12 grid gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <MotionCard
                        key={stat.label}
                        className="rounded-[1.75rem] border border-white/80 bg-white/75 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl"
                      >
                        <p className="text-2xl font-semibold tracking-[-0.06em] text-slate-950">
                          <CountUp
                            prefix={stat.prefix}
                            to={stat.value}
                            suffix={stat.suffix}
                          />
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                      </MotionCard>
                    ))}
                  </div>
                </HeroItem>
              </HeroStagger>
            </Reveal>

            <Reveal className="lg:justify-self-end" delay={100}>
              <ParallaxCard className="relative">
                <div className="pointer-events-none absolute -left-5 top-10 h-24 w-24 rounded-full border border-white/60 bg-white/55 blur-[1px]" />
                <div className="pointer-events-none absolute -right-4 top-20 h-16 w-16 rounded-full bg-orange-200/80 blur-xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(241,245,249,0.82)_100%)] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-5">
                  <div className="rounded-[1.7rem] border border-slate-200 bg-slate-950 p-5 text-white sm:p-6">
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                          Buyer Portal
                        </p>
                        <p className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                          Release v3.4.2
                        </p>
                      </div>
                      <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                        Current
                      </div>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                      <div className="space-y-4">
                        <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                            Included artifacts
                          </p>
                          <div className="mt-4 space-y-3">
                            {["SBOM SPDX JSON", "Attestation bundle", "Security overview"].map(
                              (item) => (
                                <div
                                  key={item}
                                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                                >
                                  <span className="text-sm font-medium text-white">{item}</span>
                                  <span className="text-xs text-sky-300">Ready</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                            Buyer activity
                          </p>
                          <div className="mt-4 space-y-3">
                            {[
                              ["Portal opened", "2m ago"],
                              ["SBOM downloaded", "6m ago"],
                              ["Review accepted", "11m ago"],
                            ].map(([event, time]) => (
                              <div key={event} className="flex items-start justify-between gap-4">
                                <p className="text-sm text-slate-100">{event}</p>
                                <p className="text-xs text-slate-400">{time}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(14,165,233,0.18)_0%,rgba(14,165,233,0.02)_100%)] p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                            Trust signal
                          </p>
                          <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-white">
                            98%
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            artifact completeness across the latest approved release package
                          </p>
                        </div>

                        <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                            Status stream
                          </p>
                          <div className="mt-4 space-y-3">
                            {["Generated from CI", "Checked by security", "Shared with buyer"].map(
                              (item) => (
                                <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                                  <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
                                  {item}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxCard>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <Reveal className="rounded-[2.2rem] border border-line bg-white/72 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Why it lands better
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                  Security materials feel sharper when the presentation is current too.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {proof.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="features" className="py-10 md:py-16">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
              Features
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl">
              The missing layer is not generation. It is presentation, control, and proof.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal
                key={feature.id}
                delay={index * 70}
                className="h-full"
              >
                <MotionCard className="h-full rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold tracking-[0.24em] text-sky-700">
                      {feature.id}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </MotionCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="workflow" className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <Reveal className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
                Workflow
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl">
                Built to fit the release process you already have.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Manual first or fully automated, the workflow stays simple:
                prepare the release package once, then share it through a secure
                experience buyers can navigate without friction.
              </p>
            </Reveal>

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <Reveal
                  key={item.step}
                  delay={index * 80}
                  className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                >
                  <div className="grid gap-4 md:grid-cols-[140px_1fr] md:items-start">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {item.step}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
                FAQ
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-950">
                Common questions from teams replacing manual artifact requests.
              </h2>
            </Reveal>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Reveal
                  key={faq.question}
                  delay={index * 60}
                  className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="py-8 md:py-14">
          <Reveal className="overflow-hidden rounded-[2.4rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">
                  Stop sending security files ad hoc
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                  Give buyers one modern, controlled destination for every release artifact.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  The underlying workflow can stay familiar. The buyer experience
                  does not have to look improvised.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <MotionButton
                  href="#top"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-orange-500 px-6 text-base font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  Request Access
                </MotionButton>
                <MotionButton
                  href="#features"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 text-base font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-white/14 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  View Features
                </MotionButton>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
