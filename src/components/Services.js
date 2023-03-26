import React from 'react';
import SubTitles from './SubTitles';
import { serviceArticles } from '../data';
import IconArticle from './IconArticle';

const Services = () => {
  return (
    <>
      <section className='section services' id='services'>
        <SubTitles word1='our' word2='services' />
        <div className='section-center services-center'>
          {serviceArticles.map((article) => {
            return (
              <IconArticle
                key={article.id}
                icon={article.icon}
                title={article.title}
                description={article.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
