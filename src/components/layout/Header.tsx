import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // The title is based on the "Component Hierarchy" note for the Header organism:
  // "Displays 'AI QUOTIENT (AIQ) ASSESSMENT' title centrally in bold text."
  // It also matches the "Project Info" name: "AI Quotient (AIQ) Assessment UI".
  const title = "AI QUOTIENT (AIQ) ASSESSMENT";

  return (
    <header
      className={cn(
        // Styling is derived from "Layout Requirements" for the header section:
        // "layout: text-center py-4 bg-black text-primaryText"
        // Using semantic theme colors: bg-background (maps to black) and text-primaryText (maps to white).
        'bg-background text-primaryText py-4 text-center',
        className
      )}
    >
      {/* 
        Text styling for the h1 tag:
        - "bold text" from Component Hierarchy notes.
        - Font size (text-4xl), uppercase, and letter spacing (tracking-wider) are chosen 
          to align with the visual prominence of the title in the provided mockup image.
      */}
      <h1 className="text-4xl font-bold uppercase tracking-wider">
        {title}
      </h1>
      {/*
        Note on additional elements from mockup (Ascendion logo, subtitle "SCREENING AI-FRIENDLY TALENT"):
        These elements are not included in this Header component because its specific requirement
        is solely to display the main title. If these elements are needed, they would typically be 
        handled by a higher-level page template or as separate components composed alongside this Header.
      */}
    </header>
  );
};

export default Header;
