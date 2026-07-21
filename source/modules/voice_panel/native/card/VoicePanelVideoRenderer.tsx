// Module ID: 15690
// Function ID: 119904
// Name: getScaleChangeWithOverscroll
// Dependencies: [0, 0, 0, 0, 0, 0]

// Module 15690 (getScaleChangeWithOverscroll)
import closure_3 from "result";
import importAllResult from "result";
import { PixelRatio } from "result";
import result from "result";
import { VoicePanelControlsModes } from "result";
import { VoicePanelPIPModes } from "result";

({ VoicePanelModes: closure_6, MODE_CHANGE_PHYSICS: closure_7 } = result);
const SCALE_PHYSICS = arg1(dependencyMap[6]).SCALE_PHYSICS;
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]).createAnimatedComponent(importDefault(dependencyMap[9]));
let closure_14 = { code: "function getScaleChangeWithOverscroll_VoicePanelVideoRendererTsx1(currentScale,scaleChange,fitScale){const{MIN_OVERSCROLL,OVERSCOLL_INTENSITY_FACTOR}=this.__closure;if(currentScale>=fitScale){return scaleChange;}const underScale=1-currentScale;const factor=Math.max(MIN_OVERSCROLL,1-underScale*underScale*OVERSCOLL_INTENSITY_FACTOR);return 1+(scaleChange-1)*factor;}" };
let closure_15 = () => {
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
  getScaleChangeWithOverscroll.__closure = { -9223372036854775808: 0.96, 9223372036854775807: "PLUM_19" };
  getScaleChangeWithOverscroll.__workletHash = 8727721301304;
  getScaleChangeWithOverscroll.__initData = closure_14;
  return getScaleChangeWithOverscroll;
}();
const importDefaultResult = importDefault(dependencyMap[8]);
let closure_16 = arg1(dependencyMap[10]).createStyles({ wrapper: {}, animatedWrapperStyles: { position: "absolute" }, video: {}, spinner: { position: "/assets/modules/voice_panel/native/images", top: 24, left: 24, right: null, bottom: "e57414c7a7beaf43becfa6bd320e5461", flexDirection: "vr", "Bool(true)": "png" } });
let closure_17 = { code: "function VoicePanelVideoRendererTsx2(){const{containerLayout,videoDimensions}=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
let closure_18 = { code: "function VoicePanelVideoRendererTsx3(){const{containerLayout,videoDimensions}=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}" };
let closure_19 = { code: "function VoicePanelVideoRendererTsx4(){const{translateX,translateY,scale,fitScale,coverScale}=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;}" };
let closure_20 = { code: "function VoicePanelVideoRendererTsx5(forcedMode){const{scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold}=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);}" };
let closure_21 = { code: "function VoicePanelVideoRendererTsx6(){const{focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize}=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);}" };
let closure_22 = { code: "function VoicePanelVideoRendererTsx7(){const{containerLayout}=this.__closure;return containerLayout.get();}" };
let closure_23 = { code: "function VoicePanelVideoRendererTsx8(containerLayout,previous){const{cheapWorkletShallowEqual,focused,id,resetOnLayoutChange}=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout!==previous&&previous!=null){resetOnLayoutChange();}}" };
let closure_24 = { code: "function VoicePanelVideoRendererTsx9(){const{coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD}=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;}" };
let closure_25 = { code: "function VoicePanelVideoRendererTsx10(){const{numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY}=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));}" };
let closure_26 = { code: "function VoicePanelVideoRendererTsx11(){const{focused,id,isInDefaultZoom,isInPanToZoom}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());}" };
let closure_27 = { code: "function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous){const{setIsFocusedVideoZoomed}=this.__closure;if(isFocusedZoomed===previous){return;}setIsFocusedVideoZoomed(isFocusedZoomed);}" };
let closure_28 = { code: "function VoicePanelVideoRendererTsx13(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
let closure_29 = { code: "function VoicePanelVideoRendererTsx14(isFocused,previous){const{resetOnLayoutChange}=this.__closure;if(isFocused===previous){return;}resetOnLayoutChange();}" };
let closure_30 = { code: "function VoicePanelVideoRendererTsx15(){const{mode}=this.__closure;return mode.get();}" };
let closure_31 = { code: "function VoicePanelVideoRendererTsx16(mode,previous){const{resetOnLayoutChange}=this.__closure;if(mode===previous){return;}resetOnLayoutChange();}" };
let closure_32 = { code: "function VoicePanelVideoRendererTsx17(){const{videoDimensions}=this.__closure;return videoDimensions.get();}" };
let closure_33 = { code: "function VoicePanelVideoRendererTsx18(layout,previous){const{currentSizeThreshold,resetOnLayoutChange}=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous===null||previous===void 0?void 0:previous.width)&&layout.height===(previous===null||previous===void 0?void 0:previous.height)){return;}resetOnLayoutChange();}" };
let closure_34 = { code: "function VoicePanelVideoRendererTsx19(){const{coverScale}=this.__closure;return coverScale.get();}" };
let closure_35 = { code: "function VoicePanelVideoRendererTsx20(current,previous){const{currentSizeThreshold,resetToDefaultSize}=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous){return;}resetToDefaultSize(_currentSizeThreshold);}" };
let closure_36 = { code: "function VoicePanelVideoRendererTsx21(){const{isInSnap}=this.__closure;return isInSnap.get();}" };
let closure_37 = { code: "function VoicePanelVideoRendererTsx22(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous){return;}if(!current){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
let closure_38 = { code: "function VoicePanelVideoRendererTsx23(){const{isInDefaultZoom,resetOnLayoutChange,focused,id,runOnJS,setFocused}=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){runOnJS(setFocused)(id);}else{runOnJS(setFocused)(null);}}" };
let closure_39 = { code: "function VoicePanelVideoRendererTsx24(e,manager){return manager.fail();}" };
let closure_40 = { code: "function VoicePanelVideoRendererTsx25(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_41 = { code: "function VoicePanelVideoRendererTsx26(e,manager){return manager.fail();}" };
let closure_42 = { code: "function VoicePanelVideoRendererTsx27(){const{numGesturesActive,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();}" };
let closure_43 = { code: "function VoicePanelVideoRendererTsx28(event){const{scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event.scaleChange,fitScale.get()));const startingFocalFromCenterX=event.focalX-containerLayout.get().width/2;const startingFocalFromCenterY=event.focalY-containerLayout.get().height/2;const zoomCenteringX=-1*startingFocalFromCenterX*(event.scaleChange-1)/scale.get();const zoomCenteringY=-1*startingFocalFromCenterY*(event.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());}" };
let closure_44 = { code: "function VoicePanelVideoRendererTsx29(){const{numGesturesActive,isInPanToZoom,currentSizeThreshold}=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);}" };
let closure_45 = { code: "function VoicePanelVideoRendererTsx30(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();}}" };
let closure_46 = { code: "function VoicePanelVideoRendererTsx31(){const{isInPanToZoom}=this.__closure;isInPanToZoom.set(false);}" };
let closure_47 = { code: "function VoicePanelVideoRendererTsx32(event){const{numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();}" };
let closure_48 = { code: "function VoicePanelVideoRendererTsx33(event){const{isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;if(isInPanToZoom.get()){const scaleChange=1+event.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event.changeX/scale.get());translateY.set(translateY.get()+event.changeY/scale.get());}isInSnap.set(isInCoverSnap());}" };
let closure_49 = { code: "function VoicePanelVideoRendererTsx34(){const{isInPanToZoom,runOnJS,hideControls,numGesturesActive,currentSizeThreshold}=this.__closure;if(isInPanToZoom.get()){runOnJS(hideControls)();}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);}" };
let closure_50 = { code: "function VoicePanelVideoRendererTsx35(){const{lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom}=this.__closure;const hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());}" };
let closure_51 = { code: "function VoicePanelVideoRendererTsx36(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();return;}}" };
let closure_52 = { code: "function shouldMakeActive_VoicePanelVideoRendererTsx37({mode:mode,focusedId:focusedId,selfId:selfId,isScrollVisible:isScrollVisible}){const{VoicePanelModes}=this.__closure;const isPIP=mode===VoicePanelModes.PIP;if(!isScrollVisible||isPIP||focusedId!=null&&focusedId!==selfId){return false;}return true;}" };
let closure_53 = () => {
  function shouldMakeActive(focusedId) {
    focusedId = focusedId.focusedId;
    let tmp = !focusedId.isScrollVisible;
    if (!tmp) {
      tmp = focusedId.mode === constants.PIP;
    }
    if (!tmp) {
      tmp = null != focusedId && focusedId !== focusedId.selfId;
      const tmp3 = null != focusedId && focusedId !== focusedId.selfId;
    }
    return !tmp;
  }
  shouldMakeActive.__closure = { VoicePanelModes: closure_6 };
  shouldMakeActive.__workletHash = 14556501664557;
  shouldMakeActive.__initData = closure_52;
  return shouldMakeActive;
}();
let closure_54 = { code: "function VoicePanelVideoRendererTsx38(){const{mode,focused,isScrollVisible,streamId}=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];}" };
let closure_55 = { code: "function VoicePanelVideoRendererTsx39(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setHasActiveVideoOutputSink,shouldMakeActive,id}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode,focusedId,isScrollVisible,streamId]=props;if(streamId==null)return;runOnJS(setHasActiveVideoOutputSink)(streamId,shouldMakeActive({mode:mode,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible}));}" };
let closure_56 = { code: "function VoicePanelVideoRendererTsx40(){const{focused,id,windowDimensions,sharedCoords}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};}" };
let closure_57 = { code: "function VoicePanelVideoRendererTsx41(){const{scale,videoDimensions,mode}=this.__closure;return[scale.get(),videoDimensions.get(),mode.get()];}" };
let closure_58 = { code: "function VoicePanelVideoRendererTsx42(props,previous){const{streamId,cheapWorkletShallowEqual,runOnJS,respondToVideoSizeUpdate}=this.__closure;if(streamId==null)return;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(respondToVideoSizeUpdate)();}" };
let closure_59 = { code: "function VoicePanelVideoRendererTsx43(){const{videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror}=this.__closure;let{width:width,height:height}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){if(width>height){width=width*(pipState.height/height)/scale.get();height=pipState.height/scale.get();}else{height=height*(pipState.width/width)/scale.get();width=pipState.width/scale.get();}}return{width:width,height:height,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};}" };
let closure_60 = { code: "function VoicePanelVideoRendererTsx44(){const{mode,VoicePanelModes,focused,id}=this.__closure;var _focused$get;return{inPip:mode.get()===VoicePanelModes.PIP,isFocused:((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id};}" };
let closure_61 = { code: "function VoicePanelVideoRendererTsx45(curr,prev){const{cheapWorkletShallowEqual,strokeOpacity,withDelay,withTiming}=this.__closure;if(cheapWorkletShallowEqual(curr,prev!==null&&prev!==void 0?prev:undefined))return;if(curr.inPip||curr.isFocused){strokeOpacity.set(0);return;}const shouldDelay=(prev===null||prev===void 0?void 0:prev.isFocused)===true;strokeOpacity.set(shouldDelay?withDelay(300,withTiming(0.3,{duration:0},'animate-never')):0.3);}" };
let closure_62 = { code: "function VoicePanelVideoRendererTsx46(){const{isInSnap,SNAP_EDGE_INNER_THRESHOLD,borderRadius,strokeOpacity}=this.__closure;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:borderRadius+2,overflow:'hidden',borderColor:'white',opacity:strokeOpacity.get()};}" };
let closure_63 = { code: "function VoicePanelVideoRendererTsx47(values){const{layout,disableAnimations}=this.__closure;return layout(values,disableAnimations.get());}" };
const obj3 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo(function VideoRenderer(id) {
  let layoutManager;
  let sharedCoords;
  let userId;
  let videoSpinnerContext;
  id = id.id;
  const arg1 = id;
  const streamId = id.streamId;
  const importDefault = streamId;
  ({ userId, videoSpinnerContext, sharedCoords } = id);
  const dependencyMap = sharedCoords;
  const isScrollVisible = id.isScrollVisible;
  let callback = isScrollVisible;
  const isCamera = id.isCamera;
  let flag = id.mirror;
  if (flag === undefined) {
    flag = false;
  }
  const PixelRatio = flag;
  let flag2 = id.focusOnReady;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = id.paused;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const layout = id.layout;
  let VoicePanelControlsModes;
  let VoicePanelPIPModes;
  let closure_10;
  layoutManager = undefined;
  let windowDimensions;
  let closure_13;
  let closure_14;
  let closure_15;
  let callback2;
  let closure_17;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  let closure_25;
  let closure_26;
  let closure_27;
  const tmp = callback2();
  let obj = arg1(dependencyMap[16]);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VoicePanelVideoRenderer" });
  const context = importAllResult.useContext(importDefault(dependencyMap[11]));
  const mode = context.mode;
  VoicePanelControlsModes = mode;
  const focused = context.focused;
  VoicePanelPIPModes = focused;
  ({ setFocused: closure_10, layoutManager } = context);
  windowDimensions = context.windowDimensions;
  let obj1 = arg1(dependencyMap[8]);
  const sharedValue = obj1.useSharedValue(true);
  closure_13 = sharedValue;
  let obj2 = arg1(dependencyMap[8]);
  obj = {};
  const merged = Object.assign(layoutManager.getTargetDimensions(id));
  const sharedValue1 = obj2.useSharedValue(obj);
  closure_14 = sharedValue1;
  let obj4 = arg1(dependencyMap[17]);
  const pIPState = obj4.usePIPState();
  closure_15 = pIPState;
  const tmp8 = callback(isCamera.useState(true), 2);
  const first = tmp8[0];
  callback2 = tmp8[1];
  closure_17 = importAllResult.useRef(() => {
    if (flag2) {
      _undefined(id);
    }
  });
  obj = { streamId, userId, loading: first, videoSpinnerContext, paused: flag3, streamKey: id.streamKey };
  const onReady = importDefault(dependencyMap[18])(obj).onReady;
  closure_18 = onReady;
  importDefault(dependencyMap[19])({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, loading: first });
  const items = [onReady];
  callback = importAllResult.useCallback(() => {
    callback(false);
    ref.current();
    onReady();
  }, items);
  let obj6 = arg1(dependencyMap[20]);
  const setHasActiveVideoOutputSink = obj6.useSetHasActiveVideoOutputSink(context.streamOutputSinkStack);
  closure_19 = setHasActiveVideoOutputSink;
  let obj7 = arg1(dependencyMap[8]);
  function qe() {
    const items = [mode.get(), , , ];
    const value = focused.get();
    let id;
    if (null != value) {
      id = value.id;
    }
    items[1] = id;
    items[2] = isScrollVisible.get();
    items[3] = streamId;
    return items;
  }
  qe.__closure = { mode, focused, isScrollVisible, streamId };
  qe.__workletHash = 3558943323767;
  qe.__initData = closure_54;
  class Je {
    constructor(arg0, arg1) {
      obj = id(sharedCoords[13]);
      tmp = undefined;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(id, tmp)) {
        tmp2 = isScrollVisible;
        num = 4;
        tmp3 = isScrollVisible(id, 4);
        num2 = 0;
        num3 = 1;
        num4 = 2;
        num5 = 3;
        tmp7 = tmp3[3];
        if (null != tmp7) {
          tmp8 = id;
          tmp9 = sharedCoords;
          num6 = 8;
          obj2 = id(sharedCoords[8]);
          tmp10 = closure_19;
          tmp12 = closure_53;
          obj = {};
          obj.mode = tmp4;
          obj.focusedId = tmp5;
          tmp13 = id;
          obj.selfId = id;
          obj.isScrollVisible = tmp6;
          runOnJSResult = obj2.runOnJS(closure_19);
          tmp11Result = runOnJSResult(tmp7, closure_53(obj));
        }
      }
      return;
    }
  }
  obj1 = { cheapWorkletArrayShallowEqual: arg1(dependencyMap[13]).cheapWorkletArrayShallowEqual, runOnJS: arg1(dependencyMap[8]).runOnJS, setHasActiveVideoOutputSink, shouldMakeActive: closure_53, id };
  Je.__closure = obj1;
  Je.__workletHash = 12089612803324;
  Je.__initData = closure_55;
  const animatedReaction = obj7.useAnimatedReaction(qe, Je);
  const items1 = [sharedValue1, layoutManager, id, sharedValue];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent);
    streamId(sharedCoords[21])(sharedValue1, { width, height });
    layoutManager.setTargetDimensions(id, width, height);
    if (sharedValue.get()) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = closure_13.set(false);
      }, 34);
    }
  }, items1);
  let obj9 = arg1(dependencyMap[8]);
  class Be {
    constructor() {
      value = focused.get();
      id = undefined;
      if (null != value) {
        id = value.id;
      }
      if (id === id) {
        obj = {};
        tmp4 = windowDimensions;
        obj.width = windowDimensions.get().width;
        tmp5 = windowDimensions;
        obj.height = windowDimensions.get().height;
      } else {
        obj = {};
        tmp3 = sharedCoords;
        obj.width = sharedCoords.get().width;
        obj.height = sharedCoords.get().height;
      }
      return obj;
    }
  }
  Be.__closure = { focused, id, windowDimensions, sharedCoords };
  Be.__workletHash = 9631392718391;
  Be.__initData = closure_56;
  obj2 = { id, isCamera, focused, mode, loading: first, containerLayout: obj9.useDerivedValue(Be), videoDimensions: sharedValue1, disableAnimations: sharedValue };
  const tmp15 = function useGestures(id) {
    id = id.id;
    let isCamera = id.isCamera;
    const streamId = isCamera;
    let focused = id.focused;
    const sharedCoords = focused;
    let mode = id.mode;
    const isScrollVisible = mode;
    const loading = id.loading;
    isCamera = loading;
    const containerLayout = id.containerLayout;
    const videoDimensions = id.videoDimensions;
    const disableAnimations = id.disableAnimations;
    const layout = disableAnimations;
    const context = isCamera.useContext(streamId(sharedCoords[11]));
    const setIsFocusedVideoZoomed = context.setIsFocusedVideoZoomed;
    mode = setIsFocusedVideoZoomed;
    let windowDimensions = context.windowDimensions;
    focused = windowDimensions;
    const dismissToPIPGestureRef = context.dismissToPIPGestureRef;
    let closure_10 = dismissToPIPGestureRef;
    const setFocused = context.setFocused;
    const layoutManager = setFocused;
    const hideControls = context.hideControls;
    windowDimensions = hideControls;
    const controlsSpecs = context.controlsSpecs;
    let sharedValue = controlsSpecs;
    const showControls = context.showControls;
    let sharedValue1 = showControls;
    let obj = id(sharedCoords[8]);
    sharedValue = obj.useSharedValue(1);
    const pIPState = sharedValue;
    let obj1 = id(sharedCoords[8]);
    sharedValue1 = obj1.useSharedValue(0);
    let closure_16 = sharedValue1;
    let obj2 = id(sharedCoords[8]);
    let sharedValue2 = obj2.useSharedValue(0);
    let closure_17 = sharedValue2;
    let obj3 = id(sharedCoords[8]);
    const sharedValue3 = obj3.useSharedValue(0);
    const onReady = sharedValue3;
    const sharedValue4 = id(sharedCoords[8]).useSharedValue(false);
    const setHasActiveVideoOutputSink = sharedValue4;
    const obj5 = id(sharedCoords[8]);
    const sharedValue5 = id(sharedCoords[8]).useSharedValue(0);
    const scale = sharedValue5;
    const obj6 = id(sharedCoords[8]);
    const sharedValue6 = id(sharedCoords[8]).useSharedValue(false);
    const translateX = sharedValue6;
    const obj7 = id(sharedCoords[8]);
    const sharedValue7 = id(sharedCoords[8]).useSharedValue(null);
    const translateY = sharedValue7;
    const obj8 = id(sharedCoords[8]);
    const fn = function w() {
      const result = containerLayout.get().width / videoDimensions.get().width;
      return Math.max(result, containerLayout.get().height / videoDimensions.get().height);
    };
    fn.__closure = { containerLayout, videoDimensions };
    fn.__workletHash = 4177496646282;
    fn.__initData = closure_17;
    const derivedValue = id(sharedCoords[8]).useDerivedValue(fn);
    const isInSnap = derivedValue;
    const obj9 = id(sharedCoords[8]);
    class D {
      constructor() {
        result = containerLayout.get().width / videoDimensions.get().width;
        return Math.min(result, containerLayout.get().height / videoDimensions.get().height);
      }
    }
    D.__closure = { containerLayout, videoDimensions };
    D.__workletHash = 5260375952053;
    D.__initData = onReady;
    const derivedValue1 = id(sharedCoords[8]).useDerivedValue(D);
    const value = derivedValue1;
    const obj10 = id(sharedCoords[8]);
    class I {
      constructor() {
        tmp = 0 === closure_16.get();
        if (tmp) {
          tmp2 = closure_17;
          tmp = 0 === closure_17.get();
        }
        if (tmp) {
          tmp3 = closure_15;
          tmp5 = closure_24;
          value = closure_15.get();
          tmp6 = value === closure_24.get();
          if (!tmp6) {
            tmp7 = closure_15;
            tmp9 = closure_23;
            value1 = closure_15.get();
            tmp6 = value1 === closure_23.get();
          }
          tmp = tmp6;
        }
        return tmp;
      }
    }
    I.__closure = { translateX: sharedValue1, translateY: sharedValue2, scale: sharedValue, fitScale: derivedValue1, coverScale: derivedValue };
    I.__workletHash = 15099362638406;
    I.__initData = setHasActiveVideoOutputSink;
    const derivedValue2 = id(sharedCoords[8]).useDerivedValue(I);
    let callback2 = derivedValue2;
    function ae(arg0) {
      if ("fit" === arg0) {
        let value = derivedValue1.get();
        let str2 = "respect-motion-settings";
        if (disableAnimations.get()) {
          str2 = "animate-never";
        }
        const result = sharedValue.set(id(focused[12]).withSpring(value, disableAnimations, str2));
        const obj2 = id(focused[12]);
        const tmp14 = disableAnimations;
      } else {
        value = derivedValue.get();
        let str = "respect-motion-settings";
        if (disableAnimations.get()) {
          str = "animate-never";
        }
        const result1 = sharedValue.set(id(focused[12]).withSpring(value, disableAnimations, str));
        const obj = id(focused[12]);
        const tmp6 = disableAnimations;
      }
      const result2 = sharedValue1.set(id(focused[12]).withSpring(0, dismissToPIPGestureRef));
      const obj3 = id(focused[12]);
      const result3 = sharedValue2.set(id(focused[12]).withSpring(0, dismissToPIPGestureRef));
      const result4 = sharedValue7.set(arg0);
    }
    obj = { scale: sharedValue, withSpring: id(sharedCoords[12]).withSpring, fitScale: derivedValue1, MODE_CHANGE_PHYSICS: layout, disableAnimations, coverScale: derivedValue, translateX: sharedValue1, SCALE_PHYSICS: closure_10, translateY: sharedValue2, currentSizeThreshold: sharedValue7 };
    ae.__closure = obj;
    ae.__workletHash = 16610861286231;
    ae.__initData = scale;
    const items = [sharedValue, sharedValue1, sharedValue2, derivedValue, sharedValue7, derivedValue1, disableAnimations];
    const callback = isCamera.useCallback(ae, items);
    const token = callback;
    function re() {
      const value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      let str = "cover";
      if (id === id) {
        str = "fit";
      }
      let tmp5 = isCamera;
      const tmp3 = videoDimensions.get().width >= videoDimensions.get().height;
      if (isCamera) {
        tmp5 = "fit" === str;
      }
      if (tmp5) {
        tmp5 = tmp3 === tmp4;
      }
      if (tmp5) {
        str = "cover";
      }
      callback(str);
    }
    re.__closure = { focused, id, videoDimensions, windowDimensions, isCamera, resetToDefaultSize: callback };
    re.__workletHash = 15643035811761;
    re.__initData = translateX;
    const items1 = [focused, id, isCamera, videoDimensions, windowDimensions, callback];
    const callback1 = isCamera.useCallback(re, items1);
    sharedValue2 = callback1;
    const obj11 = id(sharedCoords[8]);
    function le() {
      return containerLayout.get();
    }
    le.__closure = { containerLayout };
    le.__workletHash = 9695573702258;
    le.__initData = translateY;
    function ce(safeAreaState, safeAreaState2) {
      let tmp;
      if (null != safeAreaState2) {
        tmp = safeAreaState2;
      }
      if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
        const value = focused.get();
        let id;
        if (null != value) {
          id = value.id;
        }
        if (tmp6) {
          callback1();
        }
        const tmp6 = id === id && safeAreaState !== safeAreaState2 && null != safeAreaState2;
      }
    }
    obj = { cheapWorkletShallowEqual: id(sharedCoords[13]).cheapWorkletShallowEqual, focused, id, resetOnLayoutChange: callback1 };
    ce.__closure = obj;
    ce.__workletHash = 13816224514199;
    ce.__initData = isInSnap;
    const animatedReaction = id(sharedCoords[8]).useAnimatedReaction(le, ce);
    class Le {
      constructor() {
        value = closure_23.get();
        if (value < closure_24.get() + 0.05) {
          flag2 = false;
          return false;
        } else {
          tmp13 = closure_16;
          tmp15 = closure_15;
          value1 = closure_16.get();
          result = value1 * closure_15.get();
          tmp17 = closure_17;
          value2 = closure_17.get();
          result1 = value2 * closure_15.get();
          num5 = -50;
          if (result >= -50) {
            num6 = 50;
            if (result <= 50) {
              if (result1 >= -50) {
                if (result1 <= 50) {
                  tmp20 = containerLayout;
                  tmp21 = videoDimensions;
                  tmp22 = closure_15;
                  num7 = 2;
                  sum = result + (containerLayout.get().width - videoDimensions.get().width * closure_15.get()) / 2;
                  sum1 = result1 + (containerLayout.get().height - videoDimensions.get().height * closure_15.get()) / 2;
                  result2 = videoDimensions.get().width * closure_15.get();
                  result3 = videoDimensions.get().height * closure_15.get();
                  tmp2 = result3 >= containerLayout.get().height && sum >= -50;
                  if (tmp2) {
                    num = 25;
                    tmp2 = sum <= 25;
                  }
                  if (tmp2) {
                    tmp4 = containerLayout;
                    sum2 = sum + result2;
                    num2 = 25;
                    tmp2 = sum2 >= containerLayout.get().width - 25;
                  }
                  if (tmp2) {
                    tmp6 = containerLayout;
                    sum3 = sum + result2;
                    tmp2 = sum3 <= containerLayout.get().width + 50;
                  }
                  if (!tmp2) {
                    tmp7 = containerLayout;
                    tmp8 = result2 >= containerLayout.get().width && sum1 >= -50;
                    if (tmp8) {
                      num3 = 25;
                      tmp8 = sum1 <= 25;
                    }
                    if (tmp8) {
                      tmp10 = containerLayout;
                      sum4 = sum1 + result3;
                      num4 = 25;
                      tmp8 = sum4 >= containerLayout.get().height - 25;
                    }
                    if (tmp8) {
                      tmp12 = containerLayout;
                      sum5 = sum1 + result3;
                      tmp8 = sum5 <= containerLayout.get().height + 50;
                    }
                    tmp2 = tmp8;
                  }
                  return tmp2;
                }
              }
            }
          }
          flag = false;
          return false;
        }
      }
    }
    Le.__closure = { coverScale: derivedValue, fitScale: derivedValue1, MIN_ZOOM_FOR_COVER_SNAP_OFFSET: 0.05, translateX: sharedValue1, scale: sharedValue, translateY: sharedValue2, SNAP_CENTER_THRESHOLD: 50, containerLayout, videoDimensions, SNAP_EDGE_OUTER_THRESHOLD: 50, SNAP_EDGE_INNER_THRESHOLD: 25 };
    Le.__workletHash = 3902544453390;
    Le.__initData = value;
    const items2 = [derivedValue, sharedValue, sharedValue1, sharedValue2, containerLayout, videoDimensions, derivedValue1];
    callback2 = isCamera.useCallback(Le, items2);
    function ye() {
      if (sharedValue3.get() <= 0) {
        if (sharedValue4.get()) {
          const result = sharedValue4.set(false);
          callback("cover");
        } else {
          const value = sharedValue.get();
          if (value < derivedValue1.get()) {
            callback("fit");
          } else {
            const _Math = Math;
            const bound = Math.max(0, (videoDimensions.get().height - containerLayout.get().height / sharedValue.get()) / 2);
            const _Math2 = Math;
            const bound1 = Math.max(0, (videoDimensions.get().width - containerLayout.get().width / sharedValue.get()) / 2);
            const _Math3 = Math;
            const _Math4 = Math;
            const result1 = sharedValue1.set(id(focused[12]).withSpring(Math.min(bound1, Math.max(-bound1, sharedValue1.get())), dismissToPIPGestureRef));
            const obj = id(focused[12]);
            const tmp20 = -bound1;
            const _Math5 = Math;
            const _Math6 = Math;
            const result2 = sharedValue2.set(id(focused[12]).withSpring(Math.min(bound, Math.max(-bound, sharedValue2.get())), dismissToPIPGestureRef));
            const obj2 = id(focused[12]);
            const tmp24 = -bound;
          }
        }
      }
    }
    obj1 = { numGesturesActive: sharedValue3, isInSnap: sharedValue4, resetToDefaultSize: callback, scale: sharedValue, fitScale: derivedValue1, videoDimensions, containerLayout, translateX: sharedValue1, withSpring: id(sharedCoords[12]).withSpring, SCALE_PHYSICS: closure_10, translateY: sharedValue2 };
    ye.__closure = obj1;
    ye.__workletHash = 3493652911835;
    ye.__initData = callback2;
    const items3 = [derivedValue1, sharedValue3, sharedValue4, sharedValue, videoDimensions, containerLayout, sharedValue1, sharedValue2, callback];
    const callback3 = isCamera.useCallback(ye, items3);
    const obj13 = id(sharedCoords[8]);
    function xe() {
      let value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      let tmp3 = id === id;
      if (tmp3) {
        value = !derivedValue2.get();
        if (!value) {
          value = sharedValue6.get();
        }
        tmp3 = value;
      }
      return tmp3;
    }
    xe.__closure = { focused, id, isInDefaultZoom: derivedValue2, isInPanToZoom: sharedValue6 };
    xe.__workletHash = 5209373786986;
    xe.__initData = token;
    function ke(arg0, arg1) {
      if (arg0 !== arg1) {
        setIsFocusedVideoZoomed(arg0);
      }
    }
    ke.__closure = { setIsFocusedVideoZoomed };
    ke.__workletHash = 10707557639101;
    ke.__initData = sharedValue2;
    const animatedReaction1 = id(sharedCoords[8]).useAnimatedReaction(xe, ke);
    const obj16 = id(sharedCoords[8]);
    class Me {
      constructor() {
        value = focused.get();
        id = undefined;
        if (null != value) {
          id = value.id;
        }
        return id === id;
      }
    }
    Me.__closure = { focused, id };
    Me.__workletHash = 619124678280;
    Me.__initData = callback2;
    function be(arg0, arg1) {
      if (arg0 !== arg1) {
        callback1();
      }
    }
    be.__closure = { resetOnLayoutChange: callback1 };
    be.__workletHash = 8458824233146;
    be.__initData = callback3;
    const animatedReaction2 = id(sharedCoords[8]).useAnimatedReaction(Me, be);
    const obj17 = id(sharedCoords[8]);
    class Ye {
      constructor() {
        return mode.get();
      }
    }
    Ye.__closure = { mode };
    Ye.__workletHash = 7040117988961;
    Ye.__initData = closure_30;
    class Ne {
      constructor(arg0, arg1) {
        if (id !== arg1) {
          tmp = isCamera;
          tmp2 = isCamera();
        }
        return;
      }
    }
    Ne.__closure = { resetOnLayoutChange: callback1 };
    Ne.__workletHash = 9279120690968;
    Ne.__initData = closure_31;
    const animatedReaction3 = id(sharedCoords[8]).useAnimatedReaction(Ye, Ne);
    const obj18 = id(sharedCoords[8]);
    class Ge {
      constructor() {
        return videoDimensions.get();
      }
    }
    Ge.__closure = { videoDimensions };
    Ge.__workletHash = 8748184223523;
    Ge.__initData = closure_32;
    class Fe {
      constructor(arg0, arg1) {
        if (null != closure_22) {
          width = undefined;
          if (null != arg1) {
            width = arg1.width;
          }
          tmp2 = id.width === width;
          if (tmp2) {
            height = undefined;
            if (null != arg1) {
              height = arg1.height;
            }
            tmp2 = id.height === height;
          }
          if (!tmp2) {
            tmp4 = isCamera;
            tmp5 = isCamera();
          }
        }
        return;
      }
    }
    Fe.__closure = { currentSizeThreshold: sharedValue7, resetOnLayoutChange: callback1 };
    Fe.__workletHash = 8464422969486;
    Fe.__initData = closure_33;
    const animatedReaction4 = id(sharedCoords[8]).useAnimatedReaction(Ge, Fe);
    const obj19 = id(sharedCoords[8]);
    function ze() {
      return derivedValue.get();
    }
    ze.__closure = { coverScale: derivedValue };
    ze.__workletHash = 5444376625069;
    ze.__initData = closure_34;
    class Xe {
      constructor(arg0, arg1) {
        value = closure_22.get();
        tmp2 = "cover" === value;
        if (tmp2) {
          tmp3 = id;
          tmp4 = arg1;
          tmp2 = id !== arg1;
        }
        if (tmp2) {
          tmp5 = disableAnimations;
          tmp6 = disableAnimations(value);
        }
        return;
      }
    }
    Xe.__closure = { currentSizeThreshold: sharedValue7, resetToDefaultSize: callback };
    Xe.__workletHash = 10764193588506;
    Xe.__initData = closure_35;
    const animatedReaction5 = id(sharedCoords[8]).useAnimatedReaction(ze, Xe);
    const obj20 = id(sharedCoords[8]);
    function $e() {
      return sharedValue4.get();
    }
    $e.__closure = { isInSnap: sharedValue4 };
    $e.__workletHash = 2178206594630;
    $e.__initData = closure_36;
    class Ze {
      constructor(arg0, arg1) {
        tmp = id !== arg1 && id;
        if (tmp) {
          tmp2 = id;
          tmp3 = focused;
          num = 8;
          obj = id(focused[8]);
          num2 = 14;
          runOnJSResult = obj.runOnJS(id(focused[14]).triggerHapticFeedback);
          tmp4Result = runOnJSResult(id(focused[14]).HapticFeedbackTypes.IMPACT_LIGHT);
        }
        return;
      }
    }
    obj2 = { runOnJS: id(sharedCoords[8]).runOnJS, triggerHapticFeedback: id(sharedCoords[14]).triggerHapticFeedback, HapticFeedbackTypes: id(sharedCoords[14]).HapticFeedbackTypes };
    Ze.__closure = obj2;
    Ze.__workletHash = 11115846398818;
    Ze.__initData = closure_37;
    const animatedReaction6 = id(sharedCoords[8]).useAnimatedReaction($e, Ze);
    obj3 = {
      gesture: isCamera.useMemo(() => {
        const Gesture = id(focused[15]).Gesture;
        const Gesture2 = id(focused[15]).Gesture;
        const Gesture3 = id(focused[15]).Gesture;
        const TapResult = Gesture3.Tap();
        class O {
          constructor(arg0, arg1) {
            return arg1.fail();
          }
        }
        O.__closure = {};
        O.__workletHash = 17368742583362;
        O.__initData = closure_39;
        const numberOfTapsResult = Gesture3.Tap().numberOfTaps(2);
        class E {
          constructor() {
            if (closure_25.get()) {
              tmp3 = closure_2;
              value = closure_2.get();
              tmp5 = null;
              id = undefined;
              if (null != value) {
                id = value.id;
              }
              tmp7 = closure_0;
              if (id !== closure_0) {
                tmp12 = closure_0;
                tmp13 = closure_2;
                num2 = 8;
                obj2 = closure_0(closure_2[8]);
                tmp14 = closure_11;
                tmp15 = closure_0;
                tmp16 = obj2.runOnJS(closure_11)(closure_0);
              } else {
                tmp8 = closure_0;
                tmp9 = closure_2;
                num = 8;
                obj = closure_0(closure_2[8]);
                tmp10 = closure_11;
                tmp11 = obj.runOnJS(closure_11)(null);
              }
            } else {
              tmp = closure_27;
              tmp2 = closure_27();
            }
            return;
          }
        }
        let obj = { isInDefaultZoom: derivedValue2, resetOnLayoutChange: callback1, focused, id, runOnJS: id(focused[8]).runOnJS, setFocused };
        E.__closure = obj;
        E.__workletHash = 10743965328356;
        E.__initData = closure_38;
        const onTouchesMoveResult = Gesture3.Tap().numberOfTaps(2).onTouchesMove(O);
        const Gesture4 = id(focused[15]).Gesture;
        const onStartResult = Gesture3.Tap().numberOfTaps(2).onTouchesMove(O).onStart(E);
        class C {
          constructor(arg0, arg1) {
            return arg1.fail();
          }
        }
        C.__closure = {};
        C.__workletHash = 8766053850176;
        C.__initData = closure_41;
        const TapResult1 = Gesture4.Tap();
        class V {
          constructor() {
            if (closure_13.get().mode === closure_8.HIDDEN) {
              tmp5 = closure_0;
              tmp6 = closure_2;
              num2 = 8;
              obj3 = closure_0(closure_2[8]);
              tmp7 = closure_14;
              obj = {};
              flag2 = true;
              obj.debounce = true;
              tmp8 = obj3.runOnJS(closure_14)(obj);
            } else {
              tmp = closure_0;
              tmp2 = closure_2;
              num = 8;
              obj = closure_0(closure_2[8]);
              tmp3 = closure_12;
              obj1 = {};
              flag = true;
              obj1.debounce = true;
              tmp4 = obj.runOnJS(closure_12)(obj1);
            }
            return;
          }
        }
        obj = { controlsSpecs, VoicePanelControlsModes: setIsFocusedVideoZoomed, runOnJS: id(focused[8]).runOnJS, showControls, hideControls };
        V.__closure = obj;
        V.__workletHash = 11260765819879;
        V.__initData = closure_40;
        const onTouchesMoveResult1 = Gesture4.Tap().onTouchesMove(C);
        const Gesture5 = id(focused[15]).Gesture;
        const ExclusiveResult = Gesture2.Exclusive(onStartResult, Gesture4.Tap().onTouchesMove(C).onStart(V));
        const PinchResult = Gesture5.Pinch();
        class I {
          constructor(arg0, arg1) {
            value = closure_2.get();
            id = undefined;
            if (null != value) {
              id = value.id;
            }
            if (id !== closure_0) {
              failResult = arg1.fail();
            }
            return;
          }
        }
        I.__closure = { focused, id };
        I.__workletHash = 8765017804058;
        I.__initData = closure_45;
        const enabledResult = Gesture5.Pinch().enabled(!loading);
        class D {
          constructor() {
            result = closure_18.set(closure_18.get() + 1);
            result1 = closure_21.set(false);
            result2 = closure_22.set(null);
            return;
          }
        }
        D.__closure = { numGesturesActive: sharedValue3, isInPanToZoom: sharedValue6, currentSizeThreshold: sharedValue7 };
        D.__workletHash = 3449238089307;
        D.__initData = closure_44;
        const obj1 = { numGesturesActive: sharedValue3, isInPanToZoom: sharedValue6, currentSizeThreshold: sharedValue7 };
        const onTouchesDownResult = Gesture5.Pinch().enabled(!loading).onTouchesDown(I);
        const fn = function w(scaleChange) {
          let value = store3.get();
          value = store3.get();
          const result = store3.set(value * store3(value, scaleChange.scaleChange, store11.get()));
          const diff = scaleChange.focalX - store2.get().width / 2;
          const diff1 = scaleChange.focalY - store2.get().height / 2;
          const diff2 = scaleChange.scaleChange - 1;
          const result1 = -1 * diff * diff2 / store3.get();
          const diff3 = scaleChange.scaleChange - 1;
          const result2 = -1 * diff1 * diff3 / store3.get();
          const result3 = store4.set(store4.get() + result1);
          const result4 = store5.set(store5.get() + result2);
          const result5 = store7.set(callback3());
        };
        fn.__closure = { scale: sharedValue, getScaleChangeWithOverscroll: sharedValue, fitScale: derivedValue1, containerLayout, translateX: sharedValue1, translateY: sharedValue2, isInSnap: sharedValue4, isInCoverSnap: callback2 };
        fn.__workletHash = 2077670235308;
        fn.__initData = closure_43;
        const obj2 = { scale: sharedValue, getScaleChangeWithOverscroll: sharedValue, fitScale: derivedValue1, containerLayout, translateX: sharedValue1, translateY: sharedValue2, isInSnap: sharedValue4, isInCoverSnap: callback2 };
        const onStartResult1 = Gesture5.Pinch().enabled(!loading).onTouchesDown(I).onStart(D);
        const fn2 = function v() {
          const result = store6.set(store6.get() - 1);
          callback4();
        };
        fn2.__closure = { numGesturesActive: sharedValue3, handleMovementEnd: callback3 };
        fn2.__workletHash = 5853458336611;
        fn2.__initData = closure_42;
        const obj3 = { numGesturesActive: sharedValue3, handleMovementEnd: callback3 };
        const onChangeResult = Gesture5.Pinch().enabled(!loading).onTouchesDown(I).onStart(D).onChange(fn);
        const Gesture6 = id(focused[15]).Gesture;
        const onEndResult = Gesture5.Pinch().enabled(!loading).onTouchesDown(I).onStart(D).onChange(fn).onEnd(fn2);
        const PanResult = Gesture6.Pan();
        const result = Gesture6.Pan().enabled(!loading).requireExternalGestureToFail(dismissToPIPGestureRef);
        const enabledResult1 = Gesture6.Pan().enabled(!loading);
        const fn3 = function f(arg0, fail) {
          const value = store.get();
          let id;
          if (null != value) {
            id = value.id;
          }
          if (id !== closure_0) {
            fail.fail();
          }
        };
        fn3.__closure = { focused, id };
        fn3.__workletHash = 2184905113389;
        fn3.__initData = closure_51;
        const averageTouchesResult = result.averageTouches(true);
        class S {
          constructor() {
            timestamp = Date.now();
            result = closure_21.set(timestamp - closure_20.get() <= 250);
            result1 = closure_20.set(Date.now());
            return;
          }
        }
        S.__closure = { lastTapTimestamp: sharedValue5, PAN_TO_ZOOM_TAP_TIME_MILLIS: 250, isInPanToZoom: sharedValue6 };
        S.__workletHash = 7713579688732;
        S.__initData = closure_50;
        const obj4 = { lastTapTimestamp: sharedValue5, PAN_TO_ZOOM_TAP_TIME_MILLIS: 250, isInPanToZoom: sharedValue6 };
        const onTouchesDownResult1 = result.averageTouches(true).onTouchesDown(fn3);
        const fn4 = function c() {
          if (store9.get()) {
            callback(closure_2[8]).runOnJS(closure_12)();
            const obj = callback(closure_2[8]);
          }
          const result = store6.set(store6.get() + 1);
          const result1 = store10.set(null);
        };
        const onBeginResult = result.averageTouches(true).onTouchesDown(fn3).onBegin(S);
        fn4.__closure = { isInPanToZoom: sharedValue6, runOnJS: id(focused[8]).runOnJS, hideControls, numGesturesActive: sharedValue3, currentSizeThreshold: sharedValue7 };
        fn4.__workletHash = 16349993539830;
        fn4.__initData = closure_49;
        const obj5 = { isInPanToZoom: sharedValue6, runOnJS: id(focused[8]).runOnJS, hideControls, numGesturesActive: sharedValue3, currentSizeThreshold: sharedValue7 };
        const fn5 = function s(changeY) {
          if (store9.get()) {
            const result = changeY.changeY * 0.0075;
            let value = store3.get();
            value = store3.get();
            const result1 = store3.set(value * store3(value, 1 + result, store11.get()));
          } else {
            const value1 = store4.get();
            const result2 = store4.set(value1 + changeY.changeX / store3.get());
            const value2 = store5.get();
            const result3 = store5.set(value2 + changeY.changeY / store3.get());
          }
          const result4 = store7.set(callback3());
        };
        fn5.__closure = { isInPanToZoom: sharedValue6, PAN_TO_ZOOM_SCALE_FACTOR: 0.0075, scale: sharedValue, getScaleChangeWithOverscroll: sharedValue, fitScale: derivedValue1, translateX: sharedValue1, translateY: sharedValue2, isInSnap: sharedValue4, isInCoverSnap: callback2 };
        fn5.__workletHash = 17282206686388;
        fn5.__initData = closure_48;
        const obj6 = { isInPanToZoom: sharedValue6, PAN_TO_ZOOM_SCALE_FACTOR: 0.0075, scale: sharedValue, getScaleChangeWithOverscroll: sharedValue, fitScale: derivedValue1, translateX: sharedValue1, translateY: sharedValue2, isInSnap: sharedValue4, isInCoverSnap: callback2 };
        const onStartResult2 = onBeginResult.onStart(fn4);
        const fn6 = function n(velocityX) {
          const result = store6.set(store6.get() - 1);
          let value = store4.get();
          const result1 = velocityX.velocityX * 0.05;
          const result2 = store4.set(callback(closure_2[12]).withSpring(value + result1 / store3.get(), closure_10));
          const obj = callback(closure_2[12]);
          value = store5.get();
          const result3 = velocityX.velocityY * 0.05;
          const result4 = store5.set(callback(closure_2[12]).withSpring(value + result3 / store3.get(), closure_10));
          callback4();
        };
        const onChangeResult1 = onBeginResult.onStart(fn4).onChange(fn5);
        fn6.__closure = { numGesturesActive: sharedValue3, translateX: sharedValue1, withSpring: id(focused[12]).withSpring, FLING_VELOCITY_SCALING: 0.05, scale: sharedValue, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue2, handleMovementEnd: callback3 };
        fn6.__workletHash = 10045783163820;
        fn6.__initData = closure_47;
        const obj7 = { numGesturesActive: sharedValue3, translateX: sharedValue1, withSpring: id(focused[12]).withSpring, FLING_VELOCITY_SCALING: 0.05, scale: sharedValue, SCALE_PHYSICS: dismissToPIPGestureRef, translateY: sharedValue2, handleMovementEnd: callback3 };
        const fn7 = function t() {
          const result = store9.set(false);
        };
        fn7.__closure = { isInPanToZoom: sharedValue6 };
        fn7.__workletHash = 2318423816868;
        fn7.__initData = closure_46;
        return Gesture.Simultaneous(ExclusiveResult, onEndResult, onChangeResult1.onEnd(fn6).onFinalize(fn7));
      }, items4),
      scale: sharedValue,
      translateX: sharedValue1,
      translateY: sharedValue2,
      numGesturesActive: sharedValue3,
      isInSnap: sharedValue4
    };
    const items4 = [loading, dismissToPIPGestureRef, focused, id, sharedValue, sharedValue1, sharedValue2, callback1, sharedValue3, sharedValue7, containerLayout, sharedValue4, callback2, callback3, sharedValue5, sharedValue6, derivedValue2, setFocused, hideControls, controlsSpecs, showControls, derivedValue1];
    return obj3;
  }(obj2);
  const scale = tmp15.scale;
  closure_20 = scale;
  const translateX = tmp15.translateX;
  closure_21 = translateX;
  const translateY = tmp15.translateY;
  closure_22 = translateY;
  const isInSnap = tmp15.isInSnap;
  closure_23 = isInSnap;
  let value = PixelRatio.get();
  closure_24 = value;
  const items2 = [streamId, isCamera, scale, sharedValue1, mode, value];
  callback2 = importAllResult.useCallback(() => {
    let tmp = null == streamId || isCamera;
    if (!tmp) {
      tmp = mode.get() !== flag2.PANEL;
    }
    if (!tmp) {
      let obj = id(sharedCoords[22]);
      obj = { width: sharedValue1.get().width * value, height: sharedValue1.get().height * value };
      obj.updateVideoSize(streamId, obj, scale.get());
    }
  }, items2);
  closure_25 = callback2;
  let obj11 = arg1(dependencyMap[8]);
  class Qe {
    constructor() {
      items = [, , ];
      items[0] = scale.get();
      items[1] = closure_14.get();
      items[2] = mode.get();
      return items;
    }
  }
  Qe.__closure = { scale, videoDimensions: sharedValue1, mode };
  Qe.__workletHash = 16492795532326;
  Qe.__initData = closure_57;
  class Ke {
    constructor(arg0, arg1) {
      if (null != streamId) {
        tmp = id;
        tmp2 = sharedCoords;
        num = 13;
        obj = id(sharedCoords[13]);
        tmp3 = undefined;
        if (null != arg1) {
          tmp3 = arg1;
        }
        tmp4 = id;
        if (!obj.cheapWorkletShallowEqual(id, tmp3)) {
          tmp5 = id;
          tmp6 = sharedCoords;
          num2 = 8;
          obj2 = id(sharedCoords[8]);
          tmp7 = f119954;
          tmp8 = obj2.runOnJS(f119954)();
        }
      }
      return;
    }
  }
  Ke.__closure = { streamId, cheapWorkletShallowEqual: arg1(dependencyMap[13]).cheapWorkletShallowEqual, runOnJS: arg1(dependencyMap[8]).runOnJS, respondToVideoSizeUpdate: callback2 };
  Ke.__workletHash = 5259362546534;
  Ke.__initData = closure_58;
  const animatedReaction1 = obj11.useAnimatedReaction(Qe, Ke);
  const items3 = [callback2];
  const effect = importAllResult.useEffect(() => {
    let closure_0 = streamId(sharedCoords[23]).addOnPipModeChangedListener((arg0) => {
      if (!arg0) {
        callback();
      }
    });
    return () => {
      if (null != closure_0) {
        closure_0.remove();
      }
    };
  }, items3);
  const obj3 = { streamId, cheapWorkletShallowEqual: arg1(dependencyMap[13]).cheapWorkletShallowEqual, runOnJS: arg1(dependencyMap[8]).runOnJS, respondToVideoSizeUpdate: callback2 };
  function dt() {
    let height;
    let width;
    const value = sharedValue1.get();
    ({ width, height } = value);
    if (pIPState.mode !== focused.IN_APP) {
      let obj = { width, height };
      let num = 1;
      let num2 = 1;
      if (sharedValue.get()) {
        num2 = 0;
      }
      obj.opacity = num2;
      obj = { scale: scale.get() };
      const items = [obj, , , ];
      obj = { translateX: translateX.get() };
      items[1] = obj;
      const obj1 = { translateY: translateY.get() };
      items[2] = obj1;
      const obj2 = {};
      if (flag) {
        num = -1;
      }
      obj2.scaleX = num;
      items[3] = obj2;
      obj.transform = items;
      return obj;
    } else if (width > height) {
      width = width * (pIPState.height / height);
      let result = width / scale.get();
      height = pIPState.height;
      let result1 = height / scale.get();
    } else {
      const result2 = height * (pIPState.width / width);
      result1 = result2 / scale.get();
      result = pIPState.width / scale.get();
    }
  }
  obj4 = { videoDimensions: sharedValue1, pipState: pIPState, VoicePanelPIPModes, scale, disableAnimations: sharedValue, translateX, translateY, mirror: flag };
  dt.__closure = obj4;
  dt.__workletHash = 4149619035590;
  dt.__initData = closure_59;
  const animatedStyle = arg1(dependencyMap[8]).useAnimatedStyle(dt);
  const obj14 = arg1(dependencyMap[8]);
  const token = arg1(dependencyMap[24]).useToken(importDefault(dependencyMap[25]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  closure_26 = token;
  const obj16 = arg1(dependencyMap[24]);
  let num = 0;
  if (mode.get() !== flag2.PIP) {
    value = focused.get();
    id = undefined;
    if (null != value) {
      id = value.id;
    }
    num = 0;
    if (id !== id) {
      num = 0.3;
    }
  }
  const sharedValue2 = arg1(dependencyMap[8]).useSharedValue(num);
  closure_27 = sharedValue2;
  const obj17 = arg1(dependencyMap[8]);
  function _t() {
    const obj = { inPip: mode.get() === flag2.PIP };
    const value = focused.get();
    let id;
    if (null != value) {
      id = value.id;
    }
    obj.isFocused = id === id;
    return obj;
  }
  _t.__closure = { mode, VoicePanelModes: flag2, focused, id };
  _t.__workletHash = 16147365192890;
  _t.__initData = closure_60;
  function ut(inPip, isFocused) {
    let obj = id(sharedCoords[13]);
    let tmp;
    if (null != isFocused) {
      tmp = isFocused;
    }
    if (!obj.cheapWorkletShallowEqual(inPip, tmp)) {
      if (!inPip.inPip) {
        if (!inPip.isFocused) {
          isFocused = undefined;
          if (null != isFocused) {
            isFocused = isFocused.isFocused;
          }
          let num2 = 0.3;
          if (true === isFocused) {
            const obj2 = id(sharedCoords[8]);
            obj = { duration: 0 };
            num2 = obj2.withDelay(300, id(sharedCoords[26]).withTiming(0.3, obj, "animate-never"));
            const obj3 = id(sharedCoords[26]);
          }
          const result = sharedValue2.set(num2);
        }
      }
      const result1 = sharedValue2.set(0);
    }
  }
  obj6 = { cheapWorkletShallowEqual: arg1(dependencyMap[13]).cheapWorkletShallowEqual, strokeOpacity: sharedValue2, withDelay: arg1(dependencyMap[8]).withDelay, withTiming: arg1(dependencyMap[26]).withTiming };
  ut.__closure = obj6;
  ut.__workletHash = 5119744299592;
  ut.__initData = closure_61;
  const animatedReaction2 = arg1(dependencyMap[8]).useAnimatedReaction(_t, ut);
  const obj18 = arg1(dependencyMap[8]);
  const obj5 = { mode, VoicePanelModes: flag2, focused, id };
  function ft() {
    if (isInSnap.get()) {
      let obj = {};
    } else {
      obj = { borderRadius: token + 2, opacity: sharedValue2.get() };
    }
    return obj;
  }
  ft.__closure = { isInSnap, SNAP_EDGE_INNER_THRESHOLD: 25, borderRadius: token, strokeOpacity: sharedValue2 };
  ft.__workletHash = 5172898891721;
  ft.__initData = closure_62;
  function vt(arg0) {
    return layout(arg0, sharedValue.get());
  }
  vt.__closure = { layout, disableAnimations: sharedValue };
  vt.__workletHash = 12145775353383;
  vt.__initData = closure_63;
  const items4 = [layout, sharedValue];
  const animatedStyle1 = arg1(dependencyMap[8]).useAnimatedStyle(ft);
  const callback3 = importAllResult.useCallback(vt, items4);
  obj7 = { gesture: tmp15.gesture };
  const obj8 = { style: items5, layout: callback3 };
  const items5 = [tmp.wrapper, id.style];
  const obj21 = arg1(dependencyMap[8]);
  const tmp29 = layoutManager;
  const tmp30 = windowDimensions;
  obj9 = { style: items6, layout: callback3 };
  const items6 = [tmp.animatedWrapperStyles, animatedStyle];
  const obj10 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onReady: callback, onSize: callback1, style: tmp.video, layout: callback3 };
  const tmp31 = importDefault(dependencyMap[27]);
  obj9.children = layoutManager(closure_13, obj10);
  const items7 = [layoutManager(importDefault(dependencyMap[27]), obj9), ];
  if (first) {
    obj11 = { animate: true, style: tmp.spinner };
    let tmp33Result = tmp33(tmp34(tmp35[28]), obj11);
  } else {
    const obj12 = { style: animatedStyle1, layout: callback3, pointerEvents: "none" };
    tmp33Result = tmp33(tmp34(tmp35[27]), obj12);
  }
  items7[1] = tmp33Result;
  obj8.children = items7;
  obj7.children = tmp30(tmp31, obj8);
  return tmp29(arg1(dependencyMap[15]).GestureDetector, obj7);
});
result = arg1(dependencyMap[29]).fileFinishedImporting("modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx");

export default memoResult;
