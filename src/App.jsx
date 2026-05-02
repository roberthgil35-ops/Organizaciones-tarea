import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from(".hero-content", { 
        opacity: 0, 
        y: 50, 
        duration: 1.2, 
        ease: "power4.out" 
      });

      // Reveal sections on scroll
      gsap.utils.toArray(".reveal").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out"
        });
      });

      // Hover effect on cards
      gsap.utils.toArray(".card-hover").forEach(card => {
        card.addEventListener("mouseenter", () => gsap.to(card, { scale: 1.03, duration: 0.3 }));
        card.addEventListener("mouseleave", () => gsap.to(card, { scale: 1, duration: 0.3 }));
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const s = {
    bg: { backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif', overflowX: 'hidden' },
    gradientText: { background: 'linear-gradient(90deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900' },
    card: { backgroundColor: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' },
    pill: { backgroundColor: 'rgba(129, 140, 248, 0.1)', color: '#818cf8', padding: '6px 16px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', border: '1px solid rgba(129, 140, 248, 0.2)' }
  };

  return (
    <div style={s.bg} ref={mainRef}>
      {/* NAVBAR */}
      <nav style={{ padding: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-1px' }}>SOCIOT<span style={{ color: '#818cf8' }}>ECH</span></div>
        <div style={s.pill}>UNACH • CIENCIAS DE LA COMPUTACIÓN</div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px' }}>
        <div className="hero-content">
          <span style={s.pill}>PROYECTO INTEGRADOR 2026</span>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: '20px 0', lineHeight: '0.9' }}>
            Sociología <br /> <span style={s.gradientText}>Organizacional</span>
          </h1>
          <p style={{ color: '#888', maxWidth: '600px', fontSize: '1.2rem' }}>
            Analizando la complejidad humana en entornos técnicos y sociales.
          </p>
        </div>
      </section>

      {/* 5 EFECTOS SECTION */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ marginBottom: '100px' }} className="reveal">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Efectos Clave en el <span style={{ color: '#818cf8' }}>Desempeño</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
            
            {[
              { t: "Cultura Organizacional", d: "El ADN de la empresa. Valores que dictan el éxito silencioso.", icon: "🌌" },
              { t: "Dinámicas de Poder", d: "Cómo la autoridad fluye para transformar ideas en realidad.", icon: "⚡" },
              { t: "Clima Laboral", d: "La atmósfera social donde germina la innovación.", icon: "🌡️" },
              { t: "Comunicación Interna", d: "El sistema nervioso de la organización.", icon: "📡" },
              { t: "Socialización", d: "La integración del individuo en la psique colectiva.", icon: "🤝" }
            ].map((item, i) => (
              <div key={i} style={s.card} className="card-hover">
                <div style={{ fontSize: '2rem', marginBottom: '15px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: '#818cf8' }}>{item.t}</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6' }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* METODOLOGÍA SECTION CON "IMAGEN" */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '100px' }} className="reveal">
          <div style={{ position: 'relative', height: '400px', borderRadius: '30px', overflow: 'hidden', backgroundColor: '#111' }}>
            {/* Aquí puedes poner una imagen real de la UNACH */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent, #000)', zIndex: 1 }}></div>
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', zIndex: 2 }}>
              <h3 style={{ fontSize: '2rem' }}>Etnografía</h3>
              <p style={{ color: '#818cf8', fontWeight: 'bold' }}>OBSERVACIÓN DIRECTA</p>
            </div>
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '5rem', opacity: 0.2 }}>📸</div>
          </div>

          <div style={{ ...s.card, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#f59e0b', marginBottom: '20px' }}>Estudio Axiológico</h3>
            <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: '20px' }}>
              Analizamos la jerarquía de valores que guía cada decisión en la organización. No es lo que dicen, es lo que valoran.
            </p>
            <div style={s.pill}>VALORES • ÉTICA • IDENTIDAD</div>
          </div>
        </div>

        {/* CONCLUSIÓN & LÍDER */}
        <section className="reveal" style={{ textAlign: 'center', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontSize: '1rem', color: '#818cf8', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '30px' }}>Conclusión</h2>
          <blockquote style={{ fontSize: '2rem', fontWeight: '300', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto 40px auto', color: '#ddd' }}>
            "La sociología no es solo teoría, es el algoritmo humano que optimiza el desempeño organizacional en la era técnica."
          </blockquote>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#818cf8', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', fontWeight: '900' }}>RJ</div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Roberth Jared Gil Rios</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Líder de Proyecto | Estudiante de CS UNACH</p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '60px 20px', textAlign: 'center', color: '#444', fontSize: '0.8rem' }}>
        <p>CIENCIAS DE LA COMPUTACIÓN • UNIVERSIDAD AUTÓNOMA DE CHIAPAS</p>
        <p style={{ marginTop: '10px' }}>BIBLIOGRAFÍA: GIDDENS (2010) • CHIAVENATO (2009) • WEBER (1947)</p>
      </footer>
    </div>
  );
}

export default App;