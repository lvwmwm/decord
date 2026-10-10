// Module ID: 14843
// Function ID: 14844
// Name: SpinAnimation
// Dependencies: [19, 21, 558, 576, 4850, 5093, 2]

// Module 14843 (SpinAnimation)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import timing from "timing" /* 5093 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

const jsx = Fragment.jsx;
const __initData = { code: "function SpinAnimationTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
const __initData2 = { code: "function SpinAnimationTsx2(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpinAnimation(shouldAnimate) {
  let tmp = dependencyMap;
  let obj = shouldAnimate(576);
  const cResult = obj.c(7);
  shouldAnimate = shouldAnimate.shouldAnimate;
  const children = shouldAnimate.children;
  let obj2 = shouldAnimate(4850);
  const sharedValue = obj2.useSharedValue(0);
  let fn = function c() {
    let items;
    const obj = { transform: items };
    items = [{ rotateZ: "" + sharedValue.get() + "deg" }];
    ({ rotateZ: "" + sharedValue.get() + "deg" });
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 7820847848206;
  fn.__initData = __initData;
  const obj3 = shouldAnimate(4850);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] === sharedValue) {
    let tmp5;
    let tmp6;
    if (cResult[1] === shouldAnimate) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    const effect = react.useEffect(tmp5, tmp6);
    if (cResult[4] === children) {
      let tmp9;
      if (cResult[5] === animatedStyle) {
        tmp9 = cResult[6];
      }
      return tmp9;
    }
    const tmp12 = jsx(sharedValue(4850).View, { style: animatedStyle, children });
    cResult[4] = children;
    cResult[5] = animatedStyle;
    cResult[6] = tmp12;
    tmp9 = tmp12;
  }
  const fn2 = function u() {
    let Easing;
    let fn;
    const tmp = shouldAnimate;
    if (tmp) {
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const obj2 = { duration: 3000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withRepeat(withTiming(360, obj2), -1));
      fn = () => {
        const obj = shouldAnimate(dependencyMap[4]);
        return obj.cancelAnimation(sharedValue);
      };
    } else {
      let obj = ReanimatedRexport;
      obj.cancelAnimation(sharedValue);
      const result1 = sharedValue.set(0);
    }
    return fn;
  };
  let items = [sharedValue, shouldAnimate];
  cResult[0] = sharedValue;
  cResult[1] = shouldAnimate;
  cResult[2] = fn2;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn2;
}) : (function SpinAnimation(shouldAnimate) {
  shouldAnimate = shouldAnimate.shouldAnimate;
  const children = shouldAnimate.children;
  let obj = shouldAnimate(4850);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = shouldAnimate(4850);
  let fn = function u() {
    let items;
    const obj = { transform: items };
    items = [{ rotateZ: "" + sharedValue.get() + "deg" }];
    ({ rotateZ: "" + sharedValue.get() + "deg" });
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 8321578527405;
  fn.__initData = __initData2;
  let items = [sharedValue, shouldAnimate];
  const style = obj2.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    let Easing;
    let fn;
    const tmp = shouldAnimate;
    if (tmp) {
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const obj2 = { duration: 3000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withRepeat(withTiming(360, obj2), -1));
      fn = () => {
        const obj = shouldAnimate(dependencyMap[4]);
        return obj.cancelAnimation(sharedValue);
      };
    } else {
      let obj = ReanimatedRexport;
      obj.cancelAnimation(sharedValue);
      const result1 = sharedValue.set(0);
    }
    return fn;
  }, items);
  return jsx(sharedValue(4850).View, { style, children });
});
let result = size.fileFinishedImporting("modules/user_profile/native/SpinAnimation.tsx");

export default tmp2;
