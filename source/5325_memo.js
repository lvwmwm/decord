// Module ID: 5325
// Function ID: 45863
// Name: memo
// Dependencies: [31, 33, 5194, 1582, 5190, 5326]

// Module 5325 (memo)
import result from "result";
import "result";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
let memo;
({ useCallback: closure_3, useMemo: closure_4, useRef: closure_5, memo } = result);
let closure_7 = { code: "function pnpm_BottomSheetFooterTsx1(){const{animatedFooterPosition,animatedKeyboardState,KEYBOARD_STATE,bottomInset}=this.__closure;let footerTranslateY=animatedFooterPosition.get();if(animatedKeyboardState.get()!==KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-bottomInset;}return{transform:[{translateY:Math.max(0,footerTranslateY)}]};}" };
const memoResult = memo(function BottomSheetFooterComponent(animatedFooterPosition) {
  animatedFooterPosition = animatedFooterPosition.animatedFooterPosition;
  const bottomInset = animatedFooterPosition.bottomInset;
  let num = 0;
  if (undefined !== bottomInset) {
    num = bottomInset;
  }
  const style = animatedFooterPosition.style;
  const children = animatedFooterPosition.children;
  let tmp = null;
  const tmp2 = animatedStyle(null);
  let obj = animatedFooterPosition(style[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  /* worklet (recovered source) */ function pnpm_BottomSheetFooterTsx1(){const{animatedFooterPosition,animatedKeyboardState,KEYBOARD_STATE,bottomInset}=this.__closure;let footerTranslateY=animatedFooterPosition.get();if(animatedKeyboardState.get()!==KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-bottomInset;}return{transform:[{translateY:Math.max(0,footerTranslateY)}]};}
  obj = { animatedFooterPosition, animatedKeyboardState, KEYBOARD_STATE: animatedFooterPosition(style[4]).KEYBOARD_STATE, bottomInset: num };
  pnpm_BottomSheetFooterTsx1.__closure = obj;
  pnpm_BottomSheetFooterTsx1.__workletHash = 5322275157644;
  pnpm_BottomSheetFooterTsx1.__initData = closure_7;
  let items = [num, animatedKeyboardState, animatedFooterPosition];
  animatedStyle = animatedFooterPosition(style[3]).useAnimatedStyle(pnpm_BottomSheetFooterTsx1, items);
  const items1 = [style, animatedStyle];
  const items2 = [animatedFooterHeight];
  const obj2 = animatedFooterPosition(style[3]);
  const items3 = [animatedFooterHeight];
  const tmp5 = animatedKeyboardState(() => {
    const items = [animatedFooterPosition(style[5]).styles.container, style, animatedStyle];
    return items;
  }, items1);
  const tmp6 = animatedFooterHeight((nativeEvent) => {
    const result = animatedFooterHeight.set(nativeEvent.nativeEvent.layout.height);
  }, items2);
  const tmp7 = animatedFooterHeight((height) => {
    const result = animatedFooterHeight.set(height.height);
  }, items3);
  const boundingClientRect = animatedFooterPosition(style[2]).useBoundingClientRect(tmp2, tmp7);
  if (null !== children) {
    obj = { ref: tmp2, onLayout: tmp6, style: tmp5, children };
    tmp = jsx(num(style[3]).View, { ref: tmp2, onLayout: tmp6, style: tmp5, children });
  }
  return tmp;
});
memoResult.displayName = "BottomSheetFooter";

export const BottomSheetFooter = memoResult;
