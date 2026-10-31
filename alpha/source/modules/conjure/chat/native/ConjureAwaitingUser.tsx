// Module ID: 12478
// Function ID: 12479
// Name: ConjureAwaitingUser
// Dependencies: [19, 5015, 21, 575, 5014, 12477, 504, 5095, 5254, 2]
// Exports: ConjureAwaitingPulseRing

// Module 12478 (ConjureAwaitingUser)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import ConjureNativeCardSurface from "ConjureNativeCardSurface" /* 12477 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let set;

let rect;
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
let obj = { ring: rect };
rect = { position: "absolute", top: -PX_4, right: -PX_4, bottom: -PX_4, left: -PX_4, borderWidth: PX_4, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: ConjureNativeCardSurface.CONJURE_NATIVE_CARD_RADIUS + PX_4 };
let closure_6 = createStyles.createStyles(obj);
const __initData = { code: "function ConjureAwaitingUserTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAwaitingUser.tsx");

export function ConjureAwaitingPulseRing() {
  let stateFromStores;
  let useReducedMotion;
  let tmp = closure_6();
  let obj = stateFromStores(504);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = stateFromStores(5095);
  const sharedValue = obj2.useSharedValue(0);
  const items1 = [sharedValue, stateFromStores];
  const effect = react.useEffect(() => {
    let Easing;
    let fn;
    const tmp = stateFromStores;
    if (tmp) {
      const obj2 = ReanimatedRexport;
      obj2.cancelAnimation(sharedValue);
      const result = sharedValue.set(0);
    } else {
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      let obj = { duration: 1000, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result1 = set(withRepeat(withTiming(0.35, obj), -1, true));
      fn = () => {
        const obj = stateFromStores(dependencyMap[7]);
        return obj.cancelAnimation(sharedValue);
      };
    }
    return fn;
  }, items1);
  let fn = function p() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 8512415125100;
  fn.__initData = __initData;
  const obj3 = stateFromStores(5095);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items2 = [tmp.ring, animatedStyle];
  return jsx(sharedValue(5095).View, { pointerEvents: "none", style: items2 });
}
