// Module ID: 12594
// Function ID: 12595
// Name: ConjureTipSwap
// Dependencies: [19, 21, 5090, 5249, 2]
// Exports: default

// Module 12594 (ConjureTipSwap)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

function TipFade(children) {
  let sharedValue;
  children = children.children;
  let obj = sharedValue(5090);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    let Easing;
    set = sharedValue.set;
    let obj = { duration: 260, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    const result = set(withTiming(1, obj));
    return () => {
      const obj = sharedValue(dependencyMap[2]);
      return obj.cancelAnimation(closure_1_0);
    };
  }, items);
  const fn = function u() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14074417751279;
  fn.__initData = __initData;
  const obj2 = sharedValue(5090);
  const style = obj2.useAnimatedStyle(fn);
  return jsx(ReanimatedRexportDefault.View, { style, children });
}
const jsx = Fragment.jsx;
const __initData = { code: "function ConjureTipSwapTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipSwap.tsx");

export default function ConjureTipSwap(presentation) {
  presentation = presentation.presentation;
  return <TipFade key={presentation}>{arg0.render(presentation)}</TipFade>;
};
