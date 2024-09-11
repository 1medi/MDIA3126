import { View } from "react-native";
import Button from "@/components/atoms/button";
import Label from "@/components/atoms/label";
import InputForm from "@/components/molecules/InputForm";
import Name from "@/components/atoms/name"
import BodyText from "@/components/atoms/bodyText";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "beige",
      }}
    >
      <Button 
      color='orange'
      buttonText="lol"
      
      />
      <Label labelText="I am a label"/>

      <InputForm
      labelText="hehe"
      placeholderText="This is some placeholder text"
      buttonText="buddon"
      />

      <Name
      nameText="Rimando"
      />

      <BodyText
      bodyText="body copy"
      />
    </View>
  );
}
