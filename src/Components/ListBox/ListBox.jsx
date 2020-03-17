import React from 'react';

import confirmed from '../../Images/confirmed.png';
import recovered from '../../Images/recovered.png';
import deaths from '../../Images/deaths.png';

const ListBox = (props) => {
  return (
    <li>
      <div className="chart-number">
        <div className="position">
          { props.showOrder(props.data.countryRegion, props.index) }
        </div>
      </div>
      
      <div className="chart-content">
        <div className="country-name">
          {props.data.countryRegion.split(', ').reverse().join(' ')} {' '}
          <span className="province-state-name">{props.toggleProvinceState(props.data.provinceState, props.data.countryRegion)}</span>
        </div>

        <div className="case-summary">
          <img src={confirmed} alt="icon confirmed" className="icon"  />{' '}
          <span className="case-summary-text text-warning">{props.data.confirmed}</span>{' '}

          <img src={recovered} alt="icon recovered" className="icon"  />{' '}
          <span className="case-summary-text text-success">{props.data.recovered}</span>{' '}

          <img src={deaths} alt="icon deaths" className="icon"  />{' '}
          <span className="case-summary-text text-danger">{props.data.deaths}</span>
        </div>
      </div>
    </li>
  )
}

export default ListBox;
