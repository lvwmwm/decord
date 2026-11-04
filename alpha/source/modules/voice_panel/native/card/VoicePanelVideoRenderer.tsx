// Module ID: 19510
// Function ID: 19511
// Name: VoicePanelVideoRenderer
// Dependencies: [32, 19, 17, 11410, 11408, 19377, 11411, 21, 1652, 11969, 5141, 11409, 5771, 10267, 1705, 5384, 5428, 6023, 19466, 11964, 11962, 19456, 11414, 19374, 6008, 5732, 575, 5378, 11966, 2]

// Module 19510 (VoicePanelVideoRenderer)
import react_native from "react-native" /* 17 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11408 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11411 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11414 */;
import DCDVideoRendererDefault from "DCDVideoRenderer" /* 11969 */;
import VideoActionCreators from "VideoActionCreators" /* 19374 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19377 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11410 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, diff2, diff3, failResult, set, set2, set2Result, set3, set3Result, timestamp, value1;

let closure_12;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let unpackModuleId;
let PixelRatio = react_native.PixelRatio;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
let SCALE_PHYSICS = MorphablePanelConstants.SCALE_PHYSICS;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const DCDVideoRenderer = module_1652.createAnimatedComponent(DCDVideoRendererDefault);
let items = [{ code: "(function getScaleChangeWithOverscroll_VoicePanelVideoRendererTsx1(currentScale,scaleChange,fitScale){let[MIN_OVERSCROLL,OVERSCOLL_INTENSITY_FACTOR]=this.__closure;if(currentScale>=fitScale){return scaleChange;}const underScale=1-currentScale;const factor=Math.max(MIN_OVERSCROLL,1-underScale*underScale*OVERSCOLL_INTENSITY_FACTOR);return 1+(scaleChange-1)*factor;})" }, 0.1, 5];
let c1;
[tmp4, tmp5, tmp6] = items;
function getScaleChangeWithOverscroll(arg0, arg1, arg2) {
  if (arg0 >= arg2) {
    return arg1;
  } else {
    const diff = 1 - arg0;
    const _Math = Math;
    const diff1 = arg1 - 1;
    return 1 + diff1 * Math.max(c0, 1 - diff * diff * c1);
  }
}
let items1 = [tmp5, tmp6];
getScaleChangeWithOverscroll.__closure = items1;
getScaleChangeWithOverscroll.__workletHash = 15489655629569;
getScaleChangeWithOverscroll.__initData = tmp4;
let closure_15 = createStyles.createStyles({ wrapper: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, animatedWrapperStyles: { position: "absolute" }, video: { width: "100%", height: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -16, marginLeft: -16, height: 32, width: 32 } });
let closure_16 = { code: "(function VoicePanelVideoRendererTsx2(){let[containerLayout,videoDimensions]=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);})" };
let closure_17 = { code: "(function VoicePanelVideoRendererTsx3(){let[containerLayout,videoDimensions]=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);})" };
let closure_18 = { code: "(function VoicePanelVideoRendererTsx4(){let[translateX,translateY,scale,fitScale,coverScale]=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;})" };
let closure_19 = { code: "(function VoicePanelVideoRendererTsx5(forcedMode){let[scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold]=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);})" };
let closure_20 = { code: "(function VoicePanelVideoRendererTsx6(){let[focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize]=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);})" };
let closure_21 = { code: "(function VoicePanelVideoRendererTsx7(){let[containerLayout]=this.__closure;return containerLayout.get();})" };
let closure_22 = { code: "(function VoicePanelVideoRendererTsx8(containerLayout,previous){let[cheapWorkletShallowEqual,focused,id,resetOnLayoutChange]=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout!==previous&&previous!=null){resetOnLayoutChange();}})" };
let closure_23 = { code: "(function VoicePanelVideoRendererTsx9(){let[coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD]=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;})" };
let closure_24 = { code: "(function VoicePanelVideoRendererTsx10(){let[numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY]=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));})" };
let closure_25 = { code: "(function VoicePanelVideoRendererTsx11(){let[focused,id,isInDefaultZoom,isInPanToZoom]=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());})" };
let closure_26 = { code: "(function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous){let[setIsFocusedVideoZoomed]=this.__closure;if(isFocusedZoomed===previous){return;}setIsFocusedVideoZoomed(isFocusedZoomed);})" };
let closure_27 = { code: "(function VoicePanelVideoRendererTsx13(){let[focused,id]=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;})" };
let closure_28 = { code: "(function VoicePanelVideoRendererTsx14(isFocused,previous){let[resetOnLayoutChange]=this.__closure;if(isFocused===previous){return;}resetOnLayoutChange();})" };
let closure_29 = { code: "(function VoicePanelVideoRendererTsx15(){let[mode]=this.__closure;return mode.get();})" };
let closure_30 = { code: "(function VoicePanelVideoRendererTsx16(mode,previous){let[resetOnLayoutChange]=this.__closure;if(mode===previous){return;}resetOnLayoutChange();})" };
let closure_31 = { code: "(function VoicePanelVideoRendererTsx17(){let[videoDimensions]=this.__closure;return videoDimensions.get();})" };
let closure_32 = { code: "(function VoicePanelVideoRendererTsx18(layout,previous){let[currentSizeThreshold,resetOnLayoutChange]=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous===null||previous===void 0?void 0:previous.width)&&layout.height===(previous===null||previous===void 0?void 0:previous.height)){return;}resetOnLayoutChange();})" };
let closure_33 = { code: "(function VoicePanelVideoRendererTsx19(){let[coverScale]=this.__closure;return coverScale.get();})" };
let closure_34 = { code: "(function VoicePanelVideoRendererTsx20(current,previous){let[currentSizeThreshold,resetToDefaultSize]=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous){return;}resetToDefaultSize(_currentSizeThreshold);})" };
let closure_35 = { code: "(function VoicePanelVideoRendererTsx21(){let[isInSnap]=this.__closure;return isInSnap.get();})" };
let closure_36 = { code: "(function VoicePanelVideoRendererTsx22(current,previous){let[scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(current===previous){return;}if(!current){return;}scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_LIGHT);})" };
let closure_37 = { code: "(function VoicePanelVideoRendererTsx23(e,manager){return manager.fail();})" };
let closure_38 = { code: "(function VoicePanelVideoRendererTsx24(){let[isInDefaultZoom,resetOnLayoutChange,focused,id,scheduleOnRN,setFocused]=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){scheduleOnRN(setFocused,id);}else{scheduleOnRN(setFocused,null);}})" };
let closure_39 = { code: "(function VoicePanelVideoRendererTsx25(e,manager){return manager.fail();})" };
let closure_40 = { code: "(function VoicePanelVideoRendererTsx26(){let[controlsSpecs,VoicePanelControlsModes,scheduleOnRN,showControls,hideControls]=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){scheduleOnRN(showControls,{debounce:true});}else{scheduleOnRN(hideControls,{debounce:true});}})" };
let closure_41 = { code: "(function VoicePanelVideoRendererTsx27(event,manager){let[focused,id]=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();}})" };
let closure_42 = { code: "(function VoicePanelVideoRendererTsx28(){let[numGesturesActive,isInPanToZoom,currentSizeThreshold]=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);})" };
let closure_43 = { code: "(function VoicePanelVideoRendererTsx29(event){let[scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap]=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event.scaleChange,fitScale.get()));const startingFocalFromCenterX=event.focalX-containerLayout.get().width/2;const startingFocalFromCenterY=event.focalY-containerLayout.get().height/2;const zoomCenteringX=-1*startingFocalFromCenterX*(event.scaleChange-1)/scale.get();const zoomCenteringY=-1*startingFocalFromCenterY*(event.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());})" };
let closure_44 = { code: "(function VoicePanelVideoRendererTsx30(){let[numGesturesActive,handleMovementEnd]=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();})" };
let closure_45 = { code: "(function VoicePanelVideoRendererTsx31(event,manager){let[focused,id]=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();return;}})" };
let closure_46 = { code: "(function VoicePanelVideoRendererTsx32(){let[lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom]=this.__closure;const hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());})" };
let closure_47 = { code: "(function VoicePanelVideoRendererTsx33(){let[isInPanToZoom,scheduleOnRN,hideControls,numGesturesActive,currentSizeThreshold]=this.__closure;if(isInPanToZoom.get()){scheduleOnRN(hideControls);}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);})" };
let closure_48 = { code: "(function VoicePanelVideoRendererTsx34(event){let[isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap]=this.__closure;if(isInPanToZoom.get()){const scaleChange=1+event.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event.changeX/scale.get());translateY.set(translateY.get()+event.changeY/scale.get());}isInSnap.set(isInCoverSnap());})" };
let closure_49 = { code: "(function VoicePanelVideoRendererTsx35(event){let[numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd]=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();})" };
let closure_50 = { code: "(function VoicePanelVideoRendererTsx36(){let[isInPanToZoom]=this.__closure;isInPanToZoom.set(false);})" };
let items2 = [{ code: "(function shouldMakeActive_VoicePanelVideoRendererTsx37({mode:mode,focusedId:focusedId,selfId:selfId,isScrollVisible:isScrollVisible}){let[VoicePanelModes]=this.__closure;const isPIP=mode===VoicePanelModes.PIP;if(!isScrollVisible||isPIP||focusedId!=null&&focusedId!==selfId){return false;}return true;})" }, VoicePanelModes];
let c0;
[tmp7, tmp8] = items2;
function shouldMakeActive(selfId) {
  let focusedId;
  let isScrollVisible;
  ({ focusedId, isScrollVisible } = selfId);
  let tmp = !isScrollVisible;
  selfId = selfId.selfId;
  if (isScrollVisible) {
    tmp = selfId.mode === _undefined.PIP;
  }
  if (!tmp) {
    tmp = null != focusedId && focusedId !== selfId;
  }
  return !tmp;
}
let items3 = [tmp8];
shouldMakeActive.__closure = items3;
shouldMakeActive.__workletHash = 2956853120276;
shouldMakeActive.__initData = tmp7;
let closure_52 = { code: "(function VoicePanelVideoRendererTsx38(){let[mode,focused,isScrollVisible,streamId]=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];})" };
let closure_53 = { code: "(function VoicePanelVideoRendererTsx39(props,previous){let[cheapWorkletArrayShallowEqual,scheduleOnRN,setHasActiveVideoOutputSink,shouldMakeActive,id]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode,focusedId,isScrollVisible,streamId]=props;if(streamId==null)return;scheduleOnRN(setHasActiveVideoOutputSink,streamId,shouldMakeActive({mode:mode,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible}));})" };
let closure_54 = { code: "(function VoicePanelVideoRendererTsx40(){let[focused,id,windowDimensions,sharedCoords]=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};})" };
let closure_55 = { code: "(function VoicePanelVideoRendererTsx41(){let[scale,videoDimensions,mode]=this.__closure;return[scale.get(),videoDimensions.get(),mode.get()];})" };
let closure_56 = { code: "(function VoicePanelVideoRendererTsx42(props,previous){let[streamId,cheapWorkletShallowEqual,scheduleOnRN,respondToVideoSizeUpdate]=this.__closure;if(streamId==null)return;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;scheduleOnRN(respondToVideoSizeUpdate);})" };
let closure_57 = { code: "(function VoicePanelVideoRendererTsx43(){let[videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror]=this.__closure;let{width:width,height:height}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){const pipScale=pipState.scale.get();if(width>height){width=width*(pipState.height*pipScale/height)/scale.get();height=pipState.height*pipScale/scale.get();}else{height=height*(pipState.width*pipScale/width)/scale.get();width=pipState.width*pipScale/scale.get();}}return{width:width,height:height,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};})" };
let closure_58 = { code: "(function VoicePanelVideoRendererTsx44(){let[mode,VoicePanelModes,focused,id]=this.__closure;var _focused$get;return{inPip:mode.get()===VoicePanelModes.PIP,isFocused:((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id};})" };
let closure_59 = { code: "(function VoicePanelVideoRendererTsx45(curr,prev){let[cheapWorkletShallowEqual,strokeOpacity,withDelay,withTiming]=this.__closure;if(cheapWorkletShallowEqual(curr,prev!==null&&prev!==void 0?prev:undefined))return;if(curr.inPip||curr.isFocused){strokeOpacity.set(0);return;}const shouldDelay=(prev===null||prev===void 0?void 0:prev.isFocused)===true;strokeOpacity.set(shouldDelay?withDelay(300,withTiming(0.3,{duration:0},'animate-never')):0.3);})" };
let closure_60 = { code: "(function VoicePanelVideoRendererTsx46(){let[isInSnap,SNAP_EDGE_INNER_THRESHOLD,borderRadius,strokeOpacity]=this.__closure;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:borderRadius+2,overflow:'hidden',borderColor:'white',opacity:strokeOpacity.get()};})" };
let closure_61 = { code: "(function VoicePanelVideoRendererTsx47(values){let[layout,disableAnimations]=this.__closure;return layout(values,disableAnimations.get());})" };
const memoResult = react.memo(function VideoRenderer(id) {
  let View;
  let _undefined;
  let _undefined2;
  let c5;
  let c9;
  let dismissToPIPGestureRef;
  let focused;
  let isCamera;
  let isScrollVisible;
  let items72;
  let items73;
  let items74;
  let layoutManager;
  let obj7;
  let obj9;
  let ref;
  let sharedCoords;
  let streamKey;
  let streamOutputSinkStack;
  let tmp100;
  let tmp101;
  let tmp102;
  let tmp103;
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
  let tmp118;
  let tmp119;
  let tmp120;
  let tmp121;
  let tmp122;
  let tmp123;
  let tmp124;
  let tmp126;
  let tmp127;
  let tmp128;
  let tmp129;
  let tmp130;
  let tmp132;
  let tmp133;
  let tmp134;
  let tmp135;
  let tmp137;
  let tmp138;
  let tmp139;
  let tmp14;
  let tmp140;
  let tmp141;
  let tmp143;
  let tmp144;
  let tmp145;
  let tmp146;
  let tmp147;
  let tmp150;
  let tmp151;
  let tmp152;
  let tmp153;
  let tmp154;
  let tmp155;
  let tmp161;
  let tmp162;
  let tmp163;
  let tmp164;
  let tmp165;
  let tmp166;
  let tmp167;
  let tmp168;
  let tmp169;
  let tmp172;
  let tmp173;
  let tmp174;
  let tmp175;
  let tmp176;
  let tmp177;
  let tmp178;
  let tmp179;
  let tmp180;
  let tmp189;
  let tmp19;
  let tmp190;
  let tmp191;
  let tmp192;
  let tmp193;
  let tmp194;
  let tmp195;
  let tmp196;
  let tmp197;
  let tmp198;
  let tmp20;
  let tmp200;
  let tmp201;
  let tmp202;
  let tmp203;
  let tmp204;
  let tmp206;
  let tmp207;
  let tmp208;
  let tmp21;
  let tmp210Result;
  let tmp211;
  let tmp212;
  let tmp213;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp60;
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
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp80;
  let tmp81;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp92;
  let tmp93;
  let tmp94;
  let tmp95;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  let userId;
  let videoSpinnerContext;
  let windowDimensions;
  let windowDimensions2;
  id = id.id;
  const streamId = id.streamId;
  ({ userId, videoSpinnerContext, isCamera } = id);
  let flag = id.mirror;
  ({ sharedCoords, isScrollVisible, streamKey } = id);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = id.focusOnReady;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = id.paused;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const layout = id.layout;
  let mode;
  PixelRatio = undefined;
  layoutManager = undefined;
  c9 = undefined;
  let sharedValue2;
  let c13;
  let callback5;
  const style = id.style;
  let tmp = closure_15();
  let tmp2 = id;
  let tmp3 = isCamera;
  let obj = id(isCamera[17]);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VoicePanelVideoRenderer" });
  let obj2 = mode;
  let tmp5 = streamId;
  const context = mode.useContext(streamId(isCamera[11]));
  mode = context.mode;
  ({ focused, setFocused: c5, layoutManager } = context);
  ({ windowDimensions, streamOutputSinkStack } = context);
  const obj3 = id(isCamera[8]);
  const sharedValue = obj3.useSharedValue(true);
  let tmp8 = id(isCamera[8]);
  const useSharedValue = tmp8.useSharedValue;
  const obj4 = {};
  const merged = Object.assign(layoutManager.getTargetDimensions(id));
  const sharedValue1 = useSharedValue(obj4);
  const obj5 = id(isCamera[18]);
  const pIPState = obj5.usePIPState();
  const tmp12 = isCamera && pIPState.id === id && surfaceDirectRendererExperiment;
  let tmp13 = flag2(obj2.useState(true), 2);
  [tmp14, c9] = tmp13;
  SCALE_PHYSICS = obj2.useRef(() => {
    const tmp = flag2;
    if (tmp) {
      _undefined(id);
    }
  });
  const onReady = tmp5(tmp3[19])({ streamId, userId, loading: tmp14, videoSpinnerContext, paused: flag3, streamKey }).onReady;
  let tmp15 = tmp5(tmp3[20])({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, loading: tmp14 });
  let items = [onReady];
  const callback = obj2.useCallback(() => {
    _undefined2(false);
    ref.current();
    onReady();
  }, items);
  const tmp2Result = tmp2(tmp3[21]);
  const setHasActiveVideoOutputSink = tmp2Result.useSetHasActiveVideoOutputSink(streamOutputSinkStack);
  let items1 = [closure_52, mode, focused, isScrollVisible, streamId];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp19, tmp20, tmp21, tmp22, tmp23] = items1;
  const tmp2Result27 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx38 {
    constructor() {
      const items = [_undefined.get(), , , ];
      const value = _undefined2.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      items[1] = id;
      items[2] = _undefined3.get();
      items[3] = c3;
      return items;
    }
  }
  let items2 = [tmp20, tmp21, tmp22, tmp23];
  VoicePanelVideoRendererTsx38.__closure = items2;
  VoicePanelVideoRendererTsx38.__workletHash = 9364170441646;
  VoicePanelVideoRendererTsx38.__initData = tmp19;
  let items3 = [closure_53, , , , , ];
  const useAnimatedReaction = tmp2Result27.useAnimatedReaction;
  items3[1] = tmp2(tmp3[13]).cheapWorkletArrayShallowEqual;
  items3[2] = tmp2(tmp3[14]).scheduleOnRN;
  items3[3] = setHasActiveVideoOutputSink;
  items3[4] = shouldMakeActive;
  items3[5] = id;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items3;
  class VoicePanelVideoRendererTsx39 {
    constructor(arg0, arg1) {
      const tmp = arg1;
      const tmp2 = c0;
      if (!tmp2(arg0, tmp)) {
        const tmp8 = flag2(arg0, 4)[3];
        if (null != tmp8) {
          const obj = { mode: tmp5, focusedId: tmp6, selfId, isScrollVisible: tmp7 };
          _undefined(c2, tmp8, _undefined2(obj));
        }
      }
    }
  }
  let items4 = [tmp25, tmp26, tmp27, tmp28, tmp29];
  VoicePanelVideoRendererTsx39.__closure = items4;
  VoicePanelVideoRendererTsx39.__workletHash = 7217467762408;
  VoicePanelVideoRendererTsx39.__initData = tmp24;
  const animatedReaction = useAnimatedReaction(VoicePanelVideoRendererTsx38, VoicePanelVideoRendererTsx39);
  let items5 = [sharedValue1, layoutManager, id, sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent);
    updateSharedValueIfChangedDefault(sharedValue1, { width, height });
    layoutManager.setTargetDimensions(id, width, height);
    if (sharedValue.get()) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = sharedValue.set(false);
      }, 34);
    }
  }, items5);
  let items6 = [closure_54, focused, id, windowDimensions, sharedCoords];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp32, tmp33, tmp34, tmp35, tmp36] = items6;
  const tmp2Result28 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx40 {
    constructor() {
      let size1;
      const value = _undefined.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === c1) {
        size = { width: _undefined2.get().width, height: _undefined2.get().height };
        size1 = size;
      } else {
        size1 = { width: _undefined3.get().width, height: _undefined3.get().height };
      }
      return size1;
    }
  }
  let items7 = [tmp33, tmp34, tmp35, tmp36];
  VoicePanelVideoRendererTsx40.__closure = items7;
  VoicePanelVideoRendererTsx40.__workletHash = 3842770949838;
  VoicePanelVideoRendererTsx40.__initData = tmp32;
  const derivedValue = tmp2Result28.useDerivedValue(VoicePanelVideoRendererTsx40);
  dependencyMap = tmp14;
  dismissToPIPGestureRef = undefined;
  let derivedValue2;
  let derivedValue3;
  let callback3;
  let callback4;
  let callback21;
  const context1 = obj2.useContext(tmp5(tmp3[11]));
  ({ windowDimensions: windowDimensions2, dismissToPIPGestureRef } = context1);
  const setFocused = context1.setFocused;
  const hideControls = context1.hideControls;
  const controlsSpecs = context1.controlsSpecs;
  const showControls = context1.showControls;
  const setIsFocusedVideoZoomed = context1.setIsFocusedVideoZoomed;
  const tmp2Result29 = tmp2(tmp3[8]);
  sharedValue2 = tmp2Result29.useSharedValue(1);
  const tmp2Result30 = tmp2(tmp3[8]);
  const sharedValue3 = tmp2Result30.useSharedValue(0);
  const tmp2Result31 = tmp2(tmp3[8]);
  const sharedValue4 = tmp2Result31.useSharedValue(0);
  const tmp2Result32 = tmp2(tmp3[8]);
  const sharedValue5 = tmp2Result32.useSharedValue(0);
  const tmp2Result33 = tmp2(tmp3[8]);
  const sharedValue6 = tmp2Result33.useSharedValue(false);
  const tmp2Result34 = tmp2(tmp3[8]);
  const sharedValue7 = tmp2Result34.useSharedValue(0);
  const tmp2Result35 = tmp2(tmp3[8]);
  const sharedValue8 = tmp2Result35.useSharedValue(false);
  const tmp2Result36 = tmp2(tmp3[8]);
  const sharedValue9 = tmp2Result36.useSharedValue(null);
  let items8 = [closure_16, derivedValue, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  [tmp47, tmp48, tmp49] = items8;
  const tmp2Result37 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx2 {
    constructor() {
      const result = _undefined.get().width / _undefined2.get().width;
      return max(result, _undefined.get().height / _undefined2.get().height);
    }
  }
  let items9 = [tmp48, tmp49];
  VoicePanelVideoRendererTsx2.__closure = items9;
  VoicePanelVideoRendererTsx2.__workletHash = 17251500139091;
  VoicePanelVideoRendererTsx2.__initData = tmp47;
  const derivedValue1 = tmp2Result37.useDerivedValue(VoicePanelVideoRendererTsx2);
  let items10 = [closure_17, derivedValue, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  [tmp51, tmp52, tmp53] = items10;
  const tmp2Result38 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx3 {
    constructor() {
      const result = _undefined.get().width / _undefined2.get().width;
      return min(result, _undefined.get().height / _undefined2.get().height);
    }
  }
  let items11 = [tmp52, tmp53];
  VoicePanelVideoRendererTsx3.__closure = items11;
  VoicePanelVideoRendererTsx3.__workletHash = 10881595323084;
  VoicePanelVideoRendererTsx3.__initData = tmp51;
  derivedValue2 = tmp2Result38.useDerivedValue(VoicePanelVideoRendererTsx3);
  let items12 = [closure_18, sharedValue3, sharedValue4, sharedValue2, derivedValue2, derivedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp55, tmp56, tmp57, tmp58, tmp59, tmp60] = items12;
  const tmp2Result39 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx4 {
    constructor() {
      let tmp = 0 === _undefined.get() && 0 === _undefined2.get();
      if (tmp) {
        const value = _undefined3.get();
        let tmp5 = value === _undefined4.get();
        const obj = _undefined3;
        if (!tmp5) {
          const value2 = obj.get();
          tmp5 = value2 === _undefined5.get();
        }
        tmp = tmp5;
      }
      return tmp;
    }
  }
  let items13 = [tmp56, tmp57, tmp58, tmp59, tmp60];
  VoicePanelVideoRendererTsx4.__closure = items13;
  VoicePanelVideoRendererTsx4.__workletHash = 12363080110527;
  VoicePanelVideoRendererTsx4.__initData = tmp55;
  derivedValue3 = tmp2Result39.useDerivedValue(VoicePanelVideoRendererTsx4);
  let items14 = [closure_19, sharedValue2, , , , , , , , , ];
  const useCallback = obj2.useCallback;
  items14[2] = tmp2(tmp3[12]).withSpring;
  items14[3] = derivedValue2;
  items14[4] = sharedValue;
  items14[5] = sharedValue;
  items14[6] = derivedValue1;
  items14[7] = sharedValue3;
  items14[8] = SCALE_PHYSICS;
  items14[9] = sharedValue4;
  items14[10] = sharedValue9;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  PixelRatio = undefined;
  let c6;
  let c7;
  let c8;
  c9 = undefined;
  [tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73] = items14;
  class VoicePanelVideoRendererTsx5 {
    constructor(arg0) {
      let tmp8;
      if ("fit" === arg0) {
        set2 = _undefined.set;
        const value = _undefined2.get();
        let str2 = "respect-motion-settings";
        const tmp13 = c3;
        if (_undefined3.get()) {
          str2 = "animate-never";
        }
        set2(_undefined(value, tmp13, str2));
        tmp8 = tmp10;
      } else {
        set = _undefined.set;
        const value2 = _undefined4.get();
        let str = "respect-motion-settings";
        const tmp5 = c3;
        if (_undefined3.get()) {
          str = "animate-never";
        }
        const result = set(tmp2(value2, tmp5, str));
        tmp8 = tmp2;
      }
      const result1 = _undefined5.set(tmp8(0, c7));
      const result2 = _undefined6.set(tmp8(0, c7));
      const result3 = _undefined7.set(arg0);
    }
  }
  let items15 = [tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73];
  VoicePanelVideoRendererTsx5.__closure = items15;
  VoicePanelVideoRendererTsx5.__workletHash = 1036845491054;
  VoicePanelVideoRendererTsx5.__initData = tmp63;
  let items16 = [sharedValue2, sharedValue3, sharedValue4, derivedValue1, sharedValue9, derivedValue2, sharedValue];
  const tmp62 = SCALE_PHYSICS;
  const callback2 = useCallback(VoicePanelVideoRendererTsx5, items16);
  let items17 = [closure_20, focused, id, sharedValue1, windowDimensions2, isCamera, callback2];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  PixelRatio = undefined;
  [tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81] = items17;
  class VoicePanelVideoRendererTsx6 {
    constructor() {
      const value = _undefined.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      let str = "cover";
      if (id === c1) {
        str = "fit";
      }
      let tmp5 = c4;
      const tmp3 = _undefined2.get().width >= _undefined2.get().height;
      const tmp4 = _undefined3.get().width >= _undefined3.get().height;
      if (c4) {
        tmp5 = "fit" === str;
      }
      if (tmp5) {
        tmp5 = tmp3 === tmp4;
      }
      if (tmp5) {
        str = "cover";
      }
      _undefined4(str);
    }
  }
  let items18 = [tmp76, tmp77, tmp78, tmp79, tmp80, tmp81];
  VoicePanelVideoRendererTsx6.__closure = items18;
  VoicePanelVideoRendererTsx6.__workletHash = 4843026901160;
  VoicePanelVideoRendererTsx6.__initData = tmp75;
  let items19 = [focused, id, isCamera, sharedValue1, windowDimensions2, callback2];
  callback3 = obj2.useCallback(VoicePanelVideoRendererTsx6, items19);
  let items20 = [closure_21, derivedValue];
  c0 = undefined;
  [tmp84, tmp85] = items20;
  const tmp2Result40 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx7 {
    constructor() {
      return _undefined.get();
    }
  }
  let items21 = [tmp85];
  VoicePanelVideoRendererTsx7.__closure = items21;
  VoicePanelVideoRendererTsx7.__workletHash = 1319377267435;
  VoicePanelVideoRendererTsx7.__initData = tmp84;
  let items22 = [closure_22, , , , ];
  const useAnimatedReaction2 = tmp2Result40.useAnimatedReaction;
  items22[1] = tmp2(tmp3[13]).cheapWorkletShallowEqual;
  items22[2] = focused;
  items22[3] = id;
  items22[4] = callback3;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp86, tmp87, tmp88, tmp89, tmp90] = items22;
  class VoicePanelVideoRendererTsx8 {
    constructor(arg0, arg1) {
      const tmp = c0;
      const tmp2 = arg1;
      if (!tmp(arg0, tmp2)) {
        const value = _undefined.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        const tmp7 = id === c2 && arg0 !== arg1 && null != arg1;
        if (tmp7) {
          _undefined2();
        }
      }
    }
  }
  let items23 = [tmp87, tmp88, tmp89, tmp90];
  VoicePanelVideoRendererTsx8.__closure = items23;
  VoicePanelVideoRendererTsx8.__workletHash = 16070340979086;
  VoicePanelVideoRendererTsx8.__initData = tmp86;
  const animatedReaction2 = useAnimatedReaction2(VoicePanelVideoRendererTsx7, VoicePanelVideoRendererTsx8);
  let items24 = [closure_23, derivedValue1, derivedValue2, 0.05, sharedValue3, sharedValue2, sharedValue4, 50, derivedValue, sharedValue1, 50, 25];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  PixelRatio = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let c10;
  [tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103] = items24;
  class VoicePanelVideoRendererTsx9 {
    constructor() {
      const value = _undefined.get();
      if (value < _undefined2.get() + c2) {
        return false;
      } else {
        const value3 = _undefined3.get();
        const result = value3 * _undefined4.get();
        const value4 = _undefined5.get();
        const result1 = value4 * _undefined4.get();
        if (result >= -c6) {
          if (result <= c6) {
            if (result1 >= -c6) {
              if (result1 <= c6) {
                const width = _undefined6.get().width;
                const sum = result + (width - _undefined7.get().width * obj.get()) / 2;
                const height = _undefined6.get().height;
                const sum1 = result1 + (height - _undefined7.get().height * obj.get()) / 2;
                const result2 = _undefined7.get().width * obj.get();
                const result3 = _undefined7.get().height * obj.get();
                let tmp3 = result3 >= _undefined6.get().height && sum >= -c9 && sum <= c10;
                if (tmp3) {
                  const sum2 = sum + result2;
                  tmp3 = sum2 >= obj2.get().width - c10;
                }
                if (tmp3) {
                  const sum3 = sum + result2;
                  tmp3 = sum3 <= obj2.get().width + c9;
                }
                if (!tmp3) {
                  let tmp9 = result2 >= obj2.get().width && sum1 >= -c9 && sum1 <= c10;
                  if (tmp9) {
                    const sum4 = sum1 + result3;
                    tmp9 = sum4 >= obj2.get().height - c10;
                  }
                  if (tmp9) {
                    const sum5 = sum1 + result3;
                    tmp9 = sum5 <= obj2.get().height + c9;
                  }
                  tmp3 = tmp9;
                }
                return tmp3;
              }
            }
          }
        }
        return false;
      }
    }
  }
  let items25 = [tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103];
  VoicePanelVideoRendererTsx9.__closure = items25;
  VoicePanelVideoRendererTsx9.__workletHash = 3015224188791;
  VoicePanelVideoRendererTsx9.__initData = tmp92;
  const items26 = [derivedValue1, sharedValue2, sharedValue3, sharedValue4, derivedValue, sharedValue1, derivedValue2];
  callback4 = obj2.useCallback(VoicePanelVideoRendererTsx9, items26);
  const items27 = [closure_24, sharedValue5, sharedValue6, callback2, sharedValue2, derivedValue2, sharedValue1, derivedValue, sharedValue3, , , ];
  const useCallback2 = obj2.useCallback;
  items27[9] = tmp2(tmp3[12]).withSpring;
  items27[10] = tmp62;
  items27[11] = sharedValue4;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  PixelRatio = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116] = items27;
  class VoicePanelVideoRendererTsx10 {
    constructor() {
      if (_undefined.get() <= 0) {
        const obj2 = _undefined2;
        if (_undefined2.get()) {
          const result = obj2.set(false);
          _undefined3("cover");
        } else {
          const value = _undefined4.get();
          if (value < _undefined5.get()) {
            _undefined3("fit");
          } else {
            const _Math = Math;
            const height = _undefined6.get().height;
            const maxResult = max(0, (height - _undefined7.get().height / _undefined4.get()) / 2);
            const _Math2 = Math;
            const max2 = Math.max;
            const width = _undefined6.get().width;
            const max2Result = max2(0, (width - _undefined7.get().width / _undefined4.get()) / 2);
            const _Math3 = Math;
            const _Math4 = Math;
            const tmp15 = -max2Result;
            const result1 = _undefined8.set(_undefined9(Math.min(max2Result, Math.max(tmp15, _undefined8.get())), c9));
            const _Math5 = Math;
            const _Math6 = Math;
            const tmp19 = -maxResult;
            const result2 = _undefined10.set(_undefined9(Math.min(maxResult, Math.max(tmp19, _undefined10.get())), c9));
          }
        }
      }
    }
  }
  const items28 = [tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116];
  VoicePanelVideoRendererTsx10.__closure = items28;
  VoicePanelVideoRendererTsx10.__workletHash = 11684763008226;
  VoicePanelVideoRendererTsx10.__initData = tmp105;
  const items29 = [derivedValue2, sharedValue5, sharedValue6, sharedValue2, sharedValue1, derivedValue, sharedValue3, sharedValue4, callback2];
  callback21 = useCallback2(VoicePanelVideoRendererTsx10, items29);
  const items30 = [closure_25, focused, id, derivedValue3, sharedValue8];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp118, tmp119, tmp120, tmp121, tmp122] = items30;
  const tmp2Result41 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx11 {
    constructor() {
      const value = _undefined.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      let tmp3 = id === c1;
      if (tmp3) {
        const value3 = _undefined2.get();
        let value4 = !value3;
        if (value3) {
          value4 = _undefined3.get();
        }
        tmp3 = value4;
      }
      return tmp3;
    }
  }
  const items31 = [tmp119, tmp120, tmp121, tmp122];
  VoicePanelVideoRendererTsx11.__closure = items31;
  VoicePanelVideoRendererTsx11.__workletHash = 4360121383731;
  VoicePanelVideoRendererTsx11.__initData = tmp118;
  const items32 = [closure_26, setIsFocusedVideoZoomed];
  c0 = undefined;
  [tmp123, tmp124] = items32;
  class VoicePanelVideoRendererTsx12 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(arg0);
      }
    }
  }
  const items33 = [tmp124];
  VoicePanelVideoRendererTsx12.__closure = items33;
  VoicePanelVideoRendererTsx12.__workletHash = 8695485084164;
  VoicePanelVideoRendererTsx12.__initData = tmp123;
  const animatedReaction1 = tmp2Result41.useAnimatedReaction(VoicePanelVideoRendererTsx11, VoicePanelVideoRendererTsx12);
  const items34 = [closure_27, focused, id];
  c0 = undefined;
  c1 = undefined;
  [tmp126, tmp127, tmp128] = items34;
  const tmp2Result42 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx13 {
    constructor() {
      const value = _undefined.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === c1;
    }
  }
  const items35 = [tmp127, tmp128];
  VoicePanelVideoRendererTsx13.__closure = items35;
  VoicePanelVideoRendererTsx13.__workletHash = 15206589462065;
  VoicePanelVideoRendererTsx13.__initData = tmp126;
  const items36 = [closure_28, callback3];
  c0 = undefined;
  [tmp129, tmp130] = items36;
  class VoicePanelVideoRendererTsx14 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined();
      }
    }
  }
  const items37 = [tmp130];
  VoicePanelVideoRendererTsx14.__closure = items37;
  VoicePanelVideoRendererTsx14.__workletHash = 16431665409987;
  VoicePanelVideoRendererTsx14.__initData = tmp129;
  const animatedReaction3 = tmp2Result42.useAnimatedReaction(VoicePanelVideoRendererTsx13, VoicePanelVideoRendererTsx14);
  const items38 = [closure_29, mode];
  c0 = undefined;
  [tmp132, tmp133] = items38;
  const tmp2Result43 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx15 {
    constructor() {
      return _undefined.get();
    }
  }
  const items39 = [tmp133];
  VoicePanelVideoRendererTsx15.__closure = items39;
  VoicePanelVideoRendererTsx15.__workletHash = 14534028634616;
  VoicePanelVideoRendererTsx15.__initData = tmp132;
  const items40 = [closure_30, callback3];
  c0 = undefined;
  [tmp134, tmp135] = items40;
  class VoicePanelVideoRendererTsx16 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined();
      }
    }
  }
  const items41 = [tmp135];
  VoicePanelVideoRendererTsx16.__closure = items41;
  VoicePanelVideoRendererTsx16.__workletHash = 1931345572065;
  VoicePanelVideoRendererTsx16.__initData = tmp134;
  const animatedReaction4 = tmp2Result43.useAnimatedReaction(VoicePanelVideoRendererTsx15, VoicePanelVideoRendererTsx16);
  const items42 = [closure_31, sharedValue1];
  c0 = undefined;
  [tmp137, tmp138] = items42;
  const tmp2Result44 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx17 {
    constructor() {
      return _undefined.get();
    }
  }
  const items43 = [tmp138];
  VoicePanelVideoRendererTsx17.__closure = items43;
  VoicePanelVideoRendererTsx17.__workletHash = 1085954870394;
  VoicePanelVideoRendererTsx17.__initData = tmp137;
  const items44 = [closure_32, sharedValue9, callback3];
  c0 = undefined;
  c1 = undefined;
  [tmp139, tmp140, tmp141] = items44;
  class VoicePanelVideoRendererTsx18 {
    constructor(width, width2) {
      if (null != c0) {
        let width1;
        width = width.width;
        if (width2 != null) {
          width1 = width2.width;
        }
        let tmp4 = width === width1;
        if (tmp4) {
          let height1;
          const height = width.height;
          if (width2 != null) {
            height1 = width2.height;
          }
          tmp4 = height === height1;
        }
        if (!tmp4) {
          _undefined();
        }
      }
    }
  }
  const items45 = [tmp140, tmp141];
  VoicePanelVideoRendererTsx18.__closure = items45;
  VoicePanelVideoRendererTsx18.__workletHash = 15050542710807;
  VoicePanelVideoRendererTsx18.__initData = tmp139;
  const animatedReaction5 = tmp2Result44.useAnimatedReaction(VoicePanelVideoRendererTsx17, VoicePanelVideoRendererTsx18);
  const items46 = [closure_33, derivedValue1];
  c0 = undefined;
  [tmp143, tmp144] = items46;
  const tmp2Result45 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx19 {
    constructor() {
      return _undefined.get();
    }
  }
  const items47 = [tmp144];
  VoicePanelVideoRendererTsx19.__closure = items47;
  VoicePanelVideoRendererTsx19.__workletHash = 8351263458932;
  VoicePanelVideoRendererTsx19.__initData = tmp143;
  const items48 = [closure_34, sharedValue9, callback2];
  c0 = undefined;
  c1 = undefined;
  [tmp145, tmp146, tmp147] = items48;
  class VoicePanelVideoRendererTsx20 {
    constructor(arg0, arg1) {
      const value = _undefined.get();
      const tmp2 = "cover" === value && arg0 !== arg1;
      if (tmp2) {
        _undefined2(value);
      }
    }
  }
  const items49 = [tmp146, tmp147];
  VoicePanelVideoRendererTsx20.__closure = items49;
  VoicePanelVideoRendererTsx20.__workletHash = 16141218680131;
  VoicePanelVideoRendererTsx20.__initData = tmp145;
  const animatedReaction6 = tmp2Result45.useAnimatedReaction(VoicePanelVideoRendererTsx19, VoicePanelVideoRendererTsx20);
  const items50 = [closure_35, sharedValue6];
  c0 = undefined;
  [tmp150, tmp151] = items50;
  const tmp2Result46 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx21 {
    constructor() {
      return _undefined.get();
    }
  }
  const items51 = [tmp151];
  VoicePanelVideoRendererTsx21.__closure = items51;
  VoicePanelVideoRendererTsx21.__workletHash = 11608469134527;
  VoicePanelVideoRendererTsx21.__initData = tmp150;
  const items52 = [closure_36, , , ];
  const useAnimatedReaction3 = tmp2Result46.useAnimatedReaction;
  items52[1] = tmp2(tmp3[14]).scheduleOnRN;
  items52[2] = tmp2(tmp3[15]).triggerHapticFeedback;
  items52[3] = tmp2(tmp3[15]).HapticFeedbackTypes;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp152, tmp153, tmp154, tmp155] = items52;
  class VoicePanelVideoRendererTsx22 {
    constructor(arg0, arg1) {
      const tmp = arg0 !== arg1 && arg0;
      if (tmp) {
        _undefined(c1, _undefined2.IMPACT_LIGHT);
      }
    }
  }
  const items53 = [tmp153, tmp154, tmp155];
  VoicePanelVideoRendererTsx22.__closure = items53;
  VoicePanelVideoRendererTsx22.__workletHash = 639996379350;
  VoicePanelVideoRendererTsx22.__initData = tmp152;
  const animatedReaction31 = useAnimatedReaction3(VoicePanelVideoRendererTsx21, VoicePanelVideoRendererTsx22);
  const items54 = [tmp14, dismissToPIPGestureRef, focused, id, sharedValue2, sharedValue3, sharedValue4, callback3, sharedValue5, sharedValue9, derivedValue, sharedValue6, callback4, callback21, sharedValue7, sharedValue8, derivedValue3, setFocused, hideControls, controlsSpecs, showControls, derivedValue2];
  const memo = obj2.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp15;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp3;
    let tmp32;
    let tmp33;
    let tmp34;
    let tmp35;
    let tmp43;
    let tmp44;
    let tmp45;
    let tmp46;
    let tmp47;
    let tmp48;
    let tmp49;
    let tmp50;
    let tmp51;
    let tmp53;
    let tmp54;
    let tmp55;
    let tmp57;
    let tmp58;
    let tmp59;
    let tmp60;
    let tmp61;
    let tmp62;
    let tmp63;
    let tmp65;
    let tmp66;
    let tmp67;
    let tmp68;
    let tmp69;
    let tmp7;
    let tmp70;
    let tmp71;
    let tmp72;
    let tmp73;
    let tmp74;
    let tmp75;
    let tmp76;
    let tmp77;
    let tmp78;
    let tmp79;
    let tmp8;
    let tmp80;
    let tmp82;
    let tmp83;
    let tmp84;
    let tmp85;
    let tmp86;
    let tmp87;
    let tmp88;
    let tmp89;
    let tmp9;
    let tmp90;
    let tmp91;
    let tmp92;
    const Gesture = id(isCamera[16]).Gesture;
    const Simultaneous = Gesture.Simultaneous;
    const Gesture2 = id(isCamera[16]).Gesture;
    const Exclusive = Gesture2.Exclusive;
    const Gesture3 = id(isCamera[16]).Gesture;
    const items = [closure_2_37];
    [tmp3] = items;
    const TapResult = Gesture3.Tap();
    const numberOfTapsResult = TapResult.numberOfTaps(2);
    class VoicePanelVideoRendererTsx23 {
      constructor(arg0, arg1) {
        return arg1.fail();
      }
    }
    VoicePanelVideoRendererTsx23.__workletHash = 9045365241060;
    VoicePanelVideoRendererTsx23.__initData = tmp3;
    const items1 = [closure_2_38, derivedValue3, callback3, , , , ];
    items1[3] = focused;
    items1[4] = id;
    const onStart = numberOfTapsResult.onTouchesMove(VoicePanelVideoRendererTsx23).onStart;
    numberOfTapsResult.onTouchesMove(VoicePanelVideoRendererTsx23);
    items1[5] = id(isCamera[14]).scheduleOnRN;
    items1[6] = setFocused;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
    class VoicePanelVideoRendererTsx24 {
      constructor() {
        if (closure_0.get()) {
          tmp3 = closure_2;
          value = closure_2.get();
          tmp5 = null;
          id = undefined;
          if (value != null) {
            id = value.id;
          }
          if (id !== closure_3) {
            tmp11 = closure_4;
            tmp12 = closure_5;
            tmp13 = closure_4(closure_5, tmp7);
          } else {
            tmp8 = closure_4;
            tmp9 = closure_5;
            tmp10 = closure_4(closure_5, null);
          }
        } else {
          tmp = closure_1;
          tmp2 = closure_1();
        }
        return;
      }
    }
    const items2 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
    VoicePanelVideoRendererTsx24.__closure = items2;
    VoicePanelVideoRendererTsx24.__workletHash = 16798933585555;
    VoicePanelVideoRendererTsx24.__initData = tmp7;
    const onStartResult = onStart(VoicePanelVideoRendererTsx24);
    const Gesture4 = tmp(tmp2[16]).Gesture;
    const items3 = [closure_2_39];
    [tmp15] = items3;
    const TapResult1 = Gesture4.Tap();
    class VoicePanelVideoRendererTsx25 {
      constructor(arg0, arg1) {
        return arg1.fail();
      }
    }
    VoicePanelVideoRendererTsx25.__workletHash = 14567264793250;
    VoicePanelVideoRendererTsx25.__initData = tmp15;
    const items4 = [closure_2_40, controlsSpecs, sharedValue1, , , ];
    const onStart2 = TapResult1.onTouchesMove(VoicePanelVideoRendererTsx25).onStart;
    TapResult1.onTouchesMove(VoicePanelVideoRendererTsx25);
    items4[3] = id(isCamera[14]).scheduleOnRN;
    items4[4] = showControls;
    items4[5] = hideControls;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items4;
    class VoicePanelVideoRendererTsx26 {
      constructor() {
        if (closure_0.get().mode === closure_1.HIDDEN) {
          tmp4 = closure_2;
          tmp5 = closure_3;
          tmp6 = closure_2(closure_3, { debounce: true });
        } else {
          tmp = closure_2;
          tmp2 = closure_4;
          tmp3 = closure_2(closure_4, { debounce: true });
        }
        return;
      }
    }
    const items5 = [tmp19, tmp20, tmp21, tmp22, tmp23];
    VoicePanelVideoRendererTsx26.__closure = items5;
    VoicePanelVideoRendererTsx26.__workletHash = 2888366736852;
    VoicePanelVideoRendererTsx26.__initData = tmp18;
    const ExclusiveResult = Exclusive(onStartResult, onStart2(VoicePanelVideoRendererTsx26));
    const Gesture5 = tmp(tmp2[16]).Gesture;
    const items6 = [closure_2_41, tmp5, tmp6];
    c0 = undefined;
    c1 = undefined;
    [tmp26, tmp27, tmp28] = items6;
    const PinchResult = Gesture5.Pinch();
    const enabledResult = PinchResult.enabled(!closure_2);
    const tmp17 = hideControls;
    const tmp25 = closure_2;
    class VoicePanelVideoRendererTsx27 {
      constructor(arg0, arg1) {
        value = closure_0.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        if (id !== closure_1) {
          tmp3 = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    const items7 = [tmp27, tmp28];
    VoicePanelVideoRendererTsx27.__closure = items7;
    VoicePanelVideoRendererTsx27.__workletHash = 3856811066661;
    VoicePanelVideoRendererTsx27.__initData = tmp26;
    const items8 = [closure_2_42, sharedValue5, sharedValue8, sharedValue9];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp32, tmp33, tmp34, tmp35] = items8;
    const onTouchesDownResult = enabledResult.onTouchesDown(VoicePanelVideoRendererTsx27);
    class VoicePanelVideoRendererTsx28 {
      constructor() {
        result = closure_0.set(closure_0.get() + 1);
        result1 = closure_1.set(false);
        result2 = closure_2.set(null);
        return;
      }
    }
    const items9 = [tmp33, tmp34, tmp35];
    VoicePanelVideoRendererTsx28.__closure = items9;
    VoicePanelVideoRendererTsx28.__workletHash = 11030536612419;
    VoicePanelVideoRendererTsx28.__initData = tmp32;
    const items10 = [closure_2_43, sharedValue2, callback5, derivedValue2, derivedValue, sharedValue3, sharedValue4, sharedValue6, callback4];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    let c6;
    let c7;
    [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items10;
    const onStartResult1 = onTouchesDownResult.onStart(VoicePanelVideoRendererTsx28);
    const tmp31 = sharedValue9;
    class VoicePanelVideoRendererTsx29 {
      constructor(arg0) {
        set = closure_0.set;
        value = closure_0.get();
        value1 = closure_0.get();
        result = set(value * closure_1(value1, arg0.scaleChange, closure_2.get()));
        diff = arg0.focalX - closure_3.get().width / 2;
        diff1 = arg0.focalY - closure_3.get().height / 2;
        diff2 = arg0.scaleChange - 1;
        result1 = -1 * diff * diff2 / closure_0.get();
        diff3 = arg0.scaleChange - 1;
        result2 = -1 * diff1 * diff3 / closure_0.get();
        result3 = closure_4.set(closure_4.get() + result1);
        result4 = closure_5.set(closure_5.get() + result2);
        result5 = closure_6.set(closure_7());
        return;
      }
    }
    const items11 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
    VoicePanelVideoRendererTsx29.__closure = items11;
    VoicePanelVideoRendererTsx29.__workletHash = 2134737536500;
    VoicePanelVideoRendererTsx29.__initData = tmp43;
    const items12 = [closure_2_44, sharedValue5, callback21];
    c0 = undefined;
    c1 = undefined;
    [tmp53, tmp54, tmp55] = items12;
    const onChangeResult = onStartResult1.onChange(VoicePanelVideoRendererTsx29);
    const tmp37 = callback5;
    const tmp38 = derivedValue2;
    const tmp41 = sharedValue6;
    const tmp42 = callback4;
    class VoicePanelVideoRendererTsx30 {
      constructor() {
        result = closure_0.set(closure_0.get() - 1);
        tmp2 = closure_1();
        return;
      }
    }
    const items13 = [tmp54, tmp55];
    VoicePanelVideoRendererTsx30.__closure = items13;
    VoicePanelVideoRendererTsx30.__workletHash = 8791722037916;
    VoicePanelVideoRendererTsx30.__initData = tmp53;
    const onEndResult = onChangeResult.onEnd(VoicePanelVideoRendererTsx30);
    const Gesture6 = tmp(tmp2[16]).Gesture;
    const PanResult = Gesture6.Pan();
    const enabledResult1 = PanResult.enabled(!tmp25);
    let result = enabledResult1.requireExternalGestureToFail(dismissToPIPGestureRef);
    const items14 = [closure_2_45, tmp5, tmp6];
    c0 = undefined;
    c1 = undefined;
    [tmp57, tmp58, tmp59] = items14;
    const averageTouchesResult = result.averageTouches(true);
    const tmp52 = callback21;
    class VoicePanelVideoRendererTsx31 {
      constructor(arg0, arg1) {
        value = closure_0.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        if (id !== closure_1) {
          tmp3 = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    const items15 = [tmp58, tmp59];
    VoicePanelVideoRendererTsx31.__closure = items15;
    VoicePanelVideoRendererTsx31.__workletHash = 13983458794067;
    VoicePanelVideoRendererTsx31.__initData = tmp57;
    const items16 = [closure_2_46, sharedValue7, 250, sharedValue8];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp60, tmp61, tmp62, tmp63] = items16;
    const onTouchesDownResult1 = averageTouchesResult.onTouchesDown(VoicePanelVideoRendererTsx31);
    class VoicePanelVideoRendererTsx32 {
      constructor() {
        timestamp = Date.now();
        result = closure_2.set(timestamp - closure_0.get() <= closure_1);
        result1 = closure_0.set(Date.now());
        return;
      }
    }
    const items17 = [tmp61, tmp62, tmp63];
    VoicePanelVideoRendererTsx32.__closure = items17;
    VoicePanelVideoRendererTsx32.__workletHash = 3741241664930;
    VoicePanelVideoRendererTsx32.__initData = tmp60;
    const items18 = [closure_2_47, sharedValue8, , , , ];
    const onStart3 = onTouchesDownResult1.onBegin(VoicePanelVideoRendererTsx32).onStart;
    onTouchesDownResult1.onBegin(VoicePanelVideoRendererTsx32);
    items18[2] = id(isCamera[14]).scheduleOnRN;
    items18[3] = tmp17;
    items18[4] = sharedValue5;
    items18[5] = tmp31;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp65, tmp66, tmp67, tmp68, tmp69, tmp70] = items18;
    class VoicePanelVideoRendererTsx33 {
      constructor() {
        if (closure_0.get()) {
          tmp = closure_1;
          tmp2 = closure_2;
          tmp3 = closure_1(closure_2);
        }
        result = closure_3.set(closure_3.get() + 1);
        result1 = closure_4.set(null);
        return;
      }
    }
    const items19 = [tmp66, tmp67, tmp68, tmp69, tmp70];
    VoicePanelVideoRendererTsx33.__closure = items19;
    VoicePanelVideoRendererTsx33.__workletHash = 9000494503209;
    VoicePanelVideoRendererTsx33.__initData = tmp65;
    const items20 = [closure_2_48, sharedValue8, 0.0075, sharedValue2, tmp37, tmp38, sharedValue3, sharedValue4, tmp41, tmp42];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    let c8;
    [tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80] = items20;
    const onStart3Result = onStart3(VoicePanelVideoRendererTsx33);
    class VoicePanelVideoRendererTsx34 {
      constructor(arg0) {
        if (closure_0.get()) {
          tmp8 = closure_1;
          num = 1;
          tmp10 = closure_2;
          sum = 1 + arg0.changeY * closure_1;
          set3 = closure_2.set;
          tmp12 = closure_3;
          value = closure_2.get();
          tmp14 = closure_4;
          value1 = closure_2.get();
          set3Result = set3(value * closure_3(value1, sum, closure_4.get()));
        } else {
          tmp = closure_5;
          set = closure_5.set;
          tmp3 = closure_2;
          value2 = closure_5.get();
          result = set(value2 + arg0.changeX / closure_2.get());
          tmp5 = closure_6;
          set2 = closure_6.set;
          value3 = closure_6.get();
          set2Result = set2(value3 + arg0.changeY / closure_2.get());
        }
        result1 = closure_7.set(closure_8());
        return;
      }
    }
    const items21 = [tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80];
    VoicePanelVideoRendererTsx34.__closure = items21;
    VoicePanelVideoRendererTsx34.__workletHash = 17349291779562;
    VoicePanelVideoRendererTsx34.__initData = tmp71;
    const items22 = [closure_2_49, sharedValue5, sharedValue3, , , , , , ];
    const onEnd = onStart3Result.onChange(VoicePanelVideoRendererTsx34).onEnd;
    onStart3Result.onChange(VoicePanelVideoRendererTsx34);
    items22[3] = id(isCamera[12]).withSpring;
    items22[4] = 0.05;
    items22[5] = sharedValue2;
    items22[6] = ref;
    items22[7] = sharedValue4;
    items22[8] = tmp52;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90] = items22;
    class VoicePanelVideoRendererTsx35 {
      constructor(arg0) {
        result = closure_0.set(closure_0.get() - 1);
        set = closure_1.set;
        value = closure_1.get();
        result1 = arg0.velocityX * closure_3;
        result2 = set(closure_2(value + result1 / closure_4.get(), closure_5));
        set2 = closure_6.set;
        value1 = closure_6.get();
        result3 = arg0.velocityY * closure_3;
        set2Result = set2(closure_2(value1 + result3 / closure_4.get(), closure_5));
        tmp8 = closure_7();
        return;
      }
    }
    const items23 = [tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90];
    VoicePanelVideoRendererTsx35.__closure = items23;
    VoicePanelVideoRendererTsx35.__workletHash = 11237881237266;
    VoicePanelVideoRendererTsx35.__initData = tmp82;
    const items24 = [closure_2_50, sharedValue8];
    c0 = undefined;
    [tmp91, tmp92] = items24;
    const onEndResult1 = onEnd(VoicePanelVideoRendererTsx35);
    class VoicePanelVideoRendererTsx36 {
      constructor() {
        result = closure_0.set(false);
        return;
      }
    }
    const items25 = [tmp92];
    VoicePanelVideoRendererTsx36.__closure = items25;
    VoicePanelVideoRendererTsx36.__workletHash = 14571201486970;
    VoicePanelVideoRendererTsx36.__initData = tmp91;
    return Simultaneous(ExclusiveResult, onEndResult, onEndResult1.onFinalize(VoicePanelVideoRendererTsx36));
  }, items54);
  let value = PixelRatio.get();
  c13 = value;
  const items55 = [streamId, isCamera, sharedValue2, sharedValue1, mode, value];
  callback5 = obj2.useCallback(() => {
    let tmp2 = null == streamId;
    const tmp = streamId;
    if (!tmp2) {
      tmp2 = isCamera;
    }
    if (!tmp2) {
      tmp2 = mode.get() !== VoicePanelModes.PANEL;
    }
    if (!tmp2) {
      size = { width: sharedValue1.get().width * c13, height: sharedValue1.get().height * c13 };
      const updateVideoSize = VideoActionCreators.updateVideoSize;
      VideoActionCreators;
      updateVideoSize(tmp, size, sharedValue2.get());
    }
  }, items55);
  const items56 = [closure_55, sharedValue2, sharedValue1, mode];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp161, tmp162, tmp163, tmp164] = items56;
  const tmp2Result47 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx41 {
    constructor() {
      const items = [_undefined.get(), _undefined2.get(), _undefined3.get()];
      return items;
    }
  }
  const items57 = [tmp162, tmp163, tmp164];
  VoicePanelVideoRendererTsx41.__closure = items57;
  VoicePanelVideoRendererTsx41.__workletHash = 12062588170367;
  VoicePanelVideoRendererTsx41.__initData = tmp161;
  const items58 = [closure_56, streamId, , , ];
  const useAnimatedReaction4 = tmp2Result47.useAnimatedReaction;
  items58[2] = tmp2(tmp3[13]).cheapWorkletShallowEqual;
  items58[3] = tmp2(tmp3[14]).scheduleOnRN;
  items58[4] = callback5;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp165, tmp166, tmp167, tmp168, tmp169] = items58;
  class VoicePanelVideoRendererTsx42 {
    constructor(arg0, arg1) {
      if (null != c0) {
        const tmp = arg1;
        const tmp2 = c1;
        if (!tmp2(arg0, tmp)) {
          _undefined(c3);
        }
      }
    }
  }
  const items59 = [tmp166, tmp167, tmp168, tmp169];
  VoicePanelVideoRendererTsx42.__closure = items59;
  VoicePanelVideoRendererTsx42.__workletHash = 3995919158814;
  VoicePanelVideoRendererTsx42.__initData = tmp165;
  const animatedReaction41 = useAnimatedReaction4(VoicePanelVideoRendererTsx41, VoicePanelVideoRendererTsx42);
  const items60 = [callback5];
  const effect = obj2.useEffect(() => {
    let obj = streamId(isCamera[24]);
    let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
      const tmp = arg0;
      if (!tmp) {
        callback5();
      }
    });
    return () => {
      const obj = closure_0;
      if (closure_0 != null) {
        obj.remove();
      }
    };
  }, items60);
  const items61 = [closure_57, sharedValue1, pIPState, c9, sharedValue2, sharedValue, sharedValue3, sharedValue4, flag];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  PixelRatio = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180] = items61;
  const tmp2Result48 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx43 {
    constructor() {
      let height;
      let items;
      let num2;
      let width;
      const value = _undefined.get();
      ({ width, height } = value);
      size = _undefined2;
      let result3 = height;
      let result1 = width;
      if (_undefined2.mode === _undefined3.IN_APP) {
        const scale = size.scale;
        const value2 = scale.get();
        if (width > height) {
          const result = width * (size.height * value2 / height);
          result1 = result / _undefined4.get();
          const result2 = size.height * value2;
          result3 = result2 / _undefined4.get();
        } else {
          const result4 = height * (size.width * value2 / width);
          result3 = result4 / _undefined4.get();
          const result5 = size.width * value2;
          result1 = result5 / _undefined4.get();
        }
      }
      const size1 = { width: result1, height: result3, opacity: num2, transform: items };
      let num = 1;
      num2 = 1;
      if (_undefined5.get()) {
        num2 = 0;
      }
      items = [{ scale: _undefined4.get() }, , , ];
      ({ scale: _undefined4.get() });
      items[1] = { translateX: _undefined6.get() };
      ({ translateX: _undefined6.get() });
      items[2] = { translateY: _undefined7.get() };
      ({ translateY: _undefined7.get() });
      const tmp10 = c7;
      if (tmp10) {
        num = -1;
      }
      items[3] = { scaleX: num };
      return size1;
    }
  }
  const items62 = [tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180];
  VoicePanelVideoRendererTsx43.__closure = items62;
  VoicePanelVideoRendererTsx43.__workletHash = 8500811993436;
  VoicePanelVideoRendererTsx43.__initData = tmp172;
  const animatedStyle = tmp2Result48.useAnimatedStyle(VoicePanelVideoRendererTsx43);
  const tmp2Result49 = tmp2(tmp3[25]);
  const token = tmp2Result49.useToken(tmp5(tmp3[26]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const useSharedValue2 = tmp2(tmp3[8]).useSharedValue;
  let num = 0;
  tmp2(tmp3[8]);
  const tmp184 = layoutManager;
  if (mode.get() !== layoutManager.PIP) {
    let value2 = focused.get();
    let id1;
    if (value2 != null) {
      id1 = value2.id;
    }
    num = 0;
    if (id1 !== id) {
      num = 0.3;
    }
  }
  const sharedValue21 = useSharedValue2(num);
  const items63 = [closure_58, mode, tmp184, focused, id];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp189, tmp190, tmp191, tmp192, tmp193] = items63;
  const tmp2Result51 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx44 {
    constructor() {
      const obj = { inPip: _undefined.get() === _undefined2.PIP, isFocused: id === c3 };
      const value = _undefined3.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return obj;
    }
  }
  const items64 = [tmp190, tmp191, tmp192, tmp193];
  VoicePanelVideoRendererTsx44.__closure = items64;
  VoicePanelVideoRendererTsx44.__workletHash = 11803304067139;
  VoicePanelVideoRendererTsx44.__initData = tmp189;
  const items65 = [closure_59, , , , ];
  const useAnimatedReaction5 = tmp2Result51.useAnimatedReaction;
  items65[1] = tmp2(tmp3[13]).cheapWorkletShallowEqual;
  items65[2] = sharedValue21;
  items65[3] = tmp2(tmp3[8]).withDelay;
  items65[4] = tmp2(tmp3[27]).withTiming;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp194, tmp195, tmp196, tmp197, tmp198] = items65;
  class VoicePanelVideoRendererTsx45 {
    constructor(inPip, isFocused) {
      const tmp = c0;
      const tmp2 = isFocused;
      if (!tmp(inPip, tmp2)) {
        if (!inPip.inPip) {
          if (!inPip.isFocused) {
            isFocused = undefined;
            if (isFocused != null) {
              isFocused = isFocused.isFocused;
            }
            let num2 = 0.3;
            set = _undefined.set;
            if (true === isFocused) {
              num2 = _undefined2(300, _undefined3(0.3, { duration: 0 }, "animate-never"));
            }
            const result = set(num2);
          }
        }
        const result1 = _undefined.set(0);
      }
    }
  }
  const items66 = [tmp195, tmp196, tmp197, tmp198];
  VoicePanelVideoRendererTsx45.__closure = items66;
  VoicePanelVideoRendererTsx45.__workletHash = 4081353667825;
  VoicePanelVideoRendererTsx45.__initData = tmp194;
  const animatedReaction51 = useAnimatedReaction5(VoicePanelVideoRendererTsx44, VoicePanelVideoRendererTsx45);
  const items67 = [closure_60, sharedValue6, 25, token, sharedValue21];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp200, tmp201, tmp202, tmp203, tmp204] = items67;
  const tmp2Result52 = tmp2(tmp3[8]);
  class VoicePanelVideoRendererTsx46 {
    constructor() {
      let rect1;
      if (_undefined.get()) {
        const rect = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, borderWidth, overflow: "hidden", borderColor: "white", opacity: 0.5 };
        rect1 = rect;
      } else {
        rect1 = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderRadius: c2 + 2, overflow: "hidden", borderColor: "white", opacity: _undefined2.get() };
      }
      return rect1;
    }
  }
  const items68 = [tmp201, tmp202, tmp203, tmp204];
  VoicePanelVideoRendererTsx46.__closure = items68;
  VoicePanelVideoRendererTsx46.__workletHash = 13057876235952;
  VoicePanelVideoRendererTsx46.__initData = tmp200;
  const items69 = [closure_61, layout, sharedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp206, tmp207, tmp208] = items69;
  class VoicePanelVideoRendererTsx47 {
    constructor(arg0) {
      return _undefined(arg0, _undefined2.get());
    }
  }
  const items70 = [tmp207, tmp208];
  VoicePanelVideoRendererTsx47.__closure = items70;
  VoicePanelVideoRendererTsx47.__workletHash = 1306418724990;
  VoicePanelVideoRendererTsx47.__initData = tmp206;
  const items71 = [layout, sharedValue];
  const animatedStyle1 = tmp2Result52.useAnimatedStyle(VoicePanelVideoRendererTsx46);
  const callback6 = obj2.useCallback(VoicePanelVideoRendererTsx47, items71);
  const obj6 = { gesture: memo, children: tmp211(View, obj7) };
  const GestureDetector = tmp2(tmp3[16]).GestureDetector;
  obj7 = { style: items72, layout: callback6, children: items74 };
  items72 = [tmp.wrapper, style];
  View = tmp5(tmp3[8]).View;
  const obj8 = { style: items73, layout: callback6, children: onReady(tmp212, obj9) };
  items73 = [tmp.animatedWrapperStyles, animatedStyle];
  obj9 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: tmp213, onReady: callback, onSize: callback1, style: tmp.video, layout: callback6 };
  tmp213 = null;
  const View2 = tmp5(tmp3[8]).View;
  tmp211 = sharedValue2;
  tmp212 = c13;
  if (!tmp12) {
    tmp213 = streamId;
  }
  items74 = [onReady(View2, obj8), ];
  if (tmp14) {
    const obj10 = { animate: true, style: tmp.spinner };
    tmp210Result = tmp210(tmp5(tmp3[28]), obj10);
  } else {
    const obj11 = { style: animatedStyle1, layout: callback6, pointerEvents: "none" };
    tmp210Result = tmp210(tmp5(tmp3[8]).View, obj11);
  }
  items74[1] = tmp210Result;
  return onReady(GestureDetector, obj6);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx");

export default memoResult;
