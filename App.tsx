import React from 'react';
import { ImageStyle, View, Text } from 'react-native';
import Splash from '@pankod/project-splash'

export default class App extends React.Component<{}, { intro: boolean }> {
	constructor(props: {}) {
		super(props);

		this.state = {
			intro: true
		};
	}

	public componentDidMount(): void {
		setTimeout(() => {
			this.setState({ intro: false });
		}, 2000);
	}

	public render(): JSX.Element {

		const customStyle: ImageStyle = {
			flex: 1,
			width: '100%',
			height: '100%',
			backgroundColor: '#2C3E50',
			zIndex: 1,
			justifyContent: 'center',
			alignItems: 'center'
		} as ImageStyle

		const { intro } = this.state;

		if (!intro) {
			return (
				<Splash />
			);
		}

		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Your Component</Text>
			</View>
		);

	}

}
