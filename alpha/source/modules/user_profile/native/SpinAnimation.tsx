// Module ID: 16500
// Function ID: 16501
// Name: SpinAnimation
// Dependencies: [19, 21, 5090, 5249, 2]
// Exports: default

// Module 16500 (SpinAnimation)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

const jsx = Fragment.jsx;
const __initData = { code: "function SpinAnimationTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
let result = size.fileFinishedImporting("modules/user_profile/native/SpinAnimation.tsx");

export default function SpinAnimation(shouldAnimate) {
  shouldAnimate = shouldAnimate.shouldAnimate;
  const children = shouldAnimate.children;
  let obj = shouldAnimate(5090);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = shouldAnimate(5090);
  let fn = function l() {
    let items;
    const obj = { transform: items };
    items = [{ rotateZ: "" + sharedValue.get() + "deg" }];
    ({ rotateZ: "" + sharedValue.get() + "deg" });
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 7820847848206;
  fn.__initData = __initData;
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
        const obj = shouldAnimate(dependencyMap[2]);
        return obj.cancelAnimation(sharedValue);
      };
    } else {
      let obj = ReanimatedRexport;
      obj.cancelAnimation(sharedValue);
      const result1 = sharedValue.set(0);
    }
    return fn;
  }, items);
  return jsx(sharedValue(5090).View, { style, children });
};
