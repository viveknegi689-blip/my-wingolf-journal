
const events = [
  {
    number: "01",
    category: "TRADITION & FELLOWSHIP",
    title: "The Art of Gathering",
    description:
      "Celebrating friendship, tradition and the moments that bring us together.",
    date: "A memory to be added",
    location: "Hamburg, Germany",
    symbol: "✦",
  },
  {
    number: "02",
    category: "STUDENT LIFE",
    title: "Life Beyond the Lecture Hall",
    description:
      "The people, conversations and experiences that make student life memorable.",
    date: "A memory to be added",
    location: "Northern Germany",
    symbol: "❧",
  },
  {
    number: "03",
    category: "PEOPLE & PLACES",
    title: "A Journey of Friendships",
    description:
      "Collecting stories from the places visited and the people encountered.",
    date: "A memory to be added",
    location: "Across Germany",
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
            <strong>MY WINGOLF JOURNAL</strong>
            <small>A PERSONAL CHRONICLE</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">My Story</a>
          <a href="#journal">Journal</a>
          <a href="#gallery">Gallery</a>
        </div>

        <a href="#journal" className="nav-button">
          EXPLORE JOURNAL ↗
        </a>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            ✦ &nbsp; TRADITION · FRIENDSHIP · EXPERIENCE &nbsp; ✦
          </p>

          <h1>
            Some moments
            <br />
            deserve to be
            <br />
            <em>remembered.</em>
          </h1>

          <div className="gold-line" />

          <p className="hero-description">
            A personal collection of experiences, encounters
            and memories from my journey through Wingolf,
            university life and beyond.
          </p>

          <a href="#journal" className="hero-button">
            DISCOVER THE JOURNAL <span>↗</span>
          </a>
        </div>

        <div className="hero-decoration">
          <span className="decoration-top">EST. 2026</span>
          <div className="decoration-circle">
            <span>W</span>
          </div>
          <span className="decoration-bottom">
            MEMORIES & TRADITIONS
          </span>
        </div>

        <div className="hero-bottom">
          <span>HAMBURG · GERMANY</span>
          <span>AN ONGOING COLLECTION</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section" id="about">
        <div className="section-label">01 — A PERSONAL CHRONICLE</div>

        <div className="intro-grid">
          <h2>
            A life shaped by
            <br />
            <em>people and moments.</em>
          </h2>

          <div className="intro-text">
            <p>
              Welcome to my personal journal. A place where
              I collect the experiences that make life
              meaningful.
            </p>
            <p>
              From traditional gatherings and student life
              to travels, friendships and unexpected
              adventures, every experience has a story
              worth preserving.
            </p>
            <a href="#journal" className="text-link">
              EXPLORE MY STORIES ↗
            </a>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="journal-section" id="journal">
        <div className="section-label">02 — THE JOURNAL</div>

        <div className="section-heading">
          <div>
            <h2>Stories & <em>Experiences.</em></h2>
            <p>A collection of moments worth remembering.</p>
          </div>
          <span className="volume-label">VOLUME I · 2026</span>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <article className="event-card" key={event.number}>
              <div className={`event-art art-${event.number}`}>
                <span className="event-number">{event.number}</span>
                <span className="event-symbol">{event.symbol}</span>
                <span className="art-caption">
                  MY WINGOLF JOURNAL
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
        <div className="section-label">03 — THE GALLERY</div>

        <div className="gallery-heading">
          <h2>Moments in <em>frames.</em></h2>
          <p>
            Photographs, places and memories waiting to
            find their place in this collection.
          </p>
        </div>

        <div className="gallery-placeholder">
          <span>✧</span>
          <h3>Every photograph tells a story.</h3>
          <p>The gallery will grow with every new experience.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">My Wingolf Journal.</div>
        <p>Traditions. Friendships. Memories.</p>
        <div className="footer-bottom">
          <span>PERSONAL CHRONICLE · HAMBURG</span>
          <span>MADE WITH CARE © 2026</span>
        </div>
      </footer>

    </main>
  );
}
