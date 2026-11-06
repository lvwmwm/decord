// Module ID: 19420
// Function ID: 19421
// Name: ConjureAppPictureInPicture
// Dependencies: [19, 17, 6926, 5041, 1072, 19298, 6927, 11382, 21, 5127, 5170, 575, 19419, 9436, 504, 7045, 5781, 14755, 12125, 8765, 7414, 11997, 19421, 16628, 1652, 14599, 5406, 5450, 1705, 5400, 5791, 1113, 4024, 5229, 12424, 12428, 2]

// Module 19420 (ConjureAppPictureInPicture)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5450 */;
import getGuildIdForEmbeddedSurfaceDefault from "getGuildIdForEmbeddedSurface" /* 9436 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11382 */;
import conjureFrameSound from "conjureFrameSound" /* 14755 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 19298 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19419 */;
import conjureAppPictureInPictureActions2 from "conjureAppPictureInPictureActions" /* 19421 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6926 */;
import GuildStore from "GuildStore" /* 5041 */;
import FramesConstants from "FramesConstants" /* 6927 */;
import Fragment from "Fragment" /* 21 */;
import DeviceUtils_mod from "DeviceUtils" /* 5127 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, flag, point, point1, point2, result1, result2, result3, set, tmp3;

let FrameLayoutModes;
let c10;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let rect;
let rect1;
let rect2;
let size;
let tmp;
let tmp2;
let unpackModuleId;
const _mod1705 = tmp(1705);
const GuildIconDefault = tmp2(7045);
function StaticCard(arg0) {
  let appName;
  let closure_0;
  let frame;
  let items2;
  ({ frame, appName } = arg0);
  const tmp = closure_16();
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
  items2 = [tmp9, closure_10(require("Text/Text").Text, { variant: "body-xs/semibold", color: "text-strong", lineClamp: 2, children: appName })];
  return tmp7(tmp8, obj2);
}
function SoundBadge(frame) {
  let obj3;
  frame = frame.frame;
  const tmp = closure_16();
  const obj = conjureFrameSound;
  if (obj.showsFrameSoundToggle(frame)) {
    let VoiceNormalIcon;
    if (frame.data.userMuted) {
      VoiceNormalIcon = tmp2(12125).VoiceXIcon;
    } else {
      VoiceNormalIcon = tmp2(8765).VoiceNormalIcon;
    }
    const obj2 = { style: tmp.soundBadge, pointerEvents: "none", children: authStore(VoiceNormalIcon, obj3) };
    obj3 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
    return authStore(View, obj2);
  } else {
    return null;
  }
}
let View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
({ asLaunched: metroImportAll, FrameLayoutModes } = FramesConstants);
let MIN_PAN_GESTURE_MOVE = MorphablePanelConstants.MIN_PAN_GESTURE_MOVE;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let DeviceUtils = DeviceUtils_mod;
DeviceUtils = DeviceUtils.getRamSize();
if (DeviceUtils == null) {
  DeviceUtils = Infinity;
}
let tmp4 = DeviceUtils < 4;
let closure_12 = tmp4;
let closure_13 = { mass: 0.25, damping: 40, stiffness: 300, overshootClamping: true };
const duration = { mass: 0.4, damping: 22, stiffness: 220 };
let closure_15 = { layoutMode: FrameLayoutModes.PIP, portraitSafeAreasConfig: DEFAULT_PORTRAIT_LETTERBOX_CONFIG };
let createStyles = createStyles_mod;
let obj = { window: rect, content: { flex: 1 }, mask: obj2, interactiveMask: obj3, handle: obj4, grip: size, card: rect1, soundBadge: rect2 };
rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
obj3 = { borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none };
obj4 = { height: conjureAppPictureInPictureLayout.INTERACTIVE_HANDLE_HEIGHT, alignItems: "center", justifyContent: "center", borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_MUTED };
rect1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
rect2 = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_16 = createStyles(obj);
let closure_19 = { code: "(function ConjureAppPictureInPictureTsx1(specs){let[getPictureInPictureBounds,windowWidth,windowHeight,safeArea,windowSize]=this.__closure;return getPictureInPictureBounds({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:windowSize,topAvoidance:specs.top,bottomAvoidance:specs.bottom});})" };
let closure_20 = { code: "(function ConjureAppPictureInPictureTsx2(){let[moved,dragStart,clampToBounds,position,getBounds,avoidance,dragging,closeTargetShown]=this.__closure;moved.set(true);dragStart.set(clampToBounds(position.get(),getBounds(avoidance.get())));dragging.set(true);closeTargetShown.set(true);})" };
let closure_21 = { code: "(function ConjureAppPictureInPictureTsx3(event){let[dragStart,position,isOverCloseTarget,closeTargetCenter,overCloseTarget,closeTargetHovered,scheduleOnRN,hapticOverCloseTarget]=this.__closure;const start=dragStart.get();position.set({x:start.x+event.translationX,y:start.y+event.translationY});const over=isOverCloseTarget({x:event.absoluteX,y:event.absoluteY},closeTargetCenter);if(over!==overCloseTarget.get()){overCloseTarget.set(over);closeTargetHovered.set(over);if(over)scheduleOnRN(hapticOverCloseTarget);}})" };
let closure_22 = { code: "(function ConjureAppPictureInPictureTsx4(event){let[overCloseTarget,closing,scheduleOnRN,closeAfterShrink,position,getSnappedPosition,getBounds,avoidance]=this.__closure;if(overCloseTarget.get()){closing.set(true);scheduleOnRN(closeAfterShrink);return;}position.set(getSnappedPosition(position.get(),{x:event.velocityX,y:event.velocityY},getBounds(avoidance.get())));})" };
let closure_23 = { code: "(function ConjureAppPictureInPictureTsx5(){let[dragging,overCloseTarget,closeTargetShown,closeTargetHovered]=this.__closure;dragging.set(false);overCloseTarget.set(false);closeTargetShown.set(false);closeTargetHovered.set(false);})" };
let closure_24 = { code: "(function ConjureAppPictureInPictureTsx6(_event,success){let[open]=this.__closure;if(success)open();})" };
let closure_25 = { code: "(function ConjureAppPictureInPictureTsx7(){let[dragging,overCloseTarget,closing,position,clampToBounds,getBounds,avoidance,DRAGGING_SCALE,closeTargetCenter,windowSize,OVER_CLOSE_TARGET_SCALE,FOLLOW_SPRING,SETTLE_SPRING,withTiming,CLOSE_ANIMATION_MS,withSpring]=this.__closure;const isDragging=dragging.get();const onCloseTarget=overCloseTarget.get()||closing.get();let{x:x,y:y}=isDragging?position.get():clampToBounds(position.get(),getBounds(avoidance.get()));let scale=isDragging?DRAGGING_SCALE:1;if(onCloseTarget){x=closeTargetCenter.x-windowSize.width/2;y=closeTargetCenter.y-windowSize.height/2;scale=closing.get()?0:OVER_CLOSE_TARGET_SCALE;}const spring=isDragging&&!onCloseTarget?FOLLOW_SPRING:SETTLE_SPRING;return{width:windowSize.width,height:windowSize.height,opacity:closing.get()?withTiming(0,{duration:CLOSE_ANIMATION_MS}):1,transform:[{translateX:withSpring(x,spring)},{translateY:withSpring(y,spring)},{scale:withSpring(scale,spring)}]};})" };
const memoResult = react.memo(function ConjureAppPictureInPicture(frameId) {
  let GestureDetector2;
  let View;
  let avoidance;
  let closure_9;
  let handleGesture;
  let intl;
  let items14;
  let items15;
  let items17;
  let items18;
  let obj10;
  let obj11;
  let obj3;
  let obj6;
  let obj7;
  let str2;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
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
  let windowGesture;
  let windowHeight;
  let windowWidth;
  frameId = frameId.frameId;
  const stackOffset = frameId.stackOffset;
  size = frameId.size;
  ({ windowWidth, windowHeight, safeArea, avoidance } = frameId);
  const closeTargetCenter = frameId.closeTargetCenter;
  const closeTargetShown = frameId.closeTargetShown;
  const closeTargetHovered = frameId.closeTargetHovered;
  let str;
  MIN_PAN_GESTURE_MOVE = undefined;
  let c10;
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
  let memo2;
  let tmp = sharedValue4();
  let tmp2 = frameId;
  let obj = frameId(size[14]);
  let items = [closeTargetShown];
  let items1 = [frameId];
  const stateFromStores = obj.useStateFromStores(items, () => metroImportAll(FramesStore.getFrame(frameId)), items1);
  const tmp5 = frameId(size[20]);
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
  const tmp2Result = tmp2(size[21]);
  let tmp8 = 2 === tmp2Result.useEmbeddedAppShimVersion(tmp2(tmp3[22]).CONJURE_APP_PICTURE_IN_PICTURE_LOCATION);
  MIN_PAN_GESTURE_MOVE = tmp8;
  let tmp9 = sharedValue;
  const tmp2Result10 = tmp2(size[23]);
  let result = tmp2Result10.isConjureAppPictureInPictureInteractive(stateFromStores, sharedValue);
  c10 = result;
  let obj4 = avoidance;
  let items2 = [result, size];
  const memo = avoidance.useMemo(() => {
    const obj = conjureAppPictureInPictureLayout;
    return obj.getPictureInPictureWindowSize(size, c10);
  }, items2);
  let items3 = [callback2, , , , , ];
  const useCallback = avoidance.useCallback;
  items3[1] = tmp2(size[12]).getPictureInPictureBounds;
  items3[2] = windowWidth;
  items3[3] = windowHeight;
  items3[4] = safeArea;
  items3[5] = memo;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items3;
  class ConjureAppPictureInPictureTsx1 {
    constructor(top) {
      const obj = { windowWidth, windowHeight, safeArea, size, topAvoidance: top.top, bottomAvoidance: top.bottom };
      return _undefined(obj);
    }
  }
  let items4 = [tmp13, tmp14, tmp15, tmp16, tmp17];
  ConjureAppPictureInPictureTsx1.__closure = items4;
  ConjureAppPictureInPictureTsx1.__workletHash = 4230495550163;
  ConjureAppPictureInPictureTsx1.__initData = tmp12;
  let items5 = [windowWidth, windowHeight, safeArea, memo];
  callback = useCallback(ConjureAppPictureInPictureTsx1, items5);
  const useSharedValue = tmp2(tmp3[24]).useSharedValue;
  tmp2(size[24]);
  const tmp2Result12 = tmp2(size[12]);
  sharedValue = useSharedValue(tmp2Result12.getStackedPosition(stackOffset, callback(avoidance.get())));
  const tmp2Result13 = tmp2(size[24]);
  sharedValue1 = tmp2Result13.useSharedValue(sharedValue.get());
  const tmp2Result14 = tmp2(size[24]);
  sharedValue2 = tmp2Result14.useSharedValue(false);
  let items6 = [avoidance, callback, stackOffset, sharedValue2, sharedValue];
  const effect = obj4.useEffect(() => {
    if (!sharedValue2.get()) {
      set = sharedValue.set;
      const obj = conjureAppPictureInPictureLayout;
      const result = set(obj.getStackedPosition(stackOffset, callback(avoidance.get())));
    }
  }, items6);
  const tmp2Result15 = tmp2(size[24]);
  sharedValue3 = tmp2Result15.useSharedValue(false);
  const tmp2Result16 = tmp2(size[24]);
  sharedValue4 = tmp2Result16.useSharedValue(false);
  const tmp2Result17 = tmp2(size[24]);
  sharedValue5 = tmp2Result17.useSharedValue(false);
  let items7 = [frameId];
  callback1 = obj4.useCallback(() => {
    const tmp = metroImportAll(FramesStore.getFrame(frameId));
    if (null != tmp) {
      const obj = conjureAppPictureInPictureActions2;
      const result = obj.openConjureAppPictureInPictureFrame(tmp);
    }
  }, items7);
  let items8 = [frameId, str];
  callback2 = obj4.useCallback(() => {
    const obj = conjureAppPictureInPictureActions2;
    return obj.showConjureAppPictureInPictureActions(frameId, str);
  }, items8);
  let items9 = [frameId];
  callback3 = obj4.useCallback(() => {
    const timerId = setTimeout(() => stackOffset(size[25])(frameId), 180);
  }, items9);
  callback4 = obj4.useCallback(() => {
    const obj = frameId(size[26]);
    return obj.triggerHapticFeedback(frameId(size[26]).HapticFeedbackTypes.IMPACT_MEDIUM);
  }, []);
  const items10 = [avoidance, callback3, sharedValue5, sharedValue1, sharedValue3, callback, callback4, result, sharedValue2, callback1, sharedValue4, sharedValue, callback2, closeTargetCenter, closeTargetHovered, closeTargetShown];
  const memo1 = obj4.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp30;
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
    let tmp48;
    let tmp49;
    let tmp51;
    let tmp = require;
    let tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = PanResult.maxPointers(1);
    const items = [closure_20, sharedValue2, sharedValue1, , , , , , ];
    const onStart = maxPointersResult.minDistance(MIN_PAN_GESTURE_MOVE).onStart;
    maxPointersResult.minDistance(MIN_PAN_GESTURE_MOVE);
    items[3] = conjureAppPictureInPictureLayout.clampToBounds;
    items[4] = sharedValue;
    items[5] = callback;
    items[6] = avoidance;
    items[7] = sharedValue3;
    items[8] = closeTargetShown;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
    const tmp4 = sharedValue1;
    class ConjureAppPictureInPictureTsx2 {
      constructor() {
        result = closure_0.set(true);
        set = closure_1.set;
        value = closure_3.get();
        result1 = set(closure_2(value, closure_4(closure_5.get())));
        result2 = closure_6.set(true);
        result3 = closure_7.set(true);
        return;
      }
    }
    const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
    ConjureAppPictureInPictureTsx2.__closure = items1;
    ConjureAppPictureInPictureTsx2.__workletHash = 13378419383472;
    ConjureAppPictureInPictureTsx2.__initData = tmp10;
    const items2 = [closure_21, tmp4, tmp5, , , , , , ];
    const onUpdate = onStart(ConjureAppPictureInPictureTsx2).onUpdate;
    onStart(ConjureAppPictureInPictureTsx2);
    items2[3] = conjureAppPictureInPictureLayout.isOverCloseTarget;
    items2[4] = closeTargetCenter;
    items2[5] = sharedValue4;
    items2[6] = closeTargetHovered;
    items2[7] = _mod1705.scheduleOnRN;
    items2[8] = callback4;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items2;
    const tmp21 = closeTargetHovered;
    const tmp6 = callback;
    const tmp7 = avoidance;
    const tmp8 = sharedValue3;
    const tmp9 = closeTargetShown;
    class ConjureAppPictureInPictureTsx3 {
      constructor(arg0) {
        point = closure_0.get();
        point1 = { x: point.x + arg0.translationX, y: point.y + arg0.translationY };
        result = closure_1.set(point1);
        point2 = { x: arg0.absoluteX, y: arg0.absoluteY };
        tmp2 = closure_2(point2, closure_3);
        obj3 = closure_4;
        if (tmp2 !== closure_4.get()) {
          result1 = obj3.set(tmp2);
          tmp4 = closure_5;
          result2 = closure_5.set(tmp2);
          if (tmp2) {
            tmp6 = closure_6;
            tmp7 = closure_7;
            tmp8 = closure_6(closure_7);
          }
        }
        return;
      }
    }
    const items3 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
    ConjureAppPictureInPictureTsx3.__closure = items3;
    ConjureAppPictureInPictureTsx3.__workletHash = 14311359642471;
    ConjureAppPictureInPictureTsx3.__initData = tmp22;
    const items4 = [closure_22, sharedValue4, sharedValue5, , , , , , ];
    const onEnd = onUpdate(ConjureAppPictureInPictureTsx3).onEnd;
    onUpdate(ConjureAppPictureInPictureTsx3);
    items4[3] = _mod1705.scheduleOnRN;
    items4[4] = callback3;
    items4[5] = sharedValue;
    items4[6] = conjureAppPictureInPictureLayout.getSnappedPosition;
    items4[7] = tmp6;
    items4[8] = tmp7;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items4;
    class ConjureAppPictureInPictureTsx4 {
      constructor(arg0) {
        if (closure_0.get()) {
          tmp8 = closure_1;
          flag = true;
          result = closure_1.set(true);
          tmp10 = closure_2;
          tmp11 = closure_3;
          tmp12 = closure_2(closure_3);
          return;
        } else {
          tmp = arg0;
          tmp2 = closure_4;
          tmp3 = closure_5;
          set = closure_4.set;
          point = { x: null, y: null };
          ({ velocityX: obj.x, velocityY: obj.y } = arg0);
          tmp5 = closure_6;
          tmp6 = closure_7;
          value = closure_4.get();
          result1 = set(closure_5(value, point, closure_6(closure_7.get())));
          return;
        }
      }
    }
    const items5 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40];
    ConjureAppPictureInPictureTsx4.__closure = items5;
    ConjureAppPictureInPictureTsx4.__workletHash = 10614314581791;
    ConjureAppPictureInPictureTsx4.__initData = tmp32;
    const items6 = [closure_23, tmp8, sharedValue4, tmp9, tmp21];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp41, tmp42, tmp43, tmp44, tmp45] = items6;
    const onEndResult = onEnd(ConjureAppPictureInPictureTsx4);
    class ConjureAppPictureInPictureTsx5 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        result2 = closure_2.set(false);
        result3 = closure_3.set(false);
        return;
      }
    }
    const items7 = [tmp42, tmp43, tmp44, tmp45];
    ConjureAppPictureInPictureTsx5.__closure = items7;
    ConjureAppPictureInPictureTsx5.__workletHash = 4490068955341;
    ConjureAppPictureInPictureTsx5.__initData = tmp41;
    const onFinalizeResult = onEndResult.onFinalize(ConjureAppPictureInPictureTsx5);
    const Gesture2 = LegacyBaseButton.Gesture;
    const LongPressResult = Gesture2.LongPress();
    const runOnJSResult = LongPressResult.runOnJS(true);
    const minDurationResult = runOnJSResult.minDuration(400);
    const onStartResult1 = minDurationResult.onStart(callback2);
    const Gesture3 = LegacyBaseButton.Gesture;
    const items8 = [closure_24, callback1];
    c0 = undefined;
    [tmp48, tmp49] = items8;
    const TapResult = Gesture3.Tap();
    const runOnJSResult1 = TapResult.runOnJS(true);
    class ConjureAppPictureInPictureTsx6 {
      constructor(arg0, arg1) {
        tmp = arg1;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_0();
        }
        return;
      }
    }
    const items9 = [tmp49];
    ConjureAppPictureInPictureTsx6.__closure = items9;
    ConjureAppPictureInPictureTsx6.__workletHash = 13214857055913;
    ConjureAppPictureInPictureTsx6.__initData = tmp48;
    const onEndResult1 = runOnJSResult1.onEnd(ConjureAppPictureInPictureTsx6);
    const obj = { windowGesture: null, handleGesture: null };
    const Gesture4 = LegacyBaseButton.Gesture;
    if (c10) {
      const TapResult1 = Gesture4.Tap();
      obj.windowGesture = TapResult1.enabled(false);
      const Gesture5 = LegacyBaseButton.Gesture;
      obj.handleGesture = Gesture5.Race(onFinalizeResult, onStartResult1, onEndResult1);
      tmp51 = obj;
    } else {
      obj.windowGesture = Gesture4.Race(onFinalizeResult, onStartResult1, onEndResult1);
      tmp51 = obj;
    }
    return tmp51;
  }, items10);
  ({ handleGesture, windowGesture } = memo1);
  const items11 = [closure_25, sharedValue3, sharedValue4, sharedValue5, sharedValue, , , , , , , , , , , , ];
  const useAnimatedStyle = tmp2(tmp3[24]).useAnimatedStyle;
  tmp2(size[24]);
  items11[5] = tmp2(size[12]).clampToBounds;
  items11[6] = callback;
  items11[7] = avoidance;
  items11[8] = 1.05;
  items11[9] = closeTargetCenter;
  items11[10] = memo;
  items11[11] = 0.4;
  items11[12] = sharedValue1;
  items11[13] = sharedValue2;
  items11[14] = tmp2(size[29]).withTiming;
  items11[15] = 180;
  items11[16] = tmp2(size[30]).withSpring;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  c10 = undefined;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48] = items11;
  class ConjureAppPictureInPictureTsx7 {
    constructor() {
      let items;
      let value5;
      let x;
      let y;
      const value = _undefined.get();
      const value4 = _undefined2.get() || _undefined3.get();
      if (value) {
        value5 = _undefined4.get();
      } else {
        const value6 = _undefined4.get();
        value5 = _undefined5(value6, _undefined6(_undefined7.get()));
      }
      ({ x, y } = value5);
      let num = 1;
      let num2 = 1;
      if (value) {
        num2 = c7;
      }
      if (value4) {
        const diff = _undefined8.x - _undefined9.width / 2;
        const diff1 = _undefined8.y - _undefined9.height / 2;
        let num4 = 0;
        if (!_undefined3.get()) {
          num4 = c10;
        }
        num2 = num4;
        y = diff1;
        x = diff;
      }
      if (value) {
        let tmp16;
        if (!value4) {
          tmp16 = c11;
        }
        size = { width: null, height: null, opacity: num, transform: items };
        ({ width: obj.width, height: obj.height } = _undefined9);
        if (_undefined3.get()) {
          const obj2 = { duration };
          num = _undefined10(0, obj2);
        }
        items = [{ translateX: _undefined11(x, tmp16) }, , ];
        const obj3 = { translateX: _undefined11(x, tmp16) };
        items[1] = { translateY: _undefined11(y, tmp16) };
        const obj4 = { translateY: _undefined11(y, tmp16) };
        items[2] = { scale: _undefined11(num2, tmp16) };
        const obj5 = { scale: _undefined11(num2, tmp16) };
        return size;
      }
      tmp16 = c12;
    }
  }
  const items12 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48];
  ConjureAppPictureInPictureTsx7.__closure = items12;
  ConjureAppPictureInPictureTsx7.__workletHash = 3452490618677;
  ConjureAppPictureInPictureTsx7.__initData = tmp32;
  const items13 = [stateFromStores, str, tmp8];
  const animatedStyle = useAnimatedStyle(ConjureAppPictureInPictureTsx7);
  memo2 = obj4.useMemo(() => {
    let mapped;
    if (null != stateFromStores) {
      const obj = conjureAppPictureInPictureActions2;
      const conjureAppPictureInPictureActions = obj.getConjureAppPictureInPictureActions(tmp, str, closure_9);
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
  }, items13);
  [][0] = memo2;
  if (null == stateFromStores) {
    return null;
  } else {
    let obj2 = { accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(stackOffset(tmp3[32]).dPf03z, obj3), accessibilityActions: memo2.map((name) => ({ name: name.name, label: name.label })), onAccessibilityAction: tmp50 };
    intl = tmp2(tmp3[31]).intl;
    obj3 = { appName: str };
    let obj5 = { theme: stateFromStores.DARK, children: c10(GestureDetector2, obj6) };
    const ThemeContextProvider = tmp2(tmp3[33]).ThemeContextProvider;
    obj6 = { gesture: windowGesture, children: callback(View, obj7) };
    GestureDetector2 = tmp2(tmp3[27]).GestureDetector;
    obj7 = { style: items14, accessible: !result, children: items15 };
    items14 = [tmp.window, animatedStyle];
    let obj8 = obj2;
    View = stackOffset(tmp3[24]).View;
    const tmp66 = stackOffset;
    if (result) {
      obj8 = {};
    }
    let tmp51 = obj7;
    const merged = Object.assign(obj8);
    let tmp67Result = null;
    if (null != handleGesture) {
      const obj9 = { gesture: handleGesture, children: c10(closeTargetCenter, obj10) };
      obj10 = { style: tmp.handle, accessible: true, children: c10(closeTargetCenter, obj11) };
      const GestureDetector = tmp2(tmp3[27]).GestureDetector;
      const merged1 = Object.assign(obj2);
      obj11 = { style: tmp.grip };
      tmp67Result = tmp67(GestureDetector, obj9);
    }
    items15 = [tmp67Result, ];
    const items16 = [tmp.mask, ];
    const obj12 = { style: tmp.content, children: items18 };
    const obj13 = { style: items16, pointerEvents: str2, children: items17 };
    const tmp60 = result && tmp.interactiveMask;
    items16[1] = tmp60;
    str2 = "none";
    if (result) {
      str2 = "auto";
    }
    const obj14 = { frameId, level: tmp2(size[35]).FrameStackLevel.AboveAppContent, presentation: sharedValue3 };
    const tmp66Result = tmp66(size[34]);
    items17 = [c10(tmp66Result, obj14), ];
    let tmp67Result2 = null;
    if (tmp9) {
      const obj15 = { frame: stateFromStores, appName: str };
      tmp67Result2 = tmp67(sharedValue5, obj15);
    }
    items17[1] = tmp67Result2;
    items18 = [callback(closeTargetCenter, obj13), ];
    const obj16 = { frame: stateFromStores };
    items18[1] = c10(callback1, obj16);
    items15[1] = callback(closeTargetCenter, obj12);
    return c10(ThemeContextProvider, obj5);
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPicture.tsx");

export default memoResult;
export const SHOWS_STATIC_CARD = tmp4;
