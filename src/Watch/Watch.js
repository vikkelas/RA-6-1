import React, {Component} from 'react';
import moment from "moment";
import './Watch.css'

class Watch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
        this.interval = null;
        this.calc = {
            seconds: 0,
            minutes: 0,
            hours: 0
        }
    }

    calculation(){
            this.calc.seconds=this.state.seconds*6;
            this.calc.minutes= this.state.minutes*6;
            this.calc.hours= this.state.hours*30+this.state.minutes*0.5;
    }
    getTime(){
        const utc = moment.utc().utcOffset(this.props.time.timeZone*60).format('hh:mm:ss').split(':');
        this.setState({
            hours: utc[0],
            minutes: utc[1],
            seconds: utc[2]
        })
        this.calculation();
    }

    deleteWatch = ()=>{
        this.props.delete(this.props.time.id);
    }


    componentDidMount() {
        this.getTime();
        this.interval=setInterval(()=>this.getTime(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className='watch'>
                <div className="watch-title">
                    <div className="name">{this.props.time.name}</div>
                    <div className="watch__delete" onClick={this.deleteWatch}/>
                </div>
                <div className="circle">
                    <div style={{transform: `rotateZ(${this.calc.seconds}deg)`}} className="second">
                        <div className="second-red"/>
                        <div className="second-none"/>
                    </div>
                    <div style={{transform: `rotateZ(${this.calc.minutes}deg)`}} className="minutes">
                        <div className="minutes-black"/>
                        <div className="minutes-none"/>
                    </div>
                    <div style={{transform: `rotateZ(${this.calc.hours}deg)`}} className="hours">
                        <div className="hours-black"/>
                        <div className="hours-none"/>
                    </div>
                </div>
            </div>
        );
    }
}

Watch.propTypes = {};

export default Watch;