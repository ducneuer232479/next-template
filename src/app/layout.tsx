import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'

import Footer from '@/components/Footer'

import './globals.css'

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Ecomdex',
	description: 'Ecomdex: E-commerce on the Blockchain.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={instrumentSans.className}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
