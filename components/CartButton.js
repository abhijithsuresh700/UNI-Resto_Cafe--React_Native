import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { incrementCart, decrementCart } from "../redux/cartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const countt = useSelector((state) => state.cart.items); 

  const currentDishId = props.item.dish_id;
  const currentDishCount =
    countt.find((item) => item.dishId === currentDishId)?.count || 0;

  const handleAddToCart = (incrementValue) => {
    if (count === 0 && incrementValue === -1) {
      setText("");
    } else {
      if (incrementValue === 1) {
        dispatch(incrementCart(props?.item?.dish_id));
      } else {
        dispatch(decrementCart(props?.item?.dish_id));
      }
      setCount(count + incrementValue);
      setText("Customization available");
    }
  };

  useEffect(() => {
    setCount(currentDishCount);
    if (currentDishCount >= 1) {
      setText("Customization available");
    } else {
      setText("");
    }
  }, [props.category, count]);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(-1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.countText}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {props.item.dish_Availability ? (
        <Text style={styles.text}>{text}</Text>
      ) : (
        <Text></Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    borderRadius: 100,
    width: 160,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
    marginLeft: 8,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  countText: {
    color: "white",
    fontSize: 18,
  },
  text: {
    color: "red",
    fontSize: 14,
    fontFamily: "serif",
    marginTop: 10,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default CartButton;
