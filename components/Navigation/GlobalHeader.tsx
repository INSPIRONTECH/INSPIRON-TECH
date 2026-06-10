'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquareCode, Menu } from 'lucide-react';
import { RefinedLogo } from '../Branding/RefinedLogo';
import { TerminalDatapad } from './TerminalDatapad';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export const GlobalHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Hide the site nav on the pitch deck — it's a standalone presentation
    if (pathname?.startsWith('/pitch-deck')) return null;

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 nav-glass">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    <Link href="/"><RefinedLogo size={48} /></Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.href} href={link.href}
                                className="font-institutional text-[11px] font-bold uppercase
                           tracking-widest text-gray-400 hover:text-institutional-white transition">
                                {link.label}
                            </Link>
                        ))}

                        {/* HEALTHCARE INSPIRON — flagship product link, visually distinct */}
                        <a
                            href="https://healthcare.inspiron.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-institutional text-[11px] font-bold uppercase tracking-widest transition-colors"
                            style={{ color: '#2DD4BF', borderBottom: '1px solid rgba(45,212,191,0.35)', paddingBottom: '1px' }}
                            title="HEALTHCARE INSPIRON LIS — live product"
                        >
                            Healthcare LIS ↗
                        </a>

                        <a href="https://wa.me/8801719300849"
                            className="flex items-center gap-2 bg-electric-cyan text-deep-navy-black
                         px-6 py-3 rounded-xl font-black uppercase text-[10px]
                         tracking-widest hover:bg-electric-cyan/90 transition haptic-button">
                            <MessageSquareCode size={14} /> Free Consult
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className={`md:hidden w-11 h-11 border border-electric-cyan/30 bg-deep-navy-black/90
                        items-center justify-center haptic-button rounded-lg
                        ${menuOpen ? 'hidden' : 'flex'}`}>
                        <Menu size={20} className="text-electric-cyan" />
                    </button>
                </div>
            </nav>

            <TerminalDatapad open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};
