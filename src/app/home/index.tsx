import { ImageBackground, View, Text } from "react-native";
import { styles } from "./styles";
import { Flight } from "../../components/flight";
import { Ionicons } from "@expo/vector-icons";
import { color } from "../../global/color";
import { Info } from "../../components/info";
import QRCode from "react-native-qrcode-svg";
import Svg, { Line, Circle } from "react-native-svg";

function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require("@/assets/cover.png")}
        alt="imagem de fundo"
      >
        <Text style={styles.title}>Cartáo de embarque</Text>
        <Text style={styles.subtitle}>Falta 45 dias para sua viagem</Text>
      </ImageBackground>
      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="Rio de janeiro" value="SD" />
            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={32} color={color.black} />
              <Text style={styles.hours}>10h45min</Text>
            </View>
            <Flight label="Nova Iorque" value="JFK" />
          </View>
          <Text style={styles.label}>Passgeiro</Text>
          <Text style={styles.name}>Elias de Barros Moura</Text>
          <View style={styles.details}>
            <View style={styles.inline}>
              <Info label="Data" value="17 de Nov." />
              <Info label="Embarque" value="17:25" />
            </View>
          </View>
        </View>
        <View>
          <Svg height={20} width="100%">
            <Line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={color.gray[400]}
              strokeWidth="1"
              strokeDasharray="5, 5" // cria um padrão onde a linha é desenhada por 5 unidades e depois há um espaço de 5 unidades.
            />

            <Circle r={8} cx={0} cy="50%" fill={color.black} />
            <Circle r={8} cx="100%" cy="50%" fill={color.black} />
          </Svg>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Info label="Voo" value="ZY 978" />
              <Info label="Assento" value="12A" />
            </View>
            <View style={styles.inline}>
              <Info label="Terminal" value="3" />
              <Info label="Portao" value="39" />
            </View>
          </View>
          <QRCode value="boarding code" size={130} />
        </View>
      </View>
    </View>
  );
}
export default Home;
