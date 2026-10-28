// Module ID: 18738
// Function ID: 18739
// Name: ConjureAppPictureInPicture
// Dependencies: [19, 17, 6810, 4878, 1084, 18650, 6811, 10940, 21, 4961, 5004, 587, 558, 576, 9300, 504, 6919, 5270, 18739, 11664, 8609, 7293, 11531, 18740, 18736, 5085, 18327, 14081, 5248, 5333, 5242, 5283, 1125, 3863, 11818, 11822, 5070, 2]

// Module 18738 (ConjureAppPictureInPicture)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5085 */;
import timing from "timing" /* 5242 */;
import spring from "spring" /* 5283 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5333 */;
import GuildIconDefault from "GuildIcon" /* 6919 */;
import getGuildIdForEmbeddedSurfaceDefault from "getGuildIdForEmbeddedSurface" /* 9300 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10940 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 18327 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 18650 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 18736 */;
import conjureFrameSound from "conjureFrameSound" /* 18739 */;
import conjureAppPictureInPictureActions2 from "conjureAppPictureInPictureActions" /* 18740 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6810 */;
import GuildStore from "GuildStore" /* 4878 */;
import FramesConstants from "FramesConstants" /* 6811 */;
import Fragment from "Fragment" /* 21 */;
import DeviceUtils_mod from "DeviceUtils" /* 4961 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let FrameLayoutModes;
let c10;
let metroImportAll;
let obj2;
let rect;
let rect1;
let rect2;
let unpackModuleId;
let View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
({ asLaunched: metroImportAll, FrameLayoutModes } = FramesConstants);
const MIN_PAN_GESTURE_MOVE = MorphablePanelConstants.MIN_PAN_GESTURE_MOVE;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let DeviceUtils = DeviceUtils_mod;
DeviceUtils = DeviceUtils.getRamSize();
if (DeviceUtils == null) {
  DeviceUtils = Infinity;
}
let closure_12 = DeviceUtils < 4;
let c13 = 180;
let c14 = 1.05;
let c15 = 0.4;
let closure_16 = { mass: 0.25, damping: 40, stiffness: 300, overshootClamping: true };
let closure_17 = { mass: 0.4, damping: 22, stiffness: 220 };
let presentation = { layoutMode: FrameLayoutModes.PIP, portraitSafeAreasConfig: DEFAULT_PORTRAIT_LETTERBOX_CONFIG };
let createStyles = createStyles_mod;
let obj = { window: rect, mask: obj2, card: rect1, soundBadge: rect2 };
rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
rect1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
rect2 = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function StaticCard(arg0) {
  let appName;
  let closure_0;
  let frame;
  let items2;
  let tmp10;
  let tmp11;
  let tmp5;
  let tmp8;
  const obj = require("react");
  const cResult = obj.c(14);
  ({ frame, appName } = arg0);
  const tmp4 = closure_19();
  if (cResult[0] !== frame.surface) {
    const tmp7 = getGuildIdForEmbeddedSurfaceDefault(frame.surface);
    cResult[0] = frame.surface;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  _require = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
    const items1 = [tmp5];
    cResult[3] = tmp5;
    cResult[4] = T;
    cResult[5] = items1;
    tmp11 = items1;
    tmp10 = T;
  } else {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
    tmp11 = cResult[5];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp10, tmp11);
  if (cResult[6] !== stateFromStores) {
    let tmp14;
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
    if (null != stateFromStores) {
      class T {
        constructor() {
          return closure_6.getGuild(closure_0);
        }
      }
      const obj2 = { guild: stateFromStores, size: require("GuildIcon").GuildIconSizes.NORMAL };
      const tmp16 = GuildIconDefault;
      tmp14 = closure_10(tmp16, obj2);
    }
    cResult[6] = stateFromStores;
    cResult[7] = tmp14;
  } else {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
  }
  if (cResult[8] !== appName) {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
    const obj3 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 2, children: appName };
    cResult[8] = appName;
    cResult[9] = closure_10(require("Text/Text").Text, obj3);
    const tmp18 = closure_10(require("Text/Text").Text, obj3);
  } else {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
  }
  if (cResult[10] === tmp4.card) {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
  }
  const obj4 = { style: tmp4.card, children: items2 };
  items2 = [tmp13, tmp17];
  cResult[10] = tmp4.card;
  cResult[11] = tmp13;
  cResult[12] = tmp17;
  cResult[13] = closure_11(View, obj4);
  closure_11(View, obj4);
}) : (function StaticCard(arg0) {
  let appName;
  let closure_0;
  let frame;
  let items2;
  ({ frame, appName } = arg0);
  const tmp = closure_19();
  const tmp4 = getGuildIdForEmbeddedSurfaceDefault(frame.surface);
  _require = tmp4;
  const items = [GuildStore];
  const items1 = [tmp4];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  let tmp9 = null;
  const obj2 = { style: tmp.card, children: items2 };
  const tmp7 = closure_11;
  const tmp8 = View;
  if (null != stateFromStores) {
    const obj3 = { guild: stateFromStores, size: require("GuildIcon").GuildIconSizes.NORMAL };
    const tmp2Result = GuildIconDefault;
    tmp9 = closure_10(tmp2Result, obj3);
  }
  items2 = [tmp9, closure_10(require("Text/Text").Text, { variant: "text-xs/semibold", color: "text-strong", lineClamp: 2, children: appName })];
  return tmp7(tmp8, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function SoundBadge(frame) {
  const obj = react2;
  const cResult = obj.c(5);
  frame = frame.frame;
  const tmp4 = closure_19();
  const obj2 = conjureFrameSound;
  if (obj2.showsFrameSoundToggle(frame)) {
    let VoiceNormalIcon;
    let tmp6;
    if (frame.data.userMuted) {
      VoiceNormalIcon = tmp(11664).VoiceXIcon;
    } else {
      VoiceNormalIcon = tmp(8609).VoiceNormalIcon;
    }
    if (cResult[0] !== VoiceNormalIcon) {
      const obj3 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
      const tmp9 = authStore(VoiceNormalIcon, obj3);
      cResult[0] = VoiceNormalIcon;
      cResult[1] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] === tmp4.soundBadge) {
      let tmp10;
      if (cResult[3] === tmp6) {
        tmp10 = cResult[4];
      }
      return tmp10;
    }
    const obj4 = { style: tmp4.soundBadge, pointerEvents: "none", children: tmp6 };
    const tmp13 = authStore(View, obj4);
    cResult[2] = tmp4.soundBadge;
    cResult[3] = tmp6;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    return null;
  }
}) : (function SoundBadge(frame) {
  let obj3;
  frame = frame.frame;
  const tmp = closure_19();
  const obj = conjureFrameSound;
  if (obj.showsFrameSoundToggle(frame)) {
    let VoiceNormalIcon;
    if (frame.data.userMuted) {
      VoiceNormalIcon = tmp2(11664).VoiceXIcon;
    } else {
      VoiceNormalIcon = tmp2(8609).VoiceNormalIcon;
    }
    const obj2 = { style: tmp.soundBadge, pointerEvents: "none", children: authStore(VoiceNormalIcon, obj3) };
    obj3 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
    return authStore(View, obj2);
  } else {
    return null;
  }
});
const __initData = { code: "function ConjureAppPictureInPictureTsx1(specs){const{getPictureInPictureBounds,windowWidth,windowHeight,safeArea,size}=this.__closure;return getPictureInPictureBounds({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:size,topAvoidance:specs.top,bottomAvoidance:specs.bottom});}" };
let closure_23 = { code: "function ConjureAppPictureInPictureTsx2(){const{dragging,overCloseTarget,closeTargetShown,closeTargetHovered}=this.__closure;dragging.set(false);overCloseTarget.set(false);closeTargetShown.set(false);closeTargetHovered.set(false);}" };
let closure_24 = { code: "function ConjureAppPictureInPictureTsx3(event_0){const{overCloseTarget,closing,runOnJS,closeAfterShrink,position,getSnappedPosition,getBounds,avoidance}=this.__closure;if(overCloseTarget.get()){closing.set(true);runOnJS(closeAfterShrink)();return;}position.set(getSnappedPosition(position.get(),{x:event_0.velocityX,y:event_0.velocityY},getBounds(avoidance.get())));}" };
let closure_25 = { code: "function ConjureAppPictureInPictureTsx4(event){const{dragStart,position,isOverCloseTarget,closeTargetCenter,overCloseTarget,closeTargetHovered,runOnJS,hapticOverCloseTarget}=this.__closure;var start=dragStart.get();position.set({x:start.x+event.translationX,y:start.y+event.translationY});var over=isOverCloseTarget({x:event.absoluteX,y:event.absoluteY},closeTargetCenter);if(over!==overCloseTarget.get()){overCloseTarget.set(over);closeTargetHovered.set(over);if(over){runOnJS(hapticOverCloseTarget)();}}}" };
const __initData2 = { code: "function ConjureAppPictureInPictureTsx5(){const{moved,dragStart,clampToBounds,position,getBounds,avoidance,dragging,closeTargetShown}=this.__closure;moved.set(true);dragStart.set(clampToBounds(position.get(),getBounds(avoidance.get())));dragging.set(true);closeTargetShown.set(true);}" };
const __initData3 = { code: "function ConjureAppPictureInPictureTsx6(){const{showConjureAppPictureInPictureActions,frameId,appName}=this.__closure;return showConjureAppPictureInPictureActions(frameId,appName);}" };
let closure_28 = { code: "function ConjureAppPictureInPictureTsx7(_event,success){const{open}=this.__closure;if(success){open();}}" };
const __initData4 = { code: "function ConjureAppPictureInPictureTsx8(){const{dragging,overCloseTarget,closing,position,clampToBounds,getBounds,avoidance,DRAGGING_SCALE,closeTargetCenter,size,OVER_CLOSE_TARGET_SCALE,FOLLOW_SPRING,SETTLE_SPRING,withTiming,CLOSE_ANIMATION_MS,withSpring}=this.__closure;const isDragging=dragging.get();const onCloseTarget=overCloseTarget.get()||closing.get();let{x:x,y:y}=isDragging?position.get():clampToBounds(position.get(),getBounds(avoidance.get()));let scale=isDragging?DRAGGING_SCALE:1;if(onCloseTarget){x=closeTargetCenter.x-size.width/2;y=closeTargetCenter.y-size.height/2;scale=closing.get()?0:OVER_CLOSE_TARGET_SCALE;}const spring=isDragging&&!onCloseTarget?FOLLOW_SPRING:SETTLE_SPRING;return{width:size.width,height:size.height,opacity:closing.get()?withTiming(0,{duration:CLOSE_ANIMATION_MS}):1,transform:[{translateX:withSpring(x,spring)},{translateY:withSpring(y,spring)},{scale:withSpring(scale,spring)}]};}" };
const __initData5 = { code: "function ConjureAppPictureInPictureTsx9(specs){const{getPictureInPictureBounds,windowWidth,windowHeight,safeArea,size}=this.__closure;return getPictureInPictureBounds({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:size,topAvoidance:specs.top,bottomAvoidance:specs.bottom});}" };
let closure_31 = { code: "function ConjureAppPictureInPictureTsx10(){const{dragging,overCloseTarget,closeTargetShown,closeTargetHovered}=this.__closure;dragging.set(false);overCloseTarget.set(false);closeTargetShown.set(false);closeTargetHovered.set(false);}" };
let closure_32 = { code: "function ConjureAppPictureInPictureTsx11(event_0){const{overCloseTarget,closing,runOnJS,closeAfterShrink,position,getSnappedPosition,getBounds,avoidance}=this.__closure;if(overCloseTarget.get()){closing.set(true);runOnJS(closeAfterShrink)();return;}position.set(getSnappedPosition(position.get(),{x:event_0.velocityX,y:event_0.velocityY},getBounds(avoidance.get())));}" };
let closure_33 = { code: "function ConjureAppPictureInPictureTsx12(event){const{dragStart,position,isOverCloseTarget,closeTargetCenter,overCloseTarget,closeTargetHovered,runOnJS,hapticOverCloseTarget}=this.__closure;const start=dragStart.get();position.set({x:start.x+event.translationX,y:start.y+event.translationY});const over=isOverCloseTarget({x:event.absoluteX,y:event.absoluteY},closeTargetCenter);if(over!==overCloseTarget.get()){overCloseTarget.set(over);closeTargetHovered.set(over);if(over)runOnJS(hapticOverCloseTarget)();}}" };
let closure_34 = { code: "function ConjureAppPictureInPictureTsx13(){const{moved,dragStart,clampToBounds,position,getBounds,avoidance,dragging,closeTargetShown}=this.__closure;moved.set(true);dragStart.set(clampToBounds(position.get(),getBounds(avoidance.get())));dragging.set(true);closeTargetShown.set(true);}" };
let closure_35 = { code: "function ConjureAppPictureInPictureTsx14(_event,success){const{open}=this.__closure;if(success)open();}" };
const __initData6 = { code: "function ConjureAppPictureInPictureTsx15(){const{dragging,overCloseTarget,closing,position,clampToBounds,getBounds,avoidance,DRAGGING_SCALE,closeTargetCenter,size,OVER_CLOSE_TARGET_SCALE,FOLLOW_SPRING,SETTLE_SPRING,withTiming,CLOSE_ANIMATION_MS,withSpring}=this.__closure;const isDragging=dragging.get();const onCloseTarget=overCloseTarget.get()||closing.get();let{x:x,y:y}=isDragging?position.get():clampToBounds(position.get(),getBounds(avoidance.get()));let scale=isDragging?DRAGGING_SCALE:1;if(onCloseTarget){x=closeTargetCenter.x-size.width/2;y=closeTargetCenter.y-size.height/2;scale=closing.get()?0:OVER_CLOSE_TARGET_SCALE;}const spring=isDragging&&!onCloseTarget?FOLLOW_SPRING:SETTLE_SPRING;return{width:size.width,height:size.height,opacity:closing.get()?withTiming(0,{duration:CLOSE_ANIMATION_MS}):1,transform:[{translateX:withSpring(x,spring)},{translateY:withSpring(y,spring)},{scale:withSpring(scale,spring)}]};}" };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppPictureInPicture(frameId) {
  let closure_18;
  let first;
  let tmp7;
  let tmp8;
  let tmp = frameId;
  let tmp2 = size;
  let obj = frameId(size[13]);
  const cResult = obj.c(103);
  frameId = frameId.frameId;
  const index = frameId.index;
  size = frameId.size;
  const windowWidth = frameId.windowWidth;
  const windowHeight = frameId.windowHeight;
  const safeArea = frameId.safeArea;
  const avoidance = frameId.avoidance;
  const closeTargetCenter = frameId.closeTargetCenter;
  const closeTargetShown = frameId.closeTargetShown;
  const closeTargetHovered = frameId.closeTargetHovered;
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [safeArea];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== frameId) {
    const fn = function l() {
      return metroImportAll(FramesStore.getFrame(frameId));
    };
    const items1 = [frameId];
    let num2 = 1;
    cResult[1] = frameId;
    cResult[2] = fn;
    let num4 = 3;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(tmp2[15]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  let applicationId;
  const useGetOrFetchApplication = tmp(tmp2[21]).useGetOrFetchApplication;
  tmp(tmp2[21]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(applicationId);
  let str;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  tmp(tmp2[22]);
  if (cResult[4] === safeArea) {
    if (cResult[5] === size) {
      if (cResult[6] === windowHeight) {
        let tmp15;
        if (cResult[7] === windowWidth) {
          tmp15 = cResult[8];
        }
        let closure_11 = tmp15;
        const useSharedValue = tmp(tmp2[25]).useSharedValue;
        tmp(tmp2[25]);
        const tmpResult14 = tmp(tmp2[24]);
        const sharedValue = useSharedValue(tmpResult14.getStackedPosition(index, size, tmp15(avoidance.get())));
        const tmpResult15 = tmp(tmp2[25]);
        const sharedValue1 = tmpResult15.useSharedValue(sharedValue.get());
        const tmpResult16 = tmp(tmp2[25]);
        const sharedValue2 = tmpResult16.useSharedValue(false);
        if (cResult[9] === avoidance) {
          if (cResult[10] === tmp15) {
            if (cResult[11] === index) {
              if (cResult[12] === sharedValue2) {
                if (cResult[13] === sharedValue) {
                  let tmp20;
                  let tmp21;
                  let tmp27;
                  if (cResult[14] === size) {
                    tmp20 = cResult[15];
                    tmp21 = cResult[16];
                  }
                  const effect = windowWidth.useEffect(tmp20, tmp21);
                  const tmpResult17 = tmp(tmp2[25]);
                  const sharedValue3 = tmpResult17.useSharedValue(false);
                  const tmpResult18 = tmp(tmp2[25]);
                  const sharedValue4 = tmpResult18.useSharedValue(false);
                  const tmpResult19 = tmp(tmp2[25]);
                  const sharedValue5 = tmpResult19.useSharedValue(false);
                  if (cResult[17] !== frameId) {
                    function se() {
                      const tmp = metroImportAll(FramesStore.getFrame(frameId));
                      if (null != tmp) {
                        const obj = conjureBackgroundFrames;
                        const result = obj.returnToConjureFrameSurface(tmp);
                      }
                    }
                    cResult[17] = frameId;
                    cResult[18] = se;
                    tmp27 = se;
                  } else {
                    tmp27 = cResult[18];
                  }
                  presentation = tmp27;
                  if (cResult[19] === str) {
                    let tmp30;
                    let tmp31;
                    if (cResult[22] !== frameId) {
                      function de() {
                        const timerId = setTimeout(() => index(size[27])(frameId), c13);
                      }
                      cResult[22] = frameId;
                      cResult[23] = de;
                      tmp30 = de;
                    } else {
                      tmp30 = cResult[23];
                    }
                    closure_19 = tmp30;
                    const _Symbol = Symbol;
                    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                      function _e() {
                        const obj = frameId(size[28]);
                        return obj.triggerHapticFeedback(frameId(size[28]).HapticFeedbackTypes.IMPACT_MEDIUM);
                      }
                      cResult[24] = _e;
                      tmp31 = _e;
                    } else {
                      tmp31 = cResult[24];
                    }
                    closure_20 = tmp31;
                    if (cResult[25] === avoidance) {
                      if (cResult[26] === tmp30) {
                        if (cResult[27] === closeTargetCenter) {
                          if (cResult[28] === closeTargetHovered) {
                            if (cResult[29] === closeTargetShown) {
                              if (cResult[30] === sharedValue5) {
                                if (cResult[31] === sharedValue1) {
                                  if (cResult[32] === sharedValue3) {
                                    if (cResult[33] === tmp15) {
                                      if (cResult[34] === sharedValue2) {
                                        if (cResult[35] === tmp27) {
                                          if (cResult[36] === sharedValue4) {
                                            if (cResult[37] === sharedValue) {
                                              let mapped1;
                                              const tmpResult20 = tmp(tmp2[25]);
                                              class Oe {
                                                constructor() {
                                                  let items;
                                                  let obj5;
                                                  let obj7;
                                                  let obj9;
                                                  let value5;
                                                  let x;
                                                  let y;
                                                  const value = sharedValue3.get();
                                                  const value4 = sharedValue4.get() || sharedValue5.get();
                                                  if (value) {
                                                    value5 = sharedValue.get();
                                                  } else {
                                                    const clampToBounds = conjureAppPictureInPictureLayout.clampToBounds;
                                                    conjureAppPictureInPictureLayout;
                                                    const value6 = sharedValue.get();
                                                    value5 = clampToBounds(value6, closure_11(avoidance.get()));
                                                  }
                                                  ({ x, y } = value5);
                                                  let num = 1;
                                                  let num2 = 1;
                                                  if (value) {
                                                    num2 = c14;
                                                  }
                                                  if (value4) {
                                                    const diff = closeTargetCenter.x - size.width / 2;
                                                    const diff1 = closeTargetCenter.y - size.height / 2;
                                                    let num4 = 0;
                                                    if (!sharedValue5.get()) {
                                                      num4 = c15;
                                                    }
                                                    num2 = num4;
                                                    y = diff1;
                                                    x = diff;
                                                  }
                                                  if (value) {
                                                    let tmp18;
                                                    if (!value4) {
                                                      tmp18 = closure_16;
                                                    }
                                                    size = { width: null, height: null, opacity: num, transform: items };
                                                    ({ width: obj.width, height: obj.height } = size);
                                                    if (sharedValue5.get()) {
                                                      const obj3 = { duration };
                                                      const obj2 = timing;
                                                      num = obj2.withTiming(0, obj3);
                                                    }
                                                    const obj4 = { translateX: obj5.withSpring(x, tmp18) };
                                                    items = [obj4, , ];
                                                    obj5 = spring;
                                                    const obj6 = { translateY: obj7.withSpring(y, tmp18) };
                                                    items[1] = obj6;
                                                    obj7 = spring;
                                                    const obj8 = { scale: obj9.withSpring(num2, tmp18) };
                                                    items[2] = obj8;
                                                    obj9 = spring;
                                                    return size;
                                                  }
                                                  tmp18 = closure_17;
                                                }
                                              }
                                              let obj2 = { dragging: sharedValue3, overCloseTarget: sharedValue4, closing: sharedValue5, position: null, clampToBounds: tmp(tmp2[24]).clampToBounds, getBounds: tmp15, avoidance, DRAGGING_SCALE: null, closeTargetCenter, size, OVER_CLOSE_TARGET_SCALE: sharedValue3, FOLLOW_SPRING: sharedValue4, SETTLE_SPRING: sharedValue5, withTiming: tmp(tmp2[30]).withTiming, CLOSE_ANIMATION_MS: sharedValue1, withSpring: tmp(tmp2[31]).withSpring };
                                              class ConjureAppPictureInPictureTsx5 {
                                                constructor() {
                                                  result = closure_14.set(true);
                                                  set = closure_13.set;
                                                  tmp2 = closure_0(closure_2[24]);
                                                  clampToBounds = tmp2.clampToBounds;
                                                  value = closure_12.get();
                                                  result1 = set(clampToBounds(value, closure_11(avoidance.get())));
                                                  result2 = closure_15.set(true);
                                                  result3 = closeTargetShown.set(true);
                                                  return;
                                                }
                                              }
                                              const useAnimatedStyle = tmpResult20.useAnimatedStyle;
                                              class ConjureAppPictureInPictureTsx6 {
                                                constructor() {
                                                  obj = closure_0(closure_2[23]);
                                                  return obj.showConjureAppPictureInPictureActions(frameId, c10);
                                                }
                                              }
                                              Oe.__closure = obj2;
                                              Oe.__workletHash = 15874231221551;
                                              Oe.__initData = __initData4;
                                              const animatedStyle = useAnimatedStyle(Oe);
                                              if (cResult[68] === str) {
                                                if (cResult[69] === 2 === tmp14) {
                                                  let arr4;
                                                  if (cResult[70] === stateFromStores) {
                                                    arr4 = cResult[71];
                                                  }
                                                  if (cResult[72] !== arr4) {
                                                    function ye(arg0) {
                                                      let closure_0 = arg0;
                                                      const found = arr4.find((name) => name.name === nativeEvent.nativeEvent.actionName);
                                                      if (found != null) {
                                                        found.onPress();
                                                      }
                                                    }
                                                    cResult[72] = arr4;
                                                    class Oe {
                                                      constructor() {
                                                        let items;
                                                        let obj5;
                                                        let obj7;
                                                        let obj9;
                                                        let value5;
                                                        let x;
                                                        let y;
                                                        const value = sharedValue3.get();
                                                        const value4 = sharedValue4.get() || sharedValue5.get();
                                                        if (value) {
                                                          value5 = sharedValue.get();
                                                        } else {
                                                          const clampToBounds = conjureAppPictureInPictureLayout.clampToBounds;
                                                          conjureAppPictureInPictureLayout;
                                                          const value6 = sharedValue.get();
                                                          value5 = clampToBounds(value6, closure_11(avoidance.get()));
                                                        }
                                                        ({ x, y } = value5);
                                                        let num = 1;
                                                        let num2 = 1;
                                                        if (value) {
                                                          num2 = c14;
                                                        }
                                                        if (value4) {
                                                          const diff = closeTargetCenter.x - size.width / 2;
                                                          const diff1 = closeTargetCenter.y - size.height / 2;
                                                          let num4 = 0;
                                                          if (!sharedValue5.get()) {
                                                            num4 = c15;
                                                          }
                                                          num2 = num4;
                                                          y = diff1;
                                                          x = diff;
                                                        }
                                                        if (value) {
                                                          let tmp18;
                                                          if (!value4) {
                                                            tmp18 = closure_16;
                                                          }
                                                          size = { width: null, height: null, opacity: num, transform: items };
                                                          ({ width: obj.width, height: obj.height } = size);
                                                          if (sharedValue5.get()) {
                                                            const obj3 = { duration };
                                                            const obj2 = timing;
                                                            num = obj2.withTiming(0, obj3);
                                                          }
                                                          const obj4 = { translateX: obj5.withSpring(x, tmp18) };
                                                          items = [obj4, , ];
                                                          obj5 = spring;
                                                          const obj6 = { translateY: obj7.withSpring(y, tmp18) };
                                                          items[1] = obj6;
                                                          obj7 = spring;
                                                          const obj8 = { scale: obj9.withSpring(num2, tmp18) };
                                                          items[2] = obj8;
                                                          obj9 = spring;
                                                          return size;
                                                        }
                                                        tmp18 = closure_17;
                                                      }
                                                    }
                                                  }
                                                  if (null == stateFromStores) {
                                                    return null;
                                                  } else {
                                                    if (cResult[74] === animatedStyle) {
                                                      if (cResult[77] !== str) {
                                                        const intl = tmp(tmp2[32]).intl;
                                                        const formatToPlainString = intl.formatToPlainString;
                                                        let obj3 = { appName: null };
                                                        class Oe {
                                                          constructor() {
                                                            let items;
                                                            let obj5;
                                                            let obj7;
                                                            let obj9;
                                                            let value5;
                                                            let x;
                                                            let y;
                                                            const value = sharedValue3.get();
                                                            const value4 = sharedValue4.get() || sharedValue5.get();
                                                            if (value) {
                                                              value5 = sharedValue.get();
                                                            } else {
                                                              const clampToBounds = conjureAppPictureInPictureLayout.clampToBounds;
                                                              conjureAppPictureInPictureLayout;
                                                              const value6 = sharedValue.get();
                                                              value5 = clampToBounds(value6, closure_11(avoidance.get()));
                                                            }
                                                            ({ x, y } = value5);
                                                            let num = 1;
                                                            let num2 = 1;
                                                            if (value) {
                                                              num2 = c14;
                                                            }
                                                            if (value4) {
                                                              const diff = closeTargetCenter.x - size.width / 2;
                                                              const diff1 = closeTargetCenter.y - size.height / 2;
                                                              let num4 = 0;
                                                              if (!sharedValue5.get()) {
                                                                num4 = c15;
                                                              }
                                                              num2 = num4;
                                                              y = diff1;
                                                              x = diff;
                                                            }
                                                            if (value) {
                                                              let tmp18;
                                                              if (!value4) {
                                                                tmp18 = closure_16;
                                                              }
                                                              size = { width: null, height: null, opacity: num, transform: items };
                                                              ({ width: obj.width, height: obj.height } = size);
                                                              if (sharedValue5.get()) {
                                                                const obj3 = { duration };
                                                                const obj2 = timing;
                                                                num = obj2.withTiming(0, obj3);
                                                              }
                                                              const obj4 = { translateX: obj5.withSpring(x, tmp18) };
                                                              items = [obj4, , ];
                                                              obj5 = spring;
                                                              const obj6 = { translateY: obj7.withSpring(y, tmp18) };
                                                              items[1] = obj6;
                                                              obj7 = spring;
                                                              const obj8 = { scale: obj9.withSpring(num2, tmp18) };
                                                              items[2] = obj8;
                                                              obj9 = spring;
                                                              return size;
                                                            }
                                                            tmp18 = closure_17;
                                                          }
                                                        }
                                                        cResult[77] = str;
                                                        formatToPlainString(index(tmp2[33]).dPf03z, obj3);
                                                        class ConjureAppPictureInPictureTsx5 {
                                                          constructor() {
                                                            result = closure_14.set(true);
                                                            set = closure_13.set;
                                                            tmp2 = closure_0(closure_2[24]);
                                                            clampToBounds = tmp2.clampToBounds;
                                                            value = closure_12.get();
                                                            result1 = set(clampToBounds(value, closure_11(avoidance.get())));
                                                            result2 = closure_15.set(true);
                                                            result3 = closeTargetShown.set(true);
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      if (cResult[79] !== arr4) {
                                                        let tmp51;
                                                        const _Symbol2 = Symbol;
                                                        if (cResult[81] === Symbol.for("react.memo_cache_sentinel")) {
                                                          class Le {
                                                            constructor(name) {
                                                              return { name: name.name, label: name.label };
                                                            }
                                                          }
                                                          cResult[81] = Le;
                                                          tmp51 = Le;
                                                        } else {
                                                          class Le {
                                                            constructor(name) {
                                                              return { name: name.name, label: name.label };
                                                            }
                                                          }
                                                        }
                                                        const mapped = arr4.map(tmp51);
                                                        class Oe {
                                                          constructor() {
                                                            let items;
                                                            let obj5;
                                                            let obj7;
                                                            let obj9;
                                                            let value5;
                                                            let x;
                                                            let y;
                                                            const value = sharedValue3.get();
                                                            const value4 = sharedValue4.get() || sharedValue5.get();
                                                            if (value) {
                                                              value5 = sharedValue.get();
                                                            } else {
                                                              const clampToBounds = conjureAppPictureInPictureLayout.clampToBounds;
                                                              conjureAppPictureInPictureLayout;
                                                              const value6 = sharedValue.get();
                                                              value5 = clampToBounds(value6, closure_11(avoidance.get()));
                                                            }
                                                            ({ x, y } = value5);
                                                            let num = 1;
                                                            let num2 = 1;
                                                            if (value) {
                                                              num2 = c14;
                                                            }
                                                            if (value4) {
                                                              const diff = closeTargetCenter.x - size.width / 2;
                                                              const diff1 = closeTargetCenter.y - size.height / 2;
                                                              let num4 = 0;
                                                              if (!sharedValue5.get()) {
                                                                num4 = c15;
                                                              }
                                                              num2 = num4;
                                                              y = diff1;
                                                              x = diff;
                                                            }
                                                            if (value) {
                                                              let tmp18;
                                                              if (!value4) {
                                                                tmp18 = closure_16;
                                                              }
                                                              size = { width: null, height: null, opacity: num, transform: items };
                                                              ({ width: obj.width, height: obj.height } = size);
                                                              if (sharedValue5.get()) {
                                                                const obj3 = { duration };
                                                                const obj2 = timing;
                                                                num = obj2.withTiming(0, obj3);
                                                              }
                                                              const obj4 = { translateX: obj5.withSpring(x, tmp18) };
                                                              items = [obj4, , ];
                                                              obj5 = spring;
                                                              const obj6 = { translateY: obj7.withSpring(y, tmp18) };
                                                              items[1] = obj6;
                                                              obj7 = spring;
                                                              const obj8 = { scale: obj9.withSpring(num2, tmp18) };
                                                              items[2] = obj8;
                                                              obj9 = spring;
                                                              return size;
                                                            }
                                                            tmp18 = closure_17;
                                                          }
                                                        }
                                                        cResult[79] = arr4;
                                                        cResult[80] = mapped;
                                                      } else {
                                                        class Le {
                                                          constructor(name) {
                                                            return { name: name.name, label: name.label };
                                                          }
                                                        }
                                                      }
                                                      if (cResult[82] !== frameId) {
                                                        class Le {
                                                          constructor(name) {
                                                            return { name: name.name, label: name.label };
                                                          }
                                                        }
                                                        let obj4 = { frameId, level: tmp(tmp2[35]).FrameStackLevel.AboveAppContent, presentation };
                                                        class Oe {
                                                          constructor() {
                                                            let items;
                                                            let obj5;
                                                            let obj7;
                                                            let obj9;
                                                            let value5;
                                                            let x;
                                                            let y;
                                                            const value = sharedValue3.get();
                                                            const value4 = sharedValue4.get() || sharedValue5.get();
                                                            if (value) {
                                                              value5 = sharedValue.get();
                                                            } else {
                                                              const clampToBounds = conjureAppPictureInPictureLayout.clampToBounds;
                                                              conjureAppPictureInPictureLayout;
                                                              const value6 = sharedValue.get();
                                                              value5 = clampToBounds(value6, closure_11(avoidance.get()));
                                                            }
                                                            ({ x, y } = value5);
                                                            let num = 1;
                                                            let num2 = 1;
                                                            if (value) {
                                                              num2 = c14;
                                                            }
                                                            if (value4) {
                                                              const diff = closeTargetCenter.x - size.width / 2;
                                                              const diff1 = closeTargetCenter.y - size.height / 2;
                                                              let num4 = 0;
                                                              if (!sharedValue5.get()) {
                                                                num4 = c15;
                                                              }
                                                              num2 = num4;
                                                              y = diff1;
                                                              x = diff;
                                                            }
                                                            if (value) {
                                                              let tmp18;
                                                              if (!value4) {
                                                                tmp18 = closure_16;
                                                              }
                                                              size = { width: null, height: null, opacity: num, transform: items };
                                                              ({ width: obj.width, height: obj.height } = size);
                                                              if (sharedValue5.get()) {
                                                                const obj3 = { duration };
                                                                const obj2 = timing;
                                                                num = obj2.withTiming(0, obj3);
                                                              }
                                                              const obj4 = { translateX: obj5.withSpring(x, tmp18) };
                                                              items = [obj4, , ];
                                                              obj5 = spring;
                                                              const obj6 = { translateY: obj7.withSpring(y, tmp18) };
                                                              items[1] = obj6;
                                                              obj7 = spring;
                                                              const obj8 = { scale: obj9.withSpring(num2, tmp18) };
                                                              items[2] = obj8;
                                                              obj9 = spring;
                                                              return size;
                                                            }
                                                            tmp18 = closure_17;
                                                          }
                                                        }
                                                        const tmp57 = str(tmp55, obj4);
                                                        class ConjureAppPictureInPictureTsx5 {
                                                          constructor() {
                                                            result = closure_14.set(true);
                                                            set = closure_13.set;
                                                            tmp2 = closure_0(closure_2[24]);
                                                            clampToBounds = tmp2.clampToBounds;
                                                            value = closure_12.get();
                                                            result1 = set(clampToBounds(value, closure_11(avoidance.get())));
                                                            result2 = closure_15.set(true);
                                                            result3 = closeTargetShown.set(true);
                                                            return;
                                                          }
                                                        }
                                                        cResult[82] = frameId;
                                                        cResult[83] = tmp57;
                                                      } else {
                                                        class Le {
                                                          constructor(name) {
                                                            return { name: name.name, label: name.label };
                                                          }
                                                        }
                                                      }
                                                      class Oe {
                                                        constructor() {
                                                          let items;
                                                          let obj5;
                                                          let obj7;
                                                          let obj9;
                                                          let value5;
                                                          let x;
                                                          let y;
                                                          const value = sharedValue3.get();
                                                          const value4 = sharedValue4.get() || sharedValue5.get();
                                                          if (value) {
                                                            value5 = sharedValue.get();
                                                          } else {
                                                            const clampToBounds = conjureAppPictureInPictureLayout.clampToBounds;
                                                            conjureAppPictureInPictureLayout;
                                                            const value6 = sharedValue.get();
                                                            value5 = clampToBounds(value6, closure_11(avoidance.get()));
                                                          }
                                                          ({ x, y } = value5);
                                                          let num = 1;
                                                          let num2 = 1;
                                                          if (value) {
                                                            num2 = c14;
                                                          }
                                                          if (value4) {
                                                            const diff = closeTargetCenter.x - size.width / 2;
                                                            const diff1 = closeTargetCenter.y - size.height / 2;
                                                            let num4 = 0;
                                                            if (!sharedValue5.get()) {
                                                              num4 = c15;
                                                            }
                                                            num2 = num4;
                                                            y = diff1;
                                                            x = diff;
                                                          }
                                                          if (value) {
                                                            let tmp18;
                                                            if (!value4) {
                                                              tmp18 = closure_16;
                                                            }
                                                            size = { width: null, height: null, opacity: num, transform: items };
                                                            ({ width: obj.width, height: obj.height } = size);
                                                            if (sharedValue5.get()) {
                                                              const obj3 = { duration };
                                                              const obj2 = timing;
                                                              num = obj2.withTiming(0, obj3);
                                                            }
                                                            const obj4 = { translateX: obj5.withSpring(x, tmp18) };
                                                            items = [obj4, , ];
                                                            obj5 = spring;
                                                            const obj6 = { translateY: obj7.withSpring(y, tmp18) };
                                                            items[1] = obj6;
                                                            obj7 = spring;
                                                            const obj8 = { scale: obj9.withSpring(num2, tmp18) };
                                                            items[2] = obj8;
                                                            obj9 = spring;
                                                            return size;
                                                          }
                                                          tmp18 = closure_17;
                                                        }
                                                      }
                                                      let tmp60 = null;
                                                      if (sharedValue) {
                                                        class Le {
                                                          constructor(name) {
                                                            return { name: name.name, label: name.label };
                                                          }
                                                        }
                                                        let obj5 = { frame: stateFromStores, appName: null };
                                                        class Oe {
                                                          constructor() {
                                                            let items;
                                                            let obj5;
                                                            let obj7;
                                                            let obj9;
                                                            let value5;
                                                            let x;
                                                            let y;
                                                            const value = sharedValue3.get();
                                                            const value4 = sharedValue4.get() || sharedValue5.get();
                                                            if (value) {
                                                              value5 = sharedValue.get();
                                                            } else {
                                                              const clampToBounds = conjureAppPictureInPictureLayout.clampToBounds;
                                                              conjureAppPictureInPictureLayout;
                                                              const value6 = sharedValue.get();
                                                              value5 = clampToBounds(value6, closure_11(avoidance.get()));
                                                            }
                                                            ({ x, y } = value5);
                                                            let num = 1;
                                                            let num2 = 1;
                                                            if (value) {
                                                              num2 = c14;
                                                            }
                                                            if (value4) {
                                                              const diff = closeTargetCenter.x - size.width / 2;
                                                              const diff1 = closeTargetCenter.y - size.height / 2;
                                                              let num4 = 0;
                                                              if (!sharedValue5.get()) {
                                                                num4 = c15;
                                                              }
                                                              num2 = num4;
                                                              y = diff1;
                                                              x = diff;
                                                            }
                                                            if (value) {
                                                              let tmp18;
                                                              if (!value4) {
                                                                tmp18 = closure_16;
                                                              }
                                                              size = { width: null, height: null, opacity: num, transform: items };
                                                              ({ width: obj.width, height: obj.height } = size);
                                                              if (sharedValue5.get()) {
                                                                const obj3 = { duration };
                                                                const obj2 = timing;
                                                                num = obj2.withTiming(0, obj3);
                                                              }
                                                              const obj4 = { translateX: obj5.withSpring(x, tmp18) };
                                                              items = [obj4, , ];
                                                              obj5 = spring;
                                                              const obj6 = { translateY: obj7.withSpring(y, tmp18) };
                                                              items[1] = obj6;
                                                              obj7 = spring;
                                                              const obj8 = { scale: obj9.withSpring(num2, tmp18) };
                                                              items[2] = obj8;
                                                              obj9 = spring;
                                                              return size;
                                                            }
                                                            tmp18 = closure_17;
                                                          }
                                                        }
                                                        tmp60 = str(closure_20, obj5);
                                                      }
                                                      class ConjureAppPictureInPictureTsx5 {
                                                        constructor() {
                                                          result = closure_14.set(true);
                                                          set = closure_13.set;
                                                          tmp2 = closure_0(closure_2[24]);
                                                          clampToBounds = tmp2.clampToBounds;
                                                          value = closure_12.get();
                                                          result1 = set(clampToBounds(value, closure_11(avoidance.get())));
                                                          result2 = closure_15.set(true);
                                                          result3 = closeTargetShown.set(true);
                                                          return;
                                                        }
                                                      }
                                                      cResult[85] = stateFromStores;
                                                      cResult[86] = tmp60;
                                                    }
                                                    const items2 = [tmp4.window, animatedStyle];
                                                    class Oe {
                                                      constructor() {
                                                        let items;
                                                        let obj5;
                                                        let obj7;
                                                        let obj9;
                                                        let value5;
                                                        let x;
                                                        let y;
                                                        const value = sharedValue3.get();
                                                        const value4 = sharedValue4.get() || sharedValue5.get();
                                                        if (value) {
                                                          value5 = sharedValue.get();
                                                        } else {
                                                          const clampToBounds = conjureAppPictureInPictureLayout.clampToBounds;
                                                          conjureAppPictureInPictureLayout;
                                                          const value6 = sharedValue.get();
                                                          value5 = clampToBounds(value6, closure_11(avoidance.get()));
                                                        }
                                                        ({ x, y } = value5);
                                                        let num = 1;
                                                        let num2 = 1;
                                                        if (value) {
                                                          num2 = c14;
                                                        }
                                                        if (value4) {
                                                          const diff = closeTargetCenter.x - size.width / 2;
                                                          const diff1 = closeTargetCenter.y - size.height / 2;
                                                          let num4 = 0;
                                                          if (!sharedValue5.get()) {
                                                            num4 = c15;
                                                          }
                                                          num2 = num4;
                                                          y = diff1;
                                                          x = diff;
                                                        }
                                                        if (value) {
                                                          let tmp18;
                                                          if (!value4) {
                                                            tmp18 = closure_16;
                                                          }
                                                          size = { width: null, height: null, opacity: num, transform: items };
                                                          ({ width: obj.width, height: obj.height } = size);
                                                          if (sharedValue5.get()) {
                                                            const obj3 = { duration };
                                                            const obj2 = timing;
                                                            num = obj2.withTiming(0, obj3);
                                                          }
                                                          const obj4 = { translateX: obj5.withSpring(x, tmp18) };
                                                          items = [obj4, , ];
                                                          obj5 = spring;
                                                          const obj6 = { translateY: obj7.withSpring(y, tmp18) };
                                                          items[1] = obj6;
                                                          obj7 = spring;
                                                          const obj8 = { scale: obj9.withSpring(num2, tmp18) };
                                                          items[2] = obj8;
                                                          obj9 = spring;
                                                          return size;
                                                        }
                                                        tmp18 = closure_17;
                                                      }
                                                    }
                                                    cResult[74] = animatedStyle;
                                                    cResult[75] = tmp4.window;
                                                    class ConjureAppPictureInPictureTsx5 {
                                                      constructor() {
                                                        result = closure_14.set(true);
                                                        set = closure_13.set;
                                                        tmp2 = closure_0(closure_2[24]);
                                                        clampToBounds = tmp2.clampToBounds;
                                                        value = closure_12.get();
                                                        result1 = set(clampToBounds(value, closure_11(avoidance.get())));
                                                        result2 = closure_15.set(true);
                                                        result3 = closeTargetShown.set(true);
                                                        return;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              if (null != stateFromStores) {
                                                class Le {
                                                  constructor(name) {
                                                    return { name: name.name, label: name.label };
                                                  }
                                                }
                                                const conjureAppPictureInPictureActions = obj14.getConjureAppPictureInPictureActions(stateFromStores, str, tmp35);
                                                mapped1 = conjureAppPictureInPictureActions.map((label, index) => {
                                                  str = "activate";
                                                  if (0 !== index) {
                                                    const _HermesInternal = HermesInternal;
                                                    str = "action-" + index;
                                                  }
                                                  return { name: str, label: label.label, onPress: label.onPress };
                                                });
                                              } else {
                                                class Le {
                                                  constructor(name) {
                                                    return { name: name.name, label: name.label };
                                                  }
                                                }
                                              }
                                              cResult[68] = str;
                                              cResult[69] = 2 === tmp14;
                                              cResult[70] = stateFromStores;
                                              cResult[71] = mapped1;
                                              arr4 = mapped1;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    if (cResult[40] === avoidance) {
                      class Le {
                        constructor(name) {
                          return { name: name.name, label: name.label };
                        }
                      }
                    }
                    class ConjureAppPictureInPictureTsx5 {
                      constructor() {
                        result = closure_14.set(true);
                        set = closure_13.set;
                        tmp2 = closure_0(closure_2[24]);
                        clampToBounds = tmp2.clampToBounds;
                        value = closure_12.get();
                        result1 = set(clampToBounds(value, closure_11(avoidance.get())));
                        result2 = closure_15.set(true);
                        result3 = closeTargetShown.set(true);
                        return;
                      }
                    }
                    let obj6 = { moved: sharedValue2, dragStart: sharedValue1, clampToBounds: tmp(tmp2[24]).clampToBounds, position: sharedValue, getBounds: null, avoidance, dragging: sharedValue3, closeTargetShown };
                    class ConjureAppPictureInPictureTsx6 {
                      constructor() {
                        obj = closure_0(closure_2[23]);
                        return obj.showConjureAppPictureInPictureActions(frameId, c10);
                      }
                    }
                    ConjureAppPictureInPictureTsx5.__closure = obj6;
                    ConjureAppPictureInPictureTsx5.__workletHash = 13934479222574;
                    ConjureAppPictureInPictureTsx5.__initData = __initData2;
                    cResult[40] = avoidance;
                    cResult[41] = closeTargetShown;
                    cResult[42] = sharedValue1;
                    cResult[43] = sharedValue3;
                    cResult[44] = tmp15;
                    cResult[45] = sharedValue2;
                    cResult[46] = sharedValue;
                    cResult[47] = ConjureAppPictureInPictureTsx5;
                  }
                  class ConjureAppPictureInPictureTsx6 {
                    constructor() {
                      obj = closure_0(closure_2[23]);
                      return obj.showConjureAppPictureInPictureActions(frameId, c10);
                    }
                  }
                  let obj7 = { showConjureAppPictureInPictureActions: tmp(tmp2[23]).showConjureAppPictureInPictureActions, frameId, appName: str };
                  ConjureAppPictureInPictureTsx6.__closure = obj7;
                  ConjureAppPictureInPictureTsx6.__workletHash = 12742354947175;
                  ConjureAppPictureInPictureTsx6.__initData = __initData3;
                  cResult[19] = str;
                  cResult[20] = frameId;
                  cResult[21] = ConjureAppPictureInPictureTsx6;
                }
              }
            }
          }
        }
        function ee() {
          if (!sharedValue2.get()) {
            set = sharedValue.set;
            const obj = conjureAppPictureInPictureLayout;
            const result = set(obj.getStackedPosition(index, size, closure_11(avoidance.get())));
          }
        }
        const items3 = [avoidance, tmp15, index, sharedValue2, sharedValue, size];
        cResult[9] = avoidance;
        cResult[10] = tmp15;
        cResult[11] = index;
        cResult[12] = sharedValue2;
        cResult[13] = sharedValue;
        cResult[14] = size;
        cResult[15] = ee;
        cResult[16] = items3;
        tmp21 = items3;
        tmp20 = ee;
      }
    }
  }
  const fn2 = function $(top) {
    const obj = conjureAppPictureInPictureLayout;
    const obj2 = { windowWidth, windowHeight, safeArea, size, topAvoidance: top.top, bottomAvoidance: top.bottom };
    return obj.getPictureInPictureBounds(obj2);
  };
  let obj8 = { getPictureInPictureBounds: tmp(tmp2[24]).getPictureInPictureBounds, windowWidth, windowHeight, safeArea, size };
  fn2.__closure = obj8;
  fn2.__workletHash = 15664785095562;
  fn2.__initData = __initData;
  cResult[4] = safeArea;
  cResult[5] = size;
  cResult[6] = windowHeight;
  cResult[7] = windowWidth;
  cResult[8] = fn2;
  tmp15 = fn2;
}) : (function ConjureAppPictureInPicture(frameId) {
  let GestureDetector;
  let intl;
  let items10;
  let items11;
  let items9;
  let obj5;
  let obj6;
  let obj7;
  frameId = frameId.frameId;
  const index = frameId.index;
  size = frameId.size;
  const windowWidth = frameId.windowWidth;
  const windowHeight = frameId.windowHeight;
  const safeArea = frameId.safeArea;
  const avoidance = frameId.avoidance;
  const closeTargetCenter = frameId.closeTargetCenter;
  const closeTargetShown = frameId.closeTargetShown;
  const closeTargetHovered = frameId.closeTargetHovered;
  let str;
  closure_12 = undefined;
  let callback;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let memo1;
  let tmp = sharedValue5();
  let tmp2 = frameId;
  let tmp3 = size;
  let obj = frameId(size[15]);
  let items = [safeArea];
  const items1 = [frameId];
  const stateFromStores = obj.useStateFromStores(items, () => metroImportAll(FramesStore.getFrame(frameId)), items1);
  const tmp5 = frameId(size[21]);
  let applicationId;
  const useGetOrFetchApplication = tmp5.useGetOrFetchApplication;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(applicationId);
  str = undefined;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  let tmp2Result = tmp2(tmp3[22]);
  const tmp8 = 2 === tmp2Result.useEmbeddedAppShimVersion(tmp2(tmp3[23]).CONJURE_APP_PICTURE_IN_PICTURE_LOCATION);
  closure_12 = tmp8;
  class L {
    constructor(top) {
      const obj = conjureAppPictureInPictureLayout;
      const obj2 = { windowWidth, windowHeight, safeArea, size, topAvoidance: top.top, bottomAvoidance: top.bottom };
      return obj.getPictureInPictureBounds(obj2);
    }
  }
  let obj2 = { getPictureInPictureBounds: tmp2(tmp3[24]).getPictureInPictureBounds, windowWidth, windowHeight, safeArea, size };
  L.__closure = obj2;
  L.__workletHash = 2986408403330;
  L.__initData = __initData5;
  const items2 = [windowWidth, windowHeight, safeArea, size];
  callback = windowWidth.useCallback(L, items2);
  const useSharedValue = tmp2(tmp3[25]).useSharedValue;
  tmp2(tmp3[25]);
  const tmp2Result10 = tmp2(tmp3[24]);
  sharedValue = useSharedValue(tmp2Result10.getStackedPosition(index, size, callback(avoidance.get())));
  const tmp2Result11 = tmp2(tmp3[25]);
  sharedValue1 = tmp2Result11.useSharedValue(sharedValue.get());
  const tmp2Result12 = tmp2(tmp3[25]);
  sharedValue2 = tmp2Result12.useSharedValue(false);
  const items3 = [avoidance, callback, index, sharedValue2, sharedValue, size];
  const effect = windowWidth.useEffect(() => {
    if (!sharedValue2.get()) {
      set = sharedValue.set;
      const obj = conjureAppPictureInPictureLayout;
      const result = set(obj.getStackedPosition(index, size, callback(avoidance.get())));
    }
  }, items3);
  const tmp2Result13 = tmp2(tmp3[25]);
  sharedValue3 = tmp2Result13.useSharedValue(false);
  const tmp2Result14 = tmp2(tmp3[25]);
  sharedValue4 = tmp2Result14.useSharedValue(false);
  const tmp2Result15 = tmp2(tmp3[25]);
  sharedValue5 = tmp2Result15.useSharedValue(false);
  const items4 = [frameId];
  callback1 = windowWidth.useCallback(() => {
    const tmp = metroImportAll(FramesStore.getFrame(frameId));
    if (null != tmp) {
      const obj = conjureBackgroundFrames;
      const result = obj.returnToConjureFrameSurface(tmp);
    }
  }, items4);
  const items5 = [frameId, str];
  callback2 = windowWidth.useCallback(() => {
    const obj = conjureAppPictureInPictureActions2;
    return obj.showConjureAppPictureInPictureActions(frameId, str);
  }, items5);
  const items6 = [frameId];
  callback3 = windowWidth.useCallback(() => {
    const timerId = setTimeout(() => index(size[27])(frameId), c13);
  }, items6);
  callback4 = windowWidth.useCallback(() => {
    const obj = frameId(size[28]);
    return obj.triggerHapticFeedback(frameId(size[28]).HapticFeedbackTypes.IMPACT_MEDIUM);
  }, []);
  const items7 = [avoidance, callback3, sharedValue5, sharedValue1, sharedValue3, callback, callback4, sharedValue2, callback1, sharedValue4, sharedValue, callback2, closeTargetCenter, closeTargetHovered, closeTargetShown];
  const memo = windowWidth.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const fn = function s() {
      const result = sharedValue2.set(true);
      set = sharedValue1.set;
      const clampToBounds = frameId(size[24]).clampToBounds;
      frameId(size[24]);
      const value = sharedValue.get();
      const result1 = set(clampToBounds(value, duration(avoidance.get())));
      const result2 = sharedValue3.set(true);
      const result3 = closeTargetShown.set(true);
    };
    const maxPointersResult = PanResult.maxPointers(1);
    const minDistanceResult = maxPointersResult.minDistance(MIN_PAN_GESTURE_MOVE);
    const obj = { moved: sharedValue2, dragStart: sharedValue1, clampToBounds: conjureAppPictureInPictureLayout.clampToBounds, position: sharedValue, getBounds: callback, avoidance, dragging: sharedValue3, closeTargetShown };
    fn.__closure = obj;
    fn.__workletHash = 10818118775353;
    fn.__initData = __initData4;
    const fn2 = function n(translationX) {
      const point = sharedValue1.get();
      const point1 = { x: point.x + translationX.translationX, y: point.y + translationX.translationY };
      const result = sharedValue.set(point1);
      const point2 = { x: translationX.absoluteX, y: translationX.absoluteY };
      const obj2 = frameId(size[24]);
      const isOverCloseTargetResult = obj2.isOverCloseTarget(point2, closeTargetCenter);
      const obj4 = sharedValue4;
      const tmp2 = frameId;
      const tmp3 = size;
      if (isOverCloseTargetResult !== sharedValue4.get()) {
        const result1 = obj4.set(isOverCloseTargetResult);
        const result2 = closeTargetHovered.set(isOverCloseTargetResult);
        if (isOverCloseTargetResult) {
          const tmp2Result = tmp2(tmp3[25]);
          tmp2Result.runOnJS(callback4)();
        }
      }
    };
    const onStartResult = minDistanceResult.onStart(fn);
    let obj2 = { dragStart: sharedValue1, position: sharedValue, isOverCloseTarget: conjureAppPictureInPictureLayout.isOverCloseTarget, closeTargetCenter, overCloseTarget: sharedValue4, closeTargetHovered, runOnJS: ReanimatedRexport.runOnJS, hapticOverCloseTarget: callback4 };
    fn2.__closure = obj2;
    fn2.__workletHash = 9718748527055;
    fn2.__initData = __initData3;
    const fn3 = function o(arg0) {
      if (sharedValue4.get()) {
        const result = sharedValue5.set(true);
        const obj2 = frameId(size[25]);
        obj2.runOnJS(callback3)();
      } else {
        set = sharedValue.set;
        const getSnappedPosition = frameId(size[24]).getSnappedPosition;
        const point = { x: null, y: null };
        ({ velocityX: obj.x, velocityY: obj.y } = arg0);
        frameId(size[24]);
        const value = sharedValue.get();
        const result1 = set(getSnappedPosition(value, point, duration(avoidance.get())));
      }
    };
    const onUpdateResult = onStartResult.onUpdate(fn2);
    fn3.__closure = { overCloseTarget: sharedValue4, closing: sharedValue5, runOnJS: ReanimatedRexport.runOnJS, closeAfterShrink: callback3, position: sharedValue, getSnappedPosition: conjureAppPictureInPictureLayout.getSnappedPosition, getBounds: callback, avoidance };
    fn3.__workletHash = 4339367475964;
    fn3.__initData = __initData2;
    ({ overCloseTarget: sharedValue4, closing: sharedValue5, runOnJS: ReanimatedRexport.runOnJS, closeAfterShrink: callback3, position: sharedValue, getSnappedPosition: conjureAppPictureInPictureLayout.getSnappedPosition, getBounds: callback, avoidance });
    const fn4 = function t() {
      const result = sharedValue3.set(false);
      const result1 = sharedValue4.set(false);
      const result2 = closeTargetShown.set(false);
      const result3 = closeTargetHovered.set(false);
    };
    fn4.__closure = { dragging: sharedValue3, overCloseTarget: sharedValue4, closeTargetShown, closeTargetHovered };
    fn4.__workletHash = 9456167623648;
    fn4.__initData = __initData;
    const onEndResult = onUpdateResult.onEnd(fn3);
    const onFinalizeResult = onEndResult.onFinalize(fn4);
    const Gesture2 = LegacyBaseButton.Gesture;
    const LongPressResult = Gesture2.LongPress();
    const runOnJSResult = LongPressResult.runOnJS(true);
    const minDurationResult = runOnJSResult.minDuration(400);
    const onStartResult1 = minDurationResult.onStart(callback2);
    const Gesture3 = LegacyBaseButton.Gesture;
    const fn5 = function c(arg0, arg1) {
      const tmp = arg1;
      if (tmp) {
        callback1();
      }
    };
    let obj4 = { open: callback1 };
    fn5.__closure = obj4;
    fn5.__workletHash = 9906742879619;
    fn5.__initData = __initData5;
    const TapResult = Gesture3.Tap();
    const runOnJSResult1 = TapResult.runOnJS(true);
    const onEndResult1 = runOnJSResult1.onEnd(fn5);
    const Gesture4 = LegacyBaseButton.Gesture;
    return Gesture4.Race(onFinalizeResult, onStartResult1, onEndResult1);
  }, items7);
  let fn = function q() {
    let items;
    let obj5;
    let obj7;
    let obj9;
    let value5;
    let x;
    let y;
    const value = sharedValue3.get();
    const value4 = sharedValue4.get() || sharedValue5.get();
    if (value) {
      value5 = sharedValue.get();
    } else {
      const clampToBounds = conjureAppPictureInPictureLayout.clampToBounds;
      conjureAppPictureInPictureLayout;
      const value6 = sharedValue.get();
      value5 = clampToBounds(value6, callback(avoidance.get()));
    }
    ({ x, y } = value5);
    let num = 1;
    let num2 = 1;
    if (value) {
      num2 = c14;
    }
    if (value4) {
      const diff = closeTargetCenter.x - size.width / 2;
      const diff1 = closeTargetCenter.y - size.height / 2;
      let num4 = 0;
      if (!sharedValue5.get()) {
        num4 = c15;
      }
      num2 = num4;
      y = diff1;
      x = diff;
    }
    if (value) {
      let tmp18;
      if (!value4) {
        tmp18 = closure_16;
      }
      size = { width: null, height: null, opacity: num, transform: items };
      ({ width: obj.width, height: obj.height } = size);
      if (sharedValue5.get()) {
        const obj3 = { duration };
        const obj2 = timing;
        num = obj2.withTiming(0, obj3);
      }
      const obj4 = { translateX: obj5.withSpring(x, tmp18) };
      items = [obj4, , ];
      obj5 = spring;
      const obj6 = { translateY: obj7.withSpring(y, tmp18) };
      items[1] = obj6;
      obj7 = spring;
      const obj8 = { scale: obj9.withSpring(num2, tmp18) };
      items[2] = obj8;
      obj9 = spring;
      return size;
    }
    tmp18 = closure_17;
  };
  const tmp2Result16 = tmp2(tmp3[25]);
  let obj3 = { dragging: sharedValue3, overCloseTarget: sharedValue4, closing: sharedValue5, position: sharedValue, clampToBounds: tmp2(tmp3[24]).clampToBounds, getBounds: callback, avoidance, DRAGGING_SCALE: sharedValue, closeTargetCenter, size, OVER_CLOSE_TARGET_SCALE: sharedValue1, FOLLOW_SPRING: sharedValue2, SETTLE_SPRING: sharedValue3, withTiming: tmp2(tmp3[30]).withTiming, CLOSE_ANIMATION_MS: callback, withSpring: tmp2(tmp3[31]).withSpring };
  fn.__closure = obj3;
  fn.__workletHash = 16777681197747;
  fn.__initData = __initData6;
  const items8 = [stateFromStores, str, tmp8];
  const animatedStyle = tmp2Result16.useAnimatedStyle(fn);
  memo1 = windowWidth.useMemo(() => {
    let mapped;
    if (null != stateFromStores) {
      const obj = conjureAppPictureInPictureActions2;
      const conjureAppPictureInPictureActions = obj.getConjureAppPictureInPictureActions(tmp, str, closure_12);
      mapped = conjureAppPictureInPictureActions.map((label, index) => {
        str = "activate";
        if (0 !== index) {
          const _HermesInternal = HermesInternal;
          str = "action-" + index;
        }
        return { name: str, label: label.label, onPress: label.onPress };
      });
    } else {
      mapped = [];
    }
    return mapped;
  }, items8);
  [][0] = memo1;
  let tmp25Result2 = null;
  if (null != stateFromStores) {
    let obj4 = { theme: closeTargetCenter.DARK, children: tmp25(GestureDetector, obj5) };
    const ThemeContextProvider = tmp2(tmp3[36]).ThemeContextProvider;
    obj5 = { gesture: memo, children: tmp27(View, obj6) };
    GestureDetector = tmp2(tmp3[29]).GestureDetector;
    obj6 = { style: items9, accessible: true, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(index(tmp3[33]).dPf03z, obj7), accessibilityActions: memo1.map((name) => ({ name: name.name, label: name.label })), onAccessibilityAction: tmp23, children: items11 };
    items9 = [tmp.window, animatedStyle];
    View = index(tmp3[25]).View;
    intl = tmp2(tmp3[32]).intl;
    obj7 = { appName: str };
    let obj8 = { style: tmp.mask, pointerEvents: "none", children: items10 };
    let obj9 = { frameId, level: tmp2(tmp3[35]).FrameStackLevel.AboveAppContent, presentation: sharedValue4 };
    const tmp30 = index(tmp3[34]);
    items10 = [stateFromStores(tmp30, obj9), ];
    let tmp25Result = null;
    const tmp29 = windowHeight;
    if (closure_12) {
      const obj10 = { frame: stateFromStores, appName: str };
      tmp25Result = tmp25(callback1, obj10);
    }
    items10[1] = tmp25Result;
    items11 = [tmp27(tmp29, obj8), ];
    const obj11 = { frame: stateFromStores };
    items11[1] = stateFromStores(callback2, obj11);
    tmp25Result2 = tmp25(ThemeContextProvider, obj4);
  }
  return tmp25Result2;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPicture.tsx");

export default memoResult;
