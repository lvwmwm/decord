// Module ID: 18719
// Function ID: 18720
// Name: SuggestedSearchSkeleton
// Dependencies: [19, 17, 13838, 9806, 21, 5009, 575, 5090, 5249, 2]
// Exports: default

// Module 18719 (SuggestedSearchSkeleton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import SearchConstants from "SearchConstants" /* 9806 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13838 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
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
const __initData = { code: "function SuggestedSearchSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchSkeleton.tsx");

export default function SuggestedSearchSkeleton() {
  let items1;
  let items2;
  let obj6;
  let sharedValue;
  const tmp = closure_7();
  let obj = sharedValue(5090);
  sharedValue = obj.useSharedValue(0.4);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    const obj = timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 700 }), -1, true));
  }, items);
  const fn = function l() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 9760194902231;
  fn.__initData = __initData;
  const obj2 = sharedValue(5090);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items1, "aria-hidden": true, children: items2 };
  items1 = [tmp.row, animatedStyle];
  const obj4 = { style: tmp.icon };
  View = ReanimatedRexportDefault.View;
  items2 = [closure_5(View, obj4), ];
  const obj5 = { style: tmp.labels, children: closure_5(View, obj6) };
  obj6 = { style: tmp.line };
  items2[1] = closure_5(View, obj5);
  return closure_6(View, obj3);
};
