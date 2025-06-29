/**
 * Content Loader Utility
 * Handles dynamic loading and rendering of content from data structure
 */

class ContentLoader {
    constructor() {
        this.cache = new Map();
        this.loadingState = new Set();
    }

    /**
     * Load content for a specific tab
     * @param {string} tabName - The name of the tab to load content for
     * @param {HTMLElement} container - The container element to load content into
     */
    async loadTabContent(tabName, container) {
        try {
            // Check if already loading
            if (this.loadingState.has(tabName)) {
                return;
            }

            this.loadingState.add(tabName);

            // Check cache first
            if (this.cache.has(tabName)) {
                this.renderContent(this.cache.get(tabName), container);
                this.loadingState.delete(tabName);
                return;
            }

            // Get data from MarketData
            const data = this.getTabData(tabName);
            if (!data) {
                throw new Error(`No data found for tab: ${tabName}`);
            }

            // Cache the data
            this.cache.set(tabName, data);

            // Render the content
            this.renderContent(data, container);

        } catch (error) {
            console.error(`Error loading content for ${tabName}:`, error);
            this.renderError(container, error.message);
        } finally {
            this.loadingState.delete(tabName);
        }
    }

    /**
     * Get data for a specific tab from MarketData
     * @param {string} tabName - The name of the tab
     * @returns {Object|null} The data for the tab
     */
    getTabData(tabName) {
        if (typeof MarketData === 'undefined') {
            console.error('MarketData not found');
            return null;
        }

        return MarketData[tabName] || null;
    }

    /**
     * Render content in the container
     * @param {Object} data - The data to render
     * @param {HTMLElement} container - The container element
     */
    renderContent(data, container) {
        if (!data || !container) {
            return;
        }

        // Clear existing content
        container.innerHTML = '';

        // Render sections
        if (data.sections && Array.isArray(data.sections)) {
            data.sections.forEach(section => {
                const sectionElement = this.renderSection(section);
                if (sectionElement) {
                    container.appendChild(sectionElement);
                }
            });
        }

        // Initialize accordions after content is rendered
        this.initializeAccordions(container);
    }

    /**
     * Render a section based on its type
     * @param {Object} section - The section data
     * @returns {HTMLElement|null} The rendered section element
     */
    renderSection(section) {
        switch (section.type) {
            case 'content-card':
                return this.renderContentCard(section);
            case 'accordions':
                return this.renderAccordions(section);
            default:
                console.warn(`Unknown section type: ${section.type}`);
                return null;
        }
    }

    /**
     * Render a content card
     * @param {Object} section - The section data
     * @returns {HTMLElement} The content card element
     */
    renderContentCard(section) {
        const card = document.createElement('div');
        card.className = section.cardClass || 'content-card';

        if (section.title) {
            const title = document.createElement('h3');
            title.className = section.titleClass || 'font-bold text-xl mb-3';
            title.innerHTML = this.escapeHtml(section.title);
            card.appendChild(title);
        }

        if (section.content && Array.isArray(section.content)) {
            section.content.forEach(item => {
                const element = this.renderContentItem(item);
                if (element) {
                    card.appendChild(element);
                }
            });
        }

        return card;
    }

    /**
     * Render accordions
     * @param {Object} section - The section data
     * @returns {HTMLElement} The accordions container
     */
    renderAccordions(section) {
        const container = document.createElement('div');
        container.className = 'space-y-4';

        if (section.items && Array.isArray(section.items)) {
            section.items.forEach((item, index) => {
                const accordion = this.renderAccordionItem(item, index);
                if (accordion) {
                    container.appendChild(accordion);
                }
            });
        }

        return container;
    }

    /**
     * Render an accordion item
     * @param {Object} item - The accordion item data
     * @param {number} index - The index of the item
     * @returns {HTMLElement} The accordion element
     */
    renderAccordionItem(item, index) {
        const accordion = document.createElement('div');
        accordion.className = 'accordion-item';

        // Create button
        const button = document.createElement('button');
        button.className = 'accordion-button font-semibold';
        button.innerHTML = `
            <span>${this.escapeHtml(item.title)}</span>
            <span class="accordion-arrow" aria-hidden="true">&#9660;</span>
        `;

        // Create content
        const content = document.createElement('div');
        content.className = 'accordion-content';

        if (item.content && Array.isArray(item.content)) {
            item.content.forEach(contentItem => {
                const element = this.renderContentItem(contentItem);
                if (element) {
                    content.appendChild(element);
                }
            });
        }

        accordion.appendChild(button);
        accordion.appendChild(content);

        return accordion;
    }

