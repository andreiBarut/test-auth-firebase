const SignUp = (props) => {
	return (
		<form>
			<label>Username</label>
			<input type="email" value={props.userEmail} onChange={props.getUserName} />
			<label>Password</label>
			<input
				type="password"
				value={props.userPassword}
				onChange={props.getUserPassword}
			/>
			<button type="submit" onClick={props.createAccount}>
				Sign Up
			</button>
		</form>
	);
};

export default SignUp;
