import React, { useState } from "react";
import web_pic from "../assets/portfolio_web_pic-removebg.png";
import '../sass/_homeScreen.scss';
import copyTexts from '../copyText.json';
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
						<div className="col-12 col-md-6 mt-md-4">
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
								Amdocs
							</h3>
							<small class="text-muted">2021-Today</small>	
							<p className="lead mt-3 exp-desc">{copyTexts.homeScreen.amdocs_experience}</p>
						</div>
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-12 col-md-6 offset-md-6">
						<div className="experience cursor-pointer shadow" id="infy" onClick={() =>{showInModal('infy')}}>
							<h3 className="mb-0">
								Infosys
							</h3>
							<small class="text-muted">2019-2021</small>	
							<p className="lead mt-3 exp-desc">{copyTexts.homeScreen.infy_experience}</p>
						</div>
					</div>
				</div>
			</div>
			{isModalOpen && <ExperienceModal jobId={jobId} onCloseClick={onCloseClick}/>}
		</div>
	)
};

export default HomeScreen;