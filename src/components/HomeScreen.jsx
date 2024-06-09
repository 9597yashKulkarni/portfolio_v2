import React, { useState } from "react";
import web_pic from "../assets/portfolio_web_pic-removebg.png";
import '../sass/_homeScreen.scss';
import copyTexts from '../copyText.json';
import experiences from '../experiences.json';
import ExperienceModal from "./ExperienceModal";

const HomeScreen = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [jobId, setJobId] = useState('');
	const onDownloadClick = () => {
        const pdfUrl = "Yash'sResume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Yash's Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

	const skills = [
		'React js',
		'JavaScript',
		'Redux',
		'Hooks',
		'AEM',
		'HTML',
		'CSS',
		'Bootstrap',
		'Java',
		'Spring boot',
		'JPA',
		'REST',
		'Python',
		'Django',
		'Node js',
		'Express',
		'SQL',
		'NoSQL',
		'MongoDb',
		'React Native',
		'Django Rest Framework',
		'JIRA',
		'BitBucket',
		'Git',
		'Github',
		'Perforce',
		'Bamboo',
		'Jenkins'
	]

	const showInModal = (id) => {
		setIsModalOpen(true);
		setJobId(id);
	}
	const onCloseClick = () => {
		setIsModalOpen(false);
		setJobId('');
	}
	return (
		<div className="home-screen mb-5">
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
										<button className="btn btn-primary" onClick={onDownloadClick}>Download Resume</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 mt-md-0 mt-4">
							<div className="d-flex align-items-center">
								<img className="my-pic" src={web_pic} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-4 details-section">
				<div className="row">
					<div className="col-12 col-md-6 about-me">
						<div className="row">
							<div className="col-12">
								<h4>
									{copyTexts.homeScreen.aboutMeHeader}
								</h4>
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-12 offset-md-1 col-md-11">
								<p className="lead">
									{copyTexts.homeScreen.aboutMeLeadPara}
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 skills">
						<div className="row">
							<div className="col-12">
								<h4>
									{copyTexts.homeScreen.skills}
								</h4>
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-12 offset-md-1 col-md-11">
								{skills.map((skill) => {
									return (
										<span className="badge skill-badge">
											{skill}
										</span>
									)
								})}	
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container experience-section mt-5">
				<div className="row">
					<div className="col-12">
						<h4>{copyTexts.homeScreen.experience}</h4>
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-12 col-md-6">
						<div className="experience cursor-pointer shadow" id="amdocs" onClick={() =>{showInModal('amdocs')}}>
							<h3 className="mb-0">
								{experiences.amdocs.orgName}
							</h3>
							<small class="text-muted">{experiences.amdocs.duration}</small>	
							<p className="lead mt-3 exp-desc">{experiences.amdocs.briefDescription}</p>
						</div>
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-12 col-md-6 offset-md-6">
						<div className="experience cursor-pointer shadow" id="infy" onClick={() =>{showInModal('infy')}}>
							<h3 className="mb-0">
								{experiences.infy.orgName}
							</h3>
							<small class="text-muted">{experiences.infy.duration}</small>	
							<p className="lead mt-3 exp-desc">{experiences.infy.briefDescription}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container own-projects mt-5">
				<div className="row">
					<div className="col-12">
						<h4>{copyTexts.homeScreen.ownProjects}</h4>
					</div>
				</div>
				<div class="row row-cols-1 row-cols-md-2 g-4 mt-1">
					<div class="col">
						<div class="card shadow h-100 cursor-pointer" onClick={() =>{showInModal('project1')}}>
							<div class="card-body">
								<h5 class="card-title mb-3">{experiences.project1.orgName}</h5>
								<p class="card-text small">{experiences.project1.briefDescription}</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card shadow h-100 cursor-pointer" onClick={() =>{showInModal('project1')}}>
							<div class="card-body">
								<h5 class="card-title mb-3">{experiences.project2.orgName}</h5>
								<p class="card-text small">{experiences.project2.briefDescription}</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card shadow h-100 cursor-pointer" onClick={() =>{showInModal('project1')}}>
							<div class="card-body">
								<h5 class="card-title mb-3">{experiences.project3.orgName}</h5>
								<p class="card-text small">{experiences.project3.briefDescription}</p>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="card shadow h-100 cursor-pointer" onClick={() =>{showInModal('project1')}}>
							<div class="card-body">
								<h5 class="card-title mb-3">{experiences.project4.orgName}</h5>
								<p class="card-text small">{experiences.project4.briefDescription}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container find-me mt-5">
				<div className="row">
					<div className="col-12">
						<h4>Find Me</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-12 d-flex justify-content-center my-links">
						<a href="https://github.com/9597yashKulkarni" target="_blank">
							<i className="fa fa-github" />
						</a>
						<a href="https://www.linkedin.com/in/yash-kulkarni-187b68124?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
							<i className="fa fa-linkedin" />
						</a>
					</div>
				</div>
			</div>
			{isModalOpen && <ExperienceModal jobId={jobId} onCloseClick={onCloseClick}/>}
		</div>
	)
};

export default HomeScreen;