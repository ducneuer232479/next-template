import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'

import { wagmiConfig } from './config'
import './globals.css'
import { QueryProvider, WagmiProvider } from '@/providers'
import { cn } from '@/utils'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'xxFast Capital',
	description: 'xxFast Capital is a blockchain-based crowdfunding platform',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const initialState = cookieToInitialState(
		wagmiConfig,
		headers().get('cookie')
	)
	return (
		<html lang="en">
			<body
				className={cn('min-h-screen grid-rows-[1fr_auto]', archivo.className)}
			>
				<WagmiProvider initialState={initialState}>
					<QueryProvider>{children}</QueryProvider>
				</WagmiProvider>
			</body>
		</html>
	)
}
