// Module ID: 2008
// Function ID: 2009
// Dependencies: [1652, 1990, 1973, 2009]
// Exports: useChatKeyboard

// Module 2008
import _mod1652 from "module_1652" /* 1652 */;
import useScrollStateDefault from "useScrollState" /* 1990 */;

let tmp;
const _mod1973 = tmp(1973);
const helpers = tmp(2009);
let closure_3 = { code: "(function pnpm_indexTs1(effective,totalPaddingForMaxScroll){let[size,layout,scroll,scrollTo,scrollViewRef]=this.__closure;const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:effective;const maxScroll=Math.max(size.value.height-layout.value.height+paddingForMax,0);if(scroll.value>maxScroll){scrollTo(scrollViewRef,0,maxScroll,false);}})" };
let closure_4 = { code: "(function pnpm_indexTs2(e){let[freeze,targetKeyboardHeight,closing,getEffectiveHeight,offset,isScrollAtEnd,scroll,layout,size,inverted,getVisibleMinimumPaddingFraction,blankSpace,getMinimumPaddingAbsorbed,extraContentPadding,getScrollEffective,minimumPaddingFractionOnOpen,padding,offsetBeforeScroll,keyboardLiftBehavior,actualOpenShift]=this.__closure;if(freeze.value){return;}if(e.height>0){targetKeyboardHeight.value=e.height;closing.value=false;}else{closing.value=true;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);const visibleFraction=getVisibleMinimumPaddingFraction(scroll.value,layout.value.height,size.value.height,blankSpace.value,inverted);const minimumPaddingAbsorbed=visibleFraction>=1?getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value):0;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);if(inverted&&e.duration===-1){return;}else if(e.height>0){minimumPaddingFractionOnOpen.value=visibleFraction>=1?1:0;padding.value=effective;offsetBeforeScroll.value=scroll.value;if(!inverted&&keyboardLiftBehavior===\"whenAtEnd\"&&!atEnd){offsetBeforeScroll.value=-1;}else if(!inverted&&scrollEffective===0){offsetBeforeScroll.value=-1;}else if(inverted&&scrollEffective===0){offsetBeforeScroll.value=scroll.value;}}else{if(inverted){offsetBeforeScroll.value=scroll.value;}else{if(offsetBeforeScroll.value!==-1){offsetBeforeScroll.value=scroll.value-actualOpenShift.value;}}}})" };
let closure_5 = { code: "(function pnpm_indexTs3(e){let[freeze,currentHeight,inverted,getEffectiveHeight,targetKeyboardHeight,offset,getMinimumPaddingAbsorbed,blankSpace,extraContentPadding,minimumPaddingFractionOnOpen,getScrollEffective,isScrollAtEnd,offsetBeforeScroll,layout,size,keyboardLiftBehavior,padding,scrollTo,scrollViewRef,shouldShiftContent,closing,clampScrollIfNeeded,scroll,clampedScrollTarget,actualOpenShift]=this.__closure;if(freeze.value){return;}currentHeight.value=e.height;if(inverted){if(e.duration===-1){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const minimumPaddingAbsorbed=getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value)*minimumPaddingFractionOnOpen.value;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);const actualTotalPadding=Math.max(blankSpace.value,effective+extraContentPadding.value);const wasAtEnd=isScrollAtEnd(offsetBeforeScroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior===\"never\"&&wasAtEnd&&effective<padding.value){padding.value=effective;if(scrollEffective===0&&minimumPaddingAbsorbed>0){return;}scrollTo(scrollViewRef,0,0,false);return;}if(!shouldShiftContent(keyboardLiftBehavior,wasAtEnd)){if(closing.value&&effective<padding.value){padding.value=effective;clampScrollIfNeeded(effective,actualTotalPadding);}return;}if(scrollEffective===0&&minimumPaddingAbsorbed>0){return;}if(keyboardLiftBehavior===\"persistent\"){const currentShift=offsetBeforeScroll.value+padding.value-scroll.value;if(effective<currentShift){if(wasAtEnd){padding.value=effective;scrollTo(scrollViewRef,0,0,false);}else if(closing.value){padding.value=effective;clampScrollIfNeeded(effective,actualTotalPadding);}return;}}const target=offsetBeforeScroll.value+padding.value-scrollEffective;scrollTo(scrollViewRef,0,target,false);}else{const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const minimumPaddingAbsorbed=getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value)*minimumPaddingFractionOnOpen.value;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);const actualTotalPadding=Math.max(blankSpace.value,effective+extraContentPadding.value);if(keyboardLiftBehavior===\"never\"&&closing.value&&effective<padding.value){clampScrollIfNeeded(effective,actualTotalPadding);return;}if(!shouldShiftContent(keyboardLiftBehavior,true)){return;}if(offsetBeforeScroll.value===-1){if(closing.value){clampScrollIfNeeded(effective,actualTotalPadding);}return;}if(keyboardLiftBehavior===\"persistent\"&&closing.value){const keepAt=offsetBeforeScroll.value+padding.value;const maxScroll=Math.max(size.value.height-layout.value.height+actualTotalPadding,0);scrollTo(scrollViewRef,0,Math.min(keepAt,maxScroll),false);return;}const target=clampedScrollTarget(offsetBeforeScroll.value,scrollEffective,size.value.height,layout.value.height,actualTotalPadding);scrollTo(scrollViewRef,0,target,false);if(!closing.value){actualOpenShift.value=target-offsetBeforeScroll.value;}}})" };
let closure_6 = { code: "(function pnpm_indexTs4(e){let[freeze,getEffectiveHeight,targetKeyboardHeight,offset,padding,offsetBeforeScroll,actualOpenShift,scroll]=this.__closure;if(freeze.value){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);padding.value=effective;if(effective>0&&offsetBeforeScroll.value!==-1){actualOpenShift.value=scroll.value-offsetBeforeScroll.value;}})" };

