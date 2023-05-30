import { useState } from 'react';
import './App.css';
import Card from './Card';
import SubscriptionMessage from './SubscriptionMessage';

function App() {
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [email, setEmail] = useState('ash@loremcompany.com');

	function updateEmail(str: string) {
		setEmail(str);
	}

	function updateIsSubscribed(bool: boolean) {
		setIsSubscribed(bool);
	}

	return (
		<div className='App'>
			{!isSubscribed ? (
				<Card updateEmail={updateEmail} updateIsSubscribed={updateIsSubscribed} />
			) : (
				<SubscriptionMessage email={email} updateIsSubscribed={updateIsSubscribed} />
			)}
		</div>
	);
}

export default App;
