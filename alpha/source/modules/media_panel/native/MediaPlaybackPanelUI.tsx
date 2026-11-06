// Module ID: 19669
// Function ID: 19670
// Name: MediaPlaybackPanelUI
// Dependencies: [32, 19, 12020, 16655, 11382, 11381, 21, 5170, 575, 1627, 1493, 19668, 1652, 10227, 11385, 19433, 5400, 5403, 5791, 19435, 5768, 5450, 19670, 2]
// Exports: default

// Module 19669 (MediaPlaybackPanelUI)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11381 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11382 */;
import MediaPlaybackPanelStateContextDefault from "MediaPlaybackPanelStateContext" /* 19668 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 12020 */;
import MediaPlaybackPanelConstants from "MediaPlaybackPanelConstants" /* 16655 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const react = react2;
let _require, dependencyMap, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
let tmp3;
let tmp7;
const useSafeAreaInsetsDefault = tmp3(1627);
const _modDef1652 = tmp3(1652);
const timing_timing = tmp7(5400);
const timingPresets = tmp7(5403);
const LegacyBaseButton = tmp7(5450);
const LayerScope2 = tmp7(5768);
const spring_spring = tmp7(5791);
const cheapWorkletShallowEqual = tmp7(10227);
const updateSharedValueIfChangedDefault = tmp3(11385);
const MorphablePanelUtils = tmp7(19433);
const useMorphablePanelGesture = tmp7(19435);
const useMorphablePanelGestureDefault = tmp3(19435);
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
let closure_13 = { code: "(function MediaPlaybackPanelUITsx1(){let[mode,windowDimensions,canShowPIP]=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};})" };
let closure_14 = { code: "(function MediaPlaybackPanelUITsx2(props,previous){let[cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;switch(modeToSet){case MediaPlaybackPanelModes.PIP:{const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});break;}case MediaPlaybackPanelModes.DISMISSED:updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});break;default:modeToSet;}})" };
let closure_15 = { code: "(function MediaPlaybackPanelUITsx3(){let[mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState]=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};})" };
let closure_16 = { code: "(function MediaPlaybackPanelUITsx4(props,previous){let[cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);})" };
let closure_17 = { code: "(function MediaPlaybackPanelUITsx5(){let[withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles]=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};})" };
let closure_18 = { code: "(function MediaPlaybackPanelUITsx6(){let[withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles]=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};})" };
let closure_19 = { code: "(function MediaPlaybackPanelUITsx7(){let[windowDimensions]=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};})" };
let closure_20 = { code: "(function MediaPlaybackPanelUITsx8(){let[styles]=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelUI.tsx");

export default function MediaPlaybackPanelUI() {
  let canShowPIP;
  let mode;
  let pipAvoidanceSpecs;
  let pipState;
  let pipState2;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
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
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp8;
  let tmp80;
  let tmp84;
  let tmp85;
  let tmp88;
  let tmp89;
  let tmp9;
  let wrapperDimensions;
  let wrapperOffset;
  let wrapperOffset2;
  let tmp = closure_12;
  let tmp2 = closure_12();
  const tmp3 = importDefault;
  const tmp4 = dependencyMap;
  const tmp5 = useWindowDimensionsDefault();
  const tmp6 = useContext(MediaPlaybackPanelStateContextDefault);
  ({ wrapperDimensions, wrapperOffset } = tmp6);
  let obj = _mod1652;
  let items = [closure_19, tmp5];
  let c0;
  [tmp8, tmp9] = items;
  class MediaPlaybackPanelUITsx7 {
    constructor() {
      size = { position: "absolute", top: 0, left: 0, width: _undefined.width, height: _undefined.height, overflow: "hidden" };
      return size;
    }
  }
  const items1 = [tmp9];
  MediaPlaybackPanelUITsx7.__closure = items1;
  MediaPlaybackPanelUITsx7.__workletHash = 14613297430420;
  MediaPlaybackPanelUITsx7.__initData = tmp8;
  let animatedStyle1;
  dependencyMap = undefined;
  const animatedStyle = obj.useAnimatedStyle(MediaPlaybackPanelUITsx7);
  const tmpResult = tmp();
  _require = tmpResult;
  let tmp12 = useSafeAreaInsetsDefault();
  const tmp13 = useWindowDimensionsDefault();
  const obj2 = react;
  const context = react.useContext(MediaPlaybackPanelStateContextDefault);
  ({ mode, pipState, pipAvoidanceSpecs, canShowPIP } = context);
  const tmp7Result = _mod1652;
  const items2 = [closure_13, mode, tmp13, canShowPIP];
  c0 = undefined;
  let c1;
  let c2;
  [tmp16, tmp17, tmp18, tmp19] = items2;
  class MediaPlaybackPanelUITsx1 {
    constructor() {
      const obj = { mode: _undefined.get(), windowDimensions, canShowPIP: _undefined2.get() };
      return obj;
    }
  }
  const items3 = [tmp17, tmp18, tmp19];
  MediaPlaybackPanelUITsx1.__closure = items3;
  MediaPlaybackPanelUITsx1.__workletHash = 15013094532527;
  MediaPlaybackPanelUITsx1.__initData = tmp16;
  const items4 = [closure_14, , , , , ];
  const useAnimatedReaction = tmp7Result.useAnimatedReaction;
  items4[1] = cheapWorkletShallowEqual.cheapWorkletShallowEqual;
  items4[2] = metroImportAll;
  items4[3] = updateSharedValueIfChangedDefault;
  items4[4] = wrapperDimensions;
  items4[5] = wrapperOffset;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items4;
  class MediaPlaybackPanelUITsx2 {
    constructor(mode, arg1) {
      const tmp = arg1;
      const tmp2 = c0;
      if (!tmp2(mode, tmp)) {
        mode = mode.mode;
        if (_undefined.PIP === mode) {
          size = { width: null, height: null };
          const tmp8 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
          ({ width: obj2.width, height: obj2.height } = tmp8);
          _undefined2(c3, size);
        } else if (tmp4.DISMISSED === mode) {
          const obj = { y: tmp3.height };
          _undefined2(c4, obj);
        }
      }
    }
  }
  const items5 = [tmp22, tmp23, tmp24, tmp25, tmp26];
  MediaPlaybackPanelUITsx2.__closure = items5;
  MediaPlaybackPanelUITsx2.__workletHash = 13340145341918;
  MediaPlaybackPanelUITsx2.__initData = tmp21;
  const animatedReaction = useAnimatedReaction(MediaPlaybackPanelUITsx1, MediaPlaybackPanelUITsx2);
  const tmp7Result9 = _mod1652;
  const sharedValue = tmp7Result9.useSharedValue(0);
  const tmp7Result10 = _mod1652;
  const sharedValue1 = tmp7Result10.useSharedValue(0);
  const tmp7Result11 = _mod1652;
  const sharedValue2 = tmp7Result11.useSharedValue(0);
  const tmp7Result12 = _mod1652;
  const sharedValue3 = tmp7Result12.useSharedValue(false);
  const items6 = [closure_15, mode, wrapperDimensions, pipAvoidanceSpecs, wrapperOffset, tmp13, tmp12, pipState];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41] = items6;
  const tmp32 = SafeAreaDisabledStore((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
  const tmp7Result13 = _mod1652;
  class MediaPlaybackPanelUITsx3 {
    constructor() {
      const obj = { mode: _undefined.get(), wrapperDimensions: _undefined2.get(), pipAvoidanceSpecs: _undefined3.get(), wrapperOffset: _undefined4.get(), windowDimensions, safeArea, pipState: _undefined5.get() };
      return obj;
    }
  }
  const items7 = [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41];
  MediaPlaybackPanelUITsx3.__closure = items7;
  MediaPlaybackPanelUITsx3.__workletHash = 7830339562823;
  MediaPlaybackPanelUITsx3.__initData = tmp34;
  const items8 = [closure_16, , , , , , , , , ];
  const useAnimatedReaction2 = tmp7Result13.useAnimatedReaction;
  items8[1] = cheapWorkletShallowEqual.cheapWorkletShallowEqual;
  items8[2] = metroImportAll;
  items8[3] = MorphablePanelUtils.getClampedPIPPosition;
  items8[4] = tmp12;
  items8[5] = tmp32;
  items8[6] = sharedValue2;
  items8[7] = sharedValue3;
  items8[8] = sharedValue;
  items8[9] = sharedValue1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  let c7;
  let c8;
  [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items8;
  class MediaPlaybackPanelUITsx4 {
    constructor(arg0, pipState) {
      let mode;
      let pipAvoidanceSpecs;
      let tmp9;
      let wrapperOffset;
      let x;
      let x2;
      let y;
      let y2;
      const tmp = c0;
      const tmp2 = pipState;
      if (!tmp(arg0, tmp2)) {
        ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = arg0);
        ({ x, y } = pipState);
        if (_undefined.PIP === mode) {
          size = { pipX: x, pipY: y, width: 120, height: 120, windowDimensions: tmp4, safeArea, bottomAvoidanceRegion: null, topAvoidanceRegion: null, positionOffset: tmp9, disableHorizontalSafeAreas };
          ({ bottom: obj.bottomAvoidanceRegion, top: obj.topAvoidanceRegion } = pipAvoidanceSpecs);
          tmp9 = undefined;
          if (tmp5) {
            tmp9 = wrapperOffset;
          }
          ({ x: x2, y: y2 } = _undefined(size));
          _undefined(size);
          const result = _undefined2.set(1);
        } else {
          y2 = 0;
          x2 = 0;
          if (_undefined.DISMISSED === mode) {
            y2 = tmp3.height;
            const result1 = _undefined2.set(0);
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
        let tmp16 = x !== x1;
        if (!tmp16) {
          let y1;
          if (pipState1 != null) {
            y1 = pipState1.y;
          }
          tmp16 = y !== y1;
        }
        let tmp18 = mode === tmp6.PIP && tmp16 && !wrapperOffset.gestureActive;
        set = _undefined3.set;
        if (!tmp18) {
          tmp18 = mode !== tmp6.PIP;
        }
        const result2 = set(tmp18);
        const result3 = _undefined4.set(x2);
        const result4 = _undefined5.set(y2);
      }
    }
  }
  const items9 = [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
  MediaPlaybackPanelUITsx4.__closure = items9;
  MediaPlaybackPanelUITsx4.__workletHash = 13851512553920;
  MediaPlaybackPanelUITsx4.__initData = tmp42;
  const animatedReaction2 = useAnimatedReaction2(MediaPlaybackPanelUITsx3, MediaPlaybackPanelUITsx4);
  if (mode.get() === metroImportAll.PIP) {
    let maskEmptyElevation;
    const tmp53 = IS_IOS;
    if (tmp53) {
      maskEmptyElevation = tmpResult.maskElevation;
    }
    if (mode.get() === metroImportAll.PIP) {
      let maskEmptyElevation2;
      const tmp54 = IS_IOS;
      if (!tmp54) {
        maskEmptyElevation2 = tmpResult.maskElevation;
      }
      const items10 = [closure_17, , , , , , , , , , ];
      const useAnimatedStyle = _mod1652.useAnimatedStyle;
      _mod1652;
      items10[1] = timing_timing.withTiming;
      items10[2] = sharedValue2;
      items10[3] = timingPresets.timingFast;
      items10[4] = sharedValue3;
      items10[5] = spring_spring.withSpring;
      items10[6] = sharedValue;
      items10[7] = metroImportDefault;
      items10[8] = sharedValue1;
      items10[9] = wrapperDimensions;
      items10[10] = maskEmptyElevation;
      c0 = undefined;
      class MediaPlaybackPanelUITsx7 {
        constructor() {
          size = { position: "absolute", top: 0, left: 0, width: _undefined.width, height: _undefined.height, overflow: "hidden" };
          return size;
        }
      }
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      let c9;
      [tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69] = items10;
      class MediaPlaybackPanelUITsx5 {
        constructor() {
          let value;
          let value3;
          const tmp = _undefined(closure_1_1.get(), c2, "respect-motion-settings");
          if (_undefined2.get()) {
            value = _undefined3(_undefined4.get(), c6, "animate-always");
          } else {
            value = _undefined4.get();
          }
          const items = [{ translateX: value }, ];
          if (_undefined2.get()) {
            const value2 = _undefined5.get();
            let str2 = "animate-never";
            const tmp12 = c6;
            const tmp9 = _undefined3;
            if (_undefined2.get()) {
              str2 = "respect-motion-settings";
            }
            value3 = tmp9(value2, tmp12, str2);
          } else {
            value3 = _undefined5.get();
          }
          size = { transform: items, opacity: tmp, width: _undefined6.get().width, height: _undefined6.get().height };
          items[1] = { translateY: value3 };
          const merged = Object.assign(c9);
          return size;
        }
      }
      const items11 = [tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69];
      MediaPlaybackPanelUITsx5.__closure = items11;
      MediaPlaybackPanelUITsx5.__workletHash = 9950483941301;
      MediaPlaybackPanelUITsx5.__initData = tmp59;
      animatedStyle1 = useAnimatedStyle(MediaPlaybackPanelUITsx5);
      const xl = nativeDefault.radii.xl;
      _mod1652;
      const items12 = [closure_18, , , , ];
      class MediaPlaybackPanelUITsx1 {
        constructor() {
          const obj = { mode: _undefined.get(), windowDimensions, canShowPIP: _undefined2.get() };
          return obj;
        }
      }
      items12[1] = spring_spring.withSpring;
      items12[2] = xl;
      items12[3] = BORDER_RADIUS_PHYSICS;
      items12[4] = maskEmptyElevation2;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      [tmp76, tmp77, tmp78, tmp79, tmp80] = items12;
      class MediaPlaybackPanelUITsx6 {
        constructor() {
          const obj = { borderRadius: _undefined(c1, c2, "animate-always") };
          const merged = Object.assign(c3);
          return obj;
        }
      }
      const items13 = [tmp77, tmp78, tmp79, tmp80];
      MediaPlaybackPanelUITsx6.__closure = items13;
      MediaPlaybackPanelUITsx6.__workletHash = 12576524992190;
      MediaPlaybackPanelUITsx6.__initData = tmp76;
      const tmp72Result = tmp72(MediaPlaybackPanelUITsx6);
      dependencyMap = tmp72Result;
      const items14 = [animatedStyle1, , ];
      class MediaPlaybackPanelUITsx2 {
        constructor(mode, arg1) {
          const tmp = arg1;
          const tmp2 = c0;
          if (!tmp2(mode, tmp)) {
            mode = mode.mode;
            if (_undefined.PIP === mode) {
              size = { width: null, height: null };
              const tmp8 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
              ({ width: obj2.width, height: obj2.height } = tmp8);
              _undefined2(c3, size);
            } else if (tmp4.DISMISSED === mode) {
              const obj = { y: tmp3.height };
              _undefined2(c4, obj);
            }
          }
        }
      }
      items14[2] = tmpResult.wrapperAnimationPresets;
      const items15 = [
        obj2.useMemo(() => {
              const items = [animatedStyle1, , ];
              ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = mask);
              return items;
            }, items14),

      ];
      const items16 = [tmp72Result, tmpResult.mask];
      items15[1] = obj2.useMemo(() => {
        const items = [closure_2, mask.mask];
        return items;
      }, items16);
      [tmp84, tmp85] = items15;
      _slicedToArray(items15, 2);
      const items17 = [closure_20, tmp2];
      c0 = undefined;
      [tmp88, tmp89] = items17;
      const tmp7Result16 = _mod1652;
      class MediaPlaybackPanelUITsx8 {
        constructor() {
          return { flexDirection: "column", backgroundColor: _undefined.content.backgroundColor, borderTopStartRadius: 0, borderTopEndRadius: 0, top: 0, overflow: "hidden" };
        }
      }
      const items18 = [tmp89];
      MediaPlaybackPanelUITsx8.__closure = items18;
      MediaPlaybackPanelUITsx8.__workletHash = 3864933015194;
      MediaPlaybackPanelUITsx8.__initData = tmp88;
      const animatedStyle2 = tmp7Result16.useAnimatedStyle(MediaPlaybackPanelUITsx8);
      const context1 = obj2.useContext(MediaPlaybackPanelStateContextDefault);
      ({ wrapperOffset: wrapperOffset2, pipState: pipState2 } = context1);
      const obj3 = { panGestureEnabled: true, mode: useMorphablePanelGesture.MorphablePanelModes.PIP, pipState: pipState2, wrapperOffset: wrapperOffset2 };
      const tmp3Result = useMorphablePanelGestureDefault;
      const tmp3ResultResult = tmp3Result(obj3);
      const LayerScope = LayerScope2.LayerScope;
      class MediaPlaybackPanelUITsx3 {
        constructor() {
          const obj = { mode: _undefined.get(), wrapperDimensions: _undefined2.get(), pipAvoidanceSpecs: _undefined3.get(), wrapperOffset: _undefined4.get(), windowDimensions, safeArea, pipState: _undefined5.get() };
          return obj;
        }
      }
      const View = _modDef1652.View;
      const View2 = _modDef1652.View;
      const GestureDetector = LegacyBaseButton.GestureDetector;
      const items19 = [tmp2.content, animatedStyle2];
      const View3 = _modDef1652.View;
      return <LayerScope>{null}</LayerScope>;
    }
    maskEmptyElevation2 = tmpResult.maskEmptyElevation;
  }
  maskEmptyElevation = tmpResult.maskEmptyElevation;
};
