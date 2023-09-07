import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CategoryDishes from "./CategoryDishes";

const MenuList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [dishes, setDishes] = useState([]);

  const url = `https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`;

  const getAllData = async () => {
    const responsee = await axios.get(url);
    return responsee.data;
  };

  const { isLoading, data, error } = useQuery(["rest_data"], getAllData);

  const details = data?.[0];

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const handleSlideClick = (category, dishes, index) => {
    setDishes(dishes);
    setActiveTab(index);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {details?.table_menu_list?.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() =>
                  handleSlideClick(
                    item.menu_category,
                    item.category_dishes,
                    index
                  )
                }
              >
                <Text
                  style={[
                    styles.menuListItems,
                    {
                      color: activeTab === index ? "red" : "grey",
                      borderBottomColor: activeTab === index ? "red" : "white",
                    },
                  ]}
                >
                  {item?.menu_category}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <CategoryDishes
        dishes={dishes ? dishes : details?.table_menu_list[0]?.category_dishes}
      />
    </>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  menuListItems: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 4,
    margin: 5,
    borderBottomWidth: 2,
    height: 30,
  },
});
