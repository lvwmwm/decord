// Module ID: 2013
// Function ID: 2014
// Dependencies: [19, 17, 2014, 1655, 2012]
// Exports: useExtraContentPadding

// Module 2013
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import _mod1655 from "module_1655" /* 1655 */;
import IS_FABRIC from "IS_FABRIC" /* 2014 */;

let tmp2;
const helpers = tmp2(2012);
const useCallback = react.useCallback;
const Platform = react_native.Platform;
let closure_4 = { code: "(function pnpm_indexTs1(target){let[contentOffsetY,IS_FABRIC,Platform,scrollTo,scrollViewRef]=this.__closure;if(contentOffsetY&&IS_FABRIC){contentOffsetY.value=target;}else if(Platform.OS===\"android\"){requestAnimationFrame(function(){scrollTo(scrollViewRef,0,target,false);});}else{scrollTo(scrollViewRef,0,target,false);}})" };
let closure_5 = { code: "(function pnpm_indexTs2(){let[extraContentPadding]=this.__closure;return extraContentPadding.value;})" };
let closure_6 = { code: "(function pnpm_indexTs3(current,previous){let[freeze,blankSpace,keyboardPadding,isScrollAtEnd,scroll,layout,size,inverted,keyboardLiftBehavior,shouldShiftContent,scrollToTarget]=this.__closure;if(freeze.value||previous===null){return;}const rawDelta=current-previous;if(rawDelta===0){return;}const previousTotal=Math.max(blankSpace.value,keyboardPadding.value+previous);const currentTotal=Math.max(blankSpace.value,keyboardPadding.value+current);const effectiveDelta=currentTotal-previousTotal;if(effectiveDelta===0){return;}const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior===\"persistent\"&&effectiveDelta<0&&!atEnd){return;}if(!shouldShiftContent(keyboardLiftBehavior,atEnd)){return;}if(inverted){const target=Math.max(scroll.value-effectiveDelta,-currentTotal);scrollToTarget(target);}else{const maxScroll=Math.max(size.value.height-layout.value.height+currentTotal,0);const target=Math.min(scroll.value+effectiveDelta,maxScroll);scrollToTarget(target);}})" };

export function useExtraContentPadding(arg0) {
  let blankSpace;
  let contentOffsetY;
  let extraContentPadding;
  let freeze;
  let inverted;
  let keyboardLiftBehavior;
  let keyboardPadding;
  let layout;
  let scroll;
  let scrollViewRef;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ scrollViewRef, contentOffsetY, inverted, keyboardLiftBehavior } = arg0);
  const items = [closure_4, contentOffsetY, , , , ];
  let tmp2 = require;
  ({ extraContentPadding, keyboardPadding, blankSpace, scroll, layout, size, freeze } = arg0);
  const tmp = useCallback;
  items[2] = IS_FABRIC.IS_FABRIC;
  items[3] = Platform;
  items[4] = _mod1655.scrollTo;
  items[5] = scrollViewRef;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function pnpm_indexTs1(value) {
    let closure_0 = value;
    if (closure_0) {
      const tmp2 = c1;
      if (tmp2) {
        tmp.value = value;
      }
    }
    if ("android" === _undefined.OS) {
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        c3(c4, 0, closure_0, false);
      });
    } else {
      _undefined2(c4, 0, value, false);
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
  pnpm_indexTs1.__closure = items1;
  pnpm_indexTs1.__workletHash = 15593711662621;
  pnpm_indexTs1.__initData = tmp4;
  const items2 = [scrollViewRef, contentOffsetY];
  const items3 = [closure_5, extraContentPadding];
  [tmp12, tmp13] = items3;
  function pnpm_indexTs2() {
    return _undefined.value;
  }
  const items4 = [tmp13];
  pnpm_indexTs2.__closure = items4;
  pnpm_indexTs2.__workletHash = 14359322149220;
  pnpm_indexTs2.__initData = tmp12;
  const items5 = [closure_6, freeze, blankSpace, keyboardPadding, , , , , , , , ];
  const tmpResult = tmp(pnpm_indexTs1, items2);
  const useAnimatedReaction = _mod1655.useAnimatedReaction;
  _mod1655;
  items5[4] = helpers.isScrollAtEnd;
  items5[5] = scroll;
  items5[6] = layout;
  items5[7] = size;
  items5[8] = inverted;
  items5[9] = keyboardLiftBehavior;
  items5[10] = helpers.shouldShiftContent;
  items5[11] = tmpResult;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items5;
  function pnpm_indexTs3(arg0, arg1) {
    if (!_undefined.value) {
      if (null !== arg1) {
        if (0 !== arg0 - arg1) {
          const _Math3 = Math;
          const _Math4 = Math;
          const bound = Math.max(_undefined2.value, _undefined3.value + arg1);
          const bound1 = Math.max(_undefined2.value, _undefined3.value + arg0);
          const diff = bound1 - bound;
          if (0 !== diff) {
            const iter2 = _undefined6;
            const iter3 = _undefined7;
            const tmp16 = c7;
            const tmp18 = _undefined4(_undefined5.value, _undefined6.value.height, _undefined7.value.height, c7);
            const tmp19 = c8;
            if (_undefined8(tmp19, tmp18)) {
              const _Math = Math;
              if (tmp16) {
                _undefined9(max(_undefined5.value - diff, -bound1));
              } else {
                const _Math2 = Math;
                _undefined9(Math.min(_undefined5.value + diff, max(iter3.value.height - iter2.value.height + bound1, 0)));
              }
            }
          }
        }
      }
    }
  }
  const items6 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  pnpm_indexTs3.__closure = items6;
  pnpm_indexTs3.__workletHash = 873679862986;
  pnpm_indexTs3.__initData = tmp14;
  const items7 = [inverted, keyboardLiftBehavior];
  const animatedReaction = useAnimatedReaction(pnpm_indexTs2, pnpm_indexTs3, items7);
}
