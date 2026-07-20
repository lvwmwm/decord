// Module ID: 5122
// Function ID: 43507
// Name: memo
// Dependencies: []

// Module 5122 (memo)
let memo;
let closure_2 = [null, null];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ useContext: closure_5, useMemo: closure_6, memo } = arg1(dependencyMap[2]));
importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[4]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[5]).createAnimatedComponent(arg1(dependencyMap[3]).RefreshControl);
let closure_9 = { code: "function pnpm_BottomSheetRefreshControlAndroidTsx1(){const{animatedScrollableState,SCROLLABLE_STATE}=this.__closure;return{enabled:animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED};}" };
const memoResult = memo(function BottomSheetRefreshControlComponent(arg0) {
  let onRefresh;
  let scrollableGesture;
  ({ onRefresh, scrollableGesture } = arg0);
  const arg1 = scrollableGesture;
  const tmp = callback(arg0, closure_2);
  const tmp2 = callback2(arg1(dependencyMap[6]).BottomSheetDraggableContext);
  const dependencyMap = tmp2;
  let obj = arg1(dependencyMap[7]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  closure_2 = iter;
  if (!tmp2) {
    if (bottomSheetInternal.enableContentPanningGesture) {
      throw "'BottomSheetRefreshControl' cannot be used out of the BottomSheet!";
    }
  }
  let obj1 = arg1(dependencyMap[5]);
  /* worklet (recovered source) */ function pnpm_BottomSheetRefreshControlAndroidTsx1(){const{animatedScrollableState,SCROLLABLE_STATE}=this.__closure;return{enabled:animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED};}
  obj = { animatedScrollableState: iter, SCROLLABLE_STATE: arg1(dependencyMap[8]).SCROLLABLE_STATE };
  pnpm_BottomSheetRefreshControlAndroidTsx1.__closure = obj;
  pnpm_BottomSheetRefreshControlAndroidTsx1.__workletHash = 8403038560398;
  pnpm_BottomSheetRefreshControlAndroidTsx1.__initData = closure_9;
  const items = [bottomSheetInternal.animatedScrollableState.value];
  const animatedProps = obj1.useAnimatedProps(pnpm_BottomSheetRefreshControlAndroidTsx1, items);
  const items1 = [tmp2, scrollableGesture];
  const tmp5 = callback3(() => {
    let result;
    if (tmp2) {
      const Gesture = scrollableGesture(tmp2[9]).Gesture;
      const NativeResult = Gesture.Native();
      const simultaneousWithExternalGesture = NativeResult.simultaneousWithExternalGesture;
      const obj = callback(scrollableGesture.toGestureArray());
      result = simultaneousWithExternalGesture.apply(NativeResult, callback(scrollableGesture.toGestureArray()).concat(callback(scrollableGesture.toGestureArray()))).shouldCancelWhenOutside(true);
      const applyResult = simultaneousWithExternalGesture.apply(NativeResult, callback(scrollableGesture.toGestureArray()).concat(callback(scrollableGesture.toGestureArray())));
    }
    return result;
  }, items1);
  if (tmp5) {
    obj = { gesture: tmp5 };
    const _Object2 = Object;
    obj1 = { onRefresh, animatedProps };
    obj.children = tmp6(closure_8, Object.assign({}, tmp, obj1));
    let tmp6Result = tmp6(arg1(dependencyMap[9]).GestureDetector, obj);
  } else {
    const _Object = Object;
    const obj2 = { onRefresh, animatedProps };
    tmp6Result = tmp6(closure_8, Object.assign({}, tmp, obj2));
  }
  return tmp6Result;
});
memoResult.displayName = "BottomSheetRefreshControl";

export default memoResult;
