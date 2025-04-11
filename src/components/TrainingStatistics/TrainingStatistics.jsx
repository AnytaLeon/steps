import TrainingItem from '../TrainingItem/TrainingItem';
import './trainingStatistics.css';

export default function TrainingStatistics({ list, onUpdate, onRemove}) {
    const listItems = list.map(item => (
        <TrainingItem key={item.date} item={item} onRemove={onRemove} onUpdate={onUpdate} />
    ));

    return (
        <div className="statistics"> 
            <ul className="statistics__title-list">
                <li className="statistics__title-item"> Дата (ДД.ММ.ГГ)</li>
                <li className="statistics__title-item"> Пройдено км</li>
                <li className="statistics__title-item"> Действия</li>
            </ul>
            <ul className="statistics__list">
                {listItems}
            </ul>
        </div>
    )
}
