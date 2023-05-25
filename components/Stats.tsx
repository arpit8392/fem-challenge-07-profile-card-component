type Props = {
	stat: string
	title: string
}
const Stats = ({ stat, title }: Props) => {
	return (
		<div className='flex flex-col space-y-2 text-center'>
			<h3 className='text-lg font-bold tracking-wider text-darkDesaturatedBlue'>
				{stat}
			</h3>
			<h4 className='text-xs tracking-widest text-darkGrayishBlue'>{title}</h4>
		</div>
	)
}
export default Stats
