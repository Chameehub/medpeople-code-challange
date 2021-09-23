import { StyleSheet } from "react-native";
import { DEFAULT_PADDING, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../config/constants";
import { black, buttonGreen, gray, lightGray, white } from "../../config/colors";

export const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
  scrollView: {
    marginBottom: DEFAULT_PADDING * 2,
  },
  imageBackground: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.3,
    paddingTop: DEFAULT_PADDING * 3,
  },
  titleContainer: {
    paddingHorizontal: DEFAULT_PADDING,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  customToolWrapper: {
    width: SCREEN_WIDTH * 0.35,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  titleBarTextWrapper: {
    backgroundColor: buttonGreen,
    padding: DEFAULT_PADDING * 0.5,
    alignSelf: "center",
    borderRadius: 20,
  },
  buttonStyles: {
    margin: DEFAULT_PADDING * 0.5,
  },
  titleBarText: {
    color: white,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  workPlaceWrapper: {
    position: "absolute",
    bottom: 0,
    marginHorizontal: DEFAULT_PADDING,
  },
  workPlaceDetailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  workPlaceRatingWrapper: {
    paddingLeft: SCREEN_WIDTH * 0.15 + DEFAULT_PADDING * 0.5,
    paddingBottom: DEFAULT_PADDING,
    flexDirection: "row",

  },
  placeIcon: {
    marginRight: DEFAULT_PADDING * 0.5,
    height: SCREEN_WIDTH * 0.15,
    width: SCREEN_WIDTH * 0.15,
    borderRadius: 40,
  },
  placeDetails: {},
  title: {
    color: white,
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    color: white,
    fontSize: 12,
    fontWeight: "bold",
  },
  subTitle2: {
    fontWeight: "normal",
  },
  summaryWrapper: {
    margin: DEFAULT_PADDING,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  summarySubWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: DEFAULT_PADDING * 0.5,
  },
  summarySubtext: {
    paddingLeft: DEFAULT_PADDING * 0.5,
    color: black,
    fontWeight: "bold",
    fontSize: 14,
  },
  lineSeparator: {
    height: 0.5,
    backgroundColor: lightGray,
  },
  contentTopicWrapper: {
    paddingVertical: DEFAULT_PADDING,
    marginHorizontal: DEFAULT_PADDING,
  },
  topicText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: DEFAULT_PADDING * 0.5,
  },
  contentText: {
    fontSize: 15,
    fontWeight: "normal",
  },
  addressContentText: {
    marginLeft: DEFAULT_PADDING,
    fontSize: 15,
    fontWeight: "normal",
  },
  shiftTimeListWrapper: {
    marginBottom: DEFAULT_PADDING * 0.5,
  },
  shiftTimeWrapper: {
    marginHorizontal: DEFAULT_PADDING,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    paddingLeft: DEFAULT_PADDING * 0.5,
    fontSize: 15,
  },
  dateText: {
    paddingLeft: DEFAULT_PADDING * 1.8,
    fontSize: 15,
  },
  rateText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  fullMonth: {
    fontSize: 12,
    color: gray,
    fontWeight: "normal",
  },

});
