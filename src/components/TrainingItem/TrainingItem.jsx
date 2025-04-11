import React from "react";
import remove from '../../assets/remove.svg';
import update from '../../assets/update.svg';
import './trainingItem.css';

export default function TrainingItem ( { item, onUpdate, onRemove } ) {

    return (
        <li className="training-item">
            <div className="training__item-date">
                {item.date}
            </div>
            <div className="training__item-km">
                {item.km}
            </div>
            <div className="training__item-change">
                <img src={update} className="training__item-update" alt="обновить" onClick={ () => onUpdate(item) }/>
                <img src={remove} className="training__item-remove" alt="удалить" onClick={ () => onRemove(item.date) }/>
            </div>
        </li>
    )
}
