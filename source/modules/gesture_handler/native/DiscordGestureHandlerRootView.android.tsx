// Module ID: 13724
// Function ID: 13725
// Name: DiscordGestureHandlerRootView
// Dependencies: [19, 17, 21, 13725, 5368, 2]
// Exports: default

// Module 13724 (DiscordGestureHandlerRootView)
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const styles = StyleSheet.create({ flex: { flex: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: null };
  obj[1] = jsx(require(5368) /* Directions */.GestureHandlerRootView, { style, children });
  return jsx(importDefault(13725), { style: styles.flex, children: null });
};
