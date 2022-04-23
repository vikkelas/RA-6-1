import React from 'react';
import {nanoid} from "nanoid";
import './WatchForm.css'

function WatchForm({changeForm, timeInput, addWatch}) {
    const changeInput = (evt)=>{
        const item = {};
        item.name = evt.target.name;
        item.value = evt.target.value;
        changeForm(item);
    }
    const addWatchName = (evt)=>{
        evt.preventDefault();
        const watch = {
            name: timeInput.name,
            timeZone: timeInput.timeZone,
            id: nanoid(),
        };
        addWatch(watch);
    }
    return (
        <form className='watch-form' onSubmit={addWatchName}>
            <label className='watch-form__label'>
                <span>Название</span>
                <input value={timeInput.name} onChange={changeInput}  name="name" type="text"/>
            </label>
            <label className='watch-form__label'>
                <span>Временная зона</span>
                <select onChange={changeInput} value={timeInput.timeZone} name="timeZone" id="">
                    <option value="">Выбирите часовой пояс</option>
                    <option value="-12">UTC -12 Линия перемены дат</option>
                    <option value="-11">UTC -11 Время в формате UTC-11</option>
                    <option value="-10">UTC -10 Гавайи</option>
                    <option value="-9">UTC -9 Аляска</option>
                    <option value="-8">UTC -8 Нижняя Калифорния</option>
                    <option value="-7">UTC -7 Аризона</option>
                    <option value="-6">UTC -6 Центральное время (США и Канада)</option>
                    <option value="-5">UTC -5 Восточное время (США и Канада)</option>
                    <option value="-4">UTC -4 Атлантическое время</option>
                    <option value="-3">UTC -3 Буэнос-Айрес</option>
                    <option value="-2">UTC -2 Время в формате UTC -2</option>
                    <option value="-1">UTC -1 Кабо-Верде</option>
                    <option value="0">UTC 0 Дублин, Лиссабон, Лондон</option>
                    <option value="1">UTC +1 Париж, Мадрид, Варшава</option>
                    <option value="2">UTC +2 Афины, Бухарест</option>
                    <option value="3">UTC +3 Москва, Санкт-Петербург</option>
                    <option value="4">UTC +4 Баку</option>
                    <option value="5">UTC +5 Екатеринбург</option>
                    <option value="6">UTC +6 Омск</option>
                    <option value="7">UTC +7 Томск</option>
                    <option value="8">UTC +8 Иркутск</option>
                    <option value="9">UTC +9 Якутск</option>
                    <option value="10">UTC +10 Сидней</option>
                    <option value="11">UTC +11 Сахалин</option>
                    <option value="12">UTC +12 Фиджи</option>
                    <option value="13">UTC +13 Самоа</option>
                    <option value="14">UTC +14 О-в Киритимати</option>
                </select>
            </label>
            <button className='watch-form__btn'>Добавить часы</button>
        </form>
    );
}

export default WatchForm;