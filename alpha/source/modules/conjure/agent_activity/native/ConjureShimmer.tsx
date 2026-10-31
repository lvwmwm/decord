// Module ID: 12623
// Function ID: 12624
// Name: ConjureShimmer
// Dependencies: [32, 19, 17, 5015, 21, 5014, 504, 5095, 5254, 671, 7038, 5587, 2]
// Exports: default

// Module 12623 (ConjureShimmer)
import _modDef671 from "module_671" /* 671 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

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
const __initData = { code: "function ConjureShimmerTsx1(){const{bandWidth,progress,width}=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};}" };
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureShimmer.tsx");

export default function ConjureShimmer(epoch) {
  let View;
  let closure_2;
  let items3;
  let items4;
  let live;
  let obj10;
  let obj6;
  let obj7;
  let obj8;
  let renderFace;
  let tint;
  let tmp18;
  let useReducedMotion;
  ({ renderFace, live, tint } = epoch);
  let num = epoch.epoch;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  live = undefined;
  let c5;
  let tmp = closure_13();
  let obj = tint(504);
  let items = [AccessibilityStore];
  let obj2 = live;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = sharedValue(live.useState(0), 2);
  const width = tmp5[0];
  dependencyMap = tmp5[1];
  const obj3 = tint(5095);
  sharedValue = obj3.useSharedValue(0);
  const tmp2 = tint;
  if (live) {
    live = !stateFromStores;
  }
  if (live) {
    live = width > 0;
  }
  const items1 = [live, num, sharedValue];
  const effect = obj2.useEffect(() => {
    let fn;
    const tmp = live;
    if (tmp) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const obj2 = { duration: 2000, easing: ReanimatedRexport.Easing.linear };
      const withTiming = timing.withTiming;
      timing;
      const result1 = set(withRepeat(withTiming(1, obj2), -1, false));
      fn = () => {
        const obj = tint(closure_2[7]);
        return obj.cancelAnimation(sharedValue);
      };
    } else {
      let obj = ReanimatedRexport;
      obj.cancelAnimation(sharedValue);
      const result2 = sharedValue.set(0);
    }
    return fn;
  }, items1);
  const items2 = [tint];
  let result = 4 * width;
  c5 = result;
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
  let fn = function k() {
    let items;
    const obj = { transform: items };
    items = [{ translateX: -c5 + sharedValue.get() * (c5 + first) }];
    ({ translateX: -c5 + sharedValue.get() * (c5 + first) });
    return obj;
  };
  fn.__closure = { bandWidth: result, progress: sharedValue, width };
  fn.__workletHash = 5317727670570;
  fn.__initData = __initData;
  const tmp2Result = tmp2(5095);
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const obj4 = {
    style: tmp.root,
    onLayout: obj2.useCallback((nativeEvent) => {
      let closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
      let tmp = closure_2((arg0) => {
        let tmp = closure_0;
        if (arg0 === closure_0) {
          tmp = arg0;
        }
        return tmp;
      });
    }, []),
    children: items3
  };
  items3 = [renderFace(), ];
  let tmp14 = null;
  const tmp12 = closure_9;
  if (live) {
    const obj5 = { style: c5.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_8(tmp18, obj6) };
    obj6 = { style: c5.absoluteFill, androidRenderingMode: "software", maskElement: closure_8(closure_6, obj7), children: closure_8(View, obj8) };
    obj7 = { children: renderFace() };
    tmp18 = width(7038);
    obj8 = { style: items4, children: closure_8(width(5587), obj10) };
    items4 = [tmp.band, , ];
    const obj9 = { width: result };
    items4[1] = obj9;
    items4[2] = animatedStyle;
    View = width(5095).View;
    obj10 = { style: tmp.fill, start, end, colors: memo, locations };
    tmp14 = closure_8(tmp13, obj5);
  }
  items3[1] = tmp14;
  return tmp12(closure_6, obj4);
};
