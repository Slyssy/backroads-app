import React from 'react';
import { tourData } from '../data';
import SubTitles from './SubTitles';
import VertPicCard from './VertPicCard';

const Tours = () => {
  return (
    <>
      <section className='section' id='tours'>
        <SubTitles word1='about' word2='us' />

        <div className='section-center featured-center'>
          {tourData.map((tour) => {
            return (
              <VertPicCard
                key={tour.id}
                image={Object.values(tour.image)}
                date={tour.date}
                title={tour.title}
                text={tour.text}
                icon={tour.icon}
                location={tour.location}
                duration={tour.duration}
                price={tour.price}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
