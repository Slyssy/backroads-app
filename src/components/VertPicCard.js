import React from 'react';

const VertPicCard = (props) => {
  return (
    <>
      <article className='tour-card'>
        <div className='tour-img-container'>
          <img src={props.image} className='tour-img' alt='' />
          <p className='tour-date'>{props.date}</p>
        </div>
        <div className='tour-info'>
          <div className='tour-title'>
            <h4>{props.title}</h4>
          </div>
          <p>{props.text}</p>
          <div className='tour-footer'>
            <p>
              <span>
                <i className={props.icon}></i>
              </span>
              {props.location}
            </p>
            <p>{props.duration}</p>
            <p>{props.price}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default VertPicCard;
