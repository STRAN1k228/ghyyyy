import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";



function AddNewsForm({ onAddNews }) {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newNews = {
        id: id,
        title: title,
        text: text,
        image: image
        };

        onAddNews(newNews);


        setId('');
        setTitle('');
        setText('');
        setImage('');

        navigate('/');
    };
    return (
        <div className='add-news-form'>
            <h2>Добавить новую новость</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Заголовок</label>
                    <input
                        id='title'
                        type='text'
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='title'>Содержание</label>
                    <input
                        id='text'
                        type='text'
                        value={text}
                        onChange={ (e) => setText(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='title'>Ссылка на картинку</label>
                    <input
                        id=''
                        type='image'
                        value={image}
                        onChange={ (e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Добавить новость</button>
            </form>
        </div>
    );

}

AddNewsForm.propTypes = {
    onAddNews: PropTypes.func.isRequired
};

export default AddNewsForm