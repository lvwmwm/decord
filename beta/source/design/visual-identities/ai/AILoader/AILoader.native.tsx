// Module ID: 12463
// Function ID: 12464
// Name: AILoader
// Dependencies: [19, 17, 12464, 21, 5170, 1652, 5402, 12465, 5231, 2]

// Module 12463 (AILoader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import AIGlyphText from "AIGlyphText" /* 12465 */;
import react from "react" /* 19 */;
import AILoaderConstants from "AILoaderConstants" /* 12464 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let AI_LOADER_REST_FRACTION;
let AI_LOADER_STEP_FRACTION;
let AI_LOADER_TRACK_STEPS;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
function Slot(index) {
  let color;
  let cycle;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  index = index.index;
  size = index.size;
  ({ color: dependencyMap, cycle } = index);
  const stagger = index.stagger;
  const tmp = closure_13(size);
  const glyph = tmp;
  let obj = index(1652);
  const sharedValue = obj.useSharedValue(0);
  let items = [cycle, index, sharedValue, stagger];
  const effect = cycle.useEffect(() => {
    const result = sharedValue.set(0);
    set = sharedValue.set;
    const withDelay = _mod1652.withDelay;
    const result1 = index * stagger;
    _mod1652;
    const withRepeat = _mod1652.withRepeat;
    _mod1652;
    let obj = timing_timing;
    const obj2 = { duration: cycle, easing: _mod1652.Easing.linear };
    const result2 = set(withDelay(result1, withRepeat(obj.withTiming(1, obj2, "animate-always"), -1)));
    return () => {
      const obj = index(dependencyMap[5]);
      return obj.cancelAnimation(sharedValue);
    };
  }, items);
  let obj2 = index(1652);
  const items1 = [closure_14, trackStepAt, sharedValue, size];
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items1;
  class AILoaderNativeTsx2 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ translateY: -_undefined(_undefined2.get()) * c2 }];
      ({ translateY: -_undefined(_undefined2.get()) * c2 });
      return obj;
    }
  }
  const items2 = [tmp6, tmp7, tmp8];
  AILoaderNativeTsx2.__closure = items2;
  AILoaderNativeTsx2.__workletHash = 5441538311625;
  AILoaderNativeTsx2.__initData = tmp5;
  const animatedStyle = obj2.useAnimatedStyle(AILoaderNativeTsx2);
  ({ style: animatedStyle, children: closure_7.map((children) => jsx(AIGlyphText.AIGlyphText, { size, color: dependencyMap, allowFontScaling: false, style: glyph.glyph, children }, children)) });
  View = size(1652).View;
  return <stagger style={tmp.slot}>{null}</stagger>;
}
let View = react_native.View;
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_GAP_EM: metroRequire, AI_LOADER_GLYPHS: metroImportDefault, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroImportAll, AI_LOADER_SLOT_COUNT: c9, AI_LOADER_SLOT_STAGGER_MS: c10, AI_LOADER_REST_FRACTION, AI_LOADER_STEP_FRACTION, AI_LOADER_TRACK_STEPS } = AILoaderConstants);
const jsx = Fragment.jsx;
let items = [{ code: "(function trackStepAt_AILoaderNativeTsx1(progress){let[AI_LOADER_REST_FRACTION,AI_LOADER_TRACK_STEPS,AI_LOADER_STEP_FRACTION]=this.__closure;if(progress<AI_LOADER_REST_FRACTION)return AI_LOADER_TRACK_STEPS[0];const step=Math.floor((progress-AI_LOADER_REST_FRACTION)/AI_LOADER_STEP_FRACTION)+1;return AI_LOADER_TRACK_STEPS[Math.min(step,AI_LOADER_TRACK_STEPS.length-1)];})" }, AI_LOADER_REST_FRACTION, AI_LOADER_TRACK_STEPS, AI_LOADER_STEP_FRACTION];
let c0;
let c1;
let c2;
[tmp3, tmp4, tmp5, tmp6] = items;
function trackStepAt(arg0) {
  if (arg0 < c0) {
    return _undefined[0];
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return _undefined[Math.min(Math, Math.floor(Math, (arg0 - tmp) / c2) + 1, _undefined.length - 1)];
  }
}
let items1 = [tmp4, tmp5, tmp6];
trackStepAt.__closure = items1;
trackStepAt.__workletHash = 8339432593103;
trackStepAt.__initData = tmp3;
let closure_13 = createStyles.createStyles((width) => {
  const obj = { loader: obj2, slot: { width, height: width, overflow: "hidden" }, glyph: { height: width } };
  return obj;
});
let closure_14 = { code: "(function AILoaderNativeTsx2(){let[trackStepAt,progress,size]=this.__closure;return{transform:[{translateY:-trackStepAt(progress.get())*size}]};})" };
const memoResult = react.memo(function AILoader(size) {
  let cycle;
  let items;
  let obj2;
  let str2;
  let str3;
  let num = size.size;
  if (num === undefined) {
    num = 16;
  }
  let str = size.color;
  if (str === undefined) {
    str = "text-default";
  }
  const accessibilityLabel = size.accessibilityLabel;
  let num2;
  const style = size.style;
  const tmp = closure_13(num);
  const reducedMotion = num2.useContext(num(5231).AccessibilityPreferencesContext).reducedMotion;
  dependencyMap = reducedMotion.enabled ? closure_8 : closure_5;
  num2 = 0;
  if (!reducedMotion.enabled) {
    num2 = closure_10;
  }
  const obj = { style: items, accessible: tmp2, accessibilityRole: str2, accessibilityLabel, accessibilityElementsHidden: null == accessibilityLabel, importantForAccessibility: str3, children: Array.from(obj2, (arg0, index) => <Slot key={arg1} index={arg1} size={num} color={str} cycle={cycle} stagger={num2} />) };
  items = [tmp.loader, style];
  str2 = undefined;
  const tmp3 = jsx;
  const tmp4 = View;
  if (null != accessibilityLabel) {
    str2 = "image";
  }
  str3 = "no-hide-descendants";
  if (null != accessibilityLabel) {
    str3 = "yes";
  }
  obj2 = { length: closure_9 };
  return tmp3(tmp4, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("design/visual-identities/ai/AILoader/AILoader.native.tsx");

export const AILoader = memoResult;
