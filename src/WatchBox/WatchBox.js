import React from 'react';
import Watch from "../Watch/Watch";
import './WatchBox.css'

function WatchBox({watch, deleteWatch}) {

    return (
        <div className='watch-box'>
            {watch.map(item=> <Watch key={item.id} time={item} delete={deleteWatch}/>)}
        </div>
    );
}

export default WatchBox;