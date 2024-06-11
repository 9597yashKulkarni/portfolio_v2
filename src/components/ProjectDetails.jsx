import '../sass/_projects.scss'
import leaveTracker from '../projects/leaveTracker.json';
import flatShare from '../projects/flatShare.json';
import messagingApp from '../projects/messagingApp.json';
import brainTumor from '../projects/brainTumor.json';
import { useEffect, useState } from 'react';

const ProjectDetails = (props) => {
	const {project} = props;
	
	const [dataSource, setDataSource] = useState(leaveTracker);
	useEffect(() => {
		switch(project) {
			case 'leaveTracker':
				setDataSource(leaveTracker);
				break;
			case 'flatShare':
				setDataSource(flatShare);
				break;
			case 'messagingApp':
				setDataSource(messagingApp);
				break;
			case 'brainTumor':
				setDataSource(brainTumor);
				break;
			default:

		}
	},[]);

	const getFeatureDescription = (description) => {
		return description?.map((desc) => {
			return (
				<li>
					{desc}
				</li>
			)
		})
	}

	const getFeaturesOrBenefits = (valueToFetch) => {
		return dataSource?.[valueToFetch]?.features.map((feature, index) => {
			return (
				<div className="row">
					<div className="col-12">
						<h5>
							{`${index+1}. ${feature?.point}`}
						</h5>
					</div>
					<div className='col-12'>
						<ul>
							{getFeatureDescription(feature?.desc)}
						</ul>
					</div>
				</div>
			);
		})
	}
	
	return (
		<div className="leave-tracker projects">
			<div className="container">
				<div className="row">
					<div className="col-12 d-flex justify-content-center">
						<h3>
							{dataSource.title}
						</h3>
					</div>
				</div>
				<div className="project-description">
					<div className="row">
						<div className="col-12">
							<h5>
								{dataSource.projectDescriptionHeading}
							</h5>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<p>
								{dataSource.projectDescription}
							</p>
						</div>
					</div>
				</div>
				<div className="key-features">
					<div className="row">
						<div className="col-12">
							<h5>
								{dataSource.keyFeature.heading}
							</h5>
						</div>
					</div>
					{getFeaturesOrBenefits('keyFeature')}
				</div>
				<div className='benefits'>
					<div className='row'>
						<div className='col-12'>
							<h5>
								{dataSource?.benefits?.heading}
							</h5>
						</div>
					</div>
					<div className='row'>
						{getFeaturesOrBenefits('benefits')}
					</div>
				</div>
				<div className='foot-note'>
					<div className='row'>
						<div className='col-12'>
							<p>
								{dataSource.footNote}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProjectDetails;