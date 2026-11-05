// Module ID: 12851
// Function ID: 12852
// Name: ConjureShimmer
// Dependencies: [32, 19, 17, 5144, 21, 5143, 504, 1652, 5380, 671, 7182, 5725, 2]
// Exports: default

// Module 12851 (ConjureShimmer)
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5380 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const locations = [0, 0.4, 0.5, 0.6, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
let closure_13 = createStyles.createStyles({ root: { position: "relative" }, band: { position: "absolute", top: 0, bottom: 0 }, fill: { flex: 1 } });
let closure_14 = { code: "(function ConjureShimmerTsx1(){let[bandWidth,progress,width]=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};})" };
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureShimmer.tsx");

export default function ConjureShimmer(epoch) {
  let View;
  let _undefined;
  let c1;
  let items5;
  let items6;
  let live;
  let obj10;
  let obj6;
  let obj7;
  let obj8;
  let renderFace;
  let tint;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp22;
  let tmp6;
  let useReducedMotion;
  ({ renderFace, live, tint } = epoch);
  let num = epoch.epoch;
  if (num === undefined) {
    num = 0;
  }
  importDefault = undefined;
  let sharedValue;
  live = undefined;
  let tmp = closure_13();
  let obj = tint(sharedValue[6]);
  let items = [AccessibilityStore];
  let obj2 = react;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [tmp6, c1] = live(react.useState(0), 2);
  live(react.useState(0), 2);
  const obj3 = tint(sharedValue[7]);
  sharedValue = obj3.useSharedValue(0);
  const tmp2 = tint;
  if (live) {
    live = !stateFromStores;
  }
  if (live) {
    live = tmp6 > 0;
  }
  const items1 = [live, num, sharedValue];
  const effect = obj2.useEffect(() => {
    let fn;
    const tmp = live;
    if (tmp) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const withRepeat = _mod1652.withRepeat;
      _mod1652;
      const obj2 = { duration: 2000, easing: _mod1652.Easing.linear };
      const withTiming = timing_timing.withTiming;
      timing_timing;
      const result1 = set(withRepeat(withTiming(1, obj2), -1, false));
      fn = () => {
        const obj = tint(sharedValue[7]);
        return obj.cancelAnimation(closure_1_2);
      };
    } else {
      let obj = _mod1652;
      obj.cancelAnimation(sharedValue);
      const result2 = sharedValue.set(0);
    }
    return fn;
  }, items1);
  const items2 = [tint];
  let result = 4 * tmp6;
  const memo = obj2.useMemo(() => {
    const obj = _modDef671(tint);
    const alphaResult = obj.alpha(0);
    const cssResult = alphaResult.css();
    const items = [cssResult, cssResult, , , ];
    const alphaResult1 = obj.alpha(1);
    items[2] = alphaResult1.css();
    items[3] = cssResult;
    items[4] = cssResult;
    return items;
  }, items2);
  const items3 = [closure_14, result, sharedValue, tmp6];
  let c0;
  importDefault = undefined;
  let c2;
  [tmp11, tmp12, tmp13, tmp14] = items3;
  const tmp2Result = tmp2(sharedValue[7]);
  class ConjureShimmerTsx1 {
    constructor() {
      let items;
      const obj = { transform: items };
      const obj2 = { translateX: tmp + _undefined.get() * (c0 + c2) };
      items = [obj2];
      return obj;
    }
  }
  const items4 = [tmp12, tmp13, tmp14];
  ConjureShimmerTsx1.__closure = items4;
  ConjureShimmerTsx1.__workletHash = 6512928925171;
  ConjureShimmerTsx1.__initData = tmp11;
  const animatedStyle = tmp2Result.useAnimatedStyle(ConjureShimmerTsx1);
  const obj4 = {
    style: tmp.root,
    onLayout: obj2.useCallback((nativeEvent) => {
      let closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
      let tmp = _undefined((arg0) => {
        let tmp = closure_0;
        if (arg0 === closure_0) {
          tmp = arg0;
        }
        return tmp;
      });
    }, []),
    children: items5
  };
  items5 = [renderFace(), ];
  let tmp18 = null;
  const tmp16 = closure_9;
  if (live) {
    const obj5 = { style: closure_5.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_8(tmp22, obj6) };
    obj6 = { style: closure_5.absoluteFill, androidRenderingMode: "software", maskElement: closure_8(closure_6, obj7), children: closure_8(View, obj8) };
    obj7 = { children: renderFace() };
    tmp22 = require("module_7182");
    obj8 = { style: items6, children: closure_8(require("LinearGradient"), obj10) };
    items6 = [tmp.band, , ];
    const obj9 = { width: result };
    items6[1] = obj9;
    items6[2] = animatedStyle;
    View = require("module_1652").View;
    obj10 = { style: tmp.fill, start, end, colors: memo, locations };
    tmp18 = closure_8(tmp17, obj5);
  }
  items5[1] = tmp18;
  return tmp16(closure_6, obj4);
};
