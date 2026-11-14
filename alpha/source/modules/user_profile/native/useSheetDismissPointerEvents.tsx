// Module ID: 15682
// Function ID: 15683
// Name: useSheetDismissPointerEvents
// Dependencies: [5570, 1655, 5598, 2]
// Exports: default

// Module 15682 (useSheetDismissPointerEvents)
import _mod1655 from "module_1655" /* 1655 */;
import BottomSheetModal from "BottomSheetModal" /* 5570 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import size from "module_2" /* 2 */;

let closure_2 = { code: "(function useSheetDismissPointerEventsTsx1(){let[contentGestureState,State,handleGestureState]=this.__closure;var _contentGestureState,_handleGestureState;const isDragging=((_contentGestureState=contentGestureState)===null||_contentGestureState===void 0?void 0:_contentGestureState.get())===State.ACTIVE||((_handleGestureState=handleGestureState)===null||_handleGestureState===void 0?void 0:_handleGestureState.get())===State.ACTIVE;return{pointerEvents:isDragging?'none':'box-none'};})" };
const result = size.fileFinishedImporting("modules/user_profile/native/useSheetDismissPointerEvents.tsx");

export default function useSheetDismissPointerEvents() {
  let tmp10;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = BottomSheetModal;
  const bottomSheetInternal = obj.useBottomSheetInternal(true);
  let prop;
  if (bottomSheetInternal != null) {
    prop = bottomSheetInternal.animatedContentGestureState;
  }
  let prop1;
  if (bottomSheetInternal != null) {
    prop1 = bottomSheetInternal.animatedHandleGestureState;
  }
  const items = [closure_2, prop, , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items[2] = LegacyBaseButton.State;
  items[3] = prop1;
  let c0;
  let c1;
  let c2;
  [tmp7, tmp8, tmp9, tmp10] = items;
  function useSheetDismissPointerEventsTsx1() {
    let pointerEvents;
    let value;
    const obj = c0;
    if (c0 != null) {
      value = obj.get();
    }
    if (value === _undefined.ACTIVE) {
      pointerEvents = "none";
    } else {
      let value2;
      const obj2 = c2;
      if (c2 != null) {
        value2 = obj2.get();
      }
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  }
  const items1 = [tmp8, tmp9, tmp10];
  useSheetDismissPointerEventsTsx1.__closure = items1;
  useSheetDismissPointerEventsTsx1.__workletHash = 6909948922505;
  useSheetDismissPointerEventsTsx1.__initData = tmp7;
  return useAnimatedStyle(useSheetDismissPointerEventsTsx1);
};
