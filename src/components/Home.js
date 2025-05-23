import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import About from './About';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const roles = [
    'Teknoloji Tutkunu',
    'Mobil Uygulama Geliştirici',
    'Web Designer',
    'React Developer',
    'Yazılım Geliştirici',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 20 : 80);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  // Scroll reveal animasyonları için
  useEffect(() => {
    const revealElements = document.querySelectorAll('.fade-in, .slide-in-right, .zoom-in');
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Ziyaretçi Defteri için state
  const [guestbook, setGuestbook] = useState([]);
  const [guestName, setGuestName] = useState('');
  const [guestMsg, setGuestMsg] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyMsg, setReplyMsg] = useState('');
  const handleGuestbookSubmit = e => {
    e.preventDefault();
    if (guestName.trim() && guestMsg.trim()) {
      setGuestbook(prev => [{ name: guestName, msg: guestMsg, date: new Date().toLocaleString(), likes: 0, replies: [] }, ...prev]);
      setGuestName('');
      setGuestMsg('');
    }
  };
  const handleDeleteMsg = idx => {
    setGuestbook(prev => prev.filter((_, i) => i !== idx));
  };
  const handleLikeMsg = idx => {
    setGuestbook(prev => prev.map((item, i) => i === idx ? { ...item, likes: (item.likes || 0) + 1 } : item));
  };
  const handleReplyMsg = idx => {
    if (replyMsg.trim()) {
      setGuestbook(prev => prev.map((item, i) => i === idx ? { ...item, replies: [...(item.replies || []), { name: guestName || 'Ziyaretçi', msg: replyMsg, date: new Date().toLocaleString() }] } : item));
      setReplyingTo(null);
      setReplyMsg('');
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero fade-in">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="profile-image">
                <img src="/profile.jpg" alt="Fatma Nisa Paktunç" />
                <div className="profile-image-border"></div>
              </div>
            </div>
            <div className="hero-right">
              <h1>
                Merhaba, Ben <span className="highlight">Fatma Nisa Paktunç</span>
              </h1>
              <div className="typewriter-container">
                <span className="static-text">Ben bir </span>
                <span className="dynamic-text">{text}</span>
                <span className="cursor">|</span>
              </div>
              <p className="intro">
                Dijital deneyimler yaratmaya tutkulu bir tasarımcı ve geliştiriciyim.
                Kullanıcı odaklı, modern ve işlevsel tasarımlar geliştiriyorum.
              </p>
              <div className="hero-buttons">
                <a href="#portfolio" className="btn primary">Projelerimi Gör</a>
                <a href="#contact" className="btn secondary">İletişime Geç</a>
              </div>
              <div className="social-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/NisaPaktunc" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/fatma-nisa-paktunç-a035b829a/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Yeteneklerim Section */}
      <section id="skills" className="skills fade-in">
        <div className="container">
          <h2>Yeteneklerim</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>🧠 Programlama Dilleri</h3>
              <p>Python (orta seviye)<br />Java (başlangıç / orta seviye)<br />C (temel)<br />C# (temel)<br />Kotlin (temel)<br />JavaScript (temel)</p>
            </div>
            <div className="skill-item">
              <h3>🌐 Web Geliştirme</h3>
              <p>HTML5<br />CSS3<br />JavaScript<br />Bootstrap (temel)</p>
            </div>
            <div className="skill-item">
              <h3>🖥️ Masaüstü Uygulama Geliştirme</h3>
              <p>PyQt5<br />Qt Designer</p>
            </div>
            <div className="skill-item">
              <h3>🗃️ Veritabanı</h3>
              <p>SQLite<br />MySQL (temel)</p>
            </div>
            <div className="skill-item">
              <h3>Yabancı Dil</h3>
              <p>İngilizce (okuma/yazma: B1-B2 seviyesi)<br />Korece: giriş seviyesinde<br />Türkmence: giriş seviyesinde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio fade-in">
        <div className="container">
          <h2>Portfolyo</h2>
          <div className="portfolio-grid">
            {/* Not Defteri */}
            <div className="portfolio-item">
              <img src="/not-defteri.png" alt="Not Defteri" style={{width: '100%', borderRadius: '12px', marginBottom: '1rem'}} />
              <h3>Not Defteri</h3>
              <p>PyQt5 ve Qt Designer ile geliştirilen, metin yazma, düzenleme, biçimlendirme ve PDF kaydetme özelliklerine sahip kullanıcı dostu bir not defteri uygulaması.</p>
              <div className="portfolio-tech">PyQt5, Qt Designer</div>
            </div>
            {/* Soru Bankası */}
            <div className="portfolio-item">
              <img src="/soru-bankasi.png" alt="Soru Bankası" style={{width: '100%', borderRadius: '12px', marginBottom: '1rem'}} />
              <h3>Soru Bankası</h3>
              <p>PyQt5 ile geliştirilen, çoklu sekmeli arayüze sahip, soruları PDF olarak kaydedebilen ve gelişmiş arama/filtreleme özellikleri sunan bir soru bankası uygulaması.</p>
              <div className="portfolio-tech">PyQt5</div>
            </div>
            {/* BiletX */}
            <div className="portfolio-item">
              <img src="/biletx.png" alt="BiletX" style={{width: '100%', borderRadius: '12px', marginBottom: '1rem'}} />
              <h3>BiletX – Etkinlik ve Bilet Satış Uygulaması</h3>
              <p>PyQt5 ile geliştirilen, çok pencereli, modern ve renkli arayüze sahip, etkinlik yönetimi ve bilet satış işlemlerini kolaylaştıran masaüstü uygulaması.</p>
              <div className="portfolio-tech">PyQt5, SQLite, JSON</div>
            </div>
            {/* Kişisel Web Sitesi */}
            <div className="portfolio-item" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
              <img src="/portfolio-website.png" alt="Kişisel Web Sitesi" style={{width: '100%', borderRadius: '12px', marginBottom: '1rem'}} />
              <h3>Kişisel Portfolyo Web Sitesi</h3>
              <p>React ile geliştirilen, modern ve kullanıcı odaklı, animasyonlu ve responsive kişisel portfolyo web sitesi. Tüm bölümler ve sosyal medya bağlantıları ile dijital kimliğinizi yansıtın.</p>
              <div className="portfolio-tech">React, CSS, HTML</div>
              <a href="/cv.pdf" download className="btn cv-download-btn" style={{marginTop: '1.5rem', padding: '1rem 2.5rem', fontWeight: 600, fontSize: '1.1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #578E7E, #7c58aa)', color: '#fff', boxShadow: '0 4px 16px rgba(87, 142, 126, 0.12)', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '0.7rem', transition: 'background 0.3s, transform 0.2s'}}><i className="fas fa-file-download"></i> CV'mi İndir</a>
            </div>
            {/* Sertifika 1 */}
            <div className="portfolio-item certificate-card" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f5ecd5', border: '2px solid #578E7E', borderRadius: '14px', padding: '2rem 1rem', minHeight: '180px'}}>
              <h3 style={{color: '#578E7E', fontWeight: 700, fontSize: '1.3rem'}}>Yapay Zeka Modülü Bitirme Sertifikası</h3>
              <a href="/sertifika1.pdf" target="_blank" rel="noopener noreferrer" className="btn primary" style={{marginTop: '1.2rem', padding: '0.7rem 1.5rem', fontWeight: 600, fontSize: '1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #578E7E, #7c58aa)', color: '#fff', letterSpacing: '0.5px', cursor: 'pointer', textAlign: 'center'}}>Sertifikayı Görüntüle</a>
            </div>
            {/* Sertifika 2 */}
            <div className="portfolio-item certificate-card" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f5ecd5', border: '2px solid #578E7E', borderRadius: '14px', padding: '2rem 1rem', minHeight: '180px'}}>
              <h3 style={{color: '#578E7E', fontWeight: 700, fontSize: '1.3rem'}}>Türk İşaret Dili 120 Saatlik Program Sertifikası</h3>
              <a href="/sertifika2.pdf" target="_blank" rel="noopener noreferrer" className="btn primary" style={{marginTop: '1.2rem', padding: '0.7rem 1.5rem', fontWeight: 600, fontSize: '1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #578E7E, #7c58aa)', color: '#fff', letterSpacing: '0.5px', cursor: 'pointer', textAlign: 'center'}}>Sertifikayı Görüntüle</a>
            </div>
          </div>
          {/* Sertifika Modalı */}
          {modalOpen && (
            <div className="modal-overlay" style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={() => setModalOpen(false)}>
              <div style={{background: '#fff', borderRadius: '12px', padding: '2rem', maxWidth: '90vw', maxHeight: '90vh', boxShadow: '0 8px 32px rgba(60,60,60,0.18)', position: 'relative'}} onClick={e => e.stopPropagation()}>
                <img src={modalImg} alt={modalAlt} style={{maxWidth: '80vw', maxHeight: '70vh', borderRadius: '8px'}} />
                <button onClick={() => setModalOpen(false)} style={{position: 'absolute', top: 10, right: 10, background: '#578E7E', color: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, fontSize: 20, cursor: 'pointer'}}>×</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact fade-in">
        <div className="container">
          <h2>İletişime Geçin</h2>
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Ad Soyad" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="E-posta" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Mesajınız" required></textarea>
              </div>
              <button type="submit" className="contact-send-btn">
                <i className="fas fa-paper-plane"></i> Mesajı Gönder
              </button>
            </form>

            <div className="social-links">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/NisaPaktunc" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/fatma-nisa-paktunç-a035b829a/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guestbook Section */}
      <section id="guestbook" className="guestbook-section fade-in">
        <div className="container">
          <div className="guestbook-card">
            <h2 className="guestbook-title">Ziyaretçi Defteri</h2>
            <form className="guestbook-form" onSubmit={handleGuestbookSubmit}>
              <input type="text" placeholder="Adınız" value={guestName} onChange={e => setGuestName(e.target.value)} required className="guestbook-input" />
              <input type="text" placeholder="Mesajınız" value={guestMsg} onChange={e => setGuestMsg(e.target.value)} required className="guestbook-input" />
              <button type="submit" className="guestbook-btn">Gönder</button>
            </form>
            <div className="guestbook-list">
              {guestbook.length === 0 && <p className="guestbook-empty">Henüz mesaj yok.</p>}
              {guestbook.map((item, i) => (
                <div key={i} className="guestbook-item">
                  <div className="guestbook-avatar">{item.name[0]}</div>
                  <div className="guestbook-msgbox">
                    <div className="guestbook-msghead">
                      <strong>{item.name}</strong>
                      <span className="guestbook-date">{item.date}</span>
                    </div>
                    <div className="guestbook-msg">{item.msg}</div>
                    <div className="guestbook-actions">
                      <button className="guestbook-like" onClick={() => handleLikeMsg(i)} title="Beğen"><span role="img" aria-label="like">❤️</span> {item.likes || 0}</button>
                      <button className="guestbook-reply" onClick={() => setReplyingTo(i)} title="Cevapla">Cevapla</button>
                      <button className="guestbook-delete" onClick={() => handleDeleteMsg(i)} title="Sil">Sil</button>
                    </div>
                    {replyingTo === i && (
                      <div className="guestbook-replybox">
                        <input type="text" placeholder="Cevabınız" value={replyMsg} onChange={e => setReplyMsg(e.target.value)} className="guestbook-input" />
                        <button className="guestbook-btn" onClick={() => handleReplyMsg(i)}>Gönder</button>
                        <button className="guestbook-btn" onClick={() => { setReplyingTo(null); setReplyMsg(''); }}>İptal</button>
                      </div>
                    )}
                    {item.replies && item.replies.length > 0 && (
                      <div className="guestbook-replies">
                        {item.replies.map((r, j) => (
                          <div key={j} className="guestbook-replyitem">
                            <span className="guestbook-replyname">{r.name}:</span> {r.msg} <span className="guestbook-date">{r.date}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home; 