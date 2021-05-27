import React from 'react'
import { useState } from 'react'
// import { FaTimes } from 'react-icons/fa'

const Item = (props) => {
    const [completed, setCompleted] = useState(false)

    const completedStyle = {
        textDecoration: 'line-through',
        color: 'grey'
    }

    return (
        <div className="card m-2">
            <div className="card-body">
                <input className="me-3"
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => {
                        setCompleted(e.currentTarget.checked)
                        console.log('changed')
                    }
                    }></input>
                {completed
                    ? <span style={completedStyle}>{props.items.text}</span>
                    : <span>{props.items.text}</span>}

                {completed ? (item) => props.onComplete(item.id) : ''}

            </div>
        </div>
    )
}

export default Item
