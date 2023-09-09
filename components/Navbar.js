import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(
        `https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`
      );
      setRestaurantDetails(result.data);
    };
    fetch();
  }, []);

  const restaurantName = restaurantDetails?.[0]?.restaurant_name;

  const count = useSelector((state) => state.cart.items)
  const totalItemCount = count.reduce((total, item) => total + item.count, 0);

  const categoryCount = count.length;




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.title}>{restaurantName}</Text>
        <Text style={styles.myOrders}>My Orders</Text>
        <View style={styles.cartContainer}>
          <FontAwesome
            name="shopping-cart"
            size={24}
            color="black"
            style={styles.icon}
          />
          <View style={styles.cartCountContainer}>
            <Text style={styles.cartCount}>{totalItemCount}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginTop: 25,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
  },
  myOrders: {
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
    paddingLeft: 28,
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 14,
  },
  cartCountContainer: {
    backgroundColor: "red",
    borderRadius: 12,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -10,
    right: 0,
  },
  cartCount: {
    color: "white",
    fontWeight: "bold",
  },
});
