import React, {useState} from 'react'
import styles from '../MenuStyles.module.css'

function Coffees(props) {
    const [coffees] = useState(props.initialMenu);
    const [visible, setVisible] = useState(false);
    const [item1Visible, setItem1Visible] = useState(false);
  return (
    <div className={styles.menu}>
        <h1>Coffee</h1>
        <button onClick={() => setVisible(!visible)}>Toggle Menu</button>
        { (visible === true) &&
        <ul>
            {coffees.map((coffee, index) => (
                <li key={index}>{coffee.name}<br></br>{` $${coffee.price}`}
                <br></br>
                <button onClick={() => setItem1Visible(!item1Visible)}>Description</button>
                {(item1Visible) && <p>{coffee.description}</p>}</li>
            ))}        </ul>
}
    </div>
  )
}

export default Coffees
