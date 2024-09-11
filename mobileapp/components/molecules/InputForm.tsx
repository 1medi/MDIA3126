import { TextInput, View } from "react-native";
import Button from "../atoms/button";
import Label from "../atoms/label";

export default function InputForm({ labelText, buttonText, placeholderText }) {
  return (
    <View
      style={{
        alignContent: "center",
        backgroundColor:"orange",
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        flexDirection:"row"
      }}
    >
      <Label labelText={labelText} />
      <TextInput
        style={{padding: 10}}
        defaultValue={placeholderText}
      />
      <Button
        buttonText={buttonText}
        color={"red"}
      />
    </View>
  );
}
