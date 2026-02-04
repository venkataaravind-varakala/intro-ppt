const sections = document.querySelectorAll('section');
        const navContainer = document.querySelector('.nav-dots');

        // Create dots dynamically
        sections.forEach((section, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            
            // Click to scroll
            dot.addEventListener('click', () => {
                section.scrollIntoView({ behavior: 'smooth' });
            });
            
            navContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                // Offset for triggering
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            dots.forEach(dot => {
                dot.classList.remove('active');
                // Simple check based on index (assuming 1:1 mapping)
                // A more robust way is matching IDs, but index works for linear slides
            });
            
            // Re-highlight based on scroll position index
            const index = Array.from(sections).findIndex(s => s.id === current);
            if(index >= 0 && dots[index]) {
                dots.forEach(d => d.classList.remove('active'));
                dots[index].classList.add('active');
            }
        });