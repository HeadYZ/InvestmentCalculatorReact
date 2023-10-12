import Header from './components/Header/Header'
import InvestmentForm from './components/Investment/InvestmentForm'
import InvestmentTable from './components/Investment/InvestmentTable'
import { useState } from 'react'


function App() {
	const [yearlyData, setYearlyData] = useState([])

	const clearInvestmentDataHandler = () => {
		setYearlyData([])
	}

	const calculateHandler = userInput => {
		setYearlyData([])

		let contribution = userInput.currentSavings
		let currentSavings = userInput.currentSavings
		let yearlyContribution = userInput.yearlyContribution
		let expectedReturn = userInput.expectedReturn / 100
		let duration = userInput.duration
		let allInterest = 0

		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn
			const savingsEndOfYear = (currentSavings += yearlyInterest + yearlyContribution)
			const totalInterest = (allInterest += yearlyInterest)
			const investedCapital = (contribution += yearlyContribution)

			setYearlyData(prevData => [
				...prevData,
				{
					year: i + 1,
					yearlyInterest,
					savingsEndOfYear,
					totalInterest,
					investedCapital,
				},
			])
		}
	}

	return (
		<div>
			<Header />
			<InvestmentForm onSubmitForm={calculateHandler} onResetForm={clearInvestmentDataHandler} />
			{yearlyData.length > 0 && <InvestmentTable investmentData={yearlyData} />}
		</div>
	)
}

export default App
