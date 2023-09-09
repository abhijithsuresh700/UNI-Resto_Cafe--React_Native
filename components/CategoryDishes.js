import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CartButton from "./CartButton";

const CategoryDishes = (props) => {

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {props.dishes === undefined
        ? ""
        : props.dishes.map((item, index) => {
            return (
              <View style={styles.cartBox} key={index}>
                <View style={styles.itemInfo}>
                  <View style={styles.iconAndName}>
                    <FontAwesome5
                      name="dot-circle"
                      size={14}
                      color="black"
                      style={[
                        styles.adjustIcon,
                        {
                          color: item.dish_Type === 1 ? "red" : "green",
                        },
                      ]}
                    />
                    <Text style={styles.dishName}>{item.dish_name}</Text>
                  </View>
                  <View style={styles.priceAndCalory}>
                    <Text style={styles.dishPrice}>
                      {item.dish_currency} {item.dish_price}
                    </Text>
                    <Text style={styles.caloriesText}>
                      {item.dish_calories} Calories
                    </Text>
                  </View>
                  <Text style={styles.dishDescription}>
                    {item.dish_description}
                  </Text>
                  <View style={styles.cartButtonContainer}>
                    {item.dish_Availability ? (
                      <CartButton item={item} cartCount={props.setCart} category={props.category}/>
                    ) : (
                      <Text style={styles.notAvailableText}>Not Available</Text>
                    )}
                  </View>
                </View>
                <View style={styles.itemImage}>
                  <Image
                    source={{ uri: item.dish_image }}
                    style={styles.dishImage}
                  />
                </View>
              </View>
            );
          })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  itemInfo: {
    flex: 2,
  },
  iconAndName: {
    flexDirection: "row",
    alignItems: "center",
  },
  adjustIcon: {
    marginRight: 5,
  },
  dishName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  dishPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginLeft: 20,
  },
  dishDescription: {
    fontSize: 14,
    color: "black",
    marginLeft: 20,
    paddingTop: 10,
  },
  cartButtonContainer: {
    marginLeft: 8,
    marginTop: 8,
  },
  notAvailableText: {
    fontSize: 14,
    color: "red",
    marginTop: 10,
    fontWeight: "bold",
    marginLeft: 16,
  },
  itemImage: {
    flex: 1,
    alignItems: "flex-end",
  },
  caloriesText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    alignItems: "flex-end",
  },
  dishImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  priceAndCalory: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 76,
  },
});

export default CategoryDishes;
