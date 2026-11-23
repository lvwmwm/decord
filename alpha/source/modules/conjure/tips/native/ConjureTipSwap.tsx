// Module ID: 18468
// Function ID: 18469
// Name: ConjureTipSwap
// Dependencies: [19, 21, 1653, 5123, 2]
// Exports: default

// Module 18468 (ConjureTipSwap)
import Fragment from "Fragment" /* 21 */;
import _mod1653 from "module_1653" /* 1653 */;
import timing_timing from "timing/timing" /* 5123 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const _modDef1653 = _mod1653;
let set;

function TipFade(children) {
  let tmp4;
  let tmp5;
  let sharedValue;
  children = children.children;
  let obj = sharedValue(1653);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    let Easing;
    set = sharedValue.set;
    let obj = { duration: 260, easing: Easing.out(_mod1653.Easing.ease) };
    const withTiming = timing_timing.withTiming;
    timing_timing;
    Easing = _mod1653.Easing;
    const result = set(withTiming(1, obj));
    return () => {
      const obj = sharedValue(dependencyMap[2]);
      return obj.cancelAnimation(closure_1_0);
    };
  }, items);
  const items1 = [closure_5, sharedValue];
  let c0;
  [tmp4, tmp5] = items1;
  const obj2 = sharedValue(1653);
  class ConjureTipSwapTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp5];
  ConjureTipSwapTsx1.__closure = items2;
  ConjureTipSwapTsx1.__workletHash = 17472917410134;
  ConjureTipSwapTsx1.__initData = tmp4;
  const style = obj2.useAnimatedStyle(ConjureTipSwapTsx1);
  return jsx(_modDef1653.View, { style, children });
}
const jsx = Fragment.jsx;
let closure_5 = { code: "(function ConjureTipSwapTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipSwap.tsx");

export default function ConjureTipSwap(presentation) {
  presentation = presentation.presentation;
  return <TipFade key={presentation}>{arg0.render(presentation)}</TipFade>;
};
