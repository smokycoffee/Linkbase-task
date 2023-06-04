import React from "react";
import { Dimensions, FlatList, Animated, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

// flatlist with horizontal scrollview, which is able to scroll through the URLs without any loading time but able to traverse anywhere within the screen
export default function App() {
  const urls = [
    "https://www.amazon.com/-/de/dp/B07N3RFXRL/ref=pd_ci_mcx_mh_ci_mcx_mr_mp_m_0?pd_rd_w=C8JmI&content-id=amzn1.sym.07889413-fea5-4a13-b06c-d39edf4aa03e&pf_rd_p=07889413-fea5-4a13-b06c-d39edf4aa03e&pf_rd_r=49PVZJ7PQETKW6WJ8R3N&pd_rd_wg=I909t&pd_rd_r=74e6ce3d-f18f-4e84-b9a5-b9073478d5e0&pd_rd_i=B07N3RFXRL&th=1",
    "https://www.spiegel.de/",
    "https://www.youtube.com/watch?v=LbWjVNjlpjA",
  ];
  const scrollX = new Animated.Value(0);

  const renderItem = ({ item }) => (
    <WebView
      source={{ uri: item }}
      style={{ flex: 1, width: WINDOW_WIDTH }}
      startInLoadingState={true}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={urls}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={true}
        keyExtractor={(_, index) => "key" + index}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
    </SafeAreaView>
  );
}
