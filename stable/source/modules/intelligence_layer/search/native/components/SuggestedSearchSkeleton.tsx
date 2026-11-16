// Module ID: 19161
// Function ID: 19162
// Name: SuggestedSearchSkeleton
// Dependencies: [19, 17, 14154, 9950, 21, 5170, 575, 1652, 5402, 2]
// Exports: default

// Module 19161 (SuggestedSearchSkeleton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import SearchConstants from "SearchConstants" /* 9950 */;
import SmartSearchConstants from "SmartSearchConstants" /* 14154 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let set;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
let size1;
let View = react_native.View;
const SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT = SmartSearchConstants.SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT;
const SEARCH_ROW_TAP_STATE_PADDING = SearchConstants.SEARCH_ROW_TAP_STATE_PADDING;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, icon: size, labels: { flex: 1, height: SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center" }, line: size1 };
obj2 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: SEARCH_ROW_TAP_STATE_PADDING };
createStyles = createStyles.createStyles;
size = { width: 18, height: 18, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginRight: nativeDefault.space.PX_12 };
size1 = { height: 16, width: "72%", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
let closure_8 = { code: "(function SuggestedSearchSkeletonTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchSkeleton.tsx");

export default function SuggestedSearchSkeleton() {
  let items3;
  let items4;
  let obj6;
  let sharedValue;
  let tmp5;
  let tmp6;
  const tmp = closure_7();
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(0.4);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = _mod1652.withRepeat;
    _mod1652;
    const obj = timing_timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 700 }), -1, true));
  }, items);
  const items1 = [closure_8, sharedValue];
  let c0;
  [tmp5, tmp6] = items1;
  const obj2 = sharedValue(1652);
  class SuggestedSearchSkeletonTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp6];
  SuggestedSearchSkeletonTsx1.__closure = items2;
  SuggestedSearchSkeletonTsx1.__workletHash = 13808253704974;
  SuggestedSearchSkeletonTsx1.__initData = tmp5;
  const animatedStyle = obj2.useAnimatedStyle(SuggestedSearchSkeletonTsx1);
  const obj3 = { style: items3, "aria-hidden": true, children: items4 };
  items3 = [tmp.row, animatedStyle];
  const obj4 = { style: tmp.icon };
  View = _modDef1652.View;
  items4 = [closure_5(View, obj4), ];
  const obj5 = { style: tmp.labels, children: closure_5(View, obj6) };
  obj6 = { style: tmp.line };
  items4[1] = closure_5(View, obj5);
  return closure_6(View, obj3);
};
