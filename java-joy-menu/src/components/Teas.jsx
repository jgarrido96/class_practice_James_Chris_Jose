import React, {useState} from 'react'
import styles from '../MenuStyles.module.css'

function Teas(props) {
    const [teas] = useState(props.initialTea);
    const [visible, setVisible] = useState(false);

  return (
    <div className={styles.teas}>
        <h1>Tea</h1>
        <button onClick={() => setVisible(!visible)}>Toggle Menu</button>
        { (visible === true) &&
        <ul>
            {teas.map((tea, index) => (
                <li key={index}>{tea}</li>
            ))}
        </ul>
}
    </div>
  )
}

export default Teas
