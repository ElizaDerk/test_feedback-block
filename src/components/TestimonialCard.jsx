import React from 'react';
import './TestimonialsSlider.css';

export default function TestimonialCard({ company, text, name, position, avatar }) {
  return (
    <div className="card">
      <img src={company} alt="Company Logo" className="company-logo" />
      <div className="testimonial-text">{text}</div>
      <div className="user-info">
        <img src={avatar} alt={name} className="user-avatar" />
        <div className="user-details">
          <strong className="user-name">{name}</strong>
          <span className="user-position">{position}</span>
        </div>
      </div>
    </div>
  );
}
