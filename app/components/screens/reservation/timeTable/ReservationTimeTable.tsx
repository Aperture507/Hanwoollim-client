import React, {useState} from "react";
import {View, Text} from "react-native";
import Header from "./Header";

interface pickerValueInteface {
	label: string, // "1"->이번주, "2"->다음주
	value: string,
}

function ReservationTimeTable({navigation}) {
	const [pickerValue, setPickerValue] : [pickerValueInteface, Function] = useState({label: "2021. 02. 1주차  ▽", value: "1"});
	const reserveBtnListener = () => {
		navigation.navigate("ReservationProcess", {
			currentWeek: pickerValue.label,
		});
	};

	return (
		<View>
			<Header
				btnListener={reserveBtnListener}
				pickerValue={pickerValue}
				setPickerValue={setPickerValue}
			/>
			<Text>{"예약 화면입니다."}</Text>
		</View>
	);
}

export default ReservationTimeTable;