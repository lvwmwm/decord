// Module ID: 12983
// Function ID: 100496
// Name: GuildProgressBar
// Dependencies: [31, 27, 33, 4130, 11507, 689, 3991, 4131, 4134, 2]
// Exports: default

// Module 12983 (GuildProgressBar)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "relative", backgroundColor: require("useIOSCompletionStates").PROGRESS_BACKGROUND_COLOR, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: 8 };
_createForOfIteratorHelperLoose.wrapper = _createForOfIteratorHelperLoose;
const obj1 = { position: "absolute", height: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.progress = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_7 = { code: "function GuildProgressBarTsx1(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+\"%\"};}" };
let result = require("jsxProd").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default function GuildProgressBar(percent) {
  percent = percent.percent;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = percent(3991);
  const sharedValue = obj.useSharedValue(0);
  const items = [percent, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(percent(outer1_2[7]).withTiming(percent, percent(outer1_2[8]).timingSlow));
  }, items);
  const fn = function h() {
    return { width: "" + sharedValue.get() + "%" };
  };
  fn.__closure = { percentWidth: sharedValue };
  fn.__workletHash = 14122394499539;
  fn.__initData = closure_7;
  obj = { style: items1 };
  items1 = [tmp.wrapper, percent.style];
  const animatedStyle = percent(3991).useAnimatedStyle(fn);
  const items2 = [tmp.progress, animatedStyle];
  obj.children = jsx(sharedValue(3991).View, { style: items2 });
  return <View style={items1} />;
};
