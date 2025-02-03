import React from "react";
import Navbar from "../js/component/Navbar.jsx";
import Jumbotron from "../js/component/Jumbotron.jsx";
import Card from "../js/component/Card.jsx";
import Footer from "../js/component/Footer.jsx";

//include images into your bundle
//create your first component
const Home = () => {

	function repeatCards(count) {
		let cards = []
		for ( let i = 0; i < count ; i++ ) {
			cards.push (
				<>
					<div key={i} className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
				</>
			)
		}
		return cards
	}
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div>
				<Jumbotron />
			</div>
			<div className="row"> {repeatCards(4)}</div>
			<div>
				<Footer />
			</div>
		</>
	);
};

export default Home;