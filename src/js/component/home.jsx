import React, { useState } from "react";


//create your first component
const TrafficLight = () => {
	const [redLightState, setRedLightState] = useState("");
	const [yellowLightState, setYellowLightState] = useState("");
	const [greenLightState, setGreenLightState] = useState("");

	return (
		<div className="container">
			<div className="row m-auto justify-content-center">
				<div className="bg-black trafficLightPost">""</div>
			</div>
			<div className="bg-black rounded m-auto justify-content-center row align-middle trafficLightBackground">
				<div className="rounded-circle bg-danger trafficLight {redLightState}" onClick={() => {
					setRedLightState("lightSelected");
					setYellowLightState("");
					setGreenLightState("");
				}}></div>
				<div className="rounded-circle bg-warning trafficLight {yellowLightState}" onClick={() => {
					setRedLightState("");
					setYellowLightState("lightSelected");
					setGreenLightState("");
				}}></div>
				<div className="rounded-circle bg-success trafficLight {greenLightState}" onClick={() => {
					setRedLightState("");
					setYellowLightState("");
					setGreenLightState("lightSelected");
				}}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
