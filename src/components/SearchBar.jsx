import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Search anything..."
  className="w-full max-w-xl px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg bg-white text-slate-800"
/>

<button
  type="submit"
  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
>
  Search
</button>

    </form>
  );
}

export default SearchBar;