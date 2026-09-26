// Module ID: 14866
// Function ID: 14867
// Name: DiscordGestureHandlerRootView
// Dependencies: [19, 17, 21, 14867, 6929, 2]
// Exports: default

// Module 14866 (DiscordGestureHandlerRootView)
import LegacyBaseButton from "LegacyBaseButton" /* 6929 */;
import DiscordGestureHandlerRootViewNativeComponentDefault from "DiscordGestureHandlerRootViewNativeComponent" /* 14867 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, TurboModuleRegistry } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const enforcing = TurboModuleRegistry.getEnforcing("RNGestureHandlerModule");
const styles = StyleSheet.create({ flex: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }) };
  return jsx(DiscordGestureHandlerRootViewNativeComponentDefault, { style: styles.flex, children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }) });
};
