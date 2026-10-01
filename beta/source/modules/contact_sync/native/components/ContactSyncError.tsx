// Module ID: 12191
// Function ID: 12192
// Name: ContactSyncError
// Dependencies: [19, 21, 4836, 4566, 4837, 4832, 2]
// Exports: default

// Module 12191 (ContactSyncError)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { justifyContent: "center" }, error: { paddingHorizontal: 16, textAlign: "center" } });
const __initData = { code: "function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}" };
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default function ContactSyncError(error) {
  let closure_0;
  error = error.error;
  const style = error.style;
  const tmp = closure_4();
  _require = tmp2;
  let obj = require("ReanimatedRexport");
  const fn = function l() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (closure_0) {
      num = 44;
    }
    const obj = { height: withTiming(num) };
    return obj;
  };
  fn.__closure = { withTiming: require("timing").withTiming, hasError: null != error && "" !== error, ERROR_HEIGHT: 44 };
  fn.__workletHash = 14558247431913;
  fn.__initData = __initData;
  ({ withTiming: require("timing").withTiming, hasError: null != error && "" !== error, ERROR_HEIGHT: 44 });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [tmp.container, style, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  return <View style={items}>{null}</View>;
};
