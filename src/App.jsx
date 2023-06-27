
import './App.css';
import Authors from './components/Authors';
import FamousPhrases from './components/FamousPhrases';
import phrases from './data/phrases.json';
import { useState } from 'react';
import skyPicture1 from './images/fondo1.jpg';
import skyPicture2 from './images/fondo2.jpg';
import skyPicture3 from './images/fondo3.jpg';
import skyPicture4 from './images/fondo4.jpg';

function App() {
  
  let [ selectedPicturex, setSelectedPicturex] = useState(0)

  const [ index, setIndex ] = useState(0)

  const changePicture = () => {

    const pictureArray = [skyPicture1, skyPicture2, skyPicture3, skyPicture4];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    selectedPicturex = pictureArray[randomIndex];
    setSelectedPicturex(selectedPicturex);

    if ( index < phrases.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
                     
  }

  return (

    <div className='App' style={{ backgroundImage: `url(${selectedPicturex})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' }} >
    <h1>Galletas de la Fortuna</h1>
    <button className='button__backgroundColor' onClick={changePicture}>Probar mi suerte</button>
      <FamousPhrases
      data={phrases[index]} />
      <Authors
      data={phrases[index]} />
    </div>

  )
}

export default App
