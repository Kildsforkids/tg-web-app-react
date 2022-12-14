import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css'

function Form() {

    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')
    const {tg} = useTelegram()

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data))
    }, [country, street, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street])

    function onChangeCountry(e) {
        setCountry(e.target.value)
    }

    function onChangeStreet(e) {
        setStreet(e.target.value)
    }

    function onChangeSubject(e) {
        setSubject(e.target.value)
    }

    return (
        <div className="form">
            <h3>Введите Ваши данные</h3>
            <input
                value={country}
                onChange={onChangeCountry}
                className="input"
                type="text" 
                placeholder="Страна" />
            <input
                value={street}
                onChange={onChangeStreet}
                className="input"
                type="text"
                placeholder="Улица" />
            <select value={subject} onChange={onChangeSubject} className="select">
                <option value="physical">Физ. лицо</option>
                <option value="legal">Юр. лицо</option>
            </select>
        </div>
    )
}

export default Form;