import { StyleSheet } from "react-native";
import { reddishBackground, white } from "../../config/colors";
import { DEFAULT_PADDING, SCREEN_WIDTH } from "../../config/constants";

export const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: white,
  },
  titleWrap: {
    marginTop: DEFAULT_PADDING,
    paddingLeft: DEFAULT_PADDING,
    flexDirection: "row",
  },
  iconBackground: {
    height: SCREEN_WIDTH * 0.1,
    width: SCREEN_WIDTH * 0.1,
    backgroundColor: reddishBackground,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  titleText: {
    marginStart: DEFAULT_PADDING,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  horizontalList: {
    padding: DEFAULT_PADDING,
  },
});
