import Home from "./src/app/home";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoadted] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_400Regular,
  });

  if (!fontsLoadted) return null;
  return <Home />;
}
