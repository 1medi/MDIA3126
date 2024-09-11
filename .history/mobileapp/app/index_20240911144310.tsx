import { View } from "react-native";
import Madi from "@/components/molecules/madi";
import Pia from "@/components/molecules/pia"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "beige",
        flexDirection: "row",
        gap: 20
      }}
    >
      <Madi/>
      <Pia/>
    </View>
  );
}
