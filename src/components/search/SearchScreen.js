import React, { useMemo, useState } from 'react';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { q = '' } = queryString.parse(location.search);

  const [state, setState] = useState({ search: q });
  const { search } = state;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleInputChange = ({ target }) => {
    setState({
      ...search,
      [target.name]: target.value
    });
  }

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${search}`);
  }

  return (
    <div className='container mt-4'>
      <h1 className='mb-4'>Search Screen</h1>
      <div className='row'>
        <div className='col-md-5'>
          <h5 className='mb-4'>Search From</h5>

          <form onSubmit={handleSearch} className='mb-3'>
            <input
              type='text'
              placeholder='Find your hero'
              className='form-control mb-2'
              value={search}
              name='search'
              onChange={handleInputChange}
              autoComplete='off'
            />
            <button
              type='submit'
              className='btn btn-outline-primary d-block w-100'
            >
              Search
            </button>
          </form>
        </div>
        <div className='col-md-7'>
          <h5 className='mb-4'>Results</h5>
          {
            (q === '')
            &&
            <div className='alert alert-info'>
              Search a hero
            </div>
          }
          {
            (q !== '' && heroesFiltered.length === 0)
            &&
            <div className='alert alert-danger'>
              There is a no hero with {q}
            </div>
          }
          {

            (heroesFiltered.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            )))
          }
        </div>
      </div>
    </div>
  )
}
