export type Language = "en" | "es";

type TranslationContent = {
  nav: {
    brand: string;
    about: string;
    menu: string;
    love: string;
    experience: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    body: string;
  };
  menu: {
    title: string;
    tacosTitle: string;
    tacosItems: string[];
    tacosDescription: string;
    sidesTitle: string;
    sidesDescription: string;
    drinksTitle: string;
    drinksItems: string[];
  };
  love: {
    title: string;
    items: string[];
  };
  experience: {
    title: string;
    body: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    location: string;
    phone: string;
    rights: string;
  };
};

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      brand: "Mi Rey Street Food",
      about: "About",
      menu: "Menu",
      love: "Why Us",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      title: "Real Mexican Street Food",
      subtitle: "Fresh, fast, and full of flavor",
      cta: "View Menu",
    },
    about: {
      title: "About Us",
      body: "A local favorite serving authentic Mexican flavors with simple ingredients and traditional recipes. Every dish is made fresh and packed with bold taste.",
    },
    menu: {
      title: "Our Menu",
      tacosTitle: "Tacos",
      tacosItems: ["Carne Asada", "Al Pastor", "Pollo", "Barbacoa", "Lengua"],
      tacosDescription:
        "Served on warm corn tortillas with onion, cilantro, and lime.",
      sidesTitle: "Elotes / Sides",
      sidesDescription:
        "Grilled corn with creamy sauce, cheese, and chili powder.",
      drinksTitle: "Drinks",
      drinksItems: ["Horchata", "Agua Fresca", "Soda"],
    },
    love: {
      title: "Why People Love Us",
      items: ["Fresh Ingredients", "Fast Service", "Authentic Recipes"],
    },
    experience: {
      title: "Street Food Experience",
      body: "Come for the food, stay for the flavor. A true street food experience where quality and simplicity come together.",
    },
    cta: {
      title: "Visit Us Today",
      subtitle: "Simple food. Real flavor.",
      button: "Get Directions",
    },
    footer: {
      location: "123 Market Street, Your City",
      phone: "(000) 000-0000",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      brand: "Mi Rey Comida Callejera",
      about: "Nosotros",
      menu: "Menú",
      love: "Por Qué Nosotros",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      title: "Auténtica Comida Callejera Mexicana",
      subtitle: "Fresco, rápido y lleno de sabor",
      cta: "Ver Menú",
    },
    about: {
      title: "Sobre Nosotros",
      body: "Un favorito local que sirve sabores mexicanos auténticos con ingredientes simples y recetas tradicionales. Cada platillo se prepara fresco y lleno de sabor.",
    },
    menu: {
      title: "Nuestro Menú",
      tacosTitle: "Tacos",
      tacosItems: ["Carne Asada", "Al Pastor", "Pollo", "Barbacoa", "Lengua"],
      tacosDescription:
        "Servidos en tortillas de maíz calientes con cebolla, cilantro y limón.",
      sidesTitle: "Elotes / Antojitos",
      sidesDescription: "Elote con crema, queso y chile en polvo.",
      drinksTitle: "Bebidas",
      drinksItems: ["Horchata", "Agua Fresca", "Refresco"],
    },
    love: {
      title: "Por Qué La Gente Nos Ama",
      items: ["Ingredientes Frescos", "Servicio Rápido", "Recetas Auténticas"],
    },
    experience: {
      title: "Experiencia Callejera",
      body: "Ven por la comida, quédate por el sabor. Una verdadera experiencia de comida callejera donde la calidad y la simplicidad se unen.",
    },
    cta: {
      title: "Visítanos Hoy",
      subtitle: "Comida simple. Sabor real.",
      button: "Cómo Llegar",
    },
    footer: {
      location: "123 Calle Mercado, Tu Ciudad",
      phone: "(000) 000-0000",
      rights: "Todos los derechos reservados.",
    },
  },
};
