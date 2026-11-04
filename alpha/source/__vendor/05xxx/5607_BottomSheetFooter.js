// Module ID: 5607
// Function ID: 5608
// Name: BottomSheetFooter
// Dependencies: [19, 21, 5405, 1652, 5401, 5608]

// Module 5607 (BottomSheetFooter)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 5608 */;
import react_mod from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
let memo;
let react = react_mod;
({ useCallback: c3, useMemo: closure_4, useRef: hasOwnProperty, memo } = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_7 = { code: "(function pnpm_BottomSheetFooterTsx1(){let[animatedFooterPosition,animatedKeyboardState,KEYBOARD_STATE,bottomInset]=this.__closure;let footerTranslateY=animatedFooterPosition.get();if(animatedKeyboardState.get()!==KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-bottomInset;}return{transform:[{translateY:Math.max(0,footerTranslateY)}]};})" };
const memoResult = memo(function BottomSheetFooterComponent(style) {
  let animatedFooterPosition;
  let bottomInset;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ animatedFooterPosition, bottomInset } = style);
  if (bottomInset === undefined) {
    bottomInset = 0;
  }
  style = style.style;
  const children = style.children;
  let animatedStyle;
  const tmp = closure_5(null);
  let obj = style(animatedStyle[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  let items = [closure_7, animatedFooterPosition, animatedKeyboardState, , ];
  const useAnimatedStyle = style(animatedStyle[3]).useAnimatedStyle;
  style(animatedStyle[3]);
  items[3] = style(animatedStyle[4]).KEYBOARD_STATE;
  items[4] = bottomInset;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  function pnpm_BottomSheetFooterTsx1() {
    let items;
    const value = _undefined.get();
    let diff = value;
    if (_undefined2.get() !== _undefined3.SHOWN) {
      diff = value - c3;
    }
    const obj = { transform: items };
    items = [{ translateY: Math.max(0, diff) }];
    ({ translateY: Math.max(0, diff) });
    return obj;
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10];
  pnpm_BottomSheetFooterTsx1.__closure = items1;
  pnpm_BottomSheetFooterTsx1.__workletHash = 7213837238869;
  pnpm_BottomSheetFooterTsx1.__initData = tmp6;
  const items2 = [bottomInset, animatedKeyboardState, animatedFooterPosition];
  animatedStyle = useAnimatedStyle(pnpm_BottomSheetFooterTsx1, items2);
  const items3 = [style, animatedStyle];
  const items4 = [animatedFooterHeight];
  const items5 = [animatedFooterHeight];
  const tmp12 = closure_4(() => {
    const items = [react_native.styles.container, style, animatedStyle];
    return items;
  }, items3);
  const tmp13 = closure_3((nativeEvent) => {
    const result = animatedFooterHeight.set(nativeEvent.nativeEvent.layout.height);
  }, items4);
  const tmp14 = closure_3((height) => {
    const result = animatedFooterHeight.set(height.height);
  }, items5);
  const tmp2Result = style(animatedStyle[2]);
  const boundingClientRect = tmp2Result.useBoundingClientRect(tmp, tmp14);
  let tmp16 = null;
  if (null !== children) {
    tmp16 = jsx(animatedFooterHeight(tmp3[3]).View, { ref: tmp, onLayout: tmp13, style: tmp12, children });
  }
  return tmp16;
});
memoResult.displayName = "BottomSheetFooter";

export const BottomSheetFooter = memoResult;
