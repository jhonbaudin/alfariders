import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  Compass,
  ExternalLink,
  Flag,
  Gauge,
  Mail,
  MapPin,
  Mountain,
  ShieldCheck,
  ShoppingBag,
  Timer,
  Users,
} from 'lucide-react';

import logoWhite from './assets/logos/logo-alfa-riders-white.png';
import logoYellow from './assets/logos/logo-alfa-riders-yellow.png';
import logoHorizontal from './assets/logos/logo-alfa-riders-horizontal.png';
import vichayMain from './assets/reference/vichay-cocha-main.jpeg';
import vichayInfo from './assets/reference/vichay-cocha-info.jpeg';

const navigation = [
  { label: 'Rutas', href: '#rutas' },
  { label: 'Comunidad', href: '#comunidad' },
  { label: 'Clinicas', href: '#clinicas' },
  { label: 'Galerias', href: '#galerias' },
  { label: 'Merch', href: '#merch' },
  { label: 'Contacto', href: '#contacto' },
];

const routeFacts = [
  { label: 'Kilometraje total', value: '387 km', icon: Gauge },
  { label: 'Trocha registrada', value: '93 km', icon: Mountain },
  { label: 'Nivel', value: 'Basico+', icon: ShieldCheck },
  { label: 'Modalidad', value: 'Dual sport', icon: Compass },
];

const principles = [
  'Rutas planificadas con informacion clara antes de salir.',
  'Conduccion responsable, tecnica y progresiva.',
  'Comunidad multimarca con foco en motos doble proposito.',
  'Contenido privado para miembros cuando la ruta lo exige.',
];

const modules = [
  {
    title: 'Rutas y viajes',
    text: 'Calendario, historial, fichas tecnicas, dificultad, terreno, kilometraje y material privado por evento.',
    icon: MapPin,
  },
  {
    title: 'Clinicas',
    text: 'Espacios formativos para tecnica, seguridad, preparacion de moto y manejo fuera de carretera.',
    icon: ShieldCheck,
  },
  {
    title: 'Galerias',
    text: 'Fotografia y video curado para mostrar la experiencia sin saturar la identidad visual.',
    icon: Camera,
  },
  {
    title: 'Merchandising',
    text: 'Catalogo administrable con contacto por WhatsApp en MVP; ecommerce queda reservado para fase posterior.',
    icon: ShoppingBag,
  },
];

