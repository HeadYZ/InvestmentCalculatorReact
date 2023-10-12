import InvestmentTableHead from './InvestmentTableHead'
import InvestmentTableBody from './InvestmentTableBody'
import styles from './InvestmentTable.module.css'



const InvestmentTable = props => {
	return (
		<table className={styles.result}>
			<thead>
				<InvestmentTableHead></InvestmentTableHead>
			</thead>
			<tbody>
				{props.investmentData.map(data => (
					<InvestmentTableBody data={data} key={Math.random() * 1000}></InvestmentTableBody>
				))}
			</tbody>
		</table>
	)
	/* Todo: Show below table conditionally (only once result data is available) */
	/* Show fallback text if no data is available */
	// return {props.data.map(data => <investmentTableItem></investmentTableItem>)}
}

export default InvestmentTable
