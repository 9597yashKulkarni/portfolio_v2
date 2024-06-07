import React from "react";
import web_pic from "../assets/portfolio_web_pic-removebg.png";
import '../sass/_homeScreen.scss';

const HomeScreen = () => {
	return (
		<div className="home-screen">
			<div className="header-section bg-light">
				<div className="container w-100 pt-5">
					<div className="row">
						<div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
							<div className="row">
								<div className="col-12">
									<div className="welcome-text">
										<p className="lead">
											Hi, I'm 
											<h1>Yash Kulkarni</h1> 
											&nbsp; - A Passionate Web Developer
										</p>
									</div>
								</div>
							</div>
							<div className="row w-100 mt-4">
								<div className="col-12 col-md-10">
									<div className="d-flex justify-content-center justify-content-md-end">
										<button className="btn btn-primary">Download Resume</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="d-flex align-items-center">
								<img className="my-pic" src={web_pic} alt="" />
							</div>		
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default HomeScreen;