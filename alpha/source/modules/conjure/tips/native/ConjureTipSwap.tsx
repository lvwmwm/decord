// Module ID: 12857
// Function ID: 12858
// Name: ConjureTipSwap
// Dependencies: [19, 21, 1652, 5380, 2]
// Exports: default

// Module 12857 (ConjureTipSwap)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5380 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let set;

function TipFade(children) {
  let tmp4;
  let tmp5;
  let sharedValue;
  children = children.children;
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    let Easing;
    set = sharedValue.set;
    let obj = { duration: 260, easing: Easing.out(_mod1652.Easing.ease) };
    const withTiming = timing_timing.withTiming;
    timing_timing;
    Easing = _mod1652.Easing;
    const result = set(withTiming(1, obj));
    return () => {
      const obj = sharedValue(dependencyMap[2]);
      return obj.cancelAnimation(closure_1_0);
    };
  }, items);
  const items1 = [closure_5, sharedValue];
  let c0;
  [tmp4, tmp5] = items1;
  const obj2 = sharedValue(1652);
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
  return jsx(_modDef1652.View, { style, children });
}
const jsx = Fragment.jsx;
let closure_5 = { code: "(function ConjureTipSwapTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipSwap.tsx");

export default function ConjureTipSwap(presentation) {
  presentation = presentation.presentation;
  return <TipFade key={presentation}>{arg0.render(presentation)}</TipFade>;
};
