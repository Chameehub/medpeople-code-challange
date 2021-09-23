import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const LayoutHeader = ({ title }) => {

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default LayoutHeader;
