// import Header from './components/Header';
// import QueryForm from './components/QueryForm';
// import ResponseBox from './components/ResponseBox';
// import { useState } from 'react';

// function App() {
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <Header />

//       {/* Tailwind test element */}
//       <div className="text-red-500 font-bold text-center mb-4">
       
//       </div>

//       <QueryForm setResponse={setResponse} setLoading={setLoading} />
//       <ResponseBox response={response} loading={loading} />
//     </div>
//   );
// }

// export default App;
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  const handleQuery = async (query) => {
    const res = await fetch('https://ai-browser.onrender.com/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: query }),
    });
    const data = await res.json();
    setResponse(data.response.join('\n'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-teal-400 to-green-300 px-4">
      <Header />
      <SearchBar onSubmit={handleQuery} />
      {response && (
  <div className="mt-10 max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200">
    <h2 className="text-xl font-semibold mb-2 text-slate-800">Answer:</h2>
    <p className="text-slate-700 whitespace-pre-line">{response}</p>
  </div>
)}
    </div>
  );
}

export default App;