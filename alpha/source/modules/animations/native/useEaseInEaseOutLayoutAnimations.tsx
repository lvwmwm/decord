// Module ID: 13759
// Function ID: 13760
// Name: useEaseInEaseOutLayoutAnimations
// Dependencies: [32, 19, 5044, 1654, 504, 1379, 2]
// Exports: default, useTriggeredLayoutTransition

// Module 13759 (useEaseInEaseOutLayoutAnimations)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import _mod1654 from "module_1654" /* 1654 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import size from "module_2" /* 2 */;

const f105235 = () => useReducedMotion.useReducedMotion;
const Easing = _mod1654.Easing;
let closure_5 = Easing.inOut(_mod1654.Easing.ease);
const result = size.fileFinishedImporting("modules/animations/native/useEaseInEaseOutLayoutAnimations.tsx");

export default function useEaseInEaseOutLayoutAnimations() {
  let stateFromStores;
  const items = [AccessibilityStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, f105235);
  const items1 = [stateFromStores];
  return react.useMemo(() => {
    let easingResult;
    let easingResult1;
    let easingResult2;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      return { entering: "Array", exiting: "channel_id", layout: "i" };
    } else {
      const ReduceMotion = tmp(1654).ReduceMotion;
      const tmp4 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
      const obj2 = { entering: easingResult.reduceMotion(tmp4), exiting: easingResult1.reduceMotion(tmp4), layout: easingResult2.reduceMotion(tmp4) };
      const FadeIn = tmp(1654).FadeIn;
      const durationResult = FadeIn.duration(300);
      easingResult = durationResult.easing(closure_5);
      const FadeOut = tmp(1654).FadeOut;
      const durationResult1 = FadeOut.duration(300);
      easingResult1 = durationResult1.easing(closure_5);
      const LinearTransition = tmp(1654).LinearTransition;
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
  stateFromStores = obj.useStateFromStores(items, f105235);
  let obj2 = react;
  const items1 = [stateFromStores];
  const layout = react.useMemo(() => {
    let easingResult;
    let easingResult1;
    let easingResult2;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      return { entering: "Array", exiting: "channel_id", layout: "i" };
    } else {
      const ReduceMotion = tmp(1654).ReduceMotion;
      const tmp4 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
      const obj2 = { entering: easingResult.reduceMotion(tmp4), exiting: easingResult1.reduceMotion(tmp4), layout: easingResult2.reduceMotion(tmp4) };
      const FadeIn = tmp(1654).FadeIn;
      const durationResult = FadeIn.duration(300);
      easingResult = durationResult.easing(closure_5);
      const FadeOut = tmp(1654).FadeOut;
      const durationResult1 = FadeOut.duration(300);
      easingResult1 = durationResult1.easing(closure_5);
      const LinearTransition = tmp(1654).LinearTransition;
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
