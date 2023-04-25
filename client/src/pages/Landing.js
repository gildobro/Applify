import freelancer from "../assets/images/undraw_freelancer_re_irh4.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						I'm baby xOXO food truck locavore JOMO, 8-bit twee blue bottle
						messenger bag pinterest kogi synth disrupt. Enamel pin gastropub
						polaroid pour-over freegan lomo put a bird on it bitters kickstarter
						chia 3 wolf moon humblebrag.
					</p>
					<button className='btn btn-hero'>Login/Register</button>
				</div>
				<img src={freelancer} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;
