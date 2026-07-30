// Module ID: 11733
// Function ID: 11734
// Dependencies: [19, 17, 21, 10417, 10421, 4050, 2]

// Module 11733
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";

let c3;
let c4;
const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const memoResult = require("noop").memo(function ChannelSafeAreaBottom(channelId) {
  let _require;
  const tmp = importDefault(10417)();
  _require = tmp;
  let obj = _require(4050);
  const fn = function n() {
    return { height: _undefined.get() };
  };
  fn.__closure = { heightSharedValue: tmp };
  fn.__workletHash = 6491350126069;
  fn.__initData = closure_6;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: null };
  const items = [absoluteFill.absoluteFill, importDefault(10421)(channelId.channelId)];
  obj[1] = <closure_4 style={items} />;
  return jsx(importDefault(4050).View, { style: animatedStyle, children: null });
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;
