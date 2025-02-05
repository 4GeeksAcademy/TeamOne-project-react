import React from "react";
import Navbar from "../js/component/Navbar/Navbar";
import Jumbotron from "../js/component/Jumbotron/Jumbotron";
import Card from "../js/component/Card/Card";
import Footer from "../js/component/Footer/Footer";

//include images into your bundle
//create your first component
const Home = () => {

	function repeatCards(count) {
		let cards = []
		for (let i = 0; i < count; i++) {
			cards.push(
				<>
					<div key={i} className="col-12 col-md-6 col-lg-3 d-flex justify-content-center" >
						<Card />
					</div>
				</>
			)
		}
		return cards
	}
	return (
		<>

			<Navbar />

			<div className="container">
				<Jumbotron />

				<div className="row justify-content-center mt-4 mb-4">
					{repeatCards(4)}
				</div>

			</div>

			<Footer />

		</>
	);
};

export default Home;

