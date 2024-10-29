import { StyleSheet } from "react-native";
import { color } from "../../global/color";
import { font_family } from "../../global/font-family";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: color.white,
    fontSize: 24,
    fontFamily: font_family.extra_bold,
  },
  subtitle: {
    color: color.gray[300],
    fontSize: 14,
    fontFamily: font_family.medium,
  },
  ticket: {
    backgroundColor: color.white,
    borderRadius: 22,
    overflow: "hidden",
    paddingBottom: 24,
  
  },
  content: {
    padding: 20,
  },
  flight: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 52,
  },
  duration: {
    alignItems: "center",
  },
  hours: {
    color: color.gray[500],
    fontSize: 14,
    fontFamily: font_family.regular,
  },
  label: {
    color: color.gray[400],
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: font_family.regular,
  },
  name: {
    fontSize: 22,
    fontFamily: font_family.bold,
  },
  details: {
    marginTop: 52,
    gap: 32,
  },
  inline: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  footer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  footerContent: {
    flex: 1,
    gap: 24,
  },
});
