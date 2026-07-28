// Module ID: 13586
// Function ID: 104433
// Name: DiscordGestureHandlerRootView
// Dependencies: [31, 27, 33, 13587, 5251, 2]
// Exports: default

// Module 13586 (DiscordGestureHandlerRootView)
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
  const obj = { style: styles.flex, children: jsx(require(5251) /* Directions */.GestureHandlerRootView, { style, children }) };
  return jsx(importDefault(13587), { style: styles.flex, children: jsx(require(5251) /* Directions */.GestureHandlerRootView, { style, children }) });
};
