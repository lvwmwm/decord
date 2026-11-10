// Module ID: 5603
// Function ID: 5604
// Name: BottomSheetFooterContainer
// Dependencies: [19, 5399, 1652, 5398, 5395]

// Module 5603 (BottomSheetFooterContainer)
import react from "react" /* 19 */;
import _mod1652 from "module_1652" /* 1652 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5395 */;
import DEFAULT_HANDLE_HEIGHT from "DEFAULT_HANDLE_HEIGHT" /* 5398 */;
import _mod5399 from "module_5399" /* 5399 */;

let renderFooter;

let closure_2 = { code: "(function pnpm_BottomSheetFooterContainerTsx1(){let[animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedKeyboardHeightInContainer,animatedContainerHeight,animatedPosition,animatedKeyboardState,animatedFooterHeight,KEYBOARD_STATE]=this.__closure;const handleHeight=animatedHandleHeight.get();if(handleHeight===INITIAL_HANDLE_HEIGHT){return 0;}const keyboardHeight=animatedKeyboardHeightInContainer.get();const containerHeight=animatedContainerHeight.get();const position=animatedPosition.get();const keyboardState=animatedKeyboardState.get();const footerHeight=animatedFooterHeight.get();let footerTranslateY=Math.max(0,containerHeight-position);if(keyboardState===KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-keyboardHeight;}footerTranslateY=footerTranslateY-footerHeight-handleHeight;return footerTranslateY;})" };
const memoResult = react.memo((renderFooter) => {
  let animatedContainerHeight;
  let animatedFooterHeight;
  let animatedHandleHeight;
  let animatedKeyboardHeightInContainer;
  let animatedKeyboardState;
  let animatedPosition;
  let tmp10;
  let tmp11;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  renderFooter = renderFooter.renderFooter;
  const obj = _mod5399;
  const bottomSheetInternal = obj.useBottomSheetInternal();
  ({ animatedContainerHeight, animatedHandleHeight, animatedFooterHeight, animatedPosition, animatedKeyboardState, animatedKeyboardHeightInContainer } = bottomSheetInternal);
  const items = [closure_2, animatedHandleHeight, , , , , , , ];
  const useDerivedValue = _mod1652.useDerivedValue;
  _mod1652;
  items[2] = DEFAULT_HANDLE_HEIGHT.INITIAL_HANDLE_HEIGHT;
  items[3] = animatedKeyboardHeightInContainer;
  items[4] = animatedContainerHeight;
  items[5] = animatedPosition;
  items[6] = animatedKeyboardState;
  items[7] = animatedFooterHeight;
  items[8] = GESTURE_SOURCE.KEYBOARD_STATE;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  function pnpm_BottomSheetFooterContainerTsx1() {
    const value = _undefined.get();
    if (value === c1) {
      return 0;
    } else {
      const value6 = _undefined2.get();
      const value7 = _undefined3.get();
      const value8 = _undefined4.get();
      const value9 = _undefined5.get();
      const _Math = Math;
      const value10 = _undefined6.get();
      const bound = Math.max(0, value7 - value8);
      let diff = bound;
      if (value9 === _undefined7.SHOWN) {
        diff = bound - value6;
      }
      return diff - value10 - value;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  pnpm_BottomSheetFooterContainerTsx1.__closure = items1;
  pnpm_BottomSheetFooterContainerTsx1.__workletHash = 12738622226289;
  pnpm_BottomSheetFooterContainerTsx1.__initData = tmp3;
  const items2 = [animatedKeyboardHeightInContainer, animatedContainerHeight, animatedPosition, animatedKeyboardState, animatedFooterHeight, animatedHandleHeight];
  const obj2 = { animatedFooterPosition: useDerivedValue(pnpm_BottomSheetFooterContainerTsx1, items2) };
  return renderFooter(obj2);
});
memoResult.displayName = "BottomSheetFooterContainer";

export const BottomSheetFooterContainer = memoResult;
