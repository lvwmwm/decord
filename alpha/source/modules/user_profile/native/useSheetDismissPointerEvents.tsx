// Module ID: 14778
// Function ID: 14779
// Name: useSheetDismissPointerEvents
// Dependencies: [5270, 5090, 5298, 2]
// Exports: default

// Module 14778 (useSheetDismissPointerEvents)
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import size from "module_2" /* 2 */;

const __initData = { code: "function useSheetDismissPointerEventsTsx1(){const{contentGestureState,State,handleGestureState}=this.__closure;var _contentGestureState,_handleGestureState;const isDragging=((_contentGestureState=contentGestureState)===null||_contentGestureState===void 0?void 0:_contentGestureState.get())===State.ACTIVE||((_handleGestureState=handleGestureState)===null||_handleGestureState===void 0?void 0:_handleGestureState.get())===State.ACTIVE;return{pointerEvents:isDragging?'none':'box-none'};}" };
const result = size.fileFinishedImporting("modules/user_profile/native/useSheetDismissPointerEvents.tsx");

export default function useSheetDismissPointerEvents() {
  let prop;
  let prop1;
  const tmp2 = prop1;
  let obj = prop(prop1[0]);
  const bottomSheetInternal = obj.useBottomSheetInternal(true);
  prop = undefined;
  if (bottomSheetInternal != null) {
    prop = bottomSheetInternal.animatedContentGestureState;
  }
  prop1 = undefined;
  if (bottomSheetInternal != null) {
    prop1 = bottomSheetInternal.animatedHandleGestureState;
  }
  const fn = function n() {
    let pointerEvents;
    let value;
    const obj = prop;
    if (prop != null) {
      value = obj.get();
    }
    if (value === LegacyBaseButton.State.ACTIVE) {
      pointerEvents = "none";
    } else {
      let value2;
      const obj2 = prop1;
      if (prop1 != null) {
        value2 = obj2.get();
      }
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  const tmpResult = prop(tmp2[1]);
  let obj2 = { contentGestureState: prop, State: tmp(tmp2[2]).State, handleGestureState: prop1 };
  fn.__closure = obj2;
  fn.__workletHash = 16631714570992;
  fn.__initData = __initData;
  return tmpResult.useAnimatedStyle(fn);
};
