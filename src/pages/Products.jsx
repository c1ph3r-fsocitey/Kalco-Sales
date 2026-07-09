import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from '../data/products.js';
import { whatsappLink } from '../lib/site.js';
import './Products.css';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const activeCategory = searchParams.get('category') || 'All';

  const setCategory = (cat) => {
    if (cat === 'All') setSearchParams({});
    else setSearchParams({ category: cat });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section className="section products-page">
      <div className="container">
        <span className="section-label">Product Catalogue</span>
        <h1 className="section-title">4000+ quality parts, one catalogue</h1>
        <p className="section-subtitle">
          Search our range of two-wheeler spare parts. Can't find something? We probably still
          stock it — just ask.
        </p>

        <div className="products-toolbar">
          <div className="search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              placeholder="Search parts, e.g. clutch plate, side stand..."
              aria-label="Search products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="category-filters" role="group" aria-label="Filter by category">
          {['All', ...CATEGORIES].map((c) => (
            <button
              key={c}
              className={`filter-chip${activeCategory === c ? ' active' : ''}`}
              onClick={() => setCategory(c)}
              aria-pressed={activeCategory === c}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="results-count" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
          {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
        </p>

        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div layout className="products-grid">
              {filtered.map((p) => (
                <motion.article
                  layout
                  key={p.id}
                  className="product-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  <span className="product-category">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <a
                    href={whatsappLink(`Hello Kalco Sales, I would like to enquire about: ${p.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-enquire"
                  >
                    Enquire
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key="empty"
            >
              <h3>No matches found</h3>
              <p>
                Our full range covers 4000+ items — far more than this list. Send us a message and
                we'll check availability for you.
              </p>
              <a
                href={whatsappLink(`Hello Kalco Sales, I'm looking for: ${query}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ask on WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
