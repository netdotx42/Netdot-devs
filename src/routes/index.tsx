import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame } from "@/components/chrome";
import { focuses, process, services, ticker, WALLET } from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Netdot-devs — Engineering what comes next" },
      {
        name: "description",
        content:
          "Engineering-led solutions for teams moving at the edge of AI, blockchain and the modern web.",
      },
    ],
  }),
});

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

function Home() {
  const [walletNote, setWalletNote] = useState("");
  const [name, setName] = useState("");
  const [focus, setFocus] = useState<string>(focuses[0]);
  const [need, setNeed] = useState("");
  const [briefNote, setBriefNote] = useState("");
  const [copiedBrief, setCopiedBrief] = useState("");

  async function onCopyWallet() {
    const ok = await copyText(WALLET);
    setWalletNote(
      ok
        ? "Wallet address copied to clipboard."
        : "Copy unavailable here. Select the address above to copy manually.",
    );
  }

  async function onBrief(e: FormEvent) {
    e.preventDefault();
    const brief = [
      "Netdot-devs project enquiry",
      `Name: ${name.trim()}`,
      `Focus: ${focus}`,
      "",
      need.trim(),
    ].join("\n");
    const ok = await copyText(brief);
    setCopiedBrief(brief);
    setBriefNote(
      ok
        ? "Brief copied. Paste it wherever you reach the studio — a public inbox is not published yet."
        : "Clipboard blocked. Select the brief below and copy it manually.",
    );
  }

  return (
    <Frame>
      <main id="top">
        <section className="hero shell">
          <div className="hero-left">
            <div className="eyebrow">
              <span className="pulse" aria-hidden="true" />
              INDEPENDENT ENGINEERING STUDIO
              <span className="eyeline" aria-hidden="true" />
              001 / 2026
            </div>
            <h1>
              Build for
              <br />
              <em>
                what's next<span className="red">.</span>
              </em>
            </h1>
            <p className="hero-copy">
              Engineering-led solutions for teams moving at the edge of{" "}
              <strong>AI, blockchain and the modern web.</strong> From first architecture to
              production-ready delivery.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button primary">
                Start a project <span>↗</span>
              </a>
              <a href="#expertise" className="button secondary">
                Explore capabilities <span>↓</span>
              </a>
            </div>
            <div className="hero-bottom">
              <div className="micro">
                STRATEGY <span>+</span> ENGINEERING <span>+</span> EXECUTION
              </div>
              <div className="scroll">
                SCROLL TO EXPLORE <span>↓</span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="visual-label">
              <span>NETDOT / IDENTITY</span>
              <span>FIG. 01</span>
            </div>
            <div className="visual">
              <img src="/logo.jpg" alt="Netdot-devs red N mark on black" />
              <div className="visual-overlay" />
            </div>
            <div className="visual-foot">
              <span>
                <span className="red">●</span> BUILT TO EVOLVE
              </span>
              <span>AI / WEB3 / SYSTEMS</span>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Studio principles">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-set" key={copy} aria-hidden={copy === 1}>
                {ticker.map((item) => (
                  <span key={`${copy}-${item}`}>
                    {item} <span className="red">✳</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="expertise" className="section shell">
          <div className="section-top">
            <div className="kicker">01 / OUR EXPERTISE</div>
            <div>
              <h2>
                Technical depth.
                <br />
                <span className="dim">Commercial clarity.</span>
              </h2>
              <p className="section-intro">
                Five focused capabilities. Built around practical outcomes, clear scope, and
                maintainable delivery.
              </p>
            </div>
          </div>
          <div className="services">
            {services.map((service) => (
              <article className="service" key={service.index}>
                <div className="service-index">{service.index}</div>
                <div className="service-icon" aria-hidden="true">
                  {service.mark}
                </div>
                <div className="service-content">
                  <h3>
                    {service.title} <span>{service.accent}</span>
                  </h3>
                  <p>{service.copy}</p>
                </div>
                <div className="service-price">
                  <small>STARTING AT</small>
                  <strong>
                    {service.price} <span>USD</span>
                  </strong>
                </div>
              </article>
            ))}
          </div>
          <p className="fineprint">
            Indicative starting prices, not fixed quotes. Final deliverables, timelines and fees
            are agreed in writing. SOL payments available at an agreed conversion rate.
          </p>
        </section>

        <section id="approach" className="section approach-wrap">
          <div className="shell">
            <div className="section-top">
              <div className="kicker">02 / HOW WE WORK</div>
              <div>
                <h2>
                  Less complexity.
                  <br />
                  <span className="dim">More momentum.</span>
                </h2>
                <p className="section-intro">
                  A transparent process that keeps you close to the work, from first conversation
                  to handover.
                </p>
              </div>
            </div>
            <div className="process">
              {process.map((item) => (
                <article key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <Link className="text-link" to="/litepaper">
              Read our litepaper <span>↗</span>
            </Link>
          </div>
        </section>

        <section className="manifesto shell">
          <div className="kicker">03 / OUR POINT OF VIEW</div>
          <p>
            Technology should create <span>leverage</span>, not noise. We focus on systems that
            work, experiences that feel effortless, and foundations that can grow with the ambition
            behind them
            <span className="red">.</span>
          </p>
          <div className="manifesto-sign">
            NETDOT-DEVS <span>— ENGINEERING MINDSET</span>
          </div>
        </section>

        <section id="support" className="section support-wrap">
          <div className="shell support-grid">
            <div>
              <div className="kicker">04 / SUPPORT THE WORK</div>
              <h2>
                Back independent
                <br />
                <span className="dim">development.</span>
              </h2>
              <p className="section-intro">
                Help support experimentation, open-source tooling and future Netdot-devs projects.
                Donations are optional and do not purchase services.
              </p>
              <div className="network">◎ &nbsp; SOLANA NETWORK ONLY</div>
            </div>
            <div className="wallet-card">
              <div className="wallet-head">
                <span>DONATION ADDRESS</span>
                <span className="live-dot">● &nbsp; SOL</span>
              </div>
              <div className="wallet-value" id="wallet">
                {WALLET}
              </div>
              <button className="button primary copy" type="button" onClick={onCopyWallet}>
                Copy wallet address <span>⧉</span>
              </button>
              <div className="copy-feedback" role="status" aria-live="polite">
                {walletNote}
              </div>
              <p>Verify the wallet and network before sending. Crypto transfers are generally irreversible.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact shell">
          <div className="kicker">05 / NEXT STEPS</div>
          <h2>
            Have something
            <br />
            <em>
              worth building<span className="red">?</span>
            </em>
          </h2>
          <p>
            Tell us what you're creating, where you are today, and what you need next. A public
            inbox isn't published yet — draft the brief here and copy it when you're ready
            to send.
          </p>
          <form className="brief" onSubmit={onBrief}>
            <label className="field">
              <span>YOUR NAME</span>
              <input
                required
                name="name"
                autoComplete="name"
                maxLength={80}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ada Okonkwo"
              />
            </label>
            <label className="field">
              <span>FOCUS</span>
              <select name="focus" value={focus} onChange={(e) => setFocus(e.target.value)}>
                {focuses.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="field field-wide">
              <span>WHAT YOU NEED NEXT</span>
              <textarea
                required
                name="need"
                rows={5}
                maxLength={1200}
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                placeholder="Stack, timeline, and the outcome you want from the first milestone."
              />
            </label>
            <button className="button primary brief-submit" type="submit">
              Copy project brief <span>↗</span>
            </button>
            <p className="copy-feedback field-wide" role="status" aria-live="polite">
              {briefNote}
            </p>
            {copiedBrief && briefNote.startsWith("Clipboard") ? (
              <pre className="brief-fallback field-wide">{copiedBrief}</pre>
            ) : null}
          </form>
        </section>
      </main>
    </Frame>
  );
}
