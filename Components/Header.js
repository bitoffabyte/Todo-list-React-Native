import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>My todos</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	header: {
		height: 80,
		paddingTop: 40,
		backgroundColor: 'black',
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
});
