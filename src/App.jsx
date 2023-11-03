import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from 'react-router-dom';

import './App.css'
import Home from './pages/home';
import Library from './pages/library';

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/library'
            element={<Library />}
          />
        </Routes>
    </HashRouter>
  );
}

export default App;
