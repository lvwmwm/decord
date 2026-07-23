// Module ID: 1811
// Function ID: 19950
// Name: useChatKeyboard
// Dependencies: [1582, 1793, 1776, 1812]

// Module 1811 (useChatKeyboard)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let closure_3 = { code: "function pnpm_indexTs1(effective,totalPaddingForMaxScroll){const{size,layout,scroll,scrollTo,scrollViewRef}=this.__closure;const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:effective;const maxScroll=Math.max(size.value.height-layout.value.height+paddingForMax,0);if(scroll.value>maxScroll){scrollTo(scrollViewRef,0,maxScroll,false);}}" };
let closure_4 = { code: "function pnpm_indexTs2(e){const{freeze,targetKeyboardHeight,closing,getEffectiveHeight,offset,isScrollAtEnd,scroll,layout,size,inverted,getVisibleMinimumPaddingFraction,blankSpace,getMinimumPaddingAbsorbed,extraContentPadding,getScrollEffective,minimumPaddingFractionOnOpen,padding,offsetBeforeScroll,keyboardLiftBehavior,actualOpenShift}=this.__closure;if(freeze.value){return;}if(e.height>0){targetKeyboardHeight.value=e.height;closing.value=false;}else{closing.value=true;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);const visibleFraction=getVisibleMinimumPaddingFraction(scroll.value,layout.value.height,size.value.height,blankSpace.value,inverted);const minimumPaddingAbsorbed=visibleFraction>=1?getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value):0;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);if(inverted&&e.duration===-1){return;}else if(e.height>0){minimumPaddingFractionOnOpen.value=visibleFraction>=1?1:0;padding.value=effective;offsetBeforeScroll.value=scroll.value;if(!inverted&&keyboardLiftBehavior===\"whenAtEnd\"&&!atEnd){offsetBeforeScroll.value=-1;}else if(!inverted&&scrollEffective===0){offsetBeforeScroll.value=-1;}else if(inverted&&scrollEffective===0){offsetBeforeScroll.value=scroll.value;}}else{if(inverted){offsetBeforeScroll.value=scroll.value;}else{if(offsetBeforeScroll.value!==-1){offsetBeforeScroll.value=scroll.value-actualOpenShift.value;}}}}" };
let closure_5 = { code: "function pnpm_indexTs3(e){const{freeze,currentHeight,inverted,getEffectiveHeight,targetKeyboardHeight,offset,getMinimumPaddingAbsorbed,blankSpace,extraContentPadding,minimumPaddingFractionOnOpen,getScrollEffective,isScrollAtEnd,offsetBeforeScroll,layout,size,keyboardLiftBehavior,padding,scrollTo,scrollViewRef,shouldShiftContent,closing,clampScrollIfNeeded,scroll,clampedScrollTarget,actualOpenShift}=this.__closure;if(freeze.value){return;}currentHeight.value=e.height;if(inverted){if(e.duration===-1){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const minimumPaddingAbsorbed=getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value)*minimumPaddingFractionOnOpen.value;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);const actualTotalPadding=Math.max(blankSpace.value,effective+extraContentPadding.value);const wasAtEnd=isScrollAtEnd(offsetBeforeScroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior===\"never\"&&wasAtEnd&&effective<padding.value){padding.value=effective;if(scrollEffective===0&&minimumPaddingAbsorbed>0){return;}scrollTo(scrollViewRef,0,0,false);return;}if(!shouldShiftContent(keyboardLiftBehavior,wasAtEnd)){if(closing.value&&effective<padding.value){padding.value=effective;clampScrollIfNeeded(effective,actualTotalPadding);}return;}if(scrollEffective===0&&minimumPaddingAbsorbed>0){return;}if(keyboardLiftBehavior===\"persistent\"){const currentShift=offsetBeforeScroll.value+padding.value-scroll.value;if(effective<currentShift){if(wasAtEnd){padding.value=effective;scrollTo(scrollViewRef,0,0,false);}else if(closing.value){padding.value=effective;clampScrollIfNeeded(effective,actualTotalPadding);}return;}}const target=offsetBeforeScroll.value+padding.value-scrollEffective;scrollTo(scrollViewRef,0,target,false);}else{const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const minimumPaddingAbsorbed=getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value)*minimumPaddingFractionOnOpen.value;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);const actualTotalPadding=Math.max(blankSpace.value,effective+extraContentPadding.value);if(keyboardLiftBehavior===\"never\"&&closing.value&&effective<padding.value){clampScrollIfNeeded(effective,actualTotalPadding);return;}if(!shouldShiftContent(keyboardLiftBehavior,true)){return;}if(offsetBeforeScroll.value===-1){if(closing.value){clampScrollIfNeeded(effective,actualTotalPadding);}return;}if(keyboardLiftBehavior===\"persistent\"&&closing.value){const keepAt=offsetBeforeScroll.value+padding.value;const maxScroll=Math.max(size.value.height-layout.value.height+actualTotalPadding,0);scrollTo(scrollViewRef,0,Math.min(keepAt,maxScroll),false);return;}const target=clampedScrollTarget(offsetBeforeScroll.value,scrollEffective,size.value.height,layout.value.height,actualTotalPadding);scrollTo(scrollViewRef,0,target,false);if(!closing.value){actualOpenShift.value=target-offsetBeforeScroll.value;}}}" };
let closure_6 = { code: "function pnpm_indexTs4(e){const{freeze,getEffectiveHeight,targetKeyboardHeight,offset,padding,offsetBeforeScroll,actualOpenShift,scroll}=this.__closure;if(freeze.value){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);padding.value=effective;if(effective>0&&offsetBeforeScroll.value!==-1){actualOpenShift.value=scroll.value-offsetBeforeScroll.value;}}" };
arg5.useChatKeyboard = function useChatKeyboard(animatedRef, inverted) {
  let onContentSizeChange;
  let onLayout;
  const _require = animatedRef;
  inverted = inverted.inverted;
  const keyboardLiftBehavior = inverted.keyboardLiftBehavior;
  const freeze = inverted.freeze;
  const offset = inverted.offset;
  const blankSpace = inverted.blankSpace;
  const extraContentPadding = inverted.extraContentPadding;
  let obj = _require(keyboardLiftBehavior[0]);
  const padding = obj.useSharedValue(0);
  let obj1 = _require(keyboardLiftBehavior[0]);
  const currentHeight = obj1.useSharedValue(0);
  let obj2 = _require(keyboardLiftBehavior[0]);
  const sharedValue2 = obj2.useSharedValue(0);
  let obj3 = _require(keyboardLiftBehavior[0]);
  const sharedValue3 = obj3.useSharedValue(0);
  const sharedValue4 = _require(keyboardLiftBehavior[0]).useSharedValue(false);
  let obj5 = _require(keyboardLiftBehavior[0]);
  const sharedValue5 = _require(keyboardLiftBehavior[0]).useSharedValue(0);
  let obj6 = _require(keyboardLiftBehavior[0]);
  const sharedValue6 = _require(keyboardLiftBehavior[0]).useSharedValue(0);
  let tmp8 = inverted(keyboardLiftBehavior[1])(animatedRef);
  const layout = tmp8.layout;
  const size = tmp8.size;
  const scroll = tmp8.offset;
  /* worklet (recovered source) */ function pnpm_indexTs1(target){const{contentOffsetY,IS_FABRIC,Platform,scrollTo,scrollViewRef}=this.__closure;if(contentOffsetY&&IS_FABRIC){contentOffsetY.value=target;}else if(Platform.OS==="android"){requestAnimationFrame(function(){scrollTo(scrollViewRef,0,target,false);});}else{scrollTo(scrollViewRef,0,target,false);}}
  obj = { size, layout, scroll, scrollTo: _require(keyboardLiftBehavior[0]).scrollTo, scrollViewRef: animatedRef };
  ({ onLayout, onContentSizeChange } = tmp8);
  pnpm_indexTs1.__closure = obj;
  pnpm_indexTs1.__workletHash = 2908292579657;
  pnpm_indexTs1.__initData = freeze;
  let obj7 = _require(keyboardLiftBehavior[0]);
  obj = {};
  /* worklet (recovered source) */ function pnpm_indexTs2(){const{extraContentPadding}=this.__closure;return extraContentPadding.value;}
  obj1 = { freeze, targetKeyboardHeight: sharedValue3, closing: sharedValue4, getEffectiveHeight: _require(keyboardLiftBehavior[3]).getEffectiveHeight, offset, isScrollAtEnd: _require(keyboardLiftBehavior[3]).isScrollAtEnd, scroll, layout, size, inverted, getVisibleMinimumPaddingFraction: _require(keyboardLiftBehavior[3]).getVisibleMinimumPaddingFraction, blankSpace, getMinimumPaddingAbsorbed: _require(keyboardLiftBehavior[3]).getMinimumPaddingAbsorbed, extraContentPadding, getScrollEffective: _require(keyboardLiftBehavior[3]).getScrollEffective, minimumPaddingFractionOnOpen: sharedValue5, padding, offsetBeforeScroll: sharedValue2, keyboardLiftBehavior, actualOpenShift: sharedValue6 };
  pnpm_indexTs2.__closure = obj1;
  pnpm_indexTs2.__workletHash = 16814590881167;
  pnpm_indexTs2.__initData = offset;
  obj.onStart = pnpm_indexTs2;
  /* worklet (recovered source) */ function pnpm_indexTs3(current,previous){const{freeze,blankSpace,keyboardPadding,isScrollAtEnd,scroll,layout,size,inverted,keyboardLiftBehavior,shouldShiftContent,scrollToTarget}=this.__closure;if(freeze.value||previous===null){return;}const rawDelta=current-previous;if(rawDelta===0){return;}const previousTotal=Math.max(blankSpace.value,keyboardPadding.value+previous);const currentTotal=Math.max(blankSpace.value,keyboardPadding.value+current);const effectiveDelta=currentTotal-previousTotal;if(effectiveDelta===0){return;}const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior==="persistent"&&effectiveDelta<0&&!atEnd){return;}if(!shouldShiftContent(keyboardLiftBehavior,atEnd)){return;}if(inverted){const target=Math.max(scroll.value-effectiveDelta,-currentTotal);scrollToTarget(target);}else{const maxScroll=Math.max(size.value.height-layout.value.height+currentTotal,0);const target=Math.min(scroll.value+effectiveDelta,maxScroll);scrollToTarget(target);}}
  obj2 = { freeze, currentHeight, inverted, getEffectiveHeight: _require(keyboardLiftBehavior[3]).getEffectiveHeight, targetKeyboardHeight: sharedValue3, offset, getMinimumPaddingAbsorbed: _require(keyboardLiftBehavior[3]).getMinimumPaddingAbsorbed, blankSpace, extraContentPadding, minimumPaddingFractionOnOpen: sharedValue5, getScrollEffective: _require(keyboardLiftBehavior[3]).getScrollEffective, isScrollAtEnd: _require(keyboardLiftBehavior[3]).isScrollAtEnd, offsetBeforeScroll: sharedValue2, layout, size, keyboardLiftBehavior, padding, scrollTo: _require(keyboardLiftBehavior[0]).scrollTo, scrollViewRef: animatedRef, shouldShiftContent: _require(keyboardLiftBehavior[3]).shouldShiftContent, closing: sharedValue4, clampScrollIfNeeded: pnpm_indexTs1, scroll, clampedScrollTarget: _require(keyboardLiftBehavior[3]).clampedScrollTarget, actualOpenShift: sharedValue6 };
  pnpm_indexTs3.__closure = obj2;
  pnpm_indexTs3.__workletHash = 6317221970795;
  pnpm_indexTs3.__initData = blankSpace;
  obj.onMove = pnpm_indexTs3;
  /* worklet (recovered source) */ function pnpm_indexTs4(e){const{freeze,getEffectiveHeight,targetKeyboardHeight,offset,padding,offsetBeforeScroll,actualOpenShift,scroll}=this.__closure;if(freeze.value){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);padding.value=effective;if(effective>0&&offsetBeforeScroll.value!==-1){actualOpenShift.value=scroll.value-offsetBeforeScroll.value;}}
  obj3 = { freeze, getEffectiveHeight: _require(keyboardLiftBehavior[3]).getEffectiveHeight, targetKeyboardHeight: sharedValue3, offset, padding, offsetBeforeScroll: sharedValue2, actualOpenShift: sharedValue6, scroll };
  pnpm_indexTs4.__closure = obj3;
  pnpm_indexTs4.__workletHash = 1904796451086;
  pnpm_indexTs4.__initData = extraContentPadding;
  obj.onEnd = pnpm_indexTs4;
  const items = [inverted, keyboardLiftBehavior, offset];
  _require(keyboardLiftBehavior[2]).useKeyboardHandler(obj, items);
  return { padding, currentHeight, contentOffsetY: undefined, scroll, layout, size, onLayout, onContentSizeChange };
};
