import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const MAPS_URL = 'https://maps.app.goo.gl/xsxDduGqCcW9tGAo8';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Products', id: 'products' },
    { label: 'Sectors', id: 'sectors' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    { label: 'Sewage Treatment Plant (STP)', id: 'stp' },
    { label: 'RO Plant', id: 'ro' },
    { label: 'Zero Liquid Discharge (ZLD)', id: 'zld' },
    { label: 'Water Softener (GKNWCS)', id: 'softener' },
    { label: 'Sand Filter (GKSF)', id: 'sandfilter' },
    { label: 'Carbon Filter', id: 'carbonfilter' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img src="/logo.jpg" alt="Brantesh Jala Logo" />
            <div className="footer-brand-name">Brantesh Jala Solution Technology</div>
            <div className="footer-brand-tagline">Quality and Service is Our Motto</div>
            <p className="footer-desc">
              Pioneering natural water treatment solutions since 2017.
              Our patented CDLPT technology delivers chemical-free,
              eco-friendly water softening for homes, agriculture, and industries.
            </p>
            <div className="footer-social">
              <div className="footer-social-btn" title="Facebook">📘</div>
              <div className="footer-social-btn" title="WhatsApp">💬</div>
              <div className="footer-social-btn" title="YouTube">▶️</div>
              <div className="footer-social-btn" title="LinkedIn">💼</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-title">Our Services</div>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(s.id); }}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact Us</div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><EnvironmentOutlined /></span>
              <span>
                C Block, Agriculture Produce<br />
                Marketing Community,<br />
                Davangere, Karnataka – 577 003
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><PhoneOutlined /></span>
              <span>Customer Care: +91 89700 11661</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><MailOutlined /></span>
              <span>info@branteshjala.com</span>
            </div>

            {/* Get Directions Button */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-directions-btn"
              id="footer-directions-btn"
            >
              <span className="footer-directions-icon">📍</span>
              Get Directions
              <span className="footer-directions-arrow">↗</span>
            </a>

            <div className="footer-est-badge">
              <div className="footer-est-label">Est.</div>
              <div className="footer-est-date">August 21, 2017</div>
              <div className="footer-est-sub">Registered in Davangere, Karnataka</div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            © {new Date().getFullYear()} Brantesh Jala Solution Technology. All rights reserved. · Terms &amp; Conditions Apply (Refer to Manual)
          </div>
          <ul className="footer-bottom-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
