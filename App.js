import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Todo from './Components/Todo';
export default function App() {
	const [todos, updateTodos] = useState([{ text: 'buy battery', key: '1' }]);
	const pressHandler = (key) => {
		updateTodos((prev) => {
			return prev.filter((todo) => todo.key != key);
		});
	};
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<View style={styles.list}>
					<FlatList
						data={todos}
						renderItem={({ item }) => (
							<Todo item={item} pressHandler={pressHandler} />
						)}
					/>
				</View>
			</View>
		</View>
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
