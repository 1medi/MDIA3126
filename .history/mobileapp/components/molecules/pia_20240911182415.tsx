import { StyleSheet, View, Image } from "react-native";
import BodyText from "../atoms/bodyText";
import Name from "../atoms/name";
import React from "react";

export default function Madi () {
  const styles = StyleSheet.create({
    container: {
      alignContent:"center",
    },
    logo: {
      width: 500,
      height: 600,
      alignContent: "center",
    },
  });
  return (
    <View
    style={{
      borderWidth: 1,
      padding:20
    }}
    >
      <Image
        style={styles.logo}
        source={{
          uri: "https://canadaproduce.ca/cdn/shop/products/Honeydew.jpg?v=1643268548",
        }}
      />
      <Name
      nameText="Pia Mendoza"
      />
      <BodyText
      bodyText="Hello! This post is about honeydew melons!"
      />
    </View>
  );
}
