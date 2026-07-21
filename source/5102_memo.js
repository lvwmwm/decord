// Module ID: 5102
// Function ID: 43462
// Name: memo
// Dependencies: []

// Module 5102 (memo)
let memo;
const _module = require(dependencyMap[0]);
({ useCallback: closure_3, useMemo: closure_4, useRef: closure_5, memo } = _module);
importDefault(dependencyMap[0]);
const jsx = require(dependencyMap[1]).jsx;
let closure_7 = { code: "function pnpm_BottomSheetFooterTsx1(){const{animatedFooterPosition,animatedKeyboardState,KEYBOARD_STATE,bottomInset}=this.__closure;let footerTranslateY=animatedFooterPosition.get();if(animatedKeyboardState.get()!==KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-bottomInset;}return{transform:[{translateY:Math.max(0,footerTranslateY)}]};}" };
const memoResult = memo(function BottomSheetFooterComponent(animatedFooterPosition) {
  animatedFooterPosition = animatedFooterPosition.animatedFooterPosition;
  const require = animatedFooterPosition;
  const bottomInset = animatedFooterPosition.bottomInset;
  let num = 0;
  if (undefined !== bottomInset) {
    num = bottomInset;
  }
  const importDefault = num;
  const style = animatedFooterPosition.style;
  const dependencyMap = style;
  const children = animatedFooterPosition.children;
  let tmp = null;
  const tmp2 = animatedStyle(null);
  let obj = require(dependencyMap[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  /* worklet (recovered source) */ function pnpm_BottomSheetFooterTsx1(){const{animatedFooterPosition,animatedKeyboardState,KEYBOARD_STATE,bottomInset}=this.__closure;let footerTranslateY=animatedFooterPosition.get();if(animatedKeyboardState.get()!==KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-bottomInset;}return{transform:[{translateY:Math.max(0,footerTranslateY)}]};}
  obj = { animatedFooterPosition, animatedKeyboardState, KEYBOARD_STATE: require(dependencyMap[4]).KEYBOARD_STATE, bottomInset: num };
  pnpm_BottomSheetFooterTsx1.__closure = obj;
  pnpm_BottomSheetFooterTsx1.__workletHash = 5322275157644;
  pnpm_BottomSheetFooterTsx1.__initData = closure_7;
  const items = [num, animatedKeyboardState, animatedFooterPosition];
  const animatedStyle = require(dependencyMap[3]).useAnimatedStyle(pnpm_BottomSheetFooterTsx1, items);
  const items1 = [style, animatedStyle];
  const items2 = [animatedFooterHeight];
  const obj2 = require(dependencyMap[3]);
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
  const boundingClientRect = require(dependencyMap[2]).useBoundingClientRect(tmp2, tmp7);
  if (null !== children) {
    obj = { ref: tmp2, onLayout: tmp6, style: tmp5, children };
    tmp = jsx(importDefault(dependencyMap[3]).View, obj);
  }
  return tmp;
});
memoResult.displayName = "BottomSheetFooter";

export const BottomSheetFooter = memoResult;
