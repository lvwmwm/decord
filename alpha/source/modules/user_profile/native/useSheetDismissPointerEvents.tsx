// Module ID: 12964
// Function ID: 12965
// Name: useSheetDismissPointerEvents
// Dependencies: [558, 6298, 4810, 6326, 2]

// Module 12964 (useSheetDismissPointerEvents)
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const __initData = { code: "function useSheetDismissPointerEventsTsx1(){const{contentGestureState,State,handleGestureState}=this.__closure;var _contentGestureState,_handleGestureState;const isDragging=((_contentGestureState=contentGestureState)===null||_contentGestureState===void 0?void 0:_contentGestureState.get())===State.ACTIVE||((_handleGestureState=handleGestureState)===null||_handleGestureState===void 0?void 0:_handleGestureState.get())===State.ACTIVE;return{pointerEvents:isDragging?\"none\":\"box-none\"};}" };
const __initData2 = { code: "function useSheetDismissPointerEventsTsx2(){const{contentGestureState,State,handleGestureState}=this.__closure;var _contentGestureState,_handleGestureState;const isDragging=((_contentGestureState=contentGestureState)===null||_contentGestureState===void 0?void 0:_contentGestureState.get())===State.ACTIVE||((_handleGestureState=handleGestureState)===null||_handleGestureState===void 0?void 0:_handleGestureState.get())===State.ACTIVE;return{pointerEvents:isDragging?'none':'box-none'};}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSheetDismissPointerEvents() {
  let prop;
  let prop1;
  const tmp2 = prop1;
  let obj = prop(prop1[1]);
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
  const tmpResult = prop(tmp2[2]);
  let obj2 = { contentGestureState: prop, State: tmp(tmp2[3]).State, handleGestureState: prop1 };
  fn.__closure = obj2;
  fn.__workletHash = 2092561663728;
  fn.__initData = __initData;
  return tmpResult.useAnimatedStyle(fn);
}) : (function useSheetDismissPointerEvents() {
  let prop;
  let prop1;
  const tmp2 = prop1;
  let obj = prop(prop1[1]);
  const bottomSheetInternal = obj.useBottomSheetInternal(true);
  prop = undefined;
  if (bottomSheetInternal != null) {
    prop = bottomSheetInternal.animatedContentGestureState;
  }
  prop1 = undefined;
  if (bottomSheetInternal != null) {
    prop1 = bottomSheetInternal.animatedHandleGestureState;
  }
  const fn = function t() {
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
  const tmpResult = prop(tmp2[2]);
  let obj2 = { contentGestureState: prop, State: tmp(tmp2[3]).State, handleGestureState: prop1 };
  fn.__closure = obj2;
  fn.__workletHash = 9715865768435;
  fn.__initData = __initData2;
  return tmpResult.useAnimatedStyle(fn);
});
const result = size.fileFinishedImporting("modules/user_profile/native/useSheetDismissPointerEvents.tsx");

export default tmp2;
