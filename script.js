
        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    
    const textElement = document.getElementById('typing-text');
    const words = ["Full-stack-Developer", "Software Engineer", "Creative Coder"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
            typeSpeed = 150; // Mitate waqt thora fast
        } else {
            charIndex++;
            typeSpeed = 200; // Likhte waqt normal speed
        }

        textElement.textContent = currentWord.substring(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 1000; // Poora word likhne ke baad 2 second ruke
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    document.addEventListener('DOMContentLoaded', type);

        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                    
                    // Update active link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
       

function toggleProjects() {
    const extraProjects = document.querySelectorAll('.extra-project');
    const githubLink = document.getElementById('github-link');
    const btn = document.getElementById('view-btn');
    
    // Check karein ke pehla extra project hidden hai ya nahi
    const areCurrentlyHidden = extraProjects[0].classList.contains('hidden');

    if (areCurrentlyHidden) {
        // Projects show karein
        extraProjects.forEach(p => p.classList.remove('hidden'));
        githubLink.classList.remove('hidden');
        // Button text update
        btn.innerHTML = 'Show Less <i class="fas fa-chevron-up ml-2"></i>';
    } else {
        // Projects wapas chupayein
        extraProjects.forEach(p => p.classList.add('hidden'));
        githubLink.classList.add('hidden');
        // Button text update
        btn.innerHTML = 'View All Projects <i class="fas fa-chevron-down ml-2"></i>';
    }
}

        // Update active link on scroll
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
            
            // Show/hide back to top button
            const backToTopButton = document.getElementById('back-to-top');
            if (scrollPosition > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
        
        // Back to top button
        document.getElementById('back-to-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animate skill bars on scroll
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            const skillsSection = document.getElementById('skills');
            const skillsSectionTop = skillsSection.offsetTop;
            const windowHeight = window.innerHeight;
            
            if (window.scrollY > skillsSectionTop - windowHeight + 200) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                
                // Remove event listener after animation
                window.removeEventListener('scroll', animateSkillBars);
            }
        };
        
        window.addEventListener('scroll', animateSkillBars);
    