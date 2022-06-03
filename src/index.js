import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import axios from './axios.js';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Sol from './components/Sol';

export default function App() {
  const [questions, setQuestions] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/api/questions");
      setQuestions(req.data);
      //console.log(req.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/solution" element={<Sol />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));