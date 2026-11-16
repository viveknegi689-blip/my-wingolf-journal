
const events = [
  {
    number: "01",
    category: "TRADITION & GEMEINSCHAFT",
    title: "Die Kunst des Miteinanders",
    description:
      "Eine Würdigung der Freundschaft, der Traditionen und jener Augenblicke, die uns verbinden.",
    date: "Eine Erinnerung folgt",
    location: "Hamburg, Deutschland",
    symbol: "✦",
  },
  {
    number: "02",
    category: "STUDENTENLEBEN",
    title: "Leben jenseits des Hörsaals",
    description:
      "Die Menschen, Gespräche und Erlebnisse, die das Studentenleben unvergesslich machen.",
    date: "Eine Erinnerung folgt",
    location: "Norddeutschland",
    symbol: "❧",
  },
  {
    number: "03",
    category: "MENSCHEN & ORTE",
    title: "Eine Reise voller Freundschaften",
    description:
      "Geschichten von besonderen Orten, Begegnungen und Menschen, die meinen Weg begleiten.",
    date: "Eine Erinnerung folgt",
    location: "Quer durch Deutschland",
    symbol: "✧",
  },
];

export default function Home() {
  return (
    <main className="journal">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#" className="brand">
          <span className="brand-symbol">W</span>
          <span>
            <strong>MEIN WINGOLF-TAGEBUCH</strong>
            <small>EINE PERSÖNLICHE CHRONIK</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#home">Startseite</a>
          <a href="#about">Über mich</a>
          <a href="#journal">Chronik</a>
          <a href="#gallery">Galerie</a>
        </div>

        <a href="#journal" className="nav-button">
          CHRONIK ENTDECKEN ↗
        </a>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            ✦ &nbsp; TRADITION · FREUNDSCHAFT · ERLEBNISSE &nbsp; ✦
          </p>

          <h1>
            Manche Augenblicke
            <br />
            verdienen es,
            <br />
            <em>unvergessen zu bleiben.</em>
          </h1>

          <div className="gold-line" />

          <p className="hero-description">
            Eine persönliche Sammlung von Erlebnissen,
            Begegnungen und Erinnerungen aus meiner Zeit
            im Wingolf, dem Studentenleben und darüber hinaus.
          </p>

          <a href="#journal" className="hero-button">
            DIE CHRONIK ENTDECKEN <span>↗</span>
          </a>
        </div>

        <div className="hero-decoration">
          <span className="decoration-top">GEGR. 2026</span>
          <div className="decoration-circle">
            <span>W</span>
          </div>
          <span className="decoration-bottom">
            ERINNERUNGEN & TRADITIONEN
          </span>
        </div>

        <div className="hero-bottom">
          <span>HAMBURG · DEUTSCHLAND</span>
          <span>EINE FORTLAUFENDE CHRONIK</span>
          <span>WEITERLESEN ↓</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section" id="about">
        <div className="section-label">01 — EINE PERSÖNLICHE CHRONIK</div>

        <div className="intro-grid">
          <h2>
            Ein Leben geprägt von
            <br />
            <em>Menschen und Momenten.</em>
          </h2>

          <div className="intro-text">
            <p>
              Willkommen in meinem persönlichen Tagebuch.
              Ein Ort, an dem ich die Erlebnisse festhalte,
              die das Leben besonders machen.
            </p>
            <p>
              Von traditionellen Veranstaltungen und dem
              Studentenleben über Reisen und Freundschaften
              bis hin zu unerwarteten Abenteuern –
              jedes Erlebnis erzählt eine eigene Geschichte,
              die es wert ist, bewahrt zu werden.
            </p>
            <a href="#journal" className="text-link">
              MEINE GESCHICHTEN ENTDECKEN ↗
            </a>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="journal-section" id="journal">
        <div className="section-label">02 — DIE CHRONIK</div>

        <div className="section-heading">
          <div>
            <h2>Geschichten & <em>Erlebnisse.</em></h2>
            <p>Eine Sammlung unvergesslicher Augenblicke.</p>
          </div>
          <span className="volume-label">BAND I · 2026</span>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <article className="event-card" key={event.number}>
              <div className={`event-art art-${event.number}`}>
                <span className="event-number">{event.number}</span>
                <span className="event-symbol">{event.symbol}</span>
                <span className="art-caption">
                  MEIN WINGOLF-TAGEBUCH
                </span>
              </div>

              <div className="event-info">
                <span className="event-category">
                  {event.category}
                </span>

                <h3>{event.title}</h3>

                <p>{event.description}</p>

                <div className="event-meta">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section" id="gallery">
        <div className="section-label">03 — DIE BILDERGALERIE</div>

        <div className="gallery-heading">
          <h2>Augenblicke in <em>Bildern.</em></h2>
          <p>
            Fotografien, Orte und Erinnerungen,
            die ihren Platz in dieser Sammlung finden werden.
          </p>
        </div>

        <div className="gallery-placeholder">
          <span>✧</span>
          <h3>Jedes Bild erzählt eine Geschichte.</h3>
          <p>Mit jedem neuen Erlebnis wächst diese Galerie.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">Mein Wingolf-Tagebuch.</div>
        <p>Traditionen. Freundschaften. Erinnerungen.</p>
        <div className="footer-bottom">
          <span>PERSÖNLICHE CHRONIK · HAMBURG</span>
          <span>MIT SORGFALT GESTALTET © 2026</span>
        </div>
      </footer>

    </main>
  );
}
