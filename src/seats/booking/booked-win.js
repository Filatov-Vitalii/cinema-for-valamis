import React from 'react';
import './booked-win.css';
import {NavLink} from "react-router-dom";

const BookedWin = () => {
    return(
        <div className = 'bookedWin'>
            <NavLink to='/' className = 'closeWin'>
                x
            </NavLink>
            <div className='winText'>
                Это место <br/> уже забронировано
            </div>
        </div>
    );
}

export default BookedWin;