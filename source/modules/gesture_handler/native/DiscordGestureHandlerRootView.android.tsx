// Module ID: 13747
// Function ID: 13748
// Name: DiscordGestureHandlerRootView
// Dependencies: [19, 17, 21, 13748, 5426, 2]
// Exports: default

// Module 13747 (DiscordGestureHandlerRootView)
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
  obj[1] = jsx(require(5426) /* Directions */.GestureHandlerRootView, { style, children });
  return jsx(importDefault(13748), { style: styles.flex, children: null });
};
