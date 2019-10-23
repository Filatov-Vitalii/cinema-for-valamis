import React from 'react';
import './booking.css';
import {NavLink} from "react-router-dom";
import './../seat.js';


const Booking = (props) => {
    return (
        <div className='bookingWindow'>
            <NavLink to='/'>
                <div className='closeWindow'>
                    x
                </div>
            </NavLink>
            <div className='title'>
                <h2>Место {props.seatNum} свободно</h2>
                <h5>Для того, чтобы забронировать место, введите свой e-mail</h5>
            </div>
            <textarea className='e-mail'>
            </textarea>
            <br/>
            <NavLink to='/'>
                <button className='submit' onClick={props.handleClick}>
                    Отправить
                </button>
            </NavLink>
        </div>
    );
}



export default Booking;