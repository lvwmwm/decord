// Module ID: 12331
// Function ID: 12332
// Name: ConjurePublishStatusBadge
// Dependencies: [19, 17, 21, 5004, 12330, 587, 558, 576, 5288, 5085, 5242, 12332, 2]
// Exports: conjurePublishBadgeSize

// Module 12331 (ConjurePublishStatusBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5085 */;
import timing from "timing" /* 5242 */;
import ConjureHeaderIconButton from "ConjureHeaderIconButton" /* 12330 */;
import ProgressCircleDefault from "ProgressCircle" /* 12332 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

let size;
let View = react_native.View;
const jsx = Fragment.jsx;
let obj = { dot: size, spinner: { width: 12, height: 12 } };
size = { width: ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE, height: ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE, borderRadius: ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE / 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles.createStyles(obj);
const __initData = { code: "function ConjurePublishStatusBadgeTsx1(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
const __initData2 = { code: "function ConjurePublishStatusBadgeTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishSpinner() {
  let sharedValue;
  let tmp8;
  let tmp9;
  const tmp = sharedValue;
  let obj = sharedValue(576);
  const cResult = obj.c(12);
  const tmp4 = closure_6();
  let obj2 = sharedValue(5288);
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  const obj3 = sharedValue(5085);
  sharedValue = obj3.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function n() {
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      let obj = timing;
      const obj2 = { duration: 800, easing: ReanimatedRexport.Easing.linear };
      const result = set(withRepeat(obj.withTiming(360, obj2), -1, false));
      return () => {
        const obj = sharedValue(dependencyMap[9]);
        return obj.cancelAnimation(closure_1_0);
      };
    };
    let items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = react.useEffect(tmp8, tmp9);
  const fn2 = function p() {
    let items;
    const obj = { transform: items };
    items = [{ rotate: "" + sharedValue.get() + "deg" }];
    ({ rotate: "" + sharedValue.get() + "deg" });
    return obj;
  };
  fn2.__closure = { rotation: sharedValue };
  fn2.__workletHash = 16804123436708;
  fn2.__initData = __initData;
  const tmpResult = tmp(5085);
  const animatedStyle = tmpResult.useAnimatedStyle(fn2);
  if (cResult[3] === animatedStyle) {
    let tmp12;
    if (cResult[4] === tmp4.spinner) {
      tmp12 = cResult[5];
    }
    if (cResult[6] === token) {
      let tmp13;
      if (cResult[7] === tmp4.spinner) {
        tmp13 = cResult[8];
      }
      if (cResult[9] === tmp12) {
        let tmp16;
        if (cResult[10] === tmp13) {
          tmp16 = cResult[11];
        }
        return tmp16;
      }
      const tmp18 = jsx(ReanimatedRexportDefault.View, { style: tmp12, children: tmp13 });
      cResult[9] = tmp12;
      cResult[10] = tmp13;
      cResult[11] = tmp18;
      tmp16 = tmp18;
    }
    const tmp15 = jsx(ProgressCircleDefault, { percent: 70, size: 12, strokeWidth: 2, color: token, style: tmp4.spinner });
    cResult[6] = token;
    cResult[7] = tmp4.spinner;
    cResult[8] = tmp15;
    tmp13 = tmp15;
  }
  const items1 = [tmp4.spinner, animatedStyle];
  cResult[3] = animatedStyle;
  cResult[4] = tmp4.spinner;
  cResult[5] = items1;
  tmp12 = items1;
}) : (function ConjurePublishSpinner() {
  let sharedValue;
  const tmp = closure_6();
  let obj = sharedValue(5288);
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  let obj2 = sharedValue(5085);
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
      const obj = sharedValue(dependencyMap[9]);
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
  fn.__workletHash = 12889163918279;
  fn.__initData = __initData2;
  const obj3 = sharedValue(5085);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items1 = [tmp.spinner, animatedStyle];
  View = ReanimatedRexportDefault.View;
  return <View style={items1}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishStatusBadge(indicator) {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(3);
  indicator = indicator.indicator;
  const tmp2 = closure_6();
  if (cResult[0] === indicator) {
    let tmp3;
    if (cResult[1] === tmp2) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  if ("publishing" === indicator) {
    tmp6 = <closure_9 />;
  } else {
    tmp6 = <View style={tmp2.dot} />;
  }
  cResult[0] = indicator;
  cResult[1] = tmp2;
  cResult[2] = tmp6;
  tmp3 = tmp6;
}) : (function ConjurePublishStatusBadge(indicator) {
  let tmp4;
  if ("publishing" === indicator.indicator) {
    tmp4 = <closure_9 />;
  } else {
    tmp4 = <View style={tmp.dot} />;
  }
  return tmp4;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishStatusBadge.tsx");

export default tmp2;
export const conjurePublishBadgeSize = function conjurePublishBadgeSize(indicator) {
  let num = 12;
  if ("publishing" !== indicator) {
    num = ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE;
  }
  return num;
};
