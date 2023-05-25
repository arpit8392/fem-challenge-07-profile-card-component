import Card from '@/components/Card'

export default function Home() {
	return (
		<main className='relative grid min-h-screen place-content-center p-4 '>
			<img
				className='absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 object-cover md:-translate-x-1/4 md:-translate-y-1/2'
				src='/images/bg-pattern-top.svg'
				alt='pattern of a gradient circle'
			/>
			<img
				className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 object-cover md:translate-x-1/4 md:translate-y-2/3'
				src='/images/bg-pattern-bottom.svg'
				alt='pattern of a gradient circle'
			/>

			<Card />
		</main>
	)
}
