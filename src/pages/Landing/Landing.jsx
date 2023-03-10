import Wrapper from "./Landing.styled";
import main from "../../images/main.svg";
import { Logo } from "../../components";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis rerum necessitatibus consequuntur voluptatem adipisci repudiandae praesentium quaerat deleniti
						dignissimos!
					</p>
					<Link to="/register" className="btn btn-hero">
						Login/Register
					</Link>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
