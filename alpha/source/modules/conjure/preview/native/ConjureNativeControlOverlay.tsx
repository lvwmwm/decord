// Module ID: 13347
// Function ID: 13348
// Name: ConjureNativeControlOverlay
// Dependencies: [19, 17, 5307, 21, 5306, 575, 13348, 13142, 504, 1655, 5939, 5940, 5548, 1113, 4131, 13349, 13353, 5929, 5936, 2]
// Exports: default

// Module 13347 (ConjureNativeControlOverlay)
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import spring_spring from "spring/spring" /* 5939 */;
import springPresets from "springPresets" /* 5940 */;
import useConjureControlBar from "useConjureControlBar" /* 13348 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
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
let closure_10 = { code: "(function ConjureNativeControlOverlayTsx1(){let[shown,barHeight]=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};})" };
let closure_11 = { code: "(function ConjureNativeControlOverlayTsx2(){let[shown,barHeight]=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};})" };
let closure_12 = { code: "(function ConjureNativeControlOverlayTsx3(){let[pulse]=this.__closure;return{opacity:pulse.get()};})" };
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativeControlOverlay.tsx");

export default function ConjureNativeControlOverlay(arg0) {
  let Button;
  let View2;
  let active;
  let children;
  let closure_2;
  let combined;
  let intl3;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items9;
  let obj11;
  let obj7;
  let projectId;
  let prop1;
  let stop;
  let stopping;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp28;
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
  let obj = conjureControlPhase(13348);
  conjureControlPhase = obj.useConjureControlPhase(active);
  let obj2 = conjureControlPhase(13348);
  const conjureControlStop = obj2.useConjureControlStop(projectId);
  ({ stop, stopping } = conjureControlStop);
  const obj3 = conjureControlPhase(13142);
  const conjureControlTuning = obj3.useConjureControlTuning(projectId);
  let items = [sharedValue2];
  const obj4 = conjureControlPhase(504);
  const stateFromStores = obj4.useStateFromStores(items, () => sharedValue2.useReducedMotion);
  let tmp8 = visible;
  if (tmp8) {
    tmp8 = "controlling" === conjureControlPhase;
  }
  dependencyMap = tmp8;
  const tmp2Result = tmp2(1655);
  sharedValue = tmp2Result.useSharedValue(0);
  const tmp2Result6 = tmp2(1655);
  sharedValue1 = tmp2Result6.useSharedValue(0);
  const items1 = [sharedValue1, conjureControlPhase, stateFromStores];
  const effect = sharedValue.useEffect(() => {
    let Easing;
    if ("controlling" === conjureControlPhase) {
      let num5 = 1;
      set2 = sharedValue1.set;
      if (!stateFromStores) {
        const obj2 = spring_spring;
        num5 = obj2.withSpring(1, springPresets.SUBTLE_SPRING);
      }
      set2(num5);
    } else if ("handoff" === tmp) {
      set = sharedValue1.set;
      const withDelay = _mod1655.withDelay;
      let num2 = 280;
      _mod1655;
      const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - 280;
      const withTiming = timing_timing.withTiming;
      timing_timing;
      if (stateFromStores) {
        num2 = 0;
      }
      const obj = { duration: num2, easing: Easing.in(_mod1655.Easing.ease) };
      Easing = _mod1655.Easing;
      const result = set(withDelay(diff, withTiming(0, obj)));
    } else {
      const result1 = sharedValue1.set(0);
    }
  }, items1);
  const tmp2Result7 = tmp2(1655);
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
        const withRepeat = _mod1655.withRepeat;
        _mod1655;
        let obj = { duration: 1200, easing: Easing.inOut(_mod1655.Easing.ease) };
        const withTiming = timing_timing.withTiming;
        timing_timing;
        Easing = _mod1655.Easing;
        const result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
        fn = () => {
          const obj = conjureControlPhase(closure_2[9]);
          return obj.cancelAnimation(sharedValue2);
        };
      }
      return fn;
    }
    const obj2 = _mod1655;
    obj2.cancelAnimation(sharedValue2);
    const result2 = sharedValue2.set(0.5);
  }, items2);
  const items3 = [closure_10, sharedValue1, sharedValue];
  let c0;
  let c1;
  [tmp14, tmp15, tmp16] = items3;
  const tmp2Result8 = tmp2(1655);
  class ConjureNativeControlOverlayTsx1 {
    constructor() {
      let bound;
      const obj = { height: bound * _undefined2.get() };
      bound = Math.max(0, _undefined.get());
      return obj;
    }
  }
  const items4 = [tmp15, tmp16];
  ConjureNativeControlOverlayTsx1.__closure = items4;
  ConjureNativeControlOverlayTsx1.__workletHash = 2210719149660;
  ConjureNativeControlOverlayTsx1.__initData = tmp14;
  const animatedStyle = tmp2Result8.useAnimatedStyle(ConjureNativeControlOverlayTsx1);
  const items5 = [closure_11, sharedValue1, sharedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp18, tmp19, tmp20] = items5;
  const tmp2Result9 = tmp2(1655);
  class ConjureNativeControlOverlayTsx2 {
    constructor() {
      let diff;
      let items;
      const obj = { transform: items };
      const obj2 = { translateY: diff * _undefined2.get() };
      diff = _undefined.get() - 1;
      items = [obj2];
      return obj;
    }
  }
  const items6 = [tmp19, tmp20];
  ConjureNativeControlOverlayTsx2.__closure = items6;
  ConjureNativeControlOverlayTsx2.__workletHash = 12257928691075;
  ConjureNativeControlOverlayTsx2.__initData = tmp18;
  const animatedStyle1 = tmp2Result9.useAnimatedStyle(ConjureNativeControlOverlayTsx2);
  const items7 = [closure_12, sharedValue2];
  c0 = undefined;
  [tmp22, tmp23] = items7;
  const tmp2Result10 = tmp2(1655);
  class ConjureNativeControlOverlayTsx3 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items8 = [tmp23];
  ConjureNativeControlOverlayTsx3.__closure = items8;
  ConjureNativeControlOverlayTsx3.__workletHash = 14753805314992;
  ConjureNativeControlOverlayTsx3.__initData = tmp22;
  const animatedStyle2 = tmp2Result10.useAnimatedStyle(ConjureNativeControlOverlayTsx3);
  const intl = tmp2(1113).intl;
  const string = intl.string;
  const tmp26 = stateFromStores(4131);
  if (tmp8) {
    let prop;
    let tmp30;
    if (conjureControlTuning) {
      prop = tmp26["VJW/5P"];
      tmp30 = tmp25;
    } else {
      prop = tmp26["+hD2Iz"];
      tmp30 = tmp25;
    }
    tmp28 = tmp30;
    prop1 = prop;
  } else {
    prop1 = tmp26["h+i1r9"];
    tmp28 = tmp25;
  }
  const stringResult = string(prop1);
  let tmp44Result4 = null;
  const obj5 = { style: tmp.root, children: items12 };
  if (visible) {
    tmp44Result4 = null;
    if ("idle" !== conjureControlPhase) {
      let tmp44Result;
      const obj6 = { style: items9, children: closure_7(View2, obj7) };
      items9 = [tmp.barArea, animatedStyle];
      const View = tmp28(1655).View;
      obj7 = {
        style: items10,
        onLayout(nativeEvent) {
              return sharedValue.set(nativeEvent.nativeEvent.layout.height);
            },
        accessibilityLiveRegion: "polite",
        children: items11
      };
      items10 = [tmp.bar, animatedStyle1];
      View2 = tmp28(1655).View;
      if (tmp8) {
        tmp44Result = tmp44(tmp2(13349).AILoader, { size: 12, color: "text-overlay-light" });
      } else {
        const obj8 = { size: "sm", color: tmp28(575).colors.TEXT_OVERLAY_LIGHT };
        const SparklesIcon = tmp2(13353).SparklesIcon;
        tmp44Result = tmp44(SparklesIcon, obj8);
      }
      items11 = [tmp44Result, , ];
      const obj9 = { variant: "body-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp.title, accessibilityLabel: combined, children: stringResult };
      combined = stringResult;
      const Text = tmp2(5929).Text;
      if (tmp8) {
        const intl2 = tmp2(1113).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult + ". " + intl2.string(tmp28(4131).fg1sor);
      }
      items11[1] = closure_6(Text, obj9);
      let tmp44Result3 = null;
      if (tmp8) {
        tmp44Result3 = null;
        if (null != stop) {
          const obj10 = { style: tmp.actions, children: closure_6(Button, obj11) };
          obj11 = { variant: "primary-overlay", size: "sm", text: intl3.string(tmp28(4131).oU59sU), loading: stopping, onPress: stop };
          Button = tmp2(5936).Button;
          intl3 = tmp2(1113).intl;
          tmp44Result3 = tmp44(tmp33, obj10);
        }
      }
      items11[2] = tmp44Result3;
      tmp44Result4 = tmp44(View, obj6);
    }
  }
  items12 = [tmp44Result4, , ];
  const obj12 = { style: tmp.content, children: items13 };
  items13 = [children, ];
  let tmp39 = null;
  if (tmp8) {
    const obj13 = { style: tmp.block, pointerEvents: "box-only" };
    tmp39 = closure_6(tmp33, obj13);
  }
  items13[1] = tmp39;
  items12[1] = closure_7(sharedValue1, obj12);
  let tmp32Result = null;
  if (tmp8) {
    const obj15 = { style: items14, pointerEvents: "none" };
    items14 = [tmp.glow, animatedStyle2];
    const obj14 = { children: items15 };
    items15 = [closure_6(tmp28(1655).View, obj15), ];
    const obj16 = { style: tmp.border, pointerEvents: "none" };
    items15[1] = closure_6(sharedValue1, obj16);
    tmp32Result = tmp32(closure_8, obj14);
  }
  items12[2] = tmp32Result;
  return closure_7(sharedValue1, obj5);
};
