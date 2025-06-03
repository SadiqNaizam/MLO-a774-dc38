import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import QuestionList from '@/components/AssessmentPage/QuestionList';
import CommentsField from '@/components/AssessmentPage/CommentsField';
import { cn } from '@/lib/utils';

const AssessmentPage: React.FC = () => {
  const [comments, setComments] = useState<string>("");

  return (
    <div 
      className={cn(
        "flex flex-col items-center min-h-screen bg-background text-foreground",
        "px-6 py-4" // Overall layout: type "Flex", definition "flex-col items-center px-6 py-4"
      )}
    >
      {/* Header section */}
      {/* Layout Requirements for header: "text-center py-4 bg-black text-primaryText" */}
      {/* The Header component's internal styling ('bg-background text-primaryText py-4 text-center') */}
      {/* aligns with these requirements, as bg-background is black and text-primaryText is white. */}
      <Header className="w-full" /> {/* w-full ensures Header spans the available width within the parent's px-6 padding */}

      {/* Main content section for QuestionList */}
      {/* Layout Requirements for mainContent: "layout": "flex flex-col gap-4 bg-surface p-6" */}
      <main 
        className={cn(
          "w-full max-w-6xl my-6 rounded-md shadow-lg", // Constrains content width, adds vertical margin, and card-like styling
          "flex flex-col gap-4 bg-surface p-6" // Applies specified layout: flex container, gap for direct children, background, padding
        )}
      >
        <QuestionList />
      </main>

      {/* Footer section for CommentsField */}
      {/* Layout Requirements for footer: "layout": "flex justify-center bg-surface py-6" */}
      <footer 
        className={cn(
          "w-full max-w-6xl rounded-md shadow-lg", // Constrains content width and adds card-like styling
          "flex justify-center bg-surface py-6 px-6" // Applies specified layout. Added px-6 for symmetry with mainContent's p-6.
        )}
      >
        <CommentsField
          value={comments}
          onChange={setComments}
          placeholder="Enter your notes here..."
        />
      </footer>
    </div>
  );
};

export default AssessmentPage;
