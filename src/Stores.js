import React, { Component } from 'react';


class Stores extends Component {
	constructor() {
		super()
		this.state = {
			list: [
				{name: "Midori", phoneNumber: "2066247273"},
				{name: "Corned Beef", phoneNumber: "1112223333"},
				{name: "Pho Bac", phoneNumber: "4445556666"},
			]
		}
	}
}
const Stores = () => {
	return (
		<div>
			List of Stores
		</div>
	)
}

export default Stores
