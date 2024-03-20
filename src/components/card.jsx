import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <h3><a href={props.link} target='_blank'>{props.name}</a></h3>
      <div className='heroInfo'>
        <p><b>Вселенная:</b> {props.universe}</p>
        <p><b>Альтер-эго:</b> {props.alterego}</p>
        <p><b>Род деятельности:</b> {props.occupation}</p>
        <p><b>Друзья:</b> {props.friends}</p>
        <p><b>Суперсилы:</b> {props.superpowers}</p>
      </div>
      <div className='heroImg'>
        <img src={props.url} alt={props.name}/>
      </div>
    </div>
  );
}

export default Card;