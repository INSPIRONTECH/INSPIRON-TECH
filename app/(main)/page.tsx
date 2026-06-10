import React from 'react';
import { InstitutionalHero } from '@/components/InstitutionalHero';
import { Users, Building2, HeadphonesIcon, ArrowRight, MessageSquareCode } from 'lucide-react';
import Link from 'next/link';

/**
 * INSPIRON TECH — Homepage
 * Real content. Plain language. No jargon.
 */

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white selection:bg-electric-cyan selection:text-deep-navy-black">

            {/* HERO */}
            <InstitutionalHero />

            {/* HERO POSITIONING */}
            <section className="py-12 px-5 md:px-8 border-b border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                        At INSPIRON TECH, we implement Manager.io as the core of your financial
                        architecture — we don&apos;t just install software, we architect workflow logic.
                        14+ years IT infrastructure · 10+ years Manager.io · 15+ industries architected ·
                        NBR/VAT-ready reporting (Mushak 6.3) · 20+ active clients · 100+ migrations · 0.1% error tolerance.
                    </p>
                </div>
            </section>

            {/* WHY CHOOSE US — Real reasons, not jargon */}
            <section id="why-us" className="py-24 md:py-32 border-y border-white/5 px-5 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-institutional text-3xl md:text-5xl font-medium text-center uppercase tracking-tight mb-4">
                        Why Businesses Choose Us
                    </h2>
                    <p className="text-gray-500 text-center text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
                        We don&apos;t just install software. We understand your business first, then build the right solution.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative">
                        {/* Mobile Stack Selectors (Brutalist Separation) */}
                        <div className="p-8 md:p-12 bg-white/5 border-2 md:border border-white/10 md:border-white/10 rounded-[32px] md:rounded-[40px] hover:border-action-gold/50 transition-all group">
                            <Users className="text-action-gold mb-6 md:mb-8 group-hover:scale-110 transition" size={40} />
                            <h3 className="font-institutional text-2xl font-bold uppercase mb-4">We Listen First</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                We spend 10–20 hours understanding your workflow, staff capabilities, and real challenges before proposing anything.
                            </p>
                        </div>
                        <div className="p-8 md:p-12 bg-white/5 border-2 md:border border-white/10 md:border-white/10 rounded-[32px] md:rounded-[40px] hover:border-electric-cyan/50 transition-all group">
                            <Building2 className="text-electric-cyan mb-6 md:mb-8 group-hover:scale-110 transition" size={40} />
                            <h3 className="font-institutional text-2xl font-bold uppercase mb-4">Every Industry</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                Aquaculture, footwear groups, trims & printing, GP/bKash distribution, govt tenders, medical devices, cooperatives — if it has a workflow, we&apos;ve architected it on Manager.io.
                            </p>
                        </div>
                        <div className="p-8 md:p-12 bg-white/5 border-2 md:border border-white/10 md:border-white/10 rounded-[32px] md:rounded-[40px] hover:border-white/50 transition-all group">
                            <HeadphonesIcon className="text-institutional-white mb-6 md:mb-8 group-hover:scale-110 transition" size={40} />
                            <h3 className="font-institutional text-2xl font-bold uppercase mb-4">Support That Lasts</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                After delivery, we stay available. Whenever you forget something or face a new situation, we adjust and support again.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES SERVED — Show real breadth */}
            <section className="py-24 px-5 md:px-8 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="font-institutional text-2xl md:text-4xl font-medium uppercase tracking-tight mb-12">
                        Industries We&apos;ve Architected
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'Cattle/Goat Farms (Saad Sayeed Agro)',
                            '30-Pond Aquaculture (Nobin Agro, Gazipur)',
                            'Footwear Manufacturing (Step Shoe Last — First Plastic Shoe Last Manufacturer in Bangladesh)',
                            'Adhesives & Shoe Lasts',
                            'Garments Trims & Labels (SML Subcontractors)',
                            'Document & Commercial Printing (Print Aid)',
                            'GP/bKash Divisional Distributors (Progoti Agency, Barishal)',
                            'Mobile Distributors (Ibrahim Enterprise, Patuakhali/Barguna)',
                            'IVD Medical Devices (HEALTHCARE INSPIRON)',
                            'Govt Tender Contractors (BAUS Builders)',
                            'Leathergoods Manufacturers/Exporters',
                            'Corrugated Steel Dealers',
                            'Garments Buying Houses',
                            'X-PRESS TECHNOLOGIES LTD. (Nationwide ISP)',
                            'Cooperative Societies',
                            'Construction (Roads/Bridges/Buildings)',
                            'INSPIRON TECH (Self)',
                        ].map((industry) => (
                            <span
                                key={industry}
                                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:border-electric-cyan/50 transition"
                            >
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PRODUCTS ─────────────────────────────────────────────── */}
            {/*
             * Opus doctrine: "a product with its own brand deserves its own home.
             * Link to it prominently from inspiron.tech."
             * Frame: LIS is live, ecosystem is the direction — not the claim.
             */}
            <section className="py-24 px-5 md:px-8 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <p className="text-electric-cyan text-xs font-black uppercase tracking-widest mb-4 text-center">
                        Built by INSPIRON TECH
                    </p>
                    <h2 className="font-institutional text-2xl md:text-4xl font-medium uppercase tracking-tight mb-12 text-center">
                        Our Products
                    </h2>

                    {/* HEALTHCARE INSPIRON LIS — single flagship card */}
                    <div className="max-w-3xl mx-auto">
                        <a
                            href="https://healthcare.inspiron.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-10 md:p-12 rounded-[40px] border transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, rgba(45,212,191,0.06) 0%, rgba(4,47,46,0.15) 100%)',
                                borderColor: 'rgba(45,212,191,0.2)',
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(45,212,191,0.5)'; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(45,212,191,0.2)'; }}
                        >
                            {/* Header row */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                                <div>
                                    {/* Live badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-[9px] font-black uppercase tracking-[0.18em] border"
                                        style={{ borderColor: 'rgba(57,211,83,0.3)', background: 'rgba(57,211,83,0.08)', color: '#39d353' }}>
                                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#39d353' }} />
                                        Live Now
                                    </div>
                                    <h3 className="font-institutional text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2" style={{ color: '#2DD4BF' }}>
                                        HEALTHCARE INSPIRON
                                    </h3>
                                    <p className="text-sm font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
                                        Laboratory Information System
                                    </p>
                                </div>
                                <span className="shrink-0 self-start flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-colors"
                                    style={{ color: '#2DD4BF' }}>
                                    See the live system ↗
                                </span>
                            </div>

                            {/* Origin + current narrative */}
                            <p className="text-gray-300 text-sm leading-relaxed font-light mb-6">
                                Six years running an IVD medical device distribution business — installing 100+ analyzers,
                                watching labs struggle with manual registers and disconnected machines — built the domain
                                knowledge that became this system.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed font-light mb-8">
                                <strong className="text-institutional-white">HEALTHCARE INSPIRON starts with a Laboratory Information System</strong>{' '}
                                and is being built into Bangladesh&apos;s connected diagnostic platform — from a single-room
                                upazila clinic to a multi-partner diagnostic centre.
                            </p>

                            {/* 4 moats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {[
                                    { label: '5-min Mindray\nintegration', color: '#39d353' },
                                    { label: 'Bilingual\nA4 reports', color: '#2DD4BF' },
                                    { label: 'Built for\nDGHS SHR', color: '#2DD4BF' },
                                    { label: 'Claude AI\nsafety layer*', color: '#F59E0B' },
                                ].map((m, i) => (
                                    <div key={i} className="p-4 rounded-2xl text-center border"
                                        style={{ background: `${m.color}08`, borderColor: `${m.color}20` }}>
                                        <p className="text-[10px] font-bold uppercase tracking-wider leading-tight whitespace-pre-line"
                                            style={{ color: m.color }}>
                                            {m.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-[10px] text-gray-600 mb-6">
                                * Claude AI safety layer in development — not yet deployed clinically.
                                DGHS SHR submission pipeline being built — not yet live.
                                &ldquo;We&apos;re live and looking for our first labs to build alongside.&rdquo;
                            </p>

                            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest"
                                style={{ color: '#2DD4BF' }}>
                                healthcare.inspiron.tech
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF — Real, verifiable */}

            <section className="py-24 px-5 md:px-8 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        <div>
                            <div className="text-5xl font-black text-action-gold mb-2">14+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Years IT Infrastructure (Since 2011)</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-electric-cyan mb-2">10+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Years on Manager.io</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-institutional-white mb-2">15+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Industries Architected</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-action-gold mb-2">100+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">
                                Migrations · 0.1% Error Tolerance
                            </p>
                        </div>
                    </div>

                    {/* HERO POSITIONING - THE ARSENAL QUOTE */}
                    <blockquote className="text-xl md:text-2xl text-gray-300 italic font-light leading-relaxed max-w-3xl mx-auto mb-6 [&>br]:leading-6">
                        &ldquo;I am not selling software — I architect logic for any kind of workflow.
                        <br /><br />
                        Manager.io discovered inside X-Press Technologies — ISP billing reconciliation breaking between customers and payment gateways. Took responsibility for Accounts, learned Mushak compliance hands-on, never looked back.
                        <br /><br />
                        Cattle/goat farms like <strong>Saad Sayeed Agro</strong>.
                        30-pond aquaculture — <strong>Nobin Agro, Gazipur</strong>.
                        <strong>Step Shoe Last</strong>: first plastic shoe last manufacturer in Bangladesh — architected from 4 years inside.
                        <strong>HEALTHCARE INSPIRON</strong>: 6 years running IVD medical distribution.
                        <br /><br />
                        <strong>Bring me any model I have not seen yet.</strong>&rdquo;
                    </blockquote>
                    <p className="text-action-gold font-black uppercase tracking-widest text-xs">
                        — MD ABU HASAN · Founder & Chief Architect, INSPIRON TECH
                    </p>
                    <p className="text-gray-600 text-xs mt-4">
                        Active on{" "}
                        <a href="https://forum.manager.io/u/abu_hasan" target="_blank" rel="noopener noreferrer"
                            className="text-electric-cyan hover:underline">
                            Manager.io Community Forum ↗
                        </a>
                        {" "}— helping agro farms, distributors, contractors &amp; more solve complex workflows globally.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-5 md:px-8 bg-gradient-to-t from-electric-cyan/[0.03] to-transparent">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-institutional text-3xl md:text-5xl font-medium uppercase tracking-tight mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 font-light">
                        Every project starts with a free conversation. Tell us about your business and we&apos;ll show you what&apos;s possible.
                    </p>
                    <a
                        href="/architect"
                        className="inline-flex items-center gap-3 gold-racer haptic-button px-12 py-6 rounded-2xl uppercase tracking-widest text-sm shadow-2xl"
                    >
                        <MessageSquareCode size={22} /> Deploy Your Architecture
                    </a>
                </div>
            </section>

        </div>
    );
}
