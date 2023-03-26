import React from 'react'

const SubTitles = (props) => {
  return (
    <>
      <div className='section-title'>
        <h2>
          {props.word1} <span>{props.word2}</span>
        </h2>
      </div>
    </>
  );
}

export default SubTitles