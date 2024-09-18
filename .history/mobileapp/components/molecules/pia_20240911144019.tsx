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
      width: 300,
      height: 600,
      alignContent: "center",
    },
  });
  return (
    <View
    style={{
      borderWidth: 1,
      padding:10
    }}
    >
      <Image
        style={styles.logo}
        source={{
          uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcanadaproduce.ca%2Fproducts%2Fhoneydew-melon&psig=AOvVaw1sqD-OLhIO7UCWZ4DrCnyP&ust=1726177158044000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLikwZXtu4gDFQAAAAAdAAAAABAE",
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
