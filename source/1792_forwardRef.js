// Module ID: 1792
// Function ID: 19839
// Name: forwardRef
// Dependencies: []

// Module 1792 (forwardRef)
let forwardRef;
let closure_3 = ["<string:695675>", "<string:1027403>", "<string:747943>", "<string:11080677>", "<string:14287177>", "<string:16332578>", "<string:716088946>", "<string:4291072000>", "<string:2976150016>"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
({ useCallback: closure_6, useEffect: closure_7, useImperativeHandle: closure_8, useMemo: closure_9, forwardRef } = arg1(dependencyMap[2]));
let closure_10 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[3]));
let closure_13 = { code: "function pnpm_indexTsx1(e,animated=false){const{enabled,layout,scrollViewTarget,height,keyboardHeight,bottomOffset,interpolate,initialKeyboardSize,scrollDistanceWithRespectToSnapPoints,scrollPosition,snapToOffsets,scrollTo,scrollViewAnimatedRef,scrollViewPageY}=this.__closure;var _layout$value,_layout$value2,_layout$value3;if(!enabled){return 0;}if(((_layout$value=layout.value)===null||_layout$value===void 0?void 0:_layout$value.parentScrollViewTarget)!==scrollViewTarget.value){return 0;}const visibleRect=height-keyboardHeight.value;const absoluteY=((_layout$value2=layout.value)===null||_layout$value2===void 0?void 0:_layout$value2.layout.absoluteY)||0;const inputHeight=((_layout$value3=layout.value)===null||_layout$value3===void 0?void 0:_layout$value3.layout.height)||0;const point=absoluteY+inputHeight;if(visibleRect-point<=bottomOffset){const relativeScrollTo=keyboardHeight.value-(height-point)+bottomOffset;const interpolatedScrollTo=interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[0,scrollDistanceWithRespectToSnapPoints(relativeScrollTo+scrollPosition.value,snapToOffsets)-scrollPosition.value]);const targetScrollY=Math.max(interpolatedScrollTo,0)+scrollPosition.value;scrollTo(scrollViewAnimatedRef,0,targetScrollY,animated);return interpolatedScrollTo;}if(point<scrollViewPageY.value){const positionOnScreen=visibleRect-bottomOffset;const topOfScreen=scrollPosition.value+point;scrollTo(scrollViewAnimatedRef,0,topOfScreen-positionOnScreen,animated);}return 0;}" };
let closure_14 = { code: "function pnpm_indexTsx2(e){const{mode,keyboardWillAppear,ghostViewSpace,scrollTo,scrollViewAnimatedRef,scrollPosition,interpolate,initialKeyboardSize,keyboardHeight}=this.__closure;if(mode===\"layout\"){return false;}if(!keyboardWillAppear.value&&ghostViewSpace.value>0){scrollTo(scrollViewAnimatedRef,0,scrollPosition.value-interpolate(e,[initialKeyboardSize.value,keyboardHeight.value],[ghostViewSpace.value,0]),false);return true;}return false;}" };
let closure_15 = { code: "function pnpm_indexTsx3(newPosition){const{scrollPosition,maybeScroll,keyboardHeight}=this.__closure;const prevScroll=scrollPosition.value;scrollPosition.value=newPosition;maybeScroll(keyboardHeight.value,true);scrollPosition.value=prevScroll;}" };
let closure_16 = { code: "function pnpm_indexTsx4(e){const{interpolate,keyboardHeight,extraKeyboardSpace,currentKeyboardFrameHeight}=this.__closure;const keyboardFrame=interpolate(e.height,[0,keyboardHeight.value],[0,keyboardHeight.value+extraKeyboardSpace]);currentKeyboardFrameHeight.value=keyboardFrame;}" };
let closure_17 = { code: "function pnpm_indexTsx5(){const{lastSelection,input,layout,clamp}=this.__closure;var _lastSelection$value,_input$value;const customHeight=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.selection.end.y;if(!((_input$value=input.value)!==null&&_input$value!==void 0&&_input$value.layout)||!customHeight){return false;}layout.value={...input.value,layout:{...input.value.layout,height:clamp(customHeight,0,input.value.layout.height)}};return true;}" };
let closure_18 = { code: "function pnpm_indexTsx6(){const{layout,updateLayoutFromSelection,performScrollWithPositionRestoration,position}=this.__closure;const prevLayout=layout.value;if(!updateLayoutFromSelection()){return;}performScrollWithPositionRestoration(position.value);layout.value=prevLayout;}" };
let closure_19 = { code: "function pnpm_indexTsx7(){const{scrollFromCurrentPosition}=this.__closure;scrollFromCurrentPosition();}" };
let closure_20 = { code: "function pnpm_indexTsx8(e){const{lastSelection,selectionUpdatedSinceHide,pendingSelectionForFocus,updateLayoutFromSelection,keyboardWillAppear,keyboardHeight,position,maybeScroll,scrollFromCurrentPosition,onChangeTextHandler}=this.__closure;var _lastSelection$value,_lastSelection$value2;const lastTarget=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target;const latestSelection=(_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.selection;lastSelection.value=e;selectionUpdatedSinceHide.value=true;if(e.target!==lastTarget||pendingSelectionForFocus.value){if(pendingSelectionForFocus.value){pendingSelectionForFocus.value=false;updateLayoutFromSelection();if(!keyboardWillAppear.value&&keyboardHeight.value>0){position.value+=maybeScroll(keyboardHeight.value,true);}}return;}if(e.selection.end.position===e.selection.start.position&&(latestSelection===null||latestSelection===void 0?void 0:latestSelection.end.y)!==e.selection.end.y){return scrollFromCurrentPosition();}if(e.selection.start.position!==e.selection.end.position){return scrollFromCurrentPosition();}onChangeTextHandler();}" };
let closure_21 = { code: "function pnpm_indexTsx9(e){const{keyboardHeight,keyboardWillAppear,tag,initialKeyboardSize,scrollPosition,scrollBeforeKeyboardMovement,pendingSelectionForFocus,position,mode,syncKeyboardFrame,lastSelection,selectionUpdatedSinceHide,updateLayoutFromSelection,input,layout,maybeScroll,ghostViewSpace,scrollViewLayout,scrollViewContentSize}=this.__closure;const keyboardWillChangeSize=keyboardHeight.value!==e.height&&e.height>0;keyboardWillAppear.value=e.height>0&&keyboardHeight.value===0;const keyboardWillHide=e.height===0;const focusWasChanged=tag.value!==e.target&&e.target!==-1||keyboardWillChangeSize;if(keyboardWillChangeSize){initialKeyboardSize.value=keyboardHeight.value;}if(keyboardWillHide){initialKeyboardSize.value=0;scrollPosition.value=scrollBeforeKeyboardMovement.value;pendingSelectionForFocus.value=false;}if(keyboardWillAppear.value||keyboardWillChangeSize||focusWasChanged){scrollPosition.value=position.value;keyboardHeight.value=e.height;if(mode===\"insets\"){syncKeyboardFrame(e);}}if(focusWasChanged){var _lastSelection$value;tag.value=e.target;if(((_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target)===e.target&&selectionUpdatedSinceHide.value){updateLayoutFromSelection();pendingSelectionForFocus.value=false;}else{var _lastSelection$value2;if(((_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.target)===e.target){updateLayoutFromSelection();}else if(input.value){layout.value=input.value;}pendingSelectionForFocus.value=true;}scrollBeforeKeyboardMovement.value=position.value;}if(focusWasChanged&&!keyboardWillAppear.value){if(!pendingSelectionForFocus.value){position.value+=maybeScroll(e.height,true);}}if(mode===\"insets\"){ghostViewSpace.value=position.value+scrollViewLayout.value.height-scrollViewContentSize.value.height;if(ghostViewSpace.value>0){scrollPosition.value=position.value;}}}" };
let closure_22 = { code: "function pnpm_indexTsx10(e){const{removeGhostPadding,mode,syncKeyboardFrame,disableScrollOnKeyboardHide,keyboardWillAppear,maybeScroll}=this.__closure;if(removeGhostPadding(e.height)){return;}if(mode===\"layout\"){syncKeyboardFrame(e);}if(!disableScrollOnKeyboardHide||keyboardWillAppear.value){maybeScroll(e.height);}}" };
let closure_23 = { code: "function pnpm_indexTsx11(e){const{removeGhostPadding,keyboardHeight,scrollPosition,position,selectionUpdatedSinceHide,keyboardWillAppear,pendingSelectionForFocus,syncKeyboardFrame}=this.__closure;removeGhostPadding(e.height);keyboardHeight.value=e.height;scrollPosition.value=position.value;if(e.height===0){selectionUpdatedSinceHide.value=false;}else if(keyboardWillAppear.value){pendingSelectionForFocus.value=false;}syncKeyboardFrame(e);}" };
let closure_24 = { code: "function pnpm_indexTsx12(){const{scrollFromCurrentPosition}=this.__closure;scrollFromCurrentPosition();}" };
let closure_25 = { code: "function pnpm_indexTsx13(){const{input}=this.__closure;return input.value;}" };
let closure_26 = { code: "function pnpm_indexTsx14(current,previous){const{scrollFromCurrentPosition}=this.__closure;if((current===null||current===void 0?void 0:current.target)===(previous===null||previous===void 0?void 0:previous.target)&&(current===null||current===void 0?void 0:current.layout.height)!==(previous===null||previous===void 0?void 0:previous.layout.height)){scrollFromCurrentPosition();}}" };
let closure_27 = { code: "function pnpm_indexTsx15(){const{enabled,currentKeyboardFrameHeight}=this.__closure;return enabled?currentKeyboardFrameHeight.value:0;}" };
let closure_28 = { code: "function pnpm_indexTsx16(){const{enabled,mode,currentKeyboardFrameHeight}=this.__closure;return enabled&&mode===\"layout\"?{paddingBottom:currentKeyboardFrameHeight.value+1}:{};}" };

