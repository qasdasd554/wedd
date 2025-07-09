import React, { useState } from 'react';
import { weddingData } from './mockData';

const WeddingWebsite = () => {
  const [rsvpData, setRsvpData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guestCount: 1,
    dietaryRestrictions: '',
    message: ''
  });
  
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    // In real implementation, this would send data to backend
    console.log('RSVP submitted:', rsvpData);
    alert('Dziękujemy za potwierdzenie obecności!');
    setRsvpData({
      name: '',
      email: '',
      phone: '',
      attendance: '',
      guestCount: 1,
      dietaryRestrictions: '',
      message: ''
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString.split('.').reverse().join('-'));
    return date.toLocaleDateString('pl-PL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // SVG Icons as components
  const HeartIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const CameraIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const GiftIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  );

  const MessageIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HeartIcon />
              <h1 className="text-2xl font-bold text-gray-800">
                {weddingData.couple.bride} & {weddingData.couple.groom}
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-600 transition-colors">
                Strona Główna
              </button>
              <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-rose-600 transition-colors">
                Nasza Historia
              </button>
              <button onClick={() => scrollToSection('details')} className="text-gray-700 hover:text-rose-600 transition-colors">
                Szczegóły
              </button>
              <button onClick={() => scrollToSection('schedule')} className="text-gray-700 hover:text-rose-600 transition-colors">
                Harmonogram
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-600 transition-colors">
                Galeria
              </button>
              <button onClick={() => scrollToSection('rsvp')} className="text-gray-700 hover:text-rose-600 transition-colors">
                RSVP
              </button>
              <button onClick={() => scrollToSection('gifts')} className="text-gray-700 hover:text-rose-600 transition-colors">
                Prezenty
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-rose-600 transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-rose-600 transition-colors">
                Kontakt
              </button>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <div className={`w-full h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                <div className={`w-full h-0.5 bg-gray-600 my-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-rose-600 transition-colors">
                  Strona Główna
                </button>
                <button onClick={() => scrollToSection('story')} className="text-left text-gray-700 hover:text-rose-600 transition-colors">
                  Nasza Historia
                </button>
                <button onClick={() => scrollToSection('details')} className="text-left text-gray-700 hover:text-rose-600 transition-colors">
                  Szczegóły
                </button>
                <button onClick={() => scrollToSection('schedule')} className="text-left text-gray-700 hover:text-rose-600 transition-colors">
                  Harmonogram
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-rose-600 transition-colors">
                  Galeria
                </button>
                <button onClick={() => scrollToSection('rsvp')} className="text-left text-gray-700 hover:text-rose-600 transition-colors">
                  RSVP
                </button>
                <button onClick={() => scrollToSection('gifts')} className="text-left text-gray-700 hover:text-rose-600 transition-colors">
                  Prezenty
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-rose-600 transition-colors">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-rose-600 transition-colors">
                  Kontakt
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1606490194859-07c18c9f0968')`
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide">
              {weddingData.couple.bride} & {weddingData.couple.groom}
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              {formatDate(weddingData.couple.weddingDate)}
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <CalendarIcon />
              <span className="text-xl">{weddingData.couple.weddingDate}</span>
              <ClockIcon />
              <span className="text-xl">{weddingData.couple.weddingTime}</span>
            </div>
            <button 
              onClick={() => scrollToSection('rsvp')}
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Potwierdź Obecność
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
              {weddingData.story.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {weddingData.story.content}
                </p>
                <div className="flex justify-center">
                  <HeartIcon />
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1629943163055-d8c9c9fd8a88"
                  alt="Romantyczne zdjęcie pary"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center">
                  <HeartIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Szczegóły Ślubu
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Ceremony Card */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center space-x-2">
                  <HeartIcon />
                  <span>Ceremonia Ślubna</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <ClockIcon />
                    <span className="text-gray-700">{weddingData.couple.venue.ceremony.time}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPinIcon />
                    <div>
                      <p className="font-semibold text-gray-800">{weddingData.couple.venue.ceremony.name}</p>
                      <p className="text-gray-600">{weddingData.couple.venue.ceremony.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reception Card */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center space-x-2">
                  <UsersIcon />
                  <span>Przyjęcie Weselne</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <ClockIcon />
                    <span className="text-gray-700">{weddingData.couple.venue.reception.time}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPinIcon />
                    <div>
                      <p className="font-semibold text-gray-800">{weddingData.couple.venue.reception.name}</p>
                      <p className="text-gray-600">{weddingData.couple.venue.reception.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Harmonogram Dnia
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {weddingData.schedule.map((item, index) => (
                <div key={index} className="flex items-center space-x-6 group">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-rose-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-white font-bold text-lg">{item.time}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.event}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <MapPinIcon />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Galeria Zdjęć
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {weddingData.gallery.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <CameraIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Potwierdzenie Obecności
            </h2>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden border-0">
              <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Proszę potwierdź swoją obecność</h3>
              </div>
              <div className="p-8">
                <form onSubmit={handleRSVPSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Imię i Nazwisko *
                      </label>
                      <input
                        type="text"
                        value={rsvpData.name}
                        onChange={(e) => setRsvpData({...rsvpData, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={rsvpData.email}
                        onChange={(e) => setRsvpData({...rsvpData, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numer telefonu
                    </label>
                    <input
                      type="tel"
                      value={rsvpData.phone}
                      onChange={(e) => setRsvpData({...rsvpData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Czy będziesz obecny/na? *
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="attendance"
                          value="yes"
                          checked={rsvpData.attendance === 'yes'}
                          onChange={(e) => setRsvpData({...rsvpData, attendance: e.target.value})}
                          className="mr-2"
                        />
                        Tak, będę
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="attendance"
                          value="no"
                          checked={rsvpData.attendance === 'no'}
                          onChange={(e) => setRsvpData({...rsvpData, attendance: e.target.value})}
                          className="mr-2"
                        />
                        Nie, nie będę
                      </label>
                    </div>
                  </div>
                  
                  {rsvpData.attendance === 'yes' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Liczba osób
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="4"
                          value={rsvpData.guestCount}
                          onChange={(e) => setRsvpData({...rsvpData, guestCount: parseInt(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ograniczenia dietetyczne
                        </label>
                        <textarea
                          value={rsvpData.dietaryRestrictions}
                          onChange={(e) => setRsvpData({...rsvpData, dietaryRestrictions: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                          rows="3"
                          placeholder="Proszę opisz ewentualne ograniczenia dietetyczne..."
                        />
                      </div>
                    </>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wiadomość dla pary młodej
                    </label>
                    <textarea
                      value={rsvpData.message}
                      onChange={(e) => setRsvpData({...rsvpData, message: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      rows="3"
                      placeholder="Twoje życzenia i komentarze..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Wyślij Potwierdzenie
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Lista Prezentów
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {weddingData.gifts.map((gift) => (
              <div key={gift.id} className="bg-white shadow-xl rounded-lg overflow-hidden border-0 hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-6">
                  <h3 className="text-xl font-bold flex items-center space-x-2">
                    <GiftIcon />
                    <span>{gift.name}</span>
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{gift.description}</p>
                  {gift.registryLink && (
                    <button 
                      onClick={() => window.open(gift.registryLink, '_blank')}
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      Zobacz Listę Prezentów
                    </button>
                  )}
                  {gift.accountNumber && (
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Numer konta:</p>
                      <p className="font-mono text-sm text-gray-800">{gift.accountNumber}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Najczęściej Zadawane Pytania
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {weddingData.faqs.map((faq) => (
              <Card key={faq.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Kontakt
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Bride Contact */}
            <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Heart className="h-6 w-6" />
                  <span>Panna Młoda</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">{weddingData.contact.bride.name}</h3>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-rose-600" />
                    <a href={`tel:${weddingData.contact.bride.phone}`} className="text-gray-700 hover:text-rose-600 transition-colors">
                      {weddingData.contact.bride.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-rose-600" />
                    <a href={`mailto:${weddingData.contact.bride.email}`} className="text-gray-700 hover:text-rose-600 transition-colors">
                      {weddingData.contact.bride.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Groom Contact */}
            <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Heart className="h-6 w-6" />
                  <span>Pan Młody</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">{weddingData.contact.groom.name}</h3>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-pink-600" />
                    <a href={`tel:${weddingData.contact.groom.phone}`} className="text-gray-700 hover:text-pink-600 transition-colors">
                      {weddingData.contact.groom.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-pink-600" />
                    <a href={`mailto:${weddingData.contact.groom.email}`} className="text-gray-700 hover:text-pink-600 transition-colors">
                      {weddingData.contact.groom.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-rose-600" />
            <h3 className="text-2xl font-bold">
              {weddingData.couple.bride} & {weddingData.couple.groom}
            </h3>
          </div>
          <p className="text-gray-400 mb-4">
            {formatDate(weddingData.couple.weddingDate)}
          </p>
          <Separator className="my-6 bg-gray-700" />
          <p className="text-gray-400">
            Wykonano z ❤️ na nasze wesele
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WeddingWebsite;