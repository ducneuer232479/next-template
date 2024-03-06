import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			backgroundImage: {
				linear: 'linear-gradient(43deg, #3D5BF7 -38.75%, #29D3F8 100%)',
				'linear-2': 'linear-gradient(270deg, #121354 0%, #262A8E 100%)',
			},
			colors: {
				primary: '#2081E2',
				secondary: { 1: '#656565', 2: '#AEB5C3' },
				line: '#D6DBE2',
				surface: {
					1: '#101126',
					2: '#F0F0F0',
				},
				red: '#FA000F',
				green: '#4EAC76',
				yellow: '#FFB239',
				purple: '#8247E5',
				bg: '#F4F6FA',
				blue: '#D1D0F9',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
