import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Home from "../screens/home/Home";
import FlashMob from "../screens/flashMob/FlashMob";
import Board from "../screens/board/Board";
import bottomTabIconOption from "../../utils/constant/naviagation/NavigationUtil";
import ReservationNaviagator from "./ReservationNaviagator";

const bottomTab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
	return (
		<bottomTab.Navigator
			initialRouteName="Home"
			backBehavior="history"
			labeled={false}
			screenOptions={({route}) => ({
				tabBarIcon: () => bottomTabIconOption(route),
			})}
		>
			<bottomTab.Screen
				name="Home"
				component={Home}
			/>
			<bottomTab.Screen
				name="FlashMob"
				component={FlashMob}
			/>
			<bottomTab.Screen
				name="ReservingTimeTable"
				component={ReservationNaviagator}
			/>
			<bottomTab.Screen
				name="Board"
				component={Board}
			/>
		</bottomTab.Navigator>
	);
}

export default BottomTabNavigator;