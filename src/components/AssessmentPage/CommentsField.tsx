import React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface CommentsFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CommentsField: React.FC<CommentsFieldProps> = ({
  value,
  onChange,
  placeholder = "Enter your notes here...",
  className,
}) => {
  const [internalValue, setInternalValue] = React.useState(value);

  React.useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={cn("w-full", className)}> {/* Removed max-w-2xl to allow template to control width */} 
      <Label htmlFor="screener-comments" className="block mb-2 text-sm font-medium text-primaryText">
        Screener Notes / Comments:
      </Label>
      <Textarea
        id="screener-comments"
        value={internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="min-h-[100px] w-full bg-input border-secondaryText text-primaryText placeholder:text-secondaryText rounded-md p-3 focus:ring-1 focus:ring-ring focus:border-ring text-sm"
        rows={4}
      />
    </div>
  );
};

export default CommentsField;
