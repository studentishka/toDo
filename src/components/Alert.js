import React, {useContext} from 'react'
import {AlertContext} from "../context/alerts/alertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if(!alert) {
        return null
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissable` }>
            <strong>NOT IMPORTANT</strong>
            {alert.text}
            <button onClick={hide} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}