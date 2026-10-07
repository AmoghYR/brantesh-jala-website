import { Tag } from 'antd';

const services = [
  {
    id: 'stp',
    icon: '🏭',
    title: 'Sewage Treatment Plant (STP)',
    badge: 'Industrial',
    img: '/stp.jpg',
    desc: 'Advanced biological sewage treatment solutions for municipalities, industries, and residential complexes. Our STP systems ensure treated water meets stringent environmental standards.',
    features: [
      'Biological & chemical treatment processes',
      'Compact modular design for easy installation',
      'Compliant with CPCB & state pollution norms',
      'Automated monitoring & control systems',
      'Treated water reuse for irrigation & flushing',
      'Low operational & maintenance costs',
    ],
  },
  {
    id: 'ro',
    icon: '💧',
    title: 'RO Plant',
    badge: 'Purification',
    img: '/ro.jpg',
    desc: 'High-efficiency Reverse Osmosis water purification plants for drinking water, process water, and industrial applications. Removes dissolved salts, heavy metals, and contaminants.',
    features: [
      'Multi-stage filtration with RO membranes',
      'TDS reduction up to 99%',
      'Suitable for borewell & municipal water',
      'Food-grade stainless steel construction',
      'High recovery rate (up to 75%)',
      'Digital monitoring & auto-flush system',
    ],
  },
  {
    id: 'zld',
    icon: '♻️',
    title: 'Zero Liquid Discharge (ZLD)',
    badge: 'Sustainable',
    img: '/zld.jpg',
    desc: 'Complete ZLD solutions that help industries achieve zero wastewater discharge. Recover and reuse 100% of water while converting all waste into dry solid cake.',
    features: [
      '100% water recovery & recycling',
      'Evaporation & crystallization technology',
      'Meets MoEF & CPCB ZLD mandate',
      'Reduces water procurement costs',
      'Converts effluent to dry solid waste',
      'Ideal for textile, pharma & food industries',
    ],
  },
  {
    id: 'softener',
    icon: '🔬',
    title: 'Water Softener (GKNWCS)',
    badge: 'Patented Tech',
    img: '/hero.jpg',
    desc: 'Our patented GKNWCS (Gaja Kesari Natural Water Conditioning Softener) uses CDLPT technology to naturally soften hard water — no electricity, no chemicals, no salt required.',
    features: [
      'No electricity or chemicals required',
      'Only 2% water wastage',
      'Removes existing scale & prevents new scale',
      'Extends life of appliances & plumbing',
      'Suitable for residential, agriculture & industry',
      'More soap lather, better water quality',
    ],
  },
  {
    id: 'sandfilter',
    icon: '🏔️',
    title: 'Sand Filter (GKSF)',
    badge: 'Filtration',
    img: '/stp.jpg',
    desc: 'Gaja Kesari Sand Filters (GKSF) efficiently remove suspended solids and turbidity from water. Available in manual and automatic variants with high flow rates.',
    features: [
      'Removes suspended solids & turbidity',
      'Manual & automatic valve options',
      'Flow rates: 3000–6000 Ltrs/Hr',
      'Max pressure: 3.5 Bar',
      'FRP vessel, top mount multiport valve',
      'Convenient upgrade path (LCSDF-3000/6000)',
    ],
  },
  {
    id: 'carbonfilter',
    icon: '🌑',
    title: 'Carbon Filter',
    badge: 'Purification',
    img: '/ro.jpg',
    desc: 'Activated carbon filters for removing bad odor, taste, color, organic contaminants, chlorine, cysts, lead, asbestos, and certain pesticides from water.',
    features: [
      'Removes bad odor and taste from water',
      'Eliminates color and organic contaminants',
      'Removes chlorine, lead & asbestos',
      'Filters cysts and certain pesticides',
      'Flow: 1000–3000 Ltrs/Hr capacity',
      'Manual & automatic control variants',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-tag">Our Services</div>
        <h2 className="section-title">Comprehensive Water Treatment Solutions</h2>
        <p className="section-subtitle">
          From natural water softeners to industrial-grade STP, RO, and ZLD plants — 
          we provide end-to-end water treatment solutions for every sector and scale.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.id} className="service-card" id={s.id}>
              <div className="service-img-wrap">
                <img src={s.img} alt={s.title} className="service-img" />
                <span className="service-badge">{s.badge}</span>
              </div>
              <div className="service-body">
                <div className="service-icon-row">
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="service-title">{s.title}</h3>
                </div>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
