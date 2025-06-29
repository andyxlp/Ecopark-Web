/**
 * Market Data for Ecopark Education Analysis
 * Contains all content data in a structured format
 */

const MarketData = {
    overview: {
        title: "Market Overview",
        sections: [
            {
                type: "content-card",
                title: "Ecopark Profile & Resident Demographics",
                titleClass: "font-bold text-xl text-blue-800 mb-3",
                content: [
                    {
                        type: "paragraph",
                        text: "Ecopark is not a typical district but a master-planned \"green city\" designed to attract affluent, well-educated families who prioritize a holistic lifestyle. This strategy has cultivated a \"khu đô thị tri thức\" (intellectual urban area) with high disposable income and a profound willingness to invest in premium education.",
                        citations: [2, 344, 3, 4, 345]
                    },
                    {
                        type: "list",
                        items: [
                            {
                                text: "<strong>Affluence Indicator:</strong> Real estate prices range from 1.4 billion VND for apartments to over 40 billion VND for villas, signifying a community with strong financial power.",
                                citations: [134]
                            },
                            {
                                text: "<strong>Family-Oriented:</strong> The community is heavily focused on family well-being, safety, and providing a nature-centric upbringing for children.",
                                citations: [135]
                            }
                        ]
                    }
                ]
            },
            {
                type: "accordions",
                items: [
                    {
                        title: "Parental Demand: The \"Educational Arms Race\"",
                        content: [
                            {
                                type: "paragraph",
                                text: "The high concentration of affluent, achievement-oriented parents has created a hyper-competitive social environment described as an \"educational arms race\".",
                                citations: [152]
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        text: "Parents feel pressured to provide every possible advantage, making supplemental education feel like a necessity, not a luxury.",
                                        citations: [155, 156]
                                    },
                                    {
                                        text: "There is a sophisticated demand for developing \"6 key human development indicators,\" including IQ (intelligence), EQ (emotion), SQ (social), and CQ (creativity).",
                                        citations: [150]
                                    },
                                    {
                                        text: "This fuels demand for providers who offer tangible outcomes and future-ready skills, like Ecorobo's competition training and EVO's integrated tech curriculum.",
                                        citations: [157, 158]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Education Landscape: Two Tiers of Competition",
                        content: [
                            {
                                type: "paragraph",
                                text: "The competitive environment is characterized by two distinct tiers:",
                                citations: [347]
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        text: "<strong>Tier 1 (The \"Ecopark Premium\" Standard):</strong> Dominated by high-fee, prestigious K-12 international and bilingual schools like Edison Schools, Đoàn Thị Điểm Greenfield, and Chadwick International. These institutions set the de facto benchmark for facility quality, branding, and educational philosophy.",
                                        citations: [5, 347, 6, 348]
                                    },
                                    {
                                        text: "<strong>Tier 2 (Saturated After-School Market):</strong> A vibrant but crowded segment of after-school enrichment centers. This area is heavily saturated with English providers (Vicare, Summit, Ocean Edu) and Math tutoring centers (Mathnasium, Anicca Education), creating a distinct opportunity for a differentiated Technology and STEAM specialist.",
                                        citations: [7, 8, 140, 141, 142]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Strategic Context: The Paradox of Success",
                        content: [
                            {
                                type: "paragraph",
                                text: "Ecopark's rapid growth has created a \"paradox of success\": the very factors driving its appeal (growth, amenities) threaten its original brand promise of tranquility, leading to urban challenges like traffic. This creates a key strategic opportunity.",
                                citations: [159, 161, 162]
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        text: "This paradox makes convenience a high-value commodity. Parents in the sprawling urban area are time-poor and seek to minimize travel.",
                                        citations: [196]
                                    },
                                    {
                                        text: "Ecorobo's decentralized, multi-location model directly leverages this by reducing travel time, making it a significant competitive advantage for an after-school service.",
                                        citations: [164, 197, 199]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    ecorobo: {
        title: "Ecorobo Analysis",
        sections: [
            {
                type: "content-card",
                title: "Ecorobo: The Niche Robotics Specialist",
                titleClass: "font-bold text-xl text-blue-800 mb-3",
                content: [
                    {
                        type: "list",
                        items: [
                            {
                                text: "<strong>Business Model:</strong> Operates as a specialized after-school enrichment center (\"CLB Ngoại khóa\"), designed to supplement—not replace—formal schooling with high-demand skills.",
                                citations: [169, 170]
                            },
                            {
                                text: "<strong>Value Proposition: The \"Path to Prestige\"</strong>. Ecorobo markets itself as a training ground for champions, focusing on preparation for prestigious national and international robotics competitions (VEX, WRO). They sell tangible, verifiable achievements that enhance a student's academic profile for university applications.",
                                citations: [204, 16, 175, 29, 202]
                            },
                            {
                                text: "<strong>Target Persona:</strong> The \"Aspiring Competitor Parent\" who views extracurriculars as a means to gain a competitive advantage for their children.",
                                citations: [22, 23]
                            }
                        ]
                    }
                ]
            },
            {
                type: "accordions",
                items: [
                    {
                        title: "Curriculum & Programs",
                        content: [
                            {
                                type: "paragraph",
                                text: "The curriculum is built around globally recognized competitive robotics platforms.",
                                citations: [12]
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        text: "<strong>Platforms:</strong> Primarily VEX (VEX 123, GO, IQ) and LEGO (WeDo 2.0, Mindstorms EV3).",
                                        citations: [12, 356]
                                    },
                                    {
                                        text: "<strong>Tiered Pathway:</strong> A clear progression is offered for distinct age groups. <strong>Ages 4-6:</strong> Focuses on sparking interest with platforms like VEX 123. <strong>Ages 6-10:</strong> Foundational skills using VEX GO and LEGO WeDo 2.0. <strong>Ages 10-15:</strong> Advanced design and competition readiness with VEX IQ and LEGO Mindstorms EV3.",
                                        citations: [13, 173, 174]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Operations & Marketing",
                        content: [
                            {
                                type: "list",
                                items: [
                                    {
                                        text: "<strong>Location Strategy:</strong> A strategic, decentralized dual-location model to maximize convenience. They operate a main teaching center in the Swanlake Onsen complex and a dedicated \"Trung tâm thi đấu\" (Competition Center) in the Thủy Nguyên area. This physical separation signals a serious investment and strategic focus.",
                                        citations: [27, 28, 33, 178]
                                    },
                                    {
                                        text: "<strong>Marketing Channels:</strong> Heavily reliant on local, event-driven activities (\"Ecorobo Robot Day\"), showcasing student success (\"Vinh Danh\" announcements), and powerful word-of-mouth within the Ecopark community.",
                                        citations: [23, 25, 35]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    evo: {
        title: "EVO Eduschool Analysis",
        sections: [
            {
                type: "content-card",
                title: "Methodological Note",
                titleClass: "font-bold text-lg text-amber-800",
                cardClass: "content-card bg-amber-50 border-amber-200",
                content: [
                    {
                        type: "paragraph",
                        text: "The \"EVO Eduschool\" profile is a constructed, representative competitor. It is synthesized from market data to model a credible and formidable K-12 integrated threat, as specified in the analysis. This profile is primarily based on the fee structures of 'eSchool' and the branding of 'EVOL Edu' to ensure a realistic market assessment.",
                        citations: [208, 209, 210, 212, 213, 214],
                        textClass: "text-amber-900"
                    }
                ]
            },
            {
                type: "content-card",
                title: "EVO Eduschool: The Integrated K-12 Powerhouse",
                titleClass: "font-bold text-xl text-green-800 mb-3",
                content: [
                    {
                        type: "list",
                        items: [
                            {
                                text: "<strong>Business Model:</strong> A comprehensive, all-in-one K-12 international/bilingual school providing an end-to-end educational journey. The model is designed to create a powerful \"ecosystem lock-in\" effect.",
                                citations: [211, 217, 256]
                            },
                            {
                                text: "<strong>Value Proposition: The \"All-in-One Solution\" & Consolidated Value.</strong> EVO's proposition is to offer a superior, integrated education that eliminates the need for external enrichment centers. It argues that its single, all-inclusive fee provides a more convenient and cohesive experience for a comparable \"Total Cost of Education\" versus combining a mid-tier school with multiple tutors.",
                                citations: [126, 229, 248, 255]
                            }
                        ]
                    }
                ]
            },
            {
                type: "accordions",
                items: [
                    {
                        title: "Offerings & Financials",
                        content: [
                            {
                                type: "paragraph",
                                text: "EVO would offer a full K-12 curriculum (Pre-1 to Grade 12) combining Vietnamese and international programs. Its core differentiator is the deep integration of technology and creativity into all subjects.",
                                citations: [218, 219]
                            },
                            {
                                type: "paragraph",
                                text: "<strong>High-End Fee Structure (based on eSchool data):</strong>",
                                citations: [223]
                            },
                            {
                                type: "list",
                                items: [
                                    {
                                        text: "<strong>One-time, non-refundable fees:</strong> Approx. 1-3M VND for entry tests, 15M for registration, and 15M for facilities. These high upfront costs create a significant barrier to exit.",
                                        citations: [224, 257]
                                    },
                                    {
                                        text: "<strong>Annual Tuition:</strong> Ranges from ~204M VND/year (Primary, Bilingual) to over 406M VND/year (High School, International).",
                                        citations: [225]
                                    },
                                    {
                                        text: "<strong>Ancillary Fees:</strong> Includes meals (~20-28M/year) and bus services (~14.8M/semester).",
                                        citations: [226, 227]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Strategic Positioning",
                        content: [
                            {
                                type: "list",
                                items: [
                                    {
                                        text: "<strong>\"Destination\" Organization:</strong> Unlike Ecorobo's convenience model, EVO competes as a \"destination\" institution. It must be so excellent that the travel and investment are justified. Its campus is a primary marketing tool.",
                                        citations: [166, 231, 232, 309]
                                    },
                                    {
                                        text: "<strong>Target Audience:</strong> Aims for parents who prefer the prestige and simplicity of a single, integrated solution over a mix-and-match approach.",
                                        citations: [233]
                                    },
                                    {
                                        text: "<strong>Threat to Niche Players:</strong> A key part of EVO's marketing must be to convince parents its integrated program is advanced enough to make specialists like Ecorobo redundant. Each student EVO attracts is a potential customer lost for the entire after-school market.",
                                        citations: [290, 276]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    opportunities: {
        title: "Strategic Opportunities",
        sections: [
            {
                type: "content-card",
                title: "Market Gaps & Opportunities",
                titleClass: "font-bold text-xl text-purple-800 mb-3",
                content: [
                    {
                        type: "paragraph",
                        text: "The analysis reveals several significant and addressable gaps in the Ecopark education market:",
                        citations: [63, 408]
                    },
                    {
                        type: "list",
                        items: [
                            {
                                text: "<strong>Untapped Customer Segments:</strong> There is a \"blue ocean\" opportunity in two key areas. <strong>The Early Years (Ages 3-5):</strong> A dedicated, high-quality, play-based tech program for preschoolers is a clear gap. <strong>The Adult & University Segment (18+):</strong> This market is completely unserved. There are no visible providers of premium, in-person courses in high-demand tech skills (Data Analytics, UI/UX, etc.) for the area's professionals and university students.",
                                citations: [413, 64, 409, 68, 70, 71, 415, 416]
                            },
                            {
                                text: "<strong>Underserved Subject Niches:</strong> A clear gap exists for a curriculum focused on creation and software, including Creative Technology (digital art, game design), advanced Software Development (e.g., Python), and Applied AI.",
                                citations: [72, 417]
                            },
                            {
                                text: "<strong>The \"Premium Plus\" Experience Gap:</strong> An opportunity exists to transcend the transactional classroom model and become a true community hub, offering parent workshops, superior digital communication tools, and family-oriented events.",
                                citations: [77, 79, 422, 425]
                            }
                        ]
                    }
                ]
            },
            {
                type: "content-card",
                title: "Actionable Recommendations for Market Entry",
                titleClass: "font-bold text-xl text-purple-800 mb-3",
                content: [
                    {
                        type: "paragraph",
                        text: "A successful entry requires a multi-pronged strategy that differentiates on curriculum, elevates the customer experience, and deeply integrates with the local community.",
                        citations: [87, 432]
                    },
                    {
                        type: "numbered-list",
                        items: [
                            {
                                text: "<strong>Differentiate with a \"Whole-of-Life\" Technology Curriculum:</strong> Flank, don't confront, Ecorobo. Establish a broader definition of tech education by launching three distinct flagship programs: <strong>\"Tech Tots\" (Ages 3-5):</strong> A play-based program to capture the underserved early-years market. <strong>\"K-12 Tech Creators\":</strong> A broad STEAM curriculum focused on empowering students to be \"creators,\" not just \"competitors.\" <strong>\"Adult Tech Accelerator\":</strong> A suite of high-demand professional courses to tap the unserved adult market and create a new, high-margin revenue stream.",
                                citations: [88, 433, 89, 90, 434, 91, 435, 92, 437, 93, 439, 440]
                            },
                            {
                                text: "<strong>Establish a \"Super-Premium\" Position:</strong> Justify a top-tier price point by delivering superior value beyond the classroom. This includes securing a flagship location, designing an aspirational \"tech company\" interior, hiring instructors with verifiable industry experience, and implementing the \"Premium Plus\" service model with parent-facing digital dashboards for progress tracking.",
                                citations: [96, 441, 97, 98, 99, 100, 101, 442, 443, 444, 445, 446]
                            },
                            {
                                text: "<strong>Win the Community with a Hyper-Local Launch Strategy:</strong> In a tight-knit community like Ecopark, a grassroots approach is essential. Execute a 90-day pre-launch strategy focused on building local trust. Actions include becoming an active member of resident Facebook groups, running free high-quality workshops at community hubs like the EcoSunday market, and forging strategic alliances with K-12 schools by offering to run niche clubs they don't currently provide.",
                                citations: [103, 448, 104, 449, 105, 107, 109, 450, 452, 453, 454, 455]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 