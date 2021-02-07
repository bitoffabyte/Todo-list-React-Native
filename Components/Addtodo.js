import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Addtodo({ adds }) {
	const [text, updateText] = useState('');
	const changeHandler = (val) => {
		updateText(val);
	};
	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder='new todo...'
				value={text}
				onChangeText={changeHandler}
			/>
			<Button
				title='add todo'
				color='black'
				onPress={() => {
					console.log('heeh');
					updateText('');
					adds(text);
				}}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
});
