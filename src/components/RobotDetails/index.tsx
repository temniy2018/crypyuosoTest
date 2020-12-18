import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet, TextInput } from 'react-native';
import { cos } from 'react-native-reanimated';
import logo from '../../../assets/logo.png';

const s = StyleSheet.create({
	header: {
		backgroundColor: '#091943',
		padding: 20,
		paddingTop: 38,
		paddingBottom: 15,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	header__img: {
		width: 40,
		height: 40,
		marginRight: 20,
	},
	header__text: {
		fontSize: 25,
		color: 'white',
		fontFamily: 'Roboto',
		fontWeight: '700',
	},
	main: {
		backgroundColor: '#00235a',
		height: '100%',
		padding: 20,
		display: 'flex',
	},
	main__header: {
		color: 'white',
		fontSize: 24,
		fontWeight: '700',
		marginBottom: 15,
	},
	main__subheader: {
		color: 'white',
		fontSize: 20,
	},
	main__text: {
		color: '#f1f1f1',
	},
	main__button: {
		backgroundColor: '#fff',
		display: 'flex',
		alignItems: 'center',
		padding: 10,
		marginTop: 20,
		borderRadius: 5,
	},
	main__buttonText: {
		color: '#091943',
		fontSize: 18,
	},
	main__input: {
		borderBottomColor: 'white',
		borderBottomWidth: 2,
		color: 'white',
	},
	main__buttonCancel: {
		backgroundColor: '#264368',
		display: 'flex',
		alignItems: 'center',
		padding: 10,
		marginTop: 20,
		borderRadius: 5,
		alignSelf: 'center',
		width: '50%',
	},
	main__buttonCancelText: {
		color: '#fff',
		fontSize: 14,
	},
});

export interface Props {
    navigation: Object;
    route: Object;
  }

const RobotDetails:React.FC<Props> = ({ navigation, route }) => {
	const [isEdit, setIsEdit] = useState(false);
	const entries = Object.entries(route.params.robot.robot_settings.robot_settings);
    const [settings, setSettings] = useState(entries);


	const onSubmit = () => {
		let newSettings = {};
		settings.map((el) => (newSettings[el[0]] = el[1]));
		const newRobot = {
			__typename: 'robots',
			code: route.params.robot.code,
			id: route.params.robot.id,
			robot_settings: {
				__typename: 'v_robot_settings',
				robot_settings: newSettings,
			},
        };
        JSON.stringify(newRobot);
        route.params.onSubmit(newRobot);
        setIsEdit(false);
	};

	const onChange = (key: String, value: String | Number, index: Number) => {
		let newSettings = settings;
		newSettings[index][1] = value;
		setSettings(newSettings);
	};

	return (
		<>
			<TouchableOpacity onPress={() => navigation.navigate('RobotList')}>
				<View style={s.header}>
					<Image source={logo} style={s.header__img} />
					<Text style={s.header__text}>CRYPTUOSO</Text>
				</View>
			</TouchableOpacity>
			<View style={s.main}>
				<Text style={s.main__header}>ROBOT DETAILS</Text>
				<Text style={s.main__subheader}>ID</Text>
				<Text style={s.main__text}>{route.params.robot.id}</Text>
				<Text style={s.main__subheader}>CODE</Text>
				<Text style={s.main__text}>{route.params.robot.code}</Text>
				{settings.map((el, i) => {
					if (isEdit) {
						return (
							<View key={el[0]}>
								<Text style={s.main__subheader}>{el[0]}</Text>
								<TextInput
									style={s.main__input}
									placeholder='Настройте своего робота'
									placeholderTextColor='#fff'
									defaultValue={String(el[1])}
									onChangeText={(text) => onChange(el[0], text, i)}
								/>
							</View>
						);
					} else {
						return (
							<View key={el[0]}>
								<Text style={s.main__subheader}>{el[0]}</Text>
								<Text style={s.main__text}>{el[1]}</Text>
							</View>
						);
					}
				})}
				{isEdit ? (
					<>
						<TouchableOpacity onPress={() => onSubmit()} style={s.main__button}>
							<Text style={s.main__buttonText}>Apply settings</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {setIsEdit(false); setSettings(entries)}} style={s.main__buttonCancel}>
							<Text style={s.main__buttonCancelText}>Reset and cancel</Text>
						</TouchableOpacity>
					</>
				) : (
					<TouchableOpacity onPress={() => setIsEdit(true)} style={s.main__button}>
						<Text style={s.main__buttonText}>Edit settings</Text>
					</TouchableOpacity>
				)}
			</View>
		</>
	);
};

export default RobotDetails;
