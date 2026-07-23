// Module ID: 15899
// Function ID: 122817
// Name: MediaPlaybackPanelUI
// Dependencies: [57, 31, 10620, 13459, 10016, 10015, 33, 4130, 689, 1557, 1450, 15898, 3991, 9423, 10019, 15701, 4131, 4134, 4542, 15703, 5449, 5217, 15900, 2]
// Exports: default

// Module 15899 (MediaPlaybackPanelUI)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { useContext } from "result";
import module_10620 from "module_10620";
import MediaPlaybackPanelModes from "MediaPlaybackPanelModes";
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";
import { BORDER_RADIUS_PHYSICS } from "VoicePanelModes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let require = arg1;
({ MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: closure_7, MediaPlaybackPanelModes: closure_8 } = MediaPlaybackPanelModes);
_createForOfIteratorHelperLoose = { wrapperAnimationPresets: { opacity: 0 }, wrapper: { position: "absolute", top: 0, left: 0, zIndex: 1 } };
_createForOfIteratorHelperLoose = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderColor: require("_createForOfIteratorHelperLoose").colors.CHAT_BORDER };
_createForOfIteratorHelperLoose.mask = _createForOfIteratorHelperLoose;
let merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW_HOVER);
_createForOfIteratorHelperLoose.maskElevation = {};
_createForOfIteratorHelperLoose.maskEmptyElevation = { xOffset: 0, yOffset: 0, shadowColorIos: "#000000", shadowOpacity: 0, shadowRadius: 0, elevation: 0, shadowColorAndroid: "#000000" };
_createForOfIteratorHelperLoose.content = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_13 = { code: "function MediaPlaybackPanelUITsx1(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}" };
let closure_14 = { code: "function MediaPlaybackPanelUITsx2(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;switch(modeToSet){case MediaPlaybackPanelModes.PIP:{const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});break;}case MediaPlaybackPanelModes.DISMISSED:updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});break;default:modeToSet;}}" };
let closure_15 = { code: "function MediaPlaybackPanelUITsx3(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}" };
let closure_16 = { code: "function MediaPlaybackPanelUITsx4(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}" };
let closure_17 = { code: "function MediaPlaybackPanelUITsx5(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}" };
let closure_18 = { code: "function MediaPlaybackPanelUITsx6(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};}" };
let closure_19 = { code: "function MediaPlaybackPanelUITsx7(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};}" };
let closure_20 = { code: "function MediaPlaybackPanelUITsx8(){const{styles}=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};}" };
let obj1 = {};
let obj2 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let result = require("module_10620").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelUI.tsx");

