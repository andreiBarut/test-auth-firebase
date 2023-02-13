import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Vote = () => {
	const [pollObject, setPollObject] = useState(null);
	const { voteID } = useParams();

	async function getPoll() {
		const docRef = doc(db, "polls", voteID);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			console.log("Document data :", docSnap.data());
			setPollObject(docSnap.data());
		} else {
			console.log("No such content!");
		}
	}

	function handleVote(e) {
		e.preventDefault();
		console.log("Voted!");
	}

	return (
		<div>
			<button onClick={getPoll}>Get Poll</button>
			<div>{pollObject ? pollObject.pollText : null}</div>
			<div>
				<form style={{ display: "flex", flexDirection: "column" }}>
					{pollObject
						? pollObject.pollOptions.map((option) => (
								<div style={{ display: "grid" }} key={"div" + option}>
									<label key={"label" + option}>{option}</label>
									<input type={"radio"} name="name" key={option} />
								</div>
						  ))
						: null}
					<button onClick={handleVote}>Vote</button>
				</form>
			</div>
			<span>Voting Page</span>
		</div>
	);
};

export default Vote;
