// Module ID: 15078
// Function ID: 15079
// Name: useEaseInEaseOutLayoutAnimations
// Dependencies: [32, 19, 5307, 1655, 504, 1380, 2]
// Exports: default, useTriggeredLayoutTransition

// Module 15078 (useEaseInEaseOutLayoutAnimations)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import _mod1655 from "module_1655" /* 1655 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import size from "module_2" /* 2 */;

const f110826 = () => useReducedMotion.useReducedMotion;
const Easing = _mod1655.Easing;
let closure_5 = Easing.inOut(_mod1655.Easing.ease);
const result = size.fileFinishedImporting("modules/animations/native/useEaseInEaseOutLayoutAnimations.tsx");

export default function useEaseInEaseOutLayoutAnimations() {
  let stateFromStores;
  const items = [AccessibilityStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, f110826);
  const items1 = [stateFromStores];
  return react.useMemo(() => {
    let easingResult;
    let easingResult1;
    let easingResult2;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      return { entering: "channel_id", exiting: "flex", layout: "analyticsLocations" };
    } else {
      const ReduceMotion = tmp(1655).ReduceMotion;
      const tmp4 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
      const obj2 = { entering: easingResult.reduceMotion(tmp4), exiting: easingResult1.reduceMotion(tmp4), layout: easingResult2.reduceMotion(tmp4) };
      const FadeIn = tmp(1655).FadeIn;
      const durationResult = FadeIn.duration(300);
      easingResult = durationResult.easing(closure_5);
      const FadeOut = tmp(1655).FadeOut;
      const durationResult1 = FadeOut.duration(300);
      easingResult1 = durationResult1.easing(closure_5);
      const LinearTransition = tmp(1655).LinearTransition;
      const durationResult2 = LinearTransition.duration(300);
      easingResult2 = durationResult2.easing(closure_5);
      return obj2;
    }
  }, items1);
};
export function useTriggeredLayoutTransition() {
  let closure_129_0;
  let stateFromStores;
  let tmp3;
  let useReducedMotion;
  let obj = stateFromStores(504);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, f110826);
  let obj2 = react;
  const items1 = [stateFromStores];
  const layout = react.useMemo(() => {
    let easingResult;
    let easingResult1;
    let easingResult2;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      return { entering: "channel_id", exiting: "flex", layout: "analyticsLocations" };
    } else {
      const ReduceMotion = tmp(1655).ReduceMotion;
      const tmp4 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
      const obj2 = { entering: easingResult.reduceMotion(tmp4), exiting: easingResult1.reduceMotion(tmp4), layout: easingResult2.reduceMotion(tmp4) };
      const FadeIn = tmp(1655).FadeIn;
      const durationResult = FadeIn.duration(300);
      easingResult = durationResult.easing(closure_5);
      const FadeOut = tmp(1655).FadeOut;
      const durationResult1 = FadeOut.duration(300);
      easingResult1 = durationResult1.easing(closure_5);
      const LinearTransition = tmp(1655).LinearTransition;
      const durationResult2 = LinearTransition.duration(300);
      easingResult2 = durationResult2.easing(closure_5);
      return obj2;
    }
  }, items1).layout;
  [tmp3, closure_129_0] = _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  let closure_1 = react.useRef(undefined);
  const effect = react.useEffect(() => () => clearTimeout(ref.current), []);
  let tmp5;
  if (tmp3) {
    tmp5 = layout;
  }
  const obj3 = {
    layout: tmp5,
    trigger: obj2.useCallback(() => {
      stateFromStores(true);
      clearTimeout(ref.current);
      ref.current = setTimeout(() => closure_1_0(false), 400);
    }, [])
  };
  return obj3;
}
