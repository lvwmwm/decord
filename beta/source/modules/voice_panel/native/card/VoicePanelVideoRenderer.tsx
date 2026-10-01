// Module ID: 16957
// Function ID: 16958
// Name: VoicePanelVideoRenderer
// Dependencies: [32, 19, 17, 11755, 11753, 16913, 11756, 21, 4566, 8892, 4836, 11754, 5280, 8853, 4801, 6073, 8881, 16916, 8884, 8882, 16905, 10896, 16828, 8886, 4531, 576, 4837, 6494, 8889, 2]

// Module 16957 (VoicePanelVideoRenderer)
import react_native from "react-native" /* 17 */;
import timing from "timing" /* 4837 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 8853 */;
import DCDVideoRendererDefault from "DCDVideoRenderer" /* 8892 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10896 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import VideoActionCreators from "VideoActionCreators" /* 16828 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 16913 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let set, set2, set3;

let closure_12;
let tmp2;
let unpackModuleId;
const ReanimatedRexport2 = tmp2(4566);
const PixelRatio = react_native.PixelRatio;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
let SCALE_PHYSICS = MorphablePanelConstants.SCALE_PHYSICS;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let c13 = 25;
let c14 = 0.05;
let c15 = 0.0075;
const DCDVideoRenderer = ReanimatedRexport.createAnimatedComponent(DCDVideoRendererDefault);
function getScaleChangeWithOverscroll(arg0, arg1, arg2) {
  if (arg0 >= arg2) {
    return arg1;
  } else {
    const diff = 1 - arg0;
    const _Math = Math;
    const diff1 = arg1 - 1;
    return 1 + diff1 * Math.max(0.1, 1 - diff * diff * 5);
  }
}
getScaleChangeWithOverscroll.__closure = { MIN_OVERSCROLL: 0.1, OVERSCOLL_INTENSITY_FACTOR: 5 };
getScaleChangeWithOverscroll.__workletHash = 8727721301304;
getScaleChangeWithOverscroll.__initData = { code: "function getScaleChangeWithOverscroll_VoicePanelVideoRendererTsx1(currentScale,scaleChange,fitScale){const{MIN_OVERSCROLL,OVERSCOLL_INTENSITY_FACTOR}=this.__closure;if(currentScale>=fitScale){return scaleChange;}const underScale=1-currentScale;const factor=Math.max(MIN_OVERSCROLL,1-underScale*underScale*OVERSCOLL_INTENSITY_FACTOR);return 1+(scaleChange-1)*factor;}" };
let closure_18 = createStyles.createStyles({ wrapper: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, animatedWrapperStyles: { position: "absolute" }, video: { width: "100%", height: "100%" }, spinner: { position: "absolute", top: "50%", left: "50%", marginTop: -16, marginLeft: -16, height: 32, width: 32 } });
let closure_19 = { code: "function VoicePanelVideoRendererTsx2(){const{containerLayout,videoDimensions}=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
let closure_20 = { code: "function VoicePanelVideoRendererTsx3(){const{containerLayout,videoDimensions}=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
let closure_21 = { code: "function VoicePanelVideoRendererTsx4(){const{translateX,translateY,scale,fitScale,coverScale}=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;}" };
let closure_22 = { code: "function VoicePanelVideoRendererTsx5(forcedMode){const{scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold}=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);}" };
let closure_23 = { code: "function VoicePanelVideoRendererTsx6(){const{focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize}=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);}" };
let __initData = { code: "function VoicePanelVideoRendererTsx7(){const{containerLayout}=this.__closure;return containerLayout.get();}" };
let closure_25 = { code: "function VoicePanelVideoRendererTsx8(containerLayout,previous){const{cheapWorkletShallowEqual,focused,id,resetOnLayoutChange}=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout!==previous&&previous!=null){resetOnLayoutChange();}}" };
let closure_26 = { code: "function VoicePanelVideoRendererTsx9(){const{coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD}=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;}" };
let closure_27 = { code: "function VoicePanelVideoRendererTsx10(){const{numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY}=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));}" };
const __initData2 = { code: "function VoicePanelVideoRendererTsx11(){const{focused,id,isInDefaultZoom,isInPanToZoom}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());}" };
const __initData3 = { code: "function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous){const{setIsFocusedVideoZoomed}=this.__closure;if(isFocusedZoomed===previous){return;}setIsFocusedVideoZoomed(isFocusedZoomed);}" };
const __initData4 = { code: "function VoicePanelVideoRendererTsx13(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData5 = { code: "function VoicePanelVideoRendererTsx14(isFocused,previous){const{resetOnLayoutChange}=this.__closure;if(isFocused===previous){return;}resetOnLayoutChange();}" };
const __initData6 = { code: "function VoicePanelVideoRendererTsx15(){const{mode}=this.__closure;return mode.get();}" };
const __initData7 = { code: "function VoicePanelVideoRendererTsx16(mode,previous){const{resetOnLayoutChange}=this.__closure;if(mode===previous){return;}resetOnLayoutChange();}" };
const __initData8 = { code: "function VoicePanelVideoRendererTsx17(){const{videoDimensions}=this.__closure;return videoDimensions.get();}" };
const __initData9 = { code: "function VoicePanelVideoRendererTsx18(layout,previous){const{currentSizeThreshold,resetOnLayoutChange}=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous===null||previous===void 0?void 0:previous.width)&&layout.height===(previous===null||previous===void 0?void 0:previous.height)){return;}resetOnLayoutChange();}" };
const __initData10 = { code: "function VoicePanelVideoRendererTsx19(){const{coverScale}=this.__closure;return coverScale.get();}" };
const __initData11 = { code: "function VoicePanelVideoRendererTsx20(current,previous){const{currentSizeThreshold,resetToDefaultSize}=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous){return;}resetToDefaultSize(_currentSizeThreshold);}" };
const __initData12 = { code: "function VoicePanelVideoRendererTsx21(){const{isInSnap}=this.__closure;return isInSnap.get();}" };
const __initData13 = { code: "function VoicePanelVideoRendererTsx22(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous){return;}if(!current){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
let closure_40 = { code: "function VoicePanelVideoRendererTsx23(){const{isInDefaultZoom,resetOnLayoutChange,focused,id,runOnJS,setFocused}=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){runOnJS(setFocused)(id);}else{runOnJS(setFocused)(null);}}" };
let closure_41 = { code: "function VoicePanelVideoRendererTsx24(e,manager){return manager.fail();}" };
let closure_42 = { code: "function VoicePanelVideoRendererTsx25(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_43 = { code: "function VoicePanelVideoRendererTsx26(e,manager){return manager.fail();}" };
let closure_44 = { code: "function VoicePanelVideoRendererTsx27(){const{numGesturesActive,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();}" };
let closure_45 = { code: "function VoicePanelVideoRendererTsx28(event){const{scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event.scaleChange,fitScale.get()));const startingFocalFromCenterX=event.focalX-containerLayout.get().width/2;const startingFocalFromCenterY=event.focalY-containerLayout.get().height/2;const zoomCenteringX=-1*startingFocalFromCenterX*(event.scaleChange-1)/scale.get();const zoomCenteringY=-1*startingFocalFromCenterY*(event.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());}" };
let closure_46 = { code: "function VoicePanelVideoRendererTsx29(){const{numGesturesActive,isInPanToZoom,currentSizeThreshold}=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);}" };
let closure_47 = { code: "function VoicePanelVideoRendererTsx30(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();}}" };
let closure_48 = { code: "function VoicePanelVideoRendererTsx31(){const{isInPanToZoom}=this.__closure;isInPanToZoom.set(false);}" };
let closure_49 = { code: "function VoicePanelVideoRendererTsx32(event){const{numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();}" };
let closure_50 = { code: "function VoicePanelVideoRendererTsx33(event){const{isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;if(isInPanToZoom.get()){const scaleChange=1+event.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event.changeX/scale.get());translateY.set(translateY.get()+event.changeY/scale.get());}isInSnap.set(isInCoverSnap());}" };
let closure_51 = { code: "function VoicePanelVideoRendererTsx34(){const{isInPanToZoom,runOnJS,hideControls,numGesturesActive,currentSizeThreshold}=this.__closure;if(isInPanToZoom.get()){runOnJS(hideControls)();}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);}" };
let closure_52 = { code: "function VoicePanelVideoRendererTsx35(){const{lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom}=this.__closure;const hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());}" };
let closure_53 = { code: "function VoicePanelVideoRendererTsx36(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();return;}}" };
function shouldMakeActive(selfId) {
  let focusedId;
  let isScrollVisible;
  ({ focusedId, isScrollVisible } = selfId);
  let tmp = !isScrollVisible;
  selfId = selfId.selfId;
  if (isScrollVisible) {
    tmp = selfId.mode === VoicePanelModes.PIP;
  }
  if (!tmp) {
    tmp = null != focusedId && focusedId !== selfId;
  }
  return !tmp;
}
shouldMakeActive.__closure = { VoicePanelModes };
shouldMakeActive.__workletHash = 14556501664557;
shouldMakeActive.__initData = { code: "function shouldMakeActive_VoicePanelVideoRendererTsx37({mode:mode,focusedId:focusedId,selfId:selfId,isScrollVisible:isScrollVisible}){const{VoicePanelModes}=this.__closure;const isPIP=mode===VoicePanelModes.PIP;if(!isScrollVisible||isPIP||focusedId!=null&&focusedId!==selfId){return false;}return true;}" };
const __initData14 = { code: "function VoicePanelVideoRendererTsx38(){const{mode,focused,isScrollVisible,streamId}=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];}" };
const __initData15 = { code: "function VoicePanelVideoRendererTsx39(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setHasActiveVideoOutputSink,shouldMakeActive,id}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode,focusedId,isScrollVisible,streamId]=props;if(streamId==null)return;runOnJS(setHasActiveVideoOutputSink)(streamId,shouldMakeActive({mode:mode,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible}));}" };
const __initData16 = { code: "function VoicePanelVideoRendererTsx40(){const{focused,id,windowDimensions,sharedCoords}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};}" };
const __initData17 = { code: "function VoicePanelVideoRendererTsx41(){const{scale,videoDimensions,mode}=this.__closure;return[scale.get(),videoDimensions.get(),mode.get()];}" };
const __initData18 = { code: "function VoicePanelVideoRendererTsx42(props,previous){const{streamId,cheapWorkletShallowEqual,runOnJS,respondToVideoSizeUpdate}=this.__closure;if(streamId==null)return;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(respondToVideoSizeUpdate)();}" };
const __initData19 = { code: "function VoicePanelVideoRendererTsx43(){const{videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror}=this.__closure;let{width:width,height:height}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){const pipScale=pipState.scale.get();if(width>height){width=width*(pipState.height*pipScale/height)/scale.get();height=pipState.height*pipScale/scale.get();}else{height=height*(pipState.width*pipScale/width)/scale.get();width=pipState.width*pipScale/scale.get();}}return{width:width,height:height,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};}" };
const __initData20 = { code: "function VoicePanelVideoRendererTsx44(){const{mode,VoicePanelModes,focused,id}=this.__closure;var _focused$get;return{inPip:mode.get()===VoicePanelModes.PIP,isFocused:((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id};}" };
const __initData21 = { code: "function VoicePanelVideoRendererTsx45(curr,prev){const{cheapWorkletShallowEqual,strokeOpacity,withDelay,withTiming}=this.__closure;if(cheapWorkletShallowEqual(curr,prev!==null&&prev!==void 0?prev:undefined))return;if(curr.inPip||curr.isFocused){strokeOpacity.set(0);return;}const shouldDelay=(prev===null||prev===void 0?void 0:prev.isFocused)===true;strokeOpacity.set(shouldDelay?withDelay(300,withTiming(0.3,{duration:0},'animate-never')):0.3);}" };
const __initData22 = { code: "function VoicePanelVideoRendererTsx46(){const{isInSnap,SNAP_EDGE_INNER_THRESHOLD,borderRadius,strokeOpacity}=this.__closure;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:borderRadius+2,overflow:'hidden',borderColor:'white',opacity:strokeOpacity.get()};}" };
const __initData23 = { code: "function VoicePanelVideoRendererTsx47(values){const{layout,disableAnimations}=this.__closure;return layout(values,disableAnimations.get());}" };
const memoResult = react.memo(function VideoRenderer(id) {
  let _undefined;
  let _undefined2;
  let borderWidth;
  let c10;
  let c16;
  let c24;
  let items10;
  let items11;
  let items12;
  let layoutManager;
  let obj15;
  let obj17;
  let ref;
  let sharedCoords;
  let tmp14;
  let tmp5Result;
  let tmp60Result;
  let tmp61;
  let tmp64;
  let tmp65;
  let userId;
  let videoSpinnerContext;
  id = id.id;
  const streamId = id.streamId;
  ({ userId, videoSpinnerContext, sharedCoords } = id);
  const isScrollVisible = id.isScrollVisible;
  const isCamera = id.isCamera;
  let flag = id.mirror;
  const streamKey = id.streamKey;
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
  SCALE_PHYSICS = undefined;
  layoutManager = undefined;
  c16 = undefined;
  let onReady;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue6;
  __initData = undefined;
  let callback6;
  let token;
  let sharedValue21;
  const style = id.style;
  let tmp = onReady();
  let tmp2 = id;
  let tmp3 = sharedCoords;
  let obj = id(sharedCoords[16]);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VoicePanelVideoRenderer" });
  let obj2 = isCamera;
  let tmp5 = streamId;
  const context = isCamera.useContext(streamId(sharedCoords[11]));
  const mode = context.mode;
  const focused = context.focused;
  ({ setFocused: c10, layoutManager } = context);
  const windowDimensions = context.windowDimensions;
  const streamOutputSinkStack = context.streamOutputSinkStack;
  let obj3 = id(sharedCoords[8]);
  const sharedValue = obj3.useSharedValue(true);
  let obj4 = {};
  const useSharedValue = id(sharedCoords[8]).useSharedValue;
  const tmp8 = id(sharedCoords[8]);
  const merged = Object.assign(layoutManager.getTargetDimensions(id));
  const sharedValue1 = useSharedValue(obj4);
  let obj5 = id(sharedCoords[17]);
  const pIPState = obj5.usePIPState();
  const tmp12 = isCamera && pIPState.id === id && surfaceDirectRendererExperiment;
  const tmp13 = isScrollVisible(obj2.useState(true), 2);
  [tmp14, c16] = tmp13;
  getScaleChangeWithOverscroll = obj2.useRef(() => {
    const tmp = flag2;
    if (tmp) {
      _undefined(id);
    }
  });
  onReady = tmp5(tmp3[18])({ streamId, userId, loading: tmp14, videoSpinnerContext, paused: flag3, streamKey }).onReady;
  const tmp15 = tmp5(tmp3[19])({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, loading: tmp14 });
  let items = [onReady];
  const callback = obj2.useCallback(() => {
    _undefined2(false);
    ref.current();
    onReady();
  }, items);
  let tmp2Result = tmp2(tmp3[20]);
  const setHasActiveVideoOutputSink = tmp2Result.useSetHasActiveVideoOutputSink(streamOutputSinkStack);
  function qe() {
    const items = [mode.get(), , , ];
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    items[1] = id;
    items[2] = isScrollVisible.get();
    items[3] = streamId;
    return items;
  }
  qe.__closure = { mode, focused, isScrollVisible, streamId };
  qe.__workletHash = 3558943323767;
  qe.__initData = __initData14;
  const tmp2Result27 = tmp2(tmp3[8]);
  class Je {
    constructor(arg0, arg1) {
      const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual2.cheapWorkletArrayShallowEqual;
      cheapWorkletShallowEqual2;
      const tmp = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
        const tmp6 = _slicedToArray(arg0, 4);
        if (null != tmp6[3]) {
          ReanimatedRexport2;
          if (typeof shouldMakeActive === "function") {
            let tmp17 = !tmp9;
            if (tmp6[2]) {
              tmp17 = tmp7 === VoicePanelModes.PIP;
            }
            if (!tmp17) {
              tmp17 = null != tmp6[1] && tmp6[1] !== tmp15;
            }
            tmp13(tmp6[3], !tmp17);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
  }
  let obj6 = { cheapWorkletArrayShallowEqual: tmp2(tmp3[13]).cheapWorkletArrayShallowEqual, runOnJS: tmp2(tmp3[8]).runOnJS, setHasActiveVideoOutputSink, shouldMakeActive, id };
  Je.__closure = obj6;
  Je.__workletHash = 12089612803324;
  Je.__initData = __initData15;
  const animatedReaction = tmp2Result27.useAnimatedReaction(qe, Je);
  const items1 = [sharedValue1, layoutManager, id, sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent);
    updateSharedValueIfChangedDefault(sharedValue1, { width, height });
    layoutManager.setTargetDimensions(id, width, height);
    if (sharedValue.get()) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = borderWidth.set(false);
      }, 34);
    }
  }, items1);
  const tmp2Result28 = tmp2(tmp3[8]);
  class Be {
    constructor() {
      let size1;
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === id) {
        size = { width: windowDimensions.get().width, height: windowDimensions.get().height };
        size1 = size;
      } else {
        size1 = { width: sharedCoords.get().width, height: sharedCoords.get().height };
      }
      return size1;
    }
  }
  Be.__closure = { focused, id, windowDimensions, sharedCoords };
  Be.__workletHash = 9631392718391;
  Be.__initData = __initData16;
  const derivedValue = tmp2Result28.useDerivedValue(Be);
  shouldMakeActive = tmp14;
  let derivedValue2;
  let derivedValue3;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  const context1 = obj2.useContext(tmp5(tmp3[11]));
  const setIsFocusedVideoZoomed = context1.setIsFocusedVideoZoomed;
  const windowDimensions2 = context1.windowDimensions;
  const dismissToPIPGestureRef = context1.dismissToPIPGestureRef;
  const setFocused = context1.setFocused;
  const hideControls = context1.hideControls;
  const controlsSpecs = context1.controlsSpecs;
  const showControls = context1.showControls;
  const tmp2Result29 = tmp2(tmp3[8]);
  sharedValue2 = tmp2Result29.useSharedValue(1);
  const tmp2Result30 = tmp2(tmp3[8]);
  sharedValue3 = tmp2Result30.useSharedValue(0);
  const tmp2Result31 = tmp2(tmp3[8]);
  sharedValue4 = tmp2Result31.useSharedValue(0);
  const tmp2Result32 = tmp2(tmp3[8]);
  const sharedValue5 = tmp2Result32.useSharedValue(0);
  const tmp2Result33 = tmp2(tmp3[8]);
  sharedValue6 = tmp2Result33.useSharedValue(false);
  const tmp2Result34 = tmp2(tmp3[8]);
  const sharedValue7 = tmp2Result34.useSharedValue(0);
  const tmp2Result35 = tmp2(tmp3[8]);
  const sharedValue8 = tmp2Result35.useSharedValue(false);
  const tmp2Result36 = tmp2(tmp3[8]);
  const sharedValue9 = tmp2Result36.useSharedValue(null);
  let fn = function w() {
    const result = derivedValue.get().width / sharedValue1.get().width;
    return max(result, derivedValue.get().height / sharedValue1.get().height);
  };
  fn.__closure = { containerLayout: derivedValue, videoDimensions: sharedValue1 };
  fn.__workletHash = 4177496646282;
  fn.__initData = setHasActiveVideoOutputSink;
  const tmp2Result37 = tmp2(tmp3[8]);
  const derivedValue1 = tmp2Result37.useDerivedValue(fn);
  const tmp2Result38 = tmp2(tmp3[8]);
  class D {
    constructor() {
      const result = derivedValue.get().width / sharedValue1.get().width;
      return min(result, derivedValue.get().height / sharedValue1.get().height);
    }
  }
  D.__closure = { containerLayout: derivedValue, videoDimensions: sharedValue1 };
  D.__workletHash = 5260375952053;
  D.__initData = sharedValue2;
  derivedValue2 = tmp2Result38.useDerivedValue(D);
  const tmp2Result39 = tmp2(tmp3[8]);
  class I {
    constructor() {
      let tmp = 0 === sharedValue3.get() && 0 === sharedValue4.get();
      if (tmp) {
        const value = sharedValue2.get();
        let tmp5 = value === derivedValue2.get();
        const obj = sharedValue2;
        if (!tmp5) {
          const value2 = obj.get();
          tmp5 = value2 === derivedValue1.get();
        }
        tmp = tmp5;
      }
      return tmp;
    }
  }
  I.__closure = { translateX: sharedValue3, translateY: sharedValue4, scale: sharedValue2, fitScale: derivedValue2, coverScale: derivedValue1 };
  I.__workletHash = 15099362638406;
  I.__initData = sharedValue3;
  derivedValue3 = tmp2Result39.useDerivedValue(I);
  function ae(arg0) {
    if ("fit" === arg0) {
      set2 = sharedValue2.set;
      const withSpring2 = id(sharedCoords[12]).withSpring;
      id(sharedCoords[12]);
      const value = derivedValue2.get();
      let str2 = "respect-motion-settings";
      const tmp16 = layout;
      if (sharedValue.get()) {
        str2 = "animate-never";
      }
      set2(withSpring2(value, tmp16, str2));
    } else {
      set = sharedValue2.set;
      const withSpring = id(sharedCoords[12]).withSpring;
      id(sharedCoords[12]);
      const value2 = derivedValue1.get();
      let str = "respect-motion-settings";
      const tmp7 = layout;
      if (sharedValue.get()) {
        str = "animate-never";
      }
      const result = set(withSpring(value2, tmp7, str));
    }
    set3 = sharedValue3.set;
    const obj = id(sharedCoords[12]);
    set3(obj.withSpring(0, c10));
    const set4 = sharedValue4.set;
    const obj2 = id(sharedCoords[12]);
    set4(obj2.withSpring(0, c10));
    const result1 = sharedValue9.set(arg0);
  }
  const obj7 = { scale: sharedValue2, withSpring: tmp2(tmp3[12]).withSpring, fitScale: derivedValue2, MODE_CHANGE_PHYSICS: layout, disableAnimations: sharedValue, coverScale: derivedValue1, translateX: sharedValue3, SCALE_PHYSICS, translateY: sharedValue4, currentSizeThreshold: sharedValue9 };
  ae.__closure = obj7;
  ae.__workletHash = 16610861286231;
  ae.__initData = sharedValue4;
  const items2 = [sharedValue2, sharedValue3, sharedValue4, derivedValue1, sharedValue9, derivedValue2, sharedValue];
  callback2 = obj2.useCallback(ae, items2);
  function re() {
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    let str = "cover";
    if (id === id) {
      str = "fit";
    }
    let tmp5 = isCamera;
    const tmp3 = sharedValue1.get().width >= sharedValue1.get().height;
    const tmp4 = windowDimensions2.get().width >= windowDimensions2.get().height;
    if (isCamera) {
      tmp5 = "fit" === str;
    }
    if (tmp5) {
      tmp5 = tmp3 === tmp4;
    }
    if (tmp5) {
      str = "cover";
    }
    callback2(str);
  }
  re.__closure = { focused, id, videoDimensions: sharedValue1, windowDimensions: windowDimensions2, isCamera, resetToDefaultSize: callback2 };
  re.__workletHash = 15643035811761;
  re.__initData = sharedValue6;
  const items3 = [focused, id, isCamera, sharedValue1, windowDimensions2, callback2];
  callback3 = obj2.useCallback(re, items3);
  function le() {
    return derivedValue.get();
  }
  le.__closure = { containerLayout: derivedValue };
  le.__workletHash = 9695573702258;
  le.__initData = __initData;
  function ce(safeAreaState, current) {
    const cheapWorkletShallowEqual = id(sharedCoords[13]).cheapWorkletShallowEqual;
    id(sharedCoords[13]);
    const tmp2 = current;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp2)) {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      const tmp7 = id === id && safeAreaState !== current && null != current;
      if (tmp7) {
        callback3();
      }
    }
  }
  const tmp2Result40 = tmp2(tmp3[8]);
  let obj8 = { cheapWorkletShallowEqual: tmp2(tmp3[13]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: callback3 };
  ce.__closure = obj8;
  ce.__workletHash = 13816224514199;
  ce.__initData = callback6;
  const animatedReaction1 = tmp2Result40.useAnimatedReaction(le, ce);
  class Le {
    constructor() {
      const value = derivedValue1.get();
      if (value < derivedValue2.get() + 0.05) {
        return false;
      } else {
        const value3 = sharedValue3.get();
        const result = value3 * sharedValue2.get();
        const value4 = sharedValue4.get();
        const result1 = value4 * sharedValue2.get();
        if (result >= -50) {
          if (result <= 50) {
            if (result1 >= -50) {
              if (result1 <= 50) {
                const width = derivedValue.get().width;
                const sum = result + (width - sharedValue1.get().width * obj.get()) / 2;
                const height = derivedValue.get().height;
                const sum1 = result1 + (height - sharedValue1.get().height * obj.get()) / 2;
                const result2 = sharedValue1.get().width * obj.get();
                const result3 = sharedValue1.get().height * obj.get();
                let tmp2 = result3 >= derivedValue.get().height && sum >= -50 && sum <= sharedValue;
                if (tmp2) {
                  const sum2 = sum + result2;
                  tmp2 = sum2 >= obj2.get().width - sharedValue;
                }
                if (tmp2) {
                  const sum3 = sum + result2;
                  tmp2 = sum3 <= obj2.get().width + 50;
                }
                if (!tmp2) {
                  let tmp7 = result2 >= obj2.get().width && sum1 >= -50 && sum1 <= sharedValue;
                  if (tmp7) {
                    const sum4 = sum1 + result3;
                    tmp7 = sum4 >= obj2.get().height - sharedValue;
                  }
                  if (tmp7) {
                    const sum5 = sum1 + result3;
                    tmp7 = sum5 <= obj2.get().height + 50;
                  }
                  tmp2 = tmp7;
                }
                return tmp2;
              }
            }
          }
        }
        return false;
      }
    }
  }
  Le.__closure = { coverScale: derivedValue1, fitScale: derivedValue2, MIN_ZOOM_FOR_COVER_SNAP_OFFSET: 0.05, translateX: sharedValue3, scale: sharedValue2, translateY: sharedValue4, SNAP_CENTER_THRESHOLD: 50, containerLayout: derivedValue, videoDimensions: sharedValue1, SNAP_EDGE_OUTER_THRESHOLD: 50, SNAP_EDGE_INNER_THRESHOLD: sharedValue };
  Le.__workletHash = 3902544453390;
  Le.__initData = token;
  const items4 = [derivedValue1, sharedValue2, sharedValue3, sharedValue4, derivedValue, sharedValue1, derivedValue2];
  callback4 = obj2.useCallback(Le, items4);
  function ye() {
    if (sharedValue5.get() <= 0) {
      const obj2 = sharedValue6;
      if (sharedValue6.get()) {
        const result = obj2.set(false);
        callback2("cover");
      } else {
        const value = sharedValue2.get();
        if (value < derivedValue2.get()) {
          callback2("fit");
        } else {
          const _Math = Math;
          const height = sharedValue1.get().height;
          const maxResult = max(0, (height - derivedValue.get().height / sharedValue2.get()) / 2);
          const _Math2 = Math;
          const max2 = Math.max;
          const width = sharedValue1.get().width;
          const max2Result = max2(0, (width - derivedValue.get().width / sharedValue2.get()) / 2);
          const _Math3 = Math;
          const _Math4 = Math;
          set = sharedValue3.set;
          const obj3 = id(sharedCoords[12]);
          const tmp16 = -max2Result;
          const result1 = set(obj3.withSpring(Math.min(max2Result, Math.max(tmp16, sharedValue3.get())), c10));
          const _Math5 = Math;
          const _Math6 = Math;
          set2 = sharedValue4.set;
          const obj4 = id(sharedCoords[12]);
          const tmp20 = -maxResult;
          set2(obj4.withSpring(Math.min(maxResult, Math.max(tmp20, sharedValue4.get())), c10));
        }
      }
    }
  }
  const obj9 = { numGesturesActive: sharedValue5, isInSnap: sharedValue6, resetToDefaultSize: callback2, scale: sharedValue2, fitScale: derivedValue2, videoDimensions: sharedValue1, containerLayout: derivedValue, translateX: sharedValue3, withSpring: tmp2(tmp3[12]).withSpring, SCALE_PHYSICS, translateY: sharedValue4 };
  ye.__closure = obj9;
  ye.__workletHash = 3493652911835;
  ye.__initData = sharedValue21;
  const items5 = [derivedValue2, sharedValue5, sharedValue6, sharedValue2, sharedValue1, derivedValue, sharedValue3, sharedValue4, callback2];
  callback5 = obj2.useCallback(ye, items5);
  function xe() {
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    let tmp3 = id === id;
    if (tmp3) {
      const value3 = derivedValue3.get();
      let value4 = !value3;
      if (value3) {
        value4 = sharedValue8.get();
      }
      tmp3 = value4;
    }
    return tmp3;
  }
  xe.__closure = { focused, id, isInDefaultZoom: derivedValue3, isInPanToZoom: sharedValue8 };
  xe.__workletHash = 5209373786986;
  xe.__initData = __initData2;
  function ke(arg0, arg1) {
    if (arg0 !== arg1) {
      setIsFocusedVideoZoomed(arg0);
    }
  }
  ke.__closure = { setIsFocusedVideoZoomed };
  ke.__workletHash = 10707557639101;
  ke.__initData = __initData3;
  const tmp2Result41 = tmp2(tmp3[8]);
  const animatedReaction2 = tmp2Result41.useAnimatedReaction(xe, ke);
  const tmp2Result42 = tmp2(tmp3[8]);
  const tmp36 = sharedValue;
  class Me {
    constructor() {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === id;
    }
  }
  Me.__closure = { focused, id };
  Me.__workletHash = 619124678280;
  Me.__initData = __initData4;
  function be(arg0, arg1) {
    if (arg0 !== arg1) {
      callback3();
    }
  }
  be.__closure = { resetOnLayoutChange: callback3 };
  be.__workletHash = 8458824233146;
  be.__initData = __initData5;
  const animatedReaction3 = tmp2Result42.useAnimatedReaction(Me, be);
  const tmp2Result43 = tmp2(tmp3[8]);
  class Ye {
    constructor() {
      return mode.get();
    }
  }
  Ye.__closure = { mode };
  Ye.__workletHash = 7040117988961;
  Ye.__initData = __initData6;
  class Ne {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        callback3();
      }
    }
  }
  Ne.__closure = { resetOnLayoutChange: callback3 };
  Ne.__workletHash = 9279120690968;
  Ne.__initData = __initData7;
  const animatedReaction4 = tmp2Result43.useAnimatedReaction(Ye, Ne);
  const tmp2Result44 = tmp2(tmp3[8]);
  class Ge {
    constructor() {
      return sharedValue1.get();
    }
  }
  Ge.__closure = { videoDimensions: sharedValue1 };
  Ge.__workletHash = 8748184223523;
  Ge.__initData = __initData8;
  class Fe {
    constructor(width, width2) {
      if (null != sharedValue9) {
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
          callback3();
        }
      }
    }
  }
  Fe.__closure = { currentSizeThreshold: sharedValue9, resetOnLayoutChange: callback3 };
  Fe.__workletHash = 8464422969486;
  Fe.__initData = __initData9;
  const animatedReaction5 = tmp2Result44.useAnimatedReaction(Ge, Fe);
  function ze() {
    return derivedValue1.get();
  }
  ze.__closure = { coverScale: derivedValue1 };
  ze.__workletHash = 5444376625069;
  ze.__initData = __initData10;
  const tmp2Result45 = tmp2(tmp3[8]);
  class Xe {
    constructor(arg0, arg1) {
      const value = sharedValue9.get();
      const tmp2 = "cover" === value && arg0 !== arg1;
      if (tmp2) {
        callback2(value);
      }
    }
  }
  Xe.__closure = { currentSizeThreshold: sharedValue9, resetToDefaultSize: callback2 };
  Xe.__workletHash = 10764193588506;
  Xe.__initData = __initData11;
  const animatedReaction6 = tmp2Result45.useAnimatedReaction(ze, Xe);
  function $e() {
    return sharedValue6.get();
  }
  $e.__closure = { isInSnap: sharedValue6 };
  $e.__workletHash = 2178206594630;
  $e.__initData = __initData12;
  const tmp2Result46 = tmp2(tmp3[8]);
  class Ze {
    constructor(arg0, arg1) {
      const tmp = arg0 !== arg1 && arg0;
      if (tmp) {
        const obj = id(sharedCoords[8]);
        const runOnJSResult = obj.runOnJS(id(sharedCoords[14]).triggerHapticFeedback);
        runOnJSResult(id(sharedCoords[14]).HapticFeedbackTypes.IMPACT_LIGHT);
      }
    }
  }
  Ze.__closure = { runOnJS: tmp2(tmp3[8]).runOnJS, triggerHapticFeedback: tmp2(tmp3[14]).triggerHapticFeedback, HapticFeedbackTypes: tmp2(tmp3[14]).HapticFeedbackTypes };
  Ze.__workletHash = 11115846398818;
  Ze.__initData = __initData13;
  ({ runOnJS: tmp2(tmp3[8]).runOnJS, triggerHapticFeedback: tmp2(tmp3[14]).triggerHapticFeedback, HapticFeedbackTypes: tmp2(tmp3[14]).HapticFeedbackTypes });
  const animatedReaction7 = tmp2Result46.useAnimatedReaction($e, Ze);
  const items6 = [tmp14, dismissToPIPGestureRef, focused, id, sharedValue2, sharedValue3, sharedValue4, callback3, sharedValue5, sharedValue9, derivedValue, sharedValue6, callback4, callback5, sharedValue7, sharedValue8, derivedValue3, setFocused, hideControls, controlsSpecs, showControls, derivedValue2];
  const memo = obj2.useMemo(() => {
    const Gesture = id(sharedCoords[15]).Gesture;
    const Simultaneous = Gesture.Simultaneous;
    const Gesture2 = id(sharedCoords[15]).Gesture;
    const Exclusive = Gesture2.Exclusive;
    const Gesture3 = id(sharedCoords[15]).Gesture;
    const TapResult = Gesture3.Tap();
    const numberOfTapsResult = TapResult.numberOfTaps(2);
    class O {
      constructor(arg0, fail) {
        return fail.fail();
      }
    }
    O.__closure = {};
    O.__workletHash = 17368742583362;
    O.__initData = __initData2;
    const onTouchesMoveResult = numberOfTapsResult.onTouchesMove(O);
    class E {
      constructor() {
        if (derivedValue3.get()) {
          const value = closure_1_2.get();
          id = undefined;
          if (value != null) {
            id = value.id;
          }
          if (id !== closure_1_0) {
            const obj2 = id(focused[8]);
            obj2.runOnJS(setFocused)(tmp7);
          } else {
            const obj = id(focused[8]);
            obj.runOnJS(setFocused)(null);
          }
        } else {
          callback3();
        }
      }
    }
    let obj = { isInDefaultZoom: derivedValue3, resetOnLayoutChange: callback3, focused, id, runOnJS: id(sharedCoords[8]).runOnJS, setFocused };
    E.__closure = obj;
    E.__workletHash = 10743965328356;
    E.__initData = __initData;
    const onStartResult = onTouchesMoveResult.onStart(E);
    const Gesture4 = id(sharedCoords[15]).Gesture;
    const TapResult1 = Gesture4.Tap();
    class C {
      constructor(arg0, fail) {
        return fail.fail();
      }
    }
    C.__closure = {};
    C.__workletHash = 8766053850176;
    C.__initData = __initData4;
    const onTouchesMoveResult1 = TapResult1.onTouchesMove(C);
    class V {
      constructor() {
        if (controlsSpecs.get().mode === setIsFocusedVideoZoomed.HIDDEN) {
          const obj2 = id(focused[8]);
          obj2.runOnJS(showControls)({ debounce: true });
        } else {
          const obj = id(focused[8]);
          obj.runOnJS(hideControls)({ debounce: true });
        }
      }
    }
    let obj2 = { controlsSpecs, VoicePanelControlsModes: mode, runOnJS: id(sharedCoords[8]).runOnJS, showControls, hideControls };
    V.__closure = obj2;
    V.__workletHash = 11260765819879;
    V.__initData = __initData3;
    const ExclusiveResult = Exclusive(onStartResult, onTouchesMoveResult1.onStart(V));
    const Gesture5 = id(sharedCoords[15]).Gesture;
    const PinchResult = Gesture5.Pinch();
    const enabledResult = PinchResult.enabled(!shouldMakeActive);
    class I {
      constructor(arg0, fail) {
        const value = focused.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        if (id !== closure_1_0) {
          fail.fail();
        }
      }
    }
    I.__closure = { focused, id };
    I.__workletHash = 8765017804058;
    I.__initData = __initData8;
    const onTouchesDownResult = enabledResult.onTouchesDown(I);
    class D {
      constructor() {
        const result = sharedValue5.set(sharedValue5.get() + 1);
        const result1 = sharedValue8.set(false);
        const result2 = sharedValue9.set(null);
      }
    }
    const obj3 = { numGesturesActive: sharedValue5, isInPanToZoom: sharedValue8, currentSizeThreshold: sharedValue9 };
    D.__closure = obj3;
    D.__workletHash = 3449238089307;
    D.__initData = __initData7;
    const fn = function w(scaleChange) {
      set = sharedValue2.set;
      const value = sharedValue2.get();
      const value2 = sharedValue2.get();
      scaleChange = scaleChange.scaleChange;
      if (typeof sharedValue4 === "function") {
        let sum = scaleChange;
        if (value2 < tmp3) {
          const diff = 1 - value2;
          const _Math = Math;
          const diff1 = scaleChange - 1;
          sum = 1 + diff1 * Math.max(0.1, 1 - diff * diff * 5);
        }
        const result = set(value * sum);
        const diff2 = scaleChange.focalX - derivedValue.get().width / 2;
        const diff3 = scaleChange.focalY - derivedValue.get().height / 2;
        const diff4 = scaleChange.scaleChange - 1;
        const result1 = -1 * diff2 * diff4 / obj.get();
        const diff5 = scaleChange.scaleChange - 1;
        const result2 = -1 * diff3 * diff5 / obj.get();
        const result3 = sharedValue3.set(sharedValue3.get() + result1);
        const result4 = getScaleChangeWithOverscroll.set(getScaleChangeWithOverscroll.get() + result2);
        const result5 = sharedValue6.set(callback4());
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    const obj4 = { scale: sharedValue2, getScaleChangeWithOverscroll, fitScale: derivedValue2, containerLayout: derivedValue, translateX: sharedValue3, translateY: sharedValue4, isInSnap: sharedValue6, isInCoverSnap: callback4 };
    fn.__closure = obj4;
    fn.__workletHash = 2077670235308;
    fn.__initData = __initData6;
    const fn2 = function v() {
      const result = sharedValue5.set(sharedValue5.get() - 1);
      callback5();
    };
    const obj5 = { numGesturesActive: sharedValue5, handleMovementEnd: callback5 };
    fn2.__closure = obj5;
    fn2.__workletHash = 5853458336611;
    fn2.__initData = __initData5;
    const onStartResult1 = onTouchesDownResult.onStart(D);
    const onChangeResult = onStartResult1.onChange(fn);
    const onEndResult = onChangeResult.onEnd(fn2);
    const Gesture6 = id(sharedCoords[15]).Gesture;
    const PanResult = Gesture6.Pan();
    const enabledResult1 = PanResult.enabled(!shouldMakeActive);
    let result = enabledResult1.requireExternalGestureToFail(dismissToPIPGestureRef);
    const fn3 = function f(arg0, fail) {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id !== closure_1_0) {
        fail.fail();
      }
    };
    fn3.__closure = { focused, id };
    fn3.__workletHash = 2184905113389;
    fn3.__initData = __initData14;
    const averageTouchesResult = result.averageTouches(true);
    const onTouchesDownResult1 = averageTouchesResult.onTouchesDown(fn3);
    class S {
      constructor() {
        const timestamp = Date.now();
        const result = sharedValue8.set(timestamp - sharedValue7.get() <= 250);
        const result1 = sharedValue7.set(Date.now());
      }
    }
    const obj6 = { lastTapTimestamp: sharedValue7, PAN_TO_ZOOM_TAP_TIME_MILLIS: 250, isInPanToZoom: sharedValue8 };
    S.__closure = obj6;
    S.__workletHash = 7713579688732;
    S.__initData = __initData13;
    const fn4 = function c() {
      if (sharedValue8.get()) {
        const obj = id(focused[8]);
        obj.runOnJS(hideControls)();
      }
      const result = sharedValue5.set(sharedValue5.get() + 1);
      const result1 = sharedValue9.set(null);
    };
    const onBeginResult = onTouchesDownResult1.onBegin(S);
    fn4.__closure = { isInPanToZoom: sharedValue8, runOnJS: id(sharedCoords[8]).runOnJS, hideControls, numGesturesActive: sharedValue5, currentSizeThreshold: sharedValue9 };
    fn4.__workletHash = 16349993539830;
    fn4.__initData = __initData12;
    ({ isInPanToZoom: sharedValue8, runOnJS: id(sharedCoords[8]).runOnJS, hideControls, numGesturesActive: sharedValue5, currentSizeThreshold: sharedValue9 });
    const fn5 = function s(changeY) {
      if (sharedValue8.get()) {
        const result = changeY.changeY * sharedValue2;
        set3 = closure_1_15.set;
        const value = closure_1_15.get();
        const value4 = closure_1_15.get();
        if (typeof sharedValue4 === "function") {
          const sum = 1 + result;
          let sum1 = sum;
          if (value4 < tmp15) {
            const diff = 1 - value4;
            const _Math = Math;
            sum1 = 1 + (sum - 1) * Math.max(0.1, 1 - diff * diff * 5);
          }
          set3(value * sum1);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        set = sharedValue3.set;
        const value5 = sharedValue3.get();
        const result1 = set(value5 + changeY.changeX / closure_1_15.get());
        set2 = getScaleChangeWithOverscroll.set;
        const value6 = getScaleChangeWithOverscroll.get();
        set2(value6 + changeY.changeY / closure_1_15.get());
      }
      const result2 = sharedValue6.set(callback4());
    };
    const obj8 = { isInPanToZoom: sharedValue8, PAN_TO_ZOOM_SCALE_FACTOR: pIPState, scale: sharedValue2, getScaleChangeWithOverscroll, fitScale: derivedValue2, translateX: sharedValue3, translateY: sharedValue4, isInSnap: sharedValue6, isInCoverSnap: callback4 };
    fn5.__closure = obj8;
    fn5.__workletHash = 17282206686388;
    fn5.__initData = __initData11;
    const fn6 = function n(velocityX) {
      const result = sharedValue5.set(sharedValue5.get() - 1);
      set = sharedValue3.set;
      const withSpring = id(focused[12]).withSpring;
      id(focused[12]);
      const value = sharedValue3.get();
      const result1 = velocityX.velocityX * showControls;
      const result2 = set(withSpring(value + result1 / sharedValue2.get(), dismissToPIPGestureRef));
      set2 = getScaleChangeWithOverscroll.set;
      const withSpring2 = id(focused[12]).withSpring;
      id(focused[12]);
      const value2 = getScaleChangeWithOverscroll.get();
      const result3 = velocityX.velocityY * showControls;
      set2(withSpring2(value2 + result3 / sharedValue2.get(), dismissToPIPGestureRef));
      callback5();
    };
    const onStartResult2 = onBeginResult.onStart(fn4);
    const onChangeResult1 = onStartResult2.onChange(fn5);
    fn6.__closure = { numGesturesActive: sharedValue5, translateX: sharedValue3, withSpring: id(sharedCoords[12]).withSpring, FLING_VELOCITY_SCALING: sharedValue1, scale: sharedValue2, SCALE_PHYSICS, translateY: sharedValue4, handleMovementEnd: callback5 };
    fn6.__workletHash = 10045783163820;
    fn6.__initData = __initData10;
    ({ numGesturesActive: sharedValue5, translateX: sharedValue3, withSpring: id(sharedCoords[12]).withSpring, FLING_VELOCITY_SCALING: sharedValue1, scale: sharedValue2, SCALE_PHYSICS, translateY: sharedValue4, handleMovementEnd: callback5 });
    const fn7 = function t() {
      const result = sharedValue8.set(false);
    };
    fn7.__closure = { isInPanToZoom: sharedValue8 };
    fn7.__workletHash = 2318423816868;
    fn7.__initData = __initData9;
    const onEndResult1 = onChangeResult1.onEnd(fn6);
    return Simultaneous(ExclusiveResult, onEndResult, onEndResult1.onFinalize(fn7));
  }, items6);
  let value = flag.get();
  __initData = value;
  const items7 = [streamId, isCamera, sharedValue2, sharedValue1, mode, value];
  callback6 = obj2.useCallback(() => {
    let tmp2 = null == streamId;
    const tmp = streamId;
    if (!tmp2) {
      tmp2 = isCamera;
    }
    if (!tmp2) {
      tmp2 = mode.get() !== VoicePanelModes.PANEL;
    }
    if (!tmp2) {
      size = { width: sharedValue1.get().width * c24, height: sharedValue1.get().height * c24 };
      const updateVideoSize = VideoActionCreators.updateVideoSize;
      VideoActionCreators;
      updateVideoSize(tmp, size, sharedValue2.get());
    }
  }, items7);
  const tmp2Result47 = tmp2(tmp3[8]);
  class Qe {
    constructor() {
      const items = [sharedValue2.get(), sharedValue1.get(), mode.get()];
      return items;
    }
  }
  Qe.__closure = { scale: sharedValue2, videoDimensions: sharedValue1, mode };
  Qe.__workletHash = 16492795532326;
  Qe.__initData = __initData17;
  class Ke {
    constructor(safeAreaState, current) {
      if (null != streamId) {
        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
        cheapWorkletShallowEqual2;
        const tmp = current;
        const tmp2 = require;
        if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
          const tmp2Result = tmp2(4566);
          tmp2Result.runOnJS(callback6)();
        }
      }
    }
  }
  Ke.__closure = { streamId, cheapWorkletShallowEqual: tmp2(tmp3[13]).cheapWorkletShallowEqual, runOnJS: tmp2(tmp3[8]).runOnJS, respondToVideoSizeUpdate: callback6 };
  Ke.__workletHash = 5259362546534;
  Ke.__initData = __initData18;
  ({ streamId, cheapWorkletShallowEqual: tmp2(tmp3[13]).cheapWorkletShallowEqual, runOnJS: tmp2(tmp3[8]).runOnJS, respondToVideoSizeUpdate: callback6 });
  const animatedReaction8 = tmp2Result47.useAnimatedReaction(Qe, Ke);
  const items8 = [callback6];
  const effect = obj2.useEffect(() => {
    let obj = streamId(sharedCoords[23]);
    let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
      const tmp = arg0;
      if (!tmp) {
        callback6();
      }
    });
    return () => {
      const obj = closure_0;
      if (closure_0 != null) {
        obj.remove();
      }
    };
  }, items8);
  function dt() {
    let height;
    let items;
    let num2;
    let width;
    const value = sharedValue1.get();
    ({ width, height } = value);
    size = pIPState;
    let result3 = height;
    let result1 = width;
    if (pIPState.mode === VoicePanelPIPModes.IN_APP) {
      const scale = size.scale;
      const value2 = scale.get();
      if (width > height) {
        const result = width * (size.height * value2 / height);
        result1 = result / sharedValue2.get();
        const result2 = size.height * value2;
        result3 = result2 / sharedValue2.get();
      } else {
        const result4 = height * (size.width * value2 / width);
        result3 = result4 / sharedValue2.get();
        const result5 = size.width * value2;
        result1 = result5 / sharedValue2.get();
      }
    }
    const size1 = { width: result1, height: result3, opacity: num2, transform: items };
    let num = 1;
    num2 = 1;
    if (sharedValue.get()) {
      num2 = 0;
    }
    items = [{ scale: sharedValue2.get() }, , , ];
    ({ scale: sharedValue2.get() });
    items[1] = { translateX: sharedValue3.get() };
    ({ translateX: sharedValue3.get() });
    items[2] = { translateY: sharedValue4.get() };
    ({ translateY: sharedValue4.get() });
    const tmp10 = flag;
    if (tmp10) {
      num = -1;
    }
    items[3] = { scaleX: num };
    return size1;
  }
  const obj12 = { videoDimensions: sharedValue1, pipState: pIPState, VoicePanelPIPModes: focused, scale: sharedValue2, disableAnimations: sharedValue, translateX: sharedValue3, translateY: sharedValue4, mirror: flag };
  dt.__closure = obj12;
  dt.__workletHash = 4341344805541;
  dt.__initData = __initData19;
  const tmp2Result48 = tmp2(tmp3[8]);
  const animatedStyle = tmp2Result48.useAnimatedStyle(dt);
  const tmp2Result49 = tmp2(tmp3[24]);
  token = tmp2Result49.useToken(tmp5(tmp3[25]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const useSharedValue2 = tmp2(tmp3[8]).useSharedValue;
  let num = 0;
  tmp2(tmp3[8]);
  const tmp53 = flag2;
  if (mode.get() !== flag2.PIP) {
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
  sharedValue21 = useSharedValue2(num);
  function _t() {
    const obj = { inPip: mode.get() === VoicePanelModes.PIP, isFocused: id === id };
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    return obj;
  }
  _t.__closure = { mode, VoicePanelModes: tmp53, focused, id };
  _t.__workletHash = 16147365192890;
  _t.__initData = __initData20;
  function ut(inPip, isFocused) {
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = isFocused;
    if (!cheapWorkletShallowEqual(inPip, tmp4)) {
      if (!inPip.inPip) {
        if (!inPip.isFocused) {
          isFocused = undefined;
          if (isFocused != null) {
            isFocused = isFocused.isFocused;
          }
          let num2 = 0.3;
          set = sharedValue21.set;
          if (true === isFocused) {
            const withDelay = ReanimatedRexport2.withDelay;
            ReanimatedRexport2;
            const tmpResult2 = timing;
            num2 = withDelay(300, tmpResult2.withTiming(0.3, { duration: 0 }, "animate-never"));
          }
          const result = set(num2);
        }
      }
      const result1 = sharedValue21.set(0);
    }
  }
  const tmp2Result51 = tmp2(tmp3[8]);
  ut.__closure = { cheapWorkletShallowEqual: tmp2(tmp3[13]).cheapWorkletShallowEqual, strokeOpacity: sharedValue21, withDelay: tmp2(tmp3[8]).withDelay, withTiming: tmp2(tmp3[26]).withTiming };
  ut.__workletHash = 5119744299592;
  ut.__initData = __initData21;
  ({ cheapWorkletShallowEqual: tmp2(tmp3[13]).cheapWorkletShallowEqual, strokeOpacity: sharedValue21, withDelay: tmp2(tmp3[8]).withDelay, withTiming: tmp2(tmp3[26]).withTiming });
  const animatedReaction9 = tmp2Result51.useAnimatedReaction(_t, ut);
  function ft() {
    let rect1;
    if (sharedValue6.get()) {
      const rect = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, borderWidth, overflow: "hidden", borderColor: "white", opacity: 0.5 };
      rect1 = rect;
    } else {
      rect1 = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderRadius: token + 2, overflow: "hidden", borderColor: "white", opacity: sharedValue21.get() };
    }
    return rect1;
  }
  ft.__closure = { isInSnap: sharedValue6, SNAP_EDGE_INNER_THRESHOLD: tmp36, borderRadius: token, strokeOpacity: sharedValue21 };
  ft.__workletHash = 5172898891721;
  ft.__initData = __initData22;
  function mt(arg0) {
    return layout(arg0, sharedValue.get());
  }
  mt.__closure = { layout, disableAnimations: sharedValue };
  mt.__workletHash = 12145775353383;
  mt.__initData = __initData23;
  const items9 = [layout, sharedValue];
  const tmp2Result52 = tmp2(tmp3[8]);
  const animatedStyle1 = tmp2Result52.useAnimatedStyle(ft);
  const callback7 = obj2.useCallback(mt, items9);
  const obj14 = { gesture: memo, children: tmp61(tmp5Result, obj15) };
  const GestureDetector = tmp2(tmp3[15]).GestureDetector;
  obj15 = { style: items10, layout: callback7, children: items12 };
  items10 = [tmp.wrapper, style];
  const obj16 = { style: items11, layout: callback7, children: layoutManager(tmp64, obj17) };
  items11 = [tmp.animatedWrapperStyles, animatedStyle];
  obj17 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: tmp65, onReady: callback, onSize: callback1, style: tmp.video, layout: callback7 };
  tmp65 = null;
  tmp5Result = tmp5(tmp3[27]);
  const tmp5Result2 = tmp5(tmp3[27]);
  tmp61 = windowDimensions;
  tmp64 = c16;
  if (!tmp12) {
    tmp65 = streamId;
  }
  items12 = [layoutManager(tmp5Result2, obj16), ];
  if (tmp14) {
    const obj18 = { animate: true, style: tmp.spinner };
    tmp60Result = tmp60(tmp5(tmp3[28]), obj18);
  } else {
    const obj19 = { style: animatedStyle1, layout: callback7, pointerEvents: "none" };
    tmp60Result = tmp60(tmp5(tmp3[27]), obj19);
  }
  items12[1] = tmp60Result;
  return layoutManager(GestureDetector, obj14);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx");

export default memoResult;
