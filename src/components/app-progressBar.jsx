import React from 'react'

function AppPogressBar({progress}) {
    
    return (
        <div className = 'app-progeress-bar-wrapper' style={{maxWidth: `${progress/2}%`}}>
            <div className = 'app-progeress-bar gradient'>
            
            </div>
        </div>
    )
}

export default AppPogressBar
