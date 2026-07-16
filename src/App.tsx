import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Flag,
  Gauge,
  Mail,
  Menu,
  MapPin,
  Mountain,
  ShieldCheck,
  ShoppingBag,
  X,
} from 'lucide-react';

import logoWhite from './assets/logos/logo-alfa-riders-white.png';
import logoWhite2 from './assets/logos/logo-alfa-riders-blanco.png';
import logoBlack from './assets/logos/logo-alfa-riders-negro.png';
import logoYellow from './assets/logos/logo-alfa-riders-yellow.png';
import logoHorizontal from './assets/logos/logo-alfa-riders-horizontal.png';
import correasAmarre from './assets/products/correas-de-amarre.png';
import cuelloTubular from './assets/products/cuello-tubular.png';
import gorraTruckerAlfa from './assets/products/gorra-trucker-alfa.png';
import hoodieRutaNocturna from './assets/products/hoodie-ruta-nocturna.png';
import jerseyAdventure from './assets/products/jersey-adventure.png';
import kitStickers from './assets/products/kit-stickers.png';
import mochilaHidratacion from './assets/products/mochila-de-hidratacion.png';
import poloTecnicoAlfa from './assets/products/polo-tecnico-alfa.png';
import rainCoverEquipaje from './assets/products/rain-cover-equipaje.png';
import tazaAluminioMosqueton from './assets/products/taza-aluminio-mosqueton.png';
import trajeCortavientosPiloto from './assets/products/traje-cortavientos-piloto.png';
import vichayMain from './assets/reference/vichay-cocha-main.jpeg';
import vichayInfo from './assets/reference/vichay-cocha-info.jpeg';

const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Rutas', href: '/rutas' },
  { label: 'Merch', href: '/merchandising' },
  { label: 'Comunidad', href: '/comunidad' },
  { label: 'Clinicas', href: '/clinicas' },
  { label: 'Contacto', href: '/contacto' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/alfa_riders_peru/', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'WhatsApp', Icon: WhatsAppIcon },
  { label: 'YouTube', Icon: YouTubeIcon },
];

const appBasePath = import.meta.env.BASE_URL.replace(/\/$/, '');

function getAppHref(path: string) {
  if (!path.startsWith('/')) {
    return path;
  }

  if (!appBasePath) {
    return path;
  }

  if (path === '/') {
    return `${appBasePath}/`;
  }

  return `${appBasePath}${path}`;
}

const principles = [
  'Rutas planificadas con briefing, puntos de control y lectura del terreno.',
  'Conduccion responsable para pilotos de motos doble proposito.',
  'Comunidad multimarca con estandar premium y espiritu de aventura.',
  'Experiencias de montana, trocha y carretera con informacion precisa.',
];

const modules = [
  {
    title: 'Rutas',
    text: 'Calendario mensual, fichas tecnicas, dificultad, kilometraje, terreno y archivo historico.',
    icon: MapPin,
    href: '/rutas',
  },
  {
    title: 'Comunidad',
    text: 'Rutas, clinicas, reuniones y cultura motera con criterio de grupo.',
    icon: Flag,
    href: '/comunidad',
  },
  {
    title: 'Clinicas',
    text: 'Tecnica, seguridad, preparacion de moto, lectura de ruta y conduccion fuera de carretera.',
    icon: ShieldCheck,
    href: '/clinicas',
  },
  {
    title: 'Merch',
    text: 'Equipamiento ligero, prendas y accesorios con identidad Alfa Riders.',
    icon: ShoppingBag,
    href: '/merchandising',
  },
];

const currentRoute = {
  title: 'Vichay Cocha',
  date: 'Domingo 19 Jul.',
  distance: '387 km',
  dirt: '93 km de trocha',
  level: 'Basico+',
  departure: '04:30 AM',
  breakfast: 'Delpino',
  lunch: 'Huaral',
  terrain: 'Montana, trocha y carretera',
  pack: ['Guia de ruta', 'Ruta y cierre', 'Fotos y videos', 'Snack'],
  requirements: ['Moto doble proposito', 'Equipo completo', 'Autonomia de ruta', 'Respeto al briefing'],
};

