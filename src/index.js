import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from "./utils";

import { TypeChooser } from "react-stockcharts/lib/helper";


class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({data});
		});

		// Fetch More Data ///TODO DOES NOT RERENDER CHART SO DOES NOT UPDATE THIS.STATE
		// setInterval(
		// 	() => {
		// 		if(this.state != null) {
		// 			getData().then(data => {
		// 				var _ = JSON.parse(JSON.stringify(data).slice(0, -1) +","+ JSON.stringify(this.state.data).slice(1));	
		// 				data = _;
		// 				this.setState(data);
		// 			});
		// 		}
		// 	}, 6000
		// );
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
