import { Link } from 'react-router-dom';
import notfound from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
	return (
		<Wrapper className='full-page'>
			<div>
				<img src={notfound} alt='not found' />
				<h3>OH NO! Page Not Found</h3>
				<p>We couldn't find the page you're looking for!</p>
				<Link to='/'>Back To Home</Link>
			</div>
		</Wrapper>
	);
};
export default Error;
