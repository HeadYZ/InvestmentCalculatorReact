import Button from '../UI/Button'
import { useState } from 'react'
import styles from './InvestmentForm.module.css'

const initialInvestment = {
	currentSavings: 10000,
	yearlyContribution: 1200,
	expectedReturn: 7,
	duration: 15,
}

const InvestmentForm = props => {
	const [userInput, setUserInput] = useState(initialInvestment)

	const formSubmitHandler = e => {
		e.preventDefault()

		if (
			userInput.currentSavings.value !== '' &&
			userInput.yearlyContribution.value !== '' &&
			userInput.expectedReturn.value !== '' &&
			userInput.duration.value !== ''
		) {
			props.onSubmitForm(userInput)
		}
	}

	const inputHandler = (input, value) => {
		setUserInput(prevData => {
			return { ...prevData, [input]: +value }
		})
	}

	const resetInputHandler = () => {
		props.onResetForm()
		setUserInput(initialInvestment)
	}
	return (
		<form className={styles.form} onSubmit={formSubmitHandler}>
			<div className={styles['input-group']}>
				<p>
					<label htmlFor='current-savings'>Current Savings ($)</label>
					<input
						type='number'
						id='current-savings'
						value={userInput.currentSavings}
						onChange={e => inputHandler('currentSavings', e.target.value)}
					/>
				</p>
				<p>
					<label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
					<input
						type='number'
						id='yearly-contribution'
						value={userInput.yearlyContribution}
						onChange={e => inputHandler('yearlyContribution', e.target.value)}
					/>
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label htmlFor='expected-return'>Expected Interest (%, per year)</label>
					<input
						type='number'
						id='expected-return'
						value={userInput.expectedReturn}
						onChange={e => inputHandler('expectedReturn', e.target.value)}
					/>
				</p>
				<p>
					<label htmlFor='duration'>Investment Duration (years)</label>
					<input
						type='number'
						id='duration'
						value={userInput.duration}
						onChange={e => inputHandler('duration', e.target.value)}
					/>
				</p>
			</div>
			<p className={styles.actions}>
				<Button type='reset' onClick={resetInputHandler} className={styles.buttonAlt}>
					Reset
				</Button>
				<Button type='submit' className={styles.button}>
					Calculate
				</Button>
			</p>
		</form>
	)
}

export default InvestmentForm
