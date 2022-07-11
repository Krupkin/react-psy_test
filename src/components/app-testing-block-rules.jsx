import React from 'react'

function AppTestingBlockRules({rulesTrigger}) {
    return (
        <div className = 'testing-block-rules'>
            <span className = "rule-one">ПИТАННЯ, АБО СТВЕРДЕННЯ НА ЯКЕ ПОТРІБНО ВІДПОВІСТИ</span>
            <span className = "rule-two">КНОПКИ ДЛЯ ВІДПОВІДІ НА ПИТАННЯ</span>
            <button className = 'rule-btn' onClick = {()=> rulesTrigger()}>OK</button>
        </div>
    )
}

export default AppTestingBlockRules