const pendingBusiness = [
  'Mision, vision e historia oficial.',
  'Numero de WhatsApp comercial.',
  'Precios, beneficios y reglas de membresia.',
  'Patrocinadores y aliados confirmados.',
  'Textos legales finales y politica de privacidad.',
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Navegacion principal">
        <a className="brand-link" href="#inicio" aria-label="Alfa Riders Peru">
          <img src={logoHorizontal} alt="" className="brand-mark" />
          <span>Alfa Riders Peru</span>
        </a>
        <nav className="desktop-nav" aria-label="Secciones">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="icon-link" href="https://www.instagram.com/alfa_riders_peru/" target="_blank" rel="noreferrer">
          <Camera aria-hidden="true" size={18} />
          <span>Instagram</span>
        </a>
      </header>

      <main>
        <section id="inicio" className="hero-section" aria-labelledby="hero-title">
          <img src={vichayMain} alt="" className="hero-media" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Motoaventura multimarca · Peru</p>
            <h1 id="hero-title">Alfa Riders Peru</h1>
            <p className="hero-copy">
              Comunidad de rutas dual sport, viajes, clinicas y experiencias de aventura para motociclistas que buscan
              precision, seguridad y carretera con caracter.
            </p>
            <div className="hero-actions" aria-label="Acciones principales">
              <a className="primary-button" href="#rutas">
                Ver rutas
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="secondary-button" href="#contacto">
                Contacto
                <ChevronRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
          <div className="hero-logo-lockup" aria-hidden="true">
            <img src={logoYellow} alt="" />
          </div>
        </section>

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
            <span>Enfoque premium dual sport</span>
          </div>
        </section>

        <section id="rutas" className="content-section route-section" aria-labelledby="routes-title">
          <div className="section-heading">
            <p className="eyebrow">Rutas</p>
            <h2 id="routes-title">Experiencias con informacion clara antes de encender la moto.</h2>
          </div>

          <div className="route-feature">
            <div className="route-copy">
              <p className="route-kicker">Referencia visual de ruta</p>
              <h3>Vichay Cocha</h3>
              <p>
                La pieza grafica de referencia marca la linea: fotografia de montana, tipografia condensada, contraste
                alto, amarillo operativo y datos esenciales visibles.
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
              <img src={vichayInfo} alt="Flyer de referencia de la ruta Vichay Cocha de Alfa Riders" />
            </figure>
          </div>
        </section>

        <section id="comunidad" className="content-section split-section" aria-labelledby="community-title">
          <div className="section-heading compact">
            <p className="eyebrow">Comunidad</p>
            <h2 id="community-title">Aventura con metodo, criterio y equipo.</h2>
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

        <section id="clinicas" className="content-section modules-section" aria-labelledby="modules-title">
          <div className="section-heading">
            <p className="eyebrow">Plataforma</p>
            <h2 id="modules-title">Modulos publicos preparados para crecer.</h2>
          </div>
          <div className="module-grid">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <article className="module-card" key={module.title}>
                  <Icon aria-hidden="true" size={24} />
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="galerias" className="content-section gallery-section" aria-labelledby="gallery-title">
          <div className="section-heading compact">
            <p className="eyebrow">Galerias</p>
            <h2 id="gallery-title">Fotografia de ruta como prueba de experiencia.</h2>
          </div>
          <div className="gallery-grid">
            <img src={vichayMain} alt="Motociclistas en ruta de montana Vichay Cocha" />
            <img src={vichayInfo} alt="Informacion grafica de ruta Alfa Riders" />
            <div className="gallery-panel">
              <Flag aria-hidden="true" size={28} />
              <strong>Archivo historico</strong>
              <span>Las rutas realizadas deben publicarse con fecha, galeria, resumen y creditos.</span>
            </div>
          </div>
        </section>

        <section id="merch" className="content-section merch-section" aria-labelledby="merch-title">
          <div>
            <p className="eyebrow">Merchandising</p>
            <h2 id="merch-title">Catalogo primero. Ecommerce cuando el negocio lo valide.</h2>
          </div>
          <div className="merch-panel">
            <ShoppingBag aria-hidden="true" size={28} />
            <p>
              La primera fase debe mostrar productos administrables, disponibilidad y contacto. Carrito, stock,
              variantes, cupones y ordenes pertenecen a la fase ecommerce.
            </p>
          </div>
        </section>

        <section className="content-section private-section" aria-labelledby="private-title">
          <div className="private-copy">
            <p className="eyebrow">Membresia futura</p>
            <h2 id="private-title">Informacion sensible solo para miembros verificados.</h2>
            <p>
              GPX, briefing, punto exacto de encuentro, checklist y beneficios de precio deben vivir detras de acceso
              privado cuando exista backend con autenticacion y pagos.
            </p>
          </div>
          <div className="private-metrics" aria-label="Elementos privados futuros">
            <div>
              <CalendarDays aria-hidden="true" size={24} />
              <span>Eventos</span>
            </div>
            <div>
              <Users aria-hidden="true" size={24} />
              <span>Cupos</span>
            </div>
            <div>
              <Timer aria-hidden="true" size={24} />
              <span>Acceso anticipado</span>
            </div>
          </div>
        </section>

        <section id="contacto" className="content-section contact-section" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 id="contact-title">Listos para rutas, alianzas y comunidad.</h2>
            <p>
              Falta definir el numero oficial de WhatsApp, correo operativo y datos legales. Mientras tanto, el canal
              publico confirmado es Instagram.
            </p>
            <div className="contact-actions">
              <a className="primary-button" href="https://www.instagram.com/alfa_riders_peru/" target="_blank" rel="noreferrer">
                <Camera aria-hidden="true" size={18} />
                Abrir Instagram
              </a>
              <a className="secondary-button" href="mailto:contacto@alfariders.pe">
                <Mail aria-hidden="true" size={18} />
                Email propuesto
              </a>
            </div>
          </div>
          <aside className="pending-panel" aria-labelledby="pending-title">
            <h3 id="pending-title">Pendiente de negocio</h3>
            <ul>
              {pendingBusiness.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <img src={logoWhite} alt="Alfa Riders Peru" />
        <div>
          <strong>Alfa Riders Peru</strong>
          <span>alfariders.pe · @alfa_riders_peru</span>
        </div>
        <a href="#inicio" aria-label="Volver al inicio">
          <ExternalLink aria-hidden="true" size={18} />
        </a>
      </footer>
    </div>
  );
}

export default App;