export default function MediaPlaybackPanelUI() {
  let pipState;
  let tmp6;
  let tmp7;
  let wrapperDimensions;
  let wrapperOffset;
  let wrapperOffset2;
  let tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let tmp2 = importDefault(1450)();
  importDefault = tmp2;
  ({ wrapperDimensions, wrapperOffset } = useContext(importDefault(15898)));
  let obj = require(3991);
  let fn = function p() {
    const obj = { position: "absolute", top: 0, left: 0, width: null, height: null, overflow: "hidden" };
    ({ width: obj.width, height: obj.height } = closure_1);
    return obj;
  };
  fn.__closure = { windowDimensions: tmp2 };
  fn.__workletHash = 5768037716653;
  fn.__initData = closure_19;
  let animatedStyle = obj.useAnimatedStyle(fn);
  let tmp3 = useContext(importDefault(15898));
  [tmp6, tmp7] = callback((function useWrapperStyles(wrapperDimensions, wrapperOffset) {
    let tmp = wrapperDimensions;
    let tmp2 = wrapperOffset;
    tmp = outer1_12();
    let closure_2 = tmp;
    tmp2 = tmp2(outer1_2[9])();
    let _slicedToArray = tmp2;
    const tmp3 = tmp2(outer1_2[10])();
    let result = tmp3;
    const context = outer1_4.useContext(tmp2(outer1_2[11]));
    let mode = context.mode;
    const pipState = context.pipState;
    const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    const canShowPIP = context.canShowPIP;
    let obj = tmp(outer1_2[12]);
    const fn = function u() {
      return { mode: mode.get(), windowDimensions: result, canShowPIP: canShowPIP.get() };
    };
    fn.__closure = { mode, windowDimensions: tmp3, canShowPIP };
    fn.__workletHash = 4412661953046;
    fn.__initData = outer1_13;
    const fn2 = function p(mode, safeAreaState2) {
      let height;
      let width;
      let obj = wrapperDimensions(outer2_2[13]);
      let tmp;
      if (null != safeAreaState2) {
        tmp = safeAreaState2;
      }
      if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
        mode = mode.mode;
        if (outer2_8.PIP === mode) {
          ({ width, height } = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 });
          obj = { width, height };
          wrapperOffset(outer2_2[14])(wrapperDimensions, obj);
          const tmp5 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
        } else if (outer2_8.DISMISSED === mode) {
          obj = { y: tmp2.height };
          wrapperOffset(outer2_2[14])(wrapperOffset, obj);
        }
      }
    };
    obj = { cheapWorkletShallowEqual: tmp(outer1_2[13]).cheapWorkletShallowEqual, MediaPlaybackPanelModes: outer1_8, updateSharedValueIfChanged: tmp2(outer1_2[14]), wrapperDimensions, wrapperOffset };
    fn2.__closure = obj;
    fn2.__workletHash = 5458787116551;
    fn2.__initData = outer1_14;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
    let obj2 = tmp(outer1_2[12]);
    const sharedValue = obj2.useSharedValue(0);
    const sharedValue1 = tmp(outer1_2[12]).useSharedValue(0);
    let obj4 = tmp(outer1_2[12]);
    const sharedValue2 = tmp(outer1_2[12]).useSharedValue(0);
    const obj5 = tmp(outer1_2[12]);
    const sharedValue3 = tmp(outer1_2[12]).useSharedValue(false);
    let tmp10 = outer1_6((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    let closure_13 = tmp10;
    let obj6 = tmp(outer1_2[12]);
    class R {
      constructor() {
        obj = { mode: mode.get(), wrapperDimensions: closure_0.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), wrapperOffset: closure_1.get(), windowDimensions: result, safeArea: _slicedToArray, pipState: pipState.get() };
        return obj;
      }
    }
    R.__closure = { mode, wrapperDimensions, pipAvoidanceSpecs, wrapperOffset, windowDimensions: tmp3, safeArea: tmp2, pipState };
    R.__workletHash = 4950432193502;
    R.__initData = outer1_15;
    class C {
      constructor(arg0, arg1) {
        obj = outer2_0(outer2_2[13]);
        tmp = undefined;
        if (null != wrapperOffset) {
          tmp = wrapperOffset;
        }
        if (!obj.cheapWorkletShallowEqual(wrapperDimensions, tmp)) {
          ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = wrapperDimensions);
          ({ x, y } = pipState);
          tmp5 = outer2_8;
          if (outer2_8.PIP === mode) {
            tmp7 = outer2_0;
            tmp8 = outer2_2;
            num2 = 15;
            obj2 = outer2_0(outer2_2[15]);
            obj = {};
            obj.pipX = x;
            obj.pipY = y;
            num3 = 120;
            obj.width = 120;
            obj.height = 120;
            obj.windowDimensions = tmp3;
            tmp9 = _slicedToArray;
            obj.safeArea = _slicedToArray;
            ({ bottom: obj3.bottomAvoidanceRegion, top: obj3.topAvoidanceRegion } = pipAvoidanceSpecs);
            tmp10 = undefined;
            if (tmp4) {
              tmp10 = wrapperOffset;
            }
            obj.positionOffset = tmp10;
            tmp11 = c13;
            obj.disableHorizontalSafeAreas = c13;
            clampedPIPPosition = obj2.getClampedPIPPosition(obj);
            ({ x: x2, y: y2 } = clampedPIPPosition);
            tmp13 = closure_11;
            num4 = 1;
            result = closure_11.set(1);
          } else {
            tmp6 = outer2_8;
            num = 0;
            x2 = 0;
            y2 = 0;
            if (outer2_8.DISMISSED === mode) {
              y2 = tmp2.height;
              tmp28 = closure_11;
              result1 = closure_11.set(0);
              x2 = 0;
            }
          }
          pipState = undefined;
          if (null != wrapperOffset) {
            pipState = wrapperOffset.pipState;
          }
          x = undefined;
          if (null != pipState) {
            x = pipState.x;
          }
          tmp17 = x !== x;
          if (!tmp17) {
            y = undefined;
            if (null != pipState) {
              y = pipState.y;
            }
            tmp17 = y !== y;
          }
          tmp19 = outer2_8;
          tmp20 = mode === outer2_8.PIP && tmp17 && !wrapperOffset.gestureActive;
          tmp21 = c12;
          if (!tmp20) {
            tmp22 = outer2_8;
            tmp20 = mode !== outer2_8.PIP;
          }
          result2 = c12.set(tmp20);
          tmp24 = closure_9;
          result3 = closure_9.set(x2);
          tmp26 = closure_10;
          result4 = closure_10.set(y2);
        }
        return;
      }
    }
    obj = { cheapWorkletShallowEqual: tmp(outer1_2[13]).cheapWorkletShallowEqual, MediaPlaybackPanelModes: outer1_8, getClampedPIPPosition: tmp(outer1_2[15]).getClampedPIPPosition, safeArea: tmp2, disableHorizontalSafeAreas: tmp10, wrapperOpacity: sharedValue2, animateWrapperTranslation: sharedValue3, wrapperTranslationX: sharedValue, wrapperTranslationY: sharedValue1 };
    C.__closure = obj;
    C.__workletHash = 10793489581273;
    C.__initData = outer1_16;
    const animatedReaction1 = tmp(outer1_2[12]).useAnimatedReaction(R, C);
    if (mode.get() === outer1_8.PIP) {
      if (outer1_9) {
        let maskEmptyElevation = tmp.maskElevation;
      }
      if (mode.get() === outer1_8.PIP) {
        if (!outer1_9) {
          let maskEmptyElevation2 = tmp.maskElevation;
        }
        class L {
          constructor() {
            obj = outer2_0(outer2_2[16]);
            value = closure_11.get();
            obj = {};
            obj1 = {};
            withTimingResult = obj.withTiming(value, outer2_0(outer2_2[17]).timingFast, "respect-motion-settings");
            if (c12.get()) {
              tmp5 = outer2_0;
              tmp6 = outer2_2;
              num = 18;
              obj4 = outer2_0(outer2_2[18]);
              tmp7 = closure_9;
              tmp8 = outer2_7;
              str = "animate-always";
              withSpringResult = obj4.withSpring(closure_9.get(), outer2_7, "animate-always");
            } else {
              tmp3 = closure_9;
              withSpringResult = closure_9.get();
            }
            obj1.translateX = withSpringResult;
            items = [, ];
            items[0] = obj1;
            obj2 = {};
            if (c12.get()) {
              tmp11 = outer2_0;
              tmp12 = outer2_2;
              num2 = 18;
              obj6 = outer2_0(outer2_2[18]);
              tmp13 = closure_10;
              tmp16 = c12;
              value1 = closure_10.get();
              tmp15 = outer2_7;
              str2 = "animate-never";
              if (c12.get()) {
                str2 = "respect-motion-settings";
              }
              withSpringResult1 = obj6.withSpring(value1, tmp15, str2);
            } else {
              tmp9 = closure_10;
              withSpringResult1 = closure_10.get();
            }
            obj2.translateY = withSpringResult1;
            items[1] = obj2;
            obj.transform = items;
            obj.opacity = withTimingResult;
            obj.width = closure_0.get().width;
            obj.height = closure_0.get().height;
            merged = Object.assign(maskElevation);
            return obj;
          }
        }
        let obj1 = { withTiming: tmp(outer1_2[16]).withTiming, wrapperOpacity: sharedValue2, timingFast: tmp(outer1_2[17]).timingFast, animateWrapperTranslation: sharedValue3, withSpring: tmp(outer1_2[18]).withSpring, wrapperTranslationX: sharedValue, MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: outer1_7, wrapperTranslationY: sharedValue1, wrapperDimensions, wrapperElevationStyles: maskEmptyElevation };
        L.__closure = obj1;
        L.__workletHash = 11049335639852;
        L.__initData = outer1_17;
        const animatedStyle = tmp(outer1_2[12]).useAnimatedStyle(L);
        const xl = tmp2(outer1_2[8]).radii.xl;
        const obj9 = tmp(outer1_2[12]);
        class B {
          constructor() {
            obj = {};
            obj2 = outer2_0(outer2_2[18]);
            obj.borderRadius = obj2.withSpring(xl, outer2_10, "animate-always");
            merged = Object.assign(maskElevation);
            return obj;
          }
        }
        obj2 = { withSpring: tmp(outer1_2[18]).withSpring, borderRadius: xl, BORDER_RADIUS_PHYSICS: outer1_10, maskElevationStyles: maskEmptyElevation2 };
        B.__closure = obj2;
        B.__workletHash = 7035830192327;
        B.__initData = outer1_18;
        const animatedStyle1 = tmp(outer1_2[12]).useAnimatedStyle(B);
        let items = [animatedStyle, , ];
        ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp);
        const items1 = [
          outer1_4.useMemo(() => {
                const items = [animatedStyle, , ];
                ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = closure_2);
                return items;
              }, items),

        ];
        const items2 = [animatedStyle1, tmp.mask];
        items1[1] = outer1_4.useMemo(() => {
          const items = [animatedStyle1, tmp.mask];
          return items;
        }, items2);
        return items1;
      }
      maskEmptyElevation2 = tmp.maskEmptyElevation;
    }
    maskEmptyElevation = tmp.maskEmptyElevation;
  })(wrapperDimensions, wrapperOffset), 2);
  let obj1 = require(3991);
  let fn2 = function b() {
    const obj = { flexDirection: "column", backgroundColor: tmp.content.backgroundColor, borderTopStartRadius: 0, borderTopEndRadius: 0, top: 0, overflow: "hidden" };
    return obj;
  };
  fn2.__closure = { styles: tmp };
  fn2.__workletHash = 8557652955267;
  fn2.__initData = closure_20;
  let animatedStyle1 = obj1.useAnimatedStyle(fn2);
  let context = React.useContext(importDefault(15898));
  ({ wrapperOffset: wrapperOffset2, pipState } = context);
  obj = { panGestureEnabled: true };
  let tmp5 = callback((function useWrapperStyles(wrapperDimensions, wrapperOffset) {
    let tmp = wrapperDimensions;
    let tmp2 = wrapperOffset;
    tmp = outer1_12();
    let closure_2 = tmp;
    tmp2 = tmp2(outer1_2[9])();
    let _slicedToArray = tmp2;
    const tmp3 = tmp2(outer1_2[10])();
    let result = tmp3;
    const context = outer1_4.useContext(tmp2(outer1_2[11]));
    let mode = context.mode;
    const pipState = context.pipState;
    const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    const canShowPIP = context.canShowPIP;
    let obj = tmp(outer1_2[12]);
    const fn = function u() {
      return { mode: mode.get(), windowDimensions: result, canShowPIP: canShowPIP.get() };
    };
    fn.__closure = { mode, windowDimensions: tmp3, canShowPIP };
    fn.__workletHash = 4412661953046;
    fn.__initData = outer1_13;
    const fn2 = function p(mode, safeAreaState2) {
      let height;
      let width;
      let obj = wrapperDimensions(outer2_2[13]);
      let tmp;
      if (null != safeAreaState2) {
        tmp = safeAreaState2;
      }
      if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
        mode = mode.mode;
        if (outer2_8.PIP === mode) {
          ({ width, height } = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 });
          obj = { width, height };
          wrapperOffset(outer2_2[14])(wrapperDimensions, obj);
          const tmp5 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
        } else if (outer2_8.DISMISSED === mode) {
          obj = { y: tmp2.height };
          wrapperOffset(outer2_2[14])(wrapperOffset, obj);
        }
      }
    };
    obj = { cheapWorkletShallowEqual: tmp(outer1_2[13]).cheapWorkletShallowEqual, MediaPlaybackPanelModes: outer1_8, updateSharedValueIfChanged: tmp2(outer1_2[14]), wrapperDimensions, wrapperOffset };
    fn2.__closure = obj;
    fn2.__workletHash = 5458787116551;
    fn2.__initData = outer1_14;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
    let obj2 = tmp(outer1_2[12]);
    const sharedValue = obj2.useSharedValue(0);
    const sharedValue1 = tmp(outer1_2[12]).useSharedValue(0);
    let obj4 = tmp(outer1_2[12]);
    const sharedValue2 = tmp(outer1_2[12]).useSharedValue(0);
    const obj5 = tmp(outer1_2[12]);
    const sharedValue3 = tmp(outer1_2[12]).useSharedValue(false);
    let tmp10 = outer1_6((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    let closure_13 = tmp10;
    let obj6 = tmp(outer1_2[12]);
    class R {
      constructor() {
        obj = { mode: mode.get(), wrapperDimensions: closure_0.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), wrapperOffset: closure_1.get(), windowDimensions: result, safeArea: _slicedToArray, pipState: pipState.get() };
        return obj;
      }
    }
    R.__closure = { mode, wrapperDimensions, pipAvoidanceSpecs, wrapperOffset, windowDimensions: tmp3, safeArea: tmp2, pipState };
    R.__workletHash = 4950432193502;
    R.__initData = outer1_15;
    class C {
      constructor(arg0, arg1) {
        obj = outer2_0(outer2_2[13]);
        tmp = undefined;
        if (null != wrapperOffset) {
          tmp = wrapperOffset;
        }
        if (!obj.cheapWorkletShallowEqual(wrapperDimensions, tmp)) {
          ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = wrapperDimensions);
          ({ x, y } = pipState);
          tmp5 = outer2_8;
          if (outer2_8.PIP === mode) {
            tmp7 = outer2_0;
            tmp8 = outer2_2;
            num2 = 15;
            obj2 = outer2_0(outer2_2[15]);
            obj = {};
            obj.pipX = x;
            obj.pipY = y;
            num3 = 120;
            obj.width = 120;
            obj.height = 120;
            obj.windowDimensions = tmp3;
            tmp9 = _slicedToArray;
            obj.safeArea = _slicedToArray;
            ({ bottom: obj3.bottomAvoidanceRegion, top: obj3.topAvoidanceRegion } = pipAvoidanceSpecs);
            tmp10 = undefined;
            if (tmp4) {
              tmp10 = wrapperOffset;
            }
            obj.positionOffset = tmp10;
            tmp11 = c13;
            obj.disableHorizontalSafeAreas = c13;
            clampedPIPPosition = obj2.getClampedPIPPosition(obj);
            ({ x: x2, y: y2 } = clampedPIPPosition);
            tmp13 = closure_11;
            num4 = 1;
            result = closure_11.set(1);
          } else {
            tmp6 = outer2_8;
            num = 0;
            x2 = 0;
            y2 = 0;
            if (outer2_8.DISMISSED === mode) {
              y2 = tmp2.height;
              tmp28 = closure_11;
              result1 = closure_11.set(0);
              x2 = 0;
            }
          }
          pipState = undefined;
          if (null != wrapperOffset) {
            pipState = wrapperOffset.pipState;
          }
          x = undefined;
          if (null != pipState) {
            x = pipState.x;
          }
          tmp17 = x !== x;
          if (!tmp17) {
            y = undefined;
            if (null != pipState) {
              y = pipState.y;
            }
            tmp17 = y !== y;
          }
          tmp19 = outer2_8;
          tmp20 = mode === outer2_8.PIP && tmp17 && !wrapperOffset.gestureActive;
          tmp21 = c12;
          if (!tmp20) {
            tmp22 = outer2_8;
            tmp20 = mode !== outer2_8.PIP;
          }
          result2 = c12.set(tmp20);
          tmp24 = closure_9;
          result3 = closure_9.set(x2);
          tmp26 = closure_10;
          result4 = closure_10.set(y2);
        }
        return;
      }
    }
    obj = { cheapWorkletShallowEqual: tmp(outer1_2[13]).cheapWorkletShallowEqual, MediaPlaybackPanelModes: outer1_8, getClampedPIPPosition: tmp(outer1_2[15]).getClampedPIPPosition, safeArea: tmp2, disableHorizontalSafeAreas: tmp10, wrapperOpacity: sharedValue2, animateWrapperTranslation: sharedValue3, wrapperTranslationX: sharedValue, wrapperTranslationY: sharedValue1 };
    C.__closure = obj;
    C.__workletHash = 10793489581273;
    C.__initData = outer1_16;
    const animatedReaction1 = tmp(outer1_2[12]).useAnimatedReaction(R, C);
    if (mode.get() === outer1_8.PIP) {
      if (outer1_9) {
        let maskEmptyElevation = tmp.maskElevation;
      }
      if (mode.get() === outer1_8.PIP) {
        if (!outer1_9) {
          let maskEmptyElevation2 = tmp.maskElevation;
        }
        class L {
          constructor() {
            obj = outer2_0(outer2_2[16]);
            value = closure_11.get();
            obj = {};
            obj1 = {};
            withTimingResult = obj.withTiming(value, outer2_0(outer2_2[17]).timingFast, "respect-motion-settings");
            if (c12.get()) {
              tmp5 = outer2_0;
              tmp6 = outer2_2;
              num = 18;
              obj4 = outer2_0(outer2_2[18]);
              tmp7 = closure_9;
              tmp8 = outer2_7;
              str = "animate-always";
              withSpringResult = obj4.withSpring(closure_9.get(), outer2_7, "animate-always");
            } else {
              tmp3 = closure_9;
              withSpringResult = closure_9.get();
            }
            obj1.translateX = withSpringResult;
            items = [, ];
            items[0] = obj1;
            obj2 = {};
            if (c12.get()) {
              tmp11 = outer2_0;
              tmp12 = outer2_2;
              num2 = 18;
              obj6 = outer2_0(outer2_2[18]);
              tmp13 = closure_10;
              tmp16 = c12;
              value1 = closure_10.get();
              tmp15 = outer2_7;
              str2 = "animate-never";
              if (c12.get()) {
                str2 = "respect-motion-settings";
              }
              withSpringResult1 = obj6.withSpring(value1, tmp15, str2);
            } else {
              tmp9 = closure_10;
              withSpringResult1 = closure_10.get();
            }
            obj2.translateY = withSpringResult1;
            items[1] = obj2;
            obj.transform = items;
            obj.opacity = withTimingResult;
            obj.width = closure_0.get().width;
            obj.height = closure_0.get().height;
            merged = Object.assign(maskElevation);
            return obj;
          }
        }
        let obj1 = { withTiming: tmp(outer1_2[16]).withTiming, wrapperOpacity: sharedValue2, timingFast: tmp(outer1_2[17]).timingFast, animateWrapperTranslation: sharedValue3, withSpring: tmp(outer1_2[18]).withSpring, wrapperTranslationX: sharedValue, MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: outer1_7, wrapperTranslationY: sharedValue1, wrapperDimensions, wrapperElevationStyles: maskEmptyElevation };
        L.__closure = obj1;
        L.__workletHash = 11049335639852;
        L.__initData = outer1_17;
        const animatedStyle = tmp(outer1_2[12]).useAnimatedStyle(L);
        const xl = tmp2(outer1_2[8]).radii.xl;
        const obj9 = tmp(outer1_2[12]);
        class B {
          constructor() {
            obj = {};
            obj2 = outer2_0(outer2_2[18]);
            obj.borderRadius = obj2.withSpring(xl, outer2_10, "animate-always");
            merged = Object.assign(maskElevation);
            return obj;
          }
        }
        obj2 = { withSpring: tmp(outer1_2[18]).withSpring, borderRadius: xl, BORDER_RADIUS_PHYSICS: outer1_10, maskElevationStyles: maskEmptyElevation2 };
        B.__closure = obj2;
        B.__workletHash = 7035830192327;
        B.__initData = outer1_18;
        const animatedStyle1 = tmp(outer1_2[12]).useAnimatedStyle(B);
        let items = [animatedStyle, , ];
        ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp);
        const items1 = [
          outer1_4.useMemo(() => {
                const items = [animatedStyle, , ];
                ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = closure_2);
                return items;
              }, items),

        ];
        const items2 = [animatedStyle1, tmp.mask];
        items1[1] = outer1_4.useMemo(() => {
          const items = [animatedStyle1, tmp.mask];
          return items;
        }, items2);
        return items1;
      }
      maskEmptyElevation2 = tmp.maskEmptyElevation;
    }
    maskEmptyElevation = tmp.maskEmptyElevation;
  })(wrapperDimensions, wrapperOffset), 2);
  obj.mode = require(15703) /* MorphablePanelModes */.MorphablePanelModes.PIP;
  obj.pipState = pipState;
  obj.wrapperOffset = wrapperOffset2;
  let tmp10 = importDefault(15703);
  obj = {};
  obj1 = { style: animatedStyle, pointerEvents: "box-none" };
  let obj2 = { style: tmp6 };
  const obj3 = { style: tmp7 };
  let obj4 = { gesture: importDefault(15703)(obj) };
  let obj5 = { style: items };
  items = [tmp.content, animatedStyle1];
  obj5.children = jsx(importDefault(15900), {});
  obj4.children = jsx(importDefault(3991).View, { style: items });
  obj3.children = jsx(require(5217) /* Directions */.GestureDetector, { gesture: importDefault(15703)(obj) });
  obj2.children = jsx(importDefault(3991).View, { style: tmp7 });
  obj1.children = jsx(importDefault(3991).View, { style: tmp6 });
  obj.children = jsx(importDefault(3991).View, { style: animatedStyle, pointerEvents: "box-none" });
  return jsx(require(5449) /* Layer */.LayerScope, {});
};