const routeFacts = [
  { label: 'Kilometraje total', value: currentRoute.distance, icon: Gauge },
  { label: 'Trocha registrada', value: currentRoute.dirt, icon: Mountain },
  { label: 'Nivel', value: currentRoute.level, icon: ShieldCheck },
  { label: 'Partida', value: currentRoute.departure, icon: CalendarDays },
];

const merchandisingPhases = [
  {
    title: 'Drop inicial',
    text: 'Prendas de identidad para ruta, reuniones y uso diario.',
  },
  {
    title: 'Preventa',
    text: 'Productos por lote para asegurar tallas y produccion controlada.',
  },
  {
    title: 'Ruta',
    text: 'Accesorios practicos para full days, viajes y clinicas.',
  },
];

const clinicTopics = [
  {
    title: 'Tecnica base',
    text: 'Posicion de manejo, mirada, control de freno, acelerador y equilibrio en baja velocidad.',
  },
  {
    title: 'Off-road',
    text: 'Lectura de trocha, ascensos, descensos, curvas sueltas y gestion de traccion.',
  },
  {
    title: 'Preparacion',
    text: 'Checklist de moto, presion de llantas, equipo personal, herramientas y autonomia.',
  },
  {
    title: 'Ruta segura',
    text: 'Briefing, comunicacion de grupo, puntos de control, cierre y toma de decisiones.',
  },
];

type Product = {
  name: string;
  category: string;
  status: string;
  sizes: string;
  text: string;
  image?: string;
  imageFit?: 'cover' | 'contain';
  gallery?: ProductGalleryImage[];
};

type ProductGalleryImage = {
  src: string;
  alt: string;
  label: string;
  fit?: 'cover' | 'contain';
};

const products: Product[] = [
  {
    name: 'Polo tecnico Alfa',
    category: 'Prenda',
    status: 'Disponible',
    sizes: 'S · M · L · XL',
    text: 'Tela ligera, corte limpio y logo Alfa para uso urbano o salida corta.',
    image: poloTecnicoAlfa,
    imageFit: 'contain',
  },
  {
    name: 'Jersey Adventure Alfa',
    category: 'Ruta',
    status: 'Preventa',
    sizes: 'M · L · XL',
    text: 'Manga larga respirable para conduccion off-road y rutas de altura.',
    image: jerseyAdventure,
    imageFit: 'contain',
  },
  {
    name: 'Cuello tubular Alfa',
    category: 'Accesorio',
    status: 'Disponible',
    sizes: 'Unitalla',
    text: 'Proteccion ligera contra polvo, viento y frio durante el trayecto.',
    image: cuelloTubular,
    imageFit: 'contain',
  },
  {
    name: 'Gorra trucker Alfa',
    category: 'Lifestyle',
    status: 'Disponible',
    sizes: 'Ajustable',
    text: 'Perfil clasico para reuniones, previas de ruta y uso diario.',
    image: gorraTruckerAlfa,
    imageFit: 'contain',
  },
  {
    name: 'Kit stickers Alfa',
    category: 'Accesorio',
    status: 'Disponible',
    sizes: 'Pack',
    text: 'Viniles para maletas, casco, parabrisas o herramientas de viaje.',
    image: kitStickers,
    imageFit: 'contain',
  },
  {
    name: 'Correas de amarre Alfa',
    category: 'Accesorio',
    status: 'Proximo drop',
    sizes: 'Pack x2',
    text: 'Correas resistentes para asegurar equipaje, maletas y carga durante la ruta.',
    image: correasAmarre,
    imageFit: 'contain',
  },
  {
    name: 'Mochila de hidratacion Alfa',
    category: 'Accesorio',
    status: 'Proximo drop',
    sizes: 'Unitalla',
    text: 'Mochila compacta con sistema de hidratacion para mantener autonomia en ruta y trocha.',
    image: mochilaHidratacion,
    imageFit: 'contain',
  },
  {
    name: 'Rain cover para equipaje Alfa',
    category: 'Accesorio',
    status: 'Proximo drop',
    sizes: 'Unitalla',
    text: 'Cobertor impermeable para proteger maletas y equipaje en lluvia, polvo y ruta.',
    image: rainCoverEquipaje,
    imageFit: 'contain',
  },
  {
    name: 'Taza de aluminio con mosqueton',
    category: 'Accesorio',
    status: 'Proximo drop',
    sizes: '350 ml',
    text: 'Taza ligera con asa mosqueton para cafe, agua y paradas de ruta.',
    image: tazaAluminioMosqueton,
    imageFit: 'contain',
  },
  {
    name: 'Traje impermeable Alfa',
    category: 'Prenda tecnica',
    status: 'Proximo drop',
    sizes: 'S · M · L · XL',
    text: 'Proteccion impermeable y ligera contra lluvia y viento para rutas largas.',
    image: trajeCortavientosPiloto,
    imageFit: 'contain',
  },
  {
    name: 'Hoodie Alfa',
    category: 'Prenda',
    status: 'Proximo drop',
    sizes: 'S · M · L · XL',
    text: 'Abrigo de identidad Alfa con presencia sobria y enfoque premium.',
    image: hoodieRutaNocturna,
    imageFit: 'contain',
  },
];

