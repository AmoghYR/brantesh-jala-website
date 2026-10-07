import { Form, Input, Select, Button, message } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined, SendOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { TextArea } = Input;
const { Option } = Select;

const ContactSection = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Thank you! We will contact you shortly.');
      form.resetFields();
    }, 1500);
  };

  const contactItems = [
    {
      icon: <PhoneOutlined />,
      label: 'Customer Care',
      value: '+91 89700 11661',
    },
    {
      icon: <MailOutlined />,
      label: 'Email Address',
      value: 'info@branteshjala.com',
    },
    {
      icon: <EnvironmentOutlined />,
      label: 'Office Address',
      value: 'K.B. Extension, Thrishul Talkies Road, Opp Adharsha Events, Davangere – 577 002, Karnataka, India',
    },
    {
      icon: <ClockCircleOutlined />,
      label: 'Business Hours',
      value: 'Monday – Saturday: 9:00 AM – 6:30 PM',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-tag">Contact Us</div>
        <h2 className="section-title">Get In Touch With Us</h2>
        <p className="section-subtitle">
          Ready to solve your water problems? Contact us today for a free consultation 
          and site assessment. We'll recommend the best solution for your needs.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div>
            <h3 className="contact-info-title">We're Here to Help</h3>
            <p className="contact-info-sub">
              Our experts are available to discuss your water treatment requirements 
              and provide customized solutions for any scale of installation.
            </p>

            {contactItems.map((item) => (
              <div key={item.label} className="contact-item">
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-value">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div style={{
              marginTop: 24, borderRadius: 16, overflow: 'hidden',
              height: 180, background: 'linear-gradient(135deg, #e0f4ff, #cce8ff)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid #b8dcf8', flexDirection: 'column', gap: 8,
            }}>
              <span style={{ fontSize: '2.5rem' }}>📍</span>
              <p style={{ color: '#0a4f8c', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center', margin: 0 }}>
                Davangere, Karnataka<br />
                <span style={{ fontWeight: 400, fontSize: '0.8rem', color: '#475569' }}>K.B. Extension, Thrishul Talkies Road</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Request a Free Quote</h3>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="large"
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Form.Item
                  name="name"
                  label="Full Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input id="contact-name" placeholder="Your full name" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[{ required: true, message: 'Please enter your phone' }]}
                >
                  <Input id="contact-phone" placeholder="+91 XXXXX XXXXX" />
                </Form.Item>
              </div>

              <Form.Item
                name="email"
                label="Email Address"
                rules={[{ type: 'email', message: 'Enter a valid email' }]}
              >
                <Input id="contact-email" placeholder="your@email.com" />
              </Form.Item>

              <Form.Item
                name="service"
                label="Service Required"
                rules={[{ required: true, message: 'Please select a service' }]}
              >
                <Select id="contact-service" placeholder="Select the service you need">
                  <Option value="stp">Sewage Treatment Plant (STP)</Option>
                  <Option value="ro">RO Plant</Option>
                  <Option value="zld">Zero Liquid Discharge (ZLD)</Option>
                  <Option value="softener">Water Softener (GKNWCS)</Option>
                  <Option value="sandfilter">Sand Filter</Option>
                  <Option value="carbonfilter">Carbon Filter</Option>
                  <Option value="other">Other / Multiple Services</Option>
                </Select>
              </Form.Item>

              <Form.Item name="sector" label="Your Sector">
                <Select id="contact-sector" placeholder="Select your industry">
                  <Option value="residential">Residential</Option>
                  <Option value="agriculture">Agriculture</Option>
                  <Option value="commercial">Commercial</Option>
                  <Option value="industrial">Industrial</Option>
                  <Option value="dairy">Dairy / Poultry</Option>
                  <Option value="aqua">Aquaculture</Option>
                  <Option value="construction">Construction</Option>
                </Select>
              </Form.Item>

              <Form.Item name="message" label="Message / Requirements">
                <TextArea
                  id="contact-message"
                  rows={4}
                  placeholder="Describe your water problem or requirements..."
                />
              </Form.Item>

              <Form.Item>
                <Button
                  id="contact-submit"
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<SendOutlined />}
                  style={{
                    width: '100%',
                    height: 52,
                    fontSize: '1rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #0096c7, #0a4f8c)',
                    border: 'none',
                    borderRadius: 12,
                    boxShadow: '0 6px 24px rgba(0,150,199,0.35)',
                  }}
                >
                  Send Enquiry
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
