import { Button } from 'antd';
import { PhoneOutlined, ArrowRightOutlined } from '@ant-design/icons';

const HeroSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const services = [
    { icon: '🏭', title: 'STP Plant', desc: 'Sewage Treatment Plants for industrial & municipal use' },
    { icon: '💧', title: 'RO Plant', desc: 'Reverse Osmosis systems for pure, safe drinking water' },
    { icon: '♻️', title: 'ZLD System', desc: 'Zero Liquid Discharge for zero water waste' },
    { icon: '🔬', title: 'CDLPT Tech', desc: 'Patented natural water softening technology' },
  ];

  return (
    <section id="home" className="hero-section">
      {/* Background */}
      <div className="hero-bg" />
      <div className="hero-overlay" />

      {/* Particles */}
      <div className="hero-particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              width: `${40 + i * 30}px`,
              height: `${40 + i * 30}px`,
              top: `${10 + i * 10}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="white" opacity="0.3" />
          <path d="M0,80 C320,20 640,100 960,50 C1120,20 1280,90 1440,60 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-inner">
            {/* Left */}
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Est. 2017 · Davangere, Karnataka
              </div>

              <h1 className="hero-title">
                Single Solution for<br />
                <span>Hard Water Problems</span>
              </h1>

              <p className="hero-desc">
                Brantesh Jala Solution Technology delivers cutting-edge water treatment systems —
                from Water Softeners and RO Plants to STP and ZLD solutions — powered by our
                patented <strong style={{ color: '#90e0ef' }}>CDLPT Technology</strong>.
              </p>

              <div className="hero-actions">
                <button className="btn-primary" onClick={() => scrollTo('contact')}>
                  <PhoneOutlined /> Get Free Consultation
                </button>
                <button className="btn-secondary" onClick={() => scrollTo('services')}>
                  Our Services <ArrowRightOutlined />
                </button>
              </div>

              {/* Stats */}
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-number">9+</span>
                  <span className="hero-stat-label">Years of Excellence</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">500+</span>
                  <span className="hero-stat-label">Installations Done</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">8</span>
                  <span className="hero-stat-label">Sectors Served</span>
                </div>
              </div>
            </div>

            {/* Right: Service Cards */}
            <div className="hero-visual">
              <div className="hero-card-grid">
                {services.map((s) => (
                  <div key={s.title} className="hero-service-card">
                    <div className="hero-service-icon">{s.icon}</div>
                    <div className="hero-service-title">{s.title}</div>
                    <div className="hero-service-desc">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
