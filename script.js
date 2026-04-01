
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
  // 1. Skills Section ka logic
const skillsOptions = {
    threshold: 0.3 
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                // Width reset kar ke apply karein taake animation trigger ho
                bar.style.width = '0';
                setTimeout(() => {
                    const targetWidth = bar.style.getPropertyValue('--target-width');
                    bar.style.width = targetWidth;
                }, 100);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, skillsOptions);

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}
// Page load hote hi Home section ko animate karne ke liye
window.addEventListener('load', () => {
    const homeSection = document.querySelector('#home');
    if (homeSection) {
        // 300ms ka delay taake user ko page nazar aaye phir animation chale
        setTimeout(() => {
            homeSection.classList.remove('opacity-0', 'translate-y-10');
            homeSection.classList.add('opacity-100', 'translate-y-0');
        }, 300);
    }
});
const sectionRevealOptions = {
    threshold: 0.15 
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
        }
    });
}, sectionRevealOptions);

document.querySelectorAll('.reveal-section').forEach(section => {
    sectionObserver.observe(section);
});
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Buttons par hover effect
document.querySelectorAll('a, button').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('cursor-grow'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
});
window.addEventListener('scroll', () => {
    // 1. Check karein ke user ne kitna scroll kiya hai
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // 2. Total height nikaalein (poore page ki height minus screen ki height)
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // 3. Percentage calculate karein
    const scrolled = (winScroll / height) * 100;
    
    // 4. Bar ki width update karein
    const progressContainer = document.getElementById("scroll-progress");
    if (progressContainer) {
        progressContainer.style.width = scrolled + "%";
    }
});
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
});