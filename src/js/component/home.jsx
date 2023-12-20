import React, { useState } from "react";


//create your first component
const TrafficLight = () => {
	//Lists ordered by red, yellow, and green
	let unselectedLights = ["rounded-circle bg-danger trafficLight","rounded-circle bg-warning trafficLight","rounded-circle bg-success trafficLight"];
	let selectedLights = [unselectedLights[0]+ " lightSelected",unselectedLights[1]+" lightSelected",unselectedLights[2]+" lightSelected"];
	const [redLightState, setRedLightState] = useState(unselectedLights[0]);
	const [yellowLightState, setYellowLightState] = useState(unselectedLights[1]);
	const [greenLightState, setGreenLightState] = useState(unselectedLights[2]);


	return (
		<div className="container">
			<div className="row m-auto justify-content-center">
				<div className="bg-black trafficLightPost">""</div>
			</div>
			<div className="bg-black rounded m-auto justify-content-center row align-middle trafficLightBackground">
				<div className={redLightState} onClick={() => {
					setRedLightState(selectedLights[0]);
					setYellowLightState(unselectedLights[1]);
					setGreenLightState(unselectedLights[2]);
				}}></div>
				<div className={yellowLightState} onClick={() => {
					setRedLightState(unselectedLights[0]);
					setYellowLightState(selectedLights[1]);
					setGreenLightState(unselectedLights[2]);
				}}></div>
				<div className={greenLightState} onClick={() => {
					setRedLightState(unselectedLights[0]);
					setYellowLightState(unselectedLights[1]);
					setGreenLightState(selectedLights[2]);
				}}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
