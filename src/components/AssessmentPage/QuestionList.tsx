import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox'; // Checkbox is used by CheckboxField, but QuestionList manages state
import CheckboxField, { RelevanceStatus } from './CheckboxField';

interface Question {
  id: string;
  text: string;
  subtext?: string;
}

interface QuestionState {
  id: string;
  relevance: RelevanceStatus;
}

const DUMMY_QUESTIONS: Question[] = [
  { id: '01', text: "Tell me about a time when you adopted a new technology or tool on your own. What motivated you, and what was the result?", subtext: "(Looks for curiosity and initiative)" },
  { id: '02', text: "How do you stay up to date with new trends or tools in your field? Have you come across anything AI-related?", subtext: "(Assesses awareness and interest)" },
  { id: '03', text: "Have you experimented with any AI tools, even casually? (e.g., ChatGPT, image generators, automation bots)", subtext: "(Gauges willingness to experiment)" },
  { id: '04', text: "Can you think of a repetitive or time-consuming task in your role that could benefit from automation or AI?", subtext: "(Tests ability to identify practical AI opportunities)" },
  { id: '05', text: "Tell me about a time you had to change your way of working because of a new process or tool. How did you respond?", subtext: "(Evaluates adaptability)" },
  { id: '06', text: "Can you open an AI tool of your choice and show me how you would use it to solve something or get a result? Pls walk me through the process, step by step", subtext: "" },
];

interface QuestionListProps {
  className?: string;
}

const QuestionList: React.FC<QuestionListProps> = ({ className }) => {
  const [questionStates, setQuestionStates] = React.useState<QuestionState[]>(() =>
    DUMMY_QUESTIONS.map(q => ({ id: q.id, relevance: null }))
  );

  const handleRelevanceChange = React.useCallback((questionId: string, newRelevanceClicked: 'relevant' | 'non-relevant') => {
    setQuestionStates(prevStates =>
      prevStates.map(qs => {
        if (qs.id === questionId) {
          const newRelevance = qs.relevance === newRelevanceClicked ? null : newRelevanceClicked;
          return { ...qs, relevance: newRelevance };
        }
        return qs;
      })
    );
  }, []);

  return (
    <div className={cn("w-full space-y-4", className)}> {/* Removed max-w-4xl to allow template to control width, space-y-4 for gap between header and list items */}
      {/* Header for checkbox columns */}
      <div className="flex items-center justify-between pl-[calc(2rem+0.75rem+2rem)] pr-0">
        {/* The pl-[calc(2rem+0.75rem+2rem)] is approx: question number width (w-8 = 2rem) + mr-3 (0.75rem) + some question text area before checkbox columns start */}
        {/* This is a simplified alignment for header. A more robust solution might use CSS Grid for the entire list. */}
        <div className="flex-grow">{/* Spacer */}</div>
        <div className="flex w-28 text-sm font-medium text-primaryText shrink-0">
          <span className="w-1/2 text-center">Relevant</span>
          <span className="w-1/2 text-center">Non-Relevant</span>
        </div>
      </div>

      {/* Question Rows */}
      <div className="space-y-0"> {/* Removes gap from parent, individual items will have border */} 
        {DUMMY_QUESTIONS.map((question, index) => {
          const currentQuestionState = questionStates.find(qs => qs.id === question.id);
          return (
            <div key={question.id} className="flex items-start justify-between py-4 border-b border-border last:border-b-0">
              <div className="flex items-start flex-grow mr-4">
                <span className="text-xl font-bold text-primary mr-3 w-8 pt-0.5 shrink-0">{String(index + 1).padStart(2, '0')}</span>
                <div className="pt-0.5">
                  <p className="text-primaryText text-sm leading-relaxed">{question.text}</p>
                  {question.subtext && question.subtext.length > 2 && (
                     <p className="text-xs text-secondaryText mt-1 italic">{question.subtext}</p>
                  )}
                </div>
              </div>
              <div className="shrink-0 pl-4"> {/* Added pl-4 for spacing between text and checkboxes */} 
                <CheckboxField
                  questionId={question.id}
                  currentRelevance={currentQuestionState?.relevance ?? null}
                  onRelevanceChange={handleRelevanceChange}
                  className="w-28" // Corresponds to 7rem (112px)
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionList;
