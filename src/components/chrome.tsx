import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { GITHUB, team } from "@/lib/content";

function Brand({ href = "/" }: { href?: string }) {
  return (
    <Link to={href} className="brand" aria-label="Netdot-devs home">
      <span className="brandmark">
        <img src="/logo.jpg" alt="" />
      </span>
      <span>
        netdot<span className="red">.</span>devs
      </span>
    </Link>
  );
}

function HashScroller() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    if (!id) return;
    let tries = 0;
    let stable = 0;
    let timer = 0;
    const align = () => {
      const el = document.getElementById(id);
      if (!el) {
        if (tries++ < 24) timer = window.setTimeout(align, 50);
        return;
      }
      const top = el.getBoundingClientRect().top;
      if (Math.abs(top - 96) > 48) {
        stable = 0;
        const root = document.documentElement;
        const prev = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        el.scrollIntoView({ block: "start" });
        root.style.scrollBehavior = prev;
      } else if (++stable >= 2) {
        return;
      }
      if (tries++ < 16) timer = window.setTimeout(align, 80);
    };
    align();
    return () => window.clearTimeout(timer);
  }, [hash]);

  return null;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="shell nav">
        <Brand />
        <nav className={open ? "navlinks open" : "navlinks"} id="navlinks" aria-label="Main navigation">
          <Link to="/" hash="expertise" onClick={() => setOpen(false)}>
            Expertise
          </Link>
          <Link to="/" hash="approach" onClick={() => setOpen(false)}>
            Approach
          </Link>
          <Link to="/litepaper" onClick={() => setOpen(false)}>
            Litepaper <span className="arrow">↗</span>
          </Link>
          <Link to="/" hash="support" onClick={() => setOpen(false)}>
            Support
          </Link>
        </nav>
        <Link to="/" hash="contact" className="navcta" onClick={() => setOpen(false)}>
          Let's talk <span>↗</span>
        </Link>
        <button
          className="menu"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navlinks"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="team-strip" aria-label="Team">
        <div className="shell team-row">
          <div className="kicker team-kicker">TEAM</div>
          <ul className="team-list">
            {team.map((person) => (
              <li className="team-person" key={person.name}>
                <img src={person.photo} alt="" />
                <span>{person.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer>
      <div className="shell footer-main">
        <Brand href="/#top" />
        <span>ENGINEERING WHAT COMES NEXT.</span>
        <span className="footer-links">
          <a href={GITHUB} target="_blank" rel="noreferrer">
            GITHUB ↗
          </a>
          <Link to="/litepaper">LITEPAPER ↗</Link>
        </span>
      </div>
      <div className="shell footer-bottom">
        <span>© {year} NETDOT-DEVS. ALL RIGHTS RESERVED.</span>
        <span>INDEPENDENT AI & BLOCKCHAIN DEVELOPMENT</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
      </footer>
    </>
  );
}

export function Frame({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <HashScroller />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