export function useChatKeyboard(animatedRef, arg1) {
  let blankSpace;
  let extraContentPadding;
  let freeze;
  let inverted;
  let keyboardLiftBehavior;
  let layout;
  let offset;
  let offset2;
  let onContentSizeChange;
  let onLayout;
  let pnpm_indexTs2;
  let pnpm_indexTs3;
  let pnpm_indexTs4;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  ({ inverted, keyboardLiftBehavior, freeze, offset, blankSpace, extraContentPadding } = arg1);
  let tmp = require;
  const obj = _mod1652;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = _mod1652;
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = _mod1652;
  const sharedValue2 = obj3.useSharedValue(0);
  const obj4 = _mod1652;
  const sharedValue3 = obj4.useSharedValue(0);
  const obj5 = _mod1652;
  const sharedValue4 = obj5.useSharedValue(false);
  const obj6 = _mod1652;
  const sharedValue5 = obj6.useSharedValue(0);
  const obj7 = _mod1652;
  const sharedValue6 = obj7.useSharedValue(0);
  const tmp10 = useScrollStateDefault(animatedRef);
  ({ layout, size, offset: offset2 } = tmp10);
  const items = [closure_3, size, layout, offset2, , ];
  ({ onLayout, onContentSizeChange } = tmp10);
  items[4] = _mod1652.scrollTo;
  items[5] = animatedRef;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  function pnpm_indexTs1(arg0, arg1) {
    let tmp = arg0;
    if (undefined !== arg1) {
      tmp = arg1;
    }
    const bound = Math.max(_undefined.value.height - _undefined2.value.height + tmp, 0);
    if (_undefined3.value > bound) {
      _undefined4(c4, 0, bound, false);
    }
  }
  const items1 = [tmp12, tmp13, tmp14, tmp15, tmp16];
  pnpm_indexTs1.__closure = items1;
  pnpm_indexTs1.__workletHash = 5404264942352;
  pnpm_indexTs1.__initData = tmp11;
  const items2 = [closure_4, freeze, sharedValue3, sharedValue4, , , , , , , , , , , , , , , , , ];
  const useKeyboardHandler = _mod1973.useKeyboardHandler;
  items2[4] = helpers.getEffectiveHeight;
  items2[5] = offset;
  items2[6] = helpers.isScrollAtEnd;
  items2[7] = offset2;
  items2[8] = layout;
  items2[9] = size;
  items2[10] = inverted;
  items2[11] = helpers.getVisibleMinimumPaddingFraction;
  items2[12] = blankSpace;
  items2[13] = helpers.getMinimumPaddingAbsorbed;
  items2[14] = extraContentPadding;
  items2[15] = helpers.getScrollEffective;
  items2[16] = sharedValue5;
  items2[17] = sharedValue;
  items2[18] = sharedValue2;
  items2[19] = keyboardLiftBehavior;
  items2[20] = sharedValue6;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items2;
  const obj8 = { onStart: pnpm_indexTs2, onMove: pnpm_indexTs3, onEnd: pnpm_indexTs4 };
  pnpm_indexTs2 = function pnpm_indexTs2(height) {
    if (!_undefined.value) {
      if (height.height > 0) {
        _undefined2.value = height.height;
        c2.value = false;
      } else {
        c2.value = true;
      }
      const tmp8 = _undefined3(height.height, _undefined2.value, c4);
      let tmp12 = c9;
      _undefined4(_undefined5.value, _undefined6.value.height, _undefined7.value.height, c9);
      const tmp17 = _undefined8(_undefined5.value, _undefined6.value.height, _undefined7.value.height, _undefined9.value, c9);
      let num3 = 0;
      const iter2 = _undefined9;
      if (tmp17 >= 1) {
        num3 = _undefined10(iter2.value, _undefined11.value);
      }
      const tmp21 = _undefined12(tmp8, num3);
      const tmp22 = tmp12 && -1 === height.duration;
      if (!tmp22) {
        if (height.height > 0) {
          let num6 = 0;
          const tmp23 = c15;
          if (tmp17 >= 1) {
            num6 = 1;
          }
          tmp23.value = num6;
          c16.value = tmp8;
          _undefined.value = _undefined5.value;
          if (!tmp12) {
            _undefined.value = -1;
          }
          if (tmp12) {
            tmp12 = 0 === tmp21;
          }
          if (tmp12) {
            _undefined.value = _undefined5.value;
          }
        } else if (tmp12) {
          _undefined.value = _undefined5.value;
        } else if (-1 !== _undefined.value) {
          _undefined.value = _undefined5.value - _undefined13.value;
        }
      }
    }
  };
  const items3 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  pnpm_indexTs2.__closure = items3;
  pnpm_indexTs2.__workletHash = 4021969626038;
  pnpm_indexTs2.__initData = tmp18;
  const items4 = [closure_5, freeze, sharedValue1, inverted, helpers.getEffectiveHeight, sharedValue3, offset, helpers.getMinimumPaddingAbsorbed, blankSpace, extraContentPadding, sharedValue5, helpers.getScrollEffective, helpers.isScrollAtEnd, sharedValue2, layout, size, keyboardLiftBehavior, sharedValue, _mod1652.scrollTo, animatedRef, helpers.shouldShiftContent, sharedValue4, pnpm_indexTs1, offset2, helpers.clampedScrollTarget, sharedValue6];
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let c16;
  let c17;
  let c18;
  let c19;
  let c20;
  let c21;
  let c22;
  let c23;
  let c24;
  [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64] = items4;
  pnpm_indexTs3 = function pnpm_indexTs3(height) {
    if (!_undefined.value) {
      c1.value = height.height;
      if (c2) {
        if (-1 !== height.duration) {
          const tmp70 = _undefined2(height.height, _undefined3.value, c5);
          const result = _undefined4(_undefined5.value, _undefined6.value) * _undefined7.value;
          const _Math4 = Math;
          const tmp77 = _undefined8(tmp70, result);
          const bound = Math.max(_undefined5.value, tmp70 + _undefined6.value);
          const tmp84 = _undefined9(_undefined10.value, _undefined11.value.height, _undefined12.value.height, c2);
          if ("never" === c15) {
            if (tmp84) {
              if (tmp70 < _undefined13.value) {
                _undefined13.value = tmp70;
                _undefined14(c18, 0, 0, false);
              }
            }
          }
          if (_undefined15(c15, tmp84)) {
            if ("persistent" === c15) {
              if (tmp70 < _undefined10.value + _undefined13.value - _undefined18.value) {
                if (tmp84) {
                  _undefined13.value = tmp70;
                  _undefined14(c18, 0, 0, false);
                } else if (_undefined16.value) {
                  _undefined13.value = tmp70;
                  _undefined17(tmp70, bound);
                }
              }
            }
            _undefined14(c18, 0, _undefined10.value + _undefined13.value - tmp77, false);
          } else {
            const value = _undefined16.value && tmp70 < _undefined13.value;
            if (value) {
              _undefined13.value = tmp70;
              _undefined17(tmp70, bound);
            }
          }
        }
      } else {
        const tmp7 = _undefined2(height.height, _undefined3.value, c5);
        const _Math = Math;
        const tmp13 = _undefined8(tmp7, _undefined4(_undefined5.value, _undefined6.value) * _undefined7.value);
        const bound1 = Math.max(_undefined5.value, tmp7 + _undefined6.value);
        if ("never" === c15) {
          if (_undefined16.value) {
            if (tmp7 < _undefined13.value) {
              _undefined17(tmp7, bound1);
            }
          }
        }
        if (_undefined15(c15, true)) {
          if (-1 === _undefined10.value) {
            if (_undefined16.value) {
              _undefined17(tmp7, bound1);
            }
          } else {
            if ("persistent" === c15) {
              if (_undefined16.value) {
                const _Math2 = Math;
                const sum = iter.value + _undefined13.value;
                const _Math3 = Math;
                _undefined14(c18, 0, Math.min(sum, Math.max(_undefined12.value.height - _undefined11.value.height + bound1, 0)), false);
              }
            }
            const tmp26 = _undefined19(_undefined10.value, tmp13, _undefined12.value.height, _undefined11.value.height, bound1);
            _undefined14(c18, 0, tmp26, false);
            if (!_undefined16.value) {
              c24.value = tmp26 - _undefined10.value;
            }
          }
        }
      }
    }
  };
  const items5 = [tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64];
  pnpm_indexTs3.__closure = items5;
  pnpm_indexTs3.__workletHash = 6779594785586;
  pnpm_indexTs3.__initData = tmp39;
  const items6 = [closure_6, freeze, helpers.getEffectiveHeight, sharedValue3, offset, sharedValue, sharedValue2, sharedValue6, offset2];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73] = items6;
  pnpm_indexTs4 = function pnpm_indexTs4(height) {
    if (!_undefined.value) {
      const tmp5 = _undefined2(height.height, _undefined3.value, c3);
      c4.value = tmp5;
      const tmp7 = tmp5 > 0 && -1 !== _undefined4.value;
      if (tmp7) {
        c6.value = _undefined5.value - _undefined4.value;
      }
    }
  };
  const items7 = [tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73];
  pnpm_indexTs4.__closure = items7;
  pnpm_indexTs4.__workletHash = 11505821994135;
  pnpm_indexTs4.__initData = tmp65;
  const items8 = [inverted, keyboardLiftBehavior, offset];
  useKeyboardHandler(obj8, items8);
  return { padding: sharedValue, currentHeight: sharedValue1, contentOffsetY: "Boolean", scroll: offset2, layout, size, onLayout, onContentSizeChange };
}
