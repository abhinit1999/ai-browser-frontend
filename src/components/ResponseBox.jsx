function ResponseBox({ response, loading }) {
  return (
    <div className="max-w-xl mx-auto mt-6 p-4 bg-white rounded shadow">
      {loading ? (
        <p className="text-gray-500">Thinking...</p>
      ) : (
        <pre className="whitespace-pre-wrap text-gray-800">{response}</pre>
      )}
    </div>
  );
}

export default ResponseBox;