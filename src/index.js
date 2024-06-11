import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen'
import ProjectDetails from './components/ProjectDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <BrowserRouter>
	<HashRouter>
		<Routes>
			<Route exact path='/' element={<HomeScreen />}></Route>
			<Route exact path='/leave-tracker-application' element={<ProjectDetails project="leaveTracker"/>}></Route>
			<Route exact path='/flatmate-sharing-application' element={<ProjectDetails project="flatShare"/>}></Route>
			<Route exact path='/messaging-app' element={<ProjectDetails project="messagingApp"/>}></Route>
			<Route exact path='/brain-tumor-detection-project' element={<ProjectDetails project="brainTumor"/>}></Route>
		</Routes>
	</HashRouter>
	// </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
