// Module ID: 16403
// Function ID: 16404
// Name: DiscordGestureHandlerRootView
// Dependencies: [19, 17, 21, 16404, 5303, 2]
// Exports: default

// Module 16403 (DiscordGestureHandlerRootView)
import Fragment from "Fragment" /* 21 */;
import DiscordGestureHandlerRootViewNativeComponentDefault from "DiscordGestureHandlerRootViewNativeComponent" /* 16404 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let TurboModuleRegistry;
({ StyleSheet, TurboModuleRegistry } = react_native);
const jsx = Fragment.jsx;
const enforcing = TurboModuleRegistry.getEnforcing("RNGestureHandlerModule");
const styles = StyleSheet.create({ flex: { flex: 1 } });
const result = size.fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  DiscordGestureHandlerRootViewNativeComponentDefault;
  return <tmp style={styles.flex}>{null}</tmp>;
};
