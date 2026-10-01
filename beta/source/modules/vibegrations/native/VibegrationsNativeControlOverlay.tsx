// Module ID: 16288
// Function ID: 16289
// Name: VibegrationsNativeControlOverlay
// Dependencies: [19, 17, 4825, 21, 4836, 576, 16289, 504, 4566, 5280, 5284, 4837, 16290, 13935, 4832, 1115, 3715, 5281, 2]
// Exports: default

// Module 16288 (VibegrationsNativeControlOverlay)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import useVibegrationsControlBar from "useVibegrationsControlBar" /* 16289 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, set, set2;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
({ StyleSheet, View: closure_4 } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { block: obj2, border: obj3, glow: obj4, barArea: obj5, bar: obj6, status: obj7, copy: obj8, actions: obj9 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderWidth: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { overflow: "hidden" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj7 = { flexDirection: "row", flexWrap: "wrap", flexShrink: 1, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", flexWrap: "wrap", flexShrink: 1, alignItems: "baseline", columnGap: nativeDefault.space.PX_8 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const __initData = { code: "function VibegrationsNativeControlOverlayTsx1(){const{barOffset}=this.__closure;return{transform:[{translateY:barOffset.get()}]};}" };
const __initData2 = { code: "function VibegrationsNativeControlOverlayTsx2(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeControlOverlay.tsx");

export default function VibegrationsNativeControlOverlay(onOpenPublishedApp) {
  let View;
  let active;
  let closure_2;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let obj12;
  let projectId;
  let stop;
  let stopping;
  let useReducedMotion;
  onOpenPublishedApp = onOpenPublishedApp.onOpenPublishedApp;
  let vibegrationsControlPhase;
  ({ projectId, active } = onOpenPublishedApp);
  let tmp = closure_9();
  let tmp2 = vibegrationsControlPhase;
  let obj = vibegrationsControlPhase(16289);
  vibegrationsControlPhase = obj.useVibegrationsControlPhase(active);
  let obj2 = vibegrationsControlPhase(16289);
  const vibegrationsControlStop = obj2.useVibegrationsControlStop(projectId);
  ({ stop, stopping } = vibegrationsControlStop);
  let items = [AccessibilityStore];
  const obj3 = vibegrationsControlPhase(504);
  const stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp7 = "controlling" === vibegrationsControlPhase;
  dependencyMap = tmp7;
  const obj4 = vibegrationsControlPhase(4566);
  const sharedValue = obj4.useSharedValue(-96);
  const obj5 = vibegrationsControlPhase(4566);
  const sharedValue1 = obj5.useSharedValue(0.5);
  const items1 = [sharedValue, vibegrationsControlPhase];
  const effect = sharedValue.useEffect(() => {
    let Easing;
    if ("controlling" === vibegrationsControlPhase) {
      set2 = sharedValue.set;
      const obj2 = spring;
      set2(obj2.withSpring(0, springPresets.SUBTLE_SPRING));
    } else if ("handoff" === tmp) {
      set = sharedValue.set;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const diff = useVibegrationsControlBar.VIBEGRATIONS_CONTROL_HANDOFF_MS - 280;
      const obj = { duration: 280, easing: Easing.in(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withDelay(diff, withTiming(-96, obj)));
    } else {
      const result1 = sharedValue.set(-96);
    }
  }, items1);
  const items2 = [tmp7, sharedValue1, stateFromStores];
  const effect1 = sharedValue.useEffect(() => {
    let Easing;
    const tmp = closure_2;
    if (tmp) {
      let fn;
      const tmp2 = stateFromStores;
      if (!tmp2) {
        const result = sharedValue1.set(0.2);
        set = sharedValue1.set;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        let obj = { duration: 1200, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        const result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
        fn = () => {
          const obj = vibegrationsControlPhase(closure_2[8]);
          return obj.cancelAnimation(sharedValue1);
        };
      }
      return fn;
    }
    const obj2 = ReanimatedRexport;
    obj2.cancelAnimation(sharedValue1);
    const result2 = sharedValue1.set(0.5);
  }, items2);
  const obj6 = vibegrationsControlPhase(4566);
  class C {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ translateY: sharedValue.get() }];
      ({ translateY: sharedValue.get() });
      return obj;
    }
  }
  C.__closure = { barOffset: sharedValue };
  C.__workletHash = 4238220742706;
  C.__initData = __initData;
  const animatedStyle = obj6.useAnimatedStyle(C);
  const tmp13 = vibegrationsControlPhase(4566);
  class D {
    constructor() {
      const obj = { opacity: sharedValue1.get() };
      return obj;
    }
  }
  D.__closure = { pulse: sharedValue1 };
  D.__workletHash = 7153982073121;
  D.__initData = __initData2;
  let tmp29Result4 = null;
  if ("idle" !== vibegrationsControlPhase) {
    let tmp29Result = null;
    if (tmp7) {
      const obj7 = { children: items3 };
      const obj8 = { style: tmp.block, pointerEvents: "box-only" };
      items3 = [closure_6(sharedValue1, obj8), , ];
      const obj9 = { style: items4, pointerEvents: "none" };
      items4 = [tmp.glow, tmp14];
      items3[1] = closure_6(stateFromStores(4566).View, obj9);
      const obj10 = { style: tmp.border, pointerEvents: "none" };
      items3[2] = closure_6(sharedValue1, obj10);
      tmp29Result = tmp29(tmp30, obj7);
    }
    const items5 = [tmp29Result, ];
    const obj11 = { style: tmp.barArea, pointerEvents: "box-none", children: closure_8(View, obj12) };
    obj12 = { style: items6, accessibilityLiveRegion: "polite", children: null };
    items6 = [tmp.bar, animatedStyle];
    const obj13 = { style: tmp.status, children: items7 };
    View = stateFromStores(4566).View;
    const obj14 = { size: "sm", color: stateFromStores(576).colors.TEXT_OVERLAY_LIGHT };
    const SparklesIcon = tmp2(16290).SparklesIcon;
    items7 = [closure_6(SparklesIcon, obj14), , ];
    let tmp20Result = null;
    if (tmp7) {
      tmp20Result = tmp20(tmp2(13935).AILoader, { size: 12, color: "text-overlay-light" });
    }
    items7[1] = tmp20Result;
    const obj15 = { style: tmp.copy, children: items8 };
    const Text = tmp2(4832).Text;
    const intl = tmp2(1115).intl;
    const string = intl.string;
    const tmp22Result = stateFromStores(3715);
    const obj16 = { variant: "text-sm/semibold", color: "text-overlay-light", children: string(tmp7 ? tmp22Result.ydhvN1 : tmp22Result["7U6tIB"]) };
    items8 = [tmp20(Text, obj16), ];
    let tmp20Result4 = null;
    if (tmp7) {
      const obj17 = { variant: "text-xs/medium", color: "text-overlay-light", children: intl2.string(stateFromStores(3715).NldIIG) };
      const Text2 = tmp2(4832).Text;
      intl2 = tmp2(1115).intl;
      tmp20Result4 = tmp20(Text2, obj17);
    }
    items8[1] = tmp20Result4;
    items7[2] = closure_8(sharedValue1, obj15);
    const items9 = [closure_8(tmp21, obj13), ];
    let tmp29Result3 = null;
    if (tmp7) {
      let tmp20Result5 = null;
      const obj18 = { style: tmp.actions, children: items10 };
      if (null != onOpenPublishedApp) {
        const obj19 = { variant: "secondary-overlay", size: "sm", text: intl3.string(stateFromStores(3715).kj5epw), onPress: onOpenPublishedApp };
        const Button = tmp2(5281).Button;
        intl3 = tmp2(1115).intl;
        tmp20Result5 = tmp20(Button, obj19);
      }
      items10 = [tmp20Result5, ];
      let tmp20Result6 = null;
      if (null != stop) {
        const obj20 = { variant: "primary-overlay", size: "sm", text: intl4.string(stateFromStores(3715)["2HalWx"]), loading: stopping, onPress: stop };
        const Button2 = tmp2(5281).Button;
        intl4 = tmp2(1115).intl;
        tmp20Result6 = tmp20(Button2, obj20);
      }
      items10[1] = tmp20Result6;
      tmp29Result3 = tmp29(tmp21, obj18);
    }
    const obj21 = { children: items5 };
    items9[1] = tmp29Result3;
    class C {
      constructor() {
        let items;
        const obj = { transform: items };
        items = [{ translateY: sharedValue.get() }];
        ({ translateY: sharedValue.get() });
        return obj;
      }
    }
    items5[1] = closure_6(sharedValue1, obj11);
    tmp29Result4 = tmp29(tmp30, obj21);
  }
  return tmp29Result4;
};
