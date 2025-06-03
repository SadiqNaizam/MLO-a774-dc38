import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox as ShadcnCheckbox } from '@/components/ui/checkbox';

export type RelevanceStatus = 'relevant' | 'non-relevant' | null;

interface CheckboxFieldProps {
  questionId: string;
  currentRelevance: RelevanceStatus;
  onRelevanceChange: (questionId: string, newRelevanceType: 'relevant' | 'non-relevant') => void;
  className?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  questionId,
  currentRelevance,
  onRelevanceChange,
  className,
}) => {
  const handleRelevantChange = () => {
    onRelevanceChange(questionId, 'relevant');
  };

  const handleNonRelevantChange = () => {
    onRelevanceChange(questionId, 'non-relevant');
  };

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <ShadcnCheckbox
        id={`${questionId}-relevant`}
        checked={currentRelevance === 'relevant'}
        onCheckedChange={handleRelevantChange}
        aria-label={`Mark question ${questionId} as relevant`}
        className={cn(
          "h-6 w-6 rounded border-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          currentRelevance === 'relevant' ? "border-primary" : "border-secondaryText"
        )}
      />
      <ShadcnCheckbox
        id={`${questionId}-non-relevant`}
        checked={currentRelevance === 'non-relevant'}
        onCheckedChange={handleNonRelevantChange}
        aria-label={`Mark question ${questionId} as non-relevant`}
        className={cn(
          "h-6 w-6 rounded border-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          currentRelevance === 'non-relevant' ? "border-primary" : "border-secondaryText"
        )}
      />
    </div>
  );
};

export default CheckboxField;
export type { RelevanceStatus as CheckboxRelevanceStatus };
