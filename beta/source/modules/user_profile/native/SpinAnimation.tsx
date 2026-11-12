// Module ID: 16902
// Function ID: 16903
// Name: SpinAnimation
// Dependencies: [19, 21, 1652, 5402, 2]
// Exports: default

// Module 16902 (SpinAnimation)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

const jsx = Fragment.jsx;
let closure_5 = { code: "(function SpinAnimationTsx1(){let[rotation]=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};})" };
let result = size.fileFinishedImporting("modules/user_profile/native/SpinAnimation.tsx");

export default function SpinAnimation(shouldAnimate) {
  let tmp3;
  let tmp4;
  shouldAnimate = shouldAnimate.shouldAnimate;
  const children = shouldAnimate.children;
  let tmp = dependencyMap;
  let obj = shouldAnimate(1652);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = shouldAnimate(1652);
  let items = [closure_5, sharedValue];
  let c0;
  [tmp3, tmp4] = items;
  class SpinAnimationTsx1 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ rotateZ: "" + _undefined.get() + "deg" }];
      ({ rotateZ: "" + _undefined.get() + "deg" });
      return obj;
    }
  }
  const items1 = [tmp4];
  SpinAnimationTsx1.__closure = items1;
  SpinAnimationTsx1.__workletHash = 17162751475447;
  SpinAnimationTsx1.__initData = tmp3;
  const items2 = [sharedValue, shouldAnimate];
  const style = obj2.useAnimatedStyle(SpinAnimationTsx1);
  const effect = react.useEffect(() => {
    let Easing;
    let fn;
    const tmp = shouldAnimate;
    if (tmp) {
      set = sharedValue.set;
      const withRepeat = _mod1652.withRepeat;
      _mod1652;
      const obj2 = { duration: 3000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) };
      const withTiming = timing_timing.withTiming;
      timing_timing;
      Easing = _mod1652.Easing;
      const result = set(withRepeat(withTiming(360, obj2), -1));
      fn = () => {
        const obj = shouldAnimate(dependencyMap[2]);
        return obj.cancelAnimation(sharedValue);
      };
    } else {
      let obj = _mod1652;
      obj.cancelAnimation(sharedValue);
      const result1 = sharedValue.set(0);
    }
    return fn;
  }, items2);
  return jsx(sharedValue(1652).View, { style, children });
};
