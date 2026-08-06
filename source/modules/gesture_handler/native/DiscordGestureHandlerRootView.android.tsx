// Module ID: 13733
// Function ID: 13734
// Name: DiscordGestureHandlerRootView
// Dependencies: [19, 17, 21, 13734, 5407, 2]
// Exports: default

// Module 13733 (DiscordGestureHandlerRootView)
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
  obj[1] = jsx(require(5407) /* Directions */.GestureHandlerRootView, { style, children });
  return jsx(importDefault(13734), { style: styles.flex, children: null });
};
