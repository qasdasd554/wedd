// Mock data for the wedding website
export const weddingData = {
  couple: {
    bride: "Natalia",
    groom: "Adam",
    weddingDate: "04.09.2027",
    weddingTime: "15:00",
    venue: {
      ceremony: {
        name: "Parafia Rzymskokatolicka p.w. Św. Stanisława Biskupa i Męczennika",
        address: "05-430 Ostrów",
        time: "15:00"
      },
      reception: {
        name: "Pałac Weselny",
        address: "Pałacowa 4, 05-332 Nowa Pogorzel", 
        time: "17:00"
      }
    }
  },
  story: {
    title: "Nasza Historia",
    content: "Poznaliśmy się podczas wspólnych wakacji nad morzem. To była miłość od pierwszego wejrzenia. Po dwóch latach związku, Adam oświadczył się Natalii podczas romantycznego zachodu słońca. Teraz nie możemy się doczekać, aby rozpocząć nowe życie razem!"
  },
  schedule: [
    {
      time: "15:00",
      event: "Ceremonia ślubna",
      location: "Parafia Rzymskokatolicka p.w. Św. Stanisława Biskupa i Męczennika",
      description: "Uroczystość zaślubin"
    },
    {
      time: "16:00",
      event: "Sesja zdjęciowa",
      location: "Okolice pałacu",
      description: "Zdjęcia z młodą parą"
    },
    {
      time: "17:00",
      event: "Powitanie gości",
      location: "Pałac Weselny",
      description: "Koktajl powitalny"
    },
    {
      time: "18:00",
      event: "Obiad weselny",
      location: "Pałac Weselny",
      description: "Uroczysta kolacja"
    },
    {
      time: "20:00",
      event: "Pierwszy taniec",
      location: "Pałac Weselny",
      description: "Romantyczny taniec młodej pary"
    },
    {
      time: "21:00",
      event: "Zabawa taneczna",
      location: "Pałac Weselny",
      description: "Tańce i rozrywka do późnych godzin"
    }
  ],
  gallery: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1606490194859-07c18c9f0968",
      alt: "Romantyczne zdjęcie pary młodej"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1723832347953-83c28e2d4dd2",
      alt: "Elegancka ceremonia ślubna"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6",
      alt: "Ceremonia w plenerze"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506",
      alt: "Elegancka sala weselna"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3082764/pexels-photo-3082764.jpeg",
      alt: "Pierwszy taniec"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1629943163055-d8c9c9fd8a88",
      alt: "Romantyczny zachód słońca"
    }
  ],
  rsvp: {
    responses: []
  },
  faqs: [
    {
      id: 1,
      question: "Czy mogę przyprowadzić osobę towarzyszącą?",
      answer: "Tak, jeśli otrzymałeś zaproszenie z opcją +1. W przeciwnym razie prosimy o kontakt z nami."
    },
    {
      id: 2,
      question: "Jaki jest dress code?",
      answer: "Elegancki strój wizytowy. Prosimy unikać białego koloru (zarezerwowanego dla panny młodej)."
    },
    {
      id: 3,
      question: "Czy będą dostępne miejsca parkingowe?",
      answer: "Tak, zarówno przy kościele jak i sali weselnej dostępne są miejsca parkingowe dla gości."
    },
    {
      id: 4,
      question: "Czy ceremonia odbędzie się na świeżym powietrzu?",
      answer: "Ceremonia odbędzie się w kościele. W przypadku złej pogody mamy plan rezerwowy."
    },
    {
      id: 5,
      question: "Czy są jakieś ograniczenia dietetyczne?",
      answer: "Podczas potwierdzania obecności można określić preferencje dietetyczne. Kuchnia uwzględni wszystkie potrzeby."
    }
  ],
  contact: {
    bride: {
      name: "Anna",
      phone: "+48 123 456 789",
      email: "anna@example.com"
    },
    groom: {
      name: "Marek",
      phone: "+48 987 654 321", 
      email: "marek@example.com"
    }
  }
};