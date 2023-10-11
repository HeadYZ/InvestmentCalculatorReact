import Header from './components/Header/Header'
import InvestmentForm from './components/Investment/InvestmentForm'
import InvestmentTable from './components/Investment/InvestmentTable'

function App() {
	const calculateHandler = userInput => {
		const yearlyData = [] // per-year results

		const investmentData = {
			currentSavings: +userInput.currentSavings,
			yearlyContribution: +userInput.yearlyContribution,
			expectedReturn: +userInput.expectedReturn / 100,
			duration: +userInput.duration,
		}

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < investmentData.duration; i++) {
			const yearlyInterest = investmentData.currentSavings * investmentData.expectedReturn
			investmentData.currentSavings += yearlyInterest + investmentData.yearlyContribution
			yearlyData.push({
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: investmentData.currentSavings,
				yearlyContribution: investmentData.yearlyContribution,
			})
		}

	}

	return (
		<div>
			<Header />
			<InvestmentForm onSubmitForm={calculateHandler} />
			<InvestmentTable />
		</div>
	)
}

export default App
