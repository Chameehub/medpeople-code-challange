import { StyleSheet } from "react-native";
import { DEFAULT_PADDING, SCREEN_WIDTH } from "../../config/constants";
import { black, gray, reddishBackground, white } from "../../config/colors";

export const styles = StyleSheet.create({
  jobListWrapper: {
    marginHorizontal: DEFAULT_PADDING * 0.5,
    height: SCREEN_WIDTH * 0.8,
    width: SCREEN_WIDTH * 0.75,
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageWrapper: {
    flex: 0.24,
    paddingHorizontal: DEFAULT_PADDING,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageStyles: {
    padding: DEFAULT_PADDING * 0.5,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContentWrap: {
    flex: 0.76,
    backgroundColor: white,
    padding: DEFAULT_PADDING,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  faceIcon: {
    height: SCREEN_WIDTH * 0.1,
    width: SCREEN_WIDTH * 0.1,
    borderRadius: 20,
    alignItems: "center",
  },
  heartIcon: {
    height: SCREEN_WIDTH * 0.1,
    width: SCREEN_WIDTH * 0.1,
    backgroundColor: "green",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubTitle: {
    color: gray,
    fontSize: 12,
  },
  specialityWrap: {
    flexDirection: "row",
  },
  iconWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  speciality: {
    marginVertical: DEFAULT_PADDING * 0.5,
    padding: DEFAULT_PADDING * 0.5,
    borderRadius: 5,
    flexWrap: "wrap",
    backgroundColor: reddishBackground,
  },
  specialityText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  shiftWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shiftText: {
    fontWeight: "bold",
  },
  iconText: {
    marginHorizontal: DEFAULT_PADDING * 0.3,
    fontWeight: "bold",
  },
  bottomContainer: {
    height: "50%",
    flexDirection: "column-reverse",
  },
  lineSeparator: {
    height: 0.5,
    backgroundColor: black,
  },
  iconContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: DEFAULT_PADDING,
  },
});
