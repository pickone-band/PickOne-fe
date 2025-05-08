function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Hello, PickOne!
        </h1>
        <p className="text-gray-500">Tailwind CSS is working perfectly! 🎉</p>
        <div className="mt-8 p-4 border border-dashed border-purple-500 rounded-md">
          <h2 className="text-xl text-purple-700 font-semibold mb-2">
            Sample Tailwind Component
          </h2>
          <div className="flex space-x-2">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Button 1
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              Button 2
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            This component uses various Tailwind classes for styling, including
            flexbox, spacing, borders, colors, and typography.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