export default forwardRef((bottomOffset) => {
  let children;
  let onLayout;
  ({ children, onLayout } = bottomOffset);
  const arg1 = onLayout;
  bottomOffset = bottomOffset.bottomOffset;
  let num = 0;
  if (undefined !== bottomOffset) {
    num = bottomOffset;
  }
  const importDefault = num;
  const disableScrollOnKeyboardHide = bottomOffset.disableScrollOnKeyboardHide;
  const dependencyMap = tmp;
  const enabled = bottomOffset.enabled;
  let tmp2 = undefined === enabled || enabled;
  let closure_3 = tmp2;
  const extraKeyboardSpace = bottomOffset.extraKeyboardSpace;
  let num2 = 0;
  if (undefined !== extraKeyboardSpace) {
    num2 = extraKeyboardSpace;
  }
  const callback = num2;
  const mode = bottomOffset.mode;
  let str = "insets";
  if (undefined !== mode) {
    str = mode;
  }
  const callback2 = str;
  let ScrollView = bottomOffset.ScrollViewComponent;
  if (undefined === ScrollView) {
    ScrollView = importDefault(dependencyMap[4]).ScrollView;
  }
  const snapToOffsets = bottomOffset.snapToOffsets;
  const tmp5 = callback2(bottomOffset, closure_3);
  let obj = arg1(dependencyMap[4]);
  const animatedRef = obj.useAnimatedRef();
  const ref = React.useRef(null);
  const tmp8 = importDefault(dependencyMap[5])(animatedRef, ref);
  let obj1 = arg1(dependencyMap[4]);
  const sharedValue = obj1.useSharedValue(null);
  let obj2 = arg1(dependencyMap[4]);
  const sharedValue1 = obj2.useSharedValue(0);
  const React = sharedValue1;
  const tmp11 = importDefault(dependencyMap[6])(animatedRef);
  const offset = tmp11.offset;
  const layout = tmp11.layout;
  const size = tmp11.size;
  let closure_13 = size;
  let obj3 = arg1(dependencyMap[4]);
  const sharedValue2 = obj3.useSharedValue(0);
  let closure_14 = sharedValue2;
  let obj4 = arg1(dependencyMap[4]);
  const sharedValue3 = obj4.useSharedValue(0);
  let closure_15 = sharedValue3;
  let obj5 = arg1(dependencyMap[4]);
  const sharedValue4 = obj5.useSharedValue(false);
  let closure_16 = sharedValue4;
  let obj6 = arg1(dependencyMap[4]);
  const sharedValue5 = obj6.useSharedValue(-1);
  let closure_17 = sharedValue5;
  let obj7 = arg1(dependencyMap[4]);
  const sharedValue6 = obj7.useSharedValue(0);
  let closure_18 = sharedValue6;
  let obj8 = arg1(dependencyMap[4]);
  const sharedValue7 = obj8.useSharedValue(0);
  let closure_19 = sharedValue7;
  let obj9 = arg1(dependencyMap[7]);
  const reanimatedFocusedInput = obj9.useReanimatedFocusedInput();
  const input = reanimatedFocusedInput.input;
  let closure_20 = input;
  const update = reanimatedFocusedInput.update;
  let closure_21 = update;
  let obj10 = arg1(dependencyMap[4]);
  const sharedValue8 = obj10.useSharedValue(null);
  let closure_22 = sharedValue8;
  let obj11 = arg1(dependencyMap[4]);
  const sharedValue9 = obj11.useSharedValue(null);
  let closure_23 = sharedValue9;
  const sharedValue10 = arg1(dependencyMap[4]).useSharedValue(-1);
  let closure_24 = sharedValue10;
  const obj13 = arg1(dependencyMap[4]);
  const sharedValue11 = arg1(dependencyMap[4]).useSharedValue(false);
  let closure_25 = sharedValue11;
  const obj14 = arg1(dependencyMap[4]);
  const sharedValue12 = arg1(dependencyMap[4]).useSharedValue(false);
  let closure_26 = sharedValue12;
  const obj15 = arg1(dependencyMap[4]);
  const sharedValue13 = arg1(dependencyMap[4]).useSharedValue(0);
  let closure_27 = sharedValue13;
  const obj16 = arg1(dependencyMap[4]);
  const height = arg1(dependencyMap[7]).useWindowDimensions().height;
  let closure_28 = height;
  const items = [onLayout];
  const tmp25 = snapToOffsets(() => {
    let closure_0 = num2(async (arg0) => {
      const findNodeHandleResult = callback(closure_2[8]).findNodeHandle(ref.current);
      closure_9.value = findNodeHandleResult;
      if (null != callback) {
        callback(arg0);
      }
      if (null !== findNodeHandleResult) {
        const KeyboardControllerNative = callback(closure_2[9]).KeyboardControllerNative;
        closure_27.value = yield KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult).y;
      }
    });
    return function(arg0) {
      return callback(...arguments);
    };
  }(), items);
  /* worklet (recovered source) */ function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}
  obj = { enabled: tmp2, layout: sharedValue8, scrollViewTarget: sharedValue, height, keyboardHeight: sharedValue3, bottomOffset: num, interpolate: arg1(dependencyMap[4]).interpolate, initialKeyboardSize: sharedValue6, scrollDistanceWithRespectToSnapPoints: arg1(dependencyMap[10]).scrollDistanceWithRespectToSnapPoints, scrollPosition: sharedValue1, snapToOffsets, scrollTo: arg1(dependencyMap[4]).scrollTo, scrollViewAnimatedRef: animatedRef, scrollViewPageY: sharedValue13 };
  pnpm_indexTsx1.__closure = obj;
  pnpm_indexTsx1.__workletHash = 1454504363777;
  pnpm_indexTsx1.__initData = closure_13;
  const items1 = [num, tmp2, height, snapToOffsets];
  const tmp26 = snapToOffsets(pnpm_indexTsx1, items1);
  /* worklet (recovered source) */ function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}
  obj = { mode: str, keyboardWillAppear: sharedValue4, ghostViewSpace: sharedValue10, scrollTo: arg1(dependencyMap[4]).scrollTo, scrollViewAnimatedRef: animatedRef, scrollPosition: sharedValue1, interpolate: arg1(dependencyMap[4]).interpolate, initialKeyboardSize: sharedValue6, keyboardHeight: sharedValue3 };
  pnpm_indexTsx2.__closure = obj;
  pnpm_indexTsx2.__workletHash = 17351526068375;
  pnpm_indexTsx2.__initData = closure_14;
  const items2 = [str];
  const tmp27 = snapToOffsets(pnpm_indexTsx2, items2);
  /* worklet (recovered source) */ function pnpm_indexTsx3(){const{textWidth,parentWidth}=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;}
  pnpm_indexTsx3.__closure = { scrollPosition: sharedValue1, maybeScroll: tmp26, keyboardHeight: sharedValue3 };
  pnpm_indexTsx3.__workletHash = 1481901193395;
  pnpm_indexTsx3.__initData = closure_15;
  const items3 = [sharedValue1, sharedValue3, tmp26];
  const tmp28 = snapToOffsets(pnpm_indexTsx3, items3);
  /* worklet (recovered source) */ function pnpm_indexTsx4(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);}
  obj1 = { interpolate: arg1(dependencyMap[4]).interpolate, keyboardHeight: sharedValue3, extraKeyboardSpace: num2, currentKeyboardFrameHeight: sharedValue2 };
  pnpm_indexTsx4.__closure = obj1;
  pnpm_indexTsx4.__workletHash = 6643520179794;
  pnpm_indexTsx4.__initData = closure_16;
  const items4 = [num2];
  const tmp29 = snapToOffsets(pnpm_indexTsx4, items4);
  /* worklet (recovered source) */ function pnpm_indexTsx5(){const{lastSelection,input,layout,clamp}=this.__closure;var _lastSelection$value,_input$value;const customHeight=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.selection.end.y;if(!((_input$value=input.value)!==null&&_input$value!==void 0&&_input$value.layout)||!customHeight){return false;}layout.value={...input.value,layout:{...input.value.layout,height:clamp(customHeight,0,input.value.layout.height)}};return true;}
  obj2 = { lastSelection: sharedValue9, input, layout: sharedValue8, clamp: arg1(dependencyMap[4]).clamp };
  pnpm_indexTsx5.__closure = obj2;
  pnpm_indexTsx5.__workletHash = 619310634941;
  pnpm_indexTsx5.__initData = closure_17;
  const items5 = [input, sharedValue9, sharedValue8];
  const tmp30 = snapToOffsets(pnpm_indexTsx5, items5);
  /* worklet (recovered source) */ function pnpm_indexTsx6(){const{layout,updateLayoutFromSelection,performScrollWithPositionRestoration,position}=this.__closure;const prevLayout=layout.value;if(!updateLayoutFromSelection()){return;}performScrollWithPositionRestoration(position.value);layout.value=prevLayout;}
  pnpm_indexTsx6.__closure = { layout: sharedValue8, updateLayoutFromSelection: tmp30, performScrollWithPositionRestoration: tmp28, position: offset };
  pnpm_indexTsx6.__workletHash = 11406147562112;
  pnpm_indexTsx6.__initData = closure_18;
  const items6 = [tmp28];
  const tmp31 = snapToOffsets(pnpm_indexTsx6, items6);
  /* worklet (recovered source) */ function pnpm_indexTsx7(){const{scrollFromCurrentPosition}=this.__closure;scrollFromCurrentPosition();}
  pnpm_indexTsx7.__closure = { scrollFromCurrentPosition: tmp31 };
  pnpm_indexTsx7.__workletHash = 1300972162638;
  pnpm_indexTsx7.__initData = closure_19;
  const items7 = [tmp31];
  const tmp32 = snapToOffsets(pnpm_indexTsx7, items7);
  const items8 = [tmp32];
  const tmp33 = sharedValue(() => onLayout(tmp[10]).debounce(tmp32, 200), items8);
  /* worklet (recovered source) */ function pnpm_indexTsx8(e){const{lastSelection,selectionUpdatedSinceHide,pendingSelectionForFocus,updateLayoutFromSelection,keyboardWillAppear,keyboardHeight,position,maybeScroll,scrollFromCurrentPosition,onChangeTextHandler}=this.__closure;var _lastSelection$value,_lastSelection$value2;const lastTarget=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target;const latestSelection=(_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.selection;lastSelection.value=e;selectionUpdatedSinceHide.value=true;if(e.target!==lastTarget||pendingSelectionForFocus.value){if(pendingSelectionForFocus.value){pendingSelectionForFocus.value=false;updateLayoutFromSelection();if(!keyboardWillAppear.value&&keyboardHeight.value>0){position.value+=maybeScroll(keyboardHeight.value,true);}}return;}if(e.selection.end.position===e.selection.start.position&&(latestSelection===null||latestSelection===void 0?void 0:latestSelection.end.y)!==e.selection.end.y){return scrollFromCurrentPosition();}if(e.selection.start.position!==e.selection.end.position){return scrollFromCurrentPosition();}onChangeTextHandler();}
  pnpm_indexTsx8.__closure = { lastSelection: sharedValue9, selectionUpdatedSinceHide: sharedValue12, pendingSelectionForFocus: sharedValue11, updateLayoutFromSelection: tmp30, keyboardWillAppear: sharedValue4, keyboardHeight: sharedValue3, position: offset, maybeScroll: tmp26, scrollFromCurrentPosition: tmp31, onChangeTextHandler: tmp33 };
  pnpm_indexTsx8.__workletHash = 7363285427351;
  pnpm_indexTsx8.__initData = closure_20;
  const items9 = [tmp31, tmp33, tmp30, tmp26];
  const tmp34 = snapToOffsets(pnpm_indexTsx8, items9);
  const obj17 = arg1(dependencyMap[7]);
  const items10 = [tmp34];
  arg1(dependencyMap[7]).useFocusedInputHandler({ onSelectionChange: tmp34 }, items10);
  const obj22 = arg1(dependencyMap[7]);
  /* worklet (recovered source) */ function pnpm_indexTsx9(e){const{keyboardHeight,keyboardWillAppear,tag,initialKeyboardSize,scrollPosition,scrollBeforeKeyboardMovement,pendingSelectionForFocus,position,mode,syncKeyboardFrame,lastSelection,selectionUpdatedSinceHide,updateLayoutFromSelection,input,layout,maybeScroll,ghostViewSpace,scrollViewLayout,scrollViewContentSize}=this.__closure;const keyboardWillChangeSize=keyboardHeight.value!==e.height&&e.height>0;keyboardWillAppear.value=e.height>0&&keyboardHeight.value===0;const keyboardWillHide=e.height===0;const focusWasChanged=tag.value!==e.target&&e.target!==-1||keyboardWillChangeSize;if(keyboardWillChangeSize){initialKeyboardSize.value=keyboardHeight.value;}if(keyboardWillHide){initialKeyboardSize.value=0;scrollPosition.value=scrollBeforeKeyboardMovement.value;pendingSelectionForFocus.value=false;}if(keyboardWillAppear.value||keyboardWillChangeSize||focusWasChanged){scrollPosition.value=position.value;keyboardHeight.value=e.height;if(mode==="insets"){syncKeyboardFrame(e);}}if(focusWasChanged){var _lastSelection$value;tag.value=e.target;if(((_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.target)===e.target&&selectionUpdatedSinceHide.value){updateLayoutFromSelection();pendingSelectionForFocus.value=false;}else{var _lastSelection$value2;if(((_lastSelection$value2=lastSelection.value)===null||_lastSelection$value2===void 0?void 0:_lastSelection$value2.target)===e.target){updateLayoutFromSelection();}else if(input.value){layout.value=input.value;}pendingSelectionForFocus.value=true;}scrollBeforeKeyboardMovement.value=position.value;}if(focusWasChanged&&!keyboardWillAppear.value){if(!pendingSelectionForFocus.value){position.value+=maybeScroll(e.height,true);}}if(mode==="insets"){ghostViewSpace.value=position.value+scrollViewLayout.value.height-scrollViewContentSize.value.height;if(ghostViewSpace.value>0){scrollPosition.value=position.value;}}}
  obj3 = { keyboardHeight: sharedValue3, keyboardWillAppear: sharedValue4, tag: sharedValue5, initialKeyboardSize: sharedValue6, scrollPosition: sharedValue1, scrollBeforeKeyboardMovement: sharedValue7, pendingSelectionForFocus: sharedValue11, position: offset, mode: str, syncKeyboardFrame: tmp29, lastSelection: sharedValue9, selectionUpdatedSinceHide: sharedValue12, updateLayoutFromSelection: tmp30, input, layout: sharedValue8, maybeScroll: tmp26, ghostViewSpace: sharedValue10, scrollViewLayout: layout, scrollViewContentSize: size };
  pnpm_indexTsx9.__closure = obj3;
  pnpm_indexTsx9.__workletHash = 4279285643383;
  pnpm_indexTsx9.__initData = closure_21;
  /* worklet (recovered source) */ function pnpm_indexTsx10(e){const{removeGhostPadding,mode,syncKeyboardFrame,disableScrollOnKeyboardHide,keyboardWillAppear,maybeScroll}=this.__closure;if(removeGhostPadding(e.height)){return;}if(mode==="layout"){syncKeyboardFrame(e);}if(!disableScrollOnKeyboardHide||keyboardWillAppear.value){maybeScroll(e.height);}}
  obj4 = { removeGhostPadding: tmp27, mode: str, syncKeyboardFrame: tmp29, disableScrollOnKeyboardHide: undefined !== disableScrollOnKeyboardHide && disableScrollOnKeyboardHide, keyboardWillAppear: sharedValue4, maybeScroll: tmp26 };
  pnpm_indexTsx10.__closure = obj4;
  pnpm_indexTsx10.__workletHash = 15263617220981;
  pnpm_indexTsx10.__initData = closure_22;
  /* worklet (recovered source) */ function pnpm_indexTsx11(e){const{removeGhostPadding,keyboardHeight,scrollPosition,position,selectionUpdatedSinceHide,keyboardWillAppear,pendingSelectionForFocus,syncKeyboardFrame}=this.__closure;removeGhostPadding(e.height);keyboardHeight.value=e.height;scrollPosition.value=position.value;if(e.height===0){selectionUpdatedSinceHide.value=false;}else if(keyboardWillAppear.value){pendingSelectionForFocus.value=false;}syncKeyboardFrame(e);}
  pnpm_indexTsx11.__closure = { removeGhostPadding: tmp27, keyboardHeight: sharedValue3, scrollPosition: sharedValue1, position: offset, selectionUpdatedSinceHide: sharedValue12, keyboardWillAppear: sharedValue4, pendingSelectionForFocus: sharedValue11, syncKeyboardFrame: tmp29 };
  pnpm_indexTsx11.__workletHash = 15672596601321;
  pnpm_indexTsx11.__initData = closure_23;
  const items11 = [str, tmp26, tmp27, undefined !== disableScrollOnKeyboardHide && disableScrollOnKeyboardHide, tmp29];
  arg1(dependencyMap[11]).useSmoothKeyboardHandler({ onStart: pnpm_indexTsx9, onMove: pnpm_indexTsx10, onEnd: pnpm_indexTsx11 }, items11);
  const items12 = [update, tmp31];
  const tmp37 = snapToOffsets(callback(async () => {
    yield closure_21();
    let obj = callback(closure_2[4]);
    /* worklet (recovered source) */ function pnpm_indexTsx12(){const{scrollFromCurrentPosition}=this.__closure;scrollFromCurrentPosition();}
    obj = { scrollFromCurrentPosition: closure_34 };
    pnpm_indexTsx12.__closure = obj;
    pnpm_indexTsx12.__workletHash = 15498084251450;
    pnpm_indexTsx12.__initData = closure_24;
    obj.runOnUI(pnpm_indexTsx12)();
  }), items12);
  const items13 = [tmp37];
  ref(arg1, () => {
    const current = ref.current;
    if (current) {
      current.assureFocusedInputVisible = () => {
        callback();
      };
      return current;
    } else {
      const obj = {
        assureFocusedInputVisible() {
            callback();
          }
      };
      return obj;
    }
  }, items13);
  const items14 = [num];
  animatedRef(() => {
    tmp37();
  }, items14);
  const obj23 = arg1(dependencyMap[11]);
  /* worklet (recovered source) */ function pnpm_indexTsx13(){const{input}=this.__closure;return input.value;}
  pnpm_indexTsx13.__closure = { input };
  pnpm_indexTsx13.__workletHash = 11096167186933;
  pnpm_indexTsx13.__initData = closure_25;
  /* worklet (recovered source) */ function pnpm_indexTsx14(current,previous){const{scrollFromCurrentPosition}=this.__closure;if((current===null||current===void 0?void 0:current.target)===(previous===null||previous===void 0?void 0:previous.target)&&(current===null||current===void 0?void 0:current.layout.height)!==(previous===null||previous===void 0?void 0:previous.layout.height)){scrollFromCurrentPosition();}}
  pnpm_indexTsx14.__closure = { scrollFromCurrentPosition: tmp31 };
  pnpm_indexTsx14.__workletHash = 5468543936636;
  pnpm_indexTsx14.__initData = closure_26;
  const animatedReaction = arg1(dependencyMap[4]).useAnimatedReaction(pnpm_indexTsx13, pnpm_indexTsx14, []);
  const obj26 = arg1(dependencyMap[4]);
  /* worklet (recovered source) */ function pnpm_indexTsx15(){const{enabled,currentKeyboardFrameHeight}=this.__closure;return enabled?currentKeyboardFrameHeight.value:0;}
  obj5 = { enabled: tmp2, currentKeyboardFrameHeight: sharedValue2 };
  pnpm_indexTsx15.__closure = obj5;
  pnpm_indexTsx15.__workletHash = 7351587309738;
  pnpm_indexTsx15.__initData = closure_27;
  const items15 = [tmp2];
  const derivedValue = arg1(dependencyMap[4]).useDerivedValue(pnpm_indexTsx15, items15);
  arg1(dependencyMap[4]);
  /* worklet (recovered source) */ function pnpm_indexTsx16(){const{enabled,mode,currentKeyboardFrameHeight}=this.__closure;return enabled&&mode==="layout"?{paddingBottom:currentKeyboardFrameHeight.value+1}:{};}
  obj6 = { enabled: tmp2, mode: str, currentKeyboardFrameHeight: sharedValue2 };
  pnpm_indexTsx16.__closure = obj6;
  pnpm_indexTsx16.__workletHash = 9098994865676;
  pnpm_indexTsx16.__initData = closure_28;
  const items16 = [tmp2, str];
  if ("layout" === str) {
    obj7 = { ref: tmp8 };
    obj8 = { scrollEventThrottle: 16, onLayout: tmp25 };
    const items17 = [children, ];
    if (tmp2) {
      obj9 = { style: tmp43 };
      tmp2 = offset(importDefault(dependencyMap[4]).View, obj9);
    }
    items17[1] = tmp2;
    obj8.children = items17;
    let tmp50Result = layout(ScrollView, Object.assign(obj7, tmp5, obj8));
    const tmp50 = layout;
  } else {
    const _Object = Object;
    obj10 = { ref: tmp8 };
    obj11 = { bottomPadding: derivedValue, scrollEventThrottle: 16, ScrollViewComponent: ScrollView, onLayout: tmp25, children };
    tmp50Result = offset(importDefault(dependencyMap[12]), Object.assign(obj10, tmp5, obj11));
    const tmp47 = importDefault(dependencyMap[12]);
  }
  return tmp50Result;
});
