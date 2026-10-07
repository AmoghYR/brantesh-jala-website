import { useState } from 'react';
import { Table, Tabs, Tag } from 'antd';

const sandFilterManual = [
  { key: 1, sl: 1, particular: 'FRP Vessel Size', lcsdf3000: '13" × 54"', lcsdf6000: '16" × 65"' },
  { key: 2, sl: 2, particular: 'Multiple Value Type', lcsdf3000: 'Manual', lcsdf6000: 'Manual' },
  { key: 3, sl: 3, particular: 'Multiport Value Size & Mounting', lcsdf3000: '25 NB Top Mount', lcsdf6000: '40 NB Top Mount' },
  { key: 4, sl: 4, particular: 'Silex Media (KG)', lcsdf3000: '20', lcsdf6000: '30' },
  { key: 5, sl: 5, particular: 'Coarse Sand Media (KG)', lcsdf3000: '30', lcsdf6000: '70' },
  { key: 6, sl: 6, particular: 'Glass Media (KG)', lcsdf3000: '50', lcsdf6000: '50' },
  { key: 7, sl: 7, particular: 'Activation Media', lcsdf3000: 'Only Backwash', lcsdf6000: 'Only Backwash' },
  { key: 8, sl: 8, particular: 'Maximum Flow (Ltrs/Hr)', lcsdf3000: '3000', lcsdf6000: '6000' },
  { key: 9, sl: 9, particular: 'Maximum Operating Pressure', lcsdf3000: '3.5 Bar', lcsdf6000: '3.5 Bar' },
];

const sandFilterAuto = sandFilterManual.map(r => ({
  ...r,
  lcsdf3000: r.particular.includes('Value Type') ? 'Automatic' : r.lcsdf3000,
  lcsdf6000: r.particular.includes('Value Type') ? 'Automatic' : r.lcsdf6000,
}));

const carbonFilterManual = [
  { key: 1, sl: 1, particular: 'FRP Vessel Size', lcsdf3000: '10" × 54"', lcsdf6000: '13" × 54"' },
  { key: 2, sl: 2, particular: 'Multiple Value Type', lcsdf3000: 'Manual', lcsdf6000: 'Manual' },
  { key: 3, sl: 3, particular: 'Multiport Value Size & Mounting', lcsdf3000: '25 NB Top Mount', lcsdf6000: '25 NB Top Mount' },
  { key: 4, sl: 4, particular: 'Silex Media (KG)', lcsdf3000: '25', lcsdf6000: '50' },
  { key: 5, sl: 5, particular: 'Coarse Media 1100 IV (KG)', lcsdf3000: '25', lcsdf6000: '50' },
  { key: 6, sl: 6, particular: 'Activation Media', lcsdf3000: 'Only Backwash', lcsdf6000: 'Only Backwash' },
  { key: 7, sl: 7, particular: 'Maximum Flow (Ltrs/Hr)', lcsdf3000: '1000', lcsdf6000: '3000' },
  { key: 8, sl: 8, particular: 'Maximum Operating Pressure', lcsdf3000: '3.5 Bar', lcsdf6000: '3.5 Bar' },
];

const carbonFilterAuto = carbonFilterManual.map(r => ({
  ...r,
  lcsdf3000: r.particular.includes('Value Type') ? 'Automatic' : r.lcsdf3000,
  lcsdf6000: r.particular.includes('Value Type') ? 'Automatic' : r.lcsdf6000,
}));

const tableColumns = [
  { title: 'Sl No.', dataIndex: 'sl', key: 'sl', width: 70, align: 'center' },
  { title: 'Particulars', dataIndex: 'particular', key: 'particular' },
  {
    title: <Tag color="blue">LCSDF - 3000</Tag>,
    dataIndex: 'lcsdf3000', key: 'lcsdf3000', align: 'center',
  },
  {
    title: <Tag color="geekblue">LCSDF - 6000</Tag>,
    dataIndex: 'lcsdf6000', key: 'lcsdf6000', align: 'center',
  },
];

