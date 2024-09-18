import {Text, View} from "react-native"

export default function BodyText ({ bodyText }) {
  return(
<View>
  <Text style = {{
    color:"green",
    fontSize:16
  }}
  >
    {bodyText}
    </Text>
</View>
)}