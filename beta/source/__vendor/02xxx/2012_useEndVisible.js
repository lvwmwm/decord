// Module ID: 2012
// Function ID: 2013
// Name: useEndVisible
// Dependencies: [19, 1652, 2009]
// Exports: useEndVisible

// Module 2012 (useEndVisible)
import react from "react" /* 19 */;
import _mod1652 from "module_1652" /* 1652 */;
import helpers from "helpers" /* 2009 */;

const useMemo = react.useMemo;
let closure_3 = { code: "(function pnpm_useEndVisibleTs1(){let[layout,size,isScrollAtEnd,scroll,inverted]=this.__closure;if(layout.value.height===0||size.value.height===0){return null;}return isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);})" };
let closure_4 = { code: "(function pnpm_useEndVisibleTs2(){let[isAtEnd]=this.__closure;return isAtEnd.value;})" };
let closure_5 = { code: "(function pnpm_useEndVisibleTs3(current,previous){let[onEndVisible,isWorklet,runOnJS]=this.__closure;if(current===null||current===previous||!onEndVisible){return;}if(isWorklet){onEndVisible(current);}else{runOnJS(onEndVisible)(current);}})" };

export const useEndVisible = (arg0) => {
  let inverted;
  let layout;
  let onEndVisible;
  let scroll;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ inverted, onEndVisible } = arg0);
  const items = [onEndVisible];
  ({ scroll, layout, size } = arg0);
  let tmp = useMemo(() => {
    let __workletHash = typeof onEndVisible === "function";
    if (typeof onEndVisible === "function") {
      __workletHash = onEndVisible.__workletHash;
    }
    return __workletHash;
  }, items);
  let tmp3 = dependencyMap;
  const items1 = [closure_3, layout, size, , , ];
  const useDerivedValue = _mod1652.useDerivedValue;
  items1[3] = helpers.isScrollAtEnd;
  items1[4] = scroll;
  items1[5] = inverted;
  let c3;
  let c4;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
  function pnpm_useEndVisibleTs1() {
    let tmp = null;
    if (0 !== _undefined.value.height) {
      tmp = null;
      if (0 !== _undefined2.value.height) {
        tmp = _undefined3(_undefined4.value, iter.value.height, iter2.value.height, c4);
      }
    }
    return tmp;
  }
  const items2 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  pnpm_useEndVisibleTs1.__closure = items2;
  pnpm_useEndVisibleTs1.__workletHash = 13066692471115;
  pnpm_useEndVisibleTs1.__initData = tmp5;
  const derivedValue = useDerivedValue(pnpm_useEndVisibleTs1);
  const items3 = [closure_4, derivedValue];
  [tmp13, tmp14] = items3;
  function pnpm_useEndVisibleTs2() {
    return _undefined.value;
  }
  const items4 = [tmp14];
  pnpm_useEndVisibleTs2.__closure = items4;
  pnpm_useEndVisibleTs2.__workletHash = 15821756952792;
  pnpm_useEndVisibleTs2.__initData = tmp13;
  const items5 = [closure_5, onEndVisible, tmp, ];
  const useAnimatedReaction = tmp2(1652).useAnimatedReaction;
  _mod1652;
  items5[3] = _mod1652.runOnJS;
  let c0;
  let c1;
  let c2;
  [tmp15, tmp16, tmp17, tmp18] = items5;
  function pnpm_useEndVisibleTs3(arg0, arg1) {
    const tmp = null !== arg0 && arg0 !== arg1 && _undefined;
    if (tmp) {
      const tmp3 = c1;
      if (tmp3) {
        _undefined(arg0);
      } else {
        _undefined2(_undefined)(arg0);
      }
    }
  }
  const items6 = [tmp16, tmp17, tmp18];
  pnpm_useEndVisibleTs3.__closure = items6;
  pnpm_useEndVisibleTs3.__workletHash = 9628833936027;
  pnpm_useEndVisibleTs3.__initData = tmp15;
  const items7 = [onEndVisible, tmp, inverted];
  const animatedReaction = useAnimatedReaction(pnpm_useEndVisibleTs2, pnpm_useEndVisibleTs3, items7);
};
