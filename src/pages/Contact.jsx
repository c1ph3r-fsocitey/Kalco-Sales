import { motion } from 'framer-motion';
import { SITE, whatsappLink } from '../lib/site.js';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
};

const PhoneIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export default function Contact() {
  return (
    <section className="section contact-page">
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="section-label">Contact Us</span>
          <h1 className="section-title">Talk to us directly</h1>
          <p className="section-subtitle">
            Call, WhatsApp or visit the shop — we respond fastest on the phone during business hours.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div className="contact-card" custom={1} initial="hidden" animate="visible" variants={fadeUp}>
            <span className="contact-icon">{PhoneIcon}</span>
            <h3>{SITE.ceo}</h3>
            <p className="contact-role">Chief Executive Officer</p>
            <a href={`tel:+${SITE.phoneCEORaw}`} className="contact-link">{SITE.phoneCEO}</a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary contact-btn"
            >
              WhatsApp
            </a>
          </motion.div>

          <motion.div className="contact-card" custom={2} initial="hidden" animate="visible" variants={fadeUp}>
            <span className="contact-icon">{PhoneIcon}</span>
            <h3>{SITE.cfo}</h3>
            <p className="contact-role">Chief Financial Officer</p>
            <a href={`tel:+${SITE.phoneCFORaw}`} className="contact-link">{SITE.phoneCFO}</a>
            <a href={`tel:+${SITE.phoneCFORaw}`} className="btn btn-outline contact-btn">Call</a>
          </motion.div>

          <motion.div className="contact-card" custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            <span className="contact-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <h3>Email</h3>
            <p className="contact-role">For catalogues &amp; written enquiries</p>
            <a href={`mailto:${SITE.email}`} className="contact-link">{SITE.email}</a>
            <a href={`mailto:${SITE.email}`} className="btn btn-outline contact-btn">Send Email</a>
          </motion.div>
        </div>

        <motion.div
          className="visit-card"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="visit-info">
            <h2>Visit the Shop</h2>
            <p className="visit-address">{SITE.address}</p>
            <p className="visit-note">
              Located in the heart of Karol Bagh's auto parts market — landmark for two-wheeler
              spares since {SITE.established}.
            </p>
            <a href={SITE.mapsQuery} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open in Google Maps
            </a>
          </div>
          <div className="visit-map">
            <iframe
              title="Kalco Sales location — Naiwala, Karol Bagh, New Delhi"
              src="https://www.google.com/maps?q=Naiwala,+Karol+Bagh,+New+Delhi+110005&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
