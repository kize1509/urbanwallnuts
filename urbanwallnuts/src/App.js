import Home from "./pages/Home.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
