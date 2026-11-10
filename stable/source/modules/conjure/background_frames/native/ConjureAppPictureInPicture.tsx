// Module ID: 19116
// Function ID: 19117
// Name: ConjureAppPictureInPicture
// Dependencies: [19, 17, 6846, 4885, 1072, 18995, 6847, 11224, 21, 4971, 5014, 575, 19115, 9337, 504, 6957, 5624, 14553, 11950, 8673, 7330, 11825, 19117, 16366, 5095, 14397, 5260, 5303, 5254, 5637, 1113, 3868, 5080, 12250, 12254, 2]

// Module 19116 (ConjureAppPictureInPicture)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import spring from "spring" /* 5637 */;
import getGuildIdForEmbeddedSurfaceDefault from "getGuildIdForEmbeddedSurface" /* 9337 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11224 */;
import conjureFrameSound from "conjureFrameSound" /* 14553 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 18995 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19115 */;
import conjureAppPictureInPictureActions2 from "conjureAppPictureInPictureActions" /* 19117 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6846 */;
import GuildStore from "GuildStore" /* 4885 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import Fragment from "Fragment" /* 21 */;
import DeviceUtils_mod from "DeviceUtils" /* 4971 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

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
let tmp2;
let unpackModuleId;
const GuildIconDefault = tmp2(6957);
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
  items2 = [tmp9, closure_10(require("Text/Text").Text, { variant: "text-xs/semibold", color: "text-strong", lineClamp: 2, children: appName })];
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
      VoiceNormalIcon = tmp2(11950).VoiceXIcon;
    } else {
      VoiceNormalIcon = tmp2(8673).VoiceNormalIcon;
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
const MIN_PAN_GESTURE_MOVE = MorphablePanelConstants.MIN_PAN_GESTURE_MOVE;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let DeviceUtils = DeviceUtils_mod;
DeviceUtils = DeviceUtils.getRamSize();
if (DeviceUtils == null) {
  DeviceUtils = Infinity;
}
let tmp4 = DeviceUtils < 4;
let closure_12 = tmp4;
let FOLLOW_SPRING = { mass: 0.25, damping: 40, stiffness: 300, overshootClamping: true };
const styles = { mass: 0.4, damping: 22, stiffness: 220 };
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
let closure_19 = { code: "function ConjureAppPictureInPictureTsx1(specs){const{getPictureInPictureBounds,windowWidth,windowHeight,safeArea,windowSize}=this.__closure;return getPictureInPictureBounds({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:windowSize,topAvoidance:specs.top,bottomAvoidance:specs.bottom});}" };
let closure_20 = { code: "function ConjureAppPictureInPictureTsx2(){const{dragging,overCloseTarget,closeTargetShown,closeTargetHovered}=this.__closure;dragging.set(false);overCloseTarget.set(false);closeTargetShown.set(false);closeTargetHovered.set(false);}" };
let closure_21 = { code: "function ConjureAppPictureInPictureTsx3(event){const{overCloseTarget,closing,runOnJS,closeAfterShrink,position,getSnappedPosition,getBounds,avoidance}=this.__closure;if(overCloseTarget.get()){closing.set(true);runOnJS(closeAfterShrink)();return;}position.set(getSnappedPosition(position.get(),{x:event.velocityX,y:event.velocityY},getBounds(avoidance.get())));}" };
let closure_22 = { code: "function ConjureAppPictureInPictureTsx4(event){const{dragStart,position,isOverCloseTarget,closeTargetCenter,overCloseTarget,closeTargetHovered,runOnJS,hapticOverCloseTarget}=this.__closure;const start=dragStart.get();position.set({x:start.x+event.translationX,y:start.y+event.translationY});const over=isOverCloseTarget({x:event.absoluteX,y:event.absoluteY},closeTargetCenter);if(over!==overCloseTarget.get()){overCloseTarget.set(over);closeTargetHovered.set(over);if(over)runOnJS(hapticOverCloseTarget)();}}" };
let closure_23 = { code: "function ConjureAppPictureInPictureTsx5(){const{moved,dragStart,clampToBounds,position,getBounds,avoidance,dragging,closeTargetShown}=this.__closure;moved.set(true);dragStart.set(clampToBounds(position.get(),getBounds(avoidance.get())));dragging.set(true);closeTargetShown.set(true);}" };
let closure_24 = { code: "function ConjureAppPictureInPictureTsx6(_event,success){const{open}=this.__closure;if(success)open();}" };
let closure_25 = { code: "function ConjureAppPictureInPictureTsx7(){const{dragging,overCloseTarget,closing,position,clampToBounds,getBounds,avoidance,DRAGGING_SCALE,closeTargetCenter,windowSize,OVER_CLOSE_TARGET_SCALE,FOLLOW_SPRING,SETTLE_SPRING,withTiming,CLOSE_ANIMATION_MS,withSpring}=this.__closure;const isDragging=dragging.get();const onCloseTarget=overCloseTarget.get()||closing.get();let{x:x,y:y}=isDragging?position.get():clampToBounds(position.get(),getBounds(avoidance.get()));let scale=isDragging?DRAGGING_SCALE:1;if(onCloseTarget){x=closeTargetCenter.x-windowSize.width/2;y=closeTargetCenter.y-windowSize.height/2;scale=closing.get()?0:OVER_CLOSE_TARGET_SCALE;}const spring=isDragging&&!onCloseTarget?FOLLOW_SPRING:SETTLE_SPRING;return{width:windowSize.width,height:windowSize.height,opacity:closing.get()?withTiming(0,{duration:CLOSE_ANIMATION_MS}):1,transform:[{translateX:withSpring(x,spring)},{translateY:withSpring(y,spring)},{scale:withSpring(scale,spring)}]};}" };
const memoResult = react.memo(function ConjureAppPictureInPicture(frameId) {
  let GestureDetector2;
  let c13;
  let callback;
  let handleGesture;
  let intl;
  let items10;
  let items11;
  let items13;
  let items14;
  let obj11;
  let obj12;
  let obj5;
  let obj7;
  let obj8;
  let str2;
  let windowGesture;
  frameId = frameId.frameId;
  const stackOffset = frameId.stackOffset;
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
  FOLLOW_SPRING = undefined;
  let memo;
  let presentation;
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
  let tmp = sharedValue();
  let tmp2 = frameId;
  let tmp3 = size;
  let obj = frameId(size[14]);
  let items = [safeArea];
  const items1 = [frameId];
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
  let tmp2Result = tmp2(tmp3[21]);
  const tmp8 = 2 === tmp2Result.useEmbeddedAppShimVersion(tmp2(tmp3[22]).CONJURE_APP_PICTURE_IN_PICTURE_LOCATION);
  closure_12 = tmp8;
  const tmp2Result10 = tmp2(tmp3[23]);
  let result = tmp2Result10.isConjureAppPictureInPictureInteractive(stateFromStores, closure_12);
  FOLLOW_SPRING = result;
  const items2 = [result, size];
  memo = windowWidth.useMemo(() => {
    const obj = conjureAppPictureInPictureLayout;
    return obj.getPictureInPictureWindowSize(size, c13);
  }, items2);
  let fn = function k(top) {
    const obj = conjureAppPictureInPictureLayout;
    const obj2 = { windowWidth, windowHeight, safeArea, size: memo, topAvoidance: top.top, bottomAvoidance: top.bottom };
    return obj.getPictureInPictureBounds(obj2);
  };
  let obj2 = { getPictureInPictureBounds: tmp2(tmp3[12]).getPictureInPictureBounds, windowWidth, windowHeight, safeArea, windowSize: memo };
  fn.__closure = obj2;
  fn.__workletHash = 8790137180106;
  fn.__initData = sharedValue3;
  const items3 = [windowWidth, windowHeight, safeArea, memo];
  presentation = windowWidth.useCallback(fn, items3);
  const useSharedValue = tmp2(tmp3[24]).useSharedValue;
  tmp2(tmp3[24]);
  const tmp2Result12 = tmp2(tmp3[12]);
  sharedValue = useSharedValue(tmp2Result12.getStackedPosition(stackOffset, presentation(avoidance.get())));
  const tmp2Result13 = tmp2(tmp3[24]);
  sharedValue1 = tmp2Result13.useSharedValue(sharedValue.get());
  const tmp2Result14 = tmp2(tmp3[24]);
  sharedValue2 = tmp2Result14.useSharedValue(false);
  const items4 = [avoidance, presentation, stackOffset, sharedValue2, sharedValue];
  const effect = windowWidth.useEffect(() => {
    if (!sharedValue2.get()) {
      set = sharedValue.set;
      const obj = conjureAppPictureInPictureLayout;
      const result = set(obj.getStackedPosition(stackOffset, callback(avoidance.get())));
    }
  }, items4);
  const tmp2Result15 = tmp2(tmp3[24]);
  sharedValue3 = tmp2Result15.useSharedValue(false);
  const tmp2Result16 = tmp2(tmp3[24]);
  sharedValue4 = tmp2Result16.useSharedValue(false);
  const tmp2Result17 = tmp2(tmp3[24]);
  sharedValue5 = tmp2Result17.useSharedValue(false);
  const items5 = [frameId];
  callback1 = windowWidth.useCallback(() => {
    const tmp = metroImportAll(FramesStore.getFrame(frameId));
    if (null != tmp) {
      const obj = conjureAppPictureInPictureActions2;
      const result = obj.openConjureAppPictureInPictureFrame(tmp);
    }
  }, items5);
  const items6 = [frameId, str];
  callback2 = windowWidth.useCallback(() => {
    const obj = conjureAppPictureInPictureActions2;
    return obj.showConjureAppPictureInPictureActions(frameId, str);
  }, items6);
  const items7 = [frameId];
  callback3 = windowWidth.useCallback(() => {
    const timerId = setTimeout(() => stackOffset(size[25])(frameId), 180);
  }, items7);
  callback4 = windowWidth.useCallback(() => {
    const obj = frameId(size[26]);
    return obj.triggerHapticFeedback(frameId(size[26]).HapticFeedbackTypes.IMPACT_MEDIUM);
  }, []);
  const items8 = [avoidance, callback3, sharedValue5, sharedValue1, sharedValue3, presentation, callback4, result, sharedValue2, callback1, sharedValue4, sharedValue, callback2, closeTargetCenter, closeTargetHovered, closeTargetShown];
  const memo1 = windowWidth.useMemo(() => {
    let tmp6;
    let tmp = require;
    let tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const fn = function s() {
      const result = sharedValue2.set(true);
      set = sharedValue1.set;
      const clampToBounds = frameId(size[12]).clampToBounds;
      frameId(size[12]);
      const value = sharedValue.get();
      const result1 = set(clampToBounds(value, callback(avoidance.get())));
      const result2 = sharedValue3.set(true);
      const result3 = closeTargetShown.set(true);
    };
    const maxPointersResult = PanResult.maxPointers(1);
    const minDistanceResult = maxPointersResult.minDistance(MIN_PAN_GESTURE_MOVE);
    const obj = { moved: sharedValue2, dragStart: sharedValue1, clampToBounds: conjureAppPictureInPictureLayout.clampToBounds, position: sharedValue, getBounds, avoidance, dragging: sharedValue3, closeTargetShown };
    fn.__closure = obj;
    fn.__workletHash = 13934479222574;
    fn.__initData = __initData4;
    const fn2 = function n(translationX) {
      const point = sharedValue1.get();
      const point1 = { x: point.x + translationX.translationX, y: point.y + translationX.translationY };
      const result = sharedValue.set(point1);
      const point2 = { x: translationX.absoluteX, y: translationX.absoluteY };
      const obj2 = frameId(size[12]);
      const isOverCloseTargetResult = obj2.isOverCloseTarget(point2, closeTargetCenter);
      const obj4 = __initData;
      const tmp2 = frameId;
      const tmp3 = size;
      if (isOverCloseTargetResult !== __initData.get()) {
        const result1 = obj4.set(isOverCloseTargetResult);
        const result2 = closeTargetHovered.set(isOverCloseTargetResult);
        if (isOverCloseTargetResult) {
          const tmp2Result = tmp2(tmp3[24]);
          tmp2Result.runOnJS(callback4)();
        }
      }
    };
    const onStartResult = minDistanceResult.onStart(fn);
    let obj2 = { dragStart: sharedValue1, position: sharedValue, isOverCloseTarget: conjureAppPictureInPictureLayout.isOverCloseTarget, closeTargetCenter, overCloseTarget: sharedValue4, closeTargetHovered, runOnJS: ReanimatedRexport.runOnJS, hapticOverCloseTarget: callback4 };
    fn2.__closure = obj2;
    fn2.__workletHash = 759889640152;
    fn2.__initData = __initData3;
    const fn3 = function o(arg0) {
      if (__initData.get()) {
        const result = __initData2.set(true);
        const obj2 = frameId(size[24]);
        obj2.runOnJS(__initData5)();
      } else {
        set = sharedValue.set;
        const getSnappedPosition = frameId(size[12]).getSnappedPosition;
        const point = { x: null, y: null };
        ({ velocityX: obj.x, velocityY: obj.y } = arg0);
        frameId(size[12]);
        const value = sharedValue.get();
        const result1 = set(getSnappedPosition(value, point, callback(avoidance.get())));
      }
    };
    const onUpdateResult = onStartResult.onUpdate(fn2);
    fn3.__closure = { overCloseTarget: sharedValue4, closing: sharedValue5, runOnJS: ReanimatedRexport.runOnJS, closeAfterShrink: callback3, position: sharedValue, getSnappedPosition: conjureAppPictureInPictureLayout.getSnappedPosition, getBounds, avoidance };
    fn3.__workletHash = 8615317749760;
    fn3.__initData = __initData2;
    ({ overCloseTarget: sharedValue4, closing: sharedValue5, runOnJS: ReanimatedRexport.runOnJS, closeAfterShrink: callback3, position: sharedValue, getSnappedPosition: conjureAppPictureInPictureLayout.getSnappedPosition, getBounds, avoidance });
    const fn4 = function t() {
      const result = sharedValue3.set(false);
      const result1 = __initData.set(false);
      const result2 = closeTargetShown.set(false);
      const result3 = closeTargetHovered.set(false);
    };
    fn4.__closure = { dragging: sharedValue3, overCloseTarget: sharedValue4, closeTargetShown, closeTargetHovered };
    fn4.__workletHash = 15707415120147;
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
        __initData3();
      }
    };
    let obj4 = { open: callback1 };
    fn5.__closure = obj4;
    fn5.__workletHash = 6960600238096;
    fn5.__initData = __initData5;
    const TapResult = Gesture3.Tap();
    const runOnJSResult1 = TapResult.runOnJS(true);
    const onEndResult1 = runOnJSResult1.onEnd(fn5);
    const obj5 = { windowGesture: null, handleGesture: null };
    const Gesture4 = LegacyBaseButton.Gesture;
    if (c13) {
      const TapResult1 = Gesture4.Tap();
      obj5.windowGesture = TapResult1.enabled(false);
      const Gesture5 = LegacyBaseButton.Gesture;
      obj5.handleGesture = Gesture5.Race(onFinalizeResult, onStartResult1, onEndResult1);
      tmp6 = obj5;
    } else {
      obj5.windowGesture = Gesture4.Race(onFinalizeResult, onStartResult1, onEndResult1);
      tmp6 = obj5;
    }
    return tmp6;
  }, items8);
  ({ handleGesture, windowGesture } = memo1);
  const tmp2Result18 = tmp2(tmp3[24]);
  const tmp9 = closure_12;
  class Y {
    constructor() {
      let items;
      let obj4;
      let obj6;
      let obj8;
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
        num2 = 1.05;
      }
      if (value4) {
        const diff = closeTargetCenter.x - memo.width / 2;
        const diff1 = closeTargetCenter.y - memo.height / 2;
        let num4 = 0.4;
        if (sharedValue5.get()) {
          num4 = 0;
        }
        num2 = num4;
        y = diff1;
        x = diff;
      }
      if (value) {
        let tmp18;
        if (!value4) {
          tmp18 = FOLLOW_SPRING;
        }
        size = { width: null, height: null, opacity: num, transform: items };
        ({ width: obj.width, height: obj.height } = memo);
        if (sharedValue5.get()) {
          const obj2 = timing;
          num = obj2.withTiming(0, { duration: 180 });
        }
        const obj3 = { translateX: obj4.withSpring(x, tmp18) };
        items = [obj3, , ];
        obj4 = spring;
        const obj5 = { translateY: obj6.withSpring(y, tmp18) };
        items[1] = obj5;
        obj6 = spring;
        const obj7 = { scale: obj8.withSpring(num2, tmp18) };
        items[2] = obj7;
        obj8 = spring;
        return size;
      }
      tmp18 = styles;
    }
  }
  let obj3 = { dragging: sharedValue3, overCloseTarget: sharedValue4, closing: sharedValue5, position: sharedValue, clampToBounds: tmp2(tmp3[12]).clampToBounds, getBounds: presentation, avoidance, DRAGGING_SCALE: 1.05, closeTargetCenter, windowSize: memo, OVER_CLOSE_TARGET_SCALE: 0.4, FOLLOW_SPRING, SETTLE_SPRING: memo, withTiming: tmp2(tmp3[28]).withTiming, CLOSE_ANIMATION_MS: 180, withSpring: tmp2(tmp3[29]).withSpring };
  Y.__closure = obj3;
  Y.__workletHash = 11168598629644;
  Y.__initData = callback4;
  const items9 = [stateFromStores, str, tmp8];
  const animatedStyle = tmp2Result18.useAnimatedStyle(Y);
  memo2 = windowWidth.useMemo(() => {
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
  }, items9);
  [][0] = memo2;
  if (null == stateFromStores) {
    return null;
  } else {
    let obj4 = { accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(stackOffset(tmp3[31]).dPf03z, obj5), accessibilityActions: memo2.map((name) => ({ name: name.name, label: name.label })), onAccessibilityAction: tmp26 };
    intl = tmp2(tmp3[30]).intl;
    obj5 = { appName: str };
    let obj6 = { theme: closeTargetCenter.DARK, children: stateFromStores(GestureDetector2, obj7) };
    const ThemeContextProvider = tmp2(tmp3[32]).ThemeContextProvider;
    obj7 = { gesture: windowGesture, children: str(View, obj8) };
    GestureDetector2 = tmp2(tmp3[27]).GestureDetector;
    obj8 = { style: items10, accessible: !result, children: items11 };
    items10 = [tmp.window, animatedStyle];
    let obj9 = obj4;
    View = stackOffset(tmp3[24]).View;
    const tmp42 = stackOffset;
    if (result) {
      obj9 = {};
    }
    const merged = Object.assign(obj9);
    let tmp43Result = null;
    if (null != handleGesture) {
      const obj10 = { gesture: handleGesture, children: stateFromStores(windowHeight, obj11) };
      obj11 = { style: tmp.handle, accessible: true, children: stateFromStores(windowHeight, obj12) };
      const GestureDetector = tmp2(tmp3[27]).GestureDetector;
      const merged1 = Object.assign(obj4);
      obj12 = { style: tmp.grip };
      tmp43Result = tmp43(GestureDetector, obj10);
    }
    items11 = [tmp43Result, ];
    const items12 = [tmp.mask, ];
    const obj13 = { style: tmp.content, children: items14 };
    const obj14 = { style: items12, pointerEvents: str2, children: items13 };
    const tmp36 = result && tmp.interactiveMask;
    items12[1] = tmp36;
    str2 = "none";
    if (result) {
      str2 = "auto";
    }
    const obj15 = { frameId, level: tmp2(tmp3[34]).FrameStackLevel.AboveAppContent, presentation };
    const tmp42Result = tmp42(tmp3[33]);
    items13 = [stateFromStores(tmp42Result, obj15), ];
    let tmp43Result2 = null;
    if (tmp9) {
      const obj16 = { frame: stateFromStores, appName: str };
      tmp43Result2 = tmp43(sharedValue1, obj16);
    }
    items13[1] = tmp43Result2;
    items14 = [str(windowHeight, obj14), ];
    const obj17 = { frame: stateFromStores };
    items14[1] = stateFromStores(sharedValue2, obj17);
    items11[1] = str(windowHeight, obj13);
    return stateFromStores(ThemeContextProvider, obj6);
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPicture.tsx");

export default memoResult;
export const SHOWS_STATIC_CARD = tmp4;
