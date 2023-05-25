import Stats from './Stats'

const StatsSummary = () => {
	return (
		<div className='flex flex-row justify-between '>
			<Stats stat='80K' title='Followers' />
			<Stats stat='803K' title='Likes' />
			<Stats stat='1.4K' title='Photos' />
		</div>
	)
}
export default StatsSummary
