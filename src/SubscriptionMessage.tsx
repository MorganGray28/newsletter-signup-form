import './SubscriptionMessage.css';
import successIcon from './assets/icon-success.svg';

type PropsType = {
	email: string;
	updateIsSubscribed: (bool: boolean) => void;
};

function SubscriptionMessage({ email, updateIsSubscribed }: PropsType) {
	function handleClick() {
		updateIsSubscribed(false);
	}

	return (
		<div className='SubscriptionMessage'>
			<img className='msg-icon' src={successIcon} alt='success check mark' />
			<h2 className='msg-header'>Thanks for subscribing!</h2>
			<p className='msg-content'>
				A confirmation email has been sent to <span className='msg-email'>{email}</span>. Please open it and
				click the button inside to confirm your subscription.
			</p>
			<div className='btn-container'>
				<button className='msg-button' onClick={handleClick}>
					Dismiss message
				</button>
			</div>
		</div>
	);
}

export default SubscriptionMessage;
