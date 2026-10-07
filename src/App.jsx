import { useState, useEffect } from 'react';
import { ConfigProvider, FloatButton } from 'antd';
import { PhoneOutlined, VerticalAlignTopOutlined, WhatsAppOutlined } from '@ant-design/icons';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import SectorsSection from './components/SectorsSection';
import WhyUsSection from './components/WhyUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

const antdTheme = {
  token: {
    colorPrimary: '#0a4f8c',
    colorLink: '#0096c7',
    borderRadius: 10,
    fontFamily: "'Inter', sans-serif",
  },
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'products', 'sectors', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <ConfigProvider theme={antdTheme}>
      <div style={{ minHeight: '100vh', background: 'white' }}>
        <Navbar activeSection={activeSection} />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <SectorsSection />
        <WhyUsSection />
        <ContactSection />
        <Footer />

        {/* Floating Buttons */}
        <FloatButton.Group
          trigger="hover"
          type="primary"
          style={{ right: 24, bottom: 80 }}
          icon={<PhoneOutlined />}
        >
          <FloatButton
            icon={<WhatsAppOutlined />}
            tooltip="WhatsApp Us"
            style={{ background: '#25D366' }}
            href="https://wa.me/918970011661"
            target="_blank"
          />
          <FloatButton
            icon={<PhoneOutlined />}
            tooltip="Call Us: +91 89700 11661"
            href="tel:+918970011661"
          />
        </FloatButton.Group>

        <FloatButton.BackTop
          style={{ right: 24, bottom: 24 }}
          visibilityHeight={400}
        />
      </div>
    </ConfigProvider>
  );
}

export default App;
