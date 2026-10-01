// Module ID: 17047
// Function ID: 17048
// Name: MediaPlaybackPanelUI
// Dependencies: [32, 19, 8939, 14098, 11756, 11755, 21, 4836, 576, 1613, 1479, 17046, 4566, 8853, 10896, 16843, 4837, 4840, 5280, 16845, 6577, 6073, 17048, 2]
// Exports: default

// Module 17047 (MediaPlaybackPanelUI)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10896 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import MediaPlaybackPanelStateContextDefault from "MediaPlaybackPanelStateContext" /* 17046 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 8939 */;
import MediaPlaybackPanelConstants from "MediaPlaybackPanelConstants" /* 14098 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, importDefault, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
let tmp2;
const ReanimatedRexportDefault = tmp2(4566);
const useMorphablePanelGestureDefault = tmp2(16845);
const useContext = react2.useContext;
({ MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: metroImportDefault, MediaPlaybackPanelModes: metroImportAll } = MediaPlaybackPanelConstants);
const IS_IOS = MorphablePanelConstants.IS_IOS;
const BORDER_RADIUS_PHYSICS = VoicePanelConstants.BORDER_RADIUS_PHYSICS;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { wrapperAnimationPresets: { opacity: 0 }, wrapper: { position: "absolute", top: 0, left: 0, zIndex: 1 }, mask: rect, maskElevation: obj2, maskEmptyElevation: { xOffset: 0, yOffset: 0, shadowColorIos: "#000000", shadowOpacity: 0, shadowRadius: 0, elevation: 0, shadowColorAndroid: "#000000" }, content: obj3 };
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", borderWidth: 1, borderRadius: nativeDefault.radii.xl, borderColor: nativeDefault.colors.CHAT_BORDER };
createStyles = createStyles.createStyles;
obj2 = {};
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = createStyles(obj);
let __initData = { code: "function MediaPlaybackPanelUITsx1(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}" };
__initData = { code: "function MediaPlaybackPanelUITsx2(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;switch(modeToSet){case MediaPlaybackPanelModes.PIP:{const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});break;}case MediaPlaybackPanelModes.DISMISSED:updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});break;default:modeToSet;}}" };
const __initData2 = { code: "function MediaPlaybackPanelUITsx3(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}" };
const __initData3 = { code: "function MediaPlaybackPanelUITsx4(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}" };
const __initData4 = { code: "function MediaPlaybackPanelUITsx5(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}" };
const __initData5 = { code: "function MediaPlaybackPanelUITsx6(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};}" };
const __initData6 = { code: "function MediaPlaybackPanelUITsx7(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};}" };
const __initData7 = { code: "function MediaPlaybackPanelUITsx8(){const{styles}=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelUI.tsx");

export default function MediaPlaybackPanelUI() {
  let content;
  let pipState2;
  let styles;
  let tmp32;
  let tmp33;
  let wrapperDimensions;
  let wrapperOffset;
  let wrapperOffset2;
  let tmp = closure_12();
  _require = tmp;
  const tmp2 = importDefault;
  let tmp4 = useWindowDimensionsDefault();
  importDefault = tmp4;
  const tmp5 = useContext(MediaPlaybackPanelStateContextDefault);
  ({ wrapperDimensions, wrapperOffset } = tmp5);
  const tmp6 = _require;
  let obj = require("ReanimatedRexport");
  const fn = function p() {
    size = { position: "absolute", top: 0, left: 0, width: styles.width, height: styles.height, overflow: "hidden" };
    return size;
  };
  fn.__closure = { windowDimensions: tmp4 };
  fn.__workletHash = 5768037716653;
  fn.__initData = __initData6;
  __initData = undefined;
  let maskEmptyElevation;
  let maskElevation;
  let animatedStyle1;
  let xl;
  let animatedStyle2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp8 = closure_12();
  let closure_2 = tmp8;
  let tmp9 = useSafeAreaInsetsDefault();
  safeArea = tmp9;
  const tmp10 = useWindowDimensionsDefault();
  windowDimensions = tmp10;
  let obj2 = react;
  const context = react.useContext(MediaPlaybackPanelStateContextDefault);
  let mode = context.mode;
  const pipState = context.pipState;
  const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
  const canShowPIP = context.canShowPIP;
  const fn2 = function u() {
    const obj = { mode: mode.get(), windowDimensions, canShowPIP: canShowPIP.get() };
    return obj;
  };
  fn2.__closure = { mode, windowDimensions: tmp10, canShowPIP };
  fn2.__workletHash = 4412661953046;
  fn2.__initData = __initData;
  const fn3 = function p(mode, current) {
    let height;
    let width;
    const cheapWorkletShallowEqual = wrapperDimensions(dependencyMap[13]).cheapWorkletShallowEqual;
    wrapperDimensions(dependencyMap[13]);
    const tmp = current;
    if (!cheapWorkletShallowEqual(mode, tmp)) {
      mode = mode.mode;
      if (constants.PIP === mode) {
        const tmp9 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
        ({ width, height } = tmp9);
        size = { width, height };
        wrapperOffset(dependencyMap[14])(wrapperDimensions, size);
      } else if (tmp5.DISMISSED === mode) {
        const obj = { y: tmp4.height };
        wrapperOffset(dependencyMap[14])(wrapperOffset, obj);
      }
    }
  };
  const obj3 = require("ReanimatedRexport");
  fn3.__closure = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, MediaPlaybackPanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperDimensions, wrapperOffset };
  fn3.__workletHash = 5458787116551;
  fn3.__initData = __initData;
  ({ cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, MediaPlaybackPanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperDimensions, wrapperOffset });
  const animatedReaction = obj3.useAnimatedReaction(fn2, fn3);
  const obj5 = require("ReanimatedRexport");
  const sharedValue = obj5.useSharedValue(0);
  const obj6 = require("ReanimatedRexport");
  const sharedValue1 = obj6.useSharedValue(0);
  const obj7 = require("ReanimatedRexport");
  const sharedValue2 = obj7.useSharedValue(0);
  const obj8 = require("ReanimatedRexport");
  const sharedValue3 = obj8.useSharedValue(false);
  let tmp18 = SafeAreaDisabledStore((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
  __initData = tmp18;
  const obj9 = require("ReanimatedRexport");
  const tmp12 = MediaPlaybackPanelModes;
  class R {
    constructor() {
      const obj = { mode: mode.get(), wrapperDimensions: wrapperDimensions.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), wrapperOffset: wrapperOffset.get(), windowDimensions, safeArea, pipState: pipState.get() };
      return obj;
    }
  }
  R.__closure = { mode, wrapperDimensions, pipAvoidanceSpecs, wrapperOffset, windowDimensions: tmp10, safeArea: tmp9, pipState };
  R.__workletHash = 4950432193502;
  R.__initData = __initData2;
  class C {
    constructor(safeAreaState, pipState) {
      let tmp11;
      let x;
      let x2;
      let y;
      let y2;
      const cheapWorkletShallowEqual = wrapperDimensions(dependencyMap[13]).cheapWorkletShallowEqual;
      wrapperDimensions(dependencyMap[13]);
      const tmp4 = pipState;
      if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
        ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = safeAreaState);
        ({ x, y } = pipState);
        if (constants.PIP === mode) {
          size = { pipX: x, pipY: y, width: 120, height: 120, windowDimensions: tmp6, safeArea, bottomAvoidanceRegion: null, topAvoidanceRegion: null, positionOffset: tmp11, disableHorizontalSafeAreas };
          ({ bottom: obj.bottomAvoidanceRegion, top: obj.topAvoidanceRegion } = pipAvoidanceSpecs);
          tmp11 = undefined;
          const getClampedPIPPosition = tmp(tmp2[15]).getClampedPIPPosition;
          wrapperDimensions(dependencyMap[15]);
          if (tmp7) {
            tmp11 = wrapperOffset;
          }
          const clampedPIPPosition = getClampedPIPPosition(size);
          ({ x: x2, y: y2 } = clampedPIPPosition);
          const result = sharedValue2.set(1);
        } else {
          y2 = 0;
          x2 = 0;
          if (constants.DISMISSED === mode) {
            y2 = tmp5.height;
            const result1 = sharedValue2.set(0);
            x2 = 0;
          }
        }
        let pipState1;
        if (pipState != null) {
          pipState1 = pipState.pipState;
        }
        let x1;
        if (pipState1 != null) {
          x1 = pipState1.x;
        }
        let tmp18 = x !== x1;
        if (!tmp18) {
          let y1;
          if (pipState1 != null) {
            y1 = pipState1.y;
          }
          tmp18 = y !== y1;
        }
        let tmp20 = mode === tmp8.PIP && tmp18 && !wrapperOffset.gestureActive;
        set = sharedValue3.set;
        if (!tmp20) {
          tmp20 = mode !== tmp8.PIP;
        }
        const result2 = set(tmp20);
        const result3 = sharedValue.set(x2);
        const result4 = sharedValue1.set(y2);
      }
    }
  }
  C.__closure = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, MediaPlaybackPanelModes, getClampedPIPPosition: require("MorphablePanelUtils").getClampedPIPPosition, safeArea: tmp9, disableHorizontalSafeAreas: tmp18, wrapperOpacity: sharedValue2, animateWrapperTranslation: sharedValue3, wrapperTranslationX: sharedValue, wrapperTranslationY: sharedValue1 };
  C.__workletHash = 10793489581273;
  C.__initData = __initData3;
  ({ cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, MediaPlaybackPanelModes, getClampedPIPPosition: require("MorphablePanelUtils").getClampedPIPPosition, safeArea: tmp9, disableHorizontalSafeAreas: tmp18, wrapperOpacity: sharedValue2, animateWrapperTranslation: sharedValue3, wrapperTranslationX: sharedValue, wrapperTranslationY: sharedValue1 });
  const animatedReaction1 = obj9.useAnimatedReaction(R, C);
  if (mode.get() === MediaPlaybackPanelModes.PIP) {
    let tmp20 = IS_IOS;
    if (tmp20) {
      maskEmptyElevation = tmp8.maskElevation;
    }
    if (mode.get() === tmp12.PIP) {
      const tmp21 = IS_IOS;
      if (!tmp21) {
        maskElevation = tmp8.maskElevation;
      }
      const tmp6Result = tmp6(4566);
      class L {
        constructor() {
          let withSpringResult;
          let withSpringResult1;
          const withTiming = wrapperDimensions(dependencyMap[16]).withTiming;
          wrapperDimensions(dependencyMap[16]);
          const value = sharedValue2.get();
          const withTimingResult = withTiming(value, wrapperDimensions(dependencyMap[17]).timingFast, "respect-motion-settings");
          if (sharedValue3.get()) {
            const tmpResult = wrapperDimensions(dependencyMap[18]);
            withSpringResult = tmpResult.withSpring(sharedValue.get(), MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS, "animate-always");
          } else {
            withSpringResult = sharedValue.get();
          }
          const items = [{ translateX: withSpringResult }, ];
          if (sharedValue3.get()) {
            const withSpring = wrapperDimensions(dependencyMap[18]).withSpring;
            wrapperDimensions(dependencyMap[18]);
            const value2 = sharedValue1.get();
            let str2 = "animate-never";
            const tmp15 = MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS;
            if (sharedValue3.get()) {
              str2 = "respect-motion-settings";
            }
            withSpringResult1 = withSpring(value2, tmp15, str2);
          } else {
            withSpringResult1 = sharedValue1.get();
          }
          size = { transform: items, opacity: withTimingResult, width: wrapperDimensions.get().width, height: wrapperDimensions.get().height };
          items[1] = { translateY: withSpringResult1 };
          const merged = Object.assign(maskEmptyElevation);
          return size;
        }
      }
      const useAnimatedStyle = tmp6Result.useAnimatedStyle;
      L.__closure = { withTiming: tmp6(4837).withTiming, wrapperOpacity: sharedValue2, timingFast: tmp6(4840).timingFast, animateWrapperTranslation: sharedValue3, withSpring: tmp6(5280).withSpring, wrapperTranslationX: sharedValue, MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS, wrapperTranslationY: sharedValue1, wrapperDimensions, wrapperElevationStyles: maskEmptyElevation };
      L.__workletHash = 11049335639852;
      L.__initData = __initData4;
      const obj11 = { withTiming: tmp6(4837).withTiming, wrapperOpacity: sharedValue2, timingFast: tmp6(4840).timingFast, animateWrapperTranslation: sharedValue3, withSpring: tmp6(5280).withSpring, wrapperTranslationX: sharedValue, MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS, wrapperTranslationY: sharedValue1, wrapperDimensions, wrapperElevationStyles: maskEmptyElevation };
      animatedStyle1 = useAnimatedStyle(L);
      xl = nativeDefault.radii.xl;
      const tmp6Result3 = tmp6(4566);
      class B {
        constructor() {
          let obj2;
          const obj = { borderRadius: obj2.withSpring(xl, BORDER_RADIUS_PHYSICS, "animate-always") };
          obj2 = wrapperDimensions(dependencyMap[18]);
          const merged = Object.assign(maskElevation);
          return obj;
        }
      }
      const useAnimatedStyle2 = tmp6Result3.useAnimatedStyle;
      B.__closure = { withSpring: tmp6(5280).withSpring, borderRadius: xl, BORDER_RADIUS_PHYSICS, maskElevationStyles: maskElevation };
      B.__workletHash = 7035830192327;
      B.__initData = __initData5;
      const obj12 = { withSpring: tmp6(5280).withSpring, borderRadius: xl, BORDER_RADIUS_PHYSICS, maskElevationStyles: maskElevation };
      animatedStyle2 = useAnimatedStyle2(B);
      let items = [animatedStyle1, , ];
      ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp8);
      const items1 = [
        obj2.useMemo(() => {
              const items = [animatedStyle1, , ];
              ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = mask);
              return items;
            }, items),

      ];
      const items2 = [animatedStyle2, tmp8.mask];
      items1[1] = obj2.useMemo(() => {
        const items = [animatedStyle2, mask.mask];
        return items;
      }, items2);
      [tmp32, tmp33] = items1;
      _slicedToArray(items1, 2);
      const fn4 = function b() {
        return { flexDirection: "column", backgroundColor: content.content.backgroundColor, borderTopStartRadius: 0, borderTopEndRadius: 0, top: 0, overflow: "hidden" };
      };
      const obj13 = { styles: tmp };
      fn4.__closure = obj13;
      fn4.__workletHash = 8557652955267;
      fn4.__initData = __initData7;
      const tmp6Result4 = tmp6(4566);
      const animatedStyle3 = tmp6Result4.useAnimatedStyle(fn4);
      const context1 = obj2.useContext(MediaPlaybackPanelStateContextDefault);
      ({ wrapperOffset: wrapperOffset2, pipState: pipState2 } = context1);
      const obj14 = { panGestureEnabled: true, mode: tmp6(16845).MorphablePanelModes.PIP, pipState: pipState2, wrapperOffset: wrapperOffset2 };
      const tmp2Result = useMorphablePanelGestureDefault;
      const tmp2ResultResult = tmp2Result(obj14);
      const LayerScope = tmp6(6577).LayerScope;
      const View = ReanimatedRexportDefault.View;
      const View2 = ReanimatedRexportDefault.View;
      const View3 = ReanimatedRexportDefault.View;
      const GestureDetector = tmp6(6073).GestureDetector;
      const items3 = [tmp.content, animatedStyle3];
      const View4 = ReanimatedRexportDefault.View;
      class R {
        constructor() {
          const obj = { mode: mode.get(), wrapperDimensions: wrapperDimensions.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), wrapperOffset: wrapperOffset.get(), windowDimensions, safeArea, pipState: pipState.get() };
          return obj;
        }
      }
      return <LayerScope>{null}</LayerScope>;
    }
  }
  maskEmptyElevation = tmp8.maskEmptyElevation;
};