    /**
     * Render a content item (paragraph, list, etc.)
     * @param {Object} item - The content item data
     * @returns {HTMLElement|null} The rendered element
     */
    renderContentItem(item) {
        switch (item.type) {
            case 'paragraph':
                return this.renderParagraph(item);
            case 'list':
                return this.renderList(item, 'ul');
            case 'numbered-list':
                return this.renderList(item, 'ol');
            default:
                console.warn(`Unknown content item type: ${item.type}`);
                return null;
        }
    }

    /**
     * Render a paragraph
     * @param {Object} item - The paragraph data
     * @returns {HTMLElement} The paragraph element
     */
    renderParagraph(item) {
        const p = document.createElement('p');
        p.className = item.textClass || 'mb-2';
        
        let text = item.text || '';
        
        // Add citations if present
        if (item.citations && Array.isArray(item.citations)) {
            const citationText = item.citations.map(cite => `[${cite}]`).join(' ');
            text += ` <span class="citation">${citationText}</span>`;
        }
        
        p.innerHTML = text;
        return p;
    }

    /**
     * Render a list (ul or ol)
     * @param {Object} item - The list data
     * @param {string} listType - 'ul' or 'ol'
     * @returns {HTMLElement} The list element
     */
    renderList(item, listType = 'ul') {
        const list = document.createElement(listType);
        list.className = item.listClass || 'list-disc list-inside space-y-1 text-gray-700';
        
        if (listType === 'ol') {
            list.className = 'list-decimal list-inside space-y-3';
        }

        if (item.items && Array.isArray(item.items)) {
            item.items.forEach(listItem => {
                const li = document.createElement('li');
                
                let text = listItem.text || '';
                
                // Add citations if present
                if (listItem.citations && Array.isArray(listItem.citations)) {
                    const citationText = listItem.citations.map(cite => `[${cite}]`).join(' ');
                    text += ` <span class="citation">${citationText}</span>`;
                }
                
                li.innerHTML = text;
                list.appendChild(li);
            });
        }

        return list;
    }

    /**
     * Initialize accordions in the container
     * @param {HTMLElement} container - The container element
     */
    initializeAccordions(container) {
        const accordions = container.querySelectorAll('.accordion-item');
        if (accordions.length > 0 && window.AccordionManager) {
            // Initialize new accordion instances for this container
            new AccordionManager('.accordion-item');
        }
    }

    /**
     * Render error message
     * @param {HTMLElement} container - The container element
     * @param {string} message - The error message
     */
    renderError(container, message) {
        container.innerHTML = `
            <div class="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                <h3 class="font-semibold">Error Loading Content</h3>
                <p>${this.escapeHtml(message)}</p>
            </div>
        `;
    }

    /**
     * Escape HTML to prevent XSS
     * @param {string} text - The text to escape
     * @returns {string} The escaped text
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Clear cache for a specific tab or all tabs
     * @param {string|null} tabName - The tab name to clear, or null for all
     */
    clearCache(tabName = null) {
        if (tabName) {
            this.cache.delete(tabName);
        } else {
            this.cache.clear();
        }
    }

    /**
     * Preload content for all tabs
     */
    async preloadAllContent() {
        if (typeof MarketData === 'undefined') {
            console.warn('MarketData not available for preloading');
            return;
        }

        const tabNames = Object.keys(MarketData);
        const promises = tabNames.map(tabName => {
            const data = this.getTabData(tabName);
            if (data) {
                this.cache.set(tabName, data);
            }
        });

        await Promise.all(promises);
        console.log('Content preloaded for all tabs');
    }
}

// Export for module use or attach to window for global access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContentLoader;
} else {
    window.ContentLoader = ContentLoader;
} 