import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import React, { useState } from "react";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

// UI with the purple bar at the bottom, only able to traverse through the URLs by swiping left or right in the purple container
export default function App() {
  const [index, setIndex] = useState(0);

  const urls = [
    "https://www.amazon.com/-/de/dp/B07N3RFXRL/ref=pd_ci_mcx_mh_ci_mcx_mr_mp_m_0?pd_rd_w=C8JmI&content-id=amzn1.sym.07889413-fea5-4a13-b06c-d39edf4aa03e&pf_rd_p=07889413-fea5-4a13-b06c-d39edf4aa03e&pf_rd_r=49PVZJ7PQETKW6WJ8R3N&pd_rd_wg=I909t&pd_rd_r=74e6ce3d-f18f-4e84-b9a5-b9073478d5e0&pd_rd_i=B07N3RFXRL&th=1",
    "https://www.spiegel.de/",
    "https://www.youtube.com/watch?v=LbWjVNjlpjA",
  ];

  const onSwipe = (direction) => {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

    if (direction === SWIPE_LEFT && index < urls.length - 1) {
      setIndex(index + 1);
    } else if (direction === SWIPE_RIGHT && index > 0) {
      setIndex(index - 1);
    }
  };

  // swipe thresholds
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: urls[index] }}
        style={styles.webView}
        startInLoadingState={true}
      />
      <GestureRecognizer
        onSwipe={(direction) => onSwipe(direction)}
        config={config}
        style={styles.bottomSwipeContainer}
      >
        <Text style={styles.indexText}>{`URL: ${index + 1}`}</Text>
      </GestureRecognizer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webView: {
    flex: 1,
  },
  bottomSwipeContainer: {
    height: 70, // the height of bottom swipe area
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  indexText: {
    color: "white",
    fontSize: 16,
  },
});
