import React from "react";
import {useState} from "react";
import WatchForm from "../WatchForm/WatchForm";
import WatchBox from "../WatchBox/WatchBox";
import './WatchBlock.css'

function WatchBlock() {
    const[time, setTime] = useState({
        name: '',
        timeZone: '',
        id: ''
    });

    const[watch, setWatch]=useState([]);

    const handleChangeInput = (evt)=>{
        const {name, value} = evt;
        setTime(prevState => ({...prevState, [name]:value}))
    }

    const handleAddWatch = (item)=>{
        if(time.name!==''){
            setWatch(prevState => [...prevState,item])
            setTime({
                name: '',
                timeZone: '',
                id: ''
            })
        }
    }

    const handleDeleteWatch = (id)=>{
        setWatch(()=>watch.filter(item=>item.id!==id));
    }

    return (
        <div className='watch-block'>
            <WatchForm changeForm={handleChangeInput} timeInput={time} addWatch={handleAddWatch}/>
            <WatchBox watch={watch} deleteWatch={handleDeleteWatch}/>
        </div>
    );
}

export default WatchBlock;