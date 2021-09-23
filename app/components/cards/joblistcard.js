import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { black, white } from "../../config/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Ionicons";

const JobListCard = ({ itemData, onItemPress }) => {

  const getMaximumAmount = () => {
    let max;
    itemData.available_shifts.map((item) => {
      max < item.hourly_pay_in_eur ? max = item.hourly_pay_in_eur : max;
    });
    return max;
  };

  const getShifts = () => {
    let shiftArray = [];
    let UIList = [];
    itemData.available_shifts.map((item) => {
      !shiftArray.includes(item.type) ? shiftArray.push(item.type) : shiftArray;
    });

    shiftArray.includes("day") ? UIList.push(
      <Icon1 name={"md-sunny-outline"} size={25} color={black} />,
    ) : UIList;
    shiftArray.includes("night") ? UIList.push(
      <Icon1 name={"ios-moon-outline"} size={25} color={black} />,
    ) : UIList;
    shiftArray.includes("evening") ? UIList.push(
      <Icon1 name={"md-partly-sunny-outline"} size={25} color={black} />,
    ) : UIList;

    return UIList;
  };

  return (
    <TouchableOpacity style={styles.jobListWrapper} onPress={onItemPress}>
      <ImageBackground
        source={{ uri: itemData.background_image }}
        style={styles.imageWrapper}
        imageStyle={styles.imageStyles}>
        <Image style={styles.faceIcon} source={{ uri: itemData.logo }} />
        {/*<View style={styles.heartIcon}></View>*/}
        <Icon name={"heart-o"} size={30} color={white} />
      </ImageBackground>
      <View style={styles.cardContentWrap}>
        <Text style={styles.cardTitle}>{itemData.employer_name}</Text>
        <Text style={styles.cardSubTitle}>{itemData.address.city}</Text>
        <View style={styles.specialityWrap}>
          <View style={styles.speciality}>
            <Text style={styles.specialityText}>{itemData.department}</Text>
          </View>
        </View>
        <View style={styles.shiftWrap}>
          <Text style={styles.shiftText}>Up to {getMaximumAmount()} Euro per shift</Text>
          <Text style={styles.shiftText}>{itemData.available_shifts.length} shift</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconWrap}>
              {getShifts()}
            </View>
            <View style={styles.iconWrap}>
              <Icon name={"home"} size={25} color={black} />
              <Text style={styles.iconText}>{itemData.distance_in_km} km</Text>
              <Icon name={"star-o"} size={25} color={black} />
              <Text style={styles.iconText}>{itemData.average_rating}</Text>
            </View>
          </View>
          <View style={styles.lineSeparator} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default JobListCard;
