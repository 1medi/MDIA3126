import {Text, View} from "react-native"

export default function Name ({ nameText }) {
  return(
<View>
  <Text style = {{
    color:"blue",
    fontSize:30
  }}
  >
    {nameText}
    </Text>
</View>
)}