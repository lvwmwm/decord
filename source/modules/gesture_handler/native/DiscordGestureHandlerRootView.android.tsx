// Module ID: 13696
// Function ID: 13697
// Name: DiscordGestureHandlerRootView
// Dependencies: [19, 17, 21, 13697, 5353, 2]
// Exports: default

// Module 13696 (DiscordGestureHandlerRootView)
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
  obj[1] = jsx(require(5353) /* Directions */.GestureHandlerRootView, { style, children });
  return jsx(importDefault(13697), { style: styles.flex, children: null });
};
