import { useFormStatus } from 'react-dom';
import { LoaderCircle } from 'lucide-react';

export function PendingComponent() {
  const { pending } = useFormStatus();

  return (
    <div className="outline p-2 mb-4">
      <p className="mb-4">form内のコンポーネントです</p>
      <div className="flex justify-between gap-x-2">
        <p>useFormStatusで送信中を補足して、送信中ならスピンします</p>
        <LoaderCircle className={`shrink-0 ${pending && 'animate-spin'}`} />
      </div>
    </div>
  );
}
