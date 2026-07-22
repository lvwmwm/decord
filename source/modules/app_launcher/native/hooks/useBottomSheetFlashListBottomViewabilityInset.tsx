// Module ID: 11207
// Function ID: 87262
// Name: useBottomSheetFlashListBottomViewabilityInset
// Dependencies: []
// Exports: useBottomSheetFlashListBottomViewabilityInset

// Module 11207 (useBottomSheetFlashListBottomViewabilityInset)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx1(){const{bottomSheetPosition}=this.__closure;var _bottomSheetPosition$,_bottomSheetPosition;return(_bottomSheetPosition$=(_bottomSheetPosition=bottomSheetPosition)===null||_bottomSheetPosition===void 0?void 0:_bottomSheetPosition.get())!==null&&_bottomSheetPosition$!==void 0?_bottomSheetPosition$:0;}" };
let closure_5 = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){const{distanceBetweenExpandedScreenTopAndSheetTop,runOnJS,handleBottomViewabilityInsetDebounced}=this.__closure;const bottomViewabilityInset=sheetPosition-distanceBetweenExpandedScreenTopAndSheetTop;runOnJS(handleBottomViewabilityInsetDebounced)(bottomViewabilityInset);}" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx");

export const useBottomSheetFlashListBottomViewabilityInset = function useBottomSheetFlashListBottomViewabilityInset() {
  const context = React.useContext(arg1(dependencyMap[2]).AppLauncherContext);
  let bottomSheetPosition;
  if (null != context) {
    bottomSheetPosition = context.bottomSheetPosition;
  }
  const arg1 = bottomSheetPosition;
  const flashListRef = React.useRef(null);
  const importDefault = flashListRef;
  const diff = importDefault(dependencyMap[1])().height - importDefault(dependencyMap[3])().maximum;
  const dependencyMap = diff;
  const bottomVisibilityInsetRef = React.useRef(9999);
  const React = bottomVisibilityInsetRef;
  const memo = React.useMemo(() => flashListRef(diff[4]).debounce((current) => {
    closure_3.current = current;
    current = ref.current;
    if (null != current) {
      current.updateViewableItems();
    }
  }, 200), []);
  let closure_4 = memo;
  let obj = arg1(dependencyMap[5]);
  const fn = function u() {
    let value;
    if (null != bottomSheetPosition) {
      value = bottomSheetPosition.get();
    }
    let num = 0;
    if (null != value) {
      num = value;
    }
    return num;
  };
  obj = { bottomSheetPosition };
  fn.__closure = obj;
  fn.__workletHash = 3750973667946;
  fn.__initData = closure_4;
  const fn2 = function s(arg0) {
    bottomSheetPosition(diff[5]).runOnJS(memo)(arg0 - diff);
  };
  obj = { distanceBetweenExpandedScreenTopAndSheetTop: diff, runOnJS: arg1(dependencyMap[5]).runOnJS, handleBottomViewabilityInsetDebounced: memo };
  fn2.__closure = obj;
  fn2.__workletHash = 6025307858098;
  fn2.__initData = closure_5;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  return { flashListRef, bottomVisibilityInsetRef };
};
