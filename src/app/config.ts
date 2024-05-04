import { http } from 'viem'
import { bsc, bscTestnet } from 'viem/chains'
import { cookieStorage, createConfig, createStorage } from 'wagmi'

// const network = process.env.NEXT_PUBLIC_NETWORK === 'testnet' ? bscTestnet : bsc

const network = bscTestnet

export const wagmiConfig = createConfig({
	chains: [network],
	connectors: [],
	ssr: true,
	storage: createStorage({
		storage: cookieStorage,
	}),
	transports: {
		[bsc.id]: http(),
		[bscTestnet.id]: http(),
	},
})
