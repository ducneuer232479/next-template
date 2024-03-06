'use client'

import Link from 'next/link'
// import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
import {
	CrownIcon,
	FacebookIcon,
	LogoTextIcon,
	TelegramIcon,
	TwitterIcon,
} from '@/assets/icons'
import { cn } from '@/utils'

const SOCIAL_PLATFORM = [
	{
		id: uuidv4(),
		name: 'Facebook',
		icon: <FacebookIcon />,
		href: 'https://www.facebook.com/',
	},
	{
		id: uuidv4(),
		name: 'Telegram',
		icon: <TelegramIcon />,
		href: 'https://web.telegram.org/',
	},
	{
		id: uuidv4(),
		name: 'Twitter',
		icon: <TwitterIcon />,
		href: 'https://twitter.com/',
	},
]

const InfoItem = ({
	className,
	title,
	children,
}: {
	className?: string
	title: string
	children: JSX.Element
}) => (
	<div className={cn('flex flex-col gap-6', className)}>
		<h3 className="heading-6">{title}</h3>
		{children}
	</div>
)

const Footer = () => {
	// const [email, setEmail] = useState('')
	// const [isValidEmail, setIsValidEmail] = useState(true)
	// const validateEmail = (email: string) => {
	// 	const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	// 	return pattern.test(email)
	// }
	// const handleEmailChange = (event: any) => {
	// 	const newEmail = event.target.value
	// 	setEmail(newEmail)
	// 	const isValid = validateEmail(newEmail)
	// 	setIsValidEmail(isValid)
	// }
	return (
		<footer className="px-4 md:px-[35px] 2xl:px-[315px] pt-[60px] flex flex-col gap-8 md:gap-10 bg-surface-2">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
				<LogoTextIcon className="h-[60px] w-fit" />
				<div className="flex flex-row justify-center items-center gap-5">
					<h4 className="body-3 font-bold hidden md:inline-block">
						Social Media:
					</h4>
					{SOCIAL_PLATFORM.map(({ id, name, icon, href }) => (
						<Link key={id} href={href} className="flex gap-2 items-center">
							<span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
								{icon}
							</span>
							<p className="caption-1">{name}</p>
						</Link>
					))}
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-10 md:gap-[100px] pt-8 md:pt-10 border-t-[1px] border-line-2">
				<InfoItem title="Newsletter" className="gap-4 max-w-[485px]">
					<>
						<p className="text-secondary caption-1 md:body-2">
							Start your journey now and embrace the possibilities of
							decentralized e-commerce! Sign up and get started today!
						</p>
						{/* <form className="flex gap-4"> */}
						{/* <Input
								classInput={`h-full ${isValidEmail ? '' : 'focus:ring-red-1'}`}
								value={email}
								placeholder="Enter your email"
								onChange={handleEmailChange}
							/> */}
						{/* <Button
								className="w-fit md:w-[70px] lg:w-auto px-8"
								disabled={!isValidEmail || email === ''}
							>
								Subcribe
							</Button> */}
						{/* </form> */}
					</>
				</InfoItem>
				<div className="w-full flex gap-10 md:justify-between">
					<InfoItem title="Need help?">
						<div>
							<h3 className="caption-2 font-bold text-secondary uppercase">
								Call us directly
							</h3>
							<p className="body-3 text-secondary mt-1">
								support@ecomstake.org
							</p>
						</div>
					</InfoItem>

					<InfoItem title="Quick link">
						<div className="flex flex-col gap-2">
							<Link href="/" className="text-secondary body-2">
								Home
							</Link>
							<Link href="/web3-shopping" className="text-secondary body-2">
								Shopping
							</Link>
							<Link href="/stake" className="text-secondary body-2">
								Stake
							</Link>
							<Link href="/swap" className="text-secondary body-2">
								Swap
							</Link>
						</div>
					</InfoItem>
					<InfoItem title="Action" className="hidden md:flex ">
						<Link href="/dashboard" className="text-secondary body-2">
							Launch Dapp
						</Link>
					</InfoItem>
				</div>
				<InfoItem title="Action" className="flex md:hidden max-md:-mt-5 ">
					<Link href="/dashboard" className="text-secondary body-2">
						Launch Dapp
					</Link>
				</InfoItem>
			</div>
			<div className="flex justify-center gap-1 p-2 md:py-[14px] border-t-[1px] border-line-2">
				<CrownIcon />
				<span className="text-secondary caption-2 md:caption-1 select-none">
					©2023Ecomstake. All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}

export default Footer