function getPage() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';

  if (normalizedPath.endsWith('/rutas')) {
    return 'routes';
  }

  if (normalizedPath.endsWith('/merchandising')) {
    return 'merchandising';
  }

  if (normalizedPath.endsWith('/comunidad')) {
    return 'community';
  }

  if (normalizedPath.endsWith('/clinicas')) {
    return 'clinics';
  }

  if (normalizedPath.endsWith('/contacto')) {
    return 'contact';
  }

  return 'home';
}

function App() {
  const page = getPage();

  return (
    <div className="site-shell">
      <Header />
      <main>
        {page === 'routes' && <RoutesPage />}
        {page === 'merchandising' && <MerchandisingPage />}
        {page === 'community' && <CommunityPage />}
        {page === 'clinics' && <ClinicsPage />}
        {page === 'contact' && <ContactPage />}
        {page === 'home' && <HomePage />}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header" aria-label="Navegacion principal">
      <a className="brand-link" href={getAppHref('/')} aria-label="Alfa Riders Peru" onClick={closeMobileMenu}>
        <img src={logoHorizontal} alt="" className="brand-mark" />
        <span>Alfa Riders Peru</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-controls="mobile-menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
      >
        {isMobileMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        <span>{isMobileMenuOpen ? 'Cerrar' : 'Menu'}</span>
      </button>
      <nav className="desktop-nav" aria-label="Secciones">
        {navigation.map((item) => (
          <a key={item.href} href={getAppHref(item.href)}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-social">
        <SocialLinks compact />
      </div>
      <nav id="mobile-menu" className="mobile-nav" aria-label="Menu mobile" hidden={!isMobileMenuOpen}>
        {navigation.map((item) => (
          <a key={item.href} href={getAppHref(item.href)} onClick={closeMobileMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <PageHero
        sectionId="inicio"
        eyebrow="Motoaventura multimarca / Peru"
        title="Alfa Riders Peru"
        text="Comunidad de rutas dual sport, clinicas, viajes y experiencias para motociclistas que buscan tecnica, seguridad y aventura con caracter."
      />

      <section className="signal-strip" aria-label="Principales senales de marca">
        <div>
          <strong>Off-road</strong>
          <span>Trocha, altura y tecnica</span>
        </div>
        <div>
          <strong>On-road</strong>
          <span>Viajes y full days</span>
        </div>
        <div>
          <strong>Comunidad</strong>
          <span>Rutas con briefing</span>
        </div>
        <div>
          <strong>Pro</strong>
          <span>Motos doble proposito</span>
        </div>
      </section>

      <section className="content-section route-teaser-section" aria-labelledby="route-teaser-title">
        <div className="section-heading">
          <p className="eyebrow">Rutas</p>
          <h2 id="route-teaser-title">Cada mes una salida nueva. Cada ruta queda en archivo.</h2>
        </div>
        <div className="teaser-grid">
          <a className="teaser-card" href={getAppHref('/rutas')}>
            <MapPin aria-hidden="true" size={24} />
            <h3>Ruta del mes</h3>
            <p>Ficha tecnica, kilometraje, nivel, terreno, horarios y puntos generales en una pagina dedicada.</p>
            <span className="card-cta">
              Abrir rutas
              <ArrowRight aria-hidden="true" size={18} />
            </span>
          </a>
          <a className="teaser-card accent-card" href={getAppHref('/merchandising')}>
            <ShoppingBag aria-hidden="true" size={24} />
            <h3>Merch Alfa</h3>
            <p>Prendas y accesorios con presencia sobria para ruta, comunidad y uso diario.</p>
            <span className="card-cta">
              Ver catalogo
              <ArrowRight aria-hidden="true" size={18} />
            </span>
          </a>
        </div>
      </section>

      <section className="content-section modules-section" aria-labelledby="modules-title">
        <div className="section-heading">
          <p className="eyebrow">Plataforma</p>
          <h2 id="modules-title">Experiencias para crecer como piloto y comunidad.</h2>
        </div>
        <div className="module-grid">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <a
                className="module-card"
                href={getAppHref(module.href)}
                key={module.title}
                aria-label={`Abrir ${module.title}`}
              >
                <Icon aria-hidden="true" size={24} />
                <h3>{module.title}</h3>
                <p>{module.text}</p>
                <span className="card-cta" aria-hidden="true">
                  <ArrowRight aria-hidden="true" size={18} />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section id="galerias" className="content-section gallery-section" aria-labelledby="gallery-title">
        <div className="section-heading compact">
          <p className="eyebrow">Galerias</p>
          <h2 id="gallery-title">Fotografia de ruta como memoria de experiencia.</h2>
        </div>
        <div className="gallery-grid">
          <div className="brand-gallery-card">
            <img src={logoYellow} alt="Logo Alfa Riders amarillo" />
            <strong>Identidad</strong>
          </div>
          <div className="brand-gallery-card dark-card">
            <img src={logoWhite} alt="Logo Alfa Riders blanco" />
            <strong>Comunidad</strong>
          </div>
          <div className="gallery-panel">
            <Flag aria-hidden="true" size={28} />
            <strong>Archivo historico</strong>
            <span>Rutas realizadas, momentos de comunidad y escenas de motoaventura peruana.</span>
          </div>
        </div>
      </section>
    </>
  );
}

function RoutesPage() {
  return (
    <>
      <PageHero
        eyebrow="Rutas Alfa"
        title="Rutas del mes"
        text="Cada salida se publica con informacion clara, fotografia de referencia, nivel, terreno, kilometraje y datos operativos para tomar una decision responsable antes de rodar."
      />

      <section className="content-section route-detail-section" aria-labelledby="current-route-title">
        <div className="section-heading">
          <p className="eyebrow">Ruta activa</p>
          <h2 id="current-route-title">{currentRoute.title}</h2>
        </div>
        <div className="route-feature">
          <div className="route-copy">
            <p className="route-kicker">{currentRoute.date}</p>
            <h3>{currentRoute.terrain}</h3>
            <p>
              Una ruta de montana con tramo de trocha, salida temprana y logistica de grupo para motos doble proposito.
              La estructura visual conserva el caracter Alfa: contraste alto, datos directos y fotografia de aventura.
            </p>
            <div className="route-facts">
              {routeFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div className="fact" key={fact.label}>
                    <Icon aria-hidden="true" size={20} />
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                );
              })}
            </div>
          </div>
          <figure className="route-image">
            <img src={vichayInfo} alt="Flyer informativo de la ruta Vichay Cocha" />
          </figure>
        </div>
      </section>

      <section className="content-section route-info-section" aria-labelledby="route-info-title">
        <div>
          <p className="eyebrow">Pack Alfa</p>
          <h2 id="route-info-title">Lo esencial para salir con orden.</h2>
        </div>
        <div className="info-columns">
          <InfoList title="Incluye" items={currentRoute.pack} />
          <InfoList title="Requisitos" items={currentRoute.requirements} />
          <InfoList title="Paradas" items={[`Desayuno: ${currentRoute.breakfast}`, `Almuerzo: ${currentRoute.lunch}`]} />
        </div>
      </section>

      <section className="content-section archive-section" aria-labelledby="archive-title">
        <div className="section-heading compact">
          <p className="eyebrow">Historico</p>
          <h2 id="archive-title">Archivo de rutas Alfa.</h2>
        </div>
        <article className="archive-card">
          <img src={vichayMain} alt="Registro visual de la ruta Vichay Cocha" />
          <div>
            <span>{currentRoute.date}</span>
            <h3>{currentRoute.title}</h3>
            <p>{currentRoute.distance} · {currentRoute.dirt} · {currentRoute.level}</p>
          </div>
        </article>
      </section>
    </>
  );
}

function MerchandisingPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Merchandising"
        title="Alfa Gear"
        text="Prendas y accesorios con presencia sobria, contraste fuerte y utilidad real para ruta, reuniones y vida motera."
      />

      <section className="content-section merch-roadmap" aria-labelledby="merch-roadmap-title">
        <div className="section-heading">
          <p className="eyebrow">Colecciones</p>
          <h2 id="merch-roadmap-title">Identidad Alfa en cada salida.</h2>
        </div>
        <div className="phase-grid">
          {merchandisingPhases.map((phase) => (
            <article className="phase-card" key={phase.title}>
              <ShoppingBag aria-hidden="true" size={24} />
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section catalog-section" aria-labelledby="catalog-title">
        <div className="section-heading">
          <p className="eyebrow">Catalogo</p>
          <h2 id="catalog-title">Equipamiento para ruta y comunidad.</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <button
              className="product-card"
              type="button"
              key={product.name}
              onClick={() => setSelectedProduct(product)}
              aria-haspopup="dialog"
              aria-label={`Ver galeria de ${product.name}`}
            >
              <div
                className={[
                  'product-media',
                  product.image ? 'has-photo' : '',
                  product.imageFit === 'contain' ? 'fit-contain' : '',
                ].filter(Boolean).join(' ')}
              >
                <img src={product.image ?? logoWhite} alt={product.image ? product.name : ''} />
                <span>{product.status}</span>
              </div>
              <div className="product-copy">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <span>{product.sizes}</span>
                <p>{product.text}</p>
                <span className="card-cta">
                  Ver galeria
                  <ArrowRight aria-hidden="true" size={18} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedProduct && <ProductGalleryModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  );
}

function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Comunidad"
        title="Comunidad Alfa"
        text="Un grupo motero de doble proposito con rutas planificadas, criterio tecnico y una cultura de aventura responsable."
      />

      <section className="content-section split-section" aria-labelledby="community-page-title">
        <div className="section-heading compact">
          <h2 id="community-page-title">Aventura con metodo, criterio y equipo.</h2>
        </div>
        <div className="principles-list">
          {principles.map((item) => (
            <div className="principle" key={item}>
              <CheckCircle2 aria-hidden="true" size={20} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section route-teaser-section" aria-labelledby="community-links-title">
        <div className="section-heading">
          <p className="eyebrow">Participacion</p>
          <h2 id="community-links-title">Rutas y entrenamiento como base de comunidad.</h2>
        </div>
        <div className="teaser-grid">
          <a className="teaser-card" href={getAppHref('/rutas')}>
            <MapPin aria-hidden="true" size={24} />
            <h3>Rutas</h3>
            <p>Salidas mensuales con ficha tecnica, nivel, terreno y archivo historico.</p>
            <span className="card-cta">
              Ver rutas
              <ArrowRight aria-hidden="true" size={18} />
            </span>
          </a>
          <a className="teaser-card accent-card" href={getAppHref('/clinicas')}>
            <ShieldCheck aria-hidden="true" size={24} />
            <h3>Clinicas</h3>
            <p>Espacios de tecnica, seguridad y preparacion para pilotos doble proposito.</p>
            <span className="card-cta">
              Ver clinicas
              <ArrowRight aria-hidden="true" size={18} />
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

function ClinicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinicas"
        title="Clinicas Alfa"
        text="Formacion practica para pilotos que quieren mejorar tecnica, seguridad y lectura de ruta sin perder el caracter de aventura."
      />

      <section className="content-section modules-section" aria-labelledby="clinics-page-title">
        <div className="section-heading">
          <p className="eyebrow">Entrenamiento</p>
          <h2 id="clinics-page-title">Tecnica aplicada a motos doble proposito.</h2>
        </div>
        <div className="phase-grid">
          {clinicTopics.map((topic) => (
            <article className="phase-card" key={topic.title}>
              <ShieldCheck aria-hidden="true" size={24} />
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section route-info-section" aria-labelledby="clinics-contact-title">
        <div>
          <p className="eyebrow">Proxima fecha</p>
          <h2 id="clinics-contact-title">Practica guiada con briefing y cierre.</h2>
        </div>
        <div className="info-columns">
          <InfoList title="Enfoque" items={['Control de moto', 'Seguridad de grupo', 'Lectura de terreno']} />
          <InfoList title="Equipo" items={['Casco y protecciones', 'Guantes y botas', 'Moto en buen estado']} />
          <InfoList title="Formato" items={['Briefing inicial', 'Bloques practicos', 'Feedback de cierre']} />
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contacto"
        text="Canal para rutas, clinicas, alianzas, colaboraciones y consultas de merchandising Alfa Riders Peru."
      />
      <ContactSection />
    </>
  );
}

function PageHero({
  sectionId,
  eyebrow,
  title,
  text,
}: {
  sectionId?: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  const titleId = `${title.toLowerCase().replace(/\s+/g, '-')}-title`;

  return (
    <section id={sectionId} className="page-hero" aria-labelledby={titleId}>
      <div className="page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="page-hero-logo" aria-hidden="true">
        <img src={logoBlack} alt="" />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="content-section contact-section" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Alfa Riders Peru</p>
        <h2 id="contact-title">Rutas, alianzas y comunidad.</h2>
        <p>
          Alfa Riders Peru conecta pilotos, marcas y experiencias de motoaventura con una presencia visual solida y
          organizada.
        </p>
        <SocialLinks />
        <div className="contact-actions">
          <a className="primary-button" href="mailto:contacto@alfariders.pe">
            <Mail aria-hidden="true" size={18} />
            Contacto
          </a>
        </div>
      </div>
      <div className="contact-logo" aria-hidden="true">
        <img src={logoYellow} alt="" />
      </div>
    </section>
  );
}

function ProductGalleryModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const images = getProductGallery(product);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  useEffect(() => {
    setActiveIndex(0);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar galeria">
          ×
        </button>

        <div className={activeImage.fit === 'contain' ? 'modal-image fit-contain' : 'modal-image'}>
          <img src={activeImage.src} alt={activeImage.alt} />
        </div>

        <div className="modal-copy">
          <p className="eyebrow">{product.category}</p>
          <h2 id="product-modal-title">{product.name}</h2>
          <span className="modal-status">{product.status}</span>
          <p>{product.text}</p>
          <p className="modal-sizes">{product.sizes}</p>

          <div className="modal-thumbnails" aria-label="Galeria de producto">
            {images.map((image, index) => (
              <button
                type="button"
                key={`${image.src}-${image.label}`}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver ${image.label}`}
              >
                <img src={image.src} alt="" />
                <span>{image.label}</span>
              </button>
            ))}
          </div>

          <a className="primary-button" href="mailto:contacto@alfariders.pe">
            <Mail aria-hidden="true" size={18} />
            Contacto
          </a>
        </div>
      </section>
    </div>
  );
}

function getProductGallery(product: Product): ProductGalleryImage[] {
  if (product.gallery?.length) {
    return product.gallery;
  }

  return [
    {
      src: product.image ?? logoWhite,
      alt: product.image ? product.name : `Logo Alfa Riders para ${product.name}`,
      label: product.image ? 'Vista principal' : 'Referencia',
      fit: product.imageFit,
    },
  ];
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="info-list">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2 aria-hidden="true" size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src={logoWhite} alt="Alfa Riders Peru" />
      <div className="footer-copy">
        <strong>Alfa Riders Peru</strong>
        <span>alfariders.pe · @alfa_riders_peru</span>
      </div>
      <SocialLinks compact />
      <a href={getAppHref('/')} aria-label="Volver al inicio">
        <ExternalLink aria-hidden="true" size={18} />
      </a>
    </footer>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'social-links compact' : 'social-links'} aria-label="Redes sociales">
      {socialLinks.map(({ label, href, Icon }) => {
        const content = (
          <>
            <Icon />
            <span>{label}</span>
          </>
        );

        if (href) {
          return (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              {content}
            </a>
          );
        }

        return (
          <span key={label} aria-label={label}>
            {content}
          </span>
        );
      })}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.6" />
      <circle cx="12" cy="12" r="3.45" />
      <circle cx="16.8" cy="7.35" r="0.9" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M14.2 8.35h2.35V4.55c-.42-.06-1.86-.18-3.52-.18-3.48 0-5.86 2.1-5.86 5.96v3.34H3.8v4.25h3.37v5.71h4.3v-5.71h3.36l.54-4.25h-3.9v-2.92c0-1.22.34-2.4 2.73-2.4Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M12.04 3.6a8.2 8.2 0 0 0-7.08 12.35L3.8 20.4l4.58-1.1A8.2 8.2 0 1 0 12.04 3.6Zm0 14.9a6.62 6.62 0 0 1-3.38-.92l-.33-.2-2.03.49.52-1.96-.22-.34a6.65 6.65 0 1 1 5.44 2.93Zm3.66-4.98c-.2-.1-1.18-.58-1.37-.65-.18-.07-.32-.1-.46.1-.13.2-.52.65-.64.79-.12.13-.24.15-.44.05-.2-.1-.85-.31-1.62-1-.6-.54-1.01-1.2-1.13-1.4-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.07-.13.03-.25-.02-.35-.05-.1-.46-1.1-.63-1.51-.16-.4-.33-.34-.46-.35h-.39c-.13 0-.35.05-.54.25-.18.2-.7.69-.7 1.68s.72 1.95.82 2.08c.1.13 1.42 2.16 3.45 3.03.48.2.86.33 1.15.42.49.15.93.13 1.28.08.39-.06 1.18-.48 1.35-.94.17-.46.17-.86.12-.94-.05-.08-.18-.13-.38-.23Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M21.2 7.15a3.02 3.02 0 0 0-2.12-2.12C17.2 4.52 12 4.52 12 4.52s-5.2 0-7.08.51A3.02 3.02 0 0 0 2.8 7.15 31.48 31.48 0 0 0 2.3 12a31.48 31.48 0 0 0 .5 4.85 3.02 3.02 0 0 0 2.12 2.12c1.88.51 7.08.51 7.08.51s5.2 0 7.08-.51a3.02 3.02 0 0 0 2.12-2.12c.5-1.87.5-4.85.5-4.85s0-2.98-.5-4.85ZM10.05 15.25v-6.5L15.48 12l-5.43 3.25Z" />
    </svg>
  );
}

export default App;
