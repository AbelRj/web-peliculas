import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
import { LandingPage } from './pages/LandingPage';
export function App() {
  return (
  <Router>
    <header>
      <Link to="/">
      <h1 className="titulo">PELICULAS WEB</h1>
      </Link>
    </header>
    <main>
    <Routes>
          <Route path="/movies/:movieid" element={<MovieDetail />}>
          </Route>
          <Route path="/" element={<LandingPage />}>
          </Route>
        </Routes>
      
    </main>
  </Router>
  )
}
