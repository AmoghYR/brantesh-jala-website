import { useState, useEffect } from 'react';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'products', label: 'Products' },
  { key: 'sectors', label: 'Sectors' },
  { key: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="navbar-top">
        <div className="container">
          <div className="navbar-top-inner">
            <div className="navbar-top-contact">
              <a href="tel:+918970011661">
                <PhoneOutlined /> +91 89700 11661
              </a>
              <a href="mailto:info@branteshjala.com">
                <MailOutlined /> info@branteshjala.com
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <EnvironmentOutlined /> Davangere, Karnataka
              </span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)' }}>
              ⭐ Quality and Service is Our Motto
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="navbar-main" style={{ background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent' }}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <div className="navbar-logo" onClick={() => scrollTo('home')}>
              <img src="/logo.jpg" alt="Brantesh Jala Logo" />
              <div className="navbar-logo-text">
                <span className="brand-name" style={{ color: scrolled ? '#062e54' : 'white' }}>
                  Brantesh Jala
                </span>
                <span className="brand-sub">Solution Technology</span>
              </div>
            </div>

            {/* Nav Links — desktop */}
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li key={item.key}>
                  <span
                    className={`nav-link ${activeSection === item.key ? 'active' : ''}`}
                    style={{ color: scrolled ? undefined : (activeSection === item.key ? undefined : 'rgba(255,255,255,0.9)') }}
                    onClick={() => scrollTo(item.key)}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA — desktop */}
            <a href="tel:+918970011661" className="navbar-cta">
              <PhoneOutlined style={{ marginRight: 6 }} />
              Get Quote
            </a>

            {/* Hamburger — mobile */}
            <button
              className="navbar-hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar-mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar-mobile-nav">
          {navItems.map((item) => (
            <li key={item.key}>
              <span
                className={`navbar-mobile-link ${activeSection === item.key ? 'active' : ''}`}
                onClick={() => scrollTo(item.key)}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
        <div className="navbar-mobile-actions">
          <a href="tel:+918970011661" className="navbar-mobile-cta">
            <PhoneOutlined /> +91 89700 11661
          </a>
          <a href="mailto:info@branteshjala.com" className="navbar-mobile-email">
            <MailOutlined /> info@branteshjala.com
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
