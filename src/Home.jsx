import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { auth } from "./firebase";
import { db } from "./firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Post from "./components/Post";
import { CiUser } from "react-icons/ci";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [info, setInfo] = useState("");
	const [currentUser, setCurrentUser] = useState(null);
	const [profile, setProfile] = useState(null);

	async function addUserToDb(userId, userEmail) {
		try {
			const docRef = await addDoc(collection(db, "users"), {
				userId: userId,
				userEmail: userEmail,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	function getUserName(e) {
		setUserEmail(e.target.value);
	}

	function getUserPassword(e) {
		setUserPassword(e.target.value);
	}

	function createAccount(e) {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, userEmail, userPassword)
			.then((userCredential) => {
				//?Signed in
				const user = userCredential.user;
				setProfile(user.email);
				setCurrentUser(user);
				setInfo("created account as " + user.email);
				addUserToDb(user.uid, user.email);
			})
			.catch((error) => {
				const errorCode = `Error: ${error.code.split("/")[1]}`;
				setInfo(errorCode);
				console.log(errorCode);
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	}

	function logIn(e) {
		e.preventDefault();
		signInWithEmailAndPassword(auth, userEmail, userPassword)
			.then((userCredential) => {
				const user = userCredential.user;
				setProfile(user.email);
				setCurrentUser(user);
				setInfo("login succesful");
			})
			.catch((error) => {
				const errorCode = `Error: ${error.code}`;
				console.log(errorCode);
				setInfo(errorCode);
				const errorMessage = error.message;
			});
	}

	return (
		<div className="App">
			<span
				style={{ color: "yellow", position: "absolute", top: "20px", left: "20px" }}
			>
				<CiUser />
				{profile ? "signed in as " + profile : "signed out"}
			</span>
			<br></br>
			<span>{info}</span>
			<img src={reactLogo} alt="react logo" />
			<div className="app-signUp-container">
				<h1>Sign Up</h1>
				<SignUp
					username={userEmail}
					password={userPassword}
					infoAbout={info}
					getUserName={getUserName}
					getUserPassword={getUserPassword}
					createAccount={createAccount}
					logIn={logIn}
				/>
				<h1>Log In</h1>
				<SignIn
					username={userEmail}
					password={userPassword}
					infoAbout={info}
					getUserName={getUserName}
					getUserPassword={getUserPassword}
					createAccount={createAccount}
					logIn={logIn}
					currentUser={currentUser}
				/>
				<Post />
			</div>
		</div>
	);
};

export default Home;
