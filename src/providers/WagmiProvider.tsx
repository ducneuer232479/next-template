'use client'

import { type State, WagmiProvider } from 'wagmi'

import { wagmiConfig } from '@/app/config'

type ProviderType = {
	children: React.ReactNode
	initialState?: State
}

const WagmiProviders = ({ children, initialState }: ProviderType) => (
	<WagmiProvider config={wagmiConfig} initialState={initialState}>
		{children}
	</WagmiProvider>
)

export default WagmiProviders
