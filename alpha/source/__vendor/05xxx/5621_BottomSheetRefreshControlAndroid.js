// Module ID: 5621
// Function ID: 5622
// Name: BottomSheetRefreshControlAndroid
// Dependencies: [19, 17, 21, 1652, 5404, 5397, 5393, 5420]

// Module 5621 (BottomSheetRefreshControlAndroid)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5420 */;
import react_mod from "react" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;

let dependencyMap;

let c2;
let c3;
let memo;
let react = react_mod;
({ useContext: c2, useMemo: c3, memo } = react);
react = react_mod;
const RefreshControl = react_native.RefreshControl;
const jsx = Fragment.jsx;
let closure_5 = module_1652.createAnimatedComponent(RefreshControl);
let closure_6 = { code: "(function pnpm_BottomSheetRefreshControlAndroidTsx1(){let[animatedScrollableState,SCROLLABLE_STATE]=this.__closure;return{enabled:animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED};})" };
const memoResult = memo(function BottomSheetRefreshControlComponent(arg0) {
  let closure_1;
  let obj3;
  let onRefresh;
  let scrollableGesture;
  let tmp12Result;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ onRefresh, scrollableGesture } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onRefresh: 0, scrollableGesture: 0 }));
  const tmp4 = closure_2(scrollableGesture(5404).BottomSheetDraggableContext);
  dependencyMap = tmp4;
  const obj = scrollableGesture(5397);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  if (!tmp4) {
    if (bottomSheetInternal.enableContentPanningGesture) {
      throw "'BottomSheetRefreshControl' cannot be used out of the BottomSheet!";
    }
  }
  let items = [closure_6, bottomSheetInternal.animatedScrollableState, ];
  const useAnimatedProps = scrollableGesture(1652).useAnimatedProps;
  scrollableGesture(1652);
  items[2] = scrollableGesture(5393).SCROLLABLE_STATE;
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items;
  function pnpm_BottomSheetRefreshControlAndroidTsx1() {
    return { enabled: _undefined.value === _undefined2.UNLOCKED };
  }
  const items1 = [tmp8, tmp9];
  pnpm_BottomSheetRefreshControlAndroidTsx1.__closure = items1;
  pnpm_BottomSheetRefreshControlAndroidTsx1.__workletHash = 14408881775319;
  pnpm_BottomSheetRefreshControlAndroidTsx1.__initData = tmp7;
  const items2 = [bottomSheetInternal.animatedScrollableState.value];
  const animatedProps = useAnimatedProps(pnpm_BottomSheetRefreshControlAndroidTsx1, items2);
  const items3 = [tmp4, scrollableGesture];
  const tmp11 = closure_3(() => {
    let result;
    if (closure_1) {
      const Gesture = LegacyBaseButton.Gesture;
      const NativeResult = Gesture.Native();
      const simultaneousWithExternalGesture = NativeResult.simultaneousWithExternalGesture;
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, closure_1.toGestureArray(), 0);
      HermesBuiltin.arraySpread(items, scrollableGesture.toGestureArray(), arraySpreadResult);
      const applyResult = HermesBuiltin.apply(simultaneousWithExternalGesture, items, NativeResult);
      result = applyResult.shouldCancelWhenOutside(true);
    }
    return result;
  }, items3);
  if (tmp11) {
    const obj2 = { gesture: tmp11, children: jsx(closure_5, obj3) };
    obj3 = { onRefresh, animatedProps };
    const GestureDetector = tmp2(5420).GestureDetector;
    const merged1 = Object.assign(merged);
    tmp12Result = tmp12(GestureDetector, obj2);
  } else {
    const obj4 = { onRefresh, animatedProps };
    const merged2 = Object.assign(merged);
    tmp12Result = tmp12(closure_5, obj4);
  }
  return tmp12Result;
});
memoResult.displayName = "BottomSheetRefreshControl";

export default memoResult;
