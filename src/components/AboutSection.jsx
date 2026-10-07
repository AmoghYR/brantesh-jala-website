const AboutSection = () => {
  const highlights = [
    { icon: '🔬', title: 'CDLPT Technology', desc: 'Patented natural water softening without chemicals' },
    { icon: '💡', title: 'No Electricity', desc: 'Energy-free water conditioning systems' },
    { icon: '🌿', title: 'Eco-Friendly', desc: 'Zero chemical discharge, safe for environment' },
    { icon: '📅', title: 'Since 2017', desc: 'Founded Aug 21, 2017 by Mr. Chandrakanta G.G.' },
  ];

  const techPoints = [
    { icon: '⚡', title: 'CDLPT Process', desc: 'Creates heat in flowing water, converts to pulse electricity, breaks calcium & magnesium molecules into nano-particles.' },
    { icon: '💧', title: 'Restructured Water', desc: 'Water is physically restructured to feel like natural river water — soft, clean, and beneficial.' },
    { icon: '🚫', title: 'No Chemicals or Salt', desc: 'Unlike traditional softeners, GKNWCS uses no salt bags, no backwash, and produces zero chemical discharge.' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div style={{ animation: 'fadeInLeft 0.8s ease both' }}>
            <div className="about-img-wrap">
              <img src="/hero.jpg" alt="Water treatment facility" />
              <div className="about-img-badge">
                🏆 Quality & Service is Our Motto
              </div>
            </div>

            {/* Tech Cards */}
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {techPoints.map((t) => (
                <div key={t.title} style={{
                  display: 'flex', gap: 14, padding: '16px 20px',
                  background: 'white', borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  borderLeft: '3px solid #00b4d8',
                }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{t.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1e293b', marginBottom: 4 }}>{t.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="section-tag">About Us</div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 16 }}>
              Revolutionizing Water Treatment Since 2017
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 28px' }}>
              Brantesh Jala Solution Technology was founded by Mr. Chandrakanta G.G., 
              a water treatment expert who innovated the groundbreaking{' '}
              <strong>CDLPT (Calcium Debonding Low Power Technologies)</strong> — 
              a natural, chemical-free water softening system.
            </p>

            <div className="about-highlights">
              {highlights.map((h) => (
                <div key={h.title} className="about-highlight">
                  <div className="about-highlight-icon">{h.icon}</div>
                  <div className="about-highlight-text">
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-founder">
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem',
                }}>
                  👨‍💼
                </div>
                <div>
                  <div className="about-founder-name">Mr. Chandrakanta G.G.</div>
                  <div className="about-founder-title">Founder & CEO, Brantesh Jala Solution Technologies</div>
                </div>
              </div>
              <p className="about-founder-quote">
                "After years of research in water softeners, magnetic softeners, and electromagnetic 
                technologies since 2010, I developed CDLPT — a patented innovation that brings 
                nature-like water quality to every home and industry without any chemicals."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
