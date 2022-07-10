import React from 'react'
import { render } from 'react-dom'

const App = () => (
    <div className="app">
        <div className="landing">
            <h1>CHMTL</h1>
            <input type="text" placeholder="Text search" />
            <a>or Browse All</a>
        </div>
    </div>
)

render(<App />, document.getElementById('app'))
