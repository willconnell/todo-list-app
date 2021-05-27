import React from 'react'
import Item from './Item'


const Items = (props) => {
    return (
        <>
            {props.items.map(
                (item) => <Item key={item.id} items={item} cstyle={props.cstyle} onComplete={props.onComplete} />
            )}
        </>
    )
}

export default Items
