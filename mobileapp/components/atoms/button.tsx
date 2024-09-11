import { Button as NativeButton, View } from "react-native";

export default function Button({ buttonText,color }) {
  return (
    <View>
      <NativeButton color={color} title={buttonText} />
    </View>
  );
}
