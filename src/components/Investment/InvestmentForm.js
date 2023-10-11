import Button from '../UI/Button'
import { useState } from 'react'
import styles from './InvestmentForm.module.css'

const InvestmentForm = props => {
	const [currentSavings, setCurrentSavings] = useState()
	const [yearlyContribution, setYearlyContribution] = useState()
	const [expectedReturn, setExpectedReturn] = useState()
	const [duration, setDuration] = useState()

	const currentSavingsHandler = e => {
		if (e.target.value.trim() > 0) setCurrentSavings(e.target.value)
	}
	const yearlyContributionHandler = e => {
		if (e.target.value.trim() > 0) setYearlyContribution(e.target.value)
	}
	const expectedReturnHandler = e => {
		if (e.target.value.trim() > 0) setExpectedReturn(e.target.value)
	}

	const durationHandler = e => {
		if (e.target.value.trim() > 0) setDuration(e.target.value)
	}

	const formSubmitHandler = e => {
		e.preventDefault()

		if (currentSavings && yearlyContribution && expectedReturn && duration) {
			props.onSubmitForm({
				currentSavings,
				yearlyContribution,
				expectedReturn,
				duration,
			})
		}
	}

	return (
		<form className={styles.form} onSubmit={formSubmitHandler}>
			<div className={styles['input-group']}>
				<p>
					<label htmlFor='current-savings'>Current Savings ($)</label>
					<input type='number' id='current-savings' onChange={currentSavingsHandler} />
				</p>
				<p>
					<label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
					<input type='number' id='yearly-contribution' onChange={yearlyContributionHandler} />
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label htmlFor='expected-return'>Expected Interest (%, per year)</label>
					<input type='number' id='expected-return' onChange={expectedReturnHandler} />
				</p>
				<p>
					<label htmlFor='duration'>Investment Duration (years)</label>
					<input type='number' id='duration' onChange={durationHandler} />
				</p>
			</div>
			<p className={styles.actions}>
				<Button type='reset' className={styles.buttonAlt}>
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
