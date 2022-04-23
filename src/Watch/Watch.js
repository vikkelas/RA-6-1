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
        this.time = props.time;
    }


    getTime(){
        const utc = moment.utc().utcOffset(this.time.timeZone*60).format('hh:mm:ss').split(':');
        this.setState({
            hours: utc[0],
            minutes: utc[1],
            seconds: utc[2]
        })
    }

    deleteWatch = ()=>{
        this.props.delete(this.props.time.id);
    }


    componentDidMount() {
        this.interval=setInterval(()=>this.getTime(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className='watch'>
                <div className="watch-title">
                    <div className="name">{this.time.name}</div>
                    <div className="watch__delete" onClick={this.deleteWatch}/>
                </div>
                <div className="circle">
                    <div style={{transform: `rotateZ(${this.state.seconds*6}deg)`}} className="second">
                        <div className="second-red"/>
                        <div className="second-none"/>
                    </div>
                    <div style={{transform: `rotateZ(${this.state.minutes*6}deg)`}} className="minutes">
                        <div className="minutes-black"/>
                        <div className="minutes-none"/>
                    </div>
                    <div style={{transform: `rotateZ(${this.state.hours*30+this.state.minutes*0.5}deg)`}} className="hours">
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