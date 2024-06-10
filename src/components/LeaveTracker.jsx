import '../sass/_projects.scss'

const LeaveTracker = () => {
	return (
		<div className="leave-tracker projects">
			<div className="container">
				<div className="row">
					<div className="col-12 d-flex justify-content-center">
						<h3>
							SprintLeave: Streamlined Leave Management for Scrum Teams
						</h3>
					</div>
				</div>
				<div className="project-description">
					<div className="row">
						<div className="col-12">
							<h5>
							Project Description:
							</h5>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
						<p>SprintLeave is a comprehensive web application designed to simplify and optimize the leave management process for Scrum teams. Utilizing modern technologies like React.js, Java Spring Boot, and MySQL, SprintLeave aims to enhance the efficiency of both employees and Scrum Masters by providing a seamless platform for leave application and sprint capacity planning.
						</p>
						</div>
					</div>
				</div>
				<div className="key-features">
					<div className="row">
						<div className="col-12">
							<h5>
							Key Features:
							</h5>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
						User-Friendly Interface:
						</div>
						<div className='col-12'>
						<p>Built with React.js, the front-end of SprintLeave offers an intuitive and responsive user interface. Employees can effortlessly navigate through the application to apply for leave, view leave history, and check their leave balances.
						</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h5>
							Robust Backend System:
							</h5>
						</div>
						<div className="col-12">
						The backend is powered by Java Spring Boot, ensuring a reliable and scalable framework for managing leave data and processing requests. Spring Boot's microservices architecture facilitates smooth integration and maintenance.
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<h5>
							Efficient Data Management:
							</h5>
						</div>
						<div className='col-12'>
							<p>
							Leveraging MySQL, SprintLeave maintains a secure and organized database to store leave records, user information, and sprint schedules. MySQL's relational database capabilities ensure data integrity and quick retrieval.
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<h5>
							Leave Application Process:
							</h5>
						</div>
						<div className='col-12'>
						Employees can easily submit leave requests specifying dates, types of leave, and reasons. The application automatically checks for conflicts with existing leave records and notifies the employee of any issues.
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<h5>
							Approval Workflow:
							</h5>
						</div>
						<div className='col-12'>
							<p>
							Scrum Masters receive notifications for new leave requests and can approve or reject them with just a few clicks. The system tracks the status of each request, providing transparency to both employees and approvers.
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<h5>
							Sprint Capacity Planning:
							</h5>
						</div>
						<div className='col-12'>
							<p>
							SprintLeave offers tools for Scrum Masters to visualize team capacity across sprints. By integrating leave data with sprint planning, Scrum Masters can make informed decisions on resource allocation, ensuring minimal disruption to project timelines.
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<h5>
							Notifications and Reminders:
							</h5>
						</div>
						<div className='col-12'>
						Automated email notifications and in-app reminders keep employees and Scrum Masters informed about upcoming leaves, pending approvals, and other critical updates, enhancing communication and reducing delays.
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<h5>
							Reports and Analytics:
							</h5>
						</div>
						<div className='col-12'>
							<p>
							Comprehensive reporting features allow administrators to generate detailed leave reports, track patterns, and analyze leave trends. These insights help in making strategic decisions regarding team management and policy adjustments.
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<h5>
							Security and Privacy:
							</h5>
						</div>
						<div className='col-12'>
							<p>
							SprintLeave prioritizes data security with robust authentication and authorization mechanisms. User data is encrypted and securely stored, ensuring compliance with data protection regulations.
							</p>
						</div>
					</div>
				</div>
				<div className='benefits'>
					<div className='row'>
						<div className='col-12'>
							<h5>
							Benefits:
							</h5>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<h5>
							For Employees:
							</h5>
							<ul>
								<li>
								Simplifies the process of applying for leave and tracking leave balances.
								</li>
								<li>
								Provides transparency in the approval process, reducing uncertainties and waiting times.
								</li>
							</ul>
						</div>
						<div className='col-12'>
							<h5>
							For Scrum Masters:
							</h5>
							<ul>
								<li>
								Enhances sprint planning by providing clear visibility into team availability.
								</li>
								<li>
								Streamlines the leave approval process, allowing more time to focus on core responsibilities.
								</li>
							</ul>
						</div>
						<div className='col-12'>
							<h5>
							For Organizations:
							</h5>
							<ul>
								<li>
								Improves overall efficiency and productivity by minimizing disruptions due to unplanned leaves.
								</li>
								<li>
								Facilitates better resource management and project planning through detailed analytics.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='foot-note'>
					<div className='row'>
						<div className='col-12'>
							<p>
							SprintLeave aims to transform leave management into a hassle-free and efficient process, benefiting Scrum teams by ensuring better planning, communication, and productivity.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default LeaveTracker;