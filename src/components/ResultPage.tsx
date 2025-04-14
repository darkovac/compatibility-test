import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ResultPage = () => {
  const { choice } = useParams();

  const getResultContent = () => {
    switch (choice) {
      case '1':
        return {
          image: `${import.meta.env.BASE_URL}/images/bloody-hands.jpg`,
          alt: 'Bloody hands',
          description: 'Ili si glupa uplašena ovca ili si kriminalac!'
        };
      case '2':
        return {
          image: `${import.meta.env.BASE_URL}/images/confused-face.jpg`,
          alt: "Confused face",
          description: "Ti si budala koja misli da je pametna i da može da izbegne politiku!",
        };
      case '3':
        return {
          image: `${import.meta.env.BASE_URL}/images/clean-hands.jpg`,
          alt: "Clean hands with thumbs up",
          description: "Nezavisne institucije i borba protiv korupcije je jedini izbor koji je u isto vreme i pametan i dobar!",
        };
      default:
        return null;
    }
  };

  const result = getResultContent();

  if (!result) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Invalid Result</h1>
          <Link to="/" className="text-blue-600 hover:underline mt-4 block">
            Return to Question
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center">
        <img
          src={result.image}
          alt={result.alt}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{result.description}</h2>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700"
        >
          Take Test Again
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;