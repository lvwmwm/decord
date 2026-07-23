// Module ID: 8491
// Function ID: 67797
// Name: placeholderRowWidth
// Dependencies: [31, 27, 4122, 33, 4130, 689, 3991, 566, 4131, 4134, 2]

// Module 8491 (placeholderRowWidth)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function placeholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 40;
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles((height) => {
  let obj = {};
  obj = { paddingHorizontal: importDefault(689).space.PX_16, flexDirection: "row", alignItems: "center", height };
  obj.row = obj;
  obj = { marginHorizontal: importDefault(689).space.PX_16, flex: 1 };
  obj.rowInner = obj;
  obj.rowHeaderWrapper = { alignItems: "center", flexDirection: "row" };
  obj.placeholderAvatar = { width: importDefault(689).space.PX_32, height: importDefault(689).space.PX_32, borderRadius: importDefault(689).radii.lg, overflow: "hidden", backgroundColor: importDefault(689).colors.BORDER_SUBTLE };
  const obj1 = { width: importDefault(689).space.PX_32, height: importDefault(689).space.PX_32, borderRadius: importDefault(689).radii.lg, overflow: "hidden", backgroundColor: importDefault(689).colors.BORDER_SUBTLE };
  obj.placeholderText = { height: 20, borderRadius: importDefault(689).radii.sm, backgroundColor: importDefault(689).colors.BORDER_SUBTLE };
  return obj;
});
let closure_9 = { code: "function UserPlaceholderRowTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const memoResult = importAllResult.memo(function UserPlaceholderRow(animate) {
  let height;
  let row;
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  ({ height, row } = animate);
  if (height === undefined) {
    height = flag(689).space.PX_48;
  }
  let sharedValue;
  flag = undefined;
  const tmp3 = callback3(height);
  let obj = sharedValue(3991);
  sharedValue = obj.useSharedValue(1);
  let obj1 = sharedValue(566);
  const items = [_isNativeReflectConstruct];
  if (flag) {
    flag = !obj1.useStateFromStores(items, () => outer1_5.useReducedMotion);
  }
  const items1 = [flag, sharedValue];
  const effect = importAllResult.useEffect(() => {
    if (flag) {
      let obj = sharedValue(outer1_2[6]);
      const obj2 = sharedValue(outer1_2[6]);
      obj = { duration: 2 * sharedValue(outer1_2[9]).timingSlowDuration };
      const obj3 = sharedValue(outer1_2[8]);
      const withTimingResult = sharedValue(outer1_2[8]).withTiming(0.3, obj);
      obj = { duration: 2 * sharedValue(outer1_2[9]).timingSlowDuration };
      const result = set(obj.withRepeat(obj2.withSequence(withTimingResult, sharedValue(outer1_2[8]).withTiming(1, obj)), -1, true));
      const obj5 = sharedValue(outer1_2[8]);
    } else {
      const result1 = set(1);
    }
  }, items1);
  let obj2 = sharedValue(3991);
  const fn = function v() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10137317865125;
  fn.__initData = closure_9;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj = { style: items2, collapsable: false };
  items2 = [tmp3.row, animatedStyle];
  obj = { style: tmp3.placeholderAvatar };
  const items3 = [callback(View, obj), ];
  obj1 = { style: tmp3.rowInner };
  obj2 = { style: tmp3.rowHeaderWrapper };
  let obj3 = {};
  const items4 = [tmp3.placeholderText, { width: "" + placeholderRowWidth(row) + "%" }];
  obj3.style = items4;
  obj2.children = callback(View, obj3);
  obj1.children = callback(View, obj2);
  items3[1] = callback(View, obj1);
  obj.children = items3;
  return callback2(flag(3991).View, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx");

export default memoResult;
