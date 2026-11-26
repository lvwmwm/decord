// Module ID: 1992
// Function ID: 1993
// Dependencies: [5, 19, 21, 1655, 1990, 1993, 1976, 1972, 1645, 1994, 1995, 1996]

// Module 1992
import utils from "utils" /* 1994 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let closure_2;

let c10;
let c9;
let closure_4;
let forwardRef;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useCallback: closure_4, useEffect: hasOwnProperty, useImperativeHandle: metroRequire, useMemo: metroImportDefault, forwardRef } = react);
react = react_mod;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = { code: "(function pnpm_indexTsx1(e,animated=false){let[enabled,layout,scrollViewTarget,height,keyboardHeight,bottomOffset,interpolate,initialKeyboardSize,scrollDistanceWithRespectToSnapPoints,scrollPosition,snapToOffsets,scrollTo,scrollViewAnimatedRef,scrollViewPageY]=this.__closure;var _layout$value,_layout$value2,_layout$value3;if(!enabled){return 0;}if(((_layout$value=layout.value)===null||_layout$value===void 0?void 0:_layout$value.parentScrollViewTarget)!==scrollViewTarget.value){return 0;}const visibleRect=height-keyboardHeight.value;const absoluteY=((_layout$value2=layout.value)===null||_layout$value2===void 0?void 0:_layout$value2.layout.absoluteY)||0;const inputHeight=((_layout$value3=layout.value)===null||_layout$value3===void 0?void 0:_layout$value3.layout.height)||0;const point=absoluteY+inputHeight;if(visibleRect-point<=bottomOffset){const relativeScrollTo=keyboardHeight.value-(height-point)+bottomOffset;const interpolatedScrollTo=interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[0,scrollDistanceWithRespectToSnapPoints(relativeScrollTo+scrollPosition.value,snapToOffsets)-scrollPosition.value]);const targetScrollY=Math.max(interpolatedScrollTo,0)+scrollPosition.value;scrollTo(scrollViewAnimatedRef,0,targetScrollY,animated);return interpolatedScrollTo;}if(point<scrollViewPageY.value){const positionOnScreen=visibleRect-bottomOffset;const topOfScreen=scrollPosition.value+point;scrollTo(scrollViewAnimatedRef,0,topOfScreen-positionOnScreen,animated);}return 0;})" };
let closure_12 = { code: "(function pnpm_indexTsx2(e){let[mode,keyboardWillAppear,ghostViewSpace,scrollTo,scrollViewAnimatedRef,scrollPosition,interpolate,initialKeyboardSize,keyboardHeight]=this.__closure;if(mode===\"layout\"){return false;}if(!keyboardWillAppear.value&&ghostViewSpace.value>0){scrollTo(scrollViewAnimatedRef,0,scrollPosition.value-interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[ghostViewSpace.value,0]),false);return true;}return false;})" };
let closure_13 = { code: "(function pnpm_indexTsx3(newPosition){let[scrollPosition,maybeScroll,keyboardHeight]=this.__closure;const prevScroll=scrollPosition.value;scrollPosition.value=newPosition;maybeScroll(keyboardHeight.value,true);scrollPosition.value=prevScroll;})" };
let closure_14 = { code: "(function pnpm_indexTsx4(e){let[interpolate,keyboardHeight,extraKeyboardSpace,currentKeyboardFrameHeight]=this.__closure;const keyboardFrame=interpolate(e.height,[0,keyboardHeight.value],[0,keyboardHeight.value+extraKeyboardSpace]);currentKeyboardFrameHeight.value=keyboardFrame;})" };
let closure_15 = { code: "(function pnpm_indexTsx5(){let[lastSelection,input,layout,clamp]=this.__closure;var _lastSelection$value,_input$value;const customHeight=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.selection.end.y;if(!((_input$value=input.value)!==null&&_input$value!==void 0&&_input$value.layout)||!customHeight){return false;}layout.value={...input.value,layout:{...input.value.layout,height:clamp(customHeight,0,input.value.layout.height)}};return true;})" };
let closure_16 = { code: "(function pnpm_indexTsx6(){let[layout,updateLayoutFromSelection,performScrollWithPositionRestoration,position]=this.__closure;const prevLayout=layout.value;if(!updateLayoutFromSelection()){return;}performScrollWithPositionRestoration(position.value);layout.value=prevLayout;})" };
let closure_17 = { code: "(function pnpm_indexTsx7(){let[scrollFromCurrentPosition]=this.__closure;scrollFromCurrentPosition();})" };
let closure_18 = { code: "(function pnpm_indexTsx8(e){let[lastSelection,selectionUpdatedSinceHide,pendingSelectionForFocus,updateLayoutFromSelection,keyboardWillAppear,keyboardHeight,position,maybeScroll,scrollFromCurrentPosition,onChangeTextHandler]=this.__closure;var _lastSelection$value,_lastSelection$value2;const lastTarget=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target;const latestSelection=(_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.selection;lastSelection.value=e;selectionUpdatedSinceHide.value=true;if(e.target!==lastTarget||pendingSelectionForFocus.value){if(pendingSelectionForFocus.value){pendingSelectionForFocus.value=false;updateLayoutFromSelection();if(!keyboardWillAppear.value&&keyboardHeight.value>0){position.value+=maybeScroll(keyboardHeight.value,true);}}return;}if(e.selection.end.position===e.selection.start.position&&(latestSelection===null||latestSelection===void 0?void 0:latestSelection.end.y)!==e.selection.end.y){return scrollFromCurrentPosition();}if(e.selection.start.position!==e.selection.end.position){return scrollFromCurrentPosition();}onChangeTextHandler();})" };
let closure_19 = { code: "(function pnpm_indexTsx9(e){let[keyboardHeight,keyboardWillAppear,tag,initialKeyboardSize,scrollPosition,scrollBeforeKeyboardMovement,pendingSelectionForFocus,position,mode,syncKeyboardFrame,lastSelection,selectionUpdatedSinceHide,updateLayoutFromSelection,input,layout,maybeScroll,ghostViewSpace,scrollViewLayout,scrollViewContentSize]=this.__closure;const keyboardWillChangeSize=keyboardHeight.value!==e.height&&e.height>0;keyboardWillAppear.value=e.height>0&&keyboardHeight.value===0;const keyboardWillHide=e.height===0;const focusWasChanged=tag.value!==e.target&&e.target!==-1||keyboardWillChangeSize;if(keyboardWillChangeSize){initialKeyboardSize.value=keyboardHeight.value;}if(keyboardWillHide){initialKeyboardSize.value=0;scrollPosition.value=scrollBeforeKeyboardMovement.value;pendingSelectionForFocus.value=false;}if(keyboardWillAppear.value||keyboardWillChangeSize||focusWasChanged){scrollPosition.value=position.value;keyboardHeight.value=e.height;if(mode===\"insets\"){syncKeyboardFrame(e);}}if(focusWasChanged){var _lastSelection$value;tag.value=e.target;if(((_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target)===e.target&&selectionUpdatedSinceHide.value){updateLayoutFromSelection();pendingSelectionForFocus.value=false;}else{var _lastSelection$value2;if(((_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.target)===e.target){updateLayoutFromSelection();}else if(input.value){layout.value=input.value;}pendingSelectionForFocus.value=true;}scrollBeforeKeyboardMovement.value=position.value;}if(focusWasChanged&&!keyboardWillAppear.value){if(!pendingSelectionForFocus.value){position.value+=maybeScroll(e.height,true);}}if(mode===\"insets\"){ghostViewSpace.value=position.value+scrollViewLayout.value.height-scrollViewContentSize.value.height;if(ghostViewSpace.value>0){scrollPosition.value=position.value;}}})" };
let closure_20 = { code: "(function pnpm_indexTsx10(e){let[removeGhostPadding,mode,syncKeyboardFrame,disableScrollOnKeyboardHide,keyboardWillAppear,maybeScroll]=this.__closure;if(removeGhostPadding(e.height)){return;}if(mode===\"layout\"){syncKeyboardFrame(e);}if(!disableScrollOnKeyboardHide||keyboardWillAppear.value){maybeScroll(e.height);}})" };
let closure_21 = { code: "(function pnpm_indexTsx11(e){let[removeGhostPadding,keyboardHeight,scrollPosition,position,selectionUpdatedSinceHide,keyboardWillAppear,pendingSelectionForFocus,syncKeyboardFrame]=this.__closure;removeGhostPadding(e.height);keyboardHeight.value=e.height;scrollPosition.value=position.value;if(e.height===0){selectionUpdatedSinceHide.value=false;}else if(keyboardWillAppear.value){pendingSelectionForFocus.value=false;}syncKeyboardFrame(e);})" };
let closure_22 = { code: "(function pnpm_indexTsx12(){let[scrollFromCurrentPosition]=this.__closure;scrollFromCurrentPosition();})" };
let closure_23 = { code: "(function pnpm_indexTsx13(){let[input]=this.__closure;return input.value;})" };
let closure_24 = { code: "(function pnpm_indexTsx14(current,previous){let[scrollFromCurrentPosition]=this.__closure;if((current===null||current===void 0?void 0:current.target)===(previous===null||previous===void 0?void 0:previous.target)&&(current===null||current===void 0?void 0:current.layout.height)!==(previous===null||previous===void 0?void 0:previous.layout.height)){scrollFromCurrentPosition();}})" };
let closure_25 = { code: "(function pnpm_indexTsx15(){let[enabled,currentKeyboardFrameHeight]=this.__closure;return enabled?currentKeyboardFrameHeight.value:0;})" };
let closure_26 = { code: "(function pnpm_indexTsx16(){let[enabled,mode,currentKeyboardFrameHeight]=this.__closure;return enabled&&mode===\"layout\"?{paddingBottom:currentKeyboardFrameHeight.value+1}:{};})" };

export default forwardRef((bottomOffset, arg1) => {
  let animatedRef;
  let children;
  let closure_8;
  let input;
  let items47;
  let layout;
  let offset;
  let onLayout;
  let pnpm_indexTsx10;
  let pnpm_indexTsx11;
  let pnpm_indexTsx9;
  let ref;
  let tmp100;
  let tmp101;
  let tmp102;
  let tmp103;
  let tmp104;
  let tmp105;
  let tmp106;
  let tmp107;
  let tmp108;
  let tmp109;
  let tmp110;
  let tmp111;
  let tmp112;
  let tmp113;
  let tmp114;
  let tmp115;
  let tmp116;
  let tmp117;
  let tmp118;
  let tmp119;
  let tmp120;
  let tmp121;
  let tmp122;
  let tmp123;
  let tmp124;
  let tmp125;
  let tmp126;
  let tmp127;
  let tmp128;
  let tmp129;
  let tmp130;
  let tmp131;
  let tmp136;
  let tmp137;
  let tmp138;
  let tmp139;
  let tmp141;
  let tmp142;
  let tmp143;
  let tmp146;
  let tmp147;
  let tmp148;
  let tmp149;
  let tmp157Result;
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
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp79;
  let tmp80;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  let update;
  ({ children, onLayout } = bottomOffset);
  let num = bottomOffset.bottomOffset;
  if (num === undefined) {
    num = 0;
  }
  let flag = bottomOffset.disableScrollOnKeyboardHide;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = bottomOffset.enabled;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let num2 = bottomOffset.extraKeyboardSpace;
  if (num2 === undefined) {
    num2 = 0;
  }
  let str = bottomOffset.mode;
  if (str === undefined) {
    str = "insets";
  }
  let ScrollView = bottomOffset.ScrollViewComponent;
  if (ScrollView === undefined) {
    let tmp = animatedRef;
    let tmp2 = ref;
    ScrollView = animatedRef(ref[3]).ScrollView;
  }
  const snapToOffsets = bottomOffset.snapToOffsets;
  let merged = Object.assign(bottomOffset, Object.assign({ children: 0, onLayout: 0, bottomOffset: 0, disableScrollOnKeyboardHide: 0, enabled: 0, extraKeyboardSpace: 0, mode: 0, ScrollViewComponent: 0, snapToOffsets: 0 }));
  ref = undefined;
  update = undefined;
  react = undefined;
  let tmp4 = onLayout;
  let tmp5 = ref;
  let obj = onLayout(ref[3]);
  animatedRef = obj.useAnimatedRef();
  ref = react.useRef(null);
  let tmp9 = animatedRef(ref[4])(animatedRef, ref);
  let obj2 = onLayout(ref[3]);
  const sharedValue = obj2.useSharedValue(null);
  let obj3 = onLayout(ref[3]);
  const sharedValue1 = obj3.useSharedValue(0);
  const tmp12 = animatedRef(ref[5])(animatedRef);
  ({ offset, layout, size } = tmp12);
  let obj4 = onLayout(ref[3]);
  const sharedValue2 = obj4.useSharedValue(0);
  let obj5 = onLayout(ref[3]);
  const sharedValue3 = obj5.useSharedValue(0);
  const obj6 = onLayout(ref[3]);
  const sharedValue4 = obj6.useSharedValue(false);
  const obj7 = onLayout(ref[3]);
  const sharedValue5 = obj7.useSharedValue(-1);
  const obj8 = onLayout(ref[3]);
  const sharedValue6 = obj8.useSharedValue(0);
  const obj9 = onLayout(ref[3]);
  const sharedValue7 = obj9.useSharedValue(0);
  const obj10 = onLayout(ref[6]);
  const reanimatedFocusedInput = obj10.useReanimatedFocusedInput();
  ({ input, update } = reanimatedFocusedInput);
  const obj11 = onLayout(ref[3]);
  const sharedValue8 = obj11.useSharedValue(null);
  const obj12 = onLayout(ref[3]);
  const sharedValue9 = obj12.useSharedValue(null);
  const obj13 = onLayout(ref[3]);
  const sharedValue10 = obj13.useSharedValue(-1);
  const obj14 = onLayout(ref[3]);
  const sharedValue11 = obj14.useSharedValue(false);
  const obj15 = onLayout(ref[3]);
  const sharedValue12 = obj15.useSharedValue(false);
  const obj16 = onLayout(ref[3]);
  const sharedValue13 = obj16.useSharedValue(0);
  const obj17 = onLayout(ref[6]);
  let height = obj17.useWindowDimensions().height;
  let closure_0 = sharedValue((value) => {
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function*(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              value = undefined;
              const obj5 = value(closure_2_2[7]);
              const findNodeHandleResult = obj5.findNodeHandle(ref.current);
              c3.value = findNodeHandleResult;
              const tmp16 = value;
              const tmp17 = value;
              const tmp18 = closure_2_2;
              if (value != null) {
                value(tmp16);
              }
              if (null !== findNodeHandleResult) {
                c3 = 1;
                const KeyboardControllerNative = tmp17(tmp18[8]).KeyboardControllerNative;
                ref = 2;
                c5 = 1;
                const obj4 = { value: KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult), done: false };
                return obj4;
              }
            }
          } else if (1 === ref) {
            c3 = 0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            return { value, done: true };
          } else {
            value = value.y;
            c5.value = value;
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp10) {
          if (0 === c3) {
            c5 = 3;
            throw tmp10;
          } else {
            ref = 1;
          }
        }
      }
    })();
  });
  let items = [onLayout];
  const tmp28 = update(function(arg0) {
    return closure_0(...arguments);
  }, items);
  let items1 = [closure_11, flag2, sharedValue8, sharedValue, height, sharedValue3, num, onLayout(ref[3]).interpolate, sharedValue6, onLayout(ref[9]).scrollDistanceWithRespectToSnapPoints, sharedValue1, snapToOffsets, onLayout(ref[3]).scrollTo, animatedRef, sharedValue13];
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items1;
  function pnpm_indexTsx1(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const tmp = c0;
    if (tmp) {
      const value = _undefined.value;
      let prop;
      if (value != null) {
        prop = value.parentScrollViewTarget;
      }
      if (prop !== _undefined2.value) {
        return 0;
      } else {
        const diff = c3 - _undefined3.value;
        const value2 = iter.value;
        let num2;
        const tmp25 = c3;
        if (value2 != null) {
          num2 = value2.layout.absoluteY;
        }
        if (!num2) {
          num2 = 0;
        }
        const value3 = iter.value;
        let num3;
        if (value3 != null) {
          num3 = value3.layout.height;
        }
        if (!num3) {
          num3 = 0;
        }
        const sum = num2 + num3;
        if (diff - sum <= c5) {
          const items = [_undefined5.value, _undefined3.value];
          const items1 = [0, _undefined6(_undefined3.value - (tmp25 - sum) + c5 + _undefined7.value, c10) - _undefined7.value];
          const tmp19 = _undefined4(arg0, items, items1);
          const _Math = Math;
          _undefined8(c12, 0, Math.max(tmp19, 0) + _undefined7.value, flag);
          return tmp19;
        } else {
          if (sum < _undefined9.value) {
            _undefined8(c12, 0, _undefined7.value + sum - (diff - c5), flag);
          }
          return 0;
        }
      }
    } else {
      return 0;
    }
  }
  const items2 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
  pnpm_indexTsx1.__closure = items2;
  pnpm_indexTsx1.__workletHash = 4113077878072;
  pnpm_indexTsx1.__initData = tmp29;
  const items3 = [num, flag2, height, snapToOffsets];
  const tmp26Result = update(pnpm_indexTsx1, items3);
  const items4 = [closure_12, str, sharedValue4, sharedValue10, tmp4(tmp5[3]).scrollTo, animatedRef, sharedValue1, tmp4(tmp5[3]).interpolate, sharedValue6, sharedValue3];
  [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54] = items4;
  function pnpm_indexTsx2(arg0) {
    let tmp = "layout" !== c0;
    if (tmp) {
      let flag = !_undefined.value && _undefined2.value > 0;
      if (flag) {
        const items = [_undefined6.value, _undefined7.value];
        const items1 = [_undefined2.value, 0];
        _undefined3(c4, 0, _undefined4.value - _undefined5(arg0, items, items1), false);
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  }
  const items5 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54];
  pnpm_indexTsx2.__closure = items5;
  pnpm_indexTsx2.__workletHash = 17470702170830;
  pnpm_indexTsx2.__initData = tmp45;
  const items6 = [str];
  const tmp26Result9 = update(pnpm_indexTsx2, items6);
  const items7 = [closure_13, sharedValue1, tmp26Result, sharedValue3];
  [tmp56, tmp57, tmp58, tmp59] = items7;
  function pnpm_indexTsx3(value) {
    _undefined.value = value;
    value = _undefined.value;
    _undefined2(_undefined3.value, true);
    _undefined.value = value;
  }
  const items8 = [tmp57, tmp58, tmp59];
  pnpm_indexTsx3.__closure = items8;
  pnpm_indexTsx3.__workletHash = 9263416722410;
  pnpm_indexTsx3.__initData = tmp56;
  const items9 = [sharedValue1, sharedValue3, tmp26Result];
  const tmp26Result10 = update(pnpm_indexTsx3, items9);
  const items10 = [closure_14, tmp4(tmp5[3]).interpolate, sharedValue3, num2, sharedValue2];
  [tmp61, tmp62, tmp63, tmp64, tmp65] = items10;
  function pnpm_indexTsx4(height) {
    const items = [0, _undefined2.value];
    const items1 = [0, _undefined2.value + c2];
    c3.value = _undefined(height.height, items, items1);
  }
  const items11 = [tmp62, tmp63, tmp64, tmp65];
  pnpm_indexTsx4.__closure = items11;
  pnpm_indexTsx4.__workletHash = 9110153972555;
  pnpm_indexTsx4.__initData = tmp61;
  const items12 = [num2];
  const tmp26Result11 = update(pnpm_indexTsx4, items12);
  const items13 = [closure_15, sharedValue9, input, sharedValue8, tmp4(tmp5[3]).clamp];
  [tmp67, tmp68, tmp69, tmp70, tmp71] = items13;
  function pnpm_indexTsx5() {
    let obj2;
    let y;
    const value = _undefined.value;
    if (value != null) {
      y = value.selection.end.y;
    }
    const value2 = _undefined2.value;
    let layout;
    if (value2 != null) {
      layout = value2.layout;
    }
    let tmp2 = !layout;
    if (layout) {
      tmp2 = !y;
    }
    let flag = !tmp2;
    if (flag) {
      const obj = { layout: obj2 };
      const merged = Object.assign(iter.value);
      obj2 = { height: _undefined3(y, 0, _undefined2.value.layout.height) };
      const merged1 = Object.assign(iter.value.layout);
      c2.value = obj;
      flag = true;
    }
    return flag;
  }
  const items14 = [tmp68, tmp69, tmp70, tmp71];
  pnpm_indexTsx5.__closure = items14;
  pnpm_indexTsx5.__workletHash = 11429456708452;
  pnpm_indexTsx5.__initData = tmp67;
  const items15 = [input, sharedValue9, sharedValue8];
  const tmp26Result12 = update(pnpm_indexTsx5, items15);
  const items16 = [closure_16, sharedValue8, tmp26Result12, tmp26Result10, offset];
  [tmp73, tmp74, tmp75, tmp76, tmp77] = items16;
  function pnpm_indexTsx6() {
    const value = _undefined.value;
    const tmp = _undefined;
    if (_undefined2()) {
      _undefined3(_undefined4.value);
      tmp.value = value;
    }
  }
  const items17 = [tmp74, tmp75, tmp76, tmp77];
  pnpm_indexTsx6.__closure = items17;
  pnpm_indexTsx6.__workletHash = 14091357960889;
  pnpm_indexTsx6.__initData = tmp73;
  const items18 = [tmp26Result10];
  const tmp26Result13 = update(pnpm_indexTsx6, items18);
  let closure_6 = tmp26Result13;
  const items19 = [closure_17, tmp26Result13];
  [tmp79, tmp80] = items19;
  function pnpm_indexTsx7() {
    _undefined();
  }
  const items20 = [tmp80];
  pnpm_indexTsx7.__closure = items20;
  pnpm_indexTsx7.__workletHash = 12296636663767;
  pnpm_indexTsx7.__initData = tmp79;
  const items21 = [tmp26Result13];
  const tmp26Result14 = update(pnpm_indexTsx7, items21);
  let closure_7 = tmp26Result14;
  const items22 = [tmp26Result14];
  const tmp82 = closure_7(() => {
    const obj = utils;
    return obj.debounce(closure_7, 200);
  }, items22);
  const items23 = [closure_18, sharedValue9, sharedValue12, sharedValue11, tmp26Result12, sharedValue4, sharedValue3, offset, tmp26Result, tmp26Result13, tmp82];
  [tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93] = items23;
  function pnpm_indexTsx8(value) {
    let selection;
    let tmp5;
    value = _undefined.value;
    let target;
    if (value != null) {
      target = value.target;
    }
    const value2 = iter.value;
    if (value2 != null) {
      selection = value2.selection;
    }
    _undefined.value = value;
    c1.value = true;
    if (value.target === target) {
      if (!_undefined2.value) {
        if (value.selection.end.position !== value.selection.start.position) {
          if (value.selection.start.position === value.selection.end.position) {
            _undefined9();
          }
          return tmp5;
        } else {
          let y;
          if (selection != null) {
            y = selection.end.y;
          }
        }
        tmp5 = _undefined8();
      }
    }
    if (_undefined2.value) {
      tmp7.value = false;
      _undefined3();
      const tmp11 = !_undefined4.value && _undefined5.value > 0;
      if (tmp11) {
        _undefined6.value = _undefined6.value + _undefined7(_undefined5.value, true);
      }
    }
  }
  const items24 = [tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93];
  pnpm_indexTsx8.__closure = items24;
  pnpm_indexTsx8.__workletHash = 2552973855790;
  pnpm_indexTsx8.__initData = tmp83;
  const items25 = [tmp26Result13, tmp82, tmp26Result12, tmp26Result];
  const tmp26Result15 = update(pnpm_indexTsx8, items25);
  const items26 = [tmp26Result15];
  const tmp4Result = tmp4(tmp5[6]);
  tmp4Result.useFocusedInputHandler({ onSelectionChange: tmp26Result15 }, items26);
  const items27 = [closure_19, sharedValue3, sharedValue4, sharedValue5, sharedValue6, sharedValue1, sharedValue7, sharedValue11, offset, str, tmp26Result11, sharedValue9, sharedValue12, tmp26Result12, input, sharedValue8, tmp26Result, sharedValue10, layout, size];
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
  [tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115] = items27;
  const obj18 = { onStart: pnpm_indexTsx9, onMove: pnpm_indexTsx10, onEnd: pnpm_indexTsx11 };
  pnpm_indexTsx9 = function pnpm_indexTsx9(height) {
    _undefined.value = height.height > 0 && 0 === _undefined.value;
    let tmp3 = _undefined2.value !== height.target;
    height = height.height;
    const tmp2 = _undefined2;
    if (tmp3) {
      tmp3 = -1 !== height.target;
    }
    if (!tmp3) {
      tmp3 = tmp;
    }
    if (_undefined.value !== height.height && height.height > 0) {
      c3.value = _undefined.value;
    }
    if (0 === height) {
      c3.value = 0;
      c4.value = _undefined3.value;
      _undefined4.value = false;
    }
    const tmp9 = _undefined.value || _undefined.value !== height.height && height.height > 0 || tmp3;
    if (tmp9) {
      c4.value = _undefined5.value;
      _undefined.value = height.height;
      if ("insets" === c8) {
        _undefined6(height);
      }
    }
    if (tmp3) {
      tmp2.value = height.target;
      const value = _undefined7.value;
      let target;
      const iter3 = _undefined7;
      if (value != null) {
        target = value.target;
      }
      if (target === height.target) {
        if (_undefined8.value) {
          _undefined9();
          _undefined4.value = false;
        }
        _undefined3.value = _undefined5.value;
      }
      const value2 = iter3.value;
      let target1;
      if (value2 != null) {
        target1 = value2.target;
      }
      if (target1 === height.target) {
        _undefined9();
      } else if (_undefined10.value) {
        c14.value = iter4.value;
      }
      _undefined4.value = true;
    }
    if (tmp3) {
      tmp3 = !iter2.value;
    }
    if (tmp3) {
      if (!_undefined4.value) {
        _undefined5.value = _undefined5.value + _undefined11(height.height, true);
      }
    }
    if ("insets" === c8) {
      _undefined12.value = _undefined5.value + _undefined13.value.height - _undefined14.value.height;
      if (_undefined12.value > 0) {
        c4.value = iter5.value;
      }
    }
  };
  const items28 = [tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115];
  pnpm_indexTsx9.__closure = items28;
  pnpm_indexTsx9.__workletHash = 7869068678350;
  pnpm_indexTsx9.__initData = tmp96;
  const items29 = [closure_20, tmp26Result9, str, tmp26Result11, flag, sharedValue4, tmp26Result];
  [tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122] = items29;
  pnpm_indexTsx10 = function pnpm_indexTsx10(height) {
    if (!_undefined(height.height)) {
      if ("layout" === c1) {
        _undefined2(height);
      }
      const tmp4 = c3 && !_undefined3.value;
      if (!tmp4) {
        _undefined4(height.height);
      }
    }
  };
  const items30 = [tmp117, tmp118, tmp119, tmp120, tmp121, tmp122];
  pnpm_indexTsx10.__closure = items30;
  pnpm_indexTsx10.__workletHash = 4054578440652;
  pnpm_indexTsx10.__initData = tmp116;
  const items31 = [closure_21, tmp26Result9, sharedValue3, sharedValue1, offset, sharedValue12, sharedValue4, sharedValue11, tmp26Result11];
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131] = items31;
  pnpm_indexTsx11 = function pnpm_indexTsx11(height) {
    _undefined(height.height);
    c1.value = height.height;
    c2.value = _undefined2.value;
    if (0 === height.height) {
      c4.value = false;
    } else if (_undefined3.value) {
      c6.value = false;
    }
    _undefined4(height);
  };
  const items32 = [tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131];
  pnpm_indexTsx11.__closure = items32;
  pnpm_indexTsx11.__workletHash = 14122736630160;
  pnpm_indexTsx11.__initData = tmp123;
  const items33 = [str, tmp26Result, tmp26Result9, flag, tmp26Result11];
  const tmp4Result5 = tmp4(tmp5[10]);
  tmp4Result5.useSmoothKeyboardHandler(obj18, items33);
  const items34 = [update, tmp26Result13];
  const tmp26Result16 = update(sharedValue(function*(arg0, value) {
    let c2;
    let closure_0;
    function pnpm_indexTsx12Factory(items) {
      let tmp;
      let tmp2;
      [tmp, tmp2] = items;
      function pnpm_indexTsx12() {
        closure_1_0();
      }
      items = [tmp2];
      pnpm_indexTsx12.__closure = items;
      pnpm_indexTsx12.__workletHash = 7757709136003;
      pnpm_indexTsx12.__initData = tmp;
      return pnpm_indexTsx12;
    }
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            ref = 1;
            c3 = 1;
            const obj4 = { value: update(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          let items = [closure_1_22, closure_129_6];
          const obj = tmp(ref[3]);
          obj.runOnUI(pnpm_indexTsx12Factory(items))();
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c3 = 3;
        throw tmp12;
      }
    }
  }), items34);
  react = tmp26Result16;
  const items35 = [tmp26Result16];
  closure_6(arg1, () => {
    const current = ref.current;
    if (current) {
      current.assureFocusedInputVisible = () => {
        closure_1_8();
      };
      return current;
    } else {
      return {
        assureFocusedInputVisible() {
            closure_1_8();
          }
      };
    }
  }, items35);
  const items36 = [num];
  sharedValue13(() => {
    closure_8();
  }, items36);
  const items37 = [closure_23, input];
  [tmp136, tmp137] = items37;
  function pnpm_indexTsx13() {
    return _undefined.value;
  }
  const items38 = [tmp137];
  pnpm_indexTsx13.__closure = items38;
  pnpm_indexTsx13.__workletHash = 3093815688588;
  pnpm_indexTsx13.__initData = tmp136;
  const items39 = [closure_24, tmp26Result13];
  [tmp138, tmp139] = items39;
  function pnpm_indexTsx14(target, target2) {
    target = undefined;
    if (target != null) {
      target = target.target;
    }
    let target1;
    if (target2 != null) {
      target1 = target2.target;
    }
    let tmp3 = target === target1;
    if (tmp3) {
      let height;
      if (target != null) {
        height = target.layout.height;
      }
      let height1;
      if (target2 != null) {
        height1 = target2.layout.height;
      }
      tmp3 = height !== height1;
    }
    if (tmp3) {
      _undefined();
    }
  }
  const items40 = [tmp139];
  pnpm_indexTsx14.__closure = items40;
  pnpm_indexTsx14.__workletHash = 15853710538437;
  pnpm_indexTsx14.__initData = tmp138;
  const tmp4Result6 = tmp4(tmp5[3]);
  const animatedReaction = tmp4Result6.useAnimatedReaction(pnpm_indexTsx13, pnpm_indexTsx14, []);
  const items41 = [closure_25, flag2, sharedValue2];
  [tmp141, tmp142, tmp143] = items41;
  function pnpm_indexTsx15() {
    let num = 0;
    if (c0) {
      num = _undefined.value;
    }
    return num;
  }
  const items42 = [tmp142, tmp143];
  pnpm_indexTsx15.__closure = items42;
  pnpm_indexTsx15.__workletHash = 17413275670323;
  pnpm_indexTsx15.__initData = tmp141;
  const items43 = [flag2];
  const tmp4Result7 = tmp4(tmp5[3]);
  const derivedValue = tmp4Result7.useDerivedValue(pnpm_indexTsx15, items43);
  tmp4(tmp5[3]);
  const items44 = [closure_26, flag2, str, sharedValue2];
  let c0;
  let c1;
  let c2;
  [tmp146, tmp147, tmp148, tmp149] = items44;
  function pnpm_indexTsx16() {
    const tmp = c0;
    if (tmp) {
      return {};
    }
  }
  const items45 = [tmp147, tmp148, tmp149];
  pnpm_indexTsx16.__closure = items45;
  pnpm_indexTsx16.__workletHash = 6930534251701;
  pnpm_indexTsx16.__initData = tmp146;
  const items46 = [flag2, str];
  if ("layout" === str) {
    const obj19 = { ref: tmp9, scrollEventThrottle: 16, onLayout: tmp28, children: items47 };
    let merged1 = Object.assign(merged);
    items47 = [children, ];
    const tmp157 = closure_10;
    if (flag2) {
      const obj20 = { style: tmp150 };
      flag2 = closure_9(tmp8(tmp5[3]).View, obj20);
    }
    items47[1] = flag2;
    tmp157Result = tmp157(ScrollView, obj19);
  } else {
    const obj21 = { ref: tmp9, bottomPadding: derivedValue, scrollEventThrottle: 16, ScrollViewComponent: ScrollView, onLayout: tmp28, children };
    const tmp8Result = animatedRef(tmp5[11]);
    const merged2 = Object.assign(merged);
    let num3 = 16;
    tmp157Result = closure_9(tmp8Result, obj21);
  }
  return tmp157Result;
});
