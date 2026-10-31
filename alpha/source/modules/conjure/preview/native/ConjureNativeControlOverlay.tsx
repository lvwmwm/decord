// Module ID: 12098
// Function ID: 12099
// Name: ConjureNativeControlOverlay
// Dependencies: [19, 17, 5015, 21, 5014, 575, 12099, 10923, 504, 5095, 5637, 5638, 5254, 1113, 3868, 12100, 12104, 5624, 5634, 2]
// Exports: default

// Module 12098 (ConjureNativeControlOverlay)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import spring from "spring" /* 5637 */;
import springPresets from "springPresets" /* 5638 */;
import useConjureControlBar from "useConjureControlBar" /* 12099 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
let rect;
({ StyleSheet, View: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: { flex: 1 }, content: { flex: 1 }, block: obj2, border: obj3, glow: obj4, barArea: { overflow: "hidden" }, bar: rect, title: { flexGrow: 1, flexShrink: 1 }, actions: obj5 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderWidth: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const __initData = { code: "function ConjureNativeControlOverlayTsx1(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData2 = { code: "function ConjureNativeControlOverlayTsx2(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData3 = { code: "function ConjureNativeControlOverlayTsx3(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativeControlOverlay.tsx");

export default function ConjureNativeControlOverlay(arg0) {
  let Button;
  let View2;
  let active;
  let children;
  let closure_2;
  let combined;
  let intl3;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj7;
  let projectId;
  let prop1;
  let stop;
  let stopping;
  let tmp20;
  let visible;
  ({ projectId, visible } = arg0);
  let conjureControlPhase;
  dependencyMap = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  ({ active, children } = arg0);
  let tmp = closure_9();
  let tmp2 = conjureControlPhase;
  let obj = conjureControlPhase(12099);
  conjureControlPhase = obj.useConjureControlPhase(active);
  let obj2 = conjureControlPhase(12099);
  const conjureControlStop = obj2.useConjureControlStop(projectId);
  ({ stop, stopping } = conjureControlStop);
  const obj3 = conjureControlPhase(10923);
  const conjureControlTuning = obj3.useConjureControlTuning(projectId);
  let items = [sharedValue2];
  const obj4 = conjureControlPhase(504);
  const stateFromStores = obj4.useStateFromStores(items, () => sharedValue2.useReducedMotion);
  let tmp8 = visible;
  if (tmp8) {
    tmp8 = "controlling" === conjureControlPhase;
  }
  dependencyMap = tmp8;
  const tmp2Result = tmp2(5095);
  sharedValue = tmp2Result.useSharedValue(0);
  const tmp2Result6 = tmp2(5095);
  sharedValue1 = tmp2Result6.useSharedValue(0);
  const items1 = [sharedValue1, conjureControlPhase, stateFromStores];
  const effect = sharedValue.useEffect(() => {
    let Easing;
    if ("controlling" === conjureControlPhase) {
      let num5 = 1;
      set2 = sharedValue1.set;
      if (!stateFromStores) {
        const obj2 = spring;
        num5 = obj2.withSpring(1, springPresets.SUBTLE_SPRING);
      }
      set2(num5);
    } else if ("handoff" === tmp) {
      set = sharedValue1.set;
      const withDelay = ReanimatedRexport.withDelay;
      let num2 = 280;
      ReanimatedRexport;
      const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - 280;
      const withTiming = timing.withTiming;
      timing;
      if (stateFromStores) {
        num2 = 0;
      }
      const obj = { duration: num2, easing: Easing.in(ReanimatedRexport.Easing.ease) };
      Easing = ReanimatedRexport.Easing;
      const result = set(withDelay(diff, withTiming(0, obj)));
    } else {
      const result1 = sharedValue1.set(0);
    }
  }, items1);
  const tmp2Result7 = tmp2(5095);
  sharedValue2 = tmp2Result7.useSharedValue(0.5);
  const items2 = [tmp8, sharedValue2, stateFromStores];
  const effect1 = sharedValue.useEffect(() => {
    let Easing;
    const tmp = closure_2;
    if (tmp) {
      let fn;
      const tmp2 = stateFromStores;
      if (!tmp2) {
        const result = sharedValue2.set(0.2);
        set = sharedValue2.set;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        let obj = { duration: 1200, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        const result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
        fn = () => {
          const obj = conjureControlPhase(closure_2[9]);
          return obj.cancelAnimation(sharedValue2);
        };
      }
      return fn;
    }
    const obj2 = ReanimatedRexport;
    obj2.cancelAnimation(sharedValue2);
    const result2 = sharedValue2.set(0.5);
  }, items2);
  const tmp2Result8 = tmp2(5095);
  class H {
    constructor() {
      let bound;
      const obj = { height: bound * sharedValue.get() };
      bound = Math.max(0, sharedValue1.get());
      return obj;
    }
  }
  H.__closure = { shown: sharedValue1, barHeight: sharedValue };
  H.__workletHash = 5735939888549;
  H.__initData = __initData;
  const animatedStyle = tmp2Result8.useAnimatedStyle(H);
  const tmp2Result9 = tmp2(5095);
  class T {
    constructor() {
      let diff;
      let items;
      const obj = { transform: items };
      const obj2 = { translateY: diff * sharedValue.get() };
      diff = sharedValue1.get() - 1;
      items = [obj2];
      return obj;
    }
  }
  T.__closure = { shown: sharedValue1, barHeight: sharedValue };
  T.__workletHash = 11424550793114;
  T.__initData = __initData2;
  const animatedStyle1 = tmp2Result9.useAnimatedStyle(T);
  const tmp2Result10 = tmp2(5095);
  class P {
    constructor() {
      const obj = { opacity: sharedValue2.get() };
      return obj;
    }
  }
  P.__closure = { pulse: sharedValue2 };
  P.__workletHash = 3342596553897;
  P.__initData = __initData3;
  const animatedStyle2 = tmp2Result10.useAnimatedStyle(P);
  const intl = tmp2(1113).intl;
  const string = intl.string;
  const tmp18 = stateFromStores(3868);
  if (tmp8) {
    let prop;
    let tmp22;
    if (conjureControlTuning) {
      prop = tmp18["VJW/5P"];
      tmp22 = tmp17;
    } else {
      prop = tmp18["+hD2Iz"];
      tmp22 = tmp17;
    }
    tmp20 = tmp22;
    prop1 = prop;
  } else {
    prop1 = tmp18["h+i1r9"];
    tmp20 = tmp17;
  }
  const stringResult = string(prop1);
  let tmp36Result4 = null;
  const obj5 = { style: tmp.root, children: items6 };
  if (visible) {
    tmp36Result4 = null;
    if ("idle" !== conjureControlPhase) {
      let tmp36Result;
      const obj6 = { style: items3, children: closure_7(View2, obj7) };
      items3 = [tmp.barArea, animatedStyle];
      const View = tmp20(5095).View;
      obj7 = {
        style: items4,
        onLayout(nativeEvent) {
              return sharedValue.set(nativeEvent.nativeEvent.layout.height);
            },
        accessibilityLiveRegion: "polite",
        children: items5
      };
      items4 = [tmp.bar, animatedStyle1];
      View2 = tmp20(5095).View;
      if (tmp8) {
        tmp36Result = tmp36(tmp2(12100).AILoader, { size: 12, color: "text-overlay-light" });
      } else {
        const obj8 = { size: "sm", color: tmp20(575).colors.TEXT_OVERLAY_LIGHT };
        const SparklesIcon = tmp2(12104).SparklesIcon;
        tmp36Result = tmp36(SparklesIcon, obj8);
      }
      items5 = [tmp36Result, , ];
      const obj9 = { variant: "text-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp.title, accessibilityLabel: combined, children: stringResult };
      combined = stringResult;
      const Text = tmp2(5624).Text;
      if (tmp8) {
        const intl2 = tmp2(1113).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult + ". " + intl2.string(tmp20(3868).fg1sor);
      }
      items5[1] = closure_6(Text, obj9);
      let tmp36Result3 = null;
      if (tmp8) {
        tmp36Result3 = null;
        if (null != stop) {
          const obj10 = { style: tmp.actions, children: closure_6(Button, obj11) };
          obj11 = { variant: "primary-overlay", size: "sm", text: intl3.string(tmp20(3868).oU59sU), loading: stopping, onPress: stop };
          Button = tmp2(5634).Button;
          intl3 = tmp2(1113).intl;
          tmp36Result3 = tmp36(tmp25, obj10);
        }
      }
      items5[2] = tmp36Result3;
      tmp36Result4 = tmp36(View, obj6);
    }
  }
  items6 = [tmp36Result4, , ];
  const obj12 = { style: tmp.content, children: items7 };
  items7 = [children, ];
  let tmp31 = null;
  if (tmp8) {
    const obj13 = { style: tmp.block, pointerEvents: "box-only" };
    tmp31 = closure_6(tmp25, obj13);
  }
  items7[1] = tmp31;
  items6[1] = closure_7(sharedValue1, obj12);
  let tmp24Result = null;
  if (tmp8) {
    const obj15 = { style: items8, pointerEvents: "none" };
    items8 = [tmp.glow, animatedStyle2];
    const obj14 = { children: items9 };
    items9 = [closure_6(tmp20(5095).View, obj15), ];
    const obj16 = { style: tmp.border, pointerEvents: "none" };
    items9[1] = closure_6(sharedValue1, obj16);
    tmp24Result = tmp24(closure_8, obj14);
  }
  items6[2] = tmp24Result;
  return closure_7(sharedValue1, obj5);
};
