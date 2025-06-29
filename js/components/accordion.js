/**
 * Accordion Component
 * Handles collapsible content sections with accessibility support
 */

class AccordionManager {
    constructor(containerSelector = '.accordion-item') {
        this.accordions = document.querySelectorAll(containerSelector);
        this.init();
    }

    init() {
        try {
            this.accordions.forEach((accordion, index) => {
                this.setupAccordion(accordion, index);
            });
        } catch (error) {
            console.error('Error initializing accordions:', error);
            this.showError();
        }
    }

    setupAccordion(accordion, index) {
        const button = accordion.querySelector('.accordion-button');
        const content = accordion.querySelector('.accordion-content');
        
        if (!button || !content) {
            console.warn(`Accordion ${index}: Missing required elements`);
            return;
        }

        // Set up ARIA attributes for accessibility
        const contentId = `accordion-content-${index}`;
        const buttonId = `accordion-button-${index}`;
        
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', contentId);
        button.setAttribute('id', buttonId);
        
        content.setAttribute('id', contentId);
        content.setAttribute('aria-labelledby', buttonId);
        content.setAttribute('role', 'region');

        // Add keyboard support
        button.addEventListener('click', (e) => this.toggle(button, content, e));
        button.addEventListener('keydown', (e) => this.handleKeydown(button, content, e));

        // Add focus management
        button.addEventListener('focus', () => this.handleFocus(button));
        button.addEventListener('blur', () => this.handleBlur(button));
    }

    toggle(button, content, event) {
        event.preventDefault();
        
        try {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;

            // Update ARIA state
            button.setAttribute('aria-expanded', newState.toString());
            
            // Toggle visual state
            button.classList.toggle('active', newState);
            
            // Animate content
            if (newState) {
                this.showContent(content);
            } else {
                this.hideContent(content);
            }

            // Announce state change to screen readers
            this.announceStateChange(button, newState);

        } catch (error) {
            console.error('Error toggling accordion:', error);
        }
    }

    handleKeydown(button, content, event) {
        // Handle Enter and Space keys
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.toggle(button, content, event);
        }
        
        // Handle Escape key to close if open
        if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            this.toggle(button, content, event);
        }
    }

    handleFocus(button) {
        button.classList.add('focus-visible');
    }

    handleBlur(button) {
        button.classList.remove('focus-visible');
    }

    showContent(content) {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            content.style.display = 'block';
            content.classList.add('show');
        } else {
            content.style.display = 'block';
            content.classList.add('show');
            
            // Trigger reflow for smooth animation
            void content.offsetHeight;
        }
    }

    hideContent(content) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            content.style.display = 'none';
            content.classList.remove('show');
        } else {
            content.classList.remove('show');
            
            // Use timeout to allow animation to complete
            setTimeout(() => {
                if (!content.classList.contains('show')) {
                    content.style.display = 'none';
                }
            }, 300);
        }
    }

    announceStateChange(button, isExpanded) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        
        const buttonText = button.querySelector('span')?.textContent || 'Section';
        announcement.textContent = `${buttonText} ${isExpanded ? 'expanded' : 'collapsed'}`;
        
        document.body.appendChild(announcement);
        
        // Remove announcement after screen reader has processed it
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    showError() {
        const errorElement = document.getElementById('error-message');
        if (errorElement) {
            errorElement.classList.remove('hidden');
        }
    }

    // Public method to programmatically expand/collapse accordions
    expandAccordion(index) {
        const accordion = this.accordions[index];
        if (accordion) {
            const button = accordion.querySelector('.accordion-button');
            const content = accordion.querySelector('.accordion-content');
            
            if (button && content && button.getAttribute('aria-expanded') === 'false') {
                this.toggle(button, content, new Event('click'));
            }
        }
    }

    collapseAccordion(index) {
        const accordion = this.accordions[index];
        if (accordion) {
            const button = accordion.querySelector('.accordion-button');
            const content = accordion.querySelector('.accordion-content');
            
            if (button && content && button.getAttribute('aria-expanded') === 'true') {
                this.toggle(button, content, new Event('click'));
            }
        }
    }

    // Public method to expand all accordions
    expandAll() {
        this.accordions.forEach((_, index) => this.expandAccordion(index));
    }

    // Public method to collapse all accordions
    collapseAll() {
        this.accordions.forEach((_, index) => this.collapseAccordion(index));
    }
}

// Export for module use or attach to window for global access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AccordionManager;
} else {
    window.AccordionManager = AccordionManager;
} 