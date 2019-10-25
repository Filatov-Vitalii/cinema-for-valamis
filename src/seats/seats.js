import React from 'react';
import './seats.css';
import Seat from './seat.js';
import {seatData1, seatData2, seatData3, seatData4, seatData5, seatData6} from './../Data/seat-data.js';
import './booking/booking.css';

const Seats = (props) => {
        return (
			
				<div className='mainHall'>
					<div className='row'>
						{seatData1.map((item) => <Seat seatNum={item.seatNum} key={item.seatNum} />)}
					</div>
					<div className='row'>
						{seatData2.map(item => <Seat seatNum={item.seatNum} key={item.seatNum} />)}
					</div>
					<div className='row'>
						{seatData3.map(item => <Seat seatNum={item.seatNum} key={item.seatNum} />)}
					</div>
					<div className='row'>
						{seatData4.map(item => <Seat seatNum={item.seatNum} key={item.seatNum} />)}
					</div>
					<div className='row'>
						{seatData5.map(item => <Seat seatNum={item.seatNum} key={item.seatNum} />)}
					</div>
					<div className='row'>
						{seatData6.map(item => <Seat seatNum={item.seatNum} key={item.seatNum} />)}
					</div>
				</div>
			
        );
    }


export default Seats;

