// Module ID: 16385
// Function ID: 16386
// Name: vibegrations/VibegrationsAwaitingUser
// Dependencies: [19, 4825, 21, 576, 4836, 504, 4566, 4837, 2]
// Exports: VibegrationsAwaitingPulseRing

// Module 16385 (vibegrations/VibegrationsAwaitingUser)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let rect;
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
let obj = { ring: rect };
rect = { position: "absolute", top: -PX_4, right: -PX_4, bottom: -PX_4, left: -PX_4, borderWidth: PX_4, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles.createStyles(obj);
const __initData = { code: "function VibegrationsAwaitingUserTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAwaitingUser.tsx");

export const VibegrationsAwaitingPulseRing = function VibegrationsAwaitingPulseRing() {
  let stateFromStores;
  let useReducedMotion;
  let tmp = closure_6();
  let obj = stateFromStores(504);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = stateFromStores(4566);
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
        const obj = stateFromStores(dependencyMap[6]);
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
  fn.__workletHash = 7009775530053;
  fn.__initData = __initData;
  const obj3 = stateFromStores(4566);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items2 = [tmp.ring, animatedStyle];
  return jsx(sharedValue(4566).View, { pointerEvents: "none", style: items2 });
};
