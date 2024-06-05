import React, { useState } from 'react';
import './App.css';

function TableBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    requests: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, date, time, guests } = formData;

    if (name && email && phone && date && time && guests) {
      setMessage('Table booked successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        requests: ''
      });
    } else {
      setMessage('Please fill in all required fields.');
    }
  };

  return (
    <div className="container">
      <img src="images.png" alt="Little Lemon Logo" className="logo"/>
      <h1>Book a Table at Little Lemon</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="20"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="requests">Special Requests:</label>
          <textarea
            id="requests"
            name="requests"
            value={formData.requests}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Book Table</button>
      </form>
      {message && <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>{message}</div>}
    </div>
  );
}

export default TableBookingForm;
