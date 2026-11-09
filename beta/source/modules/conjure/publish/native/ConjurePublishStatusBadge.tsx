// Module ID: 12422
// Function ID: 12423
// Name: ConjurePublishStatusBadge
// Dependencies: [19, 17, 21, 5140, 12406, 575, 5724, 1652, 5370, 12423, 2]
// Exports: conjurePublishBadgeSize, default

// Module 12422 (ConjurePublishStatusBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5370 */;
import ConjureHeaderIconButton from "ConjureHeaderIconButton" /* 12406 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let set;

let size;
function ConjurePublishSpinner() {
  let sharedValue;
  let tmp7;
  let tmp8;
  const tmp = closure_6();
  let obj = sharedValue(5724);
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  let obj2 = sharedValue(1652);
  sharedValue = obj2.useSharedValue(0);
  let items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = _mod1652.withRepeat;
    _mod1652;
    let obj = timing_timing;
    const obj2 = { duration: 800, easing: _mod1652.Easing.linear };
    const result = set(withRepeat(obj.withTiming(360, obj2), -1, false));
    return () => {
      const obj = sharedValue(dependencyMap[7]);
      return obj.cancelAnimation(closure_1_0);
    };
  }, items);
  const items1 = [closure_7, sharedValue];
  let c0;
  [tmp7, tmp8] = items1;
  const obj3 = sharedValue(1652);
  class ConjurePublishStatusBadgeTsx1 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ rotate: "" + _undefined.get() + "deg" }];
      ({ rotate: "" + _undefined.get() + "deg" });
      return obj;
    }
  }
  const items2 = [tmp8];
  ConjurePublishStatusBadgeTsx1.__closure = items2;
  ConjurePublishStatusBadgeTsx1.__workletHash = 4407393143037;
  ConjurePublishStatusBadgeTsx1.__initData = tmp7;
  const animatedStyle = obj3.useAnimatedStyle(ConjurePublishStatusBadgeTsx1);
  const items3 = [tmp.spinner, animatedStyle];
  View = tmp3(1652).View;
  return <View style={items3}>{null}</View>;
}
let View = react_native.View;
const jsx = Fragment.jsx;
let obj = { dot: size, spinner: { width: 12, height: 12 } };
size = { width: ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE, height: ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE, borderRadius: ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE / 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = { code: "(function ConjurePublishStatusBadgeTsx1(){let[rotation]=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishStatusBadge.tsx");

export default function ConjurePublishStatusBadge(indicator) {
  let tmp4;
  if ("publishing" === indicator.indicator) {
    tmp4 = <ConjurePublishSpinner />;
  } else {
    tmp4 = <View style={tmp.dot} />;
  }
  return tmp4;
};
export function conjurePublishBadgeSize(indicator) {
  let num = 12;
  if ("publishing" !== indicator) {
    num = ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE;
  }
  return num;
}
