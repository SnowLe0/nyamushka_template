import React from 'react';
import './styles/App.scss';
import OfferBlock from './components/OfferBlock';

function App() {

  let data = [
    {
      disabled: false,
      additive: 'с фуа-гра',
      specOffer: [
        '10 порций',
        'мышь в подарок'
      ],
      weight: 0.5,
      subscript: 'Печень утки разварная с артишоками.'
    },
    {
      disabled: false,
      additive: 'с рыбой',
      specOffer: [
        '40 порций',
        '2 мыши в подарок'
      ],
      weight: 2,
      subscript: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    },
    {
      disabled: true,
      additive: 'с курой',
      specOffer: [
        '100 порций',
        '5 мышей в подарок',
        'заказчик доволен'
      ],
      weight: 5,
      subscript: 'Филе из цыплят с трюфелями в бульоне.'
    }
  ];

  return (
    <div className="App">
      <h1 className="App__slogan">Ты сегодня покормил кота?</h1>
      {data.map((data, key) => <OfferBlock data={data} key={key} />)}
    </div>
  );
}

export default App;
