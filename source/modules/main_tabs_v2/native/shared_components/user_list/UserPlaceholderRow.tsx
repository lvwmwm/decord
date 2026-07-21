// Module ID: 8484
// Function ID: 67737
// Name: placeholderRowWidth
// Dependencies: []

// Module 8484 (placeholderRowWidth)
function placeholderRowWidth(arg0) {
  const result = 10000 * Math.sin(arg0);
  return 40 * (result - Math.floor(result)) + 40;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles((height) => {
  let obj = {};
  obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, height };
  obj.row = obj;
  obj = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_16, flex: 1 };
  obj.rowInner = obj;
  obj.rowHeaderWrapper = {};
  obj.placeholderAvatar = { width: importDefault(dependencyMap[5]).space.PX_32, height: importDefault(dependencyMap[5]).space.PX_32, borderRadius: importDefault(dependencyMap[5]).radii.lg, overflow: "hidden", backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
  const obj1 = { width: importDefault(dependencyMap[5]).space.PX_32, height: importDefault(dependencyMap[5]).space.PX_32, borderRadius: importDefault(dependencyMap[5]).radii.lg, overflow: "hidden", backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
  obj.placeholderText = { height: 20, borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
  return obj;
});
let closure_9 = { code: "function UserPlaceholderRowTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function UserPlaceholderRow(animate) {
  let height;
  let row;
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  ({ height, row } = animate);
  if (height === undefined) {
    height = importDefault(dependencyMap[5]).space.PX_48;
  }
  let arg1;
  let importDefault;
  const tmp3 = callback3(height);
  let obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(1);
  arg1 = sharedValue;
  let obj1 = arg1(dependencyMap[7]);
  const items = [closure_5];
  if (flag) {
    flag = !obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  }
  importDefault = flag;
  const items1 = [flag, sharedValue];
  const effect = importAllResult.useEffect(() => {
    if (flag) {
      let obj = sharedValue(closure_2[6]);
      const obj2 = sharedValue(closure_2[6]);
      obj = { duration: 2 * sharedValue(closure_2[9]).timingSlowDuration };
      const obj3 = sharedValue(closure_2[8]);
      const withTimingResult = sharedValue(closure_2[8]).withTiming(0.3, obj);
      obj = { duration: 2 * sharedValue(closure_2[9]).timingSlowDuration };
      const result = set(obj.withRepeat(obj2.withSequence(withTimingResult, sharedValue(closure_2[8]).withTiming(1, obj)), -1, true));
      const obj5 = sharedValue(closure_2[8]);
    } else {
      const result1 = set(1);
    }
  }, items1);
  let obj2 = arg1(dependencyMap[6]);
  const fn = function v() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10137317865125;
  fn.__initData = closure_9;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj = { style: items2, collapsable: false };
  const items2 = [tmp3.row, animatedStyle];
  obj = { style: tmp3.placeholderAvatar };
  const items3 = [callback(View, obj), ];
  obj1 = { style: tmp3.rowInner };
  obj2 = { style: tmp3.rowHeaderWrapper };
  const obj3 = {};
  const items4 = [tmp3.placeholderText, { width: "" + placeholderRowWidth(row) + "%" }];
  obj3.style = items4;
  obj2.children = callback(View, obj3);
  obj1.children = callback(View, obj2);
  items3[1] = callback(View, obj1);
  obj.children = items3;
  return callback2(importDefault(dependencyMap[6]).View, obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx");

export default memoResult;
