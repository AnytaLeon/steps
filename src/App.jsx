import { useState } from 'react'

import StepsForm from './components/Steps/StepsForm';
import TrainingStatistics from './components/TrainingStatistics/TrainingStatistics';

function App() {

  const [form, setForm] = useState({
    date: '',
    km: ''
  });

  const [list, setList] = useState([]);

  const handleInputChange = (currentForm) => {
  setForm(currentForm); //  обновление полей формы
  };

  const handleSubmit = (currentForm) => {
    const newList = createNewList(currentForm); // массив с актуальными данными
    setList(newList); // актуализация массива с данными
    setForm({ date: '', km: '' }); // очистка полей формы
  };

  const createNewList = (form) => {
    let newList = [];
    const km = (Number(form.km)).toFixed(1);
    const date = form.date;
    if(list.length) {
      if(list.find(item => item.date === date)){
        newList = list.map(item => {
          if (item.date === date) {item.km = (Number(item.km) + Number(km)).toFixed(1)};
          return item
        })
      } else {
      newList = [...list, { ...form, km }].sort((a, b) => {
        let aDate = new Date(a.date);
        let bDate = new Date(b.date);
        return aDate - bDate
      });}  // сортировка массива по датам
    } else {
      newList = [{ ...form, km }];
    }
    setList(newList); 
    return newList;
  }

  const handleRemoveItem = (date) => {
    setList(list.filter((el) => el.date !== date));
  };

  const handleUpdateItem = (item) => {
    setList(list.filter(el => el.date !== item.date));
    setForm(item)
  }

  return (
    <>
      <StepsForm form={form} onInputChange={handleInputChange} onSubmit={handleSubmit} />
      <TrainingStatistics list={list} onRemove={handleRemoveItem} onUpdate={handleUpdateItem}/>
    </>
  )
}

export default App