const ProductsSection = () => {
  const products = [
    {
      icon: '💧',
      name: 'Water Softener (Residential)',
      tagline: 'GKNWCS — Chemical-Free Softening',
      benefits: [
        'Removes existing scaling in pipes',
        'Prevents further scaling',
        'Crystal clear, clean water',
        'More soap lather while washing',
        'Water heater lasts longer',
        'No electricity required',
        'No chemicals or salt needed',
        'Only 2% water wastage',
      ],
    },
    {
      icon: '🌾',
      name: 'Agriculture Softener',
      tagline: 'GKNWCS — Boost Crop Production',
      benefits: [
        'Protects soil quality and pH',
        'Increases crop production & quality',
        'Prevents drip/sprinkler lime scale',
        'Uninterrupted irrigation water flow',
        'Minimizes pesticides usage',
        'Better organic plant growth',
        'Reduces leaf tip burning',
        'Decreases vegetation period',
      ],
    },
    {
      icon: '🏊',
      name: 'Swimming Pool Softener',
      tagline: 'GKNWCS — Cleaner Pools',
      benefits: [
        'Water feels lighter and cleaner',
        'Reduces scaling & algae formation',
        'No skin or eye irritation',
        'Less chlorine required',
        'Reduces chlorine odor',
        'Less time to clean pools',
        'Reduction in maintenance cost',
        'Very refreshing experience',
      ],
    },
    {
      icon: '🏭',
      name: 'Industrial Water Softener',
      tagline: 'GKNWCS — Scale-Free Operations',
      benefits: [
        'Removes & prevents pipe scaling',
        'Extended machine/equipment life',
        'Scale-free complete plumbing',
        'Water mixes with coolant well',
        'Reduced water purifier maintenance',
        'More soap while washing',
        'Washrooms clean and tidy',
        'Lower operational costs',
      ],
    },
  ];

  const tabItems = [
    {
      key: 'sand-manual',
      label: '🏔️ Sand Filter — Manual',
      children: (
        <Table
          dataSource={sandFilterManual}
          columns={tableColumns}
          pagination={false}
          size="middle"
          bordered
          style={{ borderRadius: 12, overflow: 'hidden' }}
        />
      ),
    },
    {
      key: 'sand-auto',
      label: '🏔️ Sand Filter — Auto',
      children: (
        <Table
          dataSource={sandFilterAuto}
          columns={tableColumns}
          pagination={false}
          size="middle"
          bordered
          style={{ borderRadius: 12, overflow: 'hidden' }}
        />
      ),
    },
    {
      key: 'carbon-manual',
      label: '🌑 Carbon Filter — Manual',
      children: (
        <Table
          dataSource={carbonFilterManual}
          columns={tableColumns}
          pagination={false}
          size="middle"
          bordered
          style={{ borderRadius: 12, overflow: 'hidden' }}
        />
      ),
    },
    {
      key: 'carbon-auto',
      label: '🌑 Carbon Filter — Auto',
      children: (
        <Table
          dataSource={carbonFilterAuto}
          columns={tableColumns}
          pagination={false}
          size="middle"
          bordered
          style={{ borderRadius: 12, overflow: 'hidden' }}
        />
      ),
    },
  ];

  return (
    <>
      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-tag">Our Products</div>
          <h2 className="section-title">Water Softener Solutions for Every Need</h2>
          <p className="section-subtitle">
            Our GKNWCS (Gaja Kesari Natural Water Conditioning Softener) product line 
            uses patented CDLPT technology to serve residential, agricultural, industrial, 
            and commercial applications.
          </p>

          <div className="products-grid">
            {products.map((p) => (
              <div key={p.name} className="product-card">
                <div className="product-header">
                  <div className="product-icon">{p.icon}</div>
                  <div>
                    <div className="product-name">{p.name}</div>
                    <div className="product-tagline">{p.tagline}</div>
                  </div>
                </div>
                <div className="product-benefits">
                  {p.benefits.map((b) => (
                    <div key={b} className="product-benefit">
                      <div className="product-benefit-dot" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="specs-section">
        <div className="container">
          <div className="section-tag">Specifications</div>
          <h2 className="section-title">Filter Technical Specifications</h2>
          <p className="section-subtitle">
            Detailed technical specifications for our Sand Filter and Carbon Filter systems 
            in both manual and automatic configurations.
          </p>
          <div className="specs-tabs">
            <Tabs
              items={tabItems}
              type="card"
              size="large"
              style={{ '--ant-color-primary': '#0a4f8c' }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
