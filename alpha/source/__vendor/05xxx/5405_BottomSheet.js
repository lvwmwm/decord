// Module ID: 5405
// Function ID: 5406
// Name: BottomSheet
// Dependencies: [32, 19, 17, 21, 1652, 5406, 5407, 5430, 5403, 5419, 38, 5413, 5594, 5596, 5599, 5601, 5605, 5608, 5612]

// Module 5405 (BottomSheet)
import _modDef38 from "module_38" /* 38 */;
import _mod1652 from "module_1652" /* 1652 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5403 */;
import _mod5419 from "module_5419" /* 5419 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const module_1652 = _mod1652;

let c10;
let c9;
let closure_4;
let forwardRef;
let hasOwnProperty;
let memo;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ useMemo: closure_4, useCallback: hasOwnProperty, useImperativeHandle: metroRequire, useEffect: metroImportDefault, forwardRef, memo } = react);
react = react_mod;
({ Platform: metroImportAll, StyleSheet: c9 } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const result = module_1652.addWhitelistedUIProps({ decelerationRate: true });
let closure_12 = { code: "(function pnpm_BottomSheetTsx1(){let[topInset,bottomInset,$modal,_animatedContainerHeight]=this.__closure;const verticalInset=topInset+bottomInset;return $modal?_animatedContainerHeight.value-verticalInset:_animatedContainerHeight.value;})" };
let closure_13 = { code: "(function pnpm_BottomSheetTsx2(){let[animatedSnapPoints]=this.__closure;return animatedSnapPoints.value[animatedSnapPoints.value.length-1];})" };
let closure_14 = { code: "(function pnpm_BottomSheetTsx3(){let[animatedContainerHeight,$modal,detached,bottomInset]=this.__closure;let closedPosition=animatedContainerHeight.value;if($modal||detached){closedPosition=animatedContainerHeight.value+bottomInset;}return closedPosition;})" };
let closure_15 = { code: "(function pnpm_BottomSheetTsx4(){let[animatedContainerHeight,animatedHighestSnapPoint]=this.__closure;return animatedContainerHeight.value-animatedHighestSnapPoint.value;})" };
let closure_16 = { code: "(function pnpm_BottomSheetTsx5(){let[_providedContainerHeight,animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,handleComponent,animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedSnapPoints,INITIAL_SNAP_POINT]=this.__closure;let isContainerHeightCalculated=false;if(_providedContainerHeight!==null||_providedContainerHeight!==undefined){isContainerHeightCalculated=true;}if(animatedContainerHeight.value!==INITIAL_CONTAINER_HEIGHT){isContainerHeightCalculated=true;}let isHandleHeightCalculated=false;if(handleComponent===null){animatedHandleHeight.value=0;isHandleHeightCalculated=true;}if(animatedHandleHeight.value!==INITIAL_HANDLE_HEIGHT){isHandleHeightCalculated=true;}let isSnapPointsNormalized=false;if(animatedSnapPoints.value[0]!==INITIAL_SNAP_POINT){isSnapPointsNormalized=true;}return isContainerHeightCalculated&&isHandleHeightCalculated&&isSnapPointsNormalized;})" };
let closure_17 = { code: "(function pnpm_BottomSheetTsx6(){let[animatedPosition,animatedClosedPosition,SHEET_STATE,animatedContainerHeight,animatedSheetHeight,animatedKeyboardHeightInContainer,keyboardBehavior,KEYBOARD_BEHAVIOR,isInTemporaryPosition]=this.__closure;if(animatedPosition.value>=animatedClosedPosition.value){return SHEET_STATE.CLOSED;}const extendedPosition=animatedContainerHeight.value-animatedSheetHeight.value;if(animatedPosition.value===extendedPosition){return SHEET_STATE.EXTENDED;}const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;const extendedPositionWithKeyboard=Math.max(0,animatedContainerHeight.value-(animatedSheetHeight.value+keyboardHeightInContainer));if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&isInTemporaryPosition.value&&animatedPosition.value===extendedPositionWithKeyboard){return SHEET_STATE.EXTENDED;}if(animatedPosition.value===0){return SHEET_STATE.FILL_PARENT;}if(animatedPosition.value<extendedPosition){return SHEET_STATE.OVER_EXTENDED;}return SHEET_STATE.OPENED;})" };
let closure_18 = { code: "(function pnpm_BottomSheetTsx7(){let[enableContentPanningGesture,SCROLLABLE_STATE,animatedScrollableOverrideState,animatedSheetState,SHEET_STATE,animatedKeyboardState,KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE]=this.__closure;if(!enableContentPanningGesture){return SCROLLABLE_STATE.UNLOCKED;}if(animatedScrollableOverrideState.value!==SCROLLABLE_STATE.UNDETERMINED){return animatedScrollableOverrideState.value;}if(animatedSheetState.value===SHEET_STATE.FILL_PARENT){return SCROLLABLE_STATE.UNLOCKED;}if(animatedSheetState.value===SHEET_STATE.EXTENDED){return SCROLLABLE_STATE.UNLOCKED;}if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return SCROLLABLE_STATE.UNLOCKED;}return SCROLLABLE_STATE.LOCKED;})" };
let closure_19 = { code: "(function pnpm_BottomSheetTsx8(){let[animatedSnapPoints,animatedContainerHeight,isLayoutCalculated,interpolate,animatedPosition,Extrapolation,android_keyboardInputMode,KEYBOARD_INPUT_MODE,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE,isInTemporaryPosition,animatedCurrentIndex,animatedNextPositionIndex]=this.__closure;const adjustedSnapPoints=animatedSnapPoints.value.slice().reverse();const adjustedSnapPointsIndexes=animatedSnapPoints.value.slice().map(function(_,index){return index;}).reverse();adjustedSnapPoints.push(animatedContainerHeight.value);adjustedSnapPointsIndexes.push(-1);const currentIndex=isLayoutCalculated.value?interpolate(animatedPosition.value,adjustedSnapPoints,adjustedSnapPointsIndexes,Extrapolation.CLAMP):-1;if(android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize&&animatedAnimationSource.value===ANIMATION_SOURCE.KEYBOARD&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&isInTemporaryPosition.value){return Math.max(animatedCurrentIndex.value,currentIndex);}if(animatedAnimationSource.value===ANIMATION_SOURCE.SNAP_POINT_CHANGE&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return animatedNextPositionIndex.value;}return currentIndex;})" };
let closure_20 = { code: "(function pnpm_BottomSheetTsx9(){let[cancelAnimation,animatedPosition,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE]=this.__closure;cancelAnimation(animatedPosition);animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;})" };
let closure_21 = { code: "(function animateToPositionCompleted_Pnpm_BottomSheetTsx10(isFinished){let[__DEV__,runOnJS,print,animatedCurrentIndex,animatedNextPosition,animatedNextPositionIndex,animatedAnimationSource,ANIMATION_SOURCE,isAnimatedOnMount,isForcedClosing,animatedAnimationState,ANIMATION_STATE,INITIAL_VALUE,animatedContainerHeightDidChange]=this.__closure;if(!isFinished){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'animateToPositionCompleted',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedNextPosition:animatedNextPosition.value,animatedNextPositionIndex:animatedNextPositionIndex.value}});}if(animatedAnimationSource.value===ANIMATION_SOURCE.MOUNT){isAnimatedOnMount.value=true;}isForcedClosing.value=false;animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;animatedNextPosition.value=INITIAL_VALUE;animatedNextPositionIndex.value=INITIAL_VALUE;animatedContainerHeightDidChange.value=false;})" };
let closure_22 = { code: "(function animateToPosition_Pnpm_BottomSheetTsx11(position,source,velocity=0,configs){let[__DEV__,runOnJS,print,animatedPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPosition,stopAnimation,animatedAnimationSource,animatedKeyboardState,KEYBOARD_STATE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedKeyboardHeightInContainer,animatedNextPositionIndex,animatedSnapPoints,handleOnAnimate,animate,_providedAnimationConfigs,_providedOverrideReduceMotion,animateToPositionCompleted]=this.__closure;if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'animateToPosition',params:{currentPosition:animatedPosition.value,nextPosition:position,source:source}});}if(position===animatedPosition.value||position===undefined||animatedAnimationState.value===ANIMATION_STATE.RUNNING&&position===animatedNextPosition.value){return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){stopAnimation();}animatedAnimationState.value=ANIMATION_STATE.RUNNING;animatedAnimationSource.value=source;animatedNextPosition.value=position;let offset=0;if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&keyboardBehavior!==KEYBOARD_BEHAVIOR.extend&&position<animatedPosition.value){offset=animatedKeyboardHeightInContainer.value;}animatedNextPositionIndex.value=animatedSnapPoints.value.indexOf(position+offset);runOnJS(handleOnAnimate)(animatedNextPositionIndex.value,position,source);animatedPosition.value=animate({point:position,configs:configs||_providedAnimationConfigs,velocity:velocity,overrideReduceMotion:_providedOverrideReduceMotion,onComplete:animateToPositionCompleted});})" };
let closure_23 = { code: "(function setToPosition_Pnpm_BottomSheetTsx12(targetPosition){const setToPosition_Pnpm_BottomSheetTsx12=this._recur;let[animatedPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPosition,__DEV__,runOnJS,print,BottomSheet,animatedNextPositionIndex,animatedSnapPoints,stopAnimation,animatedContainerHeightDidChange]=this.__closure;if(targetPosition===animatedPosition.value||targetPosition===undefined||animatedAnimationState.value===ANIMATION_STATE.RUNNING&&targetPosition===animatedNextPosition.value){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:setToPosition_Pnpm_BottomSheetTsx12.name,params:{currentPosition:animatedPosition.value,targetPosition:targetPosition}});}animatedNextPosition.value=targetPosition;animatedNextPositionIndex.value=animatedSnapPoints.value.indexOf(targetPosition);stopAnimation();animatedPosition.value=targetPosition;animatedContainerHeightDidChange.value=false;})" };
let closure_24 = { code: "(function getEvaluatedPosition_Pnpm_BottomSheetTsx13(source){let[animatedCurrentIndex,animatedSnapPoints,animatedKeyboardState,animatedHighestSnapPoint,ANIMATION_SOURCE,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,KEYBOARD_STATE,animatedContentGestureState,State,animatedHandleGestureState,isInTemporaryPosition,keyboardBehavior,KEYBOARD_BEHAVIOR,Platform,android_keyboardInputMode,animatedKeyboardHeightInContainer,animatedPosition,isAnimatedOnMount,_providedIndex,animatedClosedPosition]=this.__closure;const currentIndex=animatedCurrentIndex.value;const snapPoints=animatedSnapPoints.value;const keyboardState=animatedKeyboardState.value;const highestSnapPoint=animatedHighestSnapPoint.value;if(source===ANIMATION_SOURCE.KEYBOARD&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.restore&&keyboardState===KEYBOARD_STATE.HIDDEN&&animatedContentGestureState.value!==State.ACTIVE&&animatedHandleGestureState.value!==State.ACTIVE){isInTemporaryPosition.value=false;const nextPosition=snapPoints[currentIndex];return nextPosition;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.extend&&keyboardState===KEYBOARD_STATE.SHOWN){return highestSnapPoint;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.fillParent&&keyboardState===KEYBOARD_STATE.SHOWN){isInTemporaryPosition.value=true;return 0;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&keyboardState===KEYBOARD_STATE.SHOWN&&!(Platform.OS==='android'&&android_keyboardInputMode==='adjustResize')){isInTemporaryPosition.value=true;const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;return Math.max(0,highestSnapPoint-keyboardHeightInContainer);}if(isInTemporaryPosition.value){return animatedPosition.value;}if(!isAnimatedOnMount.value){return _providedIndex===-1?animatedClosedPosition.value:snapPoints[_providedIndex];}return snapPoints[currentIndex];})" };
let closure_25 = { code: "(function evaluatePosition_Pnpm_BottomSheetTsx14(source,animationConfigs){let[isForcedClosing,ANIMATION_SOURCE,isLayoutCalculated,getEvaluatedPosition,isAnimatedOnMount,animateOnMount,animateToPosition,setToPosition,animatedContainerHeightDidChange,animatedAnimationState,ANIMATION_STATE,animatedNextPositionIndex,isInTemporaryPosition,animatedClosedPosition,animatedCurrentIndex,animatedSnapPoints,animatedIndex,reduceMotion,animatedPosition]=this.__closure;if(isForcedClosing.value&&source!==ANIMATION_SOURCE.USER){return;}if(!isLayoutCalculated.value){return;}const proposedPosition=getEvaluatedPosition(source);if(!isAnimatedOnMount.value){if(animateOnMount){animateToPosition(proposedPosition,ANIMATION_SOURCE.MOUNT,undefined,animationConfigs);}else{setToPosition(proposedPosition);isAnimatedOnMount.value=true;}return;}if(animatedContainerHeightDidChange.value){setToPosition(proposedPosition);return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){if(animatedNextPositionIndex.value===-1&&!isInTemporaryPosition.value){setToPosition(animatedClosedPosition.value);return;}if(animatedNextPositionIndex.value!==animatedCurrentIndex.value){animateToPosition(animatedSnapPoints.value[animatedNextPositionIndex.value],source,undefined,animationConfigs);return;}}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING&&animatedIndex.value===-1){if(reduceMotion&&animatedSnapPoints.value[animatedIndex.value]!==animatedPosition.value){return;}setToPosition(animatedClosedPosition.value);return;}animateToPosition(proposedPosition,source,undefined,animationConfigs);})" };
let closure_26 = { code: "(function handleSnapToPosition_Pnpm_BottomSheetTsx15(position,animationConfigs){const handleSnapToPosition_Pnpm_BottomSheetTsx15=this._recur;let[__DEV__,print,BottomSheet,normalizeSnapPoint,animatedContainerHeight,isLayoutCalculated,animatedNextPosition,isForcedClosing,isInTemporaryPosition,runOnUI,animateToPosition,ANIMATION_SOURCE]=this.__closure;if(__DEV__){print({component:BottomSheet.name,method:handleSnapToPosition_Pnpm_BottomSheetTsx15.name,params:{position:position}});}const nextPosition=normalizeSnapPoint(position,animatedContainerHeight.value);if(!isLayoutCalculated||nextPosition===animatedNextPosition.value||isForcedClosing.value){return;}isInTemporaryPosition.value=true;runOnUI(animateToPosition)(nextPosition,ANIMATION_SOURCE.USER,0,animationConfigs);})" };
let closure_27 = { code: "(function pnpm_BottomSheetTsx16(){let[nextPosition,animatedPosition,index,animatedNextPositionIndex,animatedAnimationState,ANIMATION_STATE,animatedCurrentIndex,animatedNextPosition,stopAnimation,animatedContainerHeightDidChange]=this.__closure;if(nextPosition===animatedPosition.value&&index===animatedNextPositionIndex.value&&animatedAnimationState.value!==ANIMATION_STATE.RUNNING){animatedCurrentIndex.value=index;return;}animatedNextPosition.value=nextPosition;animatedNextPositionIndex.value=index;animatedCurrentIndex.value=index;stopAnimation();animatedPosition.value=nextPosition;animatedContainerHeightDidChange.value=false;})" };
let closure_28 = { code: "(function pnpm_BottomSheetTsx17(){let[animatedContainerHeight]=this.__closure;return animatedContainerHeight.value;})" };
let closure_29 = { code: "(function pnpm_BottomSheetTsx18(result,previous){let[INITIAL_CONTAINER_HEIGHT,animatedContainerHeightDidChange,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,animatedNextPositionIndex,animateToPosition,animatedClosedPosition]=this.__closure;if(result===INITIAL_CONTAINER_HEIGHT){return;}animatedContainerHeightDidChange.value=result!==previous;if(animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE&&animatedNextPositionIndex.value===-1){animateToPosition(animatedClosedPosition.value,ANIMATION_SOURCE.GESTURE);}})" };
let closure_30 = { code: "(function pnpm_BottomSheetTsx19(){let[animatedSnapPoints]=this.__closure;return animatedSnapPoints.value;})" };
let closure_31 = { code: "(function pnpm_BottomSheetTsx20(result,previous){let[isAnimatedOnMount,isLayoutCalculated,__DEV__,runOnJS,print,evaluatePosition,ANIMATION_SOURCE]=this.__closure;if(JSON.stringify(result)===JSON.stringify(previous)&&isAnimatedOnMount.value){return;}if(!isLayoutCalculated.value){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'useAnimatedReaction::OnSnapPointChange',category:'effect',params:{result:result}});}evaluatePosition(ANIMATION_SOURCE.SNAP_POINT_CHANGE);})" };
let closure_32 = { code: "(function pnpm_BottomSheetTsx21(){let[animatedKeyboardState,animatedKeyboardHeight]=this.__closure;return{_keyboardState:animatedKeyboardState.value,_keyboardHeight:animatedKeyboardHeight.value};})" };
let closure_33 = { code: "(function pnpm_BottomSheetTsx22(result,_previousResult){let[KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,__DEV__,runOnJS,print,BottomSheet,animatedKeyboardHeightInContainer,$modal,bottomInset,animatedContainerOffset,Platform,android_keyboardInputMode,KEYBOARD_INPUT_MODE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedContentGestureState,State,animatedHandleGestureState,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,getKeyboardAnimationConfigs,keyboardAnimationEasing,keyboardAnimationDuration,evaluatePosition]=this.__closure;const{_keyboardState:_keyboardState,_keyboardHeight:_keyboardHeight}=result;const _previousKeyboardState=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardState;const _previousKeyboardHeight=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardHeight;if(_keyboardState===_previousKeyboardState&&_keyboardHeight===_previousKeyboardHeight){return;}if(_keyboardState===KEYBOARD_STATE.UNDETERMINED){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnKeyboardStateChange',category:'effect',params:{keyboardState:_keyboardState,keyboardHeight:_keyboardHeight}});}animatedKeyboardHeightInContainer.value=_keyboardHeight===0?0:$modal?Math.abs(_keyboardHeight-Math.abs(bottomInset-animatedContainerOffset.value.bottom)):Math.abs(_keyboardHeight-animatedContainerOffset.value.bottom);if(Platform.OS==='android'&&android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize){animatedKeyboardHeightInContainer.value=0;if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive){return;}}const hasActiveGesture=animatedContentGestureState.value===State.ACTIVE||animatedContentGestureState.value===State.BEGAN||animatedHandleGestureState.value===State.ACTIVE||animatedHandleGestureState.value===State.BEGAN;if(hasActiveGesture){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.none){return;}const animationConfigs=getKeyboardAnimationConfigs(keyboardAnimationEasing.value,keyboardAnimationDuration.value);evaluatePosition(ANIMATION_SOURCE.KEYBOARD,animationConfigs);})" };
let closure_34 = { code: "(function pnpm_BottomSheetTsx23(){let[animatedPosition]=this.__closure;return animatedPosition.value;})" };
let closure_35 = { code: "(function pnpm_BottomSheetTsx24(_animatedPosition){let[_providedAnimatedPosition,topInset]=this.__closure;if(_providedAnimatedPosition){_providedAnimatedPosition.value=_animatedPosition+topInset;}})" };
let closure_36 = { code: "(function pnpm_BottomSheetTsx25(){let[animatedIndex]=this.__closure;return animatedIndex.value;})" };
let closure_37 = { code: "(function pnpm_BottomSheetTsx26(_animatedIndex){let[_providedAnimatedIndex]=this.__closure;if(_providedAnimatedIndex){_providedAnimatedIndex.value=_animatedIndex;}})" };
let closure_38 = { code: "(function pnpm_BottomSheetTsx27(){let[animatedIndex,animatedPosition,animatedAnimationState,animatedContentGestureState,animatedHandleGestureState]=this.__closure;return{_animatedIndex:animatedIndex.value,_animatedPosition:animatedPosition.value,_animationState:animatedAnimationState.value,_contentGestureState:animatedContentGestureState.value,_handleGestureState:animatedHandleGestureState.value};})" };
let closure_39 = { code: "(function pnpm_BottomSheetTsx28({_animatedIndex:_animatedIndex,_animatedPosition:_animatedPosition,_animationState:_animationState,_contentGestureState:_contentGestureState,_handleGestureState:_handleGestureState}){let[ANIMATION_STATE,animatedNextPosition,INITIAL_VALUE,animatedNextPositionIndex,State,reduceMotion,animatedCurrentIndex,animatedSnapPoints,__DEV__,runOnJS,print,BottomSheet,handleOnChange,_providedOnClose]=this.__closure;if(_animationState!==ANIMATION_STATE.STOPPED){return;}if(animatedNextPosition.value!==INITIAL_VALUE&&animatedNextPositionIndex.value!==INITIAL_VALUE&&(_animatedPosition!==animatedNextPosition.value||_animatedIndex!==animatedNextPositionIndex.value)){return;}if(_animatedIndex%1!==0){return;}const hasNoActiveGesture=(_contentGestureState===State.END||_contentGestureState===State.UNDETERMINED||_contentGestureState===State.CANCELLED)&&(_handleGestureState===State.END||_handleGestureState===State.UNDETERMINED||_handleGestureState===State.CANCELLED);if(!hasNoActiveGesture){return;}if(reduceMotion&&_animatedIndex===animatedCurrentIndex.value&&animatedSnapPoints.value[_animatedIndex]!==_animatedPosition){return;}if(_animatedIndex!==animatedCurrentIndex.value){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnChange',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}animatedCurrentIndex.value=_animatedIndex;runOnJS(handleOnChange)(_animatedIndex,_animatedPosition);}if(_animatedIndex===-1&&_providedOnClose){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::onClose',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}runOnJS(_providedOnClose)();}})" };
class BottomSheet {
  constructor(animateOnMount, arg1) {
    let BodyComponent;
    let BottomSheetBody;
    let BottomSheetInternalProvider;
    let DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    let accessible;
    let animatedIndex;
    let animatedPosition;
    let animationConfigs;
    let animationDuration;
    let animationEasing;
    let backdropComponent;
    let backgroundComponent;
    let backgroundStyle;
    let children;
    let containerHeight;
    let containerOffset;
    let containerStyle;
    let contentHeight;
    let enableHandlePanningGesture;
    let enableOverDrag;
    let gestureEventsHandlersHook;
    let handleComponent;
    let handleHeight;
    let handleIndicatorStyle;
    let handleStyle;
    let index;
    let initialPosition;
    let items80;
    let items81;
    let items82;
    let keyboardBehavior;
    let maxDynamicContentSize;
    let obj2;
    let obj3;
    let obj6;
    let onAnimate;
    let onClose;
    let renderFooter;
    let simultaneousHandlers;
    let snapPoints;
    let style;
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
    let tmp124;
    let tmp125;
    let tmp126;
    let tmp127;
    let tmp128;
    let tmp129;
    let tmp130;
    let tmp131;
    let tmp132;
    let tmp133;
    let tmp134;
    let tmp135;
    let tmp136;
    let tmp137;
    let tmp138;
    let tmp139;
    let tmp144;
    let tmp145;
    let tmp146;
    let tmp147;
    let tmp148;
    let tmp149;
    let tmp150;
    let tmp152;
    let tmp153;
    let tmp154;
    let tmp155;
    let tmp156;
    let tmp157;
    let tmp158;
    let tmp159;
    let tmp160;
    let tmp161;
    let tmp162;
    let tmp163;
    let tmp164;
    let tmp165;
    let tmp166;
    let tmp168;
    let tmp169;
    let tmp170;
    let tmp171;
    let tmp172;
    let tmp173;
    let tmp174;
    let tmp175;
    let tmp176;
    let tmp177;
    let tmp178;
    let tmp179;
    let tmp180;
    let tmp181;
    let tmp182;
    let tmp183;
    let tmp184;
    let tmp185;
    let tmp186;
    let tmp187;
    let tmp188;
    let tmp189;
    let tmp192;
    let tmp193;
    let tmp194;
    let tmp195;
    let tmp196;
    let tmp197;
    let tmp198;
    let tmp199;
    let tmp200;
    let tmp201;
    let tmp202;
    let tmp203;
    let tmp204;
    let tmp207;
    let tmp208;
    let tmp209;
    let tmp210;
    let tmp211;
    let tmp212;
    let tmp213;
    let tmp214;
    let tmp215;
    let tmp216;
    let tmp217;
    let tmp218;
    let tmp219;
    let tmp220;
    let tmp221;
    let tmp222;
    let tmp223;
    let tmp224;
    let tmp225;
    let tmp226;
    let tmp227;
    let tmp228;
    let tmp230;
    let tmp231;
    let tmp232;
    let tmp233;
    let tmp234;
    let tmp235;
    let tmp236;
    let tmp237;
    let tmp238;
    let tmp239;
    let tmp240;
    let tmp241;
    let tmp242;
    let tmp243;
    let tmp244;
    let tmp245;
    let tmp246;
    let tmp247;
    let tmp248;
    let tmp249;
    let tmp252;
    let tmp253;
    let tmp254;
    let tmp255;
    let tmp256;
    let tmp257;
    let tmp258;
    let tmp259;
    let tmp260;
    let tmp261;
    let tmp262;
    let tmp263;
    let tmp264;
    let tmp276;
    let tmp277;
    let tmp278;
    let tmp279;
    let tmp280;
    let tmp281;
    let tmp282;
    let tmp283;
    let tmp284;
    let tmp285;
    let tmp286;
    let tmp287;
    let tmp290;
    let tmp291;
    let tmp292;
    let tmp293;
    let tmp294;
    let tmp295;
    let tmp296;
    let tmp297;
    let tmp298;
    let tmp299;
    let tmp302;
    let tmp303;
    let tmp304;
    let tmp305;
    let tmp306;
    let tmp307;
    let tmp308;
    let tmp309;
    let tmp310;
    let tmp311;
    let tmp312;
    let tmp313;
    let tmp314;
    let tmp315;
    let tmp316;
    let tmp317;
    let tmp318;
    let tmp319;
    let tmp320;
    let tmp321;
    let tmp322;
    let tmp323;
    let tmp324;
    let tmp325;
    let tmp326;
    let tmp327;
    let tmp328;
    let tmp329;
    let tmp330;
    let tmp331;
    let tmp332;
    let tmp334;
    let tmp335;
    let tmp336;
    let tmp337;
    let tmp338;
    let tmp340;
    let tmp341;
    let tmp342;
    let tmp343;
    let tmp346;
    let tmp347;
    let tmp348;
    let tmp349;
    let tmp350;
    let tmp351;
    let tmp352;
    let tmp353;
    let tmp354;
    let tmp355;
    let tmp356;
    let tmp357;
    let tmp358;
    let tmp359;
    let tmp360;
    let tmp361;
    let tmp362;
    let tmp363;
    let tmp364;
    let tmp365;
    let tmp366;
    let tmp37;
    let tmp371;
    let tmp38;
    let tmp39;
    let tmp40;
    let tmp41;
    let tmp53;
    let tmp54;
    let tmp56;
    let tmp57;
    let tmp58;
    let tmp59;
    let tmp60;
    let tmp62;
    let tmp63;
    let tmp64;
    let tmp76;
    let tmp77;
    let tmp78;
    let tmp79;
    let tmp80;
    let tmp81;
    let tmp82;
    let tmp83;
    let tmp84;
    let topInset;
    ({ animationConfigs, index } = animateOnMount);
    let num = 0;
    if (undefined !== index) {
      num = index;
    }
    ({ snapPoints, initialPosition } = animateOnMount);
    if (undefined === initialPosition) {
      let tmp = num;
      let tmp2 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      initialPosition = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).INITIAL_POSITION;
    }
    let DEFAULT_ANIMATE_ON_MOUNT = animateOnMount.animateOnMount;
    if (undefined === DEFAULT_ANIMATE_ON_MOUNT) {
      let tmp3 = num;
      let tmp4 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      DEFAULT_ANIMATE_ON_MOUNT = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_ANIMATE_ON_MOUNT;
    }
    DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = animateOnMount.enableContentPanningGesture;
    if (undefined === DEFAULT_ENABLE_CONTENT_PANNING_GESTURE) {
      let tmp5 = num;
      let tmp6 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    }
    ({ enableOverDrag, enableHandlePanningGesture } = animateOnMount);
    if (undefined === enableOverDrag) {
      let tmp7 = num;
      let tmp8 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      enableOverDrag = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_ENABLE_OVER_DRAG;
    }
    let DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = animateOnMount.enablePanDownToClose;
    if (undefined === DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE) {
      let tmp9 = num;
      let tmp10 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    }
    let DEFAULT_DYNAMIC_SIZING = animateOnMount.enableDynamicSizing;
    if (undefined === DEFAULT_DYNAMIC_SIZING) {
      let tmp11 = num;
      const tmp12 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      DEFAULT_DYNAMIC_SIZING = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_DYNAMIC_SIZING;
    }
    let DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = animateOnMount.overDragResistanceFactor;
    if (undefined === DEFAULT_OVER_DRAG_RESISTANCE_FACTOR) {
      let tmp13 = num;
      const tmp14 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    }
    const overrideReduceMotion = animateOnMount.overrideReduceMotion;
    ({ keyboardBehavior, style, containerStyle, backgroundStyle, handleStyle, handleIndicatorStyle, gestureEventsHandlersHook } = animateOnMount);
    if (undefined === keyboardBehavior) {
      const tmp15 = num;
      let tmp16 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      keyboardBehavior = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_KEYBOARD_BEHAVIOR;
    }
    let DEFAULT_KEYBOARD_BLUR_BEHAVIOR = animateOnMount.keyboardBlurBehavior;
    if (undefined === DEFAULT_KEYBOARD_BLUR_BEHAVIOR) {
      let tmp17 = num;
      const tmp18 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      DEFAULT_KEYBOARD_BLUR_BEHAVIOR = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    }
    let DEFAULT_KEYBOARD_INPUT_MODE = animateOnMount.android_keyboardInputMode;
    if (undefined === DEFAULT_KEYBOARD_INPUT_MODE) {
      let tmp19 = num;
      let tmp20 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      DEFAULT_KEYBOARD_INPUT_MODE = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_KEYBOARD_INPUT_MODE;
    }
    let DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = animateOnMount.enableBlurKeyboardOnGesture;
    if (undefined === DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE) {
      const tmp21 = num;
      DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    }
    let DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = animateOnMount.keyboardIncludeBottomOffset;
    if (undefined === DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET) {
      let tmp23 = num;
      DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET;
    }
    ({ containerHeight, containerOffset, topInset } = animateOnMount);
    let num2 = 0;
    if (undefined !== topInset) {
      num2 = topInset;
    }
    const bottomInset = animateOnMount.bottomInset;
    let num3 = 0;
    if (undefined !== bottomInset) {
      num3 = bottomInset;
    }
    ({ maxDynamicContentSize, contentHeight, handleHeight, simultaneousHandlers } = animateOnMount);
    const waitFor = animateOnMount.waitFor;
    const activeOffsetX = animateOnMount.activeOffsetX;
    const activeOffsetY = animateOnMount.activeOffsetY;
    const failOffsetX = animateOnMount.failOffsetX;
    const failOffsetY = animateOnMount.failOffsetY;
    const onChange = animateOnMount.onChange;
    ({ onClose, onAnimate } = animateOnMount);
    const $modal = animateOnMount.$modal;
    let tmp25 = undefined !== $modal;
    ({ animatedPosition, animatedIndex } = animateOnMount);
    if (tmp25) {
      tmp25 = $modal;
    }
    const detached = animateOnMount.detached;
    ({ handleComponent, backdropComponent, backgroundComponent, renderFooter, accessible, children, BodyComponent } = animateOnMount);
    if (undefined === accessible) {
      const tmp28 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
      accessible = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_ACCESSIBLE;
    }
    let DEFAULT_ACCESSIBILITY_LABEL = animateOnMount.accessibilityLabel;
    if (undefined === DEFAULT_ACCESSIBILITY_LABEL) {
      DEFAULT_ACCESSIBILITY_LABEL = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_ACCESSIBILITY_LABEL;
    }
    let DEFAULT_ACCESSIBILITY_ROLE = animateOnMount.accessibilityRole;
    if (undefined === DEFAULT_ACCESSIBILITY_ROLE) {
      DEFAULT_ACCESSIBILITY_ROLE = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[5]).DEFAULT_ACCESSIBILITY_ROLE;
    }
    const tmp33 = num;
    const tmp34 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    let INITIAL_CONTAINER_HEIGHT = containerHeight;
    const useReactiveSharedValue = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[6]).useReactiveSharedValue;
    const tmp35 = num(DEFAULT_ENABLE_CONTENT_PANNING_GESTURE[6]);
    if (containerHeight == null) {
      INITIAL_CONTAINER_HEIGHT = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    }
    const reactiveSharedValue = useReactiveSharedValue(INITIAL_CONTAINER_HEIGHT);
    let items = [activeOffsetY, num2, num3, tmp25, reactiveSharedValue];
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp37, tmp38, tmp39, tmp40, tmp41] = items;
    function pnpm_BottomSheetTsx1() {
      value = _undefined.value;
      return c2 ? value - (c0 + c1) : value;
    }
    let items1 = [tmp38, tmp39, tmp40, tmp41];
    pnpm_BottomSheetTsx1.__closure = items1;
    pnpm_BottomSheetTsx1.__workletHash = 8782232185200;
    pnpm_BottomSheetTsx1.__initData = tmp37;
    const items2 = [num2, num3, tmp25, reactiveSharedValue];
    const tmp33Result = tmp33(tmp34[4]);
    const derivedValue = tmp33Result.useDerivedValue(pnpm_BottomSheetTsx1, items2);
    const useReactiveSharedValue2 = tmp33(tmp34[6]).useReactiveSharedValue;
    tmp33(tmp34[6]);
    if (containerOffset == null) {
      containerOffset = tmp33(tmp34[5]).INITIAL_CONTAINER_OFFSET;
    }
    const reactiveSharedValue2 = useReactiveSharedValue2(containerOffset);
    const useReactiveSharedValue3 = tmp33(tmp34[6]).useReactiveSharedValue;
    tmp33(tmp34[6]);
    if (handleHeight == null) {
      handleHeight = tmp33(tmp34[5]).INITIAL_HANDLE_HEIGHT;
    }
    const reactiveSharedValue3 = useReactiveSharedValue3(handleHeight);
    const tmp33Result41 = tmp33(tmp34[4]);
    const sharedValue = tmp33Result41.useSharedValue(0);
    const useSharedValue = tmp33(tmp34[4]).useSharedValue;
    tmp33(tmp34[4]);
    if (contentHeight == null) {
      contentHeight = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    }
    const sharedValue1 = useSharedValue(contentHeight);
    const tmp33Result43 = tmp33(tmp34[6]);
    const tmp50 = enableOverDrag(tmp33Result43.useAnimatedSnapPoints(snapPoints, derivedValue, sharedValue1, reactiveSharedValue3, sharedValue, DEFAULT_DYNAMIC_SIZING, maxDynamicContentSize), 2);
    const animatedSnapPoints = tmp50[0];
    let value = tmp52;
    const items3 = [failOffsetX, animatedSnapPoints];
    [tmp53, tmp54] = items3;
    function pnpm_BottomSheetTsx2() {
      return _undefined.value[_undefined.value.length - 1];
    }
    const items4 = [tmp54];
    pnpm_BottomSheetTsx2.__closure = items4;
    pnpm_BottomSheetTsx2.__workletHash = 17099201560291;
    pnpm_BottomSheetTsx2.__initData = tmp53;
    const items5 = [animatedSnapPoints];
    const tmp33Result44 = tmp33(tmp34[4]);
    const derivedValue1 = tmp33Result44.useDerivedValue(pnpm_BottomSheetTsx2, items5);
    const items6 = [failOffsetY, derivedValue, tmp25, tmp26, num3];
    c2 = undefined;
    c3 = undefined;
    [tmp56, tmp57, tmp58, tmp59, tmp60] = items6;
    function pnpm_BottomSheetTsx3() {
      let sum = _undefined.value;
      let tmp = c1;
      const iter = _undefined;
      if (!c1) {
        tmp = c2;
      }
      if (tmp) {
        sum = iter.value + c3;
      }
      return sum;
    }
    const items7 = [tmp57, tmp58, tmp59, tmp60];
    pnpm_BottomSheetTsx3.__closure = items7;
    pnpm_BottomSheetTsx3.__workletHash = 2359912878104;
    pnpm_BottomSheetTsx3.__initData = tmp56;
    const items8 = [derivedValue, tmp25, tmp26, num3];
    const tmp33Result45 = tmp33(tmp34[4]);
    const derivedValue2 = tmp33Result45.useDerivedValue(pnpm_BottomSheetTsx3, items8);
    const items9 = [onChange, derivedValue, derivedValue1];
    c0 = undefined;
    c1 = undefined;
    [tmp62, tmp63, tmp64] = items9;
    function pnpm_BottomSheetTsx4() {
      return _undefined.value - _undefined2.value;
    }
    const items10 = [tmp63, tmp64];
    pnpm_BottomSheetTsx4.__closure = items10;
    pnpm_BottomSheetTsx4.__workletHash = 7564155046848;
    pnpm_BottomSheetTsx4.__initData = tmp62;
    const items11 = [derivedValue, derivedValue1];
    const tmp33Result46 = tmp33(tmp34[4]);
    const derivedValue3 = tmp33Result46.useDerivedValue(pnpm_BottomSheetTsx4, items11);
    let num4 = -1;
    const useReactiveSharedValue4 = tmp33(tmp34[6]).useReactiveSharedValue;
    tmp33(tmp34[6]);
    if (!DEFAULT_ANIMATE_ON_MOUNT) {
      num4 = num;
    }
    const reactiveSharedValue4 = useReactiveSharedValue4(num4);
    const tmp33Result48 = tmp33(tmp34[4]);
    const sharedValue2 = tmp33Result48.useSharedValue(initialPosition);
    const tmp33Result49 = tmp33(tmp34[4]);
    const sharedValue3 = tmp33Result49.useSharedValue(tmp33(tmp34[5]).INITIAL_VALUE);
    const tmp33Result50 = tmp33(tmp34[4]);
    const sharedValue4 = tmp33Result50.useSharedValue(tmp33(tmp34[5]).INITIAL_VALUE);
    let tmp72 = !DEFAULT_ANIMATE_ON_MOUNT;
    const useSharedValue2 = tmp33(tmp34[4]).useSharedValue;
    tmp33(tmp34[4]);
    if (DEFAULT_ANIMATE_ON_MOUNT) {
      tmp72 = -1 === num;
    }
    const sharedValue21 = useSharedValue2(tmp72);
    const tmp33Result52 = tmp33(tmp34[4]);
    const sharedValue5 = tmp33Result52.useSharedValue(false);
    const items12 = [onAnimate, containerHeight, derivedValue, , , , , , ];
    const useDerivedValue = tmp33(tmp34[4]).useDerivedValue;
    tmp33(tmp34[4]);
    items12[3] = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    items12[4] = handleComponent;
    items12[5] = reactiveSharedValue3;
    items12[6] = tmp33(tmp34[5]).INITIAL_HANDLE_HEIGHT;
    items12[7] = animatedSnapPoints;
    items12[8] = tmp33(tmp34[5]).INITIAL_SNAP_POINT;
    [tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84] = items12;
    function pnpm_BottomSheetTsx5() {
      let flag = false;
      const tmp2 = null === c0 && undefined === tmp;
      if (!tmp2) {
        flag = true;
      }
      if (_undefined.value !== c2) {
        flag = true;
      }
      let flag2 = false;
      if (null === c3) {
        _undefined2.value = 0;
        flag2 = true;
      }
      if (_undefined2.value !== c5) {
        flag2 = true;
      }
      let flag3 = false;
      if (_undefined3.value[0] !== c7) {
        flag3 = true;
      }
      if (flag) {
        flag = flag2;
      }
      if (flag) {
        flag = flag3;
      }
      return flag;
    }
    const items13 = [tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84];
    pnpm_BottomSheetTsx5.__closure = items13;
    pnpm_BottomSheetTsx5.__workletHash = 8220101753126;
    pnpm_BottomSheetTsx5.__initData = tmp76;
    const items14 = [containerHeight, derivedValue, reactiveSharedValue3, animatedSnapPoints, handleComponent];
    const derivedValue4 = useDerivedValue(pnpm_BottomSheetTsx5, items14);
    const tmp33Result54 = tmp33(tmp34[4]);
    const sharedValue6 = tmp33Result54.useSharedValue(false);
    const tmp33Result55 = tmp33(tmp34[4]);
    const sharedValue7 = tmp33Result55.useSharedValue(false);
    const tmp33Result56 = tmp33(tmp34[4]);
    const sharedValue8 = tmp33Result56.useSharedValue(false);
    const tmp33Result57 = tmp33(tmp34[4]);
    const sharedValue9 = tmp33Result57.useSharedValue(tmp33(tmp34[7]).State.UNDETERMINED);
    const tmp33Result58 = tmp33(tmp34[4]);
    const sharedValue10 = tmp33Result58.useSharedValue(tmp33(tmp34[7]).State.UNDETERMINED);
    const tmp33Result59 = tmp33(tmp34[6]);
    const scrollable = tmp33Result59.useScrollable();
    const animatedScrollableType = scrollable.animatedScrollableType;
    const animatedScrollableContentOffsetY = scrollable.animatedScrollableContentOffsetY;
    const animatedScrollableOverrideState = scrollable.animatedScrollableOverrideState;
    const isScrollableRefreshable = scrollable.isScrollableRefreshable;
    const setScrollableRef = scrollable.setScrollableRef;
    const removeScrollableRef = scrollable.removeScrollableRef;
    const tmp33Result60 = tmp33(tmp34[6]);
    const keyboard = tmp33Result60.useKeyboard({ includeBottomOffset: DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET });
    const state = keyboard.state;
    const height = keyboard.height;
    const shouldHandleKeyboardEvents = keyboard.shouldHandleKeyboardEvents;
    ({ animationDuration, animationEasing } = keyboard);
    const tmp33Result61 = tmp33(tmp34[4]);
    const sharedValue11 = tmp33Result61.useSharedValue(0);
    const tmp33Result62 = tmp33(tmp34[4]);
    const reducedMotion = tmp33Result62.useReducedMotion();
    const items15 = [reducedMotion, overrideReduceMotion];
    const tmp96 = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE(() => {
      if (overrideReduceMotion) {
        let tmp4;
        const tmp2 = require;
        if (overrideReduceMotion !== _mod1652.ReduceMotion.System) {
          tmp4 = tmp === tmp2(1652).ReduceMotion.Always;
        }
        return tmp4;
      }
      tmp4 = reducedMotion;
    }, items15);
    const tmp33Result63 = tmp33(tmp34[4]);
    const sharedValue12 = tmp33Result63.useSharedValue(tmp33(tmp34[8]).ANIMATION_STATE.UNDETERMINED);
    const tmp33Result64 = tmp33(tmp34[4]);
    const sharedValue13 = tmp33Result64.useSharedValue(tmp33(tmp34[8]).ANIMATION_SOURCE.MOUNT);
    const items16 = [derivedValue, sharedValue2, derivedValue2, , , , , , , ];
    const useDerivedValue2 = tmp33(tmp34[4]).useDerivedValue;
    tmp33(tmp34[4]);
    items16[3] = tmp33(tmp34[8]).SHEET_STATE;
    items16[4] = derivedValue;
    items16[5] = derivedValue3;
    items16[6] = sharedValue11;
    items16[7] = keyboardBehavior;
    items16[8] = tmp33(tmp34[8]).KEYBOARD_BEHAVIOR;
    items16[9] = sharedValue6;
    [tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109] = items16;
    function pnpm_BottomSheetTsx6() {
      if (_undefined.value >= _undefined2.value) {
        return _undefined3.CLOSED;
      } else {
        const diff = _undefined4.value - _undefined5.value;
        if (_undefined.value === diff) {
          return _undefined3.EXTENDED;
        } else {
          let OPENED;
          const _Math = Math;
          if (c6 === _undefined6.interactive) {
            if (_undefined7.value) {
              if (_undefined.value === tmp11) {
                OPENED = _undefined3.EXTENDED;
              }
              return OPENED;
            }
          }
          if (0 === _undefined.value) {
            OPENED = _undefined3.FILL_PARENT;
          } else if (_undefined.value < diff) {
            OPENED = _undefined3.OVER_EXTENDED;
          } else {
            OPENED = _undefined3.OPENED;
          }
        }
      }
    }
    const items17 = [tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109];
    pnpm_BottomSheetTsx6.__closure = items17;
    pnpm_BottomSheetTsx6.__workletHash = 6967658947681;
    pnpm_BottomSheetTsx6.__initData = tmp100;
    const items18 = [derivedValue2, derivedValue, sharedValue11, sharedValue2, derivedValue3, sharedValue6, keyboardBehavior];
    const derivedValue21 = useDerivedValue2(pnpm_BottomSheetTsx6, items18);
    const items19 = [reactiveSharedValue3, DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, , , , , , , , ];
    const useDerivedValue3 = tmp33(tmp34[4]).useDerivedValue;
    tmp33(tmp34[4]);
    items19[2] = tmp33(tmp34[8]).SCROLLABLE_STATE;
    items19[3] = animatedScrollableOverrideState;
    items19[4] = derivedValue21;
    items19[5] = tmp33(tmp34[8]).SHEET_STATE;
    items19[6] = state;
    items19[7] = tmp33(tmp34[8]).KEYBOARD_STATE;
    items19[8] = sharedValue12;
    items19[9] = tmp33(tmp34[8]).ANIMATION_STATE;
    [tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121] = items19;
    function pnpm_BottomSheetTsx7() {
      let UNLOCKED;
      const tmp = c0;
      if (tmp) {
        let UNLOCKED2;
        if (_undefined2.value !== _undefined.UNDETERMINED) {
          UNLOCKED2 = _undefined2.value;
        } else {
          if (_undefined3.value !== _undefined4.FILL_PARENT) {
            if (_undefined3.value !== tmp4.EXTENDED) {
              UNLOCKED2 = tmp3.LOCKED;
            }
          }
          UNLOCKED2 = tmp3.UNLOCKED;
        }
        UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = _undefined.UNLOCKED;
      }
      return UNLOCKED;
    }
    const items20 = [tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121];
    pnpm_BottomSheetTsx7.__closure = items20;
    pnpm_BottomSheetTsx7.__workletHash = 12001328135222;
    pnpm_BottomSheetTsx7.__initData = tmp112;
    const items21 = [DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, sharedValue12, state, animatedScrollableOverrideState, derivedValue21];
    const derivedValue31 = useDerivedValue3(pnpm_BottomSheetTsx7, items21);
    const items22 = [sharedValue, animatedSnapPoints, derivedValue, derivedValue4, , , , , , , , , , , , ];
    const useDerivedValue4 = tmp33(tmp34[4]).useDerivedValue;
    tmp33(tmp34[4]);
    items22[4] = tmp33(tmp34[4]).interpolate;
    items22[5] = sharedValue2;
    items22[6] = tmp33(tmp34[4]).Extrapolation;
    items22[7] = DEFAULT_KEYBOARD_INPUT_MODE;
    items22[8] = tmp33(tmp34[8]).KEYBOARD_INPUT_MODE;
    items22[9] = sharedValue13;
    items22[10] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    items22[11] = sharedValue12;
    items22[12] = tmp33(tmp34[8]).ANIMATION_STATE;
    items22[13] = sharedValue6;
    items22[14] = reactiveSharedValue4;
    items22[15] = sharedValue4;
    [tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139] = items22;
    function pnpm_BottomSheetTsx8() {
      let bound;
      value = _undefined.value;
      const substr = value.slice();
      const reversed = substr.reverse();
      const value3 = _undefined.value;
      const substr1 = value3.slice();
      const mapped = substr1.map((item, index) => index);
      const reversed1 = mapped.reverse();
      reversed.push(_undefined2.value);
      reversed1.push(-1);
      num = -1;
      if (_undefined3.value) {
        num = _undefined4(_undefined5.value, reversed, reversed1, _undefined6.CLAMP);
      }
      if (c6 === _undefined7.adjustResize) {
        if (_undefined8.value === _undefined9.KEYBOARD) {
          if (_undefined10.value === _undefined11.RUNNING) {
            if (_undefined12.value) {
              const _Math = Math;
              bound = Math.max(_undefined13.value, num);
            }
            return bound;
          }
        }
      }
      bound = num;
      if (_undefined8.value === _undefined9.SNAP_POINT_CHANGE) {
        bound = num;
        if (_undefined10.value === _undefined11.RUNNING) {
          bound = _undefined14.value;
        }
      }
    }
    const items23 = [tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139];
    pnpm_BottomSheetTsx8.__closure = items23;
    pnpm_BottomSheetTsx8.__workletHash = 2929503613996;
    pnpm_BottomSheetTsx8.__initData = tmp124;
    const items24 = [DEFAULT_KEYBOARD_INPUT_MODE, sharedValue13, sharedValue12, derivedValue, reactiveSharedValue4, sharedValue4, sharedValue2, animatedSnapPoints, sharedValue6, derivedValue4];
    const derivedValue41 = useDerivedValue4(pnpm_BottomSheetTsx8, items24);
    const items25 = [onChange, reactiveSharedValue4, tmp50[1]];
    const tmp142 = DEFAULT_DYNAMIC_SIZING(function handleOnChange(arg0, arg1) {
      if (onChange) {
        let PROVIDED;
        if (arg0 === value.value) {
          PROVIDED = GESTURE_SOURCE.SNAP_POINT_TYPE.DYNAMIC;
        } else {
          PROVIDED = GESTURE_SOURCE.SNAP_POINT_TYPE.PROVIDED;
        }
        tmp(arg0, arg1, PROVIDED);
      }
    }, items25);
    const items26 = [onAnimate, reactiveSharedValue4, sharedValue2];
    const tmp143 = DEFAULT_DYNAMIC_SIZING(function handleOnAnimate(arg0, arg1, arg2) {
      if (onAnimate) {
        let tmp3 = arg0 === reactiveSharedValue4.value;
        const iter = reactiveSharedValue4;
        if (tmp3) {
          tmp3 = -1 !== arg0;
        }
        if (!tmp3) {
          tmp(iter.value, arg0, sharedValue2.value, arg1, arg2);
        }
      }
    }, items26);
    const items27 = [sharedValue1, tmp33(tmp34[4]).cancelAnimation, sharedValue2, sharedValue13, tmp33(tmp34[8]).ANIMATION_SOURCE, sharedValue12, tmp33(tmp34[8]).ANIMATION_STATE];
    [tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150] = items27;
    function pnpm_BottomSheetTsx9() {
      _undefined(c1);
      c2.value = _undefined2.NONE;
      c4.value = _undefined3.STOPPED;
    }
    const items28 = [tmp145, tmp146, tmp147, tmp148, tmp149, tmp150];
    pnpm_BottomSheetTsx9.__closure = items28;
    pnpm_BottomSheetTsx9.__workletHash = 1065000003208;
    pnpm_BottomSheetTsx9.__initData = tmp144;
    const items29 = [sharedValue2, sharedValue12, sharedValue13];
    const tmp141Result = DEFAULT_DYNAMIC_SIZING(pnpm_BottomSheetTsx9, items29);
    const stopAnimation = tmp141Result;
    const items30 = [animatedSnapPoints, false, tmp33(tmp34[4]).runOnJS, tmp33(tmp34[9]).print, reactiveSharedValue4, sharedValue3, sharedValue4, sharedValue13, tmp33(tmp34[8]).ANIMATION_SOURCE, sharedValue21, sharedValue7, sharedValue12, tmp33(tmp34[8]).ANIMATION_STATE, tmp33(tmp34[5]).INITIAL_VALUE, sharedValue8];
    [tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166] = items30;
    function animateToPositionCompleted(arg0) {
      let obj2;
      const tmp = arg0;
      if (tmp) {
        const tmp2 = c0;
        if (tmp2) {
          const obj = { component: "BottomSheet", method: "animateToPositionCompleted", params: obj2 };
          obj2 = { animatedCurrentIndex: _undefined2.value, animatedNextPosition: _undefined3.value, animatedNextPositionIndex: _undefined4.value };
          _undefined(c2)(obj);
        }
        const tmp10 = _undefined6;
        const tmp9 = _undefined5;
        if (_undefined5.value === _undefined6.MOUNT) {
          c8.value = true;
        }
        c9.value = false;
        tmp9.value = tmp10.NONE;
        c10.value = _undefined7.STOPPED;
        _undefined3.value = value;
        _undefined4.value = value;
        c13.value = false;
      }
    }
    const items31 = [tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166];
    animateToPositionCompleted.__closure = items31;
    animateToPositionCompleted.__workletHash = 2748937730067;
    animateToPositionCompleted.__initData = tmp152;
    const items32 = [value, false, , , , , , , , , , , , , , , , , , , , ];
    const tmp141Result11 = DEFAULT_DYNAMIC_SIZING(animateToPositionCompleted, []);
    items32[2] = tmp33(tmp34[4]).runOnJS;
    items32[3] = tmp33(tmp34[9]).print;
    items32[4] = sharedValue2;
    items32[5] = sharedValue12;
    items32[6] = tmp33(tmp34[8]).ANIMATION_STATE;
    items32[7] = sharedValue3;
    items32[8] = tmp141Result;
    items32[9] = sharedValue13;
    items32[10] = state;
    items32[11] = tmp33(tmp34[8]).KEYBOARD_STATE;
    items32[12] = keyboardBehavior;
    items32[13] = tmp33(tmp34[8]).KEYBOARD_BEHAVIOR;
    items32[14] = sharedValue11;
    items32[15] = sharedValue4;
    items32[16] = animatedSnapPoints;
    items32[17] = tmp143;
    items32[18] = tmp33(tmp34[9]).animate;
    items32[19] = animationConfigs;
    items32[20] = overrideReduceMotion;
    items32[21] = tmp141Result11;
    [tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189] = items32;
    function animateToPosition(nextPosition, source) {
      let obj2;
      num = arg2;
      if (arg2 === undefined) {
        num = 0;
      }
      const tmp = c0;
      if (tmp) {
        const obj = { component: "BottomSheet", method: "animateToPosition", params: obj2 };
        obj2 = { currentPosition: _undefined2.value, nextPosition, source };
        _undefined(c2)(obj);
      }
      if (nextPosition !== _undefined2.value) {
        if (undefined !== nextPosition) {
          if (_undefined3.value !== _undefined4.RUNNING) {
            if (_undefined3.value === _undefined4.RUNNING) {
              _undefined6();
            }
            _undefined3.value = _undefined4.RUNNING;
            c8.value = source;
            _undefined5.value = nextPosition;
            let num2 = 0;
            const tmp13 = _undefined7.value === _undefined8.SHOWN && c11 !== _undefined9.extend && nextPosition < iter.value;
            if (tmp13) {
              num2 = _undefined10.value;
            }
            let tmp17 = arg3;
            value = _undefined12.value;
            _undefined11.value = value.indexOf(nextPosition + num2);
            _undefined(c16)(_undefined11.value, nextPosition, source);
            const obj3 = { point: nextPosition, configs: tmp17, velocity: num, overrideReduceMotion, onComplete };
            const tmp23 = c17;
            if (!arg3) {
              tmp17 = c18;
            }
            _undefined2.value = tmp23(obj3);
          }
        }
      }
    }
    const items33 = [tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189];
    animateToPosition.__closure = items33;
    animateToPosition.__workletHash = 627029746159;
    animateToPosition.__initData = tmp168;
    const items34 = [tmp143, keyboardBehavior, animationConfigs, overrideReduceMotion];
    const tmp141Result12 = DEFAULT_DYNAMIC_SIZING(animateToPosition, items34);
    animateToPosition = tmp141Result12;
    const items35 = [derivedValue1, sharedValue2, sharedValue12, tmp33(tmp34[8]).ANIMATION_STATE, sharedValue3, false, tmp33(tmp34[4]).runOnJS, tmp33(tmp34[9]).print, animatedScrollableOverrideState, sharedValue4, animatedSnapPoints, tmp141Result, sharedValue8];
    [tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204] = items35;
    function setToPosition(targetPosition) {
      let obj2;
      let tmp = targetPosition === _undefined.value || undefined === targetPosition;
      if (!tmp) {
        tmp = _undefined2.value === _undefined3.RUNNING && targetPosition === _undefined4.value;
        const tmp4 = _undefined2.value === _undefined3.RUNNING && targetPosition === _undefined4.value;
      }
      if (!tmp) {
        const tmp6 = c4;
        if (tmp6) {
          const obj = { component: _undefined6.name, method: setToPosition.name, params: obj2 };
          obj2 = { currentPosition: _undefined.value, targetPosition };
          _undefined5(c6)(obj);
        }
        _undefined4.value = targetPosition;
        value = _undefined7.value;
        c8.value = value.indexOf(targetPosition);
        _undefined8();
        _undefined.value = targetPosition;
        c11.value = false;
      }
    }
    const items36 = [tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204];
    setToPosition.__closure = items36;
    setToPosition.__workletHash = 11153813934131;
    setToPosition.__initData = tmp192;
    const tmp141Result13 = DEFAULT_DYNAMIC_SIZING(setToPosition, []);
    let closure_55 = tmp141Result13;
    const items37 = [derivedValue2, reactiveSharedValue4, animatedSnapPoints, state, derivedValue1, tmp33(tmp34[8]).ANIMATION_SOURCE, DEFAULT_KEYBOARD_BLUR_BEHAVIOR, tmp33(tmp34[8]).KEYBOARD_BLUR_BEHAVIOR, tmp33(tmp34[8]).KEYBOARD_STATE, sharedValue9, tmp33(tmp34[7]).State, sharedValue10, sharedValue6, keyboardBehavior, tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE, DEFAULT_KEYBOARD_INPUT_MODE, sharedValue11, sharedValue2, sharedValue21, num, derivedValue2];
    [tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228] = items37;
    function getEvaluatedPosition(arg0) {
      let value5;
      value = _undefined.value;
      const value2 = _undefined2.value;
      const value3 = _undefined3.value;
      const value4 = _undefined4.value;
      if (arg0 === _undefined5.KEYBOARD) {
        if (c5 === _undefined6.restore) {
          if (value3 === _undefined7.HIDDEN) {
            if (_undefined8.value !== _undefined9.ACTIVE) {
              if (_undefined10.value !== tmp5.ACTIVE) {
                _undefined11.value = false;
                return value2[value];
              }
            }
          }
        }
      }
      if (c12 === _undefined12.extend) {
        if (value3 === _undefined7.SHOWN) {
          return value4;
        }
      }
      if (c12 === _undefined12.fillParent) {
        if (value3 === _undefined7.SHOWN) {
          _undefined11.value = true;
          return 0;
        }
      }
      if (c12 === _undefined12.interactive) {
        if (value3 === _undefined7.SHOWN) {
          _undefined11.value = true;
          const _Math = Math;
          return Math.max(0, value4 - _undefined14.value);
        }
      }
      if (_undefined11.value) {
        value5 = _undefined15.value;
      } else if (_undefined16.value) {
        value5 = value2[value];
      } else if (-1 === c19) {
        value5 = _undefined17.value;
      } else {
        value5 = value2[tmp15];
      }
      return value5;
    }
    const items38 = [tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228];
    getEvaluatedPosition.__closure = items38;
    getEvaluatedPosition.__workletHash = 9036570591450;
    getEvaluatedPosition.__initData = tmp207;
    const items39 = [sharedValue9, reactiveSharedValue4, sharedValue10, derivedValue1, sharedValue11, state, sharedValue2, animatedSnapPoints, sharedValue6, sharedValue21, keyboardBehavior, DEFAULT_KEYBOARD_BLUR_BEHAVIOR, num];
    const tmp141Result14 = DEFAULT_DYNAMIC_SIZING(getEvaluatedPosition, items39);
    const items40 = [derivedValue3, sharedValue7, tmp33(tmp34[8]).ANIMATION_SOURCE, derivedValue4, tmp141Result14, sharedValue21, DEFAULT_ANIMATE_ON_MOUNT, tmp141Result12, tmp141Result13, sharedValue8, sharedValue12, tmp33(tmp34[8]).ANIMATION_STATE, sharedValue4, sharedValue6, derivedValue2, reactiveSharedValue4, animatedSnapPoints, derivedValue41, tmp96, sharedValue2];
    [tmp230, tmp231, tmp232, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, tmp245, tmp246, tmp247, tmp248, tmp249] = items40;
    function evaluatePosition(arg0, arg1) {
      if (!_undefined.value) {
        if (_undefined3.value) {
          const tmp5 = _undefined4(arg0);
          if (_undefined5.value) {
            if (_undefined8.value) {
              _undefined7(tmp5);
            } else {
              const iter = _undefined9;
              const tmp16 = _undefined10;
              if (_undefined9.value === _undefined10.RUNNING) {
                if (-1 === _undefined11.value) {
                  if (!_undefined12.value) {
                    _undefined7(_undefined13.value);
                  }
                }
                if (_undefined11.value !== _undefined14.value) {
                  _undefined6(_undefined15.value[_undefined11.value], arg0, undefined, arg1);
                }
              }
              if (iter.value !== tmp16.RUNNING) {
                if (-1 === _undefined16.value) {
                  _undefined7(_undefined13.value);
                }
              }
              _undefined6(tmp5, arg0, undefined, arg1);
            }
          } else {
            const tmp7 = c5;
            if (tmp7) {
              _undefined6(tmp5, _undefined2.MOUNT, undefined, arg1);
            } else {
              _undefined7(tmp5);
              tmp6.value = true;
            }
          }
        }
      }
    }
    const items41 = [tmp231, tmp232, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, tmp245, tmp246, tmp247, tmp248, tmp249];
    evaluatePosition.__closure = items41;
    evaluatePosition.__workletHash = 11378032892914;
    evaluatePosition.__initData = tmp230;
    const items42 = [tmp141Result14, tmp141Result12, tmp141Result13, tmp96];
    const tmp141Result15 = DEFAULT_DYNAMIC_SIZING(evaluatePosition, items42);
    const tmp33Result68 = tmp33(tmp34[6]);
    const stableCallback = tmp33Result68.useStableCallback(function handleSnapToIndex(arg0, arg1) {
      const value2 = first.get();
      const iter = derivedValue4;
      if (derivedValue4.get()) {
        let tmp5 = arg0 >= -1;
        const tmp4 = _modDef38;
        if (tmp5) {
          tmp5 = arg0 <= value2.length - 1;
        }
        tmp4(tmp5, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
        value = iter.value && arg0 !== sharedValue4.value && tmp7 !== sharedValue3.value && !sharedValue7.value;
        if (value) {
          sharedValue6.value = false;
          const obj = _mod1652;
          const runOnUIResult = obj.runOnUI(animateToPosition);
          runOnUIResult(value2[arg0], GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg1);
        }
      }
    });
    const items43 = [reactiveSharedValue4, false, tmp33(tmp34[9]).print, animatedScrollableOverrideState, tmp33(tmp34[9]).normalizeSnapPoint, derivedValue, derivedValue4, sharedValue3, sharedValue7, sharedValue6, tmp33(tmp34[4]).runOnUI, tmp141Result12, tmp33(tmp34[8]).ANIMATION_SOURCE];
    [tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264] = items43;
    function handleSnapToPosition(position, arg1) {
      let obj2;
      const tmp = c0;
      if (tmp) {
        const obj = { component: _undefined2.name, method: handleSnapToPosition.name, params: obj2 };
        obj2 = { position };
        _undefined(obj);
      }
      const tmp6 = _undefined3(position, _undefined4.value);
      const tmp7 = c5 && tmp6 !== _undefined5.value && !_undefined6.value;
      if (tmp7) {
        c8.value = true;
        _undefined7(c10)(tmp6, _undefined8.USER, 0, arg1);
      }
    }
    const items44 = [tmp253, tmp254, tmp255, tmp256, tmp257, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264];
    handleSnapToPosition.__closure = items44;
    handleSnapToPosition.__workletHash = 6045432180447;
    handleSnapToPosition.__initData = tmp252;
    const items45 = [tmp141Result12, num3, num2, derivedValue4, sharedValue7, derivedValue, sharedValue2];
    const tmp141Result16 = DEFAULT_DYNAMIC_SIZING(handleSnapToPosition, items45);
    const snapToPosition = tmp141Result16;
    const tmp33Result69 = tmp33(tmp34[6]);
    const stableCallback1 = tmp33Result69.useStableCallback(function handleSetToIndex(arg0, arg1) {
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
      value = first.get();
      if (derivedValue4.get()) {
        let tmp2 = importDefault;
        const tmp3 = dependencyMap;
        let tmp5 = arg0 >= -1;
        const tmp4 = _modDef38;
        if (tmp5) {
          tmp5 = arg0 <= value.length - 1;
        }
        tmp4(tmp5, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
        if (!sharedValue7.value) {
          if (undefined !== arg1) {
            let bound;
            const _Number = Number;
            if (Number.isFinite(arg1)) {
              const _Math = Math;
              bound = Math.max(0, arg1);
            }
            if (undefined !== bound) {
              sharedValue6.value = false;
              const items = [closure_27, bound, sharedValue2, arg0, sharedValue4, sharedValue12, , , , , ];
              const runOnUI = _mod1652.runOnUI;
              _mod1652;
              items[6] = GESTURE_SOURCE.ANIMATION_STATE;
              items[7] = reactiveSharedValue4;
              items[8] = sharedValue3;
              items[9] = stopAnimation;
              items[10] = sharedValue8;
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
              [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
              function pnpm_BottomSheetTsx16() {
                const tmp2 = _undefined;
                if (value === _undefined.value) {
                  if (value === _undefined2.value) {
                    if (_undefined3.value !== _undefined4.RUNNING) {
                      c6.value = tmp3;
                    }
                  }
                }
                c7.value = value;
                _undefined2.value = value;
                c6.value = value;
                _undefined5();
                tmp2.value = value;
                c9.value = false;
              }
              const items1 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
              pnpm_BottomSheetTsx16.__closure = items1;
              pnpm_BottomSheetTsx16.__workletHash = 14213566474163;
              pnpm_BottomSheetTsx16.__initData = tmp11;
              runOnUI(pnpm_BottomSheetTsx16)();
            }
          }
          bound = value[arg0];
        }
      }
    });
    const tmp33Result70 = tmp33(tmp34[6]);
    const stableCallback2 = tmp33Result70.useStableCallback(function handleSetToPosition(arg0) {
      if (derivedValue4.get()) {
        if (!sharedValue7.value) {
          sharedValue6.value = true;
          const obj = _mod5419;
          const normalizeSnapPointResult = obj.normalizeSnapPoint(arg0, derivedValue.get());
          const obj2 = _mod1652;
          obj2.runOnUI(closure_55)(normalizeSnapPointResult);
        }
      }
    });
    const items46 = [tmp141Result12, sharedValue7, derivedValue4, sharedValue6, sharedValue3, derivedValue2];
    const tmp141Result17 = DEFAULT_DYNAMIC_SIZING(function handleClose(arg0) {
      value = derivedValue2.value;
      const value2 = derivedValue4.value && value !== sharedValue3.value && !sharedValue7.value;
      if (value2) {
        sharedValue6.value = false;
        const obj = _mod1652;
        const runOnUIResult = obj.runOnUI(animateToPosition);
        runOnUIResult(value, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
      }
    }, items46);
    const close = tmp141Result17;
    const items47 = [tmp141Result12, sharedValue7, sharedValue6, sharedValue3, derivedValue2];
    const tmp141Result18 = DEFAULT_DYNAMIC_SIZING(function handleForceClose(arg0) {
      value = derivedValue2.value;
      const value2 = value === sharedValue3.value || sharedValue7.value;
      if (!value2) {
        sharedValue6.value = false;
        sharedValue7.value = true;
        const obj = _mod1652;
        const runOnUIResult = obj.runOnUI(animateToPosition);
        runOnUIResult(value, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
      }
    }, items47);
    const forceClose = tmp141Result18;
    const items48 = [tmp141Result12, sharedValue6, derivedValue4, sharedValue7, animatedSnapPoints, sharedValue3, sharedValue4];
    const tmp141Result19 = DEFAULT_DYNAMIC_SIZING(function handleExpand(arg0) {
      const value2 = first.value;
      value = derivedValue4.value && value2.length - 1 !== sharedValue4.value && tmp !== sharedValue3.value && !sharedValue7.value;
      if (value) {
        sharedValue6.value = false;
        const obj = _mod1652;
        const runOnUIResult = obj.runOnUI(animateToPosition);
        runOnUIResult(value2[value2.length - 1], GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
      }
    }, items48);
    const expand = tmp141Result19;
    const items49 = [tmp141Result12, sharedValue7, derivedValue4, sharedValue6, animatedSnapPoints, sharedValue3, sharedValue4];
    const tmp141Result20 = DEFAULT_DYNAMIC_SIZING(function handleCollapse(arg0) {
      let first;
      first = first.value[0];
      const tmp2 = derivedValue4 && 0 !== sharedValue4.value && first !== sharedValue3.value && !sharedValue7.value;
      if (tmp2) {
        sharedValue6.value = false;
        const obj = _mod1652;
        const runOnUIResult = obj.runOnUI(animateToPosition);
        runOnUIResult(first, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
      }
    }, items49);
    const collapse = tmp141Result20;
    DEFAULT_OVER_DRAG_RESISTANCE_FACTOR(arg1, () => ({ snapToIndex: stableCallback, snapToPosition, setToIndex: stableCallback1, setToPosition: stableCallback2, expand, collapse, close, forceClose }));
    const items50 = [derivedValue41, sharedValue2, sharedValue1, derivedValue3, animatedScrollableType, sharedValue9, sharedValue10, derivedValue2, sharedValue, derivedValue, reactiveSharedValue3, sharedValue12, state, height, sharedValue11, derivedValue21, derivedValue1, derivedValue31, animatedScrollableOverrideState, animatedSnapPoints, shouldHandleKeyboardEvents, animatedScrollableContentOffsetY, isScrollableRefreshable, sharedValue5, sharedValue6, DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, DEFAULT_OVER_DRAG_RESISTANCE_FACTOR, enableOverDrag, DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE, DEFAULT_DYNAMIC_SIZING, DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE, simultaneousHandlers, waitFor, activeOffsetX, activeOffsetY, failOffsetX, failOffsetY, setScrollableRef, removeScrollableRef, tmp141Result12, tmp141Result];
    const items51 = [derivedValue41, sharedValue2, stableCallback, tmp141Result16, stableCallback1, stableCallback2, tmp141Result19, tmp141Result20, tmp141Result17, tmp141Result18];
    const tmp95Result = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE(() => ({ enableContentPanningGesture: DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, enableDynamicSizing: DEFAULT_DYNAMIC_SIZING, overDragResistanceFactor: DEFAULT_OVER_DRAG_RESISTANCE_FACTOR, enableOverDrag, enablePanDownToClose: DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE, animatedAnimationState: sharedValue12, animatedSheetState: derivedValue21, animatedScrollableState: derivedValue31, animatedScrollableOverrideState, animatedContentGestureState: sharedValue9, animatedHandleGestureState: sharedValue10, animatedKeyboardState: state, animatedScrollableType, animatedIndex: derivedValue41, animatedPosition: sharedValue2, animatedSheetHeight: derivedValue3, animatedContentHeight: sharedValue1, animatedClosedPosition: derivedValue2, animatedHandleHeight: reactiveSharedValue3, animatedFooterHeight: sharedValue, animatedKeyboardHeight: height, animatedKeyboardHeightInContainer: sharedValue11, animatedContainerHeight: derivedValue, animatedSnapPoints, animatedHighestSnapPoint: derivedValue1, animatedScrollableContentOffsetY, isInTemporaryPosition: sharedValue6, isContentHeightFixed: sharedValue5, isScrollableRefreshable, shouldHandleKeyboardEvents, simultaneousHandlers, waitFor, activeOffsetX, activeOffsetY, failOffsetX, failOffsetY, enableBlurKeyboardOnGesture: DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE, animateToPosition, stopAnimation, setScrollableRef, removeScrollableRef }), items50);
    const items52 = [sharedValue3, derivedValue];
    [tmp276, tmp277] = items52;
    function pnpm_BottomSheetTsx17() {
      return _undefined.value;
    }
    const items53 = [tmp277];
    pnpm_BottomSheetTsx17.__closure = items53;
    pnpm_BottomSheetTsx17.__workletHash = 2115786008182;
    pnpm_BottomSheetTsx17.__initData = tmp276;
    const items54 = [sharedValue4, , , , , , , , , ];
    const tmp95Result2 = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE(() => ({ animatedIndex: derivedValue41, animatedPosition: sharedValue2, snapToIndex: stableCallback, snapToPosition, setToIndex: stableCallback1, setToPosition: stableCallback2, expand, collapse, close, forceClose }), items51);
    const useAnimatedReaction = tmp33(tmp34[4]).useAnimatedReaction;
    tmp33(tmp34[4]);
    items54[1] = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    items54[2] = sharedValue8;
    items54[3] = sharedValue12;
    items54[4] = tmp33(tmp34[8]).ANIMATION_STATE;
    items54[5] = sharedValue13;
    items54[6] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    items54[7] = sharedValue4;
    items54[8] = tmp141Result12;
    items54[9] = derivedValue2;
    [tmp278, tmp279, tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287] = items54;
    function pnpm_BottomSheetTsx18(arg0, arg1) {
      if (arg0 !== c0) {
        c1.value = arg0 !== arg1;
        const tmp3 = _undefined.value === _undefined2.RUNNING && _undefined3.value === _undefined4.GESTURE && -1 === _undefined5.value;
        if (tmp3) {
          _undefined6(_undefined7.value, _undefined4.GESTURE);
        }
      }
    }
    const items55 = [tmp279, tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287];
    pnpm_BottomSheetTsx18.__closure = items55;
    pnpm_BottomSheetTsx18.__workletHash = 5730517001484;
    pnpm_BottomSheetTsx18.__initData = tmp278;
    const animatedReaction = useAnimatedReaction(pnpm_BottomSheetTsx17, pnpm_BottomSheetTsx18);
    const items56 = [sharedValue21, animatedSnapPoints];
    [tmp290, tmp291] = items56;
    function pnpm_BottomSheetTsx19() {
      return _undefined.value;
    }
    const items57 = [tmp291];
    pnpm_BottomSheetTsx19.__closure = items57;
    pnpm_BottomSheetTsx19.__workletHash = 13658470625432;
    pnpm_BottomSheetTsx19.__initData = tmp290;
    const items58 = [sharedValue5, sharedValue21, derivedValue4, false, , , , ];
    const useAnimatedReaction2 = tmp33(tmp34[4]).useAnimatedReaction;
    tmp33(tmp34[4]);
    items58[4] = tmp33(tmp34[4]).runOnJS;
    items58[5] = tmp33(tmp34[9]).print;
    items58[6] = tmp141Result15;
    items58[7] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    [tmp292, tmp293, tmp294, tmp295, tmp296, tmp297, tmp298, tmp299] = items58;
    function pnpm_BottomSheetTsx20(result, arg1) {
      let obj2;
      const json = JSON.stringify(result);
      value = json === JSON.stringify(arg1) && _undefined.value;
      if (!value) {
        if (_undefined2.value) {
          const tmp4 = c2;
          if (tmp4) {
            const obj = { component: "BottomSheet", method: "useAnimatedReaction::OnSnapPointChange", category: "effect", params: obj2 };
            obj2 = { result };
            _undefined3(c4)(obj);
          }
          _undefined4(_undefined5.SNAP_POINT_CHANGE);
        }
      }
    }
    const items59 = [tmp293, tmp294, tmp295, tmp296, tmp297, tmp298, tmp299];
    pnpm_BottomSheetTsx20.__closure = items59;
    pnpm_BottomSheetTsx20.__workletHash = 13994522972216;
    pnpm_BottomSheetTsx20.__initData = tmp292;
    const items60 = [derivedValue4, animatedSnapPoints];
    const animatedReaction2 = useAnimatedReaction2(pnpm_BottomSheetTsx19, pnpm_BottomSheetTsx20, items60);
    const items61 = [derivedValue4, state, height];
    [tmp302, tmp303, tmp304] = items61;
    function pnpm_BottomSheetTsx21() {
      return { _keyboardState: _undefined.value, _keyboardHeight: _undefined2.value };
    }
    const items62 = [tmp303, tmp304];
    pnpm_BottomSheetTsx21.__closure = items62;
    pnpm_BottomSheetTsx21.__workletHash = 8094953483096;
    pnpm_BottomSheetTsx21.__initData = tmp302;
    const items63 = [sharedValue6, , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    const useAnimatedReaction3 = tmp33(tmp34[4]).useAnimatedReaction;
    tmp33(tmp34[4]);
    items63[1] = tmp33(tmp34[8]).KEYBOARD_STATE;
    items63[2] = sharedValue12;
    items63[3] = tmp33(tmp34[8]).ANIMATION_STATE;
    items63[4] = sharedValue13;
    items63[5] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    items63[6] = false;
    items63[7] = tmp33(tmp34[4]).runOnJS;
    items63[8] = tmp33(tmp34[9]).print;
    items63[9] = animatedScrollableOverrideState;
    items63[10] = sharedValue11;
    items63[11] = tmp25;
    items63[12] = num3;
    items63[13] = reactiveSharedValue2;
    items63[14] = DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    items63[15] = DEFAULT_KEYBOARD_INPUT_MODE;
    items63[16] = tmp33(tmp34[8]).KEYBOARD_INPUT_MODE;
    items63[17] = keyboardBehavior;
    items63[18] = tmp33(tmp34[8]).KEYBOARD_BEHAVIOR;
    items63[19] = sharedValue9;
    items63[20] = tmp33(tmp34[7]).State;
    items63[21] = sharedValue10;
    items63[22] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    items63[23] = tmp33(tmp34[8]).KEYBOARD_BLUR_BEHAVIOR;
    items63[24] = tmp33(tmp34[9]).getKeyboardAnimationConfigs;
    items63[25] = animationEasing;
    items63[26] = animationDuration;
    items63[27] = tmp141Result15;
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
    let c25;
    let c26;
    [tmp305, tmp306, tmp307, tmp308, tmp309, tmp310, tmp311, tmp312, tmp313, tmp314, tmp315, tmp316, tmp317, tmp318, tmp319, tmp320, tmp321, tmp322, tmp323, tmp324, tmp325, tmp326, tmp327, tmp328, tmp329, tmp330, tmp331, tmp332] = items63;
    function pnpm_BottomSheetTsx22(arg0, _keyboardState) {
      let _keyboardHeight;
      let obj2;
      ({ _keyboardState, _keyboardHeight } = arg0);
      let _keyboardState1;
      if (_keyboardState != null) {
        _keyboardState1 = _keyboardState._keyboardState;
      }
      if (_keyboardState != null) {
        const _keyboardHeight2 = _keyboardState._keyboardHeight;
      }
      if (_keyboardState !== _keyboardState1) {
        if (_keyboardState !== _undefined.UNDETERMINED) {
          const tmp7 = c5;
          if (tmp7) {
            const obj = { component: _undefined7.name, method: "useAnimatedReaction::OnKeyboardStateChange", category: "effect", params: obj2 };
            obj2 = { keyboardState: _keyboardState, keyboardHeight: _keyboardHeight };
            _undefined6(c7)(obj);
          }
          let num2 = 0;
          if (0 !== _keyboardHeight) {
            let absResult;
            const _Math = Math;
            if (c10) {
              const _Math2 = Math;
              absResult = abs(_keyboardHeight - Math.abs(c11 - _undefined8.value.bottom));
            } else {
              absResult = abs(_keyboardHeight - _undefined8.value.bottom);
            }
            num2 = absResult;
          }
          c9.value = num2;
          if ("android" === _undefined9.OS) {
            if (c14 === _undefined10.adjustResize) {
              c9.value = 0;
            }
          }
          if (_undefined12.value !== _undefined13.ACTIVE) {
            if (_undefined12.value !== _undefined13.BEGAN) {
              if (_undefined14.value !== _undefined13.ACTIVE) {
                if (_undefined14.value !== _undefined13.BEGAN) {
                  if (_keyboardState !== _undefined.HIDDEN) {
                    _undefined19(_undefined5.KEYBOARD, _undefined16(_undefined17.value, _undefined18.value));
                  }
                }
              }
            }
          }
        }
      }
    }
    const items64 = [tmp306, tmp307, tmp308, tmp309, tmp310, tmp311, tmp312, tmp313, tmp314, tmp315, tmp316, tmp317, tmp318, tmp319, tmp320, tmp321, tmp322, tmp323, tmp324, tmp325, tmp326, tmp327, tmp328, tmp329, tmp330, tmp331, tmp332];
    pnpm_BottomSheetTsx22.__closure = items64;
    pnpm_BottomSheetTsx22.__workletHash = 10882388578267;
    pnpm_BottomSheetTsx22.__initData = tmp305;
    const items65 = [tmp25, num3, keyboardBehavior, DEFAULT_KEYBOARD_BLUR_BEHAVIOR, DEFAULT_KEYBOARD_INPUT_MODE, reactiveSharedValue2, tmp141Result14];
    const animatedReaction3 = useAnimatedReaction3(pnpm_BottomSheetTsx21, pnpm_BottomSheetTsx22, items65);
    const items66 = [sharedValue7, sharedValue2];
    [tmp334, tmp335] = items66;
    function pnpm_BottomSheetTsx23() {
      return _undefined.value;
    }
    const items67 = [tmp335];
    pnpm_BottomSheetTsx23.__closure = items67;
    pnpm_BottomSheetTsx23.__workletHash = 16678447714097;
    pnpm_BottomSheetTsx23.__initData = tmp334;
    const items68 = [sharedValue8, animatedPosition, num2];
    [tmp336, tmp337, tmp338] = items68;
    function pnpm_BottomSheetTsx24(arg0) {
      if (c0) {
        tmp.value = arg0 + c1;
      }
    }
    const items69 = [tmp337, tmp338];
    pnpm_BottomSheetTsx24.__closure = items69;
    pnpm_BottomSheetTsx24.__workletHash = 1759389677568;
    pnpm_BottomSheetTsx24.__initData = tmp336;
    const tmp33Result74 = tmp33(tmp34[4]);
    const animatedReaction1 = tmp33Result74.useAnimatedReaction(pnpm_BottomSheetTsx23, pnpm_BottomSheetTsx24, []);
    const items70 = [sharedValue9, derivedValue41];
    [tmp340, tmp341] = items70;
    function pnpm_BottomSheetTsx25() {
      return _undefined.value;
    }
    const items71 = [tmp341];
    pnpm_BottomSheetTsx25.__closure = items71;
    pnpm_BottomSheetTsx25.__workletHash = 8009767659415;
    pnpm_BottomSheetTsx25.__initData = tmp340;
    const items72 = [sharedValue10, animatedIndex];
    [tmp342, tmp343] = items72;
    function pnpm_BottomSheetTsx26(value) {
      if (c0) {
        tmp.value = value;
      }
    }
    const items73 = [tmp343];
    pnpm_BottomSheetTsx26.__closure = items73;
    pnpm_BottomSheetTsx26.__workletHash = 13880787853986;
    pnpm_BottomSheetTsx26.__initData = tmp342;
    const tmp33Result75 = tmp33(tmp34[4]);
    const animatedReaction4 = tmp33Result75.useAnimatedReaction(pnpm_BottomSheetTsx25, pnpm_BottomSheetTsx26, []);
    const items74 = [animatedScrollableType, derivedValue41, sharedValue2, sharedValue12, sharedValue9, sharedValue10];
    [tmp346, tmp347, tmp348, tmp349, tmp350, tmp351] = items74;
    function pnpm_BottomSheetTsx27() {
      return { _animatedIndex: _undefined.value, _animatedPosition: _undefined2.value, _animationState: _undefined3.value, _contentGestureState: _undefined4.value, _handleGestureState: _undefined5.value };
    }
    const items75 = [tmp347, tmp348, tmp349, tmp350, tmp351];
    pnpm_BottomSheetTsx27.__closure = items75;
    pnpm_BottomSheetTsx27.__workletHash = 16591248380755;
    pnpm_BottomSheetTsx27.__initData = tmp346;
    const items76 = [animatedScrollableContentOffsetY, , , , , , , , , , , , , , ];
    const useAnimatedReaction4 = tmp33(tmp34[4]).useAnimatedReaction;
    tmp33(tmp34[4]);
    items76[1] = tmp33(tmp34[8]).ANIMATION_STATE;
    items76[2] = sharedValue3;
    items76[3] = tmp33(tmp34[5]).INITIAL_VALUE;
    items76[4] = sharedValue4;
    items76[5] = tmp33(tmp34[7]).State;
    items76[6] = tmp96;
    items76[7] = reactiveSharedValue4;
    items76[8] = animatedSnapPoints;
    items76[9] = false;
    items76[10] = tmp33(tmp34[4]).runOnJS;
    items76[11] = tmp33(tmp34[9]).print;
    items76[12] = animatedScrollableOverrideState;
    items76[13] = tmp142;
    items76[14] = onClose;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let c10;
    let c11;
    let c12;
    let c13;
    [tmp352, tmp353, tmp354, tmp355, tmp356, tmp357, tmp358, tmp359, tmp360, tmp361, tmp362, tmp363, tmp364, tmp365, tmp366] = items76;
    function pnpm_BottomSheetTsx28(_animationState) {
      let _animatedIndex;
      let _animatedPosition;
      let _contentGestureState;
      let _handleGestureState;
      let obj2;
      let obj4;
      ({ _animatedIndex, _animatedPosition, _contentGestureState, _handleGestureState } = _animationState);
      if (_animationState._animationState === _undefined.STOPPED) {
        let tmp2 = _undefined2.value === c2;
        const iter2 = _undefined2;
        if (!tmp2) {
          tmp2 = _undefined3.value === tmp28;
        }
        if (!tmp2) {
          tmp2 = _animatedPosition === iter2.value && _animatedIndex === _undefined3.value;
          const tmp3 = _animatedPosition === iter2.value && _animatedIndex === _undefined3.value;
        }
        if (tmp2) {
          tmp2 = _animatedIndex % 1 === 0;
        }
        if (tmp2) {
          let tmp6 = _contentGestureState !== _undefined4.END && _contentGestureState !== tmp5.UNDETERMINED && _contentGestureState !== tmp5.CANCELLED;
          if (!tmp6) {
            tmp6 = _handleGestureState !== _undefined4.END && _handleGestureState !== _undefined4.UNDETERMINED && _handleGestureState !== _undefined4.CANCELLED;
          }
          tmp2 = !tmp6;
        }
        if (tmp2) {
          const tmp8 = c5 && _animatedIndex === _undefined5.value && _undefined6.value[_animatedIndex] !== _animatedPosition;
          if (!tmp8) {
            if (_animatedIndex !== _undefined5.value) {
              const tmp11 = c8;
              if (tmp11) {
                const obj = { component: _undefined8.name, method: "useAnimatedReaction::OnChange", category: "effect", params: obj2 };
                obj2 = { animatedCurrentIndex: _undefined5.value, animatedIndex: _animatedIndex };
                _undefined7(c10)(obj);
              }
              _undefined5.value = _animatedIndex;
              _undefined7(c12)(_animatedIndex, _animatedPosition);
            }
            const tmp19 = -1 === _animatedIndex && c13;
            if (tmp19) {
              const tmp20 = c8;
              if (tmp20) {
                const obj3 = { component: _undefined8.name, method: "useAnimatedReaction::onClose", category: "effect", params: obj4 };
                obj4 = { animatedCurrentIndex: _undefined5.value, animatedIndex: _animatedIndex };
                _undefined7(c10)(obj3);
              }
              _undefined7(c13)();
            }
          }
        }
      }
    }
    const items77 = [tmp353, tmp354, tmp355, tmp356, tmp357, tmp358, tmp359, tmp360, tmp361, tmp362, tmp363, tmp364, tmp365, tmp366];
    pnpm_BottomSheetTsx28.__closure = items77;
    pnpm_BottomSheetTsx28.__workletHash = 15880718201832;
    pnpm_BottomSheetTsx28.__initData = tmp352;
    const items78 = [tmp96, tmp142, onClose];
    const animatedReaction41 = useAnimatedReaction4(pnpm_BottomSheetTsx27, pnpm_BottomSheetTsx28, items78);
    const items79 = [DEFAULT_ANIMATE_ON_MOUNT, num, sharedValue21, stableCallback];
    overrideReduceMotion(() => {
      const tmp = DEFAULT_ANIMATE_ON_MOUNT && !sharedValue21.value;
      if (!tmp) {
        stableCallback(num);
      }
    }, items79);
    let obj = { value: tmp95Result2, children: waitFor(BottomSheetInternalProvider, obj2) };
    const BottomSheetProvider = tmp33(tmp34[11]).BottomSheetProvider;
    obj2 = { value: tmp95Result, children: activeOffsetX(tmp371, obj3) };
    BottomSheetInternalProvider = tmp33(tmp34[11]).BottomSheetInternalProvider;
    obj3 = { gestureEventsHandlersHook, children: items80 };
    let tmp369Result = null;
    tmp371 = DEFAULT_ANIMATE_ON_MOUNT(tmp34[12]);
    if (backdropComponent) {
      let obj4 = { animatedIndex: derivedValue41, animatedPosition: sharedValue2, style: simultaneousHandlers.absoluteFillObject };
      tmp369Result = tmp369(backdropComponent, obj4);
    }
    items80 = [tmp369Result, ];
    const obj5 = { shouldCalculateHeight: !tmp25, containerHeight: reactiveSharedValue, containerOffset: reactiveSharedValue2, topInset: num2, bottomInset: num3, detached: undefined !== detached && detached, style: containerStyle, children: activeOffsetX(BottomSheetBody, obj6) };
    const BottomSheetHostingContainer = tmp33(tmp34[13]).BottomSheetHostingContainer;
    let tmp369Result4 = null;
    obj6 = { style, BodyComponent, children: items81 };
    BottomSheetBody = tmp33(tmp34[14]).BottomSheetBody;
    if (null !== backgroundComponent) {
      const obj7 = { animatedIndex: derivedValue41, animatedPosition: sharedValue2, backgroundComponent, backgroundStyle };
      tmp369Result4 = tmp369(tmp33(tmp34[15]).BottomSheetBackgroundContainer, obj7, "BottomSheetBackgroundContainer");
    }
    items81 = [tmp369Result4, , ];
    const BottomSheetContent = tmp33(tmp34[16]).BottomSheetContent;
    const obj8 = { pointerEvents: "box-none", accessible, accessibilityRole: DEFAULT_ACCESSIBILITY_ROLE, accessibilityLabel: DEFAULT_ACCESSIBILITY_LABEL, keyboardBehavior, detached: undefined !== detached && detached, children: items82 };
    items82 = [children, ];
    let tmp369Result5 = null;
    if (renderFooter) {
      const obj9 = { renderFooter };
      tmp369Result5 = tmp369(tmp33(tmp34[17]).BottomSheetFooterContainer, obj9);
    }
    items82[1] = tmp369Result5;
    items81[1] = activeOffsetX(BottomSheetContent, obj8);
    let tmp369Result6 = null;
    if (null !== handleComponent) {
      const obj10 = { animatedIndex: derivedValue41, animatedPosition: sharedValue2, handleHeight: reactiveSharedValue3, enableHandlePanningGesture, enableOverDrag, enablePanDownToClose: DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE, overDragResistanceFactor: DEFAULT_OVER_DRAG_RESISTANCE_FACTOR, keyboardBehavior, handleComponent, handleStyle, handleIndicatorStyle };
      tmp369Result6 = tmp369(tmp33(tmp34[18]).BottomSheetHandleContainer, obj10, "BottomSheetHandleContainer");
    }
    items81[2] = tmp369Result6;
    items80[1] = waitFor(BottomSheetHostingContainer, obj5, "BottomSheetContainer");
    return waitFor(BottomSheetProvider, obj);
  }
}
const memoResult = memo(forwardRef(BottomSheet));
memoResult.displayName = "BottomSheet";

export default memoResult;
