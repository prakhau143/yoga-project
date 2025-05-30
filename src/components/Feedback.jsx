/* eslint-disable react/prop-types */

/* import { useState } from 'react';
 */
// eslint-disable-next-line react/prop-types

import React from "react";
import { FaStar } from "react-icons/fa";

function Feedback() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      feedback: "The yoga classes have transformed my life! The instructors are incredibly knowledgeable and the atmosphere is so peaceful. I've seen remarkable improvements in my flexibility and mental well-being.",
      specialty: "Yoga Classes"
    },
    {
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      feedback: "The meditation sessions are exceptional. The guided practices have helped me manage stress and anxiety effectively. The quality of instruction and the serene environment make it a perfect place for mindfulness.",
      specialty: "Meditation Sessions"
    },
    {
      name: "Emma Thompson",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      feedback: "The wellness retreat was a life-changing experience. The combination of yoga, meditation, and nature walks created a perfect balance. The attention to detail and personalized care were outstanding.",
      specialty: "Wellness Retreat"
    }
  ];

  return (
    <div className="feedback-container">
      <div className="site-container">
        <h2 className="feedback-heading">What Our Clients Say</h2>
        <div className="article-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="article-card">
              <div className="article-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="article-content">
                <h3>{testimonial.name}</h3>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="specialty">{testimonial.specialty}</p>
                <p className="feedback-text">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
