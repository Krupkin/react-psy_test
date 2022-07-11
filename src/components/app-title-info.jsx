import React from 'react'

function AppTitleInfo({dataUserTaker}) {
    const [name, setName] = React.useState('')
    const [secondName, setSecondName] = React.useState('')
    const [fatherName, setFatherName] = React.useState('')
    
    return (
        <div className='app-title-info'>
            <h2 className='title'>Рекрут, короче, слухай сюди…</h2>
            <div className="title-rules-block">
                <span className='title-rules'>Зараз досліджуватимуться деякі Твої особистісні особливості. Тут дохрена питань різної тематики, деякі можуть здатись тобі дивними, але так треба.</span>
                <span className='title-rules'>Твоє завдання полягає у тому, щоб визначити своє відношення до кожного ствердження. Якщо Ти погоджуєшся з ствердженням, то тисни на праву кнопку, якщо ні то – ліву.</span>
                <span className='title-rules'>Правильних або неправильних відповідей тут бути не може, тому довго не втикай – давай відповідь, виходячи з того, що більше відповідає Твоєму характеру або уявленню про самого себе.</span>
                <span className='title-rules'>Якщо все зрозуміло – заповни форму, тисни «ПОГНАЛИ», а якщо не дав дупля то піднімай праву клешню та голосно повідом старшого фразою «Мамуля, забери мене додому».</span>
            </div>
            <form className = "app-title-info-form" onSubmit = {(evt)=> {
                    evt.preventDefault()
                    dataUserTaker(name, secondName, fatherName)}}>
                <input className="info-form-input" type="text" placeholder = "Сюди пиши своє прізвище" onChange = {(e) => setName(e.target.value)} required/>
                <input className="info-form-input" type="text" placeholder = "Сюди пиши своє ім'я" onChange = {(e) => setSecondName(e.target.value)}  required/>
                <input className="info-form-input" type="text" placeholder = "Сюди пиши як тебе побатькові" onChange = {(e) => setFatherName(e.target.value)} required/>
                <button type="submit" className='title-button'>ПОГНАЛИ</button>
            </form>

        </div>
    )
}

export default AppTitleInfo
