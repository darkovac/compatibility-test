import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestQuestion from './components/TestQuestion';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Router basename="/compatibility-test">
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={<TestQuestion />} />
          <Route path="/result/:choice" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;