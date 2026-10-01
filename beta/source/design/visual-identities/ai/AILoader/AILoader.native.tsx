// Module ID: 13935
// Function ID: 13936
// Name: AILoader
// Dependencies: [19, 17, 13936, 21, 4836, 4566, 4837, 13937, 4540, 2]

// Module 13935 (AILoader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import AIGlyphText from "AIGlyphText" /* 13937 */;
import react from "react" /* 19 */;
import AILoaderConstants from "AILoaderConstants" /* 13936 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let AI_LOADER_REST_FRACTION;
let AI_LOADER_STEP_FRACTION;
let c10;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function Slot(index) {
  let color;
  let cycle;
  index = index.index;
  size = index.size;
  ({ color: dependencyMap, cycle } = index);
  const stagger = index.stagger;
  const tmp = closure_16(size);
  const glyph = tmp;
  let obj = index(4566);
  const sharedValue = obj.useSharedValue(0);
  let items = [cycle, index, sharedValue, stagger];
  const effect = cycle.useEffect(() => {
    const result = sharedValue.set(0);
    set = sharedValue.set;
    const withDelay = ReanimatedRexport.withDelay;
    const result1 = index * stagger;
    ReanimatedRexport;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    let obj = timing;
    const obj2 = { duration: cycle, easing: ReanimatedRexport.Easing.linear };
    const result2 = set(withDelay(result1, withRepeat(obj.withTiming(1, obj2, "animate-always"), -1)));
    return () => {
      const obj = index(dependencyMap[5]);
      return obj.cancelAnimation(sharedValue);
    };
  }, items);
  let obj2 = index(4566);
  class T {
    constructor() {
      let items;
      const value = sharedValue.get();
      if (typeof trackStepAt === "function") {
        let first;
        if (value < AI_LOADER_REST_FRACTION) {
          first = AI_LOADER_TRACK_STEPS[0];
        } else {
          const _Math = Math;
          const _Math2 = Math;
          first = AI_LOADER_TRACK_STEPS[Math.min(Math, Math.floor(Math, (value - tmp2) / AI_LOADER_STEP_FRACTION) + 1, AI_LOADER_TRACK_STEPS.length - 1)];
        }
        const obj = { transform: items };
        items = [{ translateY: -first * size }];
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const obj3 = { trackStepAt, progress: sharedValue, size };
  T.__closure = obj3;
  T.__workletHash = 16632594382704;
  T.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(T);
  ({ style: animatedStyle, children: closure_7.map((children) => jsx(AIGlyphText.AIGlyphText, { size, color: dependencyMap, allowFontScaling: false, style: glyph.glyph, children }, children)) });
  View = size(4566).View;
  return <stagger style={tmp.slot}>{null}</stagger>;
}
let View = react_native.View;
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_GAP_EM: metroRequire, AI_LOADER_GLYPHS: metroImportDefault, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroImportAll, AI_LOADER_REST_FRACTION } = AILoaderConstants);
({ AI_LOADER_SLOT_COUNT: c10, AI_LOADER_SLOT_STAGGER_MS: unpackModuleId, AI_LOADER_STEP_FRACTION } = AILoaderConstants);
const AI_LOADER_TRACK_STEPS = AILoaderConstants.AI_LOADER_TRACK_STEPS;
const jsx = Fragment.jsx;
function trackStepAt(arg0) {
  if (arg0 < AI_LOADER_REST_FRACTION) {
    return AI_LOADER_TRACK_STEPS[0];
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return AI_LOADER_TRACK_STEPS[Math.min(Math, Math.floor(Math, (arg0 - tmp) / AI_LOADER_STEP_FRACTION) + 1, AI_LOADER_TRACK_STEPS.length - 1)];
  }
}
trackStepAt.__closure = { AI_LOADER_REST_FRACTION, AI_LOADER_TRACK_STEPS, AI_LOADER_STEP_FRACTION };
trackStepAt.__workletHash = 2403964493846;
trackStepAt.__initData = { code: "function trackStepAt_AILoaderNativeTsx1(progress){const{AI_LOADER_REST_FRACTION,AI_LOADER_TRACK_STEPS,AI_LOADER_STEP_FRACTION}=this.__closure;if(progress<AI_LOADER_REST_FRACTION)return AI_LOADER_TRACK_STEPS[0];const step=Math.floor((progress-AI_LOADER_REST_FRACTION)/AI_LOADER_STEP_FRACTION)+1;return AI_LOADER_TRACK_STEPS[Math.min(step,AI_LOADER_TRACK_STEPS.length-1)];}" };
let closure_16 = createStyles.createStyles((width) => {
  const obj = { loader: obj2, slot: { width, height: width, overflow: "hidden" }, glyph: { height: width } };
  return obj;
});
const __initData = { code: "function AILoaderNativeTsx2(){const{trackStepAt,progress,size}=this.__closure;return{transform:[{translateY:-trackStepAt(progress.get())*size}]};}" };
const memoResult = react.memo((size) => {
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
  const tmp = closure_16(num);
  const reducedMotion = num2.useContext(num(4540).AccessibilityPreferencesContext).reducedMotion;
  dependencyMap = reducedMotion.enabled ? closure_8 : closure_5;
  num2 = 0;
  if (!reducedMotion.enabled) {
    num2 = closure_11;
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
  obj2 = { length: closure_10 };
  return tmp3(tmp4, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("design/visual-identities/ai/AILoader/AILoader.native.tsx");

export const AILoader = memoResult;
