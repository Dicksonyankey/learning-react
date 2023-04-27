import React from "react";
import "./navBar.css";

export const NavBar = () => {
	return (
		<nav className='nav--parent'>
			<div className='logo'>
				<a href='/'>Logo</a>
			</div>
			<ul className='nav-links'>
				<li>
					<a href='/post'>Post</a>
				</li>
				<li>
					<a href='/contact'>Contact</a>
				</li>
				<li>
					<a href='/signin'>Sign In</a>
				</li>
				<li>
					<a href='/login'>Log In</a>
				</li>
			</ul>
		</nav>
	);
};
