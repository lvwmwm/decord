// Module ID: 9109
// Function ID: 9110
// Name: UserPlaceholderRow
// Dependencies: [19, 17, 5010, 21, 5009, 575, 5090, 504, 5249, 5252, 2]

// Module 9109 (UserPlaceholderRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import timingPresets from "timingPresets" /* 5252 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((height) => {
  const obj = { row: { paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height }, rowInner: { marginHorizontal: nativeDefault.space.PX_16, flex: 1 }, rowHeaderWrapper: { alignItems: "center", flexDirection: "row" }, placeholderAvatar: size, placeholderText: { height: 20, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
  ({ paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height });
  ({ marginHorizontal: nativeDefault.space.PX_16, flex: 1 });
  size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  ({ height: 20, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  return obj;
});
const __initData = { code: "function UserPlaceholderRowTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const memoResult = react.memo(function UserPlaceholderRow(animate) {
  let height;
  let items2;
  let items3;
  let items4;
  let obj6;
  let obj7;
  let result;
  let row;
  let useReducedMotion;
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  ({ height, row } = animate);
  if (height === undefined) {
    height = flag(575).space.PX_48;
  }
  let sharedValue;
  flag = undefined;
  const tmp3 = closure_8(height);
  let obj = sharedValue(5090);
  const tmp4 = sharedValue;
  sharedValue = obj.useSharedValue(1);
  let obj2 = sharedValue(504);
  const items = [AccessibilityStore];
  if (flag) {
    flag = !obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  }
  const items1 = [flag, sharedValue];
  const effect = react.useEffect(() => {
    if (flag) {
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj = { duration: 2 * timingPresets.timingSlowDuration };
      const withTiming = timing.withTiming;
      timing;
      const withTimingResult = withTiming(0.3, obj);
      const obj2 = { duration: 2 * timingPresets.timingSlowDuration };
      const withTiming2 = timing.withTiming;
      timing;
      const result = set(withRepeat(withSequence(withTimingResult, withTiming2(1, obj2)), -1, true));
    } else {
      const result1 = set(1);
    }
  }, items1);
  const fn = function v() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10137317865125;
  fn.__initData = __initData;
  const tmp4Result = tmp4(5090);
  const animatedStyle = tmp4Result.useAnimatedStyle(fn);
  const obj3 = { style: items2, collapsable: false, children: items3 };
  items2 = [tmp3.row, animatedStyle];
  const obj4 = { style: tmp3.placeholderAvatar };
  View = flag(5090).View;
  items3 = [closure_6(View, obj4), ];
  const obj5 = { style: tmp3.rowInner, children: closure_6(View, obj6) };
  obj6 = { style: tmp3.rowHeaderWrapper, children: closure_6(View, obj7) };
  obj7 = { style: items4 };
  items4 = [tmp3.placeholderText, ];
  const obj8 = { width: "" + 40 * (result - Math.floor(result)) + 40 + "%" };
  result = 10000 * Math.sin(row);
  items4[1] = obj8;
  items3[1] = closure_6(View, obj5);
  return closure_7(View, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx");

export default memoResult;
