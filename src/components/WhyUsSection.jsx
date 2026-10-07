const stats = [
  { num: '9+', label: 'Years Experience', desc: 'Serving since August 2017 with proven water treatment expertise' },
  { num: '500+', label: 'Installations', desc: 'Successfully completed projects across Karnataka and beyond' },
  { num: '0%', label: 'Chemical Usage', desc: 'Our GKNWCS system uses zero chemicals or salt' },
  { num: '2%', label: 'Water Wastage', desc: 'Industry-leading efficiency with minimal water wastage' },
];

const reasons = [
  { icon: '🔬', title: 'Patented Technology', desc: 'Our CDLPT (Calcium Debonding Low Power Technologies) is an innovative, proprietary system that naturally restructures water.' },
  { icon: '⚡', title: 'No Electricity Needed', desc: 'Our water softeners require zero electricity to operate, saving you money and being eco-friendly.' },
  { icon: '🌿', title: 'Eco-Friendly', desc: 'Zero chemical discharge, no salt bags, no backwash — completely safe for septic tanks, plants, and the environment.' },
  { icon: '🏆', title: 'Quality Assured', desc: '"Quality and Service is Our Motto" — every product is rigorously tested before installation.' },
  { icon: '🔧', title: 'Expert Installation', desc: 'Our trained technicians ensure proper installation and provide complete after-sales support.' },
  { icon: '💰', title: 'Cost Effective', desc: 'Reduce maintenance costs, extend equipment life, and lower operational expenses significantly.' },
  { icon: '🌍', title: 'Multi-Sector Expertise', desc: 'Proven solutions across residential, agriculture, industrial, dairy, poultry, aqua, and commercial sectors.' },
  { icon: '📞', title: '24/7 Support', desc: 'Dedicated customer care available to address any concerns or service requirements promptly.' },
];

const WhyUsSection = () => {
  return (
    <section className="whyus-section">
      <div className="container">
        {/* Stats Banner */}
        <div className="stats-banner">
          {stats.map((s) => (
            <div key={s.num} className="stats-banner-item">
              <div className="stats-banner-num">{s.num}</div>
              <div className="stats-banner-label">{s.label}</div>
              <div className="stats-banner-desc">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Why Us */}
        <div className="section-tag">Why Choose Us</div>
        <h2 className="section-title">The Brantesh Jala Advantage</h2>
        <p className="section-subtitle">
          We combine cutting-edge research with practical expertise to deliver water treatment
          solutions that are reliable, sustainable, and cost-effective.
        </p>

        <div className="whyus-grid">
          {reasons.map((r) => (
            <div key={r.title} className="whyus-card">
              <div className="whyus-icon">{r.icon}</div>
              <div className="whyus-title">{r.title}</div>
              <div className="whyus-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
