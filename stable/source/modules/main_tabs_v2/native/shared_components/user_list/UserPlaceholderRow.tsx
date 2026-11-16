// Module ID: 9241
// Function ID: 9242
// Name: UserPlaceholderRow
// Dependencies: [19, 17, 5171, 21, 5170, 575, 1652, 504, 5402, 5405, 2]

// Module 9241 (UserPlaceholderRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import timingPresets from "timingPresets" /* 5405 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
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
let closure_9 = { code: "(function UserPlaceholderRowTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
const memoResult = react.memo(function UserPlaceholderRow(animate) {
  let height;
  let items4;
  let items5;
  let items6;
  let obj6;
  let obj7;
  let result;
  let row;
  let tmp8;
  let tmp9;
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
  let obj = sharedValue(1652);
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
      const withRepeat = _mod1652.withRepeat;
      _mod1652;
      const withSequence = _mod1652.withSequence;
      _mod1652;
      const obj = { duration: 2 * timingPresets.timingSlowDuration };
      const withTiming = timing_timing.withTiming;
      timing_timing;
      const withTimingResult = withTiming(0.3, obj);
      const obj2 = { duration: 2 * timingPresets.timingSlowDuration };
      const withTiming2 = timing_timing.withTiming;
      timing_timing;
      const result = set(withRepeat(withSequence(withTimingResult, withTiming2(1, obj2)), -1, true));
    } else {
      const result1 = set(1);
    }
  }, items1);
  const items2 = [closure_9, sharedValue];
  let c0;
  [tmp8, tmp9] = items2;
  const tmp4Result = tmp4(1652);
  class UserPlaceholderRowTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp9];
  UserPlaceholderRowTsx1.__closure = items3;
  UserPlaceholderRowTsx1.__workletHash = 5854204937948;
  UserPlaceholderRowTsx1.__initData = tmp8;
  const animatedStyle = tmp4Result.useAnimatedStyle(UserPlaceholderRowTsx1);
  const obj3 = { style: items4, collapsable: false, children: items5 };
  items4 = [tmp3.row, animatedStyle];
  const obj4 = { style: tmp3.placeholderAvatar };
  View = flag(1652).View;
  items5 = [closure_6(View, obj4), ];
  const obj5 = { style: tmp3.rowInner, children: closure_6(View, obj6) };
  obj6 = { style: tmp3.rowHeaderWrapper, children: closure_6(View, obj7) };
  obj7 = { style: items6 };
  items6 = [tmp3.placeholderText, ];
  const obj8 = { width: "" + 40 * (result - Math.floor(result)) + 40 + "%" };
  result = 10000 * Math.sin(row);
  items6[1] = obj8;
  items5[1] = closure_6(View, obj5);
  return closure_7(View, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx");

export default memoResult;
