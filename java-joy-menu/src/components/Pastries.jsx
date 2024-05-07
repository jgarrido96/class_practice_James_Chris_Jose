import React, {useState}from 'react'
import styles from '../MenuStyles.module.css'

function Pastries(props) {
    const [pastries] = useState(props.initialPastries);
    const [visible, setVisible] = useState(false);

  return (
    <div className={styles.pastries}>
        <h1>Pastries</h1>
        <button onClick={() => setVisible(!visible)}>Toggle Menu</button>
        { (visible === true) &&
        <ul>
            {pastries.map((pastry, index) => (
                <li key={index}>{pastry}</li>
            ))}
        </ul>
}
    </div>
  )
}

export default Pastries
