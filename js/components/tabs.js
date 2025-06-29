/**
 * Tabs Component
 * Handles tab navigation with accessibility support and keyboard navigation
 */

class TabManager {
    constructor(navSelector = '[role="tablist"]', contentSelector = '#tab-content') {
        this.tabNav = document.querySelector(navSelector);
        this.tabContent = document.querySelector(contentSelector);
        this.tabs = [];
        this.panels = [];
        this.currentTab = 0;
        
        this.init();
    }

    init() {
        try {
            if (!this.tabNav || !this.tabContent) {
                throw new Error('Required tab elements not found');
            }

            this.setupTabs();
            this.bindEvents();
            this.showTab(0); // Show first tab by default

        } catch (error) {
            console.error('Error initializing tabs:', error);
            this.showError();
        }
    }

    setupTabs() {
        // Get all tab buttons and panels
        this.tabs = Array.from(this.tabNav.querySelectorAll('.tab-btn'));
        this.panels = Array.from(this.tabContent.querySelectorAll('.tab-panel'));

        if (this.tabs.length === 0 || this.panels.length === 0) {
            throw new Error('No tabs or panels found');
        }

        // Set up ARIA attributes and keyboard navigation
        this.tabs.forEach((tab, index) => {
            // Set up tab attributes
            tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
            tab.setAttribute('role', 'tab');
            
            // Ensure proper IDs and controls
            if (!tab.id) {
                tab.id = `tab-${index}`;
            }
            
            const panelId = tab.getAttribute('aria-controls') || `${tab.dataset.tab}-content`;
            tab.setAttribute('aria-controls', panelId);
        });

        this.panels.forEach((panel, index) => {
            // Set up panel attributes
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('tabindex', '0');
            
            // Ensure proper labelledby relationship
            const tabId = this.tabs[index]?.id || `tab-${index}`;
            panel.setAttribute('aria-labelledby', tabId);
        });
    }

    bindEvents() {
        // Click events
        this.tabNav.addEventListener('click', (e) => {
            const clickedTab = e.target.closest('.tab-btn');
            if (clickedTab) {
                e.preventDefault();
                const tabIndex = this.tabs.indexOf(clickedTab);
                if (tabIndex !== -1) {
                    this.showTab(tabIndex);
                }
            }
        });

        // Keyboard navigation
        this.tabNav.addEventListener('keydown', (e) => this.handleKeyDown(e));

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.tab !== undefined) {
                this.showTab(e.state.tab, false);
            }
        });

        // Handle hash changes for direct linking
        window.addEventListener('hashchange', () => this.handleHashChange());
    }

    handleKeyDown(event) {
        const currentTabIndex = this.tabs.indexOf(document.activeElement);
        
        if (currentTabIndex === -1) return;

        let newTabIndex = currentTabIndex;

        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                newTabIndex = (currentTabIndex + 1) % this.tabs.length;
                break;
                
            case 'ArrowLeft':
            case 'ArrowUp':
                event.preventDefault();
                newTabIndex = currentTabIndex === 0 ? this.tabs.length - 1 : currentTabIndex - 1;
                break;
                
            case 'Home':
                event.preventDefault();
                newTabIndex = 0;
                break;
                
            case 'End':
                event.preventDefault();
                newTabIndex = this.tabs.length - 1;
                break;
                
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.showTab(currentTabIndex);
                return;
                
            default:
                return;
        }

        // Focus and activate new tab
        this.tabs[newTabIndex].focus();
        this.showTab(newTabIndex);
    }

    showTab(index, updateHistory = true) {
        try {
            if (index < 0 || index >= this.tabs.length) {
                console.warn(`Invalid tab index: ${index}`);
                return;
            }

            // Show loading indicator
            this.showLoading();

            // Update tab states
            this.updateTabStates(index);
            
            // Update panel visibility
            this.updatePanelVisibility(index);
            
            // Update browser history
            if (updateHistory) {
                this.updateHistory(index);
            }

            this.currentTab = index;

            // Hide loading indicator
            setTimeout(() => this.hideLoading(), 100);

            // Announce tab change to screen readers
            this.announceTabChange(index);

        } catch (error) {
            console.error('Error showing tab:', error);
            this.hideLoading();
            this.showError();
        }
    }

    updateTabStates(activeIndex) {
        this.tabs.forEach((tab, index) => {
            const isActive = index === activeIndex;
            
            // Update ARIA states
            tab.setAttribute('aria-selected', isActive.toString());
            tab.setAttribute('tabindex', isActive ? '0' : '-1');
            
            // Update visual classes
            if (isActive) {
                tab.classList.remove('tab-inactive');
                tab.classList.add('tab-active');
            } else {
                tab.classList.remove('tab-active');
                tab.classList.add('tab-inactive');
            }
        });
    }

    updatePanelVisibility(activeIndex) {
        this.panels.forEach((panel, index) => {
            if (index === activeIndex) {
                panel.classList.remove('hidden');
                panel.setAttribute('aria-hidden', 'false');
                
                // Trigger fade-in animation
                panel.classList.add('fade-in');
            } else {
                panel.classList.add('hidden');
                panel.setAttribute('aria-hidden', 'true');
                panel.classList.remove('fade-in');
            }
        });
    }

    updateHistory(index) {
        const tab = this.tabs[index];
        const tabId = tab.dataset.tab;
        
        if (tabId) {
            const newUrl = `${window.location.pathname}${window.location.search}#${tabId}`;
            history.pushState({ tab: index }, '', newUrl);
        }
    }

    handleHashChange() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const tabIndex = this.tabs.findIndex(tab => tab.dataset.tab === hash);
            if (tabIndex !== -1) {
                this.showTab(tabIndex, false);
            }
        }
    }

    showLoading() {
        const loadingElement = document.getElementById('loading-indicator');
        if (loadingElement) {
            loadingElement.classList.remove('hidden');
        }
    }

    hideLoading() {
        const loadingElement = document.getElementById('loading-indicator');
        if (loadingElement) {
            loadingElement.classList.add('hidden');
        }
    }

    showError() {
        const errorElement = document.getElementById('error-message');
        if (errorElement) {
            errorElement.classList.remove('hidden');
        }
    }

    announceTabChange(index) {
        const tab = this.tabs[index];
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        
        const tabText = tab.textContent.trim();
        announcement.textContent = `${tabText} tab selected`;
        
        document.body.appendChild(announcement);
        
        // Remove announcement after screen reader has processed it
        setTimeout(() => {
            if (document.body.contains(announcement)) {
                document.body.removeChild(announcement);
            }
        }, 1000);
    }

    // Public methods for programmatic control
    activateTab(index) {
        this.showTab(index);
        this.tabs[index].focus();
    }

    activateTabByName(tabName) {
        const index = this.tabs.findIndex(tab => tab.dataset.tab === tabName);
        if (index !== -1) {
            this.activateTab(index);
        }
    }

    getActiveTab() {
        return this.currentTab;
    }

    getActiveTabName() {
        return this.tabs[this.currentTab]?.dataset.tab;
    }

    // Initialize on hash if present
    initializeFromHash() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const tabIndex = this.tabs.findIndex(tab => tab.dataset.tab === hash);
            if (tabIndex !== -1) {
                this.showTab(tabIndex, false);
                return;
            }
        }
        this.showTab(0, false);
    }
}

// Export for module use or attach to window for global access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TabManager;
} else {
    window.TabManager = TabManager;
} 