import "./workcard.css"
import React from 'react';
import Workcard from './Workcard';
import WorkData from './Workdata';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        {WorkData.map((val, ind) => {
          return (
            <Workcard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
