import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-foreground/3 pt-16 pb-8 px-6 relative z-30 w-full border-t border-border-color">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top Section: Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center md:items-start text-center md:text-left pb-10 border-b border-border-color">
          
          {/* Column 1: Social Media Links */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted">Connect With Us</span>
            <div className="flex gap-3">
              <a href="https://facebook.com/jahomes" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass-panel border border-border-color hover:border-amber-500/30 flex items-center justify-center text-foreground hover:text-amber-500 transition-all duration-300" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="https://instagram.com/jahomes" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass-panel border border-border-color hover:border-amber-500/30 flex items-center justify-center text-foreground hover:text-amber-500 transition-all duration-300" aria-label="Instagram">
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/jahomes" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass-panel border border-border-color hover:border-amber-500/30 flex items-center justify-center text-foreground hover:text-amber-500 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Logo Branding */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-2xl font-serif tracking-widest text-gold font-light">JA HOMES</span>
            <span className="text-[9px] font-mono tracking-[0.3em] text-muted uppercase">Luxury Real Estate</span>
            
            <div className="flex gap-4 text-[10px] font-mono uppercase tracking-wider text-muted/80 mt-3">
              <Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
              <Link href="/projects" className="hover:text-amber-500 transition-colors">Projects</Link>
              <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
              <Link href="/book" className="hover:text-amber-500 transition-colors">Booking</Link>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4 items-center md:items-end text-center md:text-right text-xs text-muted">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted">Contact</span>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <span className="text-foreground leading-normal max-w-xs">
                  100 Aspen Heights Drive, Suite A, Aspen, CO 81611
                </span>
                <MapPin size={13} className="text-amber-500 shrink-0" />
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <a href="tel:+18008889999" className="hover:text-amber-500 transition-colors text-foreground">
                  +1 (800) 888-9999
                </a>
                <Phone size={13} className="text-amber-500 shrink-0" />
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <a href="mailto:concierge@jahomes.com" className="hover:text-amber-500 transition-colors text-foreground">
                  concierge@jahomes.com
                </a>
                <Mail size={13} className="text-amber-500 shrink-0" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Compliance */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-muted/50 text-center md:text-left">
          <div className="max-w-2xl leading-relaxed">
            &copy; 2026 JA Homes. All Rights Reserved. Designed for absolute aesthetic visual excellence. Frame sequence captured via Veo AI video generators. All properties are hypothetical demonstrations.
          </div>
          
          {/* MLS & Housing Compliance Badges */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="border border-muted/30 px-2 py-0.5 rounded text-[8px] font-bold tracking-wider">MLS</span>
            <svg className="w-5 h-5 fill-current opacity-50" viewBox="0 0 24 24" aria-hidden="true">
              <title>Equal Housing Opportunity</title>
              <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm5 9H7v-1.5c0-1.66 3.33-2.5 5-2.5s5 .84 5 2.5V17z"/>
            </svg>
          </div>
        </div>

      </div>
    </footer>
  );
}
