import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SITE, whatsappLink } from '../lib/site.js';
import { CATEGORIES } from '../data/products.js';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
};

const STATS = [
  { value: '40+', label: 'Years in Business' },
  { value: '4000+', label: 'Items in Range' },
  { value: '1982', label: 'Established' },
];

const VALUES = [
  {
    title: 'Best Quality Parts',
    text: 'We sell best quality two-wheeler spare parts, sourced and checked for durability and consistent fitment.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Four Decades of Trust',
    text: 'Serving mechanics, retailers and distributors from the heart of Karol Bagh since 1982.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Unmatched Range',
    text: 'From nut bolts to clutch assemblies — over 4000 items across every major two-wheeler part category.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <motion.div className="hero-text" initial="hidden" animate="visible" variants={fadeUp}>
            <span className="hero-badge">Est. {SITE.established} · Karol Bagh, New Delhi</span>
            <h1>
              Best Quality Two-Wheeler
              <span className="hero-highlight"> Spare Parts</span>
            </h1>
            <p className="hero-sub">
              {SITE.name} has supplied the two-wheeler trade for over four decades —
              4000+ items including nut bolts, side stands, gear levers, clutch parts and more.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                Browse Catalogue
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline hero-btn-outline">
                Enquire on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>

        <div className="container">
          <motion.div className="hero-stats" initial="hidden" animate="visible">
            {STATS.map((s, i) => (
              <motion.div key={s.label} className="stat-card" custom={i + 2} variants={fadeUp}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <span className="section-label">About Us</span>
            <h2 className="section-title">A Karol Bagh institution since 1982</h2>
            <p className="section-subtitle">
              For over 40 years, {SITE.name} has been a dependable source of quality two-wheeler
              spare parts for mechanics, retailers and wholesalers across India. What started as a
              small shop in Naiwala, Karol Bagh is today a supplier of more than 4000 items — built
              on one simple principle: sell only parts we would fit on our own vehicles.
            </p>
          </motion.div>

          <div className="values-grid">
            {VALUES.map((v, i) => (
              <motion.article
                key={v.title}
                className="value-card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
              >
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section section-alt">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <span className="section-label">Our Range</span>
            <h2 className="section-title">Every part category, one counter</h2>
          </motion.div>
          <div className="category-grid">
            {CATEGORIES.map((c, i) => (
              <motion.div
                key={c}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
              >
                <Link to={`/products?category=${encodeURIComponent(c)}`} className="category-card">
                  <span>{c}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            className="cta-banner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <div>
              <h2>Looking for a specific part?</h2>
              <p>Call us or send a WhatsApp message — chances are, we have it in stock.</p>
            </div>
            <div className="cta-actions">
              <a href={`tel:+${SITE.phoneCEORaw}`} className="btn btn-primary">Call {SITE.phoneCEO}</a>
              <Link to="/contact" className="btn btn-outline cta-outline">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
