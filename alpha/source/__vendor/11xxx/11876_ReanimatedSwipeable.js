// Module ID: 11876
// Function ID: 11877
// Name: ReanimatedSwipeable
// Dependencies: [109, 19, 17, 21, 1655, 1708, 11877, 5684, 5610]
// Exports: default

// Module 11876 (ReanimatedSwipeable)
import _modDef1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

let _undefined, _undefined2;

let I18nManager;
let Platform;
let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let str;
let str2;
let unpackModuleId;
let useEffect;
let closure_3 = ["ref", "leftThreshold", "rightThreshold", "enabled", "containerStyle", "childrenContainerStyle", "animationOptions", "overshootLeft", "overshootRight", "testID", "children", "enableTrackpadTwoFingerGesture", "dragOffsetFromLeft", "dragOffsetFromRight", "friction", "overshootFriction", "onSwipeableOpenStartDrag", "onSwipeableCloseStartDrag", "onSwipeableWillOpen", "onSwipeableWillClose", "onSwipeableOpen", "onSwipeableClose", "renderLeftActions", "renderRightActions", "simultaneousWith", "requireToFail", "block", "hitSlop"];
let react = react_mod;
({ useCallback: hasOwnProperty, useEffect, useImperativeHandle: metroRequire, useMemo: metroImportDefault, useRef: metroImportAll } = react);
react = react_mod;
({ I18nManager, Platform, StyleSheet, View: c9 } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = { code: "(function pnpm_ReanimatedSwipeableTsx4(){let[overshootLeft,leftWidth,overshootRight,rightWidth,rowState,userDrag,friction,appliedTranslation,interpolate,overshootFriction,showLeftProgress,showRightProgress]=this.__closure;var _overshootLeft,_overshootRight;const shouldOvershootLeft=(_overshootLeft=overshootLeft)!==null&&_overshootLeft!==void 0?_overshootLeft:leftWidth.value>0;const shouldOvershootRight=(_overshootRight=overshootRight)!==null&&_overshootRight!==void 0?_overshootRight:rightWidth.value>0;const startOffset=rowState.value===1?leftWidth.value:rowState.value===-1?-rightWidth.value:0;const offsetDrag=userDrag.value/friction+startOffset;appliedTranslation.value=interpolate(offsetDrag,[-rightWidth.value-1,-rightWidth.value,leftWidth.value,leftWidth.value+1],[-rightWidth.value-(shouldOvershootRight?1/overshootFriction:0),-rightWidth.value,leftWidth.value,leftWidth.value+(shouldOvershootLeft?1/overshootFriction:0)]);showLeftProgress.value=leftWidth.value>0?interpolate(appliedTranslation.value,[-1,0,leftWidth.value],[0,0,1]):0;showRightProgress.value=rightWidth.value>0?interpolate(appliedTranslation.value,[-rightWidth.value,0,1],[1,0,0]):0;})" };
let closure_13 = { code: "(function pnpm_ReanimatedSwipeableTsx5(fromValue,toValue){let[onSwipeableWillOpen,scheduleOnRN,SwipeDirection,onSwipeableWillClose]=this.__closure;if(onSwipeableWillOpen&&toValue!==0){scheduleOnRN(onSwipeableWillOpen,toValue>0?SwipeDirection.RIGHT:SwipeDirection.LEFT);}if(onSwipeableWillClose&&toValue===0){scheduleOnRN(onSwipeableWillClose,fromValue>0?SwipeDirection.LEFT:SwipeDirection.RIGHT);}})" };
let closure_14 = { code: "(function pnpm_ReanimatedSwipeableTsx6(fromValue,toValue){let[onSwipeableOpen,scheduleOnRN,SwipeDirection,onSwipeableClose]=this.__closure;if(onSwipeableOpen&&toValue!==0){scheduleOnRN(onSwipeableOpen,toValue>0?SwipeDirection.RIGHT:SwipeDirection.LEFT);}if(onSwipeableClose&&toValue===0){scheduleOnRN(onSwipeableClose,fromValue>0?SwipeDirection.LEFT:SwipeDirection.RIGHT);}})" };
let closure_15 = { code: "(function pnpm_ReanimatedSwipeableTsx7(isFinished){let[dispatchEndEvents,frozenRowState,toValue]=this.__closure;if(isFinished){dispatchEndEvents(frozenRowState,toValue);}})" };
let closure_16 = { code: "(function pnpm_ReanimatedSwipeableTsx8(toValue,velocityX=0){let[ReduceMotion,animationOptions,rowState,rightWidth,leftWidth,interpolate,appliedTranslation,withSpring,_worklet_10283843840439_init_data,dispatchEndEvents,showLeftProgress,showRightProgress,dispatchImmediateEvents,shouldEnableTap]=this.__closure;const translationSpringConfig={mass:2,damping:1000,stiffness:700,velocity:velocityX,overshootClamping:true,reduceMotion:ReduceMotion.System,...animationOptions};const isClosing=toValue===0;const moveToRight=isClosing?rowState.value<0:toValue>0;const usedWidth=isClosing?moveToRight?rightWidth.value:leftWidth.value:moveToRight?leftWidth.value:rightWidth.value;const progressSpringConfig={...translationSpringConfig,restDisplacementThreshold:0.01,restSpeedThreshold:0.01,velocity:velocityX&&interpolate(velocityX,[-usedWidth,usedWidth],[-1,1])};const frozenRowState=rowState.value;appliedTranslation.value=withSpring(toValue,translationSpringConfig,function pnpm_ReanimatedSwipeableTsx7Factory([_worklet_10283843840439_init_data,dispatchEndEvents,frozenRowState,toValue]){const pnpm_ReanimatedSwipeableTsx7=function(isFinished){if(isFinished){dispatchEndEvents(frozenRowState,toValue);}};pnpm_ReanimatedSwipeableTsx7.__closure=[dispatchEndEvents,frozenRowState,toValue];pnpm_ReanimatedSwipeableTsx7.__workletHash=10283843840439;pnpm_ReanimatedSwipeableTsx7.__initData=_worklet_10283843840439_init_data;return pnpm_ReanimatedSwipeableTsx7;}([_worklet_10283843840439_init_data,dispatchEndEvents,frozenRowState,toValue]));const progressTarget=toValue===0?0:1*Math.sign(toValue);showLeftProgress.value=withSpring(Math.max(progressTarget,0),progressSpringConfig);showRightProgress.value=withSpring(Math.max(-progressTarget,0),progressSpringConfig);dispatchImmediateEvents(frozenRowState,toValue);rowState.value=Math.sign(toValue);shouldEnableTap.value=rowState.value!==0;})" };
let closure_17 = { code: "(function pnpm_ReanimatedSwipeableTsx9(){let[measure,leftLayoutRef,leftWrapperLayoutRef,rightLayoutRef,leftWidth,rightWidth,rowWidth]=this.__closure;var _leftLayout$pageX,_leftWrapperLayout$pa,_rightLayout$pageX,_leftWrapperLayout$pa2;const leftLayout=measure(leftLayoutRef);const leftWrapperLayout=measure(leftWrapperLayoutRef);const rightLayout=measure(rightLayoutRef);leftWidth.value=((_leftLayout$pageX=leftLayout===null||leftLayout===void 0?void 0:leftLayout.pageX)!==null&&_leftLayout$pageX!==void 0?_leftLayout$pageX:0)-((_leftWrapperLayout$pa=leftWrapperLayout===null||leftWrapperLayout===void 0?void 0:leftWrapperLayout.pageX)!==null&&_leftWrapperLayout$pa!==void 0?_leftWrapperLayout$pa:0);rightWidth.value=rowWidth.value-((_rightLayout$pageX=rightLayout===null||rightLayout===void 0?void 0:rightLayout.pageX)!==null&&_rightLayout$pageX!==void 0?_rightLayout$pageX:rowWidth.value)+((_leftWrapperLayout$pa2=leftWrapperLayout===null||leftWrapperLayout===void 0?void 0:leftWrapperLayout.pageX)!==null&&_leftWrapperLayout$pa2!==void 0?_leftWrapperLayout$pa2:0);})" };
let closure_18 = { code: "(function pnpm_ReanimatedSwipeableTsx10(){let[animateRow]=this.__closure;animateRow(0);})" };
let closure_19 = { code: "(function close_Pnpm_ReanimatedSwipeableTsx11(){let[isWorkletRuntime,animateRow,scheduleOnUI,_worklet_5083608474645_init_data]=this.__closure;if(isWorkletRuntime()){animateRow(0);return;}scheduleOnUI(function close_Pnpm_ReanimatedSwipeableTsx11([_worklet_5083608474645_init_data,animateRow]){const pnpm_ReanimatedSwipeableTsx10=function(){animateRow(0);};pnpm_ReanimatedSwipeableTsx10.__closure=[animateRow];pnpm_ReanimatedSwipeableTsx10.__workletHash=5083608474645;pnpm_ReanimatedSwipeableTsx10.__initData=_worklet_5083608474645_init_data;return pnpm_ReanimatedSwipeableTsx10;}([_worklet_5083608474645_init_data,animateRow]));})" };
let closure_20 = { code: "(function pnpm_ReanimatedSwipeableTsx12(){let[updateElementWidths,animateRow,leftWidth]=this.__closure;updateElementWidths();animateRow(leftWidth.value);})" };
let closure_21 = { code: "(function openLeft_Pnpm_ReanimatedSwipeableTsx13(){let[isWorkletRuntime,updateElementWidths,animateRow,leftWidth,scheduleOnUI,_worklet_16079186854680_init_data]=this.__closure;if(isWorkletRuntime()){updateElementWidths();animateRow(leftWidth.value);return;}scheduleOnUI(function openLeft_Pnpm_ReanimatedSwipeableTsx13([_worklet_16079186854680_init_data,updateElementWidths,animateRow,leftWidth]){const pnpm_ReanimatedSwipeableTsx12=function(){updateElementWidths();animateRow(leftWidth.value);};pnpm_ReanimatedSwipeableTsx12.__closure=[updateElementWidths,animateRow,leftWidth];pnpm_ReanimatedSwipeableTsx12.__workletHash=16079186854680;pnpm_ReanimatedSwipeableTsx12.__initData=_worklet_16079186854680_init_data;return pnpm_ReanimatedSwipeableTsx12;}([_worklet_16079186854680_init_data,updateElementWidths,animateRow,leftWidth]));})" };
let closure_22 = { code: "(function pnpm_ReanimatedSwipeableTsx14(){let[updateElementWidths,animateRow,rightWidth]=this.__closure;updateElementWidths();animateRow(-rightWidth.value);})" };
let closure_23 = { code: "(function openRight_Pnpm_ReanimatedSwipeableTsx15(){let[isWorkletRuntime,updateElementWidths,animateRow,rightWidth,scheduleOnUI,_worklet_7359076028115_init_data]=this.__closure;if(isWorkletRuntime()){updateElementWidths();animateRow(-rightWidth.value);return;}scheduleOnUI(function openRight_Pnpm_ReanimatedSwipeableTsx15([_worklet_7359076028115_init_data,updateElementWidths,animateRow,rightWidth]){const pnpm_ReanimatedSwipeableTsx14=function(){updateElementWidths();animateRow(-rightWidth.value);};pnpm_ReanimatedSwipeableTsx14.__closure=[updateElementWidths,animateRow,rightWidth];pnpm_ReanimatedSwipeableTsx14.__workletHash=7359076028115;pnpm_ReanimatedSwipeableTsx14.__initData=_worklet_7359076028115_init_data;return pnpm_ReanimatedSwipeableTsx14;}([_worklet_7359076028115_init_data,updateElementWidths,animateRow,rightWidth]));})" };
let closure_24 = { code: "(function reset_Pnpm_ReanimatedSwipeableTsx16(){let[userDrag,showLeftProgress,appliedTranslation,rowState]=this.__closure;userDrag.value=0;showLeftProgress.value=0;appliedTranslation.value=0;rowState.value=0;})" };
let closure_25 = { code: "(function pnpm_ReanimatedSwipeableTsx17(){let[showLeftProgress]=this.__closure;return{pointerEvents:showLeftProgress.value===0?'none':'auto'};})" };
let closure_26 = { code: "(function pnpm_ReanimatedSwipeableTsx18(){let[showRightProgress]=this.__closure;return{pointerEvents:showRightProgress.value===0?'none':'auto'};})" };
let closure_27 = { code: "(function pnpm_ReanimatedSwipeableTsx19(event){let[userDrag,leftThreshold,leftWidth,rightThreshold,rightWidth,DRAG_TOSS,friction,rowState,animateRow]=this.__closure;var _leftThreshold,_rightThreshold;const{velocityX:velocityX}=event;userDrag.value=event.translationX;const leftThresholdProp=(_leftThreshold=leftThreshold)!==null&&_leftThreshold!==void 0?_leftThreshold:leftWidth.value/2;const rightThresholdProp=(_rightThreshold=rightThreshold)!==null&&_rightThreshold!==void 0?_rightThreshold:rightWidth.value/2;const translationX=(userDrag.value+DRAG_TOSS*velocityX)/friction;let toValue=0;if(rowState.value===0){if(translationX>leftThresholdProp){toValue=leftWidth.value;}else if(translationX<-rightThresholdProp){toValue=-rightWidth.value;}}else if(rowState.value===1){if(translationX>-leftThresholdProp){toValue=leftWidth.value;}}else{if(translationX<rightThresholdProp){toValue=-rightWidth.value;}}animateRow(toValue,velocityX/friction);})" };
let closure_28 = { code: "(function pnpm_ReanimatedSwipeableTsx20(){let[animateRow]=this.__closure;animateRow(0);})" };
let closure_29 = { code: "(function pnpm_ReanimatedSwipeableTsx21(){let[dragStarted]=this.__closure;dragStarted.value=false;})" };
let closure_30 = { code: "(function pnpm_ReanimatedSwipeableTsx22(event){let[userDrag,rowState,SwipeDirection,dragStarted,onSwipeableOpenStartDrag,scheduleOnRN,onSwipeableCloseStartDrag,updateAnimatedEvent]=this.__closure;userDrag.value=event.translationX;const direction=rowState.value===-1?SwipeDirection.RIGHT:rowState.value===1?SwipeDirection.LEFT:event.translationX>0?SwipeDirection.RIGHT:SwipeDirection.LEFT;if(!dragStarted.value){dragStarted.value=true;if(rowState.value===0&&onSwipeableOpenStartDrag){scheduleOnRN(onSwipeableOpenStartDrag,direction);}else if(onSwipeableCloseStartDrag){scheduleOnRN(onSwipeableCloseStartDrag,direction);}}updateAnimatedEvent();})" };
let closure_31 = { code: "(function pnpm_ReanimatedSwipeableTsx23(){let[rowState,close]=this.__closure;if(rowState.value!==0){close();}})" };
let closure_32 = { code: "(function pnpm_ReanimatedSwipeableTsx24(){let[appliedTranslation,rowState]=this.__closure;return{transform:[{translateX:appliedTranslation.value}],pointerEvents:rowState.value===0?'auto':'box-only'};})" };
let obj = { container: { overflow: "hidden" }, leftActions: obj2, rightActions: obj3 };
obj2 = { flexDirection: str, overflow: "hidden" };
const create = StyleSheet.create;
let merged = Object.assign(StyleSheet.absoluteFill);
str = "row";
if (I18nManager.isRTL) {
  str = "row-reverse";
}
obj3 = { flexDirection: str2, overflow: "hidden" };
let merged1 = Object.assign(StyleSheet.absoluteFill);
str2 = "row-reverse";
if (I18nManager.isRTL) {
  str2 = "row";
}
function _default(dragOffsetFromLeft) {
  let View;
  let animatedStyle;
  let animatedStyle1;
  let animationOptions;
  let children;
  let childrenContainerStyle;
  let containerStyle;
  let enableTrackpadTwoFingerGesture;
  let enabled;
  let items40;
  let items41;
  let items42;
  let leftThreshold;
  let obj11;
  let obj13;
  let onDeactivate;
  let onFinalize;
  let onSwipeableClose;
  let onSwipeableCloseStartDrag;
  let onSwipeableOpen;
  let onSwipeableOpenStartDrag;
  let onSwipeableWillClose;
  let onSwipeableWillOpen;
  let onUpdate;
  let overshootLeft;
  let overshootRight;
  let ref;
  let renderLeftActions;
  let rightThreshold;
  let testID;
  let tmp100;
  let tmp101;
  let tmp102;
  let tmp104;
  let tmp105;
  let tmp108;
  let tmp109;
  let tmp111;
  let tmp112;
  let tmp113;
  let tmp114;
  let tmp115;
  let tmp116;
  let tmp117;
  let tmp118;
  let tmp119;
  let tmp126;
  let tmp127;
  let tmp128;
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
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
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
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp80;
  let tmp85;
  let tmp86;
  let tmp89;
  let tmp90;
  let tmp93;
  let tmp94;
  let tmp95;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  const f103507 = () => {
    const items = [...arguments];
    const current = ref.current;
    if (current != null) {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, items, 0);
      HermesBuiltin.apply(current, items1, ref);
    }
  };
  ({ leftThreshold, rightThreshold, enabled } = dragOffsetFromLeft);
  ({ animationOptions, overshootLeft, overshootRight, testID, enableTrackpadTwoFingerGesture } = dragOffsetFromLeft);
  let tmp = undefined !== enableTrackpadTwoFingerGesture;
  ({ ref, containerStyle, childrenContainerStyle, children } = dragOffsetFromLeft);
  if (tmp) {
    tmp = enableTrackpadTwoFingerGesture;
  }
  enableTrackpadTwoFingerGesture = tmp;
  dragOffsetFromLeft = dragOffsetFromLeft.dragOffsetFromLeft;
  let num = 10;
  if (undefined !== dragOffsetFromLeft) {
    num = dragOffsetFromLeft;
  }
  const dragOffsetFromRight = dragOffsetFromLeft.dragOffsetFromRight;
  let num2 = -10;
  if (undefined !== dragOffsetFromRight) {
    num2 = dragOffsetFromRight;
  }
  const friction = dragOffsetFromLeft.friction;
  let num3 = 1;
  let num4 = 1;
  if (undefined !== friction) {
    num4 = friction;
  }
  const overshootFriction = dragOffsetFromLeft.overshootFriction;
  if (undefined !== overshootFriction) {
    num3 = overshootFriction;
  }
  ({ onSwipeableOpenStartDrag, onSwipeableCloseStartDrag, onSwipeableWillOpen, onSwipeableWillClose, onSwipeableOpen, onSwipeableClose, renderLeftActions } = dragOffsetFromLeft);
  const renderRightActions = dragOffsetFromLeft.renderRightActions;
  const simultaneousWith = dragOffsetFromLeft.simultaneousWith;
  const requireToFail = dragOffsetFromLeft.requireToFail;
  const block = dragOffsetFromLeft.block;
  const hitSlop = dragOffsetFromLeft.hitSlop;
  let tmp2 = renderLeftActions(dragOffsetFromLeft, num2);
  let tmp3 = block;
  let tmp4 = block(onSwipeableOpenStartDrag);
  let closure_0 = tmp4;
  tmp4.current = onSwipeableOpenStartDrag;
  let tmp5 = renderRightActions;
  let tmp6;
  if (onSwipeableOpenStartDrag) {
    tmp6 = renderRightActions(f103507, []);
  }
  const tmp3Result = tmp3(onSwipeableCloseStartDrag);
  closure_0 = tmp3Result;
  tmp3Result.current = onSwipeableCloseStartDrag;
  let tmp5Result;
  if (onSwipeableCloseStartDrag) {
    tmp5Result = tmp5(f103507, []);
  }
  const tmp3Result5 = tmp3(onSwipeableWillOpen);
  closure_0 = tmp3Result5;
  tmp3Result5.current = onSwipeableWillOpen;
  let tmp5Result17;
  if (onSwipeableWillOpen) {
    tmp5Result17 = tmp5(f103507, []);
  }
  const tmp3Result6 = tmp3(onSwipeableWillClose);
  closure_0 = tmp3Result6;
  tmp3Result6.current = onSwipeableWillClose;
  let tmp5Result18;
  if (onSwipeableWillClose) {
    tmp5Result18 = tmp5(f103507, []);
  }
  const tmp3Result7 = tmp3(onSwipeableOpen);
  closure_0 = tmp3Result7;
  tmp3Result7.current = onSwipeableOpen;
  let tmp5Result19;
  if (onSwipeableOpen) {
    tmp5Result19 = tmp5(f103507, []);
  }
  const tmp3Result8 = tmp3(onSwipeableClose);
  closure_0 = tmp3Result8;
  tmp3Result8.current = onSwipeableClose;
  let tmp5Result20;
  if (onSwipeableClose) {
    tmp5Result20 = tmp5(f103507, []);
  }
  const tmp17 = enabled;
  const tmp18 = num;
  let obj = enabled(num[4]);
  const sharedValue = obj.useSharedValue(false);
  let obj2 = enabled(num[4]);
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = enabled(num[4]);
  const sharedValue2 = obj3.useSharedValue(0);
  const obj4 = enabled(num[4]);
  const sharedValue3 = obj4.useSharedValue(0);
  const obj5 = enabled(num[4]);
  const sharedValue4 = obj5.useSharedValue(0);
  const obj6 = enabled(num[4]);
  const sharedValue5 = obj6.useSharedValue(0);
  const obj7 = enabled(num[4]);
  const sharedValue6 = obj7.useSharedValue(0);
  const obj8 = enabled(num[4]);
  const sharedValue7 = obj8.useSharedValue(0);
  const obj9 = enabled(num[4]);
  const sharedValue8 = obj9.useSharedValue(0);
  let items = [sharedValue2, overshootLeft, sharedValue5, overshootRight, sharedValue6, sharedValue1, sharedValue2, num4, sharedValue3, enabled(num[4]).interpolate, num3, sharedValue7, sharedValue8];
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items;
  function pnpm_ReanimatedSwipeableTsx4() {
    let num4;
    let tmp = c0;
    if (c0 == null) {
      tmp = _undefined.value > 0;
    }
    let tmp3 = c2;
    if (c2 == null) {
      tmp3 = _undefined2.value > 0;
    }
    if (1 === _undefined3.value) {
      num4 = _undefined.value;
    } else {
      num4 = 0;
      if (-1 === iter.value) {
        num4 = -_undefined2.value;
      }
    }
    const items = [-_undefined2.value - 1, -_undefined2.value, _undefined.value, _undefined.value + 1];
    let num5 = 0;
    const sum = _undefined4.value / c6 + num4;
    const tmp9 = -_undefined2.value;
    if (tmp3) {
      num5 = 1 / c9;
    }
    const items1 = [tmp9 - num5, -_undefined2.value, _undefined.value, ];
    let num6 = 0;
    const value = iter4.value;
    if (tmp) {
      num6 = 1 / c9;
    }
    items1[3] = value + num6;
    c7.value = _undefined(sum, items, items1);
    let num7 = 0;
    const tmp12 = c10;
    if (_undefined.value > 0) {
      const items2 = [-1, 0, _undefined.value];
      num7 = tmp8(iter2.value, items2, [0, 0, 1]);
    }
    tmp12.value = num7;
    let num8 = 0;
    const tmp13 = c11;
    if (_undefined2.value > 0) {
      const items3 = [-_undefined2.value, 0, 1];
      num8 = tmp8(iter2.value, items3, [1, 0, 0]);
    }
    tmp13.value = num8;
  }
  let items1 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40];
  pnpm_ReanimatedSwipeableTsx4.__closure = items1;
  pnpm_ReanimatedSwipeableTsx4.__workletHash = 14965618424066;
  pnpm_ReanimatedSwipeableTsx4.__initData = tmp28;
  let items2 = [sharedValue3, num4, sharedValue5, num3, sharedValue6, sharedValue1, sharedValue7, sharedValue8, sharedValue2, overshootLeft, overshootRight];
  const tmp5Result21 = tmp5(pnpm_ReanimatedSwipeableTsx4, items2);
  let items3 = [sharedValue3, tmp5Result17, tmp17(tmp18[5]).scheduleOnRN, tmp17(tmp18[6]).SwipeDirection, tmp5Result18];
  [tmp42, tmp43, tmp44, tmp45, tmp46] = items3;
  function pnpm_ReanimatedSwipeableTsx5(arg0, arg1) {
    const tmp2 = c0 && 0 !== arg1;
    if (tmp2) {
      let LEFT;
      const tmp3 = c1;
      if (arg1 > 0) {
        LEFT = _undefined.RIGHT;
      } else {
        LEFT = _undefined.LEFT;
      }
      tmp3(c0, LEFT);
    }
    const tmp8 = c3 && 0 === arg1;
    if (tmp8) {
      let RIGHT;
      const tmp10 = c1;
      if (arg0 > 0) {
        RIGHT = _undefined.LEFT;
      } else {
        RIGHT = _undefined.RIGHT;
      }
      tmp10(c3, RIGHT);
    }
  }
  let items4 = [tmp43, tmp44, tmp45, tmp46];
  pnpm_ReanimatedSwipeableTsx5.__closure = items4;
  pnpm_ReanimatedSwipeableTsx5.__workletHash = 2282054426384;
  pnpm_ReanimatedSwipeableTsx5.__initData = tmp42;
  let items5 = [tmp5Result18, tmp5Result17];
  const tmp5Result22 = tmp5(pnpm_ReanimatedSwipeableTsx5, items5);
  let items6 = [sharedValue4, tmp5Result19, tmp17(tmp18[5]).scheduleOnRN, tmp17(tmp18[6]).SwipeDirection, tmp5Result20];
  [tmp48, tmp49, tmp50, tmp51, tmp52] = items6;
  function pnpm_ReanimatedSwipeableTsx6(arg0, arg1) {
    const tmp2 = c0 && 0 !== arg1;
    if (tmp2) {
      let LEFT;
      const tmp3 = c1;
      if (arg1 > 0) {
        LEFT = _undefined.RIGHT;
      } else {
        LEFT = _undefined.LEFT;
      }
      tmp3(c0, LEFT);
    }
    const tmp8 = c3 && 0 === arg1;
    if (tmp8) {
      let RIGHT;
      const tmp10 = c1;
      if (arg0 > 0) {
        RIGHT = _undefined.LEFT;
      } else {
        RIGHT = _undefined.RIGHT;
      }
      tmp10(c3, RIGHT);
    }
  }
  let items7 = [tmp49, tmp50, tmp51, tmp52];
  pnpm_ReanimatedSwipeableTsx6.__closure = items7;
  pnpm_ReanimatedSwipeableTsx6.__workletHash = 737299026611;
  pnpm_ReanimatedSwipeableTsx6.__initData = tmp48;
  const items8 = [tmp5Result20, tmp5Result19];
  const tmp5Result23 = tmp5(pnpm_ReanimatedSwipeableTsx6, items8);
  const items9 = [sharedValue6, tmp17(tmp18[4]).ReduceMotion, animationOptions, sharedValue1, sharedValue6, sharedValue5, tmp17(tmp18[4]).interpolate, sharedValue3, tmp17(tmp18[4]).withSpring, sharedValue5, tmp5Result23, sharedValue7, sharedValue8, tmp5Result22, sharedValue];
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68] = items9;
  function pnpm_ReanimatedSwipeableTsx8(arg0) {
    let tmp10;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp3;
    let value;
    num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    const obj = { mass: 2, damping: 1000, stiffness: 700, velocity: num, overshootClamping: true, reduceMotion: _undefined.System };
    const merged = Object.assign(c1);
    if (0 === arg0) {
      tmp3 = _undefined2.value < 0;
    } else {
      tmp3 = arg0 > 0;
    }
    if (0 === arg0) {
      let value2;
      if (tmp3) {
        value2 = _undefined3.value;
      } else {
        value2 = _undefined4.value;
      }
      value = value2;
    } else if (tmp3) {
      value = _undefined4.value;
    } else {
      value = _undefined3.value;
    }
    const obj2 = { restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01, velocity: tmp10 };
    const merged1 = Object.assign(obj);
    tmp10 = num;
    if (tmp10) {
      const items = [-value, value];
      tmp10 = _undefined5(num, items, [-1, 1]);
    }
    const value3 = _undefined2.value;
    const items1 = [c8, c9, value3, arg0];
    _undefined = undefined;
    c1 = undefined;
    _undefined2 = undefined;
    [tmp14, tmp15, tmp16, tmp17] = items1;
    function pnpm_ReanimatedSwipeableTsx7(arg0) {
      const tmp = arg0;
      if (tmp) {
        _undefined(c1, c2);
      }
    }
    const items2 = [tmp15, tmp16, tmp17];
    pnpm_ReanimatedSwipeableTsx7.__closure = items2;
    pnpm_ReanimatedSwipeableTsx7.__workletHash = 10283843840439;
    pnpm_ReanimatedSwipeableTsx7.__initData = tmp14;
    c6.value = _undefined(arg0, obj, pnpm_ReanimatedSwipeableTsx7);
    num2 = 0;
    if (0 !== arg0) {
      const _Math = Math;
      num2 = Math.sign(arg0);
    }
    c10.value = _undefined(Math.max(num2, 0), obj2);
    c11.value = _undefined(Math.max(-num2, 0), obj2);
    _undefined6(value3, arg0);
    _undefined2.value = Math.sign(arg0);
    c13.value = 0 !== _undefined2.value;
  }
  const items10 = [tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68];
  pnpm_ReanimatedSwipeableTsx8.__closure = items10;
  pnpm_ReanimatedSwipeableTsx8.__workletHash = 17107200230771;
  pnpm_ReanimatedSwipeableTsx8.__initData = tmp54;
  const items11 = [sharedValue1, animationOptions, sharedValue3, sharedValue7, sharedValue5, sharedValue8, sharedValue6, tmp5Result22, tmp5Result23];
  const tmp5Result24 = tmp5(pnpm_ReanimatedSwipeableTsx8, items11);
  closure_19 = tmp5Result24;
  const tmp17Result = tmp17(tmp18[4]);
  const animatedRef = tmp17Result.useAnimatedRef();
  const tmp17Result9 = tmp17(tmp18[4]);
  const animatedRef1 = tmp17Result9.useAnimatedRef();
  const tmp17Result10 = tmp17(tmp18[4]);
  const animatedRef2 = tmp17Result10.useAnimatedRef();
  const items12 = [sharedValue7, tmp17(tmp18[4]).measure, animatedRef, animatedRef1, animatedRef2, sharedValue5, sharedValue6, sharedValue4];
  [tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80] = items12;
  function pnpm_ReanimatedSwipeableTsx9() {
    const tmp = _undefined(c1);
    const tmp2 = _undefined(c2);
    const tmp3 = _undefined(c3);
    num = undefined;
    const tmp4 = c4;
    if (tmp != null) {
      num = tmp.pageX;
    }
    if (num == null) {
      num = 0;
    }
    num2 = undefined;
    if (tmp2 != null) {
      num2 = tmp2.pageX;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp4.value = num - num2;
    let pageX;
    const value = _undefined2.value;
    const iter = _undefined2;
    const tmp5 = c5;
    if (tmp3 != null) {
      pageX = tmp3.pageX;
    }
    if (pageX == null) {
      pageX = iter.value;
    }
    let num3;
    const diff = value - pageX;
    if (tmp2 != null) {
      num3 = tmp2.pageX;
    }
    if (num3 == null) {
      num3 = 0;
    }
    tmp5.value = diff + num3;
  }
  const items13 = [tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80];
  pnpm_ReanimatedSwipeableTsx9.__closure = items13;
  pnpm_ReanimatedSwipeableTsx9.__workletHash = 14256505017394;
  pnpm_ReanimatedSwipeableTsx9.__initData = tmp73;
  const items14 = [animatedRef, animatedRef1, animatedRef2, sharedValue5, sharedValue6, sharedValue4];
  const tmp5Result25 = tmp5(pnpm_ReanimatedSwipeableTsx9, items14);
  const onActivate = tmp5Result25;
  const items15 = [tmp5Result24, tmp5Result25, sharedValue5, sharedValue6, sharedValue2, sharedValue7, sharedValue3, sharedValue1];
  const tmp83 = requireToFail(() => {
    let close;
    let openLeft;
    let openRight;
    let reset;
    let tmp10;
    let tmp11;
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
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let items = [closure_19, , , , ];
    items[1] = _mod1708.isWorkletRuntime;
    items[2] = closure_19;
    items[3] = _mod1708.scheduleOnUI;
    items[4] = closure_18;
    [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
    const obj = { close, openLeft, openRight, reset };
    close = function close() {
      let tmp4;
      let tmp5;
      if (_undefined()) {
        _undefined2(0);
      } else {
        const items = [c3, _undefined2];
        [tmp4, tmp5] = items;
        function pnpm_ReanimatedSwipeableTsx10() {
          closure_1_0(0);
        }
        const items1 = [tmp5];
        pnpm_ReanimatedSwipeableTsx10.__closure = items1;
        pnpm_ReanimatedSwipeableTsx10.__workletHash = 5083608474645;
        pnpm_ReanimatedSwipeableTsx10.__initData = tmp4;
        _undefined3(pnpm_ReanimatedSwipeableTsx10);
      }
    };
    let items1 = [tmp5, tmp6, tmp7, tmp8];
    close.__closure = items1;
    close.__workletHash = 13198666060105;
    close.__initData = tmp4;
    const items2 = [closure_21, _mod1708.isWorkletRuntime, onActivate, tmp3, sharedValue5, , ];
    const tmp9 = onActivate;
    items2[5] = _mod1708.scheduleOnUI;
    items2[6] = closure_20;
    [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
    openLeft = function openLeft() {
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      if (_undefined()) {
        _undefined2();
        _undefined3(_undefined4.value);
      } else {
        const items = [c5, , , ];
        items[1] = _undefined2;
        items[2] = _undefined3;
        items[3] = _undefined4;
        [tmp6, tmp7, tmp8, tmp9] = items;
        function pnpm_ReanimatedSwipeableTsx12() {
          closure_1_0();
          closure_1_1(value.value);
        }
        const items1 = [tmp7, tmp8, tmp9];
        pnpm_ReanimatedSwipeableTsx12.__closure = items1;
        pnpm_ReanimatedSwipeableTsx12.__workletHash = 16079186854680;
        pnpm_ReanimatedSwipeableTsx12.__initData = tmp6;
        _undefined5(pnpm_ReanimatedSwipeableTsx12);
      }
    };
    const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
    openLeft.__closure = items3;
    openLeft.__workletHash = 10330927957530;
    openLeft.__initData = tmp10;
    const items4 = [onActivate, _mod1708.isWorkletRuntime, tmp9, tmp3, sharedValue6, _mod1708.scheduleOnUI, closure_22];
    let c4;
    let c5;
    [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items4;
    openRight = function openRight() {
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      if (_undefined()) {
        _undefined2();
        _undefined3(-_undefined4.value);
      } else {
        const items = [c5, , , ];
        items[1] = _undefined2;
        items[2] = _undefined3;
        items[3] = _undefined4;
        [tmp6, tmp7, tmp8, tmp9] = items;
        function pnpm_ReanimatedSwipeableTsx14() {
          closure_1_0();
          closure_1_1(-value.value);
        }
        const items1 = [tmp7, tmp8, tmp9];
        pnpm_ReanimatedSwipeableTsx14.__closure = items1;
        pnpm_ReanimatedSwipeableTsx14.__workletHash = 7359076028115;
        pnpm_ReanimatedSwipeableTsx14.__initData = tmp6;
        _undefined5(pnpm_ReanimatedSwipeableTsx14);
      }
    };
    const items5 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
    openRight.__closure = items5;
    openRight.__workletHash = 11969484706379;
    openRight.__initData = tmp17;
    const items6 = [closure_24, sharedValue2, sharedValue7, sharedValue3, sharedValue1];
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp24, tmp25, tmp26, tmp27, tmp28] = items6;
    reset = function reset() {
      c0.value = 0;
      c1.value = 0;
      c2.value = 0;
      c3.value = 0;
    };
    const items7 = [tmp25, tmp26, tmp27, tmp28];
    reset.__closure = items7;
    reset.__workletHash = 7243544495167;
    reset.__initData = tmp24;
    return obj;
  }, items15);
  closure_24 = tmp83;
  const items16 = [sharedValue4];
  const items17 = [animatedStyle, sharedValue7];
  [tmp85, tmp86] = items17;
  function pnpm_ReanimatedSwipeableTsx17() {
    let pointerEvents = "auto";
    if (0 === _undefined.value) {
      pointerEvents = "none";
    }
    return { pointerEvents };
  }
  const items18 = [tmp86];
  pnpm_ReanimatedSwipeableTsx17.__closure = items18;
  pnpm_ReanimatedSwipeableTsx17.__workletHash = 5194842054553;
  pnpm_ReanimatedSwipeableTsx17.__initData = tmp85;
  const tmp5Result26 = tmp5((nativeEvent) => {
    sharedValue4.value = nativeEvent.nativeEvent.layout.width;
  }, items16);
  const tmp17Result11 = tmp17(tmp18[4]);
  animatedStyle = tmp17Result11.useAnimatedStyle(pnpm_ReanimatedSwipeableTsx17);
  const items19 = [sharedValue3, animatedStyle, animatedRef, animatedRef1, renderLeftActions, sharedValue7, tmp83];
  const items20 = [animatedStyle1, sharedValue8];
  [tmp89, tmp90] = items20;
  function pnpm_ReanimatedSwipeableTsx18() {
    let pointerEvents = "auto";
    if (0 === _undefined.value) {
      pointerEvents = "none";
    }
    return { pointerEvents };
  }
  const items21 = [tmp90];
  pnpm_ReanimatedSwipeableTsx18.__closure = items21;
  pnpm_ReanimatedSwipeableTsx18.__workletHash = 585347980470;
  pnpm_ReanimatedSwipeableTsx18.__initData = tmp89;
  const tmp5Result27 = tmp5(() => {
    let items;
    let items1;
    const obj = { ref: animatedRef1, style: items, children: items1 };
    items = [container.leftActions, animatedStyle];
    let tmp4Result;
    const View = _modDef1655.View;
    const tmp = unpackModuleId;
    if (renderLeftActions != null) {
      tmp4Result = tmp4(sharedValue7, sharedValue3, closure_24);
    }
    items1 = [tmp4Result, ];
    const obj2 = { ref: animatedRef };
    items1[1] = authStore(_modDef1655.View, obj2);
    return tmp(View, obj);
  }, items19);
  const tmp17Result12 = tmp17(tmp18[4]);
  animatedStyle1 = tmp17Result12.useAnimatedStyle(pnpm_ReanimatedSwipeableTsx18);
  const items22 = [sharedValue3, renderRightActions, animatedStyle1, animatedRef2, sharedValue8, tmp83];
  const items23 = [onDeactivate, sharedValue2, leftThreshold, sharedValue5, rightThreshold, sharedValue6, 0.05, num4, sharedValue1, tmp5Result24];
  let c8;
  [tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102] = items23;
  function pnpm_ReanimatedSwipeableTsx19(arg0) {
    let num4;
    let velocityX;
    ({ velocityX, translationX: c0.value } = arg0);
    let result = c1;
    const iter = c0;
    if (c1 == null) {
      result = _undefined.value / 2;
    }
    let result1 = c3;
    if (c3 == null) {
      result1 = _undefined2.value / 2;
    }
    const result2 = (iter.value + c5 * velocityX) / c6;
    const tmp5 = c6;
    if (0 === _undefined3.value) {
      if (result2 > result) {
        num4 = _undefined.value;
      } else {
        num4 = 0;
        if (result2 < -result1) {
          num4 = -_undefined2.value;
        }
      }
    } else if (1 === iter2.value) {
      num4 = 0;
      if (result2 > -result) {
        num4 = _undefined.value;
      }
    } else {
      num4 = 0;
      if (result2 < result1) {
        num4 = -_undefined2.value;
      }
    }
    _undefined4(num4, velocityX / tmp5);
  }
  const items24 = [tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102];
  pnpm_ReanimatedSwipeableTsx19.__closure = items24;
  pnpm_ReanimatedSwipeableTsx19.__workletHash = 4590926143740;
  pnpm_ReanimatedSwipeableTsx19.__initData = tmp93;
  const items25 = [tmp5Result24, num4, leftThreshold, sharedValue5, rightThreshold, sharedValue6, sharedValue1, sharedValue2];
  const tmp5Result28 = tmp5(() => {
    let items;
    let items1;
    const obj = { style: items, children: items1 };
    items = [container.rightActions, animatedStyle1];
    let tmp4Result;
    const View = _modDef1655.View;
    const tmp = unpackModuleId;
    if (renderRightActions != null) {
      tmp4Result = tmp4(sharedValue8, sharedValue3, closure_24);
    }
    items1 = [tmp4Result, ];
    const obj2 = { ref: animatedRef2 };
    items1[1] = authStore(_modDef1655.View, obj2);
    return tmp(View, obj);
  }, items22);
  const tmp5Result29 = tmp5(pnpm_ReanimatedSwipeableTsx19, items25);
  onDeactivate = tmp5Result29;
  const items26 = [closure_28, tmp5Result24];
  [tmp104, tmp105] = items26;
  function pnpm_ReanimatedSwipeableTsx20() {
    _undefined(0);
  }
  const items27 = [tmp105];
  pnpm_ReanimatedSwipeableTsx20.__closure = items27;
  pnpm_ReanimatedSwipeableTsx20.__workletHash = 5179606853494;
  pnpm_ReanimatedSwipeableTsx20.__initData = tmp104;
  const items28 = [tmp5Result24];
  const tmp5Result30 = tmp5(pnpm_ReanimatedSwipeableTsx20, items28);
  closure_28 = tmp5Result30;
  const tmp17Result13 = tmp17(tmp18[4]);
  const sharedValue9 = tmp17Result13.useSharedValue(false);
  const items29 = [onFinalize, sharedValue9];
  [tmp108, tmp109] = items29;
  function pnpm_ReanimatedSwipeableTsx21() {
    c0.value = false;
  }
  const items30 = [tmp109];
  pnpm_ReanimatedSwipeableTsx21.__closure = items30;
  pnpm_ReanimatedSwipeableTsx21.__workletHash = 10493802017059;
  pnpm_ReanimatedSwipeableTsx21.__initData = tmp108;
  const items31 = [sharedValue9];
  const tmp5Result31 = tmp5(pnpm_ReanimatedSwipeableTsx21, items31);
  onFinalize = tmp5Result31;
  const items32 = [onUpdate, sharedValue2, sharedValue1, tmp17(tmp18[6]).SwipeDirection, sharedValue9, tmp6, tmp17(tmp18[5]).scheduleOnRN, tmp5Result, tmp5Result21];
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119] = items32;
  function pnpm_ReanimatedSwipeableTsx22(translationX) {
    let LEFT;
    c0.value = translationX.translationX;
    if (-1 === _undefined.value) {
      LEFT = _undefined2.RIGHT;
    } else if (1 === _undefined.value) {
      LEFT = _undefined2.LEFT;
    } else if (translationX.translationX > 0) {
      LEFT = _undefined2.RIGHT;
    } else {
      LEFT = _undefined2.LEFT;
    }
    if (!_undefined3.value) {
      tmp5.value = true;
      if (0 === _undefined.value) {
        if (c4) {
          _undefined4(tmp6, LEFT);
        }
      }
      if (c6) {
        _undefined4(tmp7, LEFT);
      }
    }
    _undefined5();
  }
  const items33 = [tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119];
  pnpm_ReanimatedSwipeableTsx22.__closure = items33;
  pnpm_ReanimatedSwipeableTsx22.__workletHash = 14916009606751;
  pnpm_ReanimatedSwipeableTsx22.__initData = tmp111;
  const items34 = [sharedValue9, tmp5Result, tmp6, sharedValue1, tmp5Result21, sharedValue2];
  const tmp5Result32 = tmp5(pnpm_ReanimatedSwipeableTsx22, items34);
  onUpdate = tmp5Result32;
  const items35 = [block, tmp5Result30, requireToFail, sharedValue1, sharedValue, simultaneousWith];
  const items36 = [block, num, num2, tmp, enabled, tmp5Result31, tmp5Result29, tmp5Result32, hitSlop, requireToFail, simultaneousWith, tmp5Result25];
  const tmp82Result = requireToFail(() => {
    let pnpm_ReanimatedSwipeableTsx23;
    let tmp;
    let tmp2;
    let tmp3;
    const items = [closure_31, sharedValue1, closure_28];
    const obj = { shouldCancelWhenOutside: true, enabled: sharedValue, simultaneousWith, requireToFail, block, onActivate: pnpm_ReanimatedSwipeableTsx23 };
    [tmp, tmp2, tmp3] = items;
    pnpm_ReanimatedSwipeableTsx23 = function pnpm_ReanimatedSwipeableTsx23() {
      if (0 !== value.value) {
        closure_1_1();
      }
    };
    const items1 = [tmp2, tmp3];
    pnpm_ReanimatedSwipeableTsx23.__closure = items1;
    pnpm_ReanimatedSwipeableTsx23.__workletHash = 15434170266773;
    pnpm_ReanimatedSwipeableTsx23.__initData = tmp;
    return obj;
  }, items35);
  const tmp17Result14 = tmp17(tmp18[7]);
  const tapGesture = tmp17Result14.useTapGesture(tmp82Result);
  const items37 = [tmp83];
  const tmp82Result2 = requireToFail(() => {
    let items;
    let flag = enabled;
    if (enabled == null) {
      flag = true;
    }
    const obj = { enabled: flag, enableTrackpadTwoFingerGesture, activeOffsetX: items, simultaneousWith, requireToFail, block, hitSlop, onActivate, onUpdate, onDeactivate, onFinalize };
    items = [num2, num];
    return obj;
  }, items36);
  const tmp17Result15 = tmp17(tmp18[7]);
  const panGesture = tmp17Result15.usePanGesture(tmp82Result2);
  simultaneousWith(ref, () => closure_24, items37);
  const items38 = [closure_32, sharedValue3, sharedValue1];
  let c0;
  let c1;
  [tmp126, tmp127, tmp128] = items38;
  function pnpm_ReanimatedSwipeableTsx24() {
    let items;
    let str;
    const obj = { transform: items, pointerEvents: str };
    items = [];
    const obj2 = { translateX: _undefined.value };
    items[0] = obj2;
    str = "box-only";
    if (0 === _undefined2.value) {
      str = "auto";
    }
    return obj;
  }
  const items39 = [tmp127, tmp128];
  pnpm_ReanimatedSwipeableTsx24.__closure = items39;
  pnpm_ReanimatedSwipeableTsx24.__workletHash = 9021468125704;
  pnpm_ReanimatedSwipeableTsx24.__initData = tmp126;
  const tmp17Result16 = tmp17(tmp18[4]);
  const animatedStyle2 = tmp17Result16.useAnimatedStyle(pnpm_ReanimatedSwipeableTsx24, undefined);
  const obj10 = { gesture: panGesture, touchAction: "pan-y", children: sharedValue1(View, obj11) };
  const GestureDetector = tmp17(tmp18[8]).GestureDetector;
  obj11 = { onLayout: tmp5Result26, style: items40, children: items41 };
  View = enableTrackpadTwoFingerGesture(tmp18[4]).View;
  let merged = Object.assign(tmp2);
  items40 = [container.container, containerStyle];
  items41 = [tmp5Result27(), tmp5Result28(), ];
  const obj12 = { gesture: tapGesture, touchAction: "pan-y", children: sharedValue(enableTrackpadTwoFingerGesture(tmp18[4]).View, obj13) };
  const GestureDetector2 = tmp17(tmp18[8]).GestureDetector;
  obj13 = { style: items42, children };
  items42 = [animatedStyle2, childrenContainerStyle];
  items41[2] = sharedValue(GestureDetector2, obj12);
  const tmp132 = sharedValue(GestureDetector, obj10);
  let tmp130Result = tmp132;
  const tmp130 = sharedValue;
  if (testID) {
    const obj14 = { testID, children: tmp132 };
    tmp130Result = tmp130(hitSlop, obj14);
  }
  return tmp130Result;
}
const container = create(obj);

export default _default;
