// Module ID: 11676
// Function ID: 90510
// Dependencies: [31, 27, 33, 10393, 10397, 3991, 2]

// Module 11676
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "result";

let closure_3;
let closure_4;
let require = arg1;
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
let closure_6 = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const memoResult = require("result").memo(function ChannelSafeAreaBottom(channelId) {
  const tmp = importDefault(10393)();
  const require = tmp;
  let obj = require(3991);
  const fn = function n() {
    return { height: tmp.get() };
  };
  fn.__closure = { heightSharedValue: tmp };
  fn.__workletHash = 6491350126069;
  fn.__initData = closure_6;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle };
  const items = [absoluteFill.absoluteFill, importDefault(10397)(channelId.channelId)];
  obj.children = <closure_4 style={items} />;
  return jsx(importDefault(3991).View, { style: animatedStyle });
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;
