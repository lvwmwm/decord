// Module ID: 1815
// Function ID: 19971
// Name: useEndVisible
// Dependencies: []
// Exports: useEndVisible

// Module 1815 (useEndVisible)
const useMemo = require(dependencyMap[0]).useMemo;
let closure_3 = { code: "function pnpm_useEndVisibleTs1(){const{layout,size,isScrollAtEnd,scroll,inverted}=this.__closure;if(layout.value.height===0||size.value.height===0){return null;}return isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);}" };
let closure_4 = { code: "function pnpm_useEndVisibleTs2(){const{isAtEnd}=this.__closure;return isAtEnd.value;}" };
let closure_5 = { code: "function pnpm_useEndVisibleTs3(current,previous){const{onEndVisible,isWorklet,runOnJS}=this.__closure;if(current===null||current===previous||!onEndVisible){return;}if(isWorklet){onEndVisible(current);}else{runOnJS(onEndVisible)(current);}}" };

export const useEndVisible = function useEndVisible(scroll) {
  scroll = scroll.scroll;
  const require = scroll;
  const layout = scroll.layout;
  const dependencyMap = layout;
  const size = scroll.size;
  const useMemo = size;
  const inverted = scroll.inverted;
  let closure_3 = inverted;
  const onEndVisible = scroll.onEndVisible;
  let closure_4 = onEndVisible;
  const items = [onEndVisible];
  const tmp = useMemo(() => "function" === typeof onEndVisible && onEndVisible.__workletHash, items);
  let closure_5 = tmp;
  let obj = require(dependencyMap[1]);
  /* worklet (recovered source) */ function pnpm_useEndVisibleTs1(){const{layout,size,isScrollAtEnd,scroll,inverted}=this.__closure;if(layout.value.height===0||size.value.height===0){return null;}return isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);}
  obj = { layout, size, isScrollAtEnd: require(dependencyMap[2]).isScrollAtEnd, scroll, inverted };
  pnpm_useEndVisibleTs1.__closure = obj;
  pnpm_useEndVisibleTs1.__workletHash = 9190864194226;
  pnpm_useEndVisibleTs1.__initData = closure_3;
  const derivedValue = obj.useDerivedValue(pnpm_useEndVisibleTs1);
  /* worklet (recovered source) */ function pnpm_useEndVisibleTs2(){const{isAtEnd}=this.__closure;return isAtEnd.value;}
  pnpm_useEndVisibleTs2.__closure = { isAtEnd: derivedValue };
  pnpm_useEndVisibleTs2.__workletHash = 3323533137377;
  pnpm_useEndVisibleTs2.__initData = closure_4;
  /* worklet (recovered source) */ function pnpm_useEndVisibleTs3(current,previous){const{onEndVisible,isWorklet,runOnJS}=this.__closure;if(current===null||current===previous||!onEndVisible){return;}if(isWorklet){onEndVisible(current);}else{runOnJS(onEndVisible)(current);}}
  obj = { onEndVisible, isWorklet: tmp, runOnJS: require(dependencyMap[1]).runOnJS };
  pnpm_useEndVisibleTs3.__closure = obj;
  pnpm_useEndVisibleTs3.__workletHash = 2507987378306;
  pnpm_useEndVisibleTs3.__initData = closure_5;
  const items1 = [onEndVisible, tmp, inverted];
  const animatedReaction = require(dependencyMap[1]).useAnimatedReaction(pnpm_useEndVisibleTs2, pnpm_useEndVisibleTs3, items1);
};
