import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import Swiper from "react-native-swiper";

// most popular package, Swiper with 10k stars on github
export default function AppTest() {
  const urls = [
    "https://www.amazon.com/-/de/dp/B07N3RFXRL/ref=pd_ci_mcx_mh_ci_mcx_mr_mp_m_0?pd_rd_w=C8JmI&content-id=amzn1.sym.07889413-fea5-4a13-b06c-d39edf4aa03e&pf_rd_p=07889413-fea5-4a13-b06c-d39edf4aa03e&pf_rd_r=49PVZJ7PQETKW6WJ8R3N&pd_rd_wg=I909t&pd_rd_r=74e6ce3d-f18f-4e84-b9a5-b9073478d5e0&pd_rd_i=B07N3RFXRL&th=1",
    "https://www.youtube.com/watch?v=LbWjVNjlpjA",
    "https://www.spiegel.de/",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Swiper loop={false}>
        {urls.map((url, index) => (
          <WebView
            key={index}
            source={{ uri: url }}
            style={styles.webView}
            startInLoadingState={true}
          />
        ))}
      </Swiper>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
