// Module ID: 1813
// Function ID: 19966
// Name: useExtraContentPadding
// Dependencies: [31, 27, 1814, 1582, 1812]
// Exports: useExtraContentPadding

// Module 1813 (useExtraContentPadding)
import { Platform } from "get ActivityIndicator";

require("result").useCallback;
let closure_4 = { code: "function pnpm_indexTs1(target){const{contentOffsetY,IS_FABRIC,Platform,scrollTo,scrollViewRef}=this.__closure;if(contentOffsetY&&IS_FABRIC){contentOffsetY.value=target;}else if(Platform.OS===\"android\"){requestAnimationFrame(function(){scrollTo(scrollViewRef,0,target,false);});}else{scrollTo(scrollViewRef,0,target,false);}}" };
let closure_5 = { code: "function pnpm_indexTs2(){const{extraContentPadding}=this.__closure;return extraContentPadding.value;}" };
let closure_6 = { code: "function pnpm_indexTs3(current,previous){const{freeze,blankSpace,keyboardPadding,isScrollAtEnd,scroll,layout,size,inverted,keyboardLiftBehavior,shouldShiftContent,scrollToTarget}=this.__closure;if(freeze.value||previous===null){return;}const rawDelta=current-previous;if(rawDelta===0){return;}const previousTotal=Math.max(blankSpace.value,keyboardPadding.value+previous);const currentTotal=Math.max(blankSpace.value,keyboardPadding.value+current);const effectiveDelta=currentTotal-previousTotal;if(effectiveDelta===0){return;}const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior===\"persistent\"&&effectiveDelta<0&&!atEnd){return;}if(!shouldShiftContent(keyboardLiftBehavior,atEnd)){return;}if(inverted){const target=Math.max(scroll.value-effectiveDelta,-currentTotal);scrollToTarget(target);}else{const maxScroll=Math.max(size.value.height-layout.value.height+currentTotal,0);const target=Math.min(scroll.value+effectiveDelta,maxScroll);scrollToTarget(target);}}" };

export const useExtraContentPadding = function useExtraContentPadding(scrollViewRef) {
  scrollViewRef = scrollViewRef.scrollViewRef;
  const extraContentPadding = scrollViewRef.extraContentPadding;
  const keyboardPadding = scrollViewRef.keyboardPadding;
  const blankSpace = scrollViewRef.blankSpace;
  const scroll = scrollViewRef.scroll;
  const layout = scrollViewRef.layout;
  const size = scrollViewRef.size;
  const contentOffsetY = scrollViewRef.contentOffsetY;
  const inverted = scrollViewRef.inverted;
  const keyboardLiftBehavior = scrollViewRef.keyboardLiftBehavior;
  const freeze = scrollViewRef.freeze;
  /* worklet (recovered source) */ function pnpm_indexTs1(target){const{contentOffsetY,IS_FABRIC,Platform,scrollTo,scrollViewRef}=this.__closure;if(contentOffsetY&&IS_FABRIC){contentOffsetY.value=target;}else if(Platform.OS==="android"){requestAnimationFrame(function(){scrollTo(scrollViewRef,0,target,false);});}else{scrollTo(scrollViewRef,0,target,false);}}
  let obj = { contentOffsetY, IS_FABRIC: scrollViewRef(extraContentPadding[2]).IS_FABRIC, Platform: blankSpace, scrollTo: scrollViewRef(extraContentPadding[3]).scrollTo, scrollViewRef };
  pnpm_indexTs1.__closure = obj;
  pnpm_indexTs1.__workletHash = 2925167321956;
  pnpm_indexTs1.__initData = scroll;
  const items = [scrollViewRef, contentOffsetY];
  const tmp = keyboardPadding(pnpm_indexTs1, items);
  let closure_11 = tmp;
  /* worklet (recovered source) */ function pnpm_indexTs2(){const{extraContentPadding}=this.__closure;return extraContentPadding.value;}
  pnpm_indexTs2.__closure = { extraContentPadding };
  pnpm_indexTs2.__workletHash = 6627638143453;
  pnpm_indexTs2.__initData = layout;
  /* worklet (recovered source) */ function pnpm_indexTs3(current,previous){const{freeze,blankSpace,keyboardPadding,isScrollAtEnd,scroll,layout,size,inverted,keyboardLiftBehavior,shouldShiftContent,scrollToTarget}=this.__closure;if(freeze.value||previous===null){return;}const rawDelta=current-previous;if(rawDelta===0){return;}const previousTotal=Math.max(blankSpace.value,keyboardPadding.value+previous);const currentTotal=Math.max(blankSpace.value,keyboardPadding.value+current);const effectiveDelta=currentTotal-previousTotal;if(effectiveDelta===0){return;}const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior==="persistent"&&effectiveDelta<0&&!atEnd){return;}if(!shouldShiftContent(keyboardLiftBehavior,atEnd)){return;}if(inverted){const target=Math.max(scroll.value-effectiveDelta,-currentTotal);scrollToTarget(target);}else{const maxScroll=Math.max(size.value.height-layout.value.height+currentTotal,0);const target=Math.min(scroll.value+effectiveDelta,maxScroll);scrollToTarget(target);}}
  obj = { freeze, blankSpace, keyboardPadding, isScrollAtEnd: scrollViewRef(extraContentPadding[4]).isScrollAtEnd, scroll, layout, size, inverted, keyboardLiftBehavior, shouldShiftContent: scrollViewRef(extraContentPadding[4]).shouldShiftContent, scrollToTarget: tmp };
  pnpm_indexTs3.__closure = obj;
  pnpm_indexTs3.__workletHash = 14660760767987;
  pnpm_indexTs3.__initData = size;
  const items1 = [inverted, keyboardLiftBehavior];
  const animatedReaction = scrollViewRef(extraContentPadding[3]).useAnimatedReaction(pnpm_indexTs2, pnpm_indexTs3, items1);
};
