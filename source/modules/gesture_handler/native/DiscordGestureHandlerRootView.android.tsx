// Module ID: 13920
// Function ID: 13921
// Name: DiscordGestureHandlerRootView
// Dependencies: [19, 17, 21, 13921, 6377, 2]
// Exports: default

// Module 13920 (DiscordGestureHandlerRootView)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let TurboModuleRegistry;
const require = arg1;
({ StyleSheet, TurboModuleRegistry } = get_ActivityIndicator);
const enforcing = TurboModuleRegistry.getEnforcing("RNGestureHandlerModule");
const styles = StyleSheet.create({ flex: { flex: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: null };
  obj[1] = jsx(require(6377) /* LegacyBaseButton */.GestureHandlerRootView, { style, children });
  return jsx(importDefault(13921), { style: styles.flex, children: null });
};
