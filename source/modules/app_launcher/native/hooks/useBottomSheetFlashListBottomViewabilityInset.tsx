// Module ID: 11217
// Function ID: 87312
// Name: useBottomSheetFlashListBottomViewabilityInset
// Dependencies: [31, 1450, 10884, 11156, 22, 3991, 2]
// Exports: useBottomSheetFlashListBottomViewabilityInset

// Module 11217 (useBottomSheetFlashListBottomViewabilityInset)
import result from "result";

const require = arg1;
let closure_4 = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx1(){const{bottomSheetPosition}=this.__closure;var _bottomSheetPosition$,_bottomSheetPosition;return(_bottomSheetPosition$=(_bottomSheetPosition=bottomSheetPosition)===null||_bottomSheetPosition===void 0?void 0:_bottomSheetPosition.get())!==null&&_bottomSheetPosition$!==void 0?_bottomSheetPosition$:0;}" };
let closure_5 = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){const{distanceBetweenExpandedScreenTopAndSheetTop,runOnJS,handleBottomViewabilityInsetDebounced}=this.__closure;const bottomViewabilityInset=sheetPosition-distanceBetweenExpandedScreenTopAndSheetTop;runOnJS(handleBottomViewabilityInsetDebounced)(bottomViewabilityInset);}" };
const result = require("useAppLauncherChatInputRefDummy").fileFinishedImporting("modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx");

export const useBottomSheetFlashListBottomViewabilityInset = function useBottomSheetFlashListBottomViewabilityInset() {
  const context = bottomVisibilityInsetRef.useContext(bottomSheetPosition(10884).AppLauncherContext);
  bottomSheetPosition = undefined;
  if (null != context) {
    bottomSheetPosition = context.bottomSheetPosition;
  }
  const flashListRef = bottomVisibilityInsetRef.useRef(null);
  const diff = flashListRef(1450)().height - flashListRef(11156)().maximum;
  const dependencyMap = diff;
  bottomVisibilityInsetRef = bottomVisibilityInsetRef.useRef(9999);
  const memo = bottomVisibilityInsetRef.useMemo(() => flashListRef(diff[4]).debounce((current) => {
    outer1_3.current = current;
    current = outer1_1.current;
    if (null != current) {
      current.updateViewableItems();
    }
  }, 200), []);
  let obj = bottomSheetPosition(3991);
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
  fn.__initData = memo;
  const fn2 = function s(arg0) {
    bottomSheetPosition(diff[5]).runOnJS(memo)(arg0 - closure_2);
  };
  obj = { distanceBetweenExpandedScreenTopAndSheetTop: diff, runOnJS: bottomSheetPosition(3991).runOnJS, handleBottomViewabilityInsetDebounced: memo };
  fn2.__closure = obj;
  fn2.__workletHash = 6025307858098;
  fn2.__initData = closure_5;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  return { flashListRef, bottomVisibilityInsetRef };
};
