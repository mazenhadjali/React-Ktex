import { useRef, useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { expressions } from './expressions';

const KaTeXInput = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  // Clear the input field
  const handleClear = () => {
    setInput('');
    setError(null);
  };
  // Clear the input field
  const copyToCB = () => {
    if (input.length) {
      navigator.clipboard.writeText("<K/" + input.replace(/\s/g, '') + "/>");
    } else (
      alert("can't copy empty value")
    )

  };

  const handleInsertExpressionChunk = (textToInsert) => {
    // Get the current cursor position and selected text
    const cursorStart = inputRef.current.selectionStart;
    const cursorEnd = inputRef.current.selectionEnd;

    // Update the input field value by removing the selected text and inserting the new text
    setInput(prev => {
      return prev.slice(0, cursorStart) + textToInsert + prev.slice(cursorEnd, prev.length)
    });
    inputRef.current.focus()

  };




  return (
    <div className="container h-full pt-4 mx-auto">
      <h1 className=' my-5 text-3xl font-bold text-yellow-500 text-center'>Volt Maths Expression</h1>
      <div>
        <div className='container'>
          <h3 className='text-xl text-gray-800 font-bold'>FormEdit : </h3>
          <textarea
            className="w-full form-textarea border-2 border-gray-200 p-3 rounded-md focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Type your expression or use the buttons..."
            rows="4"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="px-4 py-2 mx-2 float-right bg-red-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            onClick={handleClear}>Clear
          </button>

          <button
            className="px-4 py-2 mx-2 flex float-right bg-orange-400 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            onClick={copyToCB}>
            <svg className="w-6 h-6 text-white-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M8 3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8c0-.6.4-1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clipRule="evenodd" />
            </svg>
            <span>Copy to Clipboard</span>
          </button>
          <div className='m-2 border border-2 p-2 rounded-lg shadow'>
            <h3 className='text-xl text-green-600 font-bold'>Expression Block : </h3>
            <BlockMath
              math={input}
              errorColor={'#cc0000'}
              error={(e) => setError(e.message)}
            />
            {error && <p className="text-red-600">Error: {error}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {
            Object.keys(expressions).map((category) => (
              <div key={category} className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-700">{category.replace(/_/g, ' ')}</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(expressions[category]).map((key) => (
                    <button
                      key={key}
                      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      onClick={() => handleInsertExpressionChunk(expressions[category][key])}>
                      {key}
                    </button>
                  ))}
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default KaTeXInput;