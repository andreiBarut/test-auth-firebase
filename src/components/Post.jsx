import { useState } from "react";
import Poll from "./Poll";

const Post = () => {
	const [optionsNumber, setOptionsNumber] = useState(0);
	const [pollNumber, setPollNumber] = useState(null);
	const [pollText, setPollText] = useState(null);

	function handlePollNumber(e) {
		setOptionsNumber(e.target.value);
		// console.log(optionsNumber);
	}

	function settPollsNumber(e) {
		e.preventDefault();
		const polls = [];
		for (let i = 0; i < optionsNumber; i++) {
			polls.push(i);
			console.log(polls);
		}
		setPollNumber(polls);
	}

	function handleText(e) {
		setPollText(e.target.value);
	}

	return (
		<>
			<h1>Poll Creator</h1>
			<form>
				<label>Poll Text</label>
				<input
					type={"text"}
					placeholder={"insert the text for your poll"}
					onChange={handleText}
				/>
				<ul
					style={{
						display: "flex",
						flexDirection: "column",
						listStyleType: "none",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					Please select a poll type:
					<li>
						<label>multiple choice</label>
						<input type="radio" name="radAnswer" />
					</li>
					<li>
						<label>single choice</label>
						<input type="radio" name="radAnswer" />
					</li>
				</ul>
				<label>Nr. of options (max 15)</label>
				<input
					type={"number"}
					placeholder={
						"insert how many options do you want your poll to have, maximum 15"
					}
					onChange={handlePollNumber}
					required={true}
				/>
				<button onClick={settPollsNumber}>Set Poll Number</button>
			</form>
			{/* <span>{pollNumber}</span> */}
			{pollNumber ? <Poll pollNumber={pollNumber} pollText={pollText} /> : null}
			{/* <Poll pollNumber={pollNumber} /> */}
		</>
	);
};

export default Post;
