// Module ID: 5192
// Function ID: 45070
// Name: BottomSheet
// Dependencies: [57, 31, 27, 33, 1582, 5193, 5194, 5217, 5190, 5206, 44, 5200, 5310, 5312, 5315, 5317, 5321, 5324, 5328]

// Module 5192 (BottomSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let forwardRef;
let memo;
const require = arg1;
({ useMemo: closure_4, useCallback: closure_5, useImperativeHandle: closure_6, useEffect: closure_7, forwardRef, memo } = result);
({ Platform: closure_8, StyleSheet: closure_9 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
result = require("cancelAnimation").addWhitelistedUIProps({ decelerationRate: true });
let closure_12 = { code: "function pnpm_BottomSheetTsx1(){const{topInset,bottomInset,$modal,_animatedContainerHeight}=this.__closure;const verticalInset=topInset+bottomInset;return $modal?_animatedContainerHeight.value-verticalInset:_animatedContainerHeight.value;}" };
let closure_13 = { code: "function pnpm_BottomSheetTsx2(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.value[animatedSnapPoints.value.length-1];}" };
let closure_14 = { code: "function pnpm_BottomSheetTsx3(){const{animatedContainerHeight,$modal,detached,bottomInset}=this.__closure;let closedPosition=animatedContainerHeight.value;if($modal||detached){closedPosition=animatedContainerHeight.value+bottomInset;}return closedPosition;}" };
let closure_15 = { code: "function pnpm_BottomSheetTsx4(){const{animatedContainerHeight,animatedHighestSnapPoint}=this.__closure;return animatedContainerHeight.value-animatedHighestSnapPoint.value;}" };
let closure_16 = { code: "function pnpm_BottomSheetTsx5(){const{_providedContainerHeight,animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,handleComponent,animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedSnapPoints,INITIAL_SNAP_POINT}=this.__closure;let isContainerHeightCalculated=false;if(_providedContainerHeight!==null||_providedContainerHeight!==undefined){isContainerHeightCalculated=true;}if(animatedContainerHeight.value!==INITIAL_CONTAINER_HEIGHT){isContainerHeightCalculated=true;}let isHandleHeightCalculated=false;if(handleComponent===null){animatedHandleHeight.value=0;isHandleHeightCalculated=true;}if(animatedHandleHeight.value!==INITIAL_HANDLE_HEIGHT){isHandleHeightCalculated=true;}let isSnapPointsNormalized=false;if(animatedSnapPoints.value[0]!==INITIAL_SNAP_POINT){isSnapPointsNormalized=true;}return isContainerHeightCalculated&&isHandleHeightCalculated&&isSnapPointsNormalized;}" };
let closure_17 = { code: "function pnpm_BottomSheetTsx6(){const{animatedPosition,animatedClosedPosition,SHEET_STATE,animatedContainerHeight,animatedSheetHeight,animatedKeyboardHeightInContainer,keyboardBehavior,KEYBOARD_BEHAVIOR,isInTemporaryPosition}=this.__closure;if(animatedPosition.value>=animatedClosedPosition.value){return SHEET_STATE.CLOSED;}const extendedPosition=animatedContainerHeight.value-animatedSheetHeight.value;if(animatedPosition.value===extendedPosition){return SHEET_STATE.EXTENDED;}const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;const extendedPositionWithKeyboard=Math.max(0,animatedContainerHeight.value-(animatedSheetHeight.value+keyboardHeightInContainer));if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&isInTemporaryPosition.value&&animatedPosition.value===extendedPositionWithKeyboard){return SHEET_STATE.EXTENDED;}if(animatedPosition.value===0){return SHEET_STATE.FILL_PARENT;}if(animatedPosition.value<extendedPosition){return SHEET_STATE.OVER_EXTENDED;}return SHEET_STATE.OPENED;}" };
let closure_18 = { code: "function pnpm_BottomSheetTsx7(){const{enableContentPanningGesture,SCROLLABLE_STATE,animatedScrollableOverrideState,animatedSheetState,SHEET_STATE,animatedKeyboardState,KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE}=this.__closure;if(!enableContentPanningGesture){return SCROLLABLE_STATE.UNLOCKED;}if(animatedScrollableOverrideState.value!==SCROLLABLE_STATE.UNDETERMINED){return animatedScrollableOverrideState.value;}if(animatedSheetState.value===SHEET_STATE.FILL_PARENT){return SCROLLABLE_STATE.UNLOCKED;}if(animatedSheetState.value===SHEET_STATE.EXTENDED){return SCROLLABLE_STATE.UNLOCKED;}if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return SCROLLABLE_STATE.UNLOCKED;}return SCROLLABLE_STATE.LOCKED;}" };
let closure_19 = { code: "function pnpm_BottomSheetTsx8(){const{animatedSnapPoints,animatedContainerHeight,isLayoutCalculated,interpolate,animatedPosition,Extrapolation,android_keyboardInputMode,KEYBOARD_INPUT_MODE,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE,isInTemporaryPosition,animatedCurrentIndex,animatedNextPositionIndex}=this.__closure;const adjustedSnapPoints=animatedSnapPoints.value.slice().reverse();const adjustedSnapPointsIndexes=animatedSnapPoints.value.slice().map(function(_,index){return index;}).reverse();adjustedSnapPoints.push(animatedContainerHeight.value);adjustedSnapPointsIndexes.push(-1);const currentIndex=isLayoutCalculated.value?interpolate(animatedPosition.value,adjustedSnapPoints,adjustedSnapPointsIndexes,Extrapolation.CLAMP):-1;if(android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize&&animatedAnimationSource.value===ANIMATION_SOURCE.KEYBOARD&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&isInTemporaryPosition.value){return Math.max(animatedCurrentIndex.value,currentIndex);}if(animatedAnimationSource.value===ANIMATION_SOURCE.SNAP_POINT_CHANGE&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return animatedNextPositionIndex.value;}return currentIndex;}" };
let closure_20 = { code: "function pnpm_BottomSheetTsx9(){const{cancelAnimation,animatedPosition,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE}=this.__closure;cancelAnimation(animatedPosition);animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;}" };
let closure_21 = { code: "function animateToPositionCompleted_Pnpm_BottomSheetTsx10(isFinished){const{__DEV__,runOnJS,print,animatedCurrentIndex,animatedNextPosition,animatedNextPositionIndex,animatedAnimationSource,ANIMATION_SOURCE,isAnimatedOnMount,isForcedClosing,animatedAnimationState,ANIMATION_STATE,INITIAL_VALUE,animatedContainerHeightDidChange}=this.__closure;if(!isFinished){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'animateToPositionCompleted',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedNextPosition:animatedNextPosition.value,animatedNextPositionIndex:animatedNextPositionIndex.value}});}if(animatedAnimationSource.value===ANIMATION_SOURCE.MOUNT){isAnimatedOnMount.value=true;}isForcedClosing.value=false;animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;animatedNextPosition.value=INITIAL_VALUE;animatedNextPositionIndex.value=INITIAL_VALUE;animatedContainerHeightDidChange.value=false;}" };
let closure_22 = { code: "function animateToPosition_Pnpm_BottomSheetTsx11(position,source,velocity=0,configs){const{__DEV__,runOnJS,print,animatedPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPosition,stopAnimation,animatedAnimationSource,animatedKeyboardState,KEYBOARD_STATE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedKeyboardHeightInContainer,animatedNextPositionIndex,animatedSnapPoints,handleOnAnimate,animate,_providedAnimationConfigs,_providedOverrideReduceMotion,animateToPositionCompleted}=this.__closure;if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'animateToPosition',params:{currentPosition:animatedPosition.value,nextPosition:position,source:source}});}if(position===animatedPosition.value||position===undefined||animatedAnimationState.value===ANIMATION_STATE.RUNNING&&position===animatedNextPosition.value){return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){stopAnimation();}animatedAnimationState.value=ANIMATION_STATE.RUNNING;animatedAnimationSource.value=source;animatedNextPosition.value=position;let offset=0;if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&keyboardBehavior!==KEYBOARD_BEHAVIOR.extend&&position<animatedPosition.value){offset=animatedKeyboardHeightInContainer.value;}animatedNextPositionIndex.value=animatedSnapPoints.value.indexOf(position+offset);runOnJS(handleOnAnimate)(animatedNextPositionIndex.value,position,source);animatedPosition.value=animate({point:position,configs:configs||_providedAnimationConfigs,velocity:velocity,overrideReduceMotion:_providedOverrideReduceMotion,onComplete:animateToPositionCompleted});}" };
let closure_23 = { code: "function setToPosition_Pnpm_BottomSheetTsx12(targetPosition){const setToPosition_Pnpm_BottomSheetTsx12=this._recur;const{animatedPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPosition,__DEV__,runOnJS,print,BottomSheet,animatedNextPositionIndex,animatedSnapPoints,stopAnimation,animatedContainerHeightDidChange}=this.__closure;if(targetPosition===animatedPosition.value||targetPosition===undefined||animatedAnimationState.value===ANIMATION_STATE.RUNNING&&targetPosition===animatedNextPosition.value){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:setToPosition_Pnpm_BottomSheetTsx12.name,params:{currentPosition:animatedPosition.value,targetPosition:targetPosition}});}animatedNextPosition.value=targetPosition;animatedNextPositionIndex.value=animatedSnapPoints.value.indexOf(targetPosition);stopAnimation();animatedPosition.value=targetPosition;animatedContainerHeightDidChange.value=false;}" };
let closure_24 = { code: "function getEvaluatedPosition_Pnpm_BottomSheetTsx13(source){const{animatedCurrentIndex,animatedSnapPoints,animatedKeyboardState,animatedHighestSnapPoint,ANIMATION_SOURCE,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,KEYBOARD_STATE,animatedContentGestureState,State,animatedHandleGestureState,isInTemporaryPosition,keyboardBehavior,KEYBOARD_BEHAVIOR,Platform,android_keyboardInputMode,animatedKeyboardHeightInContainer,animatedPosition,isAnimatedOnMount,_providedIndex,animatedClosedPosition}=this.__closure;const currentIndex=animatedCurrentIndex.value;const snapPoints=animatedSnapPoints.value;const keyboardState=animatedKeyboardState.value;const highestSnapPoint=animatedHighestSnapPoint.value;if(source===ANIMATION_SOURCE.KEYBOARD&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.restore&&keyboardState===KEYBOARD_STATE.HIDDEN&&animatedContentGestureState.value!==State.ACTIVE&&animatedHandleGestureState.value!==State.ACTIVE){isInTemporaryPosition.value=false;const nextPosition=snapPoints[currentIndex];return nextPosition;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.extend&&keyboardState===KEYBOARD_STATE.SHOWN){return highestSnapPoint;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.fillParent&&keyboardState===KEYBOARD_STATE.SHOWN){isInTemporaryPosition.value=true;return 0;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&keyboardState===KEYBOARD_STATE.SHOWN&&!(Platform.OS==='android'&&android_keyboardInputMode==='adjustResize')){isInTemporaryPosition.value=true;const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;return Math.max(0,highestSnapPoint-keyboardHeightInContainer);}if(isInTemporaryPosition.value){return animatedPosition.value;}if(!isAnimatedOnMount.value){return _providedIndex===-1?animatedClosedPosition.value:snapPoints[_providedIndex];}return snapPoints[currentIndex];}" };
let closure_25 = { code: "function evaluatePosition_Pnpm_BottomSheetTsx14(source,animationConfigs){const{isForcedClosing,ANIMATION_SOURCE,isLayoutCalculated,getEvaluatedPosition,isAnimatedOnMount,animateOnMount,animateToPosition,setToPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPositionIndex,isInTemporaryPosition,animatedClosedPosition,animatedCurrentIndex,animatedSnapPoints,animatedIndex,reduceMotion,animatedPosition,animatedContainerHeightDidChange}=this.__closure;if(isForcedClosing.value&&source!==ANIMATION_SOURCE.USER){return;}if(!isLayoutCalculated.value){return;}const proposedPosition=getEvaluatedPosition(source);if(!isAnimatedOnMount.value){if(animateOnMount){animateToPosition(proposedPosition,ANIMATION_SOURCE.MOUNT,undefined,animationConfigs);}else{setToPosition(proposedPosition);isAnimatedOnMount.value=true;}return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){if(animatedNextPositionIndex.value===-1&&!isInTemporaryPosition.value){setToPosition(animatedClosedPosition.value);return;}if(animatedNextPositionIndex.value!==animatedCurrentIndex.value){animateToPosition(animatedSnapPoints.value[animatedNextPositionIndex.value],source,undefined,animationConfigs);return;}}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING&&animatedIndex.value===-1){if(reduceMotion&&animatedSnapPoints.value[animatedIndex.value]!==animatedPosition.value){return;}setToPosition(animatedClosedPosition.value);return;}if(animatedContainerHeightDidChange.value){setToPosition(proposedPosition);return;}animateToPosition(proposedPosition,source,undefined,animationConfigs);}" };
let closure_26 = { code: "function handleSnapToPosition_Pnpm_BottomSheetTsx15(position,animationConfigs){const handleSnapToPosition_Pnpm_BottomSheetTsx15=this._recur;const{__DEV__,print,BottomSheet,normalizeSnapPoint,animatedContainerHeight,isLayoutCalculated,animatedNextPosition,isForcedClosing,isInTemporaryPosition,runOnUI,animateToPosition,ANIMATION_SOURCE}=this.__closure;if(__DEV__){print({component:BottomSheet.name,method:handleSnapToPosition_Pnpm_BottomSheetTsx15.name,params:{position:position}});}const nextPosition=normalizeSnapPoint(position,animatedContainerHeight.value);if(!isLayoutCalculated||nextPosition===animatedNextPosition.value||isForcedClosing.value){return;}isInTemporaryPosition.value=true;runOnUI(animateToPosition)(nextPosition,ANIMATION_SOURCE.USER,0,animationConfigs);}" };
let closure_27 = { code: "function pnpm_BottomSheetTsx16(){const{animatedContainerHeight}=this.__closure;return animatedContainerHeight.value;}" };
let closure_28 = { code: "function pnpm_BottomSheetTsx17(result,previous){const{INITIAL_CONTAINER_HEIGHT,animatedContainerHeightDidChange,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,animatedNextPositionIndex,animateToPosition,animatedClosedPosition}=this.__closure;if(result===INITIAL_CONTAINER_HEIGHT){return;}animatedContainerHeightDidChange.value=result!==previous;if(animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE&&animatedNextPositionIndex.value===-1){animateToPosition(animatedClosedPosition.value,ANIMATION_SOURCE.GESTURE);}}" };
let closure_29 = { code: "function pnpm_BottomSheetTsx18(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.value;}" };
let closure_30 = { code: "function pnpm_BottomSheetTsx19(result,previous){const{isAnimatedOnMount,isLayoutCalculated,__DEV__,runOnJS,print,evaluatePosition,ANIMATION_SOURCE}=this.__closure;if(JSON.stringify(result)===JSON.stringify(previous)&&isAnimatedOnMount.value){return;}if(!isLayoutCalculated.value){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'useAnimatedReaction::OnSnapPointChange',category:'effect',params:{result:result}});}evaluatePosition(ANIMATION_SOURCE.SNAP_POINT_CHANGE);}" };
let closure_31 = { code: "function pnpm_BottomSheetTsx20(){const{animatedKeyboardState,animatedKeyboardHeight}=this.__closure;return{_keyboardState:animatedKeyboardState.value,_keyboardHeight:animatedKeyboardHeight.value};}" };
let closure_32 = { code: "function pnpm_BottomSheetTsx21(result,_previousResult){const{KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,__DEV__,runOnJS,print,BottomSheet,animatedKeyboardHeightInContainer,$modal,bottomInset,animatedContainerOffset,Platform,android_keyboardInputMode,KEYBOARD_INPUT_MODE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedContentGestureState,State,animatedHandleGestureState,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,getKeyboardAnimationConfigs,keyboardAnimationEasing,keyboardAnimationDuration,evaluatePosition}=this.__closure;const{_keyboardState:_keyboardState,_keyboardHeight:_keyboardHeight}=result;const _previousKeyboardState=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardState;const _previousKeyboardHeight=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardHeight;if(_keyboardState===_previousKeyboardState&&_keyboardHeight===_previousKeyboardHeight){return;}if(_keyboardState===KEYBOARD_STATE.UNDETERMINED){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnKeyboardStateChange',category:'effect',params:{keyboardState:_keyboardState,keyboardHeight:_keyboardHeight}});}animatedKeyboardHeightInContainer.value=_keyboardHeight===0?0:$modal?Math.abs(_keyboardHeight-Math.abs(bottomInset-animatedContainerOffset.value.bottom)):Math.abs(_keyboardHeight-animatedContainerOffset.value.bottom);if(Platform.OS==='android'&&android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize){animatedKeyboardHeightInContainer.value=0;if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive){return;}}const hasActiveGesture=animatedContentGestureState.value===State.ACTIVE||animatedContentGestureState.value===State.BEGAN||animatedHandleGestureState.value===State.ACTIVE||animatedHandleGestureState.value===State.BEGAN;if(hasActiveGesture){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.none){return;}const animationConfigs=getKeyboardAnimationConfigs(keyboardAnimationEasing.value,keyboardAnimationDuration.value);evaluatePosition(ANIMATION_SOURCE.KEYBOARD,animationConfigs);}" };
let closure_33 = { code: "function pnpm_BottomSheetTsx22(){const{animatedPosition}=this.__closure;return animatedPosition.value;}" };
let closure_34 = { code: "function pnpm_BottomSheetTsx23(_animatedPosition){const{_providedAnimatedPosition,topInset}=this.__closure;if(_providedAnimatedPosition){_providedAnimatedPosition.value=_animatedPosition+topInset;}}" };
let closure_35 = { code: "function pnpm_BottomSheetTsx24(){const{animatedIndex}=this.__closure;return animatedIndex.value;}" };
let closure_36 = { code: "function pnpm_BottomSheetTsx25(_animatedIndex){const{_providedAnimatedIndex}=this.__closure;if(_providedAnimatedIndex){_providedAnimatedIndex.value=_animatedIndex;}}" };
let closure_37 = { code: "function pnpm_BottomSheetTsx26(){const{animatedIndex,animatedPosition,animatedAnimationState,animatedContentGestureState,animatedHandleGestureState}=this.__closure;return{_animatedIndex:animatedIndex.value,_animatedPosition:animatedPosition.value,_animationState:animatedAnimationState.value,_contentGestureState:animatedContentGestureState.value,_handleGestureState:animatedHandleGestureState.value};}" };
let closure_38 = { code: "function pnpm_BottomSheetTsx27({_animatedIndex:_animatedIndex,_animatedPosition:_animatedPosition,_animationState:_animationState,_contentGestureState:_contentGestureState,_handleGestureState:_handleGestureState}){const{ANIMATION_STATE,animatedNextPosition,INITIAL_VALUE,animatedNextPositionIndex,State,reduceMotion,animatedCurrentIndex,animatedSnapPoints,__DEV__,runOnJS,print,BottomSheet,handleOnChange,_providedOnClose}=this.__closure;if(_animationState!==ANIMATION_STATE.STOPPED){return;}if(animatedNextPosition.value!==INITIAL_VALUE&&animatedNextPositionIndex.value!==INITIAL_VALUE&&(_animatedPosition!==animatedNextPosition.value||_animatedIndex!==animatedNextPositionIndex.value)){return;}if(_animatedIndex%1!==0){return;}const hasNoActiveGesture=(_contentGestureState===State.END||_contentGestureState===State.UNDETERMINED||_contentGestureState===State.CANCELLED)&&(_handleGestureState===State.END||_handleGestureState===State.UNDETERMINED||_handleGestureState===State.CANCELLED);if(!hasNoActiveGesture){return;}if(reduceMotion&&_animatedIndex===animatedCurrentIndex.value&&animatedSnapPoints.value[_animatedIndex]!==_animatedPosition){return;}if(_animatedIndex!==animatedCurrentIndex.value){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnChange',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}animatedCurrentIndex.value=_animatedIndex;runOnJS(handleOnChange)(_animatedIndex,_animatedPosition);}if(_animatedIndex===-1&&_providedOnClose){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::onClose',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}runOnJS(_providedOnClose)();}}" };
class BottomSheet {
  constructor(arg0, arg1) {
    animationConfigs = global.animationConfigs;
    index = global.index;
    num = 0;
    if (undefined !== index) {
      num = index;
    }
    c1 = num;
    ({ snapPoints, initialPosition } = global);
    if (undefined === initialPosition) {
      tmp = animationConfigs;
      tmp2 = DEFAULT_ANIMATE_ON_MOUNT;
      num2 = 5;
      initialPosition = require("DEFAULT_HANDLE_HEIGHT").INITIAL_POSITION;
    }
    DEFAULT_ANIMATE_ON_MOUNT = global.animateOnMount;
    if (undefined === DEFAULT_ANIMATE_ON_MOUNT) {
      tmp3 = animationConfigs;
      tmp4 = DEFAULT_ANIMATE_ON_MOUNT;
      num3 = 5;
      DEFAULT_ANIMATE_ON_MOUNT = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ANIMATE_ON_MOUNT;
    }
    DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = global.enableContentPanningGesture;
    if (undefined === DEFAULT_ENABLE_CONTENT_PANNING_GESTURE) {
      tmp5 = animationConfigs;
      tmp6 = DEFAULT_ANIMATE_ON_MOUNT;
      num4 = 5;
      DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    }
    _slicedToArray = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    ({ enableOverDrag, enableHandlePanningGesture } = global);
    if (undefined === enableOverDrag) {
      tmp7 = animationConfigs;
      tmp8 = DEFAULT_ANIMATE_ON_MOUNT;
      num5 = 5;
      enableOverDrag = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ENABLE_OVER_DRAG;
    }
    DEFAULT_ENABLE_OVER_DRAG = enableOverDrag;
    DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = global.enablePanDownToClose;
    if (undefined === DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE) {
      tmp9 = animationConfigs;
      tmp10 = DEFAULT_ANIMATE_ON_MOUNT;
      num6 = 5;
      DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    }
    enablePanDownToClose = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    DEFAULT_DYNAMIC_SIZING = global.enableDynamicSizing;
    if (undefined === DEFAULT_DYNAMIC_SIZING) {
      tmp11 = animationConfigs;
      tmp12 = DEFAULT_ANIMATE_ON_MOUNT;
      num7 = 5;
      DEFAULT_DYNAMIC_SIZING = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_DYNAMIC_SIZING;
    }
    DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = global.overDragResistanceFactor;
    if (undefined === DEFAULT_OVER_DRAG_RESISTANCE_FACTOR) {
      tmp13 = animationConfigs;
      tmp14 = DEFAULT_ANIMATE_ON_MOUNT;
      num8 = 5;
      DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    }
    overDragResistanceFactor = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    overrideReduceMotion = global.overrideReduceMotion;
    ({ keyboardBehavior, style, containerStyle, backgroundStyle, handleStyle, handleIndicatorStyle, gestureEventsHandlersHook } = global);
    if (undefined === keyboardBehavior) {
      tmp15 = animationConfigs;
      tmp16 = DEFAULT_ANIMATE_ON_MOUNT;
      num9 = 5;
      keyboardBehavior = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_KEYBOARD_BEHAVIOR;
    }
    DEFAULT_KEYBOARD_BEHAVIOR = keyboardBehavior;
    DEFAULT_KEYBOARD_BLUR_BEHAVIOR = global.keyboardBlurBehavior;
    if (undefined === DEFAULT_KEYBOARD_BLUR_BEHAVIOR) {
      tmp17 = animationConfigs;
      tmp18 = DEFAULT_ANIMATE_ON_MOUNT;
      num10 = 5;
      DEFAULT_KEYBOARD_BLUR_BEHAVIOR = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    }
    keyboardBlurBehavior = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    DEFAULT_KEYBOARD_INPUT_MODE = global.android_keyboardInputMode;
    if (undefined === DEFAULT_KEYBOARD_INPUT_MODE) {
      tmp19 = animationConfigs;
      tmp20 = DEFAULT_ANIMATE_ON_MOUNT;
      num11 = 5;
      DEFAULT_KEYBOARD_INPUT_MODE = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_KEYBOARD_INPUT_MODE;
    }
    android_keyboardInputMode = DEFAULT_KEYBOARD_INPUT_MODE;
    DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = global.enableBlurKeyboardOnGesture;
    if (undefined === DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE) {
      tmp21 = animationConfigs;
      tmp22 = DEFAULT_ANIMATE_ON_MOUNT;
      num12 = 5;
      DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    }
    c12 = DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = global.keyboardIncludeBottomOffset;
    if (undefined === DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET) {
      tmp23 = animationConfigs;
      tmp24 = DEFAULT_ANIMATE_ON_MOUNT;
      num13 = 5;
      DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET;
    }
    containerHeight = global.containerHeight;
    ({ containerOffset, topInset } = global);
    num14 = 0;
    if (undefined !== topInset) {
      num14 = topInset;
    }
    c14 = num14;
    bottomInset = global.bottomInset;
    num15 = 0;
    if (undefined !== bottomInset) {
      num15 = bottomInset;
    }
    c15 = num15;
    ({ maxDynamicContentSize, contentHeight, handleHeight, animatedPosition } = global);
    animatedIndex = global.animatedIndex;
    simultaneousHandlers = global.simultaneousHandlers;
    waitFor = global.waitFor;
    activeOffsetX = global.activeOffsetX;
    activeOffsetY = global.activeOffsetY;
    failOffsetX = global.failOffsetX;
    failOffsetY = global.failOffsetY;
    onChange = global.onChange;
    onClose = global.onClose;
    onAnimate = global.onAnimate;
    $modal = global.$modal;
    tmp25 = undefined !== $modal && $modal;
    c27 = tmp25;
    detached = global.detached;
    tmp26 = undefined !== detached && detached;
    c28 = tmp26;
    handleComponent = global.handleComponent;
    ({ backdropComponent, backgroundComponent, renderFooter, accessible, children, BodyComponent } = global);
    if (undefined === accessible) {
      tmp27 = animationConfigs;
      tmp28 = DEFAULT_ANIMATE_ON_MOUNT;
      num16 = 5;
      accessible = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ACCESSIBLE;
    }
    DEFAULT_ACCESSIBILITY_LABEL = global.accessibilityLabel;
    if (undefined === DEFAULT_ACCESSIBILITY_LABEL) {
      tmp29 = animationConfigs;
      tmp30 = DEFAULT_ANIMATE_ON_MOUNT;
      num17 = 5;
      DEFAULT_ACCESSIBILITY_LABEL = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ACCESSIBILITY_LABEL;
    }
    DEFAULT_ACCESSIBILITY_ROLE = global.accessibilityRole;
    if (undefined === DEFAULT_ACCESSIBILITY_ROLE) {
      tmp31 = animationConfigs;
      tmp32 = DEFAULT_ANIMATE_ON_MOUNT;
      num18 = 5;
      DEFAULT_ACCESSIBILITY_ROLE = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ACCESSIBILITY_ROLE;
    }
    obj = require("useBottomSheet");
    INITIAL_CONTAINER_HEIGHT = containerHeight;
    if (null == containerHeight) {
      tmp33 = animationConfigs;
      tmp34 = DEFAULT_ANIMATE_ON_MOUNT;
      num19 = 5;
      INITIAL_CONTAINER_HEIGHT = require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT;
    }
    reactiveSharedValue = obj.useReactiveSharedValue(INITIAL_CONTAINER_HEIGHT);
    c30 = reactiveSharedValue;
    obj2 = require("cancelAnimation");
    pnpm_BottomSheetTsx1 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx1(){const{topInset,bottomInset,$modal,_animatedContainerHeight}=this.__closure;const verticalInset=topInset+bottomInset;return $modal?_animatedContainerHeight.value-verticalInset:_animatedContainerHeight.value;};
    obj = {};
    obj.topInset = num14;
    obj.bottomInset = num15;
    obj.$modal = tmp25;
    obj._animatedContainerHeight = reactiveSharedValue;
    pnpm_BottomSheetTsx1.__closure = obj;
    pnpm_BottomSheetTsx1.__workletHash = 4416945277961;
    pnpm_BottomSheetTsx1.__initData = c12;
    items = [, , , ];
    items[0] = num14;
    items[1] = num15;
    items[2] = tmp25;
    items[3] = reactiveSharedValue;
    derivedValue = obj2.useDerivedValue(pnpm_BottomSheetTsx1, items);
    c31 = derivedValue;
    obj4 = require("useBottomSheet");
    if (null == containerOffset) {
      tmp37 = animationConfigs;
      tmp38 = DEFAULT_ANIMATE_ON_MOUNT;
      num20 = 5;
      containerOffset = require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_OFFSET;
    }
    reactiveSharedValue1 = obj4.useReactiveSharedValue(containerOffset);
    useDerivedValue = reactiveSharedValue1;
    obj5 = require("useBottomSheet");
    if (null == handleHeight) {
      tmp40 = animationConfigs;
      tmp41 = DEFAULT_ANIMATE_ON_MOUNT;
      num21 = 5;
      handleHeight = require("DEFAULT_HANDLE_HEIGHT").INITIAL_HANDLE_HEIGHT;
    }
    reactiveSharedValue2 = obj5.useReactiveSharedValue(handleHeight);
    c33 = reactiveSharedValue2;
    obj6 = require("cancelAnimation");
    sharedValue = require("_slicedToArray");
    c34 = sharedValue;
    obj7 = require("cancelAnimation");
    if (null == contentHeight) {
      tmp44 = animationConfigs;
      tmp45 = DEFAULT_ANIMATE_ON_MOUNT;
      num22 = 5;
      contentHeight = require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT;
    }
    sharedValue1 = obj7.useSharedValue(contentHeight);
    c35 = sharedValue1;
    obj8 = require("useBottomSheet");
    tmp47 = _slicedToArray(obj8.useAnimatedSnapPoints(snapPoints, derivedValue, sharedValue1, reactiveSharedValue2, sharedValue, DEFAULT_DYNAMIC_SIZING, maxDynamicContentSize), 2);
    first = tmp47[0];
    c36 = first;
    tmp49 = tmp47[1];
    c37 = tmp49;
    obj9 = require("cancelAnimation");
    pnpm_BottomSheetTsx2 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx2(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.value[animatedSnapPoints.value.length-1];};
    pnpm_BottomSheetTsx2.__closure = { animatedSnapPoints: first };
    pnpm_BottomSheetTsx2.__workletHash = 2910694947130;
    pnpm_BottomSheetTsx2.__initData = containerHeight;
    items1 = [];
    items1[0] = first;
    derivedValue1 = obj9.useDerivedValue(pnpm_BottomSheetTsx2, items1);
    c38 = derivedValue1;
    obj10 = require("cancelAnimation");
    pnpm_BottomSheetTsx3 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx3(){const{animatedContainerHeight,$modal,detached,bottomInset}=this.__closure;let closedPosition=animatedContainerHeight.value;if($modal||detached){closedPosition=animatedContainerHeight.value+bottomInset;}return closedPosition;};
    obj1 = { animatedContainerHeight: derivedValue, $modal: tmp25, detached: tmp26 };
    obj1.bottomInset = num15;
    pnpm_BottomSheetTsx3.__closure = obj1;
    pnpm_BottomSheetTsx3.__workletHash = 1052527833249;
    pnpm_BottomSheetTsx3.__initData = c14;
    items2 = [, , , ];
    items2[0] = derivedValue;
    items2[1] = tmp25;
    items2[2] = tmp26;
    items2[3] = num15;
    derivedValue2 = obj10.useDerivedValue(pnpm_BottomSheetTsx3, items2);
    BottomSheet = derivedValue2;
    obj12 = require("cancelAnimation");
    pnpm_BottomSheetTsx4 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx4(){const{animatedContainerHeight,animatedHighestSnapPoint}=this.__closure;return animatedContainerHeight.value-animatedHighestSnapPoint.value;};
    pnpm_BottomSheetTsx4.__closure = { animatedContainerHeight: derivedValue, animatedHighestSnapPoint: derivedValue1 };
    pnpm_BottomSheetTsx4.__workletHash = 12626261619737;
    pnpm_BottomSheetTsx4.__initData = c15;
    items3 = [, ];
    items3[0] = derivedValue;
    items3[1] = derivedValue1;
    derivedValue3 = obj12.useDerivedValue(pnpm_BottomSheetTsx4, items3);
    closure_40 = derivedValue3;
    obj13 = require("useBottomSheet");
    num23 = -1;
    if (!DEFAULT_ANIMATE_ON_MOUNT) {
      num23 = num;
    }
    reactiveSharedValue3 = obj13.useReactiveSharedValue(num23);
    closure_41 = reactiveSharedValue3;
    obj14 = require("cancelAnimation");
    sharedValue2 = obj14.useSharedValue(initialPosition);
    INITIAL_POSITION = sharedValue2;
    obj15 = require("cancelAnimation");
    sharedValue3 = obj15.useSharedValue(require("DEFAULT_HANDLE_HEIGHT").INITIAL_VALUE);
    closure_43 = sharedValue3;
    obj16 = require("cancelAnimation");
    sharedValue4 = obj16.useSharedValue(require("DEFAULT_HANDLE_HEIGHT").INITIAL_VALUE);
    closure_44 = sharedValue4;
    obj17 = require("cancelAnimation");
    tmp57 = !DEFAULT_ANIMATE_ON_MOUNT;
    if (!tmp57) {
      tmp57 = -1 === num;
    }
    sharedValue5 = obj17.useSharedValue(tmp57);
    c45 = sharedValue5;
    obj18 = require("cancelAnimation");
    sharedValue6 = obj18.useSharedValue(false);
    closure_46 = sharedValue6;
    obj19 = require("cancelAnimation");
    pnpm_BottomSheetTsx5 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx5(){const{_providedContainerHeight,animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,handleComponent,animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedSnapPoints,INITIAL_SNAP_POINT}=this.__closure;let isContainerHeightCalculated=false;if(_providedContainerHeight!==null||_providedContainerHeight!==undefined){isContainerHeightCalculated=true;}if(animatedContainerHeight.value!==INITIAL_CONTAINER_HEIGHT){isContainerHeightCalculated=true;}let isHandleHeightCalculated=false;if(handleComponent===null){animatedHandleHeight.value=0;isHandleHeightCalculated=true;}if(animatedHandleHeight.value!==INITIAL_HANDLE_HEIGHT){isHandleHeightCalculated=true;}let isSnapPointsNormalized=false;if(animatedSnapPoints.value[0]!==INITIAL_SNAP_POINT){isSnapPointsNormalized=true;}return isContainerHeightCalculated&&isHandleHeightCalculated&&isSnapPointsNormalized;};
    obj2 = { _providedContainerHeight: containerHeight, animatedContainerHeight: derivedValue, INITIAL_CONTAINER_HEIGHT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT, handleComponent, animatedHandleHeight: reactiveSharedValue2, INITIAL_HANDLE_HEIGHT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_HANDLE_HEIGHT, animatedSnapPoints: first, INITIAL_SNAP_POINT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_SNAP_POINT };
    pnpm_BottomSheetTsx5.__closure = obj2;
    pnpm_BottomSheetTsx5.__workletHash = 16854996685215;
    pnpm_BottomSheetTsx5.__initData = animatedPosition;
    items4 = [, , , , ];
    items4[0] = containerHeight;
    items4[1] = derivedValue;
    items4[2] = reactiveSharedValue2;
    items4[3] = first;
    items4[4] = handleComponent;
    derivedValue4 = obj19.useDerivedValue(pnpm_BottomSheetTsx5, items4);
    closure_47 = derivedValue4;
    obj21 = require("cancelAnimation");
    sharedValue7 = obj21.useSharedValue(false);
    closure_48 = sharedValue7;
    obj22 = require("cancelAnimation");
    sharedValue8 = obj22.useSharedValue(false);
    pnpm_BottomSheetTsx5 = sharedValue8;
    obj23 = require("cancelAnimation");
    sharedValue9 = obj23.useSharedValue(false);
    closure_50 = sharedValue9;
    obj24 = require("cancelAnimation");
    sharedValue10 = obj24.useSharedValue(require("Directions").State.UNDETERMINED);
    closure_51 = sharedValue10;
    obj25 = require("cancelAnimation");
    sharedValue11 = obj25.useSharedValue(require("Directions").State.UNDETERMINED);
    UNDETERMINED = sharedValue11;
    obj26 = require("useBottomSheet");
    scrollable = obj26.useScrollable();
    animatedScrollableType = scrollable.animatedScrollableType;
    animatedScrollableContentOffsetY = scrollable.animatedScrollableContentOffsetY;
    closure_54 = animatedScrollableContentOffsetY;
    animatedScrollableOverrideState = scrollable.animatedScrollableOverrideState;
    closure_55 = animatedScrollableOverrideState;
    isScrollableRefreshable = scrollable.isScrollableRefreshable;
    setScrollableRef = scrollable.setScrollableRef;
    removeScrollableRef = scrollable.removeScrollableRef;
    obj27 = require("useBottomSheet");
    obj3 = {};
    obj3.includeBottomOffset = DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET;
    keyboard = obj27.useKeyboard(obj3);
    state = keyboard.state;
    height = keyboard.height;
    animationDuration = keyboard.animationDuration;
    animationEasing = keyboard.animationEasing;
    shouldHandleKeyboardEvents = keyboard.shouldHandleKeyboardEvents;
    closure_63 = shouldHandleKeyboardEvents;
    obj29 = require("cancelAnimation");
    sharedValue12 = require("_slicedToArray");
    closure_64 = sharedValue12;
    obj30 = require("cancelAnimation");
    reducedMotion = obj30.useReducedMotion();
    useReducedMotion = reducedMotion;
    items5 = [, ];
    items5[0] = reducedMotion;
    items5[1] = overrideReduceMotion;
    tmp70 = DEFAULT_ENABLE_OVER_DRAG(() => {
      if (overrideReduceMotion) {
        if (overrideReduceMotion !== animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).ReduceMotion.System) {
          let tmp4 = overrideReduceMotion === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).ReduceMotion.Always;
        }
        return tmp4;
      }
      tmp4 = reducedMotion;
    }, items5);
    closure_66 = tmp70;
    obj31 = require("cancelAnimation");
    sharedValue13 = obj31.useSharedValue(require("GESTURE_SOURCE").ANIMATION_STATE.UNDETERMINED);
    closure_67 = sharedValue13;
    obj32 = require("cancelAnimation");
    sharedValue14 = obj32.useSharedValue(require("GESTURE_SOURCE").ANIMATION_SOURCE.MOUNT);
    closure_68 = sharedValue14;
    obj33 = require("cancelAnimation");
    pnpm_BottomSheetTsx6 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx6(){const{animatedPosition,animatedClosedPosition,SHEET_STATE,animatedContainerHeight,animatedSheetHeight,animatedKeyboardHeightInContainer,keyboardBehavior,KEYBOARD_BEHAVIOR,isInTemporaryPosition}=this.__closure;if(animatedPosition.value>=animatedClosedPosition.value){return SHEET_STATE.CLOSED;}const extendedPosition=animatedContainerHeight.value-animatedSheetHeight.value;if(animatedPosition.value===extendedPosition){return SHEET_STATE.EXTENDED;}const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;const extendedPositionWithKeyboard=Math.max(0,animatedContainerHeight.value-(animatedSheetHeight.value+keyboardHeightInContainer));if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&isInTemporaryPosition.value&&animatedPosition.value===extendedPositionWithKeyboard){return SHEET_STATE.EXTENDED;}if(animatedPosition.value===0){return SHEET_STATE.FILL_PARENT;}if(animatedPosition.value<extendedPosition){return SHEET_STATE.OVER_EXTENDED;}return SHEET_STATE.OPENED;};
    obj4 = { animatedPosition: sharedValue2, animatedClosedPosition: derivedValue2, SHEET_STATE: require("GESTURE_SOURCE").SHEET_STATE, animatedContainerHeight: derivedValue, animatedSheetHeight: derivedValue3, animatedKeyboardHeightInContainer: sharedValue12 };
    obj4.keyboardBehavior = keyboardBehavior;
    obj4.KEYBOARD_BEHAVIOR = require("GESTURE_SOURCE").KEYBOARD_BEHAVIOR;
    obj4.isInTemporaryPosition = sharedValue7;
    pnpm_BottomSheetTsx6.__closure = obj4;
    pnpm_BottomSheetTsx6.__workletHash = 5310633624984;
    pnpm_BottomSheetTsx6.__initData = animatedIndex;
    items6 = [, , , , , , ];
    items6[0] = derivedValue2;
    items6[1] = derivedValue;
    items6[2] = sharedValue12;
    items6[3] = sharedValue2;
    items6[4] = derivedValue3;
    items6[5] = sharedValue7;
    items6[6] = keyboardBehavior;
    derivedValue5 = obj33.useDerivedValue(pnpm_BottomSheetTsx6, items6);
    closure_69 = derivedValue5;
    obj35 = require("cancelAnimation");
    pnpm_BottomSheetTsx7 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx7(){const{enableContentPanningGesture,SCROLLABLE_STATE,animatedScrollableOverrideState,animatedSheetState,SHEET_STATE,animatedKeyboardState,KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE}=this.__closure;if(!enableContentPanningGesture){return SCROLLABLE_STATE.UNLOCKED;}if(animatedScrollableOverrideState.value!==SCROLLABLE_STATE.UNDETERMINED){return animatedScrollableOverrideState.value;}if(animatedSheetState.value===SHEET_STATE.FILL_PARENT){return SCROLLABLE_STATE.UNLOCKED;}if(animatedSheetState.value===SHEET_STATE.EXTENDED){return SCROLLABLE_STATE.UNLOCKED;}if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return SCROLLABLE_STATE.UNLOCKED;}return SCROLLABLE_STATE.LOCKED;};
    obj5 = {};
    obj5.enableContentPanningGesture = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    obj5.SCROLLABLE_STATE = require("GESTURE_SOURCE").SCROLLABLE_STATE;
    obj5.animatedScrollableOverrideState = animatedScrollableOverrideState;
    obj5.animatedSheetState = derivedValue5;
    obj5.SHEET_STATE = require("GESTURE_SOURCE").SHEET_STATE;
    obj5.animatedKeyboardState = state;
    obj5.KEYBOARD_STATE = require("GESTURE_SOURCE").KEYBOARD_STATE;
    obj5.animatedAnimationState = sharedValue13;
    obj5.ANIMATION_STATE = require("GESTURE_SOURCE").ANIMATION_STATE;
    pnpm_BottomSheetTsx7.__closure = obj5;
    pnpm_BottomSheetTsx7.__workletHash = 1522258685135;
    pnpm_BottomSheetTsx7.__initData = simultaneousHandlers;
    items7 = [, , , , ];
    items7[0] = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    items7[1] = sharedValue13;
    items7[2] = state;
    items7[3] = animatedScrollableOverrideState;
    items7[4] = derivedValue5;
    derivedValue6 = obj35.useDerivedValue(pnpm_BottomSheetTsx7, items7);
    closure_70 = derivedValue6;
    obj37 = require("cancelAnimation");
    pnpm_BottomSheetTsx8 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx8(){const{animatedSnapPoints,animatedContainerHeight,isLayoutCalculated,interpolate,animatedPosition,Extrapolation,android_keyboardInputMode,KEYBOARD_INPUT_MODE,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE,isInTemporaryPosition,animatedCurrentIndex,animatedNextPositionIndex}=this.__closure;const adjustedSnapPoints=animatedSnapPoints.value.slice().reverse();const adjustedSnapPointsIndexes=animatedSnapPoints.value.slice().map(function(_,index){return index;}).reverse();adjustedSnapPoints.push(animatedContainerHeight.value);adjustedSnapPointsIndexes.push(-1);const currentIndex=isLayoutCalculated.value?interpolate(animatedPosition.value,adjustedSnapPoints,adjustedSnapPointsIndexes,Extrapolation.CLAMP):-1;if(android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize&&animatedAnimationSource.value===ANIMATION_SOURCE.KEYBOARD&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&isInTemporaryPosition.value){return Math.max(animatedCurrentIndex.value,currentIndex);}if(animatedAnimationSource.value===ANIMATION_SOURCE.SNAP_POINT_CHANGE&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return animatedNextPositionIndex.value;}return currentIndex;};
    obj6 = { animatedSnapPoints: first, animatedContainerHeight: derivedValue, isLayoutCalculated: derivedValue4, interpolate: require("cancelAnimation").interpolate, animatedPosition: sharedValue2, Extrapolation: require("cancelAnimation").Extrapolation };
    obj6.android_keyboardInputMode = DEFAULT_KEYBOARD_INPUT_MODE;
    obj6.KEYBOARD_INPUT_MODE = require("GESTURE_SOURCE").KEYBOARD_INPUT_MODE;
    obj6.animatedAnimationSource = sharedValue14;
    obj6.ANIMATION_SOURCE = require("GESTURE_SOURCE").ANIMATION_SOURCE;
    obj6.animatedAnimationState = sharedValue13;
    obj6.ANIMATION_STATE = require("GESTURE_SOURCE").ANIMATION_STATE;
    obj6.isInTemporaryPosition = sharedValue7;
    obj6.animatedCurrentIndex = reactiveSharedValue3;
    obj6.animatedNextPositionIndex = sharedValue4;
    pnpm_BottomSheetTsx8.__closure = obj6;
    pnpm_BottomSheetTsx8.__workletHash = 1383862303157;
    pnpm_BottomSheetTsx8.__initData = waitFor;
    items8 = [, , , , , , , , , ];
    items8[0] = DEFAULT_KEYBOARD_INPUT_MODE;
    items8[1] = sharedValue14;
    items8[2] = sharedValue13;
    items8[3] = derivedValue;
    items8[4] = reactiveSharedValue3;
    items8[5] = sharedValue4;
    items8[6] = sharedValue2;
    items8[7] = first;
    items8[8] = sharedValue7;
    items8[9] = derivedValue4;
    derivedValue7 = obj37.useDerivedValue(pnpm_BottomSheetTsx8, items8);
    c71 = derivedValue7;
    items9 = [, , ];
    items9[0] = onChange;
    items9[1] = reactiveSharedValue3;
    items9[2] = tmp49;
    tmp76 = enablePanDownToClose(function handleOnChange(arg0, arg1) {
      if (onChange) {
        if (arg0 === tmp49.value) {
          let PROVIDED = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).SNAP_POINT_TYPE.DYNAMIC;
        } else {
          PROVIDED = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).SNAP_POINT_TYPE.PROVIDED;
        }
        onChange(arg0, arg1, PROVIDED);
        const tmp = onChange;
      }
    }, items9);
    onChange = tmp76;
    items10 = [, , ];
    items10[0] = onAnimate;
    items10[1] = reactiveSharedValue3;
    items10[2] = sharedValue2;
    tmp77 = enablePanDownToClose(function handleOnAnimate(arg0, arg1, arg2) {
      if (onAnimate) {
        let tmp2 = arg0 === reactiveSharedValue3.value;
        if (tmp2) {
          tmp2 = -1 !== arg0;
        }
        if (!tmp2) {
          onAnimate(reactiveSharedValue3.value, arg0, sharedValue2.value, arg1, arg2);
        }
      }
    }, items10);
    ANIMATION_STATE = tmp77;
    obj39 = require("cancelAnimation");
    pnpm_BottomSheetTsx9 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx9(){const{cancelAnimation,animatedPosition,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE}=this.__closure;cancelAnimation(animatedPosition);animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;};
    obj7 = { cancelAnimation: require("cancelAnimation").cancelAnimation, animatedPosition: sharedValue2, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE };
    pnpm_BottomSheetTsx9.__closure = obj7;
    pnpm_BottomSheetTsx9.__workletHash = 17031011772977;
    pnpm_BottomSheetTsx9.__initData = activeOffsetX;
    items11 = [, , ];
    items11[0] = sharedValue2;
    items11[1] = sharedValue13;
    items11[2] = sharedValue14;
    workletCallback = obj39.useWorkletCallback(pnpm_BottomSheetTsx9, items11);
    pnpm_BottomSheetTsx9 = workletCallback;
    obj41 = require("cancelAnimation");
    f45085 = obj41.useWorkletCallback((() => {
      function animateToPositionCompleted(arg0) {
        if (arg0) {
          if (outer1_68.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.MOUNT) {
            outer1_45.value = true;
          }
          outer1_49.value = false;
          outer1_68.value = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.NONE;
          outer1_67.value = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.STOPPED;
          outer1_43.value = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).INITIAL_VALUE;
          outer1_44.value = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).INITIAL_VALUE;
          outer1_50.value = false;
        }
      }
      animateToPositionCompleted.__closure = { __DEV__: false, runOnJS: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnJS, print: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[9]).print, animatedCurrentIndex: reactiveSharedValue3, animatedNextPosition: sharedValue3, animatedNextPositionIndex: sharedValue4, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE, isAnimatedOnMount: sharedValue5, isForcedClosing: sharedValue8, animatedAnimationState: sharedValue13, ANIMATION_STATE: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE, INITIAL_VALUE: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).INITIAL_VALUE, animatedContainerHeightDidChange: sharedValue9 };
      animateToPositionCompleted.__workletHash = 16634512058026;
      animateToPositionCompleted.__initData = activeOffsetY;
      return animateToPositionCompleted;
    })());
    obj42 = require("cancelAnimation");
    items12 = [, , , ];
    items12[0] = tmp77;
    items12[1] = keyboardBehavior;
    items12[2] = animationConfigs;
    items12[3] = overrideReduceMotion;
    workletCallback1 = obj42.useWorkletCallback((() => {
      function animateToPosition(value, value2) {
        let num = 0;
        if (arguments.length > 2) {
          num = 0;
          if (undefined !== arguments[2]) {
            num = arguments[2];
          }
        }
        if (arguments.length > 3) {
          let tmp = arguments[3];
        }
        if (value !== outer1_42.value) {
          if (undefined !== value) {
            if (outer1_67.value !== animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING) {
              if (outer1_67.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING) {
                outer1_74();
              }
              outer1_67.value = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING;
              outer1_68.value = value2;
              outer1_43.value = value;
              let tmp14 = outer1_59.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_STATE.SHOWN;
              if (tmp14) {
                tmp14 = outer1_9 !== animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BEHAVIOR.extend;
              }
              if (tmp14) {
                tmp14 = value < outer1_42.value;
              }
              let num2 = 0;
              if (tmp14) {
                num2 = outer1_64.value;
              }
              value = outer1_36.value;
              outer1_44.value = value.indexOf(value + num2);
              let obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
              obj.runOnJS(outer1_73)(outer1_44.value, value, value2);
              obj = { point: value };
              if (!tmp) {
                tmp = outer1_0;
              }
              obj.configs = tmp;
              obj.velocity = num;
              obj.overrideReduceMotion = outer1_8;
              obj.onComplete = outer1_75;
              outer1_42.value = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[9]).animate(obj);
              const obj2 = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[9]);
              const tmp27 = outer1_42;
            }
          }
        }
      }
      animateToPosition.__closure = { __DEV__: false, runOnJS: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnJS, print: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[9]).print, animatedPosition: sharedValue2, animatedAnimationState: sharedValue13, ANIMATION_STATE: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE, animatedNextPosition: sharedValue3, stopAnimation: workletCallback, animatedAnimationSource: sharedValue14, animatedKeyboardState: state, KEYBOARD_STATE: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_STATE, keyboardBehavior, KEYBOARD_BEHAVIOR: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BEHAVIOR, animatedKeyboardHeightInContainer: sharedValue12, animatedNextPositionIndex: sharedValue4, animatedSnapPoints: first, handleOnAnimate: closure_73, animate: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[9]).animate, _providedAnimationConfigs: animationConfigs, _providedOverrideReduceMotion: overrideReduceMotion, animateToPositionCompleted: closure_75 };
      animateToPosition.__workletHash = 11829586443894;
      animateToPosition.__initData = failOffsetX;
      return animateToPosition;
    })(), items12);
    closure_76 = workletCallback1;
    obj43 = require("cancelAnimation");
    setToPosition = function setToPosition(value) {
      let tmp = value === sharedValue2.value;
      if (!tmp) {
        tmp = undefined === value;
      }
      if (!tmp) {
        let tmp5 = sharedValue13.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING;
        if (tmp5) {
          tmp5 = value === sharedValue3.value;
        }
        tmp = tmp5;
      }
      if (!tmp) {
        sharedValue3.value = value;
        value = first.value;
        sharedValue4.value = value.indexOf(value);
        workletCallback();
        sharedValue2.value = value;
        sharedValue9.value = false;
      }
    };
    obj8 = { animatedPosition: sharedValue2, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, animatedNextPosition: sharedValue3, __DEV__: false, runOnJS: require("cancelAnimation").runOnJS, print: require("normalizeSnapPoint").print, BottomSheet, animatedNextPositionIndex: sharedValue4, animatedSnapPoints: first, stopAnimation: workletCallback, animatedContainerHeightDidChange: sharedValue9 };
    setToPosition.__closure = obj8;
    setToPosition.__workletHash = 1470510512522;
    setToPosition.__initData = failOffsetY;
    workletCallback2 = obj43.useWorkletCallback(setToPosition, []);
    closure_77 = workletCallback2;
    obj45 = require("cancelAnimation");
    items13 = [, , , , , , , , , , , , ];
    items13[0] = sharedValue10;
    items13[1] = reactiveSharedValue3;
    items13[2] = sharedValue11;
    items13[3] = derivedValue1;
    items13[4] = sharedValue12;
    items13[5] = state;
    items13[6] = sharedValue2;
    items13[7] = first;
    items13[8] = sharedValue7;
    items13[9] = sharedValue5;
    items13[10] = keyboardBehavior;
    items13[11] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    items13[12] = num;
    workletCallback3 = obj45.useWorkletCallback((() => {
      function getEvaluatedPosition(arg0) {
        let value = outer1_41.value;
        value = outer1_36.value;
        value = outer1_59.value;
        const value1 = outer1_38.value;
        if (arg0 === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.KEYBOARD) {
          if (outer1_10 === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BLUR_BEHAVIOR.restore) {
            if (value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_STATE.HIDDEN) {
              if (outer1_51.value !== animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[7]).State.ACTIVE) {
                if (outer1_52.value !== animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[7]).State.ACTIVE) {
                  outer1_48.value = false;
                  return value[value];
                }
              }
            }
          }
        }
        if (outer1_9 === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BEHAVIOR.extend) {
          if (value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_STATE.SHOWN) {
            return value1;
          }
        }
        if (outer1_9 === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BEHAVIOR.fillParent) {
          if (value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_STATE.SHOWN) {
            outer1_48.value = true;
            return 0;
          }
        }
        if (outer1_9 === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BEHAVIOR.interactive) {
          if (value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_STATE.SHOWN) {
            if ("adjustResize" !== outer1_11) {
              outer1_48.value = true;
              const _Math = Math;
              return Math.max(0, value1 - outer1_64.value);
            }
          }
        }
        if (outer1_48.value) {
          let value2 = outer1_42.value;
        } else if (outer1_45.value) {
          value2 = value[value];
        } else if (-1 === outer1_1) {
          value2 = outer1_39.value;
        } else {
          value2 = value[outer1_1];
        }
        return value2;
      }
      getEvaluatedPosition.__closure = { animatedCurrentIndex: reactiveSharedValue3, animatedSnapPoints: first, animatedKeyboardState: state, animatedHighestSnapPoint: derivedValue1, ANIMATION_SOURCE: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE, keyboardBlurBehavior: DEFAULT_KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_STATE: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_STATE, animatedContentGestureState: sharedValue10, State: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[7]).State, animatedHandleGestureState: sharedValue11, isInTemporaryPosition: sharedValue7, keyboardBehavior, KEYBOARD_BEHAVIOR: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BEHAVIOR, Platform: overrideReduceMotion, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, animatedKeyboardHeightInContainer: sharedValue12, animatedPosition: sharedValue2, isAnimatedOnMount: sharedValue5, _providedIndex: num, animatedClosedPosition: derivedValue2 };
      getEvaluatedPosition.__workletHash = 10275779842691;
      getEvaluatedPosition.__initData = onChange;
      return getEvaluatedPosition;
    })(), items13);
    animationConfigs = workletCallback3;
    obj46 = require("cancelAnimation");
    items14 = [, , , ];
    items14[0] = workletCallback3;
    items14[1] = workletCallback1;
    items14[2] = workletCallback2;
    items14[3] = tmp70;
    workletCallback4 = obj46.useWorkletCallback((() => {
      function evaluatePosition(arg0, arg1) {
        if (!outer1_49.value) {
          if (outer1_47.value) {
            const tmp5 = outer1_78(arg0);
            if (outer1_45.value) {
              if (outer1_67.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING) {
                if (-1 === outer1_44.value) {
                  if (!outer1_48.value) {
                    outer1_77(outer1_39.value);
                  }
                }
                if (outer1_44.value !== outer1_41.value) {
                  outer1_76(outer1_36.value[outer1_44.value], arg0, undefined, arg1);
                }
              }
              if (outer1_67.value !== animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING) {
                if (-1 === outer1_71.value) {
                  outer1_77(outer1_39.value);
                }
              }
              if (outer1_50.value) {
                outer1_77(tmp5);
              } else {
                outer1_76(tmp5, arg0, undefined, arg1);
              }
            } else if (outer1_2) {
              outer1_76(tmp5, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.MOUNT, undefined, arg1);
            } else {
              outer1_77(tmp5);
              outer1_45.value = true;
            }
          }
        }
      }
      evaluatePosition.__closure = { isForcedClosing: sharedValue8, ANIMATION_SOURCE: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE, isLayoutCalculated: derivedValue4, getEvaluatedPosition: workletCallback3, isAnimatedOnMount: sharedValue5, animateOnMount: DEFAULT_ANIMATE_ON_MOUNT, animateToPosition: workletCallback1, setToPosition: workletCallback2, animatedAnimationState: sharedValue13, ANIMATION_STATE: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE, animatedNextPositionIndex: sharedValue4, isInTemporaryPosition: sharedValue7, animatedClosedPosition: derivedValue2, animatedCurrentIndex: reactiveSharedValue3, animatedSnapPoints: first, animatedIndex: derivedValue7, reduceMotion: closure_66, animatedPosition: sharedValue2, animatedContainerHeightDidChange: sharedValue9 };
      evaluatePosition.__workletHash = 15100134260939;
      evaluatePosition.__initData = onClose;
      return evaluatePosition;
    })(), items14);
    ANIMATION_STATE = workletCallback4;
    obj47 = require("useBottomSheet");
    stableCallback = obj47.useStableCallback(function handleSnapToIndex(arg0, arg1) {
      let value = first.get();
      if (derivedValue4.get()) {
        let tmp4 = arg0 >= -1;
        if (tmp4) {
          tmp4 = arg0 <= value.length - 1;
        }
        10(DEFAULT_ANIMATE_ON_MOUNT[10])(tmp4, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
        value = derivedValue4.value;
        if (value) {
          value = arg0 !== sharedValue4.value;
        }
        if (value) {
          value = tmp6 !== sharedValue3.value;
        }
        if (value) {
          value = !sharedValue8.value;
        }
        if (value) {
          sharedValue7.value = false;
          const obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
          animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1)(tmp6, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.USER, 0, arg1);
          const runOnUIResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1);
        }
        const tmp3 = 10(DEFAULT_ANIMATE_ON_MOUNT[10]);
      }
    });
    useStableCallback = stableCallback;
    obj48 = require("cancelAnimation");
    handleSnapToPosition = function handleSnapToPosition(arg0, arg1) {
      const normalizeSnapPointResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[9]).normalizeSnapPoint(arg0, derivedValue.value);
      let tmp2 = derivedValue4;
      if (derivedValue4) {
        tmp2 = normalizeSnapPointResult !== sharedValue3.value;
      }
      if (tmp2) {
        tmp2 = !sharedValue8.value;
      }
      if (tmp2) {
        sharedValue7.value = true;
        const obj2 = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
        animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1)(normalizeSnapPointResult, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.USER, 0, arg1);
        const runOnUIResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1);
      }
    };
    obj9 = { __DEV__: false, print: require("normalizeSnapPoint").print, BottomSheet, normalizeSnapPoint: require("normalizeSnapPoint").normalizeSnapPoint, animatedContainerHeight: derivedValue, isLayoutCalculated: derivedValue4, animatedNextPosition: sharedValue3, isForcedClosing: sharedValue8, isInTemporaryPosition: sharedValue7, runOnUI: require("cancelAnimation").runOnUI, animateToPosition: workletCallback1, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE };
    handleSnapToPosition.__closure = obj9;
    handleSnapToPosition.__workletHash = 15646490046918;
    handleSnapToPosition.__initData = onAnimate;
    items15 = [, , , , , , ];
    items15[0] = workletCallback1;
    items15[1] = num15;
    items15[2] = num14;
    items15[3] = derivedValue4;
    items15[4] = sharedValue8;
    items15[5] = derivedValue;
    items15[6] = sharedValue2;
    workletCallback5 = obj48.useWorkletCallback(handleSnapToPosition, items15);
    ANIMATION_SOURCE = workletCallback5;
    items16 = [, , , , , ];
    items16[0] = workletCallback1;
    items16[1] = sharedValue8;
    items16[2] = derivedValue4;
    items16[3] = sharedValue7;
    items16[4] = sharedValue3;
    items16[5] = derivedValue2;
    tmp85 = enablePanDownToClose(function handleClose(arg0) {
      let value = derivedValue2.value;
      value = derivedValue4.value;
      if (value) {
        value = value !== sharedValue3.value;
      }
      if (value) {
        value = !sharedValue8.value;
      }
      if (value) {
        sharedValue7.value = false;
        const obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
        animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1)(value, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1);
      }
    }, items16);
    handleSnapToPosition = tmp85;
    items17 = [, , , , ];
    items17[0] = workletCallback1;
    items17[1] = sharedValue8;
    items17[2] = sharedValue7;
    items17[3] = sharedValue3;
    items17[4] = derivedValue2;
    tmp86 = enablePanDownToClose(function handleForceClose(arg0) {
      let value = derivedValue2.value;
      value = value === sharedValue3.value;
      if (!value) {
        value = sharedValue8.value;
      }
      if (!value) {
        sharedValue7.value = false;
        sharedValue8.value = true;
        const obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
        animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1)(value, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1);
      }
    }, items17);
    handleForceClose = tmp86;
    items18 = [, , , , , , ];
    items18[0] = workletCallback1;
    items18[1] = sharedValue7;
    items18[2] = derivedValue4;
    items18[3] = sharedValue8;
    items18[4] = first;
    items18[5] = sharedValue3;
    items18[6] = sharedValue4;
    tmp87 = enablePanDownToClose(function handleExpand(arg0) {
      let value = first.value;
      value = derivedValue4.value;
      if (value) {
        value = value.length - 1 !== sharedValue4.value;
      }
      if (value) {
        value = tmp !== sharedValue3.value;
      }
      if (value) {
        value = !sharedValue8.value;
      }
      if (value) {
        sharedValue7.value = false;
        const obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
        animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1)(tmp, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1);
      }
    }, items18);
    closure_84 = tmp87;
    items19 = [, , , , , , ];
    items19[0] = workletCallback1;
    items19[1] = sharedValue8;
    items19[2] = derivedValue4;
    items19[3] = sharedValue7;
    items19[4] = first;
    items19[5] = sharedValue3;
    items19[6] = sharedValue4;
    tmp88 = enablePanDownToClose(function handleCollapse(arg0) {
      first = first.value[0];
      let tmp2 = derivedValue4;
      if (derivedValue4) {
        tmp2 = 0 !== sharedValue4.value;
      }
      if (tmp2) {
        tmp2 = first !== sharedValue3.value;
      }
      if (tmp2) {
        tmp2 = !sharedValue8.value;
      }
      if (tmp2) {
        sharedValue7.value = false;
        const obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
        animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1)(first, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback1);
      }
    }, items19);
    handleExpand = tmp88;
    tmp89 = DEFAULT_DYNAMIC_SIZING(arg1, () => ({ snapToIndex: stableCallback, snapToPosition: workletCallback5, expand: closure_84, collapse: closure_85, close: closure_82, forceClose: closure_83 }));
    items20 = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    items20[0] = derivedValue7;
    items20[1] = sharedValue2;
    items20[2] = sharedValue1;
    items20[3] = derivedValue3;
    items20[4] = animatedScrollableType;
    items20[5] = sharedValue10;
    items20[6] = sharedValue11;
    items20[7] = derivedValue2;
    items20[8] = sharedValue;
    items20[9] = derivedValue;
    items20[10] = reactiveSharedValue2;
    items20[11] = sharedValue13;
    items20[12] = state;
    items20[13] = height;
    items20[14] = sharedValue12;
    items20[15] = derivedValue5;
    items20[16] = derivedValue1;
    items20[17] = derivedValue6;
    items20[18] = animatedScrollableOverrideState;
    items20[19] = first;
    items20[20] = shouldHandleKeyboardEvents;
    items20[21] = animatedScrollableContentOffsetY;
    items20[22] = isScrollableRefreshable;
    items20[23] = sharedValue6;
    items20[24] = sharedValue7;
    items20[25] = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    items20[26] = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    items20[27] = enableOverDrag;
    items20[28] = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    items20[29] = DEFAULT_DYNAMIC_SIZING;
    items20[30] = DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    items20[31] = simultaneousHandlers;
    items20[32] = waitFor;
    items20[33] = activeOffsetX;
    items20[34] = activeOffsetY;
    items20[35] = failOffsetX;
    items20[36] = failOffsetY;
    items20[37] = setScrollableRef;
    items20[38] = removeScrollableRef;
    items20[39] = workletCallback1;
    items20[40] = workletCallback;
    items21 = [, , , , , , , ];
    items21[0] = derivedValue7;
    items21[1] = sharedValue2;
    items21[2] = stableCallback;
    items21[3] = workletCallback5;
    items21[4] = tmp87;
    items21[5] = tmp88;
    items21[6] = tmp85;
    items21[7] = tmp86;
    tmp90 = DEFAULT_ENABLE_OVER_DRAG(() => ({ enableContentPanningGesture: DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, enableDynamicSizing: DEFAULT_DYNAMIC_SIZING, overDragResistanceFactor: DEFAULT_OVER_DRAG_RESISTANCE_FACTOR, enableOverDrag, enablePanDownToClose: DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE, animatedAnimationState: sharedValue13, animatedSheetState: derivedValue5, animatedScrollableState: derivedValue6, animatedScrollableOverrideState, animatedContentGestureState: sharedValue10, animatedHandleGestureState: sharedValue11, animatedKeyboardState: state, animatedScrollableType, animatedIndex: derivedValue7, animatedPosition: sharedValue2, animatedSheetHeight: derivedValue3, animatedContentHeight: sharedValue1, animatedClosedPosition: derivedValue2, animatedHandleHeight: reactiveSharedValue2, animatedFooterHeight: sharedValue, animatedKeyboardHeight: height, animatedKeyboardHeightInContainer: sharedValue12, animatedContainerHeight: derivedValue, animatedSnapPoints: first, animatedHighestSnapPoint: derivedValue1, animatedScrollableContentOffsetY, isInTemporaryPosition: sharedValue7, isContentHeightFixed: sharedValue6, isScrollableRefreshable, shouldHandleKeyboardEvents, simultaneousHandlers, waitFor, activeOffsetX, activeOffsetY, failOffsetX, failOffsetY, enableBlurKeyboardOnGesture: DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE, animateToPosition: workletCallback1, stopAnimation: workletCallback, setScrollableRef, removeScrollableRef }), items20);
    tmp91 = DEFAULT_ENABLE_OVER_DRAG(() => ({ animatedIndex: derivedValue7, animatedPosition: sharedValue2, snapToIndex: stableCallback, snapToPosition: workletCallback5, expand: closure_84, collapse: closure_85, close: closure_82, forceClose: closure_83 }), items21);
    obj50 = require("cancelAnimation");
    pnpm_BottomSheetTsx16 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx16(){const{animatedContainerHeight}=this.__closure;return animatedContainerHeight.value;};
    pnpm_BottomSheetTsx16.__closure = { animatedContainerHeight: derivedValue };
    pnpm_BottomSheetTsx16.__workletHash = 12308480249646;
    pnpm_BottomSheetTsx16.__initData = c27;
    pnpm_BottomSheetTsx17 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx17(result,previous){const{INITIAL_CONTAINER_HEIGHT,animatedContainerHeightDidChange,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,animatedNextPositionIndex,animateToPosition,animatedClosedPosition}=this.__closure;if(result===INITIAL_CONTAINER_HEIGHT){return;}animatedContainerHeightDidChange.value=result!==previous;if(animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE&&animatedNextPositionIndex.value===-1){animateToPosition(animatedClosedPosition.value,ANIMATION_SOURCE.GESTURE);}};
    obj10 = { INITIAL_CONTAINER_HEIGHT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT, animatedContainerHeightDidChange: sharedValue9, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE, animatedNextPositionIndex: sharedValue4, animateToPosition: workletCallback1, animatedClosedPosition: derivedValue2 };
    pnpm_BottomSheetTsx17.__closure = obj10;
    pnpm_BottomSheetTsx17.__workletHash = 14620022635386;
    pnpm_BottomSheetTsx17.__initData = c28;
    animatedReaction = obj50.useAnimatedReaction(pnpm_BottomSheetTsx16, pnpm_BottomSheetTsx17);
    obj52 = require("cancelAnimation");
    pnpm_BottomSheetTsx18 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx18(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.value;};
    pnpm_BottomSheetTsx18.__closure = { animatedSnapPoints: first };
    pnpm_BottomSheetTsx18.__workletHash = 16103751497216;
    pnpm_BottomSheetTsx18.__initData = handleComponent;
    pnpm_BottomSheetTsx19 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx19(result,previous){const{isAnimatedOnMount,isLayoutCalculated,__DEV__,runOnJS,print,evaluatePosition,ANIMATION_SOURCE}=this.__closure;if(JSON.stringify(result)===JSON.stringify(previous)&&isAnimatedOnMount.value){return;}if(!isLayoutCalculated.value){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'useAnimatedReaction::OnSnapPointChange',category:'effect',params:{result:result}});}evaluatePosition(ANIMATION_SOURCE.SNAP_POINT_CHANGE);};
    obj11 = { isAnimatedOnMount: sharedValue5, isLayoutCalculated: derivedValue4, __DEV__: false, runOnJS: require("cancelAnimation").runOnJS, print: require("normalizeSnapPoint").print, evaluatePosition: workletCallback4, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE };
    pnpm_BottomSheetTsx19.__closure = obj11;
    pnpm_BottomSheetTsx19.__workletHash = 1047659532107;
    pnpm_BottomSheetTsx19.__initData = c30;
    items22 = [, ];
    items22[0] = derivedValue4;
    items22[1] = first;
    animatedReaction1 = obj52.useAnimatedReaction(pnpm_BottomSheetTsx18, pnpm_BottomSheetTsx19, items22);
    obj54 = require("cancelAnimation");
    pnpm_BottomSheetTsx20 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx20(){const{animatedKeyboardState,animatedKeyboardHeight}=this.__closure;return{_keyboardState:animatedKeyboardState.value,_keyboardHeight:animatedKeyboardHeight.value};};
    pnpm_BottomSheetTsx20.__closure = { animatedKeyboardState: state, animatedKeyboardHeight: height };
    pnpm_BottomSheetTsx20.__workletHash = 14903064847424;
    pnpm_BottomSheetTsx20.__initData = c31;
    pnpm_BottomSheetTsx21 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx21(result,_previousResult){const{KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,__DEV__,runOnJS,print,BottomSheet,animatedKeyboardHeightInContainer,$modal,bottomInset,animatedContainerOffset,Platform,android_keyboardInputMode,KEYBOARD_INPUT_MODE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedContentGestureState,State,animatedHandleGestureState,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,getKeyboardAnimationConfigs,keyboardAnimationEasing,keyboardAnimationDuration,evaluatePosition}=this.__closure;const{_keyboardState:_keyboardState,_keyboardHeight:_keyboardHeight}=result;const _previousKeyboardState=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardState;const _previousKeyboardHeight=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardHeight;if(_keyboardState===_previousKeyboardState&&_keyboardHeight===_previousKeyboardHeight){return;}if(_keyboardState===KEYBOARD_STATE.UNDETERMINED){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnKeyboardStateChange',category:'effect',params:{keyboardState:_keyboardState,keyboardHeight:_keyboardHeight}});}animatedKeyboardHeightInContainer.value=_keyboardHeight===0?0:$modal?Math.abs(_keyboardHeight-Math.abs(bottomInset-animatedContainerOffset.value.bottom)):Math.abs(_keyboardHeight-animatedContainerOffset.value.bottom);if(Platform.OS==='android'&&android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize){animatedKeyboardHeightInContainer.value=0;if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive){return;}}const hasActiveGesture=animatedContentGestureState.value===State.ACTIVE||animatedContentGestureState.value===State.BEGAN||animatedHandleGestureState.value===State.ACTIVE||animatedHandleGestureState.value===State.BEGAN;if(hasActiveGesture){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.none){return;}const animationConfigs=getKeyboardAnimationConfigs(keyboardAnimationEasing.value,keyboardAnimationDuration.value);evaluatePosition(ANIMATION_SOURCE.KEYBOARD,animationConfigs);};
    obj12 = { KEYBOARD_STATE: require("GESTURE_SOURCE").KEYBOARD_STATE, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE, __DEV__: false, runOnJS: require("cancelAnimation").runOnJS, print: require("normalizeSnapPoint").print, BottomSheet, animatedKeyboardHeightInContainer: sharedValue12, $modal: tmp25 };
    obj12.bottomInset = num15;
    obj12.animatedContainerOffset = reactiveSharedValue1;
    obj12.Platform = overrideReduceMotion;
    obj12.android_keyboardInputMode = DEFAULT_KEYBOARD_INPUT_MODE;
    obj12.KEYBOARD_INPUT_MODE = require("GESTURE_SOURCE").KEYBOARD_INPUT_MODE;
    obj12.keyboardBehavior = keyboardBehavior;
    obj12.KEYBOARD_BEHAVIOR = require("GESTURE_SOURCE").KEYBOARD_BEHAVIOR;
    obj12.animatedContentGestureState = sharedValue10;
    obj12.State = require("Directions").State;
    obj12.animatedHandleGestureState = sharedValue11;
    obj12.keyboardBlurBehavior = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    obj12.KEYBOARD_BLUR_BEHAVIOR = require("GESTURE_SOURCE").KEYBOARD_BLUR_BEHAVIOR;
    obj12.getKeyboardAnimationConfigs = require("normalizeSnapPoint").getKeyboardAnimationConfigs;
    obj12.keyboardAnimationEasing = animationEasing;
    obj12.keyboardAnimationDuration = animationDuration;
    obj12.evaluatePosition = workletCallback4;
    pnpm_BottomSheetTsx21.__closure = obj12;
    pnpm_BottomSheetTsx21.__workletHash = 3826286975425;
    pnpm_BottomSheetTsx21.__initData = useDerivedValue;
    items23 = [, , , , , , ];
    items23[0] = tmp25;
    items23[1] = num15;
    items23[2] = keyboardBehavior;
    items23[3] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    items23[4] = DEFAULT_KEYBOARD_INPUT_MODE;
    items23[5] = reactiveSharedValue1;
    items23[6] = workletCallback3;
    animatedReaction2 = obj54.useAnimatedReaction(pnpm_BottomSheetTsx20, pnpm_BottomSheetTsx21, items23);
    obj56 = require("cancelAnimation");
    pnpm_BottomSheetTsx22 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx22(){const{animatedPosition}=this.__closure;return animatedPosition.value;};
    pnpm_BottomSheetTsx22.__closure = { animatedPosition: sharedValue2 };
    pnpm_BottomSheetTsx22.__workletHash = 14107338560521;
    pnpm_BottomSheetTsx22.__initData = c33;
    pnpm_BottomSheetTsx23 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx23(_animatedPosition){const{_providedAnimatedPosition,topInset}=this.__closure;if(_providedAnimatedPosition){_providedAnimatedPosition.value=_animatedPosition+topInset;}};
    obj13 = { _providedAnimatedPosition: animatedPosition };
    obj13.topInset = num14;
    pnpm_BottomSheetTsx23.__closure = obj13;
    pnpm_BottomSheetTsx23.__workletHash = 11716938993854;
    pnpm_BottomSheetTsx23.__initData = c34;
    animatedReaction3 = obj56.useAnimatedReaction(pnpm_BottomSheetTsx22, pnpm_BottomSheetTsx23, []);
    obj58 = require("cancelAnimation");
    pnpm_BottomSheetTsx24 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx24(){const{animatedIndex}=this.__closure;return animatedIndex.value;};
    pnpm_BottomSheetTsx24.__closure = { animatedIndex: derivedValue7 };
    pnpm_BottomSheetTsx24.__workletHash = 4322474325743;
    pnpm_BottomSheetTsx24.__initData = c35;
    pnpm_BottomSheetTsx25 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx25(_animatedIndex){const{_providedAnimatedIndex}=this.__closure;if(_providedAnimatedIndex){_providedAnimatedIndex.value=_animatedIndex;}};
    pnpm_BottomSheetTsx25.__closure = { _providedAnimatedIndex: animatedIndex };
    pnpm_BottomSheetTsx25.__workletHash = 14207021927928;
    pnpm_BottomSheetTsx25.__initData = c36;
    animatedReaction4 = obj58.useAnimatedReaction(pnpm_BottomSheetTsx24, pnpm_BottomSheetTsx25, []);
    obj59 = require("cancelAnimation");
    pnpm_BottomSheetTsx26 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx26(){const{animatedIndex,animatedPosition,animatedAnimationState,animatedContentGestureState,animatedHandleGestureState}=this.__closure;return{_animatedIndex:animatedIndex.value,_animatedPosition:animatedPosition.value,_animationState:animatedAnimationState.value,_contentGestureState:animatedContentGestureState.value,_handleGestureState:animatedHandleGestureState.value};};
    pnpm_BottomSheetTsx26.__closure = { animatedIndex: derivedValue7, animatedPosition: sharedValue2, animatedAnimationState: sharedValue13, animatedContentGestureState: sharedValue10, animatedHandleGestureState: sharedValue11 };
    pnpm_BottomSheetTsx26.__workletHash = 4984898715723;
    pnpm_BottomSheetTsx26.__initData = c37;
    pnpm_BottomSheetTsx27 = /* worklet (recovered source) */ function pnpm_BottomSheetTsx27({_animatedIndex:_animatedIndex,_animatedPosition:_animatedPosition,_animationState:_animationState,_contentGestureState:_contentGestureState,_handleGestureState:_handleGestureState}){const{ANIMATION_STATE,animatedNextPosition,INITIAL_VALUE,animatedNextPositionIndex,State,reduceMotion,animatedCurrentIndex,animatedSnapPoints,__DEV__,runOnJS,print,BottomSheet,handleOnChange,_providedOnClose}=this.__closure;if(_animationState!==ANIMATION_STATE.STOPPED){return;}if(animatedNextPosition.value!==INITIAL_VALUE&&animatedNextPositionIndex.value!==INITIAL_VALUE&&(_animatedPosition!==animatedNextPosition.value||_animatedIndex!==animatedNextPositionIndex.value)){return;}if(_animatedIndex%1!==0){return;}const hasNoActiveGesture=(_contentGestureState===State.END||_contentGestureState===State.UNDETERMINED||_contentGestureState===State.CANCELLED)&&(_handleGestureState===State.END||_handleGestureState===State.UNDETERMINED||_handleGestureState===State.CANCELLED);if(!hasNoActiveGesture){return;}if(reduceMotion&&_animatedIndex===animatedCurrentIndex.value&&animatedSnapPoints.value[_animatedIndex]!==_animatedPosition){return;}if(_animatedIndex!==animatedCurrentIndex.value){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnChange',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}animatedCurrentIndex.value=_animatedIndex;runOnJS(handleOnChange)(_animatedIndex,_animatedPosition);}if(_animatedIndex===-1&&_providedOnClose){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::onClose',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}runOnJS(_providedOnClose)();}};
    obj14 = { ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, animatedNextPosition: sharedValue3, INITIAL_VALUE: require("DEFAULT_HANDLE_HEIGHT").INITIAL_VALUE, animatedNextPositionIndex: sharedValue4, State: require("Directions").State, reduceMotion: tmp70, animatedCurrentIndex: reactiveSharedValue3, animatedSnapPoints: first, __DEV__: false, runOnJS: require("cancelAnimation").runOnJS, print: require("normalizeSnapPoint").print, BottomSheet, handleOnChange: tmp76, _providedOnClose: onClose };
    pnpm_BottomSheetTsx27.__closure = obj14;
    pnpm_BottomSheetTsx27.__workletHash = 11608666988638;
    pnpm_BottomSheetTsx27.__initData = c38;
    items24 = [, , ];
    items24[0] = tmp70;
    items24[1] = tmp76;
    items24[2] = onClose;
    animatedReaction5 = obj59.useAnimatedReaction(pnpm_BottomSheetTsx26, pnpm_BottomSheetTsx27, items24);
    items25 = [, , , ];
    items25[0] = DEFAULT_ANIMATE_ON_MOUNT;
    items25[1] = num;
    items25[2] = sharedValue5;
    items25[3] = stableCallback;
    tmp98 = overDragResistanceFactor(() => {
      let tmp = DEFAULT_ANIMATE_ON_MOUNT;
      if (DEFAULT_ANIMATE_ON_MOUNT) {
        tmp = !sharedValue5.value;
      }
      if (!tmp) {
        stableCallback(num);
      }
    }, items25);
    tmp99 = keyboardBlurBehavior;
    obj15 = { value: tmp91 };
    obj16 = { value: tmp90 };
    tmp = android_keyboardInputMode;
    obj17 = { gestureEventsHandlersHook };
    tmp = null;
    tmp = require("BottomSheetGestureHandlersProvider");
    if (backdropComponent) {
      tmp = keyboardBlurBehavior;
      obj18 = {};
      obj18.animatedIndex = derivedValue7;
      obj18.animatedPosition = sharedValue2;
      tmp = DEFAULT_KEYBOARD_BEHAVIOR;
      obj18.style = DEFAULT_KEYBOARD_BEHAVIOR.absoluteFillObject;
      tmp = keyboardBlurBehavior(backdropComponent, obj18);
    }
    items26 = [, ];
    items26[0] = tmp;
    tmp = keyboardBlurBehavior;
    obj19 = { shouldCalculateHeight: !tmp25, containerHeight: reactiveSharedValue, containerOffset: reactiveSharedValue1 };
    obj19.topInset = num14;
    obj19.bottomInset = num15;
    obj19.detached = tmp26;
    obj19.style = containerStyle;
    tmp = android_keyboardInputMode;
    obj20 = { style, BodyComponent };
    tmp = null;
    if (null !== backgroundComponent) {
      tmp = keyboardBlurBehavior;
      tmp = animationConfigs;
      tmp = DEFAULT_ANIMATE_ON_MOUNT;
      num24 = 15;
      obj21 = {};
      obj21.animatedIndex = derivedValue7;
      obj21.animatedPosition = sharedValue2;
      obj21.backgroundComponent = backgroundComponent;
      obj21.backgroundStyle = backgroundStyle;
      str = "BottomSheetBackgroundContainer";
      tmp = keyboardBlurBehavior(require("BottomSheetBackgroundContainer").BottomSheetBackgroundContainer, obj21, "BottomSheetBackgroundContainer");
    }
    items27 = [, , ];
    items27[0] = tmp;
    tmp = android_keyboardInputMode;
    obj22 = { pointerEvents: "box-none" };
    tmp = undefined;
    if (null != accessible) {
      tmp = accessible;
    }
    obj22.accessible = tmp;
    tmp = undefined;
    if (null != DEFAULT_ACCESSIBILITY_ROLE) {
      tmp = DEFAULT_ACCESSIBILITY_ROLE;
    }
    obj22.accessibilityRole = tmp;
    tmp = undefined;
    if (null != DEFAULT_ACCESSIBILITY_LABEL) {
      tmp = DEFAULT_ACCESSIBILITY_LABEL;
    }
    obj22.accessibilityLabel = tmp;
    obj22.keyboardBehavior = keyboardBehavior;
    obj22.detached = tmp26;
    items28 = [, ];
    items28[0] = children;
    tmp = null;
    if (renderFooter) {
      tmp = keyboardBlurBehavior;
      tmp = animationConfigs;
      tmp = DEFAULT_ANIMATE_ON_MOUNT;
      num25 = 17;
      obj23 = {};
      obj23.renderFooter = renderFooter;
      tmp = keyboardBlurBehavior(require("BottomSheetFooter").BottomSheetFooterContainer, obj23);
    }
    items28[1] = tmp;
    obj22.children = items28;
    items27[1] = tmp(require("memo").BottomSheetContent, obj22);
    tmp = null;
    if (null !== handleComponent) {
      tmp = keyboardBlurBehavior;
      tmp = animationConfigs;
      tmp = DEFAULT_ANIMATE_ON_MOUNT;
      num26 = 18;
      obj24 = {};
      obj24.animatedIndex = derivedValue7;
      obj24.animatedPosition = sharedValue2;
      obj24.handleHeight = reactiveSharedValue2;
      obj24.enableHandlePanningGesture = enableHandlePanningGesture;
      obj24.enableOverDrag = enableOverDrag;
      obj24.enablePanDownToClose = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
      obj24.overDragResistanceFactor = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
      obj24.keyboardBehavior = keyboardBehavior;
      obj24.handleComponent = handleComponent;
      obj24.handleStyle = handleStyle;
      obj24.handleIndicatorStyle = handleIndicatorStyle;
      str2 = "BottomSheetHandleContainer";
      tmp = keyboardBlurBehavior(require("BottomSheetHandle").BottomSheetHandleContainer, obj24, "BottomSheetHandleContainer");
    }
    items27[2] = tmp;
    obj20.children = items27;
    obj19.children = tmp(require("memo").BottomSheetBody, obj20);
    items26[1] = tmp(require("BottomSheetHostingContainer").BottomSheetHostingContainer, obj19, "BottomSheetContainer");
    obj17.children = items26;
    obj16.children = tmp(tmp, obj17);
    obj15.children = tmp99(require("BottomSheetContext").BottomSheetInternalProvider, obj16);
    return tmp99(require("BottomSheetContext").BottomSheetProvider, obj15);
  }
}
const memoResult = memo(forwardRef(BottomSheet));
memoResult.displayName = "BottomSheet";

export default memoResult;
