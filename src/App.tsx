import { Link, Route, Routes } from 'react-router';
import { UseFormStatus } from './components/UseFormStatusDemo.tsx';
import { UseTransitionDemo } from './components/UseTransitionDemo.tsx';

export default function App() {
  return (
    <div className="w-full min-h-dvh grid justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="UseTransitionDemo" element={<UseTransitionDemo />} />
        <Route path="UseFormStatusDemo" element={<UseFormStatus />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <nav className="grid gap-8">
      <Link className="block" to="/UseTransitionDemo">
        useTransitionを使ったフォームページへ
      </Link>
      <Link className="block" to="/UseFormStatusDemo">
        useFormStatusを使ったフォームページへ
      </Link>
    </nav>
  );
}
