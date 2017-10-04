import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from "./utils";

import { TypeChooser } from "react-stockcharts/lib/helper";


class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			console.log(data[0]);
			this.setState({ data });
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			// <TypeChooser>
				// {type => <div>{type}<Chart type="hybrid" data={this.state.data} /></div>}
			// </TypeChooser>
			<Chart type="hybrid" data={this.state.data} />
		)
	}
}

render(
	<ChartComponent />,
	document.getElementById("root")
);
