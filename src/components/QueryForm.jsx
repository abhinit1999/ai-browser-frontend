import { useState } from 'react';

function QueryForm({ setResponse, setLoading }) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    //   const res = await fetch('https://ai-browser.onrender.com/query', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ message }),
    //   });
  const res = await fetch('https://ai-browser.onrender.com/query', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message }), 
});


      const data = await res.json();
      setResponse(data.response.join('\n'));
    } catch (error) {
      setResponse('Error connecting to backend.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
        className="p-3 border rounded resize-none h-32"
        required
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        ASK_AI
      </button>
    </form>
  );
}

export default QueryForm;