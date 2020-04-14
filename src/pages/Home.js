import React, {Fragment, useCallback} from 'react'
import {Form} from "../components/Form";
import {Notes} from "../components/Notes"

export const Home = () => {
    const notes = new Array(3)
        .fill('')
        .map((_,i) => ({id:i, title:`hello ${i+1}`}))

    return (
        <Fragment>
            <Form/>

            <hr/>

            <Notes notes={notes}/>

        </Fragment>
    )
}