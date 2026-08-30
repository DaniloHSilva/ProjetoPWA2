/* ============================================
   PETAMIGO - PETSHOP WEBSITE
   JavaScript Externo - Interatividade Completa
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // DADOS DOS PRODUTOS
    // ============================================
    const produtos = [
        {
            id: 1,
            nome: 'Ração Premium Adulto 15kg',
            categoria: 'racao',
            preco: 189.90,
            precoAntigo: 229.90,
            imagem: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?w=400&h=300&fit=crop',
            avaliacao: 4.8,
            reviews: 124,
            badge: 'promo'
        },
        {
            id: 2,
            nome: 'Brinquedo Mordedor Resistente',
            categoria: 'brinquedo',
            preco: 34.90,
            precoAntigo: null,
            imagem: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop',
            avaliacao: 4.6,
            reviews: 89,
            badge: 'maisvendido'
        },
        {
            id: 3,
            nome: 'Coleira Ajustável Reflectiva',
            categoria: 'acessorio',
            preco: 49.90,
            precoAntigo: 69.90,
            imagem: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop',
            avaliacao: 4.9,
            reviews: 203,
            badge: 'promo'
        },
        {
            id: 4,
            nome: 'Shampoo Hipoalergênico 500ml',
            categoria: 'higiene',
            preco: 29.90,
            precoAntigo: null,
            imagem: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=300&fit=crop',
            avaliacao: 4.7,
            reviews: 156,
            badge: null
        },
        {
            id: 5,
            nome: 'Ração Super Premium Filhote',
            categoria: 'racao',
            preco: 159.90,
            precoAntigo: null,
            imagem: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=300&fit=crop',
            avaliacao: 4.9,
            reviews: 312,
            badge: 'maisvendido'
        },
        {
            id: 6,
            nome: 'Cama Ortopédica Memory Foam',
            categoria: 'acessorio',
            preco: 199.90,
            precoAntigo: 249.90,
            imagem: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop',
            avaliacao: 4.8,
            reviews: 78,
            badge: 'promo'
        },
        {
            id: 7,
            nome: 'Bolinha Interativa com LED',
            categoria: 'brinquedo',
            preco: 24.90,
            precoAntigo: null,
            imagem: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=300&fit=crop',
            avaliacao: 4.5,
            reviews: 67,
            badge: 'novo'
        },
        {
            id: 8,
            nome: 'Tapete Higiênico 30un',
            categoria: 'higiene',
            preco: 39.90,
            precoAntigo: null,
            imagem: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&h=300&fit=crop',
            avaliacao: 4.6,
            reviews: 145,
            badge: null
        }
    ];

    // ============================================
    // DADOS DOS DEPOIMENTOS
    // ============================================
    const depoimentos = [
        {
            texto: 'O atendimento do PetAmigo é simplesmente incrível! Minha cachorrinha Luna adora ir lá para o banho e tosa. A equipe é super atenciosa e profissional. Recomendo de olhos fechados!',
            nome: 'Mariana Santos',
            pet: 'Tutora da Luna (Golden Retriever)',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
            estrelas: 5
        },
        {
            texto: 'Levo meu gato Thor para consultas veterinárias há 3 anos. Os veterinários são muito capacitados e o ambiente é super acolhedor. Meu gato, que costumava ter pânico no vet, agora vai tranquilo!',
            nome: 'Carlos Mendes',
            pet: 'Tutor do Thor (Gato Persa)',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop',
            estrelas: 5
        },
        {
            texto: 'A ração que compro aqui é de altíssima qualidade e o preço é muito justo. Além disso, o sistema de entrega é rápido e confiável. PetAmigo virou meu petshop de confiança!',
            nome: 'Fernanda Lima',
            pet: 'Tutora do Max (Bulldog Francês)',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop',
            estrelas: 5
        },
        {
            texto: 'Deixei meu cachorro no hotel quando viajei e fiquei super tranquilo! Recebi fotos todos os dias e ele voltou super feliz. O cuidado e carinho que têm com os pets é notável.',
            nome: 'Ricardo Oliveira',
            pet: 'Tutor do Bob (Labrador)',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop',
            estrelas: 5
        }
    ];

    // ============================================
    // DADOS DOS SERVIÇOS (para modal)
    // ============================================
    const servicosInfo = {
        banho: {
            titulo: 'Banho & Tosa',
            descricao: 'Nosso serviço de banho e tosa inclui banho completo com produtos hipoalergênicos, secagem profissional, tosa na tesoura ou máquina, corte de unhas, limpeza de ouvidos e hidratação de pelagem.',
            itens: [
                { nome: 'Banho Simples', preco: 'R$ 45,00' },
                { nome: 'Banho + Tosa Higiênica', preco: 'R$ 65,00' },
                { nome: 'Banho + Tosa Completa', preco: 'R$ 85,00' },
                { nome: 'Banho + Tosa + Hidratação', preco: 'R$ 110,00' }
            ]
        },
        vet: {
            titulo: 'Consulta Veterinária',
            descricao: 'Atendimento clínico completo com veterinários experientes. Realizamos consultas de rotina, exames, diagnósticos e tratamentos com equipamentos modernos e atualizados.',
            itens: [
                { nome: 'Consulta de Rotina', preco: 'R$ 80,00' },
                { nome: 'Consulta + Exame de Sangue', preco: 'R$ 150,00' },
                { nome: 'Consulta + Ultrassom', preco: 'R$ 200,00' },
                { nome: 'Retorno', preco: 'R$ 50,00' }
            ]
        },
        hotel: {
            titulo: 'Hotel para Pets',
            descricao: 'Hospedagem com conforto e segurança. Cada pet tem seu próprio espaço, alimentação conforme rotina, passeios diários, brincadeiras e envio de fotos para os tutores.',
            itens: [
                { nome: 'Diária Cachorro Pequeno', preco: 'R$ 60,00' },
                { nome: 'Diária Cachorro Médio', preco: 'R$ 75,00' },
                { nome: 'Diária Cachorro Grande', preco: 'R$ 90,00' },
                { nome: 'Diária Gato', preco: 'R$ 55,00' }
            ]
        },
        adestramento: {
            titulo: 'Adestramento',
            descricao: 'Treinamento positivo com adestradores certificados. Trabalhamos obediência básica, socialização, correção de comportamentos e truques para cães de todas as idades.',
            itens: [
                { nome: 'Aula Avulsa (1h)', preco: 'R$ 120,00' },
                { nome: 'Pacote 4 Aulas', preco: 'R$ 400,00' },
                { nome: 'Pacote 8 Aulas', preco: 'R$ 720,00' },
                { nome: 'Avaliação Comportamental', preco: 'R$ 100,00' }
            ]
        },
        vacina: {
            titulo: 'Vacinação',
            descricao: 'Carteira de vacinação completa e atualizada. Trabalhamos com as melhores vacinas do mercado, seguindo rigorosamente o calendário vacinal recomendado pelos órgãos de saúde.',
            itens: [
                { nome: 'V8/V10 Cães', preco: 'R$ 55,00' },
                { nome: 'V3/V4/V5 Gatos', preco: 'R$ 65,00' },
                { nome: 'Raiva (Cão/Gato)', preco: 'R$ 45,00' },
                { nome: 'Gripe Canina', preco: 'R$ 50,00' }
            ]
        },
        spa: {
            titulo: 'Spa Pet',
            descricao: 'Experiência de relaxamento completa para seu pet. Inclui massagem terapêutica, aromaterapia, banho de ofurô, hidratação profunda e cuidados especiais com a pele e pelagem.',
            itens: [
                { nome: 'Spa Relax (1h)', preco: 'R$ 90,00' },
                { nome: 'Spa Premium (2h)', preco: 'R$ 150,00' },
                { nome: 'Massagem Terapêutica', preco: 'R$ 70,00' },
                { nome: 'Hidratação Profunda', preco: 'R$ 55,00' }
            ]
        }
    };

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // ============================================
    // ACTIVE NAV LINK ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink);

    // ============================================
    // PARTICLES ANIMATION
    // ============================================
    const particlesContainer = document.getElementById('particles');
    const colors = ['#FF6B35', '#4ECDC4', '#FFE66D', '#ffffff'];

    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 8 + 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
        particle.style.animationDelay = (Math.random() * 5) + 's';
        particlesContainer.appendChild(particle);
    }

    // ============================================
    // COUNTER ANIMATION
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    function startCounters() {
        if (countersStarted) return;
        const statsSection = document.querySelector('.hero-stats');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            countersStarted = true;
            statNumbers.forEach(num => {
                const target = parseInt(num.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        num.textContent = Math.floor(current).toLocaleString('pt-BR');
                        requestAnimationFrame(updateCounter);
                    } else {
                        num.textContent = target.toLocaleString('pt-BR');
                    }
                };
                updateCounter();
            });
        }
    }
    window.addEventListener('scroll', startCounters);
    startCounters();

    // ============================================
    // RENDER PRODUTOS
    // ============================================
    const produtosGrid = document.getElementById('produtosGrid');
    const filtroBtns = document.querySelectorAll('.filtro-btn');

    function renderProdutos(filtro = 'todos') {
        const produtosFiltrados = filtro === 'todos' 
            ? produtos 
            : produtos.filter(p => p.categoria === filtro);

        produtosGrid.innerHTML = produtosFiltrados.map(produto => {
            const badgeHTML = produto.badge ? `<span class="produto-badge badge-${produto.badge}">${
                produto.badge === 'promo' ? 'Promoção' : 
                produto.badge === 'novo' ? 'Novo' : 'Mais Vendido'
            }</span>` : '';

            const precoAntigoHTML = produto.precoAntigo 
                ? `<span class="preco-antigo">R$ ${produto.precoAntigo.toFixed(2).replace('.', ',')}</span>` 
                : '';

            const estrelas = Array(5).fill(0).map((_, i) => 
                `<i class="fas fa-star${i < Math.floor(produto.avaliacao) ? '' : '-half-alt'}"></i>`
            ).join('');

            return `
                <div class="produto-card" data-categoria="${produto.categoria}">
                    <div style="position:relative;overflow:hidden;border-radius:16px 16px 0 0;">
                        ${badgeHTML}
                        <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img" loading="lazy">
                    </div>
                    <div class="produto-info">
                        <span class="produto-categoria">${produto.categoria === 'racao' ? 'Ração' : produto.categoria === 'brinquedo' ? 'Brinquedo' : produto.categoria === 'acessorio' ? 'Acessório' : 'Higiene'}</span>
                        <h4 class="produto-nome">${produto.nome}</h4>
                        <div class="produto-avaliacao">
                            ${estrelas}
                            <span>(${produto.reviews})</span>
                        </div>
                        <div class="produto-preco">
                            <span class="preco-atual">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                            ${precoAntigoHTML}
                        </div>
                        <button class="produto-btn" onclick="adicionarCarrinho('${produto.nome}')">
                            <i class="fas fa-cart-plus"></i> Adicionar
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        // Animação de entrada
        const cards = produtosGrid.querySelectorAll('.produto-card');
        cards.forEach((card, i) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, i * 80);
        });
    }

    renderProdutos();

    // Filtros
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filtroBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProdutos(this.dataset.filtro);
        });
    });

    // ============================================
    // ADICIONAR AO CARRINHO (simulação)
    // ============================================
    window.adicionarCarrinho = function(nomeProduto) {
        showToast(`"${nomeProduto}" adicionado ao carrinho!`);
    };

    // ============================================
    // RENDER DEPOIMENTOS
    // ============================================
    const depoimentosTrack = document.getElementById('depoimentosTrack');
    const depoDots = document.getElementById('depoDots');
    let currentSlide = 0;

    function renderDepoimentos() {
        depoimentosTrack.innerHTML = depoimentos.map(dep => {
            const estrelas = Array(dep.estrelas).fill('<i class="fas fa-star"></i>').join('');
            return `
                <div class="depoimento-card">
                    <div class="depoimento-inner">
                        <p class="depoimento-texto">${dep.texto}</p>
                        <div class="depoimento-autor">
                            <img src="${dep.avatar}" alt="${dep.nome}" class="depoimento-avatar">
                            <div>
                                <div class="depoimento-nome">${dep.nome}</div>
                                <div class="depoimento-pet">${dep.pet}</div>
                                <div class="depoimento-estrelas">${estrelas}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        depoDots.innerHTML = depoimentos.map((_, i) => 
            `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></button>`
        ).join('');

        document.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', function() {
                goToSlide(parseInt(this.dataset.index));
            });
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        depoimentosTrack.style.transform = `translateX(-${index * 100}%)`;
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    document.getElementById('depoPrev').addEventListener('click', () => {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : depoimentos.length - 1;
        goToSlide(currentSlide);
    });

    document.getElementById('depoNext').addEventListener('click', () => {
        currentSlide = currentSlide < depoimentos.length - 1 ? currentSlide + 1 : 0;
        goToSlide(currentSlide);
    });

    // Auto-play depoimentos
    setInterval(() => {
        currentSlide = currentSlide < depoimentos.length - 1 ? currentSlide + 1 : 0;
        goToSlide(currentSlide);
    }, 5000);

    renderDepoimentos();

    // ============================================
    // SERVIÇOS MODAL
    // ============================================
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');

    document.querySelectorAll('.servico-card').forEach(card => {
        card.addEventListener('click', function() {
            const servicoKey = this.dataset.servico;
            const info = servicosInfo[servicoKey];
            if (!info) return;

            modalContent.innerHTML = `
                <h3><i class="fas fa-paw" style="color:var(--primary);margin-right:10px;"></i>${info.titulo}</h3>
                <p>${info.descricao}</p>
                <h4 style="margin-bottom:12px;color:var(--dark);">Nossos Planos:</h4>
                <ul>
                    ${info.itens.map(item => `<li><span>${item.nome}</span><span>${item.preco}</span></li>`).join('')}
                </ul>
                <a href="#agendar" class="btn btn-primary" style="width:100%;justify-content:center;" onclick="fecharModal()">
                    <i class="fas fa-calendar-check"></i> Agendar Agora
                </a>
            `;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    window.fecharModal = function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', window.fecharModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) window.fecharModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') window.fecharModal();
    });

    // ============================================
    // FORMULÁRIO DE AGENDAMENTO
    // ============================================
    const formAgendamento = document.getElementById('formAgendamento');
    const telefoneInput = document.getElementById('telefone');

    // Máscara de telefone
    telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 6) {
            value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`;
        } else if (value.length > 2) {
            value = `(${value.slice(0,2)}) ${value.slice(2)}`;
        }
        e.target.value = value;
    });

    // Data mínima = hoje
    const dataInput = document.getElementById('data');
    const hoje = new Date().toISOString().split('T')[0];
    dataInput.setAttribute('min', hoje);

    formAgendamento.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(formAgendamento);
        const dados = Object.fromEntries(formData);

        // Simulação de envio
        const btnSubmit = formAgendamento.querySelector('button[type="submit"]');
        const btnOriginal = btnSubmit.innerHTML;
        btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        btnSubmit.disabled = true;

        setTimeout(() => {
            btnSubmit.innerHTML = btnOriginal;
            btnSubmit.disabled = false;
            showToast(`Agendamento enviado! Entraremos em contato em breve, ${dados.nome.split(' ')[0]}!`);
            formAgendamento.reset();
        }, 1500);
    });

    // ============================================
    // TOAST NOTIFICATION
    // ============================================
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    let toastTimeout;

    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // ============================================
    // BACK TO TOP
    // ============================================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ============================================
    // SCROLL REVEAL ANIMATION
    // ============================================
    const revealElements = document.querySelectorAll('.section-header, .servico-card, .produto-card, .depoimento-card, .agendamento-info, .agendamento-form-wrapper');

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ============================================
    // PARALLAX HERO IMAGE
    // ============================================
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroImg.style.transform = `translateY(${scrolled * 0.15}px)`;
            }
        });
    }

    // ============================================
    // SMOOTH SCROLL PARA ÂNCORAS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // PRELOADER (opcional - simples fade in)
    // ============================================
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });

    console.log('🐾 PetAmigo carregado com sucesso!');
});