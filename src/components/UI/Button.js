import styles from './Button.module.css'

const Button = props => {
	return (
		<button type={props.type} onClick={props.onClick} className={`${styles.btn} ${props.className}`}>
			{props.children}
		</button>
	)
}

export default Button
