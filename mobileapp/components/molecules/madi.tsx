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
      width: 600,
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
          uri: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400",
        }}
      />
      <Name
      nameText="Madi Tabon"
      />
      <BodyText
      bodyText="I love to design test and develop"
      />
    </View>
  );
}
