import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TestQuestion = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption) {
      navigate(`/result/${selectedOption}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          U trenutnoj političkoj situaciji u Srbiji koju opciju podržavate?
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { value: '1', label: 'Trenutni režim (SNS i ćaciji)' },
            { value: '2', label: 'Neutralnost, ne tiče me se' },
            { value: '3', label: 'Studentski antirežimski pokret' }
          ].map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={option.value}
                name="answer"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="h-5 w-5 text-blue-600"
              />
              <label htmlFor={option.value} className="ml-3 text-lg text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
          <button
            type="submit"
            disabled={!selectedOption}
            className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestQuestion;