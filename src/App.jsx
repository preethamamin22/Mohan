import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Download, Mail, Phone, MapPin,
  TrendingUp, Users, Award, Target, Star, ChevronRight
} from 'lucide-react';
import './index.css';

/* ── ANIM HELPERS ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
});

const staggerParent = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13, delayChildren: 0.1 } }
};
const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

/* ── DATA ─────────────────────────────────────── */
const SKILLS = [
  'Customer Experience Management', 'Customer Retention', 'CRM Systems',
  'Sales Leadership', 'Communication', 'Escalation Handling',
  'Dealer Operations', 'Tata Cars Sales', 'Customer Delight',
  'Team Coaching', 'Data-Driven Decisions', 'NPS Management'
];

const WHAT_I_DO = [
  { icon: '🎯', title: 'Sales CX Strategy', text: 'Designing end-to-end customer journeys for authorized TATA Cars Sales — ensuring every buyer from Mysore walks away proud to own a Tata, and eager to return.' },
  { icon: '🤝', title: 'Customer Retention & CRM', text: 'Managing long-term customer relationships using CRM platforms, tracking post-purchase satisfaction, and proactively engaging customers for renewals, upgrades, and referrals.' },
  { icon: '📢', title: 'Communication & Delight', text: 'Creating a culture of genuine human connection on the sales floor — from the very first enquiry call to the final delivery handshake, every touchpoint is crafted with care.' }
];

const JOURNEY = [
  { year: '2022', role: 'Customer Experience Manager', company: 'TATA Motors URS KAR · Mysore (Full-time)', desc: 'Leading customer experience at one of Mysore\'s premier authorized TATA Cars dealerships. Focused on customer delight, retention strategy, CRM systems, and ensuring every vehicle delivery is a memorable milestone for the buyer.' },
  { year: '2008', role: 'Commerce Graduate', company: 'TTL College, Mysore', desc: 'Completed a 3-year course in Commerce (June 2005 – March 2008), building a strong foundation in business principles, accounting, and management that underpins the professional approach he brings to customer and sales operations.' },
  { year: 'School', role: 'Student', company: 'St. Mary\'s Convent School, Mysore', desc: 'Completed schooling in Mysore — where the values of discipline, communication, and service were instilled at an early age, forming the bedrock of his people-first philosophy.' }
];

const ACHIEVEMENTS = [
  { icon: '🏆', val: '3+', name: 'Years as CXM at URS KAR', desc: 'Leading customer experience at TATA Motors URS KAR, Mysore since April 2022 — consistently raising the bar on sales satisfaction' },
  { icon: '🚗', val: '100%', name: 'Authorized TATA Sales', desc: 'Overseeing the CX pipeline for all TATA car models at URS KAR — from Tiago and Nexon to Harrier and Safari' },
  { icon: '🤝', val: '1st', name: 'Customer Always First', desc: 'Championing a customer-delight philosophy across every stage of the sales journey — enquiry, test drive, booking, delivery, and follow-up' },
  { icon: '📋', val: 'CRM', name: 'Systems & Processes', desc: 'Implementation and active use of CRM platforms to track customer journeys, manage follow-ups, and improve retention rates' },
  { icon: '🎓', val: 'Commerce', name: 'TTL College Graduate', desc: 'Foundations in Commerce (2005–2008), bringing business acumen and financial literacy to every customer conversation' },
  { icon: '📍', val: 'Mysore', name: 'Local. Trusted. Known.', desc: 'Rooted in Mysore — educated at St. Mary\'s Convent and deeply connected to the community he serves every day' }
];

const TESTIMONIALS = [
  { quote: 'Mohan Aradhya brings a rare combination of warmth, professionalism, and system-thinking to automotive sales. Every customer who walks into URS KAR feels the difference.', name: 'URS KAR Dealer Team', role: 'TATA Motors URS KAR, Mysore' },
  { quote: 'From the moment I enquired about the Nexon to the day I took delivery, Mohan ensured I was always updated, always valued, and always confident in my decision.', name: 'Tata Nexon Customer', role: 'Mysore' },
  { quote: 'Mohan\'s understanding of the customer\'s emotional journey during a car purchase is exceptional. He makes the process feel personal, not transactional.', name: 'Sales Colleague', role: 'TATA Motors URS KAR' },
  { quote: 'His CRM discipline and follow-up process are what differentiate URS KAR from other dealerships. Mohan has built something very special here in Mysore.', name: 'Automotive Industry Peer', role: 'Karnataka, India' }
];

