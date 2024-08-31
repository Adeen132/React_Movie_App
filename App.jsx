import React, { useState } from 'react';
import './App.css';

// Import all images
import bossBabyImg from './img/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_.jpg';
import toyStoryImg from './img/00719ToyStory_Blackstone__Rounded.webp';
import zootopiaImg from './img/p11993845_p_v8_aq.jpg';
import findingNemoImg from './img/Finding_Nemo.jpg';
import lionKingImg from './img/official-30th-anniversary-poster-for-the-lion-king-v0-rrb3jwql5z4d1.webp';
import frozenImg from './img/images.jpg';
import naMaloomAfraadImg from './img/MV5BZGJjYzQxNDEtYzQxNS00ZjQ4LTg3MGItOTI4YTgwMTI0ODk0XkEyXkFqcGc@._V1_.jpg';
import punjabNahiJaungiImg from './img/ab67616d0000b273f7029cdb7eb5116df564f452.jpg';
import jawaniPhirNahiAniImg from './img/MV5BNzBjNWRmN2MtMWJiYy00ODE5LWI5NmUtMmU1YmY1NDY5MjYxXkEyXkFqcGdeQXVyODg1MTc3MTM@._V1_.jpg';
import wrongNoImg from './img/worng no.jpg';
import pareyHutLoveImg from './img/parey hut love.jpg';
import teefaInTroubleImg from './img/Teefa_in_Trouble.jpeg';
import sherDilImg from './img/Sher Dil.jpg';
import gummImg from './img/Gumm.jpg';
import yalghaarImg from './img/Yalghaar.jpg';
import maalikImg from './img/Maalik_film.jpeg';
import waarImg from './img/Waar.jpg';
import khudaKayLiyeImg from './img/Khuda Kay Liye.jpg';
import katakshaImg from './img/Kataksha.jpg';
import pariImg from './img/Pari.jpg';
import aksbandhImg from './img/Aksbandh.jpg';
import mayaImg from './img/Maya.jpg';
import siyaahImg from './img/Siyaah.jpg';
import zibahkhanaImg from './img/Zibahkhana.jpg';

const movieData = [
  { id: '1', title: 'Boss Baby', year: 2017, src: bossBabyImg },
  { id: '2', title: 'Toy Story', year: 1995, src: toyStoryImg },
  { id: '3', title: 'Zootopia', year: 2016, src: zootopiaImg },
  { id: '4', title: 'Finding Nemo', year: 2003, src: findingNemoImg },
  { id: '5', title: 'The Lion King', year: 1994, src: lionKingImg },
  { id: '6', title: 'Frozen', year: 2013, src: frozenImg },
  { id: '7', title: 'Na maloom Afraad', year: 2014, src: naMaloomAfraadImg },
  { id: '8', title: 'Punjab nahi jaungi', year: 2017, src: punjabNahiJaungiImg },
  { id: '9', title: 'Jawani Phir Nahi Ani', year: 2015, src: jawaniPhirNahiAniImg },
  { id: '10', title: 'Worng No', year: 2015, src: wrongNoImg },
  { id: '11', title: 'Parey Hut Love', year: 2019, src: pareyHutLoveImg },
  { id: '12', title: 'Teefa in Trouble', year: 2018, src: teefaInTroubleImg },
  { id: '13', title: 'Sher Dil', year: 2019, src: sherDilImg },
  { id: '14', title: 'Gumm', year: 2019, src: gummImg },
  { id: '15', title: 'Yalghaar', year: 2017, src: yalghaarImg },
  { id: '16', title: 'Maalik', year: 2016, src: maalikImg },
  { id: '17', title: 'Waar', year: 2013, src: waarImg },
  { id: '18', title: 'Khuda Kay Liye', year: 2007, src: khudaKayLiyeImg },
  { id: '19', title: 'Kataksha', year: 2019, src: katakshaImg },
  { id: '20', title: 'Pari', year: 2018, src: pariImg },
  { id: '21', title: 'Aksbandh', year: 2016, src: aksbandhImg },
  { id: '22', title: 'Maya', year: 2015, src: mayaImg },
  { id: '23', title: 'Siyaah', year: 2013, src: siyaahImg },
  { id: '24', title: 'Zibahkhana', year: 2007, src: zibahkhanaImg },
];

function App() {
  const handleNavigation = (url) => {
    window.location.assign(url);
  };
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredMovies = movieData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <div className="input">
        <input
          className='A'
          type="text"
          name="A"
          id="A"
          maxLength={20}
          placeholder='Search Movie'
          onChange={handleInputChange}
        />
      </div>
      
      <div className="card-container">
        {filteredMovies.map(movie => (
          <div className="card" key={movie.id}>
            <div className="img-container">
              <img className="card-img-top" src={movie.src} alt={movie.title} />
              <div className="hover-text">
                <p><span id={movie.title}>
                  {movie.title} ({movie.year})</span><br />Lorem ipsum dolor sit amet consectetur, adipisicing elit Nostrum, nobis minima. Voluptatem </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
