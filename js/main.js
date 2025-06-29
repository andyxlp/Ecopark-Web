/**
 * Main Application Script
 * Initializes all components and handles application startup
 */

// Application state
const App = {
    tabManager: null,
    accordionManager: null,
    contentLoader: null,
    initialized: false
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    try {
        console.log('Initializing Ecopark Education Market Analysis...');

        // Initialize content loader
        if (window.ContentLoader) {
            App.contentLoader = new ContentLoader();
        }

        // Initialize tab manager
        if (window.TabManager) {
            App.tabManager = new TabManager();
            
            // Load initial content for all tabs
            loadInitialContent();
        }

        // Initialize accordion manager
        if (window.AccordionManager) {
            // Wait a bit for content to load, then initialize accordions
            setTimeout(() => {
                App.accordionManager = new AccordionManager();
            }, 100);
        }

        // Set up error handling
        setupErrorHandling();

        // Set up accessibility enhancements
        setupAccessibilityEnhancements();

        App.initialized = true;
        console.log('Application initialized successfully');

    } catch (error) {
        console.error('Error initializing application:', error);
        showInitializationError();
    }
}

/**
 * Load initial content for all tabs
 */
function loadInitialContent() {
    const tabs = ['overview', 'ecorobo', 'evo', 'opportunities'];
    
    tabs.forEach(tabName => {
        const container = document.getElementById(`${tabName}-content`);
        if (container) {
            loadTabContent(tabName, container);
        }
    });
}

/**
 * Load content for a specific tab
 */
function loadTabContent(tabName, container) {
    // For now, we'll include the original content directly
    switch (tabName) {
        case 'overview':
            loadOverviewContent(container);
            break;
        case 'ecorobo':
            loadEcoroboContent(container);
            break;
        case 'evo':
            loadEvoContent(container);
            break;
        case 'opportunities':
            loadOpportunitiesContent(container);
            break;
        default:
            container.innerHTML = '<p>Content not found</p>';
    }
}

/**
 * Load overview content
 */
