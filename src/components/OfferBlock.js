import React, { useState } from 'react';
import './styles/OfferBlock.scss';

import imgCat from './../images/Cat.png'

function OfferBlock({ data }) {

    const [active, setActive] = useState(false);

    return (
        <div className={`offerBlock${data.disabled ? ' offerBlock_disabled' : active ? ' offerBlock_selected': ''}`}>
            <div className="offerCard" {...data.disabled ? null: {onClick: (e) => {e.preventDefault(); setActive((prev) => !prev)}}}>
                <svg className="offerCard__base">
                    <mask id="mask" fill="#fff">
                        <g id="mask__group">
                            <rect width="100%" height="100%" rx="15" />
                            <polygon points="0,0 45,0 0,45" fill="#000"/>
                        </g>
                    </mask>
                    <g className="offerCard__base__group" mask="url(#mask)">
                        <use xlinkHref="#mask__group" />
                        <image className="offerCard__base__group__img" xlinkHref={imgCat} x="-20px" y="205px" width="368px" height="360px"/>
                    </g>
                </svg>
                <h4 className="offerCard__slogan"><span className="offerCard__slogan__text">Сказочное заморское яство</span>{active && <span className="offerCard__slogan__hiddenText">Котэ не одобряет?</span>}</h4>
                <h2 className="offerCard__brand">Нямушка</h2>
                <h3 className="offerCard__additive">{data.additive}</h3>
                <ul className="offerCard__specOffer">
                    {data.specOffer.map((v, i) => <li key={i} className="offerCard__specOffer-item">{v}</li>)}
                </ul>
                <div className="offerCard__weight">
                    <div className="offerCard__weight__number">{data.weight}</div>
                    <div className="offerCard__weight__measure">кг</div>
                </div>
            </div>
            <div className="offerBlock__postscript">
                {data.disabled ?
                    `Печалька, ${data.additive} закончился.` :
                    active ? data.subscript :
                    <>Чего сидишь? Порадуй котэ, <span className="offerBlock__postscript__link" onClick={(e) => setActive((prev) => !prev)}>купи</span>.</>}
            </div>
        </div>
    );

}

export default OfferBlock;
