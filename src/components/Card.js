import React from 'react'
import "./card.css"

export const Card = (data) => {
	
	return (
		<div className='card'>
			{data.map((item, index) => {
				return (
					<div key={index} className='card-body'>
						<h2 className='card-title'>{item.preferredFullName}</h2>
						<p className='card-subtitle'>{item.jobTitleName}</p>
						<hr className='card-divider' />
						<p className='card-info'>
							<strong>Employee Code:</strong> {item.employeeCode}
						</p>
						<p className='card-info'>
							<strong>Region:</strong> {item.region}
						</p>
						<p className='card-info'>
							<strong>Phone Number:</strong> {item.phoneNumber}
						</p>
						<p className='card-info'>
							<strong>Email Address:</strong> {item.emailAddress}
						</p>
					</div>
				);
			})}
		</div>
	);
};
