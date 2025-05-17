import './tralala.css';
import NewsList from './NewsList';
import data from './data';
import AddNewsForm from './AddNewsForm';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
    const [news, setNews] = useState([
    ]);

    const addNews = (newNews) => {
        setNews([newNews, ...news])
    }

    return (
        <Router>
            <div className="app">
                <h1>Новостная лента</h1>
                <ul>
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/add'>Добавить новость</Link></li>
                </ul>
                <NewsList news={data} />
                <Routes>
                    <Route path='/' element={<NewsList news={news} />} />
                    <Route path='/add' element={<AddNewsForm onAddNews={addNews} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
