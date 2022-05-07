import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroesById(heroId), [heroId])

  if (!hero) {
    return (
      <div className='container mt-5'>
        <strong className='d-block mb-2'>No se ha encontrado la ruta para '{heroId}'</strong>
        <button
          className='btn btn-primary'
          onClick={() => navigate(-1)}
        >
          Regresar
        </button>
      </div>
    )
  }
  const handleReturn = () => {
    if (window.history.length === 2) {
      window.location.pathname = '/';
    } else {
      navigate(-1);
    }

  }

  const {
    superhero,
    publisher,
    alter_ego,
    characters,
    first_appearance,
  } = getHeroesById(heroId);


  return (
    <div className='container row mt-2'>
      <div className='col-sm-12 col-md-4 '>
        <img
          src={`../assets/heroes/${heroId}.jpg`}
          alt={heroId}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-md-8 animate__animated animate__fadeInRight'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush '>
          <li className='list-group-item'> <b>Alter ego:</b> {alter_ego} </li>
          <li className='list-group-item'> <b>Publisher: </b> {publisher} </li>
          <li className='list-group-item'> <b> First apperance: </b> {first_appearance}
          </li>
        </ul>
        <div className='ms-3'>
          <h5>Characters</h5>
          <p> {characters}</p>
          <button
            className='btn btn-outline-info'
            onClick={handleReturn}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  )
}
