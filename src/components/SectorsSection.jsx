const sectors = [
  {
    icon: '🏠',
    name: 'Residential',
    desc: 'Complete home water solutions — soft water for bathing, cleaning, and drinking.',
    benefits: ['Scale-free pipes', 'Better skin & hair', 'Lower appliance maintenance'],
  },
  {
    icon: '🌾',
    name: 'Agriculture',
    desc: 'Boost crop yield and protect irrigation systems from lime scale buildup.',
    benefits: ['Higher yield', 'No drip blockage', 'Better organic produce'],
  },
  {
    icon: '🏢',
    name: 'Commercial',
    desc: 'Hotels, malls, and office complexes with efficient water treatment systems.',
    benefits: ['Guest satisfaction', 'Lower costs', 'Clean premises'],
  },
  {
    icon: '🐟',
    name: 'Aqua / Aquaculture',
    desc: 'Clean, conditioned water for fish farming and aquaculture operations.',
    benefits: ['Fish health', 'Clean ponds', 'Better immunity'],
  },
  {
    icon: '🏗️',
    name: 'Construction',
    desc: 'Treated water for construction processes, curing, and site operations.',
    benefits: ['Stronger concrete', 'No pipe scaling', 'Efficient operations'],
  },
  {
    icon: '🐔',
    name: 'Poultry',
    desc: 'Conditioned water that reduces bird mortality and improves overall health.',
    benefits: ['Reduced mortality', 'Fewer weak birds', 'Better batch days'],
  },
  {
    icon: '🏭',
    name: 'Industrial',
    desc: 'Scale-free industrial water solutions for boilers, cooling towers, and more.',
    benefits: ['Extended equipment life', 'Scale-free plumbing', 'Cost savings'],
  },
  {
    icon: '🐄',
    name: 'Dairy',
    desc: 'Conditioned water for dairy farms, increasing milk production and cow health.',
    benefits: ['Higher milk content', 'Active cows', 'Reduced smell/odor'],
  },
];

const SectorsSection = () => {
  return (
    <section id="sectors" className="sectors-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
            Sectors We Serve
          </span>
        </div>
        <h2 className="section-title" style={{ color: 'white', background: 'none', WebkitTextFillColor: 'white' }}>
          Solutions Across All Industries
        </h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Our water treatment products are designed for diverse applications — from homes 
          to heavy industries, agriculture to aquaculture.
        </p>

        <div className="sectors-grid">
          {sectors.map((s) => (
            <div key={s.name} className="sector-card">
              <span className="sector-icon">{s.icon}</span>
              <div className="sector-name">{s.name}</div>
              <div className="sector-desc">{s.desc}</div>
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {s.benefits.map((b) => (
                  <div key={b} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontSize: '0.76rem', color: 'rgba(255,255,255,0.8)',
                  }}>
                    <span style={{ color: '#90e0ef', fontWeight: 700 }}>✓</span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
