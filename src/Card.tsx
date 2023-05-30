import React, { useState } from 'react';
import './Card.css';
import listIcon from './assets/icon-list.svg';

type PropsType = {
	updateEmail: (email: string) => void;
	updateIsSubscribed: (bool: boolean) => void;
};

function Card({ updateEmail, updateIsSubscribed }: PropsType) {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	function handleChange(e: React.FormEvent<HTMLInputElement>) {
		if (error) setError(false);
		setEmail(e.currentTarget.value);
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		let isValid = validateEmail();
		if (isValid) {
			updateEmail(email);
			updateIsSubscribed(true);
			setEmail('');
		} else {
			setError(true);
		}
	}

	// Extremely basic version of email validation
	function validateEmail() {
		let isValid = true;
		let validDomains = ['com', 'org', 'io', 'dev', 'net', 'gov'];
		let emailFormatted = email.toLowerCase().split('.');
		if (
			!validDomains.includes(emailFormatted[emailFormatted.length - 1]) ||
			!email.includes('@') ||
			email.includes(' ')
		) {
			isValid = false;
		}
		return isValid;
	}

	return (
		<div className='Card'>
			<div className='card-left'>
				<h2 className='content-header'>Stay updated!</h2>
				<h1 className='content-subheader'>Join 60,000+ product managers receiving monthly updates on:</h1>
				<ul>
					<li>
						<img src={listIcon} alt='check mark' className='list-icon' />
						<span>Product discovery and building what matters</span>
					</li>
					<li>
						<img src={listIcon} alt='check mark' className='list-icon' />
						<span>Measuring to ensure updates are a sucess</span>
					</li>
					<li>
						<img src={listIcon} alt='check mark' className='list-icon' />
						<span>And much more!</span>
					</li>
				</ul>
				<form onSubmit={handleSubmit}>
					<div className='label-group'>
						<label htmlFor=''>Email address</label>
						{error && <span className='error-msg'>Valid email required</span>}
					</div>
					<input
						value={email}
						onChange={handleChange}
						className={error ? 'email-input error-input' : 'email-input'}
						type='text'
						placeholder='email@company.com'
					/>
					<button>Subscribe to monthly newsletter</button>
				</form>
			</div>
			<div className='card-right'></div>
		</div>
	);
}

export default Card;
