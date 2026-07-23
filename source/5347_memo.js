// Module ID: 5347
// Function ID: 45944
// Name: memo
// Dependencies: [65, 29, 31, 27, 33, 1582, 5201, 5194, 5190, 5217]

// Module 5347 (memo)
import _toConsumableArray from "_toConsumableArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
let memo;
const require = arg1;
let closure_2 = ["onRefresh", "scrollableGesture"];
({ useContext: closure_5, useMemo: closure_6, memo } = result);
let closure_8 = require("cancelAnimation").createAnimatedComponent(require("get ActivityIndicator").RefreshControl);
let closure_9 = { code: "function pnpm_BottomSheetRefreshControlAndroidTsx1(){const{animatedScrollableState,SCROLLABLE_STATE}=this.__closure;return{enabled:animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED};}" };
const memoResult = memo(function BottomSheetRefreshControlComponent(arg0) {
  let onRefresh;
  let scrollableGesture;
  ({ onRefresh, scrollableGesture } = arg0);
  const tmp = callback(arg0, iter);
  const tmp2 = callback2(scrollableGesture(5201).BottomSheetDraggableContext);
  const dependencyMap = tmp2;
  let obj = scrollableGesture(5194);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  iter = bottomSheetInternal.animatedScrollableState;
  if (!tmp2) {
    if (bottomSheetInternal.enableContentPanningGesture) {
      throw "'BottomSheetRefreshControl' cannot be used out of the BottomSheet!";
    }
  }
  let obj1 = scrollableGesture(1582);
  /* worklet (recovered source) */ function pnpm_BottomSheetRefreshControlAndroidTsx1(){const{animatedScrollableState,SCROLLABLE_STATE}=this.__closure;return{enabled:animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED};}
  obj = { animatedScrollableState: iter, SCROLLABLE_STATE: scrollableGesture(5190).SCROLLABLE_STATE };
  pnpm_BottomSheetRefreshControlAndroidTsx1.__closure = obj;
  pnpm_BottomSheetRefreshControlAndroidTsx1.__workletHash = 8403038560398;
  pnpm_BottomSheetRefreshControlAndroidTsx1.__initData = closure_9;
  const items = [iter.value];
  const animatedProps = obj1.useAnimatedProps(pnpm_BottomSheetRefreshControlAndroidTsx1, items);
  const items1 = [tmp2, scrollableGesture];
  const tmp5 = callback3(() => {
    let result;
    if (tmp2) {
      const Gesture = scrollableGesture(tmp2[9]).Gesture;
      const NativeResult = Gesture.Native();
      const simultaneousWithExternalGesture = NativeResult.simultaneousWithExternalGesture;
      const obj = outer1_3(scrollableGesture.toGestureArray());
      result = simultaneousWithExternalGesture.apply(NativeResult, outer1_3(scrollableGesture.toGestureArray()).concat(outer1_3(scrollableGesture.toGestureArray()))).shouldCancelWhenOutside(true);
      const applyResult = simultaneousWithExternalGesture.apply(NativeResult, outer1_3(scrollableGesture.toGestureArray()).concat(outer1_3(scrollableGesture.toGestureArray())));
    }
    return result;
  }, items1);
  if (tmp5) {
    obj = { gesture: tmp5 };
    const _Object2 = Object;
    obj1 = { onRefresh, animatedProps };
    obj.children = tmp6(closure_8, Object.assign({}, tmp, obj1));
    let tmp6Result = tmp6(scrollableGesture(5217).GestureDetector, obj);
  } else {
    const _Object = Object;
    const obj2 = { onRefresh, animatedProps };
    tmp6Result = tmp6(closure_8, Object.assign({}, tmp, obj2));
  }
  return tmp6Result;
});
memoResult.displayName = "BottomSheetRefreshControl";

export default memoResult;
