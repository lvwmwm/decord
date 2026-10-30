// Module ID: 19066
// Function ID: 19067
// Name: ConjureAppPictureInPicture
// Dependencies: [19, 17, 6840, 4880, 1072, 18944, 6841, 11205, 21, 4966, 5009, 575, 9317, 504, 6951, 5619, 14501, 11911, 8665, 7324, 11786, 19067, 19064, 5090, 18620, 14344, 5255, 5298, 5249, 5632, 5075, 1114, 3865, 12068, 12072, 2]

// Module 19066 (ConjureAppPictureInPicture)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import spring from "spring" /* 5632 */;
import getGuildIdForEmbeddedSurfaceDefault from "getGuildIdForEmbeddedSurface" /* 9317 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11205 */;
import conjureFrameSound from "conjureFrameSound" /* 14501 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 18620 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 18944 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19064 */;
import conjureAppPictureInPictureActions2 from "conjureAppPictureInPictureActions" /* 19067 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6840 */;
import GuildStore from "GuildStore" /* 4880 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import Fragment from "Fragment" /* 21 */;
import DeviceUtils_mod from "DeviceUtils" /* 4966 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
let tmp2;
let unpackModuleId;
const GuildIconDefault = tmp2(6951);
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
      VoiceNormalIcon = tmp2(11911).VoiceXIcon;
    } else {
      VoiceNormalIcon = tmp2(8665).VoiceNormalIcon;
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
let closure_12 = DeviceUtils < 4;
let closure_13 = { mass: 0.25, damping: 40, stiffness: 300, overshootClamping: true };
let closure_14 = { mass: 0.4, damping: 22, stiffness: 220 };
let closure_15 = { layoutMode: FrameLayoutModes.PIP, portraitSafeAreasConfig: DEFAULT_PORTRAIT_LETTERBOX_CONFIG };
let createStyles = createStyles_mod;
let obj = { window: rect, mask: obj2, card: rect1, soundBadge: rect2 };
rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
rect1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
rect2 = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_16 = createStyles(obj);
let closure_19 = { code: "function ConjureAppPictureInPictureTsx1(specs){const{getPictureInPictureBounds,windowWidth,windowHeight,safeArea,size}=this.__closure;return getPictureInPictureBounds({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:size,topAvoidance:specs.top,bottomAvoidance:specs.bottom});}" };
let closure_20 = { code: "function ConjureAppPictureInPictureTsx2(){const{dragging,overCloseTarget,closeTargetShown,closeTargetHovered}=this.__closure;dragging.set(false);overCloseTarget.set(false);closeTargetShown.set(false);closeTargetHovered.set(false);}" };
let closure_21 = { code: "function ConjureAppPictureInPictureTsx3(event){const{overCloseTarget,closing,runOnJS,closeAfterShrink,position,getSnappedPosition,getBounds,avoidance}=this.__closure;if(overCloseTarget.get()){closing.set(true);runOnJS(closeAfterShrink)();return;}position.set(getSnappedPosition(position.get(),{x:event.velocityX,y:event.velocityY},getBounds(avoidance.get())));}" };
let closure_22 = { code: "function ConjureAppPictureInPictureTsx4(event){const{dragStart,position,isOverCloseTarget,closeTargetCenter,overCloseTarget,closeTargetHovered,runOnJS,hapticOverCloseTarget}=this.__closure;const start=dragStart.get();position.set({x:start.x+event.translationX,y:start.y+event.translationY});const over=isOverCloseTarget({x:event.absoluteX,y:event.absoluteY},closeTargetCenter);if(over!==overCloseTarget.get()){overCloseTarget.set(over);closeTargetHovered.set(over);if(over)runOnJS(hapticOverCloseTarget)();}}" };
let closure_23 = { code: "function ConjureAppPictureInPictureTsx5(){const{moved,dragStart,clampToBounds,position,getBounds,avoidance,dragging,closeTargetShown}=this.__closure;moved.set(true);dragStart.set(clampToBounds(position.get(),getBounds(avoidance.get())));dragging.set(true);closeTargetShown.set(true);}" };
let closure_24 = { code: "function ConjureAppPictureInPictureTsx6(_event,success){const{open}=this.__closure;if(success)open();}" };
const __initData = { code: "function ConjureAppPictureInPictureTsx7(){const{dragging,overCloseTarget,closing,position,clampToBounds,getBounds,avoidance,DRAGGING_SCALE,closeTargetCenter,size,OVER_CLOSE_TARGET_SCALE,FOLLOW_SPRING,SETTLE_SPRING,withTiming,CLOSE_ANIMATION_MS,withSpring}=this.__closure;const isDragging=dragging.get();const onCloseTarget=overCloseTarget.get()||closing.get();let{x:x,y:y}=isDragging?position.get():clampToBounds(position.get(),getBounds(avoidance.get()));let scale=isDragging?DRAGGING_SCALE:1;if(onCloseTarget){x=closeTargetCenter.x-size.width/2;y=closeTargetCenter.y-size.height/2;scale=closing.get()?0:OVER_CLOSE_TARGET_SCALE;}const spring=isDragging&&!onCloseTarget?FOLLOW_SPRING:SETTLE_SPRING;return{width:size.width,height:size.height,opacity:closing.get()?withTiming(0,{duration:CLOSE_ANIMATION_MS}):1,transform:[{translateX:withSpring(x,spring)},{translateY:withSpring(y,spring)},{scale:withSpring(scale,spring)}]};}" };
const memoResult = react.memo(function ConjureAppPictureInPicture(frameId) {
  let GestureDetector;
  let callback;
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
  let FOLLOW_SPRING;
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
  let tmp = sharedValue2();
  let tmp2 = frameId;
  let tmp3 = size;
  let obj = frameId(size[13]);
  let items = [safeArea];
  const items1 = [frameId];
  const stateFromStores = obj.useStateFromStores(items, () => metroImportAll(FramesStore.getFrame(frameId)), items1);
  const tmp5 = frameId(size[19]);
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
  let tmp2Result = tmp2(tmp3[20]);
  const tmp8 = 2 === tmp2Result.useEmbeddedAppShimVersion(tmp2(tmp3[21]).CONJURE_APP_PICTURE_IN_PICTURE_LOCATION);
  closure_12 = tmp8;
  let fn = function k(top) {
    const obj = conjureAppPictureInPictureLayout;
    const obj2 = { windowWidth, windowHeight, safeArea, size, topAvoidance: top.top, bottomAvoidance: top.bottom };
    return obj.getPictureInPictureBounds(obj2);
  };
  let obj2 = { getPictureInPictureBounds: tmp2(tmp3[22]).getPictureInPictureBounds, windowWidth, windowHeight, safeArea, size };
  fn.__closure = obj2;
  fn.__workletHash = 15664785095562;
  fn.__initData = sharedValue5;
  const items2 = [windowWidth, windowHeight, safeArea, size];
  FOLLOW_SPRING = windowWidth.useCallback(fn, items2);
  const useSharedValue = tmp2(tmp3[23]).useSharedValue;
  tmp2(tmp3[23]);
  const tmp2Result10 = tmp2(tmp3[22]);
  sharedValue = useSharedValue(tmp2Result10.getStackedPosition(index, size, FOLLOW_SPRING(avoidance.get())));
  const tmp2Result11 = tmp2(tmp3[23]);
  sharedValue1 = tmp2Result11.useSharedValue(sharedValue.get());
  const tmp2Result12 = tmp2(tmp3[23]);
  sharedValue2 = tmp2Result12.useSharedValue(false);
  const items3 = [avoidance, FOLLOW_SPRING, index, sharedValue2, sharedValue, size];
  const effect = windowWidth.useEffect(() => {
    if (!sharedValue2.get()) {
      set = sharedValue.set;
      const obj = conjureAppPictureInPictureLayout;
      const result = set(obj.getStackedPosition(index, size, callback(avoidance.get())));
    }
  }, items3);
  const tmp2Result13 = tmp2(tmp3[23]);
  sharedValue3 = tmp2Result13.useSharedValue(false);
  const tmp2Result14 = tmp2(tmp3[23]);
  sharedValue4 = tmp2Result14.useSharedValue(false);
  const tmp2Result15 = tmp2(tmp3[23]);
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
    const timerId = setTimeout(() => index(size[25])(frameId), 180);
  }, items6);
  callback4 = windowWidth.useCallback(() => {
    const obj = frameId(size[26]);
    return obj.triggerHapticFeedback(frameId(size[26]).HapticFeedbackTypes.IMPACT_MEDIUM);
  }, []);
  const items7 = [avoidance, callback3, sharedValue5, sharedValue1, sharedValue3, FOLLOW_SPRING, callback4, sharedValue2, callback1, sharedValue4, sharedValue, callback2, closeTargetCenter, closeTargetHovered, closeTargetShown];
  const memo = windowWidth.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const fn = function s() {
      const result = sharedValue2.set(true);
      set = sharedValue1.set;
      const clampToBounds = frameId(size[22]).clampToBounds;
      frameId(size[22]);
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
      const obj2 = frameId(size[22]);
      const isOverCloseTargetResult = obj2.isOverCloseTarget(point2, closeTargetCenter);
      const obj4 = sharedValue4;
      const tmp2 = frameId;
      const tmp3 = size;
      if (isOverCloseTargetResult !== sharedValue4.get()) {
        const result1 = obj4.set(isOverCloseTargetResult);
        const result2 = closeTargetHovered.set(isOverCloseTargetResult);
        if (isOverCloseTargetResult) {
          const tmp2Result = tmp2(tmp3[23]);
          tmp2Result.runOnJS(__initData4)();
        }
      }
    };
    const onStartResult = minDistanceResult.onStart(fn);
    let obj2 = { dragStart: sharedValue1, position: sharedValue, isOverCloseTarget: conjureAppPictureInPictureLayout.isOverCloseTarget, closeTargetCenter, overCloseTarget: sharedValue4, closeTargetHovered, runOnJS: ReanimatedRexport.runOnJS, hapticOverCloseTarget: callback4 };
    fn2.__closure = obj2;
    fn2.__workletHash = 759889640152;
    fn2.__initData = __initData3;
    const fn3 = function o(arg0) {
      if (sharedValue4.get()) {
        const result = sharedValue5.set(true);
        const obj2 = frameId(size[23]);
        obj2.runOnJS(__initData3)();
      } else {
        set = sharedValue.set;
        const getSnappedPosition = frameId(size[22]).getSnappedPosition;
        const point = { x: null, y: null };
        ({ velocityX: obj.x, velocityY: obj.y } = arg0);
        frameId(size[22]);
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
      const result1 = sharedValue4.set(false);
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
        __initData();
      }
    };
    let obj4 = { open: callback1 };
    fn5.__closure = obj4;
    fn5.__workletHash = 6960600238096;
    fn5.__initData = __initData5;
    const TapResult = Gesture3.Tap();
    const runOnJSResult1 = TapResult.runOnJS(true);
    const onEndResult1 = runOnJSResult1.onEnd(fn5);
    const Gesture4 = LegacyBaseButton.Gesture;
    return Gesture4.Race(onFinalizeResult, onStartResult1, onEndResult1);
  }, items7);
  const tmp2Result16 = tmp2(tmp3[23]);
  class U {
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
        const diff = closeTargetCenter.x - size.width / 2;
        const diff1 = closeTargetCenter.y - size.height / 2;
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
          tmp18 = closure_13;
        }
        size = { width: null, height: null, opacity: num, transform: items };
        ({ width: obj.width, height: obj.height } = size);
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
      tmp18 = closure_14;
    }
  }
  let obj3 = { dragging: sharedValue3, overCloseTarget: sharedValue4, closing: sharedValue5, position: sharedValue, clampToBounds: tmp2(tmp3[22]).clampToBounds, getBounds: FOLLOW_SPRING, avoidance, DRAGGING_SCALE: 1.05, closeTargetCenter, size, OVER_CLOSE_TARGET_SCALE: 0.4, FOLLOW_SPRING, SETTLE_SPRING: sharedValue, withTiming: tmp2(tmp3[28]).withTiming, CLOSE_ANIMATION_MS: 180, withSpring: tmp2(tmp3[29]).withSpring };
  U.__closure = obj3;
  U.__workletHash = 4130993795296;
  U.__initData = __initData;
  const items8 = [stateFromStores, str, tmp8];
  const animatedStyle = tmp2Result16.useAnimatedStyle(U);
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
    const ThemeContextProvider = tmp2(tmp3[30]).ThemeContextProvider;
    obj5 = { gesture: memo, children: tmp27(View, obj6) };
    GestureDetector = tmp2(tmp3[27]).GestureDetector;
    obj6 = { style: items9, accessible: true, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(index(tmp3[32]).dPf03z, obj7), accessibilityActions: memo1.map((name) => ({ name: name.name, label: name.label })), onAccessibilityAction: tmp23, children: items11 };
    items9 = [tmp.window, animatedStyle];
    View = index(tmp3[23]).View;
    intl = tmp2(tmp3[31]).intl;
    obj7 = { appName: str };
    let obj8 = { style: tmp.mask, pointerEvents: "none", children: items10 };
    const obj9 = { frameId, level: tmp2(tmp3[34]).FrameStackLevel.AboveAppContent, presentation: sharedValue1 };
    const tmp30 = index(tmp3[33]);
    items10 = [stateFromStores(tmp30, obj9), ];
    let tmp25Result = null;
    const tmp29 = windowHeight;
    if (closure_12) {
      const obj10 = { frame: stateFromStores, appName: str };
      tmp25Result = tmp25(sharedValue3, obj10);
    }
    items10[1] = tmp25Result;
    items11 = [tmp27(tmp29, obj8), ];
    const obj11 = { frame: stateFromStores };
    items11[1] = stateFromStores(sharedValue4, obj11);
    tmp25Result2 = tmp25(ThemeContextProvider, obj4);
  }
  return tmp25Result2;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPicture.tsx");

export default memoResult;
