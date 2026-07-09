import { Link } from 'react-router-dom';
import { SITE } from '../lib/site.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/kalco-logo.webp" alt="Kalco" className="footer-logo-img" width="110" height="30" />
          </div>
          <p className="footer-motto">The Products of Excellence</p>
          <p className="footer-tagline">{SITE.tagline}. A trusted name in the two-wheeler spare parts trade for over four decades.</p>
        </div>

        <nav aria-label="Footer navigation">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Product Catalogue</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <div>
          <h4>Contact</h4>
          <a href={`tel:+${SITE.phoneCEORaw}`}>{SITE.phoneCEO}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.mapsQuery} target="_blank" rel="noopener noreferrer">
            {SITE.address}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} {SITE.name} All rights reserved. Est. {SITE.established}.</p>
        </div>
      </div>
    </footer>
  );
}
