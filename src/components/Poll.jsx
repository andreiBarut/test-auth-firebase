import { addDoc, collection } from "firebase/firestore";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
const Poll = (props) => {
	console.log(props.pollNumber[1] + "here");
	const [pollOptions, setPollOptions] = useState([]);
	const [pollOption, setPollOption] = useState(null);
	// const [docRefId, setDocRefId] = useState("");
	const navigate = useNavigate();
	let reference = useRef();
	function addPollToDbYes(e) {
		e.preventDefault();
		async function addPollToDb(pollText, pollOptions) {
			e.preventDefault();
			try {
				const docRef = await addDoc(collection(db, "polls"), {
					pollText: pollText,
					pollOptions: pollOptions,
				});
				// setDocRefId("something Else");
				reference = docRef.id;
				console.log(reference);
				console.log("Document written with ID: ", docRef.id);
				navigate(`/vote/${String(reference)}`);
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		}
		addPollToDb(props.pollText, pollOptions);
	}

	function pollSetOption(e) {
		e.preventDefault();
		pollOptions.push(pollOption);
		console.log(pollOptions);
	}

	function handleChange(e) {
		setPollOption(e.target.value);
	}

	return (
		<>
			<h3>Poll Options</h3>
			{/* <span>{props.pollNumber}</span> */}
			<form>
				<label>Poll Text</label>
				<p>{props.pollText}</p>
				{props.pollNumber.map((poll) => (
					<>
						<input
							type="text"
							placeholder={"option number " + poll}
							key={poll}
							onChange={handleChange}
						/>
						<button key={poll} onClick={pollSetOption}>
							set option
						</button>
					</>
				))}
				<button onClick={addPollToDbYes}>Post Poll</button>
			</form>
		</>
	);
};

export default Poll;
