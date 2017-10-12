
import React from "react";
import { getData } from "./utils";

function getDisplayName(ChartComponent) {
	const name = ChartComponent.displayName || ChartComponent.name || "ChartComponent";
	return name;
}

export default function updatingDataWrapper(ChartComponent) {
	const LENGTH = 8;

	class UpdatingComponentHOC extends React.Component {
		constructor(props) {
			super(props);
			this.data = this.props.data;
			console.assert(this.data.length != 10, "Initial GET Successful?");
			this.state = {
				length: LENGTH,
				data: this.props.data.slice(0, LENGTH),
			};
			this.speed = 2000;
			// this.onKeyPress = this.onKeyPress.bind(this);

			// Prepare autoload data
			this.func = () => {
				// if (this.state.length < this.props.data.length) {
				if (this.state.length < this.data.length) {
					this.setState({
						length: this.state.length + 1,
						data: this.data.slice(0, this.state.length + 1),
					});
				}
				else if(this.state.length === this.data.length) {
					var dTempLength = this.data.length;
					getData().then(n_data =>{n_data.forEach(d => this.data.push(d)); console.assert(dTempLength > this.data.length, "Fetched More?")});
				}
				else{
					console.error("Critical Error: updatingDataWrapper.js:37 -> this.func");
					console.warn("State: ",this.state.data);
					console.warn("Data: ",this.data);
				}
			};

			// Execute autoload data
			if (this.func) {
				if (this.interval) clearInterval(this.interval);
				this.interval = setInterval(this.func, this.speed);
				// this.timedGet = setInterval(this.getData, this.waitTime)

			}

		}
		componentDidMount() {
			// document.addEventListener("keyup", this.onKeyPress);
		}
		componentWillUnmount() {
			if (this.interval) clearInterval(this.interval);
			// document.removeEventListener("keyup", this.onKeyPress);
		}
		/*
		onKeyPress(e) {
			const keyCode = e.which;
			switch (keyCode) {
			case 50: {
					// 2 (50) - Start alter data
				this.func = () => {
					if (this.state.length < this.props.data.length) {
						this.setState({
							length: this.state.length + 1,
							data: this.props.data.slice(0, this.state.length + 1),
						});
					}
				};
				break;
			}
			case 80:
					// P (80)
			case 49: {
					// 1 (49) - Start Push data
				this.func = () => {
					if (this.state.length < this.props.data.length) {
						this.setState({
							length: this.state.length + 1,
							data: this.props.data.slice(0, this.state.length + 1),
						});
					}
				};
				break;
			}
			case 27: {
					// ESC (27) - Clear interval
				this.func = null;
				if (this.interval) clearInterval(this.interval);
				break;
			}
			case 107: {
					// + (107) - increase the this.speed
				this.speed = Math.max(this.speed / 2, 50);
				break;
			}
			case 109:
			case 189: {
					// - (189, 109) - reduce the this.speed
				const delta = Math.min(this.speed, 1000);
				this.speed = this.speed + delta;
				break;
			}
			}
			if (this.func) {
				if (this.interval) clearInterval(this.interval);
				this.interval = setInterval(this.func, this.speed);
			}
		}
		*/
		render() {
			const { type } = this.props;
			const { data } = this.state;

			return <ChartComponent ref="component" data={data} type="hybrid" />;
		}
	}
	UpdatingComponentHOC.defaultProps = {
		type: "hybrid",
	};
	UpdatingComponentHOC.displayName = `updatingDataWrapper(${ getDisplayName(ChartComponent) })`;

	return UpdatingComponentHOC;
}