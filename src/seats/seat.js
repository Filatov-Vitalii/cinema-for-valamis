import {NavLink} from "react-router-dom";
import React from "react";
import Booking from "./booking/booking";
import {Route} from 'react-router-dom';
import BookedWin from './booking/booked-win.js';

class Seat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBooked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.isBooked === false) {
            this.setState(() => {
                return {isBooked: true}
            });
            alert('Место номер ' + this.props.seatNum + ' успешно забронировано!')
        }
    }

    render() {

        const seatStyle = {
            backgroundColor: 'rgba(220, 0, 0, 0.4)',
            border: '1px solid red',
        };


        return (
            <div>
                <NavLink to={(this.state.isBooked === true ? '/booked/' : '/seat/') + this.props.seatNum} className='seatWrapper'>
                    <div>
                        <div className='seat' style={this.state.isBooked === true ? seatStyle : undefined}>
                            {this.props.seatNum}
                        </div>
                    </div>
                </NavLink>
                <Route exact path={'/seat/' + this.props.seatNum} render={(props) => <Booking handleClick={this.handleClick} seatNum={this.props.seatNum} />} />
                <Route exact path={'/booked/' + this.props.seatNum} component={BookedWin} />
            </div>
        );
    }
}





export default Seat;