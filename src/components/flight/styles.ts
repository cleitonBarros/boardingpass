import { StyleSheet } from "react-native";
import { color } from "../../global/color";
import { font_family } from "../../global/font-family";

export const s = StyleSheet.create({
  label: {
    color: color.gray[400],
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: font_family.regular,
  },
  value: {
    fontSize: 42,
    color: color.black,
    fontFamily: font_family.bold,
    marginTop: -7,
  },
});
