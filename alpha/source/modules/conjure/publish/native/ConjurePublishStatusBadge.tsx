// Module ID: 12534
// Function ID: 12535
// Name: ConjurePublishStatusBadge
// Dependencies: [19, 17, 21, 5009, 12533, 575, 5591, 5090, 5249, 12535, 2]
// Exports: conjurePublishBadgeSize, default

// Module 12534 (ConjurePublishStatusBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import ConjureHeaderIconButton from "ConjureHeaderIconButton" /* 12533 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

let size;
function ConjurePublishSpinner() {
  let sharedValue;
  const tmp = closure_6();
  let obj = sharedValue(5591);
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  let obj2 = sharedValue(5090);
  sharedValue = obj2.useSharedValue(0);
  let items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    let obj = timing;
    const obj2 = { duration: 800, easing: ReanimatedRexport.Easing.linear };
    const result = set(withRepeat(obj.withTiming(360, obj2), -1, false));
    return () => {
      const obj = sharedValue(dependencyMap[7]);
      return obj.cancelAnimation(closure_1_0);
    };
  }, items);
  const fn = function _() {
    let items;
    const obj = { transform: items };
    items = [{ rotate: "" + sharedValue.get() + "deg" }];
    ({ rotate: "" + sharedValue.get() + "deg" });
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 16804123436708;
  fn.__initData = __initData;
  const obj3 = sharedValue(5090);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items1 = [tmp.spinner, animatedStyle];
  View = ReanimatedRexportDefault.View;
  return <View style={items1}>{null}</View>;
}
let View = react_native.View;
const jsx = Fragment.jsx;
let obj = { dot: size, spinner: { width: 12, height: 12 } };
size = { width: ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE, height: ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE, borderRadius: ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE / 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles.createStyles(obj);
const __initData = { code: "function ConjurePublishStatusBadgeTsx1(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
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
