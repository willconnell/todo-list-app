import { useState } from 'react'
import Header from './components/Header'
import Items from './components/Items'

function App() {
    const [items, setItems] = useState([
        {
            id: 1,
            text: 'Walk the dog',
            completed: true
        },
        {
            id: 2,
            text: 'Another item',
            completed: false
        },
        {
            id: 3,
            text: 'Something to do',
            completed: true
        }
    ])

    const completeTask = (id) => {
        console.log('Task', id, 'completed')
        // setItems(items.map((item) =>
        //     id === item.id
        //         ? { ...item, completed: !item.completed }
        //         : item)
        // )
    }

    return (
        <div className="container">
            <Header />
            <Items items={items} onComplete={completeTask} />
        </div>
    );
}

export default App;
