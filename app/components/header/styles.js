import { StyleSheet } from "react-native";
import { DEFAULT_PADDING } from "../../config/constants";
import { boarderGray, white } from "../../config/colors";

export const styles = StyleSheet.create({

  titleContainer: {
    paddingTop: DEFAULT_PADDING * 1.8,
    width: "100%",
    height: "10%",
    backgroundColor: white,
    justifyContent: "center",
    borderBottomColor: boarderGray,
    borderBottomWidth: 1,
  },
  titleText: {
    paddingHorizontal: DEFAULT_PADDING,
    fontSize: 18,
    fontWeight: "bold",
  },

});
