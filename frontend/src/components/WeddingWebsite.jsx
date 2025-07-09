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

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-600" />
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
              <Calendar className="h-6 w-6" />
              <span className="text-xl">{weddingData.couple.weddingDate}</span>
              <Clock className="h-6 w-6 ml-8" />
              <span className="text-xl">{weddingData.couple.weddingTime}</span>
            </div>
            <Button 
              onClick={() => scrollToSection('rsvp')}
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Potwierdź Obecność
            </Button>
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
                  <Heart className="h-8 w-8 text-rose-600 animate-pulse" />
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1629943163055-d8c9c9fd8a88"
                  alt="Romantyczne zdjęcie pary"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center">
                  <Heart className="h-12 w-12 text-rose-600" />
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
            <Card className="shadow-xl border-0 bg-white hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Heart className="h-6 w-6" />
                  <span>Ceremonia Ślubna</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-rose-600" />
                    <span className="text-gray-700">{weddingData.couple.venue.ceremony.time}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-rose-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">{weddingData.couple.venue.ceremony.name}</p>
                      <p className="text-gray-600">{weddingData.couple.venue.ceremony.address}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reception Card */}
            <Card className="shadow-xl border-0 bg-white hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Users className="h-6 w-6" />
                  <span>Przyjęcie Weselne</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-pink-600" />
                    <span className="text-gray-700">{weddingData.couple.venue.reception.time}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">{weddingData.couple.venue.reception.name}</p>
                      <p className="text-gray-600">{weddingData.couple.venue.reception.address}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.event}</h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </CardContent>
                    </Card>
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
                  <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
                <CardTitle className="text-2xl text-center">Proszę potwierdź swoją obecność</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleRSVPSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Imię i Nazwisko *
                      </label>
                      <Input
                        type="text"
                        value={rsvpData.name}
                        onChange={(e) => setRsvpData({...rsvpData, name: e.target.value})}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={rsvpData.email}
                        onChange={(e) => setRsvpData({...rsvpData, email: e.target.value})}
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numer telefonu
                    </label>
                    <Input
                      type="tel"
                      value={rsvpData.phone}
                      onChange={(e) => setRsvpData({...rsvpData, phone: e.target.value})}
                      className="w-full"
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
                        <Input
                          type="number"
                          min="1"
                          max="4"
                          value={rsvpData.guestCount}
                          onChange={(e) => setRsvpData({...rsvpData, guestCount: parseInt(e.target.value)})}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ograniczenia dietetyczne
                        </label>
                        <Textarea
                          value={rsvpData.dietaryRestrictions}
                          onChange={(e) => setRsvpData({...rsvpData, dietaryRestrictions: e.target.value})}
                          className="w-full"
                          placeholder="Proszę opisz ewentualne ograniczenia dietetyczne..."
                        />
                      </div>
                    </>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wiadomość dla pary młodej
                    </label>
                    <Textarea
                      value={rsvpData.message}
                      onChange={(e) => setRsvpData({...rsvpData, message: e.target.value})}
                      className="w-full"
                      placeholder="Twoje życzenia i komentarze..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Wyślij Potwierdzenie
                  </Button>
                </form>
              </CardContent>
            </Card>
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
              <Card key={gift.id} className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Gift className="h-6 w-6" />
                    <span>{gift.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{gift.description}</p>
                  {gift.registryLink && (
                    <Button 
                      onClick={() => window.open(gift.registryLink, '_blank')}
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                    >
                      Zobacz Listę Prezentów
                    </Button>
                  )}
                  {gift.accountNumber && (
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Numer konta:</p>
                      <p className="font-mono text-sm text-gray-800">{gift.accountNumber}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
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