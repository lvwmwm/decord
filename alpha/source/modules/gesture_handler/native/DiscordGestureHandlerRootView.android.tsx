// Module ID: 14799
// Function ID: 14800
// Name: DiscordGestureHandlerRootView
// Dependencies: [19, 17, 21, 558, 576, 14800, 6334, 2]

// Module 14799 (DiscordGestureHandlerRootView)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import DiscordGestureHandlerRootViewNativeComponentDefault from "DiscordGestureHandlerRootViewNativeComponent" /* 14800 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let TurboModuleRegistry;
({ StyleSheet, TurboModuleRegistry } = react_native);
const jsx = Fragment.jsx;
const enforcing = TurboModuleRegistry.getEnforcing("RNGestureHandlerModule");
const styles = StyleSheet.create({ flex: { flex: 1 } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DiscordGestureHandlerRootView(arg0) {
  let children;
  let style;
  const obj = react2;
  const cResult = obj.c(3);
  ({ children, style } = arg0);
  if (cResult[0] === children) {
    let tmp4;
    if (cResult[1] === style) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  DiscordGestureHandlerRootViewNativeComponentDefault;
  const tmp6 = <tmp5 style={styles.flex}>{null}</tmp5>;
  cResult[0] = children;
  cResult[1] = style;
  cResult[2] = tmp6;
  tmp4 = tmp6;
}) : (function DiscordGestureHandlerRootView(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  DiscordGestureHandlerRootViewNativeComponentDefault;
  return <tmp style={styles.flex}>{null}</tmp>;
});
const result = size.fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default tmp5;
