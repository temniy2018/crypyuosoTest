import React, { useState, useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet, ScrollView, AppState } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import Robot from './Robot';
import logo from '../../../assets/logo.png';

const query = gql`
	query MyQuery {
		robots {
			id
			code
			robot_settings {
				robot_settings
			}
		}
	}
`;

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
	list: {
		backgroundColor: '#00235a',
		height: '100%',
		padding: 20,
		display: 'flex',
	},
  errorAndLoading: {
    backgroundColor: '#00235a',
		height: '100%',
		padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorAndLoading__text: {
    color: 'white',
		fontSize: 18,
  }
});

export interface Props {
  navigation: Object;
}

const RobotList: React.FC<Props> = ({ navigation }) => {
	const { loading, error, data } = useQuery(query);
	const [robots, setRobots] = useState([]);
	const [page, setPage] = useState(1);
	const ref = useRef();

	useEffect(() => {
		if (!loading) {
			setRobots(data.robots);
		}
	}, [loading]);

	const Submit = (newRobot:Object) => {
		const newRobots = robots.map((el) => {
			if (el.id === newRobot.id) {
				return newRobot;
			} else {
				return el;
			}
		});
		setRobots(newRobots);
	};

	const populate = async(event: Object) => {
    const scrollY = event.nativeEvent.contentOffset.y;
		if(scrollY > 1050*page) {
      await setTimeout(() => setPage(page+1), 2000)
    }
	};

	if (loading) {
		return (
			<>
				<View style={s.header}>
					<Image source={logo} style={s.header__img} />
					<Text style={s.header__text}>CRYPTUOSO</Text>
				</View>
        <View style={s.errorAndLoading}>
				  <Text style={s.errorAndLoading__text}>Loading...</Text>
        </View>
			</>
		);
	}
	if (error) {
		return (
			<>
				<View style={s.header}>
					<Image source={logo} style={s.header__img} />
					<Text style={s.header__text}>CRYPTUOSO</Text>
				</View>
				<Text style={s.errorAndLoading__text}>{error}</Text>
			</>
		);
	}
	return (
		<>
			<View style={s.header}>
				<Image source={logo} style={s.header__img} />
				<Text style={s.header__text}>CRYPTUOSO</Text>
			</View>
			<ScrollView style={s.list} onScroll={e => populate(e)}>
				{robots.map((el: Object, i:Number) => {
					if (i < page * 10) {
						return (
							<TouchableOpacity
								onPress={() => navigation.navigate('RobotDetails', { robot: el, onSubmit: Submit })}
								key={el.id}
							>
								<Robot id={el.id} code={el.code} />
							</TouchableOpacity>
						);
					}
				})}
			</ScrollView>
		</>
	);
};

export default RobotList;