function loadOverviewContent(container) {
    container.innerHTML = `
        <div class="content-card">
            <h3 class="font-bold text-xl text-blue-800 mb-3">Ecopark Profile & Resident Demographics</h3>
            <p class="mb-2">Ecopark is not a typical district but a master-planned "green city" designed to attract affluent, well-educated families who prioritize a holistic lifestyle. This strategy has cultivated a "khu đô thị tri thức" (intellectual urban area) with high disposable income and a profound willingness to invest in premium education.</p>
            <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>Affluence Indicator:</strong> Real estate prices range from 1.4 billion VND for apartments to over 40 billion VND for villas, signifying a community with strong financial power.</li>
                <li><strong>Family-Oriented:</strong> The community is heavily focused on family well-being, safety, and providing a nature-centric upbringing for children.</li>
            </ul>
        </div>
        <div class="space-y-4">
            <div class="accordion-item">
                <button class="accordion-button font-semibold">
                    <span>Parental Demand: The "Educational Arms Race"</span>
                    <span class="accordion-arrow">&#9660;</span>
                </button>
                <div class="accordion-content">
                    <p>The high concentration of affluent, achievement-oriented parents has created a hyper-competitive social environment described as an "educational arms race".</p>
                    <ul class="mt-2 list-disc list-inside space-y-1">
                        <li>Parents feel pressured to provide every possible advantage, making supplemental education feel like a necessity, not a luxury.</li>
                        <li>There is a sophisticated demand for developing "6 key human development indicators," including IQ (intelligence), EQ (emotion), SQ (social), and CQ (creativity).</li>
                        <li>This fuels demand for providers who offer tangible outcomes and future-ready skills, like Ecorobo's competition training and EVO's integrated tech curriculum.</li>
                    </ul>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-button font-semibold">
                    <span>Education Landscape: Two Tiers of Competition</span>
                    <span class="accordion-arrow">&#9660;</span>
                </button>
                <div class="accordion-content">
                    <p>The competitive environment is characterized by two distinct tiers:</p>
                    <ul class="mt-2 list-disc list-inside space-y-2">
                        <li><strong>Tier 1 (The "Ecopark Premium" Standard):</strong> Dominated by high-fee, prestigious K-12 international and bilingual schools like Edison Schools, Đoàn Thị Điểm Greenfield, and Chadwick International. These institutions set the de facto benchmark for facility quality, branding, and educational philosophy.</li>
                        <li><strong>Tier 2 (Saturated After-School Market):</strong> A vibrant but crowded segment of after-school enrichment centers. This area is heavily saturated with English providers (Vicare, Summit, Ocean Edu) and Math tutoring centers (Mathnasium, Anicca Education), creating a distinct opportunity for a differentiated Technology and STEAM specialist.</li>
                    </ul>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-button font-semibold">
                    <span>Strategic Context: The Paradox of Success</span>
                    <span class="accordion-arrow">&#9660;</span>
                </button>
                <div class="accordion-content">
                    <p>Ecopark's rapid growth has created a "paradox of success": the very factors driving its appeal (growth, amenities) threaten its original brand promise of tranquility, leading to urban challenges like traffic. This creates a key strategic opportunity.</p>
                    <ul class="mt-2 list-disc list-inside space-y-1">
                        <li>This paradox makes convenience a high-value commodity. Parents in the sprawling urban area are time-poor and seek to minimize travel.</li>
                        <li>Ecorobo's decentralized, multi-location model directly leverages this by reducing travel time, making it a significant competitive advantage for an after-school service.</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

/**
 * Load ecorobo content
 */
function loadEcoroboContent(container) {
    container.innerHTML = `
        <div class="content-card">
            <h3 class="font-bold text-xl text-blue-800 mb-3">Ecorobo: The Niche Robotics Specialist</h3>
            <ul class="list-disc list-inside space-y-2">
                <li><strong>Business Model:</strong> Operates as a specialized after-school enrichment center ("CLB Ngoại khóa"), designed to supplement—not replace—formal schooling with high-demand skills.</li>
                <li><strong>Value Proposition: The "Path to Prestige"</strong>. Ecorobo markets itself as a training ground for champions, focusing on preparation for prestigious national and international robotics competitions (VEX, WRO). They sell tangible, verifiable achievements that enhance a student's academic profile for university applications.</li>
                <li><strong>Target Persona:</strong> The "Aspiring Competitor Parent" who views extracurriculars as a means to gain a competitive advantage for their children.</li>
            </ul>
        </div>
        <div class="space-y-4">
            <div class="accordion-item">
                <button class="accordion-button font-semibold">
                    <span>Curriculum & Programs</span>
                    <span class="accordion-arrow">&#9660;</span>
                </button>
                <div class="accordion-content">
                    <p>The curriculum is built around globally recognized competitive robotics platforms.</p>
                    <ul class="mt-2 list-disc list-inside space-y-1">
                        <li><strong>Platforms:</strong> Primarily VEX (VEX 123, GO, IQ) and LEGO (WeDo 2.0, Mindstorms EV3).</li>
                        <li><strong>Tiered Pathway:</strong> A clear progression is offered for distinct age groups:
                            <ul class="list-['-_'] list-inside ml-4">
                                <li><strong>Ages 4-6:</strong> Focuses on sparking interest with platforms like VEX 123.</li>
                                <li><strong>Ages 6-10:</strong> Foundational skills using VEX GO and LEGO WeDo 2.0.</li>
                                <li><strong>Ages 10-15:</strong> Advanced design and competition readiness with VEX IQ and LEGO Mindstorms EV3.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-button font-semibold">
                    <span>Operations & Marketing</span>
                    <span class="accordion-arrow">&#9660;</span>
                </button>
                <div class="accordion-content">
                    <ul class="list-disc list-inside space-y-2">
                        <li><strong>Location Strategy:</strong> A strategic, decentralized dual-location model to maximize convenience. They operate a main teaching center in the Swanlake Onsen complex and a dedicated "Trung tâm thi đấu" (Competition Center) in the Thủy Nguyên area. This physical separation signals a serious investment and strategic focus.</li>
                        <li><strong>Marketing Channels:</strong> Heavily reliant on local, event-driven activities ("Ecorobo Robot Day"), showcasing student success ("Vinh Danh" announcements), and powerful word-of-mouth within the Ecopark community.</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

/**
 * Load EVO content
 */
function loadEvoContent(container) {
    container.innerHTML = `
        <div class="content-card bg-amber-50 border-amber-200">
            <h3 class="font-bold text-lg text-amber-800">Methodological Note</h3>
            <p class="text-amber-900">The "EVO Eduschool" profile is a constructed, representative competitor. It is synthesized from market data to model a credible and formidable K-12 integrated threat, as specified in the analysis. This profile is primarily based on the fee structures of 'eSchool' and the branding of 'EVOL Edu' to ensure a realistic market assessment.</p>
        </div>
        <div class="content-card">
            <h3 class="font-bold text-xl text-green-800 mb-3">EVO Eduschool: The Integrated K-12 Powerhouse</h3>
            <ul class="list-disc list-inside space-y-2">
                <li><strong>Business Model:</strong> A comprehensive, all-in-one K-12 international/bilingual school providing an end-to-end educational journey. The model is designed to create a powerful "ecosystem lock-in" effect.</li>
                <li><strong>Value Proposition: The "All-in-One Solution" & Consolidated Value.</strong> EVO's proposition is to offer a superior, integrated education that eliminates the need for external enrichment centers. It argues that its single, all-inclusive fee provides a more convenient and cohesive experience for a comparable "Total Cost of Education" versus combining a mid-tier school with multiple tutors.</li>
            </ul>
        </div>
        <div class="space-y-4">
            <div class="accordion-item">
                <button class="accordion-button font-semibold">
                    <span>Offerings & Financials</span>
                    <span class="accordion-arrow">&#9660;</span>
                </button>
                <div class="accordion-content">
                    <p class="mb-2">EVO would offer a full K-12 curriculum (Pre-1 to Grade 12) combining Vietnamese and international programs. Its core differentiator is the deep integration of technology and creativity into all subjects.</p>
                    <p class="font-semibold">High-End Fee Structure (based on eSchool data):</p>
                    <ul class="mt-2 list-disc list-inside space-y-1">
                        <li><strong>One-time, non-refundable fees:</strong> Approx. 1-3M VND for entry tests, 15M for registration, and 15M for facilities. These high upfront costs create a significant barrier to exit.</li>
                        <li><strong>Annual Tuition:</strong> Ranges from ~204M VND/year (Primary, Bilingual) to over 406M VND/year (High School, International).</li>
                        <li><strong>Ancillary Fees:</strong> Includes meals (~20-28M/year) and bus services (~14.8M/semester).</li>
                    </ul>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-button font-semibold">
                    <span>Strategic Positioning</span>
                    <span class="accordion-arrow">&#9660;</span>
                </button>
                <div class="accordion-content">
                    <ul class="list-disc list-inside space-y-2">
                        <li><strong>"Destination" Organization:</strong> Unlike Ecorobo's convenience model, EVO competes as a "destination" institution. It must be so excellent that the travel and investment are justified. Its campus is a primary marketing tool.</li>
                        <li><strong>Target Audience:</strong> Aims for parents who prefer the prestige and simplicity of a single, integrated solution over a mix-and-match approach.</li>
                        <li><strong>Threat to Niche Players:</strong> A key part of EVO's marketing must be to convince parents its integrated program is advanced enough to make specialists like Ecorobo redundant. Each student EVO attracts is a potential customer lost for the entire after-school market.</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

/**
 * Load opportunities content
 */
function loadOpportunitiesContent(container) {
    container.innerHTML = `
        <div class="content-card">
            <h3 class="font-bold text-xl text-purple-800 mb-3">Market Gaps & Opportunities</h3>
            <p>The analysis reveals several significant and addressable gaps in the Ecopark education market:</p>
            <ul class="mt-2 list-disc list-inside space-y-2">
                <li><strong>Untapped Customer Segments:</strong> There is a "blue ocean" opportunity in two key areas:
                    <ul class="list-['-_'] list-inside ml-4">
                        <li><strong>The Early Years (Ages 3-5):</strong> A dedicated, high-quality, play-based tech program for preschoolers is a clear gap.</li>
                        <li><strong>The Adult & University Segment (18+):</strong> This market is completely unserved. There are no visible providers of premium, in-person courses in high-demand tech skills (Data Analytics, UI/UX, etc.) for the area's professionals and university students.</li>
                    </ul>
                </li>
                <li><strong>Underserved Subject Niches:</strong> A clear gap exists for a curriculum focused on creation and software, including Creative Technology (digital art, game design), advanced Software Development (e.g., Python), and Applied AI.</li>
                <li><strong>The "Premium Plus" Experience Gap:</strong> An opportunity exists to transcend the transactional classroom model and become a true community hub, offering parent workshops, superior digital communication tools, and family-oriented events.</li>
            </ul>
        </div>
        <div class="content-card">
            <h3 class="font-bold text-xl text-purple-800 mb-3">Actionable Recommendations for Market Entry</h3>
            <p>A successful entry requires a multi-pronged strategy that differentiates on curriculum, elevates the customer experience, and deeply integrates with the local community.</p>
            <ol class="mt-2 list-decimal list-inside space-y-3">
                <li><strong>Differentiate with a "Whole-of-Life" Technology Curriculum:</strong> Flank, don't confront, Ecorobo. Establish a broader definition of tech education by launching three distinct flagship programs:
                    <ul class="list-['-_'] list-inside ml-4">
                        <li><strong>"Tech Tots" (Ages 3-5):</strong> A play-based program to capture the underserved early-years market.</li>
                        <li><strong>"K-12 Tech Creators":</strong> A broad STEAM curriculum focused on empowering students to be "creators," not just "competitors."</li>
                        <li><strong>"Adult Tech Accelerator":</strong> A suite of high-demand professional courses to tap the unserved adult market and create a new, high-margin revenue stream.</li>
                    </ul>
                </li>
                <li><strong>Establish a "Super-Premium" Position:</strong> Justify a top-tier price point by delivering superior value beyond the classroom. This includes securing a flagship location, designing an aspirational "tech company" interior, hiring instructors with verifiable industry experience, and implementing the "Premium Plus" service model with parent-facing digital dashboards for progress tracking.</li>
                <li><strong>Win the Community with a Hyper-Local Launch Strategy:</strong> In a tight-knit community like Ecopark, a grassroots approach is essential. Execute a 90-day pre-launch strategy focused on building local trust. Actions include becoming an active member of resident Facebook groups, running free high-quality workshops at community hubs like the EcoSunday market, and forging strategic alliances with K-12 schools by offering to run niche clubs they don't currently provide.</li>
            </ol>
        </div>
    `;
}

/**
 * Set up global error handling
 */
function setupErrorHandling() {
    window.addEventListener('error', function(event) {
        console.error('Global error:', event.error);
        // Could send to analytics or error reporting service
    });

    window.addEventListener('unhandledrejection', function(event) {
        console.error('Unhandled promise rejection:', event.reason);
        // Could send to analytics or error reporting service
    });
}

/**
 * Set up accessibility enhancements
 */
function setupAccessibilityEnhancements() {
    // Add skip links functionality
    const skipLink = document.querySelector('a[href="#main-content"]');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById('main-content');
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Add high contrast mode detection
    if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }

    // Add reduced motion detection
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
}

/**
 * Show initialization error
 */
function showInitializationError() {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.classList.remove('hidden');
        errorElement.innerHTML = `
            <h3 class="font-semibold">Application Failed to Initialize</h3>
            <p>Please refresh the page and try again. If the problem persists, please contact support.</p>
        `;
    }
}

// Export App object for debugging
window.App = App; 