import './globals.css'
import { Kumbh_Sans } from 'next/font/google'

const kumbh_sans = Kumbh_Sans({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-kumbh-sans',
})

export const metadata = {
	title: 'Profile Card Component',
	description:
		'Frontend Mentor Challenge | Profile Card Component | Developed using Next.JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${kumbh_sans.variable}  bg-darkCyan font-sans `}>
				{children}
			</body>
		</html>
	)
}
