import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Lesson from './Lesson';
import Header from './Header';

function App() {
  return (
    <BrowserRouter basename="/uchebnick">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson/:id" element={<Lesson />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;