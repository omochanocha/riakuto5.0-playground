import React, { useState, useTransition } from 'react';
import { Link } from 'react-router';
import { PendingComponent } from './PendingComponent.tsx';

interface RegData {
  username: string;
}

export function UseFormStatus() {
  return <StatusForm />;
}

function StatusForm() {
  const [regData, setRegData] = useState<RegData>({ username: '' });
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log('🎉️ 登録されました:', regData);
        setRegData({ username: '' });
      } catch (_err) {
        console.warn('⚠️ 不正な入力エラー');
      }
    });
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const value = event.target.value;
    setRegData((prev) => ({ ...prev, [name]: value }));
    console.log(regData);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">useFormStatusのデモページ</h1>
      <p className="text-lg mb-4">
        入力欄に入力後、送信を押すと3秒後にコンソールに出力されます
      </p>
      <p className="text-lg mb-8">
        送信中の状態管理をuseTransitionで管理しています
      </p>
      <div className="shadow-lg px-4 py-6 rounded-xl">
        <form onSubmit={handleSubmit}>
          <PendingComponent />
          <fieldset className="mb-4">
            <label className="mb-2 block" htmlFor="username">
              ユーザー名（必須）
            </label>
            <input
              name="username"
              value={regData.username}
              onChange={handleInput}
              className="w-full rounded-sm shadow-md p-2"
              id="username"
            />
          </fieldset>
          <fieldset className="flex justify-center pt-4">
            <button
              type="submit"
              className={`w-2/3 text-white ${isPending || !regData.username.trim() ? 'bg-blue-500/60 cursor-not-allowed' : 'bg-blue-500'}`}
              disabled={isPending || !regData.username.trim()}
            >
              {isPending ? '送信中…' : '送信'}
            </button>
          </fieldset>
        </form>
      </div>
      <div className="grid justify-center mt-12">
        <Link className="text-lg" to="/">
          トップへ
        </Link>
      </div>
    </div>
  );
}
