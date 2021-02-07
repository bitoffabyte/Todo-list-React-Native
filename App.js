import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	Button,
	FlatList,
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import Addtodo from './Components/Addtodo';
import Header from './Components/Header';
import Todo from './Components/Todo';
export default function App() {
	const [todos, updateTodos] = useState([{ text: 'buy battery', key: '0' }]);
	const pressHandler = (key) => {
		updateTodos((prev) => {
			return prev.filter((todo) => todo.key != key);
		});
	};
	const submitHandler = (text) => {
		console.log(text);
		updateTodos((prev) => {
			return [...prev, { text: text, key: prev.length.toString() }];
		});
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<Addtodo adds={submitHandler} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<Todo item={item} pressHandler={pressHandler} />
							)}
							// style={{ flex: 1 }}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		padding: 40,
	},
	list: {
		marginTop: 20,
	},
});
