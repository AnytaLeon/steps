import './stepsForm.css'; 

export default function StepsForm ({ form,  onInputChange, onSubmit }) {
    const changeInput = ({ target }) => {
        const { name, value } = target;
        const currentForm = { ...form, [name]: value.trim().replace('/', '.') };
        onInputChange(currentForm);
    }

    const submitForm = (event) => {
        event.preventDefault();
        validateForm();
    };

    // валидация данных формы
    const validateForm = () => {
        const datePattern = /(\d{2}).(\d{2}).(\d{4})/;
        if(!form.date.match(datePattern)){
            onSubmit({ ...form, date: ''}); //сброс инпута с датой;
            return;
        };

       if (isNaN(form.km)) {
        onSubmit({ ...form, km: '' }); // сброс инпута с километражем
        return;
        }
  
      onSubmit({ ...form });
    }

    return (
        <form className="form" onSubmit={submitForm}>
            <div className="form__date">
            <label className="form__date-label" htmlFor="date">
                Дата (ДД.ММ.ГГ.)
            </label>
            <input id="date" type="text" name="date" className="form__date-input" value={form.date} onChange={changeInput} />
            </div>

            <div className="form__km">
            <label className="form__km-label" htmlFor="km">
                Пройдено км
            </label>
            <input id="km" type="text" name="km" className="form__km-input" value={form.km} onChange={changeInput} />
            </div>
            
            <div>
                <button type="submit" className="form__button">OK</button> 
            </div>
        </form>
    )
}
