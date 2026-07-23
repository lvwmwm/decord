// Module ID: 1815
// Function ID: 19972
// Name: useEndVisible
// Dependencies: [31, 1582, 1812]
// Exports: useEndVisible

// Module 1815 (useEndVisible)
import { useMemo } from "result";

let closure_3 = { code: "function pnpm_useEndVisibleTs1(){const{layout,size,isScrollAtEnd,scroll,inverted}=this.__closure;if(layout.value.height===0||size.value.height===0){return null;}return isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);}" };
let closure_4 = { code: "function pnpm_useEndVisibleTs2(){const{isAtEnd}=this.__closure;return isAtEnd.value;}" };
let closure_5 = { code: "function pnpm_useEndVisibleTs3(current,previous){const{onEndVisible,isWorklet,runOnJS}=this.__closure;if(current===null||current===previous||!onEndVisible){return;}if(isWorklet){onEndVisible(current);}else{runOnJS(onEndVisible)(current);}}" };

export const useEndVisible = function useEndVisible(scroll) {
  scroll = scroll.scroll;
  const layout = scroll.layout;
  const size = scroll.size;
  const inverted = scroll.inverted;
  const onEndVisible = scroll.onEndVisible;
  const items = [onEndVisible];
  let tmp = size(() => "function" === typeof onEndVisible && onEndVisible.__workletHash, items);
  let closure_5 = tmp;
  let obj = scroll(layout[1]);
  /* worklet (recovered source) */ function pnpm_useEndVisibleTs1(){const{layout,size,isScrollAtEnd,scroll,inverted}=this.__closure;if(layout.value.height===0||size.value.height===0){return null;}return isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);}
  obj = { layout, size, isScrollAtEnd: scroll(layout[2]).isScrollAtEnd, scroll, inverted };
  pnpm_useEndVisibleTs1.__closure = obj;
  pnpm_useEndVisibleTs1.__workletHash = 9190864194226;
  pnpm_useEndVisibleTs1.__initData = inverted;
  const derivedValue = obj.useDerivedValue(pnpm_useEndVisibleTs1);
  /* worklet (recovered source) */ function pnpm_useEndVisibleTs2(){const{isAtEnd}=this.__closure;return isAtEnd.value;}
  pnpm_useEndVisibleTs2.__closure = { isAtEnd: derivedValue };
  pnpm_useEndVisibleTs2.__workletHash = 3323533137377;
  pnpm_useEndVisibleTs2.__initData = onEndVisible;
  /* worklet (recovered source) */ function pnpm_useEndVisibleTs3(current,previous){const{onEndVisible,isWorklet,runOnJS}=this.__closure;if(current===null||current===previous||!onEndVisible){return;}if(isWorklet){onEndVisible(current);}else{runOnJS(onEndVisible)(current);}}
  obj = { onEndVisible, isWorklet: tmp, runOnJS: scroll(layout[1]).runOnJS };
  pnpm_useEndVisibleTs3.__closure = obj;
  pnpm_useEndVisibleTs3.__workletHash = 2507987378306;
  pnpm_useEndVisibleTs3.__initData = closure_5;
  const items1 = [onEndVisible, tmp, inverted];
  const animatedReaction = scroll(layout[1]).useAnimatedReaction(pnpm_useEndVisibleTs2, pnpm_useEndVisibleTs3, items1);
};
