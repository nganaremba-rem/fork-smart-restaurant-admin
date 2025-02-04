import React from 'react'
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router'
import Profile from '../header/Profile'

export default function Layout() {
	return (
		<div
			className='flex flex-row h-[100svh] w-screen  '

			// style={{
			// 	background: `url(
			// https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
			// ) `,

			// 	backgroundRepeat: 'no-repeat',
			// }}
		>
			<SideBar />
			<div className='flex-1 flex-col bg-gray-100	 flex '>
				<Profile />
				<div className=' flex-1  p-4 overflow-auto  '>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
