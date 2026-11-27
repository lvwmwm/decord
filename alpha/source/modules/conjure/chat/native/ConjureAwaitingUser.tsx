// Module ID: 18525
// Function ID: 18526
// Name: ConjureAwaitingUser
// Dependencies: [19, 5044, 21, 575, 5043, 18524, 504, 1654, 5253, 2]
// Exports: ConjureAwaitingPulseRing

// Module 18525 (ConjureAwaitingUser)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1654 from "module_1654" /* 1654 */;
import timing_timing from "timing/timing" /* 5253 */;
import ConjureNativeCardSurface from "ConjureNativeCardSurface" /* 18524 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let set;

let rect;
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
let obj = { ring: rect };
rect = { position: "absolute", top: -PX_4, right: -PX_4, bottom: -PX_4, left: -PX_4, borderWidth: PX_4, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: ConjureNativeCardSurface.CONJURE_NATIVE_CARD_RADIUS + PX_4 };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = { code: "(function ConjureAwaitingUserTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAwaitingUser.tsx");

export function ConjureAwaitingPulseRing() {
  let stateFromStores;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let tmp = closure_6();
  let obj = stateFromStores(504);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = stateFromStores(1654);
  const sharedValue = obj2.useSharedValue(0);
  const items1 = [sharedValue, stateFromStores];
  const effect = react.useEffect(() => {
    let Easing;
    let fn;
    const tmp = stateFromStores;
    if (tmp) {
      const obj2 = _mod1654;
      obj2.cancelAnimation(sharedValue);
      const result = sharedValue.set(0);
    } else {
      set = sharedValue.set;
      const withRepeat = _mod1654.withRepeat;
      _mod1654;
      let obj = { duration: 1000, easing: Easing.inOut(_mod1654.Easing.ease) };
      const withTiming = timing_timing.withTiming;
      timing_timing;
      Easing = _mod1654.Easing;
      const result1 = set(withRepeat(withTiming(0.35, obj), -1, true));
      fn = () => {
        const obj = stateFromStores(dependencyMap[7]);
        return obj.cancelAnimation(sharedValue);
      };
    }
    return fn;
  }, items1);
  const items2 = [closure_7, sharedValue];
  let c0;
  [tmp6, tmp7] = items2;
  const obj3 = stateFromStores(1654);
  class ConjureAwaitingUserTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp7];
  ConjureAwaitingUserTsx1.__closure = items3;
  ConjureAwaitingUserTsx1.__workletHash = 10338450331605;
  ConjureAwaitingUserTsx1.__initData = tmp6;
  const animatedStyle = obj3.useAnimatedStyle(ConjureAwaitingUserTsx1);
  const items4 = [tmp.ring, animatedStyle];
  return jsx(sharedValue(1654).View, { pointerEvents: "none", style: items4 });
}
