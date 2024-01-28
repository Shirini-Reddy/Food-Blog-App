import React from 'react';
import './fooditems.css';
import { Link } from 'react-router-dom';
const LatestDisplay = (props) => {
  const renderLatest = ({ ldata }) => {
    if (ldata) {
      return (
        <>
          <div>
          <h1><center>Food Items</center></h1>
          </div>
          <div className='food-items-container'>
          {ldata.map((data) => (
            <div key={data.id} className='food-items'>
             <Link to={`/foodDetails/${data.id}`}><img src={data.image} key={data.id} alt={data.item_name} /></Link>
              <center><Link to={`/foodRecipe/${data.id}`} className="btn btn-primary">
                     {data.details}
                    </Link></center> 
            </div>
          ))}
          </div>
        </>
      );
    }
  };

  return (
    <div>
      {renderLatest(props)}
    </div>
  );
};

export default LatestDisplay;
