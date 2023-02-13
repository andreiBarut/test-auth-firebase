const Poll = (props) => {
	console.log(props.pollNumber + "here");
	function handlePostPollOptions() {
		console.log("handled");
	}

	return (
		<>
			<h3>Poll Options</h3>
			{/* <span>{props.pollNumber}</span> */}
			<form>
				<label>Poll Text</label>
				<p>{props.pollText}</p>
				{props.pollNumber.map((poll) => (
					<input type="text" placeholder={"option number " + poll} />
				))}
				<button onClick={handlePostPollOptions}>Post Poll</button>
			</form>
		</>
	);
};

export default Poll;
