import React from "react";
import { styles } from "./styles";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Ionicons";
import { black, white } from "../../config/colors";
import { DetailsPage } from "../../config/AppStrings";

const DetailsLayout = ({ navigation, route }) => {
  const { campData } = route.params;

  const starRating = () => {
    let UI = [];
    for (let i = 0; i < 5; i++) {
      if (i < campData.average_rating) {
        UI.push(<Icon iconStyle={styles.buttonStyles} name={"star"} size={25} color={white} />);
      } else {
        UI.push(<Icon iconStyle={styles.buttonStyles} name={"star-o"} size={25} color={white} />);
      }
    }
    return UI;
  };

  const HeaderComponent = () => {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: campData.background_image }}>
        <View style={styles.titleContainer}>
          <Icon name={"chevron-left"} size={25} color={white} onPress={() => navigation.pop()} />

          <View>
            <View style={styles.customToolWrapper}>
              <Icon iconStyle={styles.buttonStyles} name={"heart-o"} size={25} color={white} />
              <Icon iconStyle={styles.buttonStyles} name={"share-alt"} size={25} color={white} />
              <View style={styles.titleBarTextWrapper}>
                <Text style={styles.titleBarText}>{DetailsPage.viewShift}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.workPlaceWrapper}>
          <View style={styles.workPlaceDetailsWrapper}>
            <Image style={styles.placeIcon} source={{ uri: campData.logo }} />
            <View style={styles.placeDetails}>
              <Text style={styles.title}>{campData.employer_name}</Text>
              <Text style={styles.subTitle}>{campData.department} in <Text
                style={styles.subTitle2}>{campData.address.city}</Text></Text>
            </View>
          </View>
          <View style={styles.workPlaceRatingWrapper}>
            {starRating()}
          </View>
        </View>
      </ImageBackground>
    );
  };

  const SummarySubComponent = ({ icon, text }) => {
    return (
      <View style={styles.summarySubWrapper}>
        <Icon name={icon} size={25} color={black} onPress={() => navigation.pop()} />
        <Text style={styles.summarySubtext}>{text}</Text>
      </View>
    );
  };

  const getMaxAverage = () => {
    let max = 0;
    for (item of campData.available_shifts) {
      max < item.hourly_pay_in_eur / item.number_of_hours ? max = item.hourly_pay_in_eur / item.number_of_hours : max;
    }

    return Math.round(max);
  };

  const SummaryComponent = () => {
    return (
      <View style={styles.summaryWrapper}>
        <View>
          <SummarySubComponent icon={"calendar"} text={campData.available_shifts.length + " shifts"} />
          <SummarySubComponent icon={"user"} text={campData.department} />
        </View>
        <View>
          <SummarySubComponent icon={"money"} text={getMaxAverage() + " euro/hour"} />
          <SummarySubComponent icon={"home"} text={campData.distance_in_km + "km"} />
        </View>
      </View>
    );
  };

  const LineSeparator = () => {
    return (
      <View style={styles.lineSeparator} />
    );
  };

  const ContentTopics = ({ topic, content }) => {
    return (
      <View style={styles.contentTopicWrapper}>
        <Text style={styles.topicText}>{topic}</Text>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    );
  };

  const rateList = () => {
    let UIList = [];
    if (campData) {
      campData.available_shifts.map(item => {
        UIList.push(
          <View style={styles.shiftTimeListWrapper}>
            <View style={styles.shiftTimeWrapper}>
              <View style={styles.timeWrapper}>
                <Icon1
                  name={item.type === "day" ? "md-sunny-outline" : (item.type === "night" ? "ios-moon-outline" : "md-partly-sunny-outline")}
                  size={25} color={black} />
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
              <Text
                style={styles.rateText}>{item.hourly_pay_in_eur}{DetailsPage.hourlyRate}-{item.number_of_hours}{DetailsPage.hours}</Text>
            </View>
            <View style={styles.shiftTimeWrapper}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.fullMonth}>approx. {item.hourly_pay_in_eur * 150} Euro/month at full time</Text>
            </View>

          </View>,
        );
      });
    }
    return UIList;
  };

  return (
    <View style={styles.containerWrapper}>
      <HeaderComponent />
      <ScrollView style={styles.scrollView}>
        <SummaryComponent />
        <LineSeparator />
        <ContentTopics topic={DetailsPage.tasks} content={campData.tasks} />
        <LineSeparator />
        <ContentTopics topic={DetailsPage.qualification} content={campData.qualifications} />
        <LineSeparator />
        <ContentTopics topic={DetailsPage.salaryAndHours} content={DetailsPage.salaryNote} />
        {rateList()}
        <LineSeparator />
        <ContentTopics topic={DetailsPage.hos} content={campData.employer_description} />
        <Text style={styles.addressContentText}>{campData.address.street}{"\n"}
          {campData.address.postal_code}{"\n"} {campData.address.city}</Text>
      </ScrollView>

    </View>
  );
};
export default DetailsLayout;