/* ── NAVBAR ───────────────────────────────────── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [['About', 'about'], ['What I Do', 'what'], ['Journey', 'journey'], ['Achievements', 'achievements'], ['Contact', 'contact']];

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-brand" onClick={() => scrollTo('hero')}>
            <div className="nav-badge">M</div>
            <span className="nav-name">MOHAN <span>CXM</span></span>
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            {navItems.map(([label, id]) => (
              <button key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</button>
            ))}
            <button className="nav-cta" onClick={() => scrollTo('contact')}>Connect →</button>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map(([label, id]) => (
          <button key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</button>
        ))}
        <button className="nav-cta" onClick={() => scrollTo('contact')}>Connect →</button>
      </div>
    </>
  );
}

/* ── HERO ─────────────────────────────────────── */
function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="hero" className="hero">
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />
      <div className="hero-inner">
        {/* Left */}
        <motion.div variants={staggerParent} initial="hidden" animate="show">
          <motion.div className="hero-eyebrow" variants={staggerChild}>
            URS KAR TATA MOTORS · Mysore
          </motion.div>
          <motion.h1 className="hero-name" variants={staggerChild}>
            MOHAN<span>.</span>
          </motion.h1>
          <motion.div className="hero-title-line" variants={staggerChild}>
            Mohan M G Aradhya · Customer Experience Manager
          </motion.div>
          <motion.p className="hero-bio" variants={staggerChild}>
            CXM at TATA Motors URS KAR, Mysore. With a foundational education in Commerce and a career built entirely around putting the customer first — I ensure that every Tata buyer in Mysore walks away with more than just a car. They walk away with a relationship.
          </motion.p>
          <motion.div className="hero-actions" variants={staggerChild}>
            <button className="btn btn-blue" onClick={() => scrollTo('achievements')}>
              View Achievements <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Let's Connect
            </button>
          </motion.div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero-photo-frame">
            <img src="/mohan.jpg" alt="Mohan M G Aradhya — Customer Experience Manager, TATA Motors URS KAR" />
            <div className="hero-photo-badge">
              <span className="dot" />
              <div>
                <div className="badge-text">Mohan</div>
                <div className="badge-sub">Available for collaboration</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── STATS BAR ────────────────────────────────── */
