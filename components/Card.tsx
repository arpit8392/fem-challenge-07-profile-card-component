import StatsSummary from './StatsSummary'

const Card = () => {
	return (
		<section
			className='flex max-w-sm flex-col overflow-hidden rounded-lg bg-white shadow-lg
        '>
			<div>
				<img
					src='/images/bg-pattern-card.svg'
					alt='Pattern Card'
					className='w-full rounded-t-lg'
				/>
				<div className='relative bottom-[20%] flex h-32 flex-col items-center space-y-2'>
					<img
						src='/images/image-victor.jpg'
						alt='Profile Picture'
						className='w-24 rounded-full border-4 border-white'
					/>
					<h1 className='text-center text-xl font-bold text-darkDesaturatedBlue'>
						Victor Crest{' '}
						<span className='ml-2 font-normal tracking-wide text-darkGrayishBlue'>
							26
						</span>
					</h1>
					<h2 className='text-center text-base tracking-wide text-darkGrayishBlue'>
						London
					</h2>
				</div>
			</div>

			<div>
				<hr className='mt-4 h-[1px] w-full bg-darkGray' />
				<div className='px-12 py-6'>
					<StatsSummary />
				</div>
			</div>
		</section>
	)
}
export default Card
