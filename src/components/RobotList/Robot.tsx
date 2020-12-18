import React from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet, ScrollView, AppState } from 'react-native';

const s = StyleSheet.create({
	list_robot: {
		backgroundColor: '#091943',
		padding: 30,
		borderRadius: 10,
		marginBottom: 10,
	},
	list_robot__header: {
		color: 'white',
		fontSize: 18,
	},
	list_robot__text: {
		color: '#f1f1f1',
	},
});

export interface Props {
    id: String;
    code: String;
}

const Robot:React.FC<Props> = ({ id, code }) => {
	return (
		<View style={s.list_robot}>
			<Text style={s.list_robot__header}>ID</Text>
			<Text style={s.list_robot__text}>{id}</Text>
			<Text style={s.list_robot__header}>CODE</Text>
			<Text style={s.list_robot__text}>{code}</Text>
		</View>
	);
};

export default Robot;
