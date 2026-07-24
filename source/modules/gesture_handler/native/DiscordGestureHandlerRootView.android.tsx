// Module ID: 13530
// Function ID: 104128
// Name: DiscordGestureHandlerRootView
// Dependencies: [31, 27, 33, 13531, 5217, 2]
// Exports: default

// Module 13530 (DiscordGestureHandlerRootView)
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const styles = StyleSheet.create({ flex: { flex: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: jsx(require(5217) /* Directions */.GestureHandlerRootView, { style, children }) };
  return jsx(importDefault(13531), { style: styles.flex, children: jsx(require(5217) /* Directions */.GestureHandlerRootView, { style, children }) });
};
