import SpainFlag from "@/components/flags/Spain.astro";
import UnitedStatesFlag from "@/components/flags/UnitedStates.astro";

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.experiencia": "Experiencia",
    "nav.proyectos": "Proyectos",
    "nav.contacto": "Contacto",
  },
  en: {
    "nav.inicio": "Home",
    "nav.experiencia": "Experience",
    "nav.proyectos": "Projects",
    "nav.contacto": "Contact",
  },
} as const;

export const routes = {
  es: {
    inicio: "inicio",
    experiencia: "experiencia",
    proyectos: "proyectos",
    contacto: "contacto",
  },
  en: {
    inicio: "home",
    experiencia: "experience",
    proyectos: "projects",
    contacto: "contact",
  },
} as const;
