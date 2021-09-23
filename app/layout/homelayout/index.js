/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
} from "react-native";
import LayoutHeader from "../../components/header/defaultHeader";
import JobListCard from "../../components/cards/joblistcard";
import { jobList } from "../../config/AppStrings";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { black } from "../../config/colors";

const jobs = require("../../data/jobs.json");

const HomeLayout = ({ navigation }) => {

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let jobsArray = jobs.jobs;
    let filterdArray = [];
    if (filteredData && jobsArray) {
      jobsArray.map((item) => {
        if (item.campaigns && item.campaigns.map.length > 0) {
          item.campaigns.map((campName) => {
            let updatableVal = filterdArray.filter(section => (section.campaigns && section.campaigns === campName));
            if (filterdArray.length > 0 && updatableVal.length > 0) {
              updatableVal[0].jobs.push(item);
            } else {
              const filteredItem = {
                campaigns: campName,
                jobs: [item],
              };
              filterdArray.push(filteredItem);
            }
          });
        }

      });
      setFilteredData(filterdArray);
    }
  }, []);

  const JobTitles = ({ title }) => {
    return (
      <View style={styles.titleWrap}>
        <View style={styles.iconBackground}>
          <Icon name={title === "Urgent vacancies" ? "flash" : (title === "Weekend shifts" ? "calendar" : "clock-o")}
                size={22} color={black} />
        </View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.backgroundStyle}>
      <LayoutHeader title={jobList.title} />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={(campList) =>
          <View>
            <JobTitles title={campList.item.campaigns} />
            <FlatList
              horizontal
              data={campList.item.jobs}
              renderItem={(item) => {
                return (<JobListCard itemData={item.item}
                                     onItemPress={() => navigation.push("DetailsPage", {
                                       campaigns: campList.item.campaigns,
                                       campData: item.item,
                                     })} />);
              }}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              contentContainerStyle={styles.horizontalList}
            />
          </View>
        } />
    </View>
  );
};

export default HomeLayout;
