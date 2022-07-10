import React from 'react'
import { render } from 'react-dom'
import MyTitle from './MyTitle'

var ce = React.createElement

var MyFirstComponent = function () {
    return ce(
        'div',
        null,
        ce(MyTitle, { color: 'rebeccapurple', title: 'CHTML' }),
        ce(MyTitle, {
            color: 'peru',
            title: 'Center for the History of Music Theory and Literature',
        })
    )
}

render(React.createElement(MyFirstComponent), document.getElementById('app'))
