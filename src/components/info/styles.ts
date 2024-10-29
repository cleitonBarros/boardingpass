import { StyleSheet } from "react-native";
import { color } from "../../global/color";
import { font_family } from "../../global/font-family";

export const s = StyleSheet.create({
  container: {
    gap: 2,
  },
  label: {
    color: color.gray[400],
    fontSize: 10,
    textTransform: "uppercase",
    fontFamily: font_family.regular,
  },
  value: {
    color: color.black,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: font_family.bold,
  },
});