function StatsBar() {
  const stats = [
    { val: '3+',    label: 'Years at TATA URS KAR' },
    { val: '2022',  label: 'CXM Role Since'         },
    { val: '100%',  label: 'Authorized Tata Sales'   },
    { val: 'Mysore', label: 'Based In'               }
  ];
  return (
    <div className="stats-bar">
      <div className="stats-bar-inner">
        {stats.map((s, i) => (
          <motion.div key={i} className="stat-cell" {...fadeUp(i * 0.08)}>
            <div className="stat-val">{s.val}</div>
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── ABOUT ────────────────────────────────────── */
function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <motion.div {...fadeUp()}>
          <div className="section-tag">About Me</div>
          <h2 className="section-h">Driven by Customer Delight,<br />Powered by Automotive Pride.</h2>
          <p className="section-sub">Born and raised in Mysore, I have spent my entire career in the city I call home.</p>
        </motion.div>

        <div className="about-grid">
          <motion.div className="about-img-wrap" {...fadeUp(0.15)}>
            <div className="about-img-frame">
              <img src="/mohan.jpg" alt="Mohan M G Aradhya" />
            </div>
            <div className="about-img-tag">CXM · Sales</div>
          </motion.div>

          <motion.div className="about-content" {...fadeUp(0.2)}>
            <p className="about-para">
              I am Mohan M G Aradhya — Customer Experience Manager at TATA Motors URS KAR, Mysore. I have built my career around one simple conviction: every person who walks into a showroom deserves to be treated like family. From the first enquiry to the final delivery, I am present at every step of the journey.
            </p>
            <p className="about-para">
              Since joining TATA Motors URS KAR in April 2022, I have focused on building robust CRM systems, nurturing long-term customer retention, and ensuring that every interaction — whether a test drive, a booking, or a post-delivery follow-up — reflects the quality and trust that the Tata brand stands for.
            </p>
            <p className="about-para">
              I am a Commerce graduate from TTL College, Mysore (2005–2008) and completed my schooling at St. Mary's Convent, Mysore. Rooted in this city and deeply connected to its people, I bring a local, personal touch to every customer conversation.
            </p>
            <div>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--text3)', marginBottom: 12 }}>Core Expertise</div>
              <div className="skill-list">
                {SKILLS.map(s => <span key={s} className="skill-chip">{s}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── WHAT I DO ────────────────────────────────── */
function WhatIDo() {
  return (
    <section id="what" className="what-i-do">
      <div className="section-inner">
        <motion.div {...fadeUp()}>
          <div className="section-tag">What I Do</div>
          <h2 className="section-h">My Role in Every Sale.</h2>
          <p className="section-sub">The CXM role in sales is part strategist, part coach, and part customer advocate — all at once.</p>
        </motion.div>
        <motion.div className="wid-grid" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
          {WHAT_I_DO.map((w, i) => (
            <motion.div className="wid-card" key={i} variants={staggerChild}>
              <div className="wid-icon">{w.icon}</div>
              <h3 className="wid-title">{w.title}</h3>
              <p className="wid-text">{w.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── JOURNEY ──────────────────────────────────── */
function Journey() {
  return (
    <section id="journey">
      <div className="section-inner">
        <motion.div {...fadeUp()}>
          <div className="section-tag">Career Journey</div>
          <h2 className="section-h">12 Years. One Passion.</h2>
          <p className="section-sub">From the showroom floor to leading the CX vision — here is the road I have traveled.</p>
        </motion.div>
        <div className="timeline">
          {JOURNEY.map((j, i) => (
            <motion.div className="tl-item" key={i} {...fadeUp(i * 0.12)}>
              <div className="tl-dot" />
              {i % 2 === 0 ? (
                <>
                  <div className="tl-year" style={{ justifyContent: 'flex-end', paddingRight: 48 }}>
                    <span className="tl-year-tag">{j.year}</span>
                  </div>
                  <div className="tl-card" style={{ paddingLeft: 48 }}>
                    <div className="tl-role">{j.role}</div>
                    <div className="tl-company">{j.company}</div>
                    <p className="tl-desc">{j.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="tl-card" style={{ paddingRight: 48 }}>
                    <div className="tl-role">{j.role}</div>
                    <div className="tl-company">{j.company}</div>
                    <p className="tl-desc">{j.desc}</p>
                  </div>
                  <div className="tl-year" style={{ paddingLeft: 48 }}>
                    <span className="tl-year-tag">{j.year}</span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ACHIEVEMENTS ─────────────────────────────── */
function Achievements() {
  return (
    <section id="achievements" className="ach-bg">
      <div className="section-inner">
        <motion.div {...fadeUp()}>
          <div className="section-tag">Achievements</div>
          <h2 className="section-h">Results That Speak.</h2>
          <p className="section-sub">Numbers don't lie. Here's the measurable impact of building a culture of customer obsession.</p>
        </motion.div>
        <motion.div className="ach-grid" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }}>
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div className="ach-card" key={i} variants={staggerChild}>
              <div className="ach-icon">{a.icon}</div>
              <div className="ach-val">{a.val}</div>
              <div className="ach-name">{a.name}</div>
              <p className="ach-desc">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ─────────────────────────────── */
function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section-inner">
        <motion.div {...fadeUp()}>
          <div className="section-tag">Testimonials</div>
          <h2 className="section-h">What People Say.</h2>
          <p className="section-sub">From customers who became brand ambassadors to teammates who became leaders.</p>
        </motion.div>
        <motion.div className="testi-grid" variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div className="testi-card" key={i} variants={staggerChild}>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.name.charAt(0)}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role2">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── CONTACT ──────────────────────────────────── */
function Contact() {
  const [form, setForm]         = useState({ name: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', company: '', message: '' });
  };

  return (
    <section id="contact" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <motion.div {...fadeUp()}>
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-h">Let's Connect.</h2>
          <p className="section-sub">Whether you're a customer, a partner dealership, or a brand professional — my door is open.</p>
        </motion.div>

        <div className="contact-wrap">
          {/* Info */}
          <motion.div className="contact-info" {...fadeUp(0.1)}>
            {[
              { icon: '📍', label: 'Location', val: 'Mysore, Karnataka, India' },
              { icon: '📧', label: 'Email', val: 'mohan.aradhya@tatamotors.in' },
              { icon: '📞', label: 'Phone', val: '+91 98XXX XXXXX' },
              { icon: '🏢', label: 'Dealership', val: 'TATA Motors URS KAR, Mysore' }
            ].map((c, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-val">{c.val}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form className="contact-form" onSubmit={handleSubmit} {...fadeUp(0.15)}>
            <div>
              <label className="field-label">Your Name</label>
              <input className="field-input" type="text" placeholder="Ravi Kumar" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
            </div>
            <div>
              <label className="field-label">Company / Dealership</label>
              <input className="field-input" type="text" placeholder="e.g. Tata Motors Dealer, Udupi" value={form.company} onChange={e => setForm(p => ({ ...p, company: e.target.value }))} />
            </div>
            <div>
              <label className="field-label">Message</label>
              <textarea className="field-input" placeholder="I'd like to discuss..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required />
            </div>
            <button className="btn-submit" type="submit">
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div className="toast" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
            ✓ Message sent! Mohan will get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── FOOTER ───────────────────────────────────── */
function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-copy">© 2026 Mohan · Customer Experience Manager · All rights reserved.</div>
        <div className="footer-tata">URS KAR TATA MOTORS</div>
      </div>
    </footer>
  );
}

/* ── APP ROOT ─────────────────────────────────── */
export default function App() {
  return (
    <>
      <div className="bg-grid" />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <WhatIDo />
        <Journey />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
