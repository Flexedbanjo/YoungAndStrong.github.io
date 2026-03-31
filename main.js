/**
 * YOUNG & BRAVE - JavaScript
 * Pure HTML/CSS/JS Version
 */

// ========================================
// ACTIVITIES DATA
// ========================================
const activities = [
    {
      id: 1,
      title: 'Street Basketball Tournament',
      category: 'sport',
      description: 'Competeer met andere jongeren in onze maandelijkse basketbal toernooien. Of je nu beginner of gevorderd bent, iedereen is welkom!',
      fullDescription: 'Onze Street Basketball Tournaments zijn dé plek om je basketbal skills te laten zien en nieuwe vrienden te maken. We organiseren toernooien voor verschillende niveaus, zodat iedereen kan meedoen. Naast het sportieve aspect is er ook ruimte voor gezelligheid en verbinding.',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80',
      date: 'Elke eerste zaterdag',
      location: 'Sportpark West',
      participants: '20-30 deelnemers',
      color: 'sport'
    },
    {
      id: 2,
      title: 'Mindset Masterclass',
      category: 'mindset',
      description: 'Leer technieken om stress te managen, je zelfvertrouwen te boosten en doelen te stellen die je écht gaat halen.',
      fullDescription: 'In onze Mindset Masterclasses werken we aan persoonlijke groei en mentale veerkracht. Je leert praktische technieken om met tegenslagen om te gaan, je zelfvertrouwen te versterken en doelen te stellen die haalbaar en motiverend zijn. De sessies worden geleid door ervaren coaches.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      date: 'Elke woensdagavond',
      location: 'Community Center',
      participants: '15-20 deelnemers',
      color: 'mindset'
    },
    {
      id: 3,
      title: 'Street Art Workshop',
      category: 'creatief',
      description: 'Express yourself! Leer de basics van graffiti, stencil art en murals van professionele street artists.',
      fullDescription: 'Onze Street Art Workshops geven je de kans om creatief bezig te zijn en je expressie te vinden. Onder begeleiding van professionele street artists leer je verschillende technieken zoals graffiti, stencil art en het maken van murals. Alle materialen worden verzorgd!',
      image: 'https://plus.unsplash.com/premium_photo-1693181640721-33d8e1e0ca92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'Elke tweede zaterdag',
      location: 'Creative Hub',
      participants: '12-15 deelnemers',
      color: 'creatief'
    },
    {
      id: 4,
      title: 'Summer Vibes Festival',
      category: 'events',
      description: 'Ons jaarlijkse festival met muziek, food trucks, sport challenges en een heleboel fun!',
      fullDescription: 'Het Summer Vibes Festival is hét hoogtepunt van het jaar! Een dag vol muziek, lekker eten van food trucks, sportieve challenges, creatieve workshops en natuurlijk heel veel gezelligheid. Het perfecte moment om het jaar af te sluiten met alle Young & Brave deelnemers.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
      date: 'Augustus 2025',
      location: 'Stadspark',
      participants: '200+ deelnemers',
      color: 'events'
    },
    {
      id: 5,
      title: 'Yoga & Mindfulness',
      category: 'sport',
      description: 'Ontspan en kom tot rust met onze wekelijkse yoga sessies, speciaal voor jongeren.',
      fullDescription: 'Yoga & Mindfulness sessies speciaal aangepast voor jongeren. Je leert niet alleen fysieke houdingen, maar ook ademhalingstechnieken en meditatie om beter om te gaan met stress en druk. Geen ervaring nodig, iedereen kan meedoen!',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
      date: 'Elke dinsdagochtend',
      location: 'Yoga Studio',
      participants: '15 deelnemers',
      color: 'sport'
    },
    {
      id: 6,
      title: 'Leadership Lab',
      category: 'mindset',
      description: 'Ontwikkel je leiderschapsvaardigheden en leer hoe je anderen kunt inspireren en motiveren.',
      fullDescription: 'Het Leadership Lab is een intensief programma voor jongeren die hun leiderschapskwaliteiten willen ontwikkelen. Je leert over communicatie, teamdynamiek, conflictoplossing en hoe je anderen kunt inspireren. Perfect voor wie een stap extra wil zetten in persoonlijke ontwikkeling.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80',
      date: 'Maandelijks',
      location: 'Leadership Center',
      participants: '10-12 deelnemers',
      color: 'mindset'
    }
  ];
  
  // ========================================
  // SUCCESS STORIES DATA
  // ========================================
  const stories = {
    sarah: {
      name: 'Sarah',
      age: 20,
      title: 'Van verlegen naar zelfverzekerd',
      quote: 'Voor Young & Brave durfde ik nooit voor een groep te staan. Nu geef ik zelf presentaties!',
      fullStory: 'Sarah kwam bij ons als een verlegen meisje die moeite had met sociale situaties. Door de mindset workshops en het stapsgewijs uitdagen van haar comfortzone, heeft ze enorme stappen gezet. Ze is nu een van onze ambassadeurs en helpt andere jongeren met hun zelfvertrouwen.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
      stats: { confidence: '+150%', friends: '12 nieuwe vrienden' }
    },
    jamal: {
      name: 'Jamal',
      age: 19,
      title: 'Van de straat naar de studio',
      quote: 'De street art workshops hebben mijn leven veranderd. Ik ben nu professioneel artiest.',
      fullStory: 'Jamal ontdekte zijn passie voor street art tijdens onze workshops. Wat begon als een hobby, groeide uit tot een carrière. Hij heeft inmiddels meerdere murals in de stad gemaakt en geeft zelf workshops aan nieuwe deelnemers.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
      stats: { confidence: '+200%', friends: '8 nieuwe vrienden' }
    },
    emma: {
      name: 'Emma & Lisa',
      age: 18,
      title: 'Best friends for life',
      quote: 'We zijn hier vriendinnen geworden en nu onafscheidelijk. Samen sterk!',
      fullStory: 'Emma en Lisa ontmoetten elkaar tijdens een sportactiviteit bij Young & Brave. Wat begon als een spontane samenwerking tijdens een teamopdracht, groeide uit tot een hechte vriendschap. Samen organiseren ze nu zelf activiteiten voor andere jongeren.',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80',
      stats: { confidence: '+120%', friends: '15+ nieuwe vrienden' }
    }
  };
  
  // ========================================
  // LOADER
  // ========================================
  function initLoader() {
    const loader = document.getElementById('loader');
    
    // Hide loader after animation completes
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }, 1250);
  }
  
  // ========================================
  // NAVIGATION
  // ========================================
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('a');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
    
    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
  
  // ========================================
  // ACTIVITIES
  // ========================================
  function initActivities() {
    const grid = document.getElementById('activitiesGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Render activities
    function renderActivities(filter = 'all') {
      grid.innerHTML = '';
      
      const filtered = filter === 'all' 
        ? activities 
        : activities.filter(a => a.category === filter);
      
      filtered.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerHTML = `
          <div class="activity-image">
            <img src="${activity.image}" alt="${activity.title}" loading="lazy">
            <span class="activity-category ${activity.color}">${activity.category}</span>
          </div>
          <div class="activity-content">
            <div class="activity-meta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>${activity.category}</span>
            </div>
            <h3 class="activity-title">${activity.title}</h3>
            <p class="activity-description">${activity.description}</p>
            <button class="activity-link" data-id="${activity.id}">
              Meer info
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });
      
      // Add click handlers
      document.querySelectorAll('.activity-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = parseInt(e.currentTarget.dataset.id);
          openActivityModal(id);
        });
      });
    }
    
    // Filter buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderActivities(btn.dataset.filter);
      });
    });
    
    // Initial render
    renderActivities();
  }
  
  // ========================================
  // ACTIVITY MODAL
  // ========================================
  function openActivityModal(id) {
    const activity = activities.find(a => a.id === id);
    if (!activity) return;
    
    const modal = document.getElementById('activityModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
      <img src="${activity.image}" alt="${activity.title}" class="modal-image">
      <div class="modal-body">
        <span class="modal-category ${activity.color}">${activity.category}</span>
        <h2 class="modal-title">${activity.title}</h2>
        <p class="modal-description">${activity.fullDescription}</p>
        <div class="modal-details">
          <div class="modal-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <div>
              <p class="modal-detail-label">Wanneer</p>
              <p class="modal-detail-value">${activity.date}</p>
            </div>
          </div>
          <div class="modal-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <p class="modal-detail-label">Waar</p>
              <p class="modal-detail-value">${activity.location}</p>
            </div>
          </div>
          <div class="modal-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <div>
              <p class="modal-detail-label">Groepsgrootte</p>
              <p class="modal-detail-value">${activity.participants}</p>
            </div>
          </div>
        </div>
        <a href="contact.html" class="btn btn-primary btn-full" onclick="closeModal('activityModal')">
          Aanmelden voor deze activiteit
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // ========================================
  // STORY MODAL
  // ========================================
  function initStoryModal() {
    const storyBtns = document.querySelectorAll('.story-play');
    
    storyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const storyKey = btn.dataset.story;
        const story = stories[storyKey];
        if (!story) return;
        
        const modal = document.getElementById('storyModal');
        const modalBody = document.getElementById('storyModalBody');
        
        modalBody.innerHTML = `
          <div style="position: relative;">
            <img src="${story.image}" alt="${story.name}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
            <button class="story-play" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
              <svg viewBox="0 0 24 24" fill="currentColor" style="width: 28px; height: 28px; margin-left: 4px;">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
              <img src="${story.image}" alt="${story.name}" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover;">
              <div>
                <h2 class="modal-title">${story.name}, ${story.age}</h2>
                <p style="color: #4a4a68;">${story.title}</p>
              </div>
            </div>
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
              <span style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: #FFF8E0; border-radius: 9999px; font-weight: 600; font-size: 0.875rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                ${story.stats.confidence} zelfvertrouwen
              </span>
              <span style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: #FFF8E0; border-radius: 9999px; font-weight: 600; font-size: 0.875rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                ${story.stats.friends}
              </span>
            </div>
            <p style="color: #4a4a68; line-height: 1.7; margin-bottom: 1rem;">${story.fullStory}</p>
            <div style="padding: 1rem; background: rgba(240, 180, 0, 0.2); border-radius: 0.75rem;">
              <p style="color: #000082; font-style: italic;">"${story.quote}"</p>
            </div>
          </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }
  
  // ========================================
  // MODAL UTILITIES
  // ========================================
  function initModals() {
    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', () => {
        overlay.parentElement.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
    
    // Close modal on close button click
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.modal').classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
          modal.classList.remove('active');
          document.body.style.overflow = 'auto';
        });
      }
    });
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
  
  // ========================================
  // CONTACT FORM
  // ========================================
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          form.style.display = 'none';
          success.classList.add('active');
  
          setTimeout(() => {
            form.reset();
            form.style.display = 'flex';
            success.classList.remove('active');
          }, 3000);
        } else {
          alert('Er is iets misgegaan, probeer het opnieuw.');
        }
      } catch (error) {
        alert('Er is een fout opgetreden: ' + error.message);
      }
    });
  }
  
  // ========================================
  // SMOOTH SCROLL
  // ========================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const navHeight = document.getElementById('navbar').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // ========================================
  // SCROLL ANIMATIONS
  // ========================================
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.activity-card, .value-card, .partnership-card, .testimonial-card, .story-card, .benefit-item, .about-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }
  
  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
  
  // ========================================
  // INITIALIZE
  // ========================================
  document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initNavigation();
    initActivities();
    initStoryModal();
    initModals();
    initContactForm();
    initSmoothScroll();
    initScrollAnimations();
  });
  
  // Expose closeModal globally
  window.closeModal = closeModal;
  