// Module ID: 13330
// Function ID: 13331
// Name: useBottomSheetFlashListBottomViewabilityInset
// Dependencies: [19, 1493, 12488, 11954, 12, 1652, 1705, 2]
// Exports: useBottomSheetFlashListBottomViewabilityInset

// Module 13330 (useBottomSheetFlashListBottomViewabilityInset)
import _modDef12 from "module_12" /* 12 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_4 = { code: "(function useBottomSheetFlashListBottomViewabilityInsetTsx1(){let[bottomSheetPosition]=this.__closure;var _bottomSheetPosition$,_bottomSheetPosition;return(_bottomSheetPosition$=(_bottomSheetPosition=bottomSheetPosition)===null||_bottomSheetPosition===void 0?void 0:_bottomSheetPosition.get())!==null&&_bottomSheetPosition$!==void 0?_bottomSheetPosition$:0;})" };
let closure_5 = { code: "(function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){let[distanceBetweenExpandedScreenTopAndSheetTop,scheduleOnRN,handleBottomViewabilityInsetDebounced]=this.__closure;const bottomViewabilityInset=sheetPosition-distanceBetweenExpandedScreenTopAndSheetTop;scheduleOnRN(handleBottomViewabilityInsetDebounced,bottomViewabilityInset);})" };
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx");

export function useBottomSheetFlashListBottomViewabilityInset() {
  let bottomVisibilityInsetRef;
  let flashListRef;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let obj = react;
  const tmp3 = bottomVisibilityInsetRef(1493)();
  const context = react.useContext(flashListRef(12488).AppLauncherContext);
  let bottomSheetPosition;
  const tmp = bottomVisibilityInsetRef;
  if (context != null) {
    bottomSheetPosition = context.bottomSheetPosition;
  }
  const maximum = tmp(11954)().maximum;
  flashListRef = obj.useRef(null);
  const diff = tmp3.height - maximum;
  bottomVisibilityInsetRef = obj.useRef(9999);
  const memo = obj.useMemo(() => {
    let ref;
    const obj = _modDef12;
    return obj.debounce(function _handleBottomViewabilityInset(current) {
      bottomVisibilityInsetRef.current = current;
      current = ref.current;
      if (current != null) {
        current.updateViewableItems();
      }
    }, 200);
  }, []);
  const items = [closure_4, bottomSheetPosition];
  [tmp12, tmp13] = items;
  function useBottomSheetFlashListBottomViewabilityInsetTsx1() {
    let num;
    const obj = c0;
    if (c0 != null) {
      num = obj.get();
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  const items1 = [tmp13];
  useBottomSheetFlashListBottomViewabilityInsetTsx1.__closure = items1;
  useBottomSheetFlashListBottomViewabilityInsetTsx1.__workletHash = 15442314305075;
  useBottomSheetFlashListBottomViewabilityInsetTsx1.__initData = tmp12;
  const items2 = [closure_5, diff, , ];
  const useAnimatedReaction = flashListRef(1652).useAnimatedReaction;
  flashListRef(1652);
  items2[2] = flashListRef(1705).scheduleOnRN;
  items2[3] = memo;
  let c0;
  let c1;
  let c2;
  [tmp14, tmp15, tmp16, tmp17] = items2;
  function useBottomSheetFlashListBottomViewabilityInsetTsx2(arg0) {
    _undefined(c2, arg0 - c0);
  }
  const items3 = [tmp15, tmp16, tmp17];
  useBottomSheetFlashListBottomViewabilityInsetTsx2.__closure = items3;
  useBottomSheetFlashListBottomViewabilityInsetTsx2.__workletHash = 15359386741414;
  useBottomSheetFlashListBottomViewabilityInsetTsx2.__initData = tmp14;
  const animatedReaction = useAnimatedReaction(useBottomSheetFlashListBottomViewabilityInsetTsx1, useBottomSheetFlashListBottomViewabilityInsetTsx2);
  return { flashListRef, bottomVisibilityInsetRef };
}
