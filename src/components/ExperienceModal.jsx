import '../sass/_experienceModal.scss';
import experience from '../experiences.json';

const ExperienceModal = (props) => {
	const {jobId, onCloseClick} = props
	const descriptionArray = experience?.[jobId]?.longDescription.split('\n');

	return (
		<div className="modal-wrapper">
			<div className="exp-modal">
				<div className="row header mb-4">
					<div className='col-10'>
						<h2 className="mb-0">{experience?.[jobId]?.orgName}</h2>
						<small class="text-muted">{experience?.[jobId]?.duration}</small>
					</div>
					<div 
						className="col-2 d-flex justify-content-end align-items-center close-icon cursor-pointer"
						onClick={() => onCloseClick()}
					>
						&times;
					</div>
				</div>
				<div className="row body">
					<div className="col-12">
						{descriptionArray.map((line) => {
							return <div className='lead'>{line}</div>
						})}
					</div>
				</div>
			</div>
		</div>
	)
};

export default ExperienceModal;