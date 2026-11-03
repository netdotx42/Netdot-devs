import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame } from "@/components/chrome";
import { delivery, services } from "@/lib/content";

export const Route = createFileRoute("/litepaper")({
  component: Litepaper,
  head: () => ({
    meta: [
      { title: "Netdot-devs | Litepaper v1.0" },
      {
        name: "description",
        content:
          "A practical development services framework for AI, blockchain and Web3 teams. Litepaper v1.0.",
      },
    ],
  }),
});

function Litepaper() {
  return (
    <Frame>
      <main className="paper shell" id="top">
        <Link to="/" className="back">
          ← Back to website
        </Link>
        <p className="kicker paper-tag">NETDOT-DEVS · LITEPAPER V1.0</p>
        <h1>
          Building smarter.
          <br />
          Scaling faster.
        </h1>
        <p className="lead">
          A practical development services framework for AI, blockchain and Web3 teams.
        </p>
        <p className="status">
          <strong>Status:</strong> Concept and service overview · November 2026
        </p>

        <section>
          <h2>1. Executive summary</h2>
          <p>
            Netdot-devs aims to help founders and project teams move from fragmented ideas to
            maintainable digital products. Its proposed offering combines AI automation, blockchain
            engineering, DevOps, websites and dApps, and project scaling support.
          </p>
        </section>

        <section>
          <h2>2. The problem</h2>
          <p>
            Early-stage projects often lack the specialist time, infrastructure and delivery
            processes required to launch reliably. Disconnected tooling, unclear requirements and
            manual operations can delay development and increase cost.
          </p>
        </section>

        <section>
          <h2>3. Our solution</h2>
          <p>
            Netdot-devs offers scoped, milestone-based technical services. Each engagement begins
            with requirements discovery and a delivery plan, followed by development, testing,
            documentation and handover.
          </p>
        </section>

        <section>
          <h2>4. Core services and indicative pricing</h2>
          <div className="paper-table" role="table" aria-label="Indicative starting prices">
            <div className="paper-row head" role="row">
              <span role="columnheader">Service</span>
              <span role="columnheader">Starting price (USD)</span>
            </div>
            {services.map((service) => (
              <div className="paper-row" role="row" key={service.index}>
                <span role="cell">
                  {service.title} {service.accent.replace("&", "and")}
                </span>
                <span role="cell">{service.price}</span>
              </div>
            ))}
          </div>
          <p>
            These are indicative starting prices, not fixed quotes. SOL payments may be accepted at
            an agreed USD conversion rate at the time of invoicing.
          </p>
        </section>

        <section>
          <h2>5. Delivery model</h2>
          <ol className="delivery">
            {delivery.map(([title, copy]) => (
              <li key={title}>
                <strong>{title}:</strong> {copy}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2>6. Engineering principles</h2>
          <p>
            Prioritize understandable code, transparent scope, least-privilege access, secure
            handling of credentials, clear ownership of deliverables and honest communication about
            risks. Smart contracts and financial integrations may require independent specialist
            security review before production use.
          </p>
        </section>

        <section>
          <h2>7. Proposed roadmap</h2>
          <p>
            <strong>Phase 1:</strong> establish the brand, website, service catalog and enquiry
            workflow. <strong>Phase 2:</strong> publish demonstrable portfolio projects and reusable
            development templates. <strong>Phase 3:</strong> expand automation offerings, deployment
            tooling and long-term support packages. Timing depends on resources and client demand.
          </p>
        </section>

        <section>
          <h2>8. Commercial terms and limitations</h2>
          <p>
            Project outcomes depend on scope, third-party services and client participation. No
            revenue, token-price, investment return or community-growth result is guaranteed.
            Netdot-devs does not imply a native token, investment product, audited smart contracts
            or formal partnerships through this document.
          </p>
        </section>

        <section>
          <h2>9. Next steps</h2>
          <p>
            Prospective clients can request a scoped proposal describing their project, technology
            stack, budget and delivery timeline. Contact information should be verified and
            published by the site owner.
          </p>
          <Link to="/" hash="contact" className="button primary paper-cta">
            Draft a project brief <span>↗</span>
          </Link>
        </section>

        <p className="paper-end">
          Netdot-devs · Litepaper v1.0 · Informational business document, not financial or
          investment advice.
        </p>
      </main>
    </Frame>
  );
}
