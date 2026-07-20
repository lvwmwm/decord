// Module ID: 15763
// Function ID: 120533
// Name: MediaPlaybackPanelUI
// Dependencies: []
// Exports: default

// Module 15763 (MediaPlaybackPanelUI)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const useContext = arg1(dependencyMap[1]).useContext;
let closure_6 = importDefault(dependencyMap[2]);
({ MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: closure_7, MediaPlaybackPanelModes: closure_8 } = arg1(dependencyMap[3]));
const IS_IOS = arg1(dependencyMap[4]).IS_IOS;
const BORDER_RADIUS_PHYSICS = arg1(dependencyMap[5]).BORDER_RADIUS_PHYSICS;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = arg1(dependencyMap[7]);
obj = { wrapperAnimationPresets: { opacity: 0 }, wrapper: {} };
obj = { hm: "whitespace", hms: "class", hmsv: "[ \\t\\n\\r]", hmv: "[ \\t\\n\\r]", ms: "other", y: "optionalWhitespace", yM: "class", borderRadius: importDefault(dependencyMap[8]).radii.xl, borderColor: importDefault(dependencyMap[8]).colors.CHAT_BORDER };
obj.mask = obj;
const merged = Object.assign(importDefault(dependencyMap[8]).shadows.SHADOW_LOW_HOVER);
obj.maskElevation = {};
obj.maskEmptyElevation = {};
const obj1 = {};
const tmp2 = arg1(dependencyMap[3]);
obj.content = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = obj.createStyles(obj);
let closure_13 = { code: "function MediaPlaybackPanelUITsx1(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}" };
let closure_14 = { code: "function MediaPlaybackPanelUITsx2(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;switch(modeToSet){case MediaPlaybackPanelModes.PIP:{const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});break;}case MediaPlaybackPanelModes.DISMISSED:updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});break;default:modeToSet;}}" };
let closure_15 = { code: "function MediaPlaybackPanelUITsx3(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}" };
let closure_16 = { code: "function MediaPlaybackPanelUITsx4(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}" };
let closure_17 = { code: "function MediaPlaybackPanelUITsx5(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}" };
let closure_18 = { code: "function MediaPlaybackPanelUITsx6(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};}" };
let closure_19 = { code: "function MediaPlaybackPanelUITsx7(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};}" };
let closure_20 = { code: "function MediaPlaybackPanelUITsx8(){const{styles}=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};}" };
const obj2 = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelUI.tsx");

export default function MediaPlaybackPanelUI() {
  let pipState;
  let tmp6;
  let tmp7;
  let wrapperDimensions;
  let wrapperOffset;
  let wrapperOffset2;
  const tmp = callback2();
  const arg1 = tmp;
  const tmp2 = importDefault(dependencyMap[10])();
  const importDefault = tmp2;
  ({ wrapperDimensions, wrapperOffset } = useContext(importDefault(dependencyMap[11])));
  let obj = arg1(dependencyMap[12]);
  const fn = function p() {
    return { width: tmp2.width, height: tmp2.height };
  };
  fn.__closure = { windowDimensions: tmp2 };
  fn.__workletHash = 5768037716653;
  fn.__initData = closure_19;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp3 = useContext(importDefault(dependencyMap[11]));
  [tmp6, tmp7] = callback(function useWrapperStyles(wrapperDimensions, wrapperOffset) {
    let tmp = wrapperDimensions;
    let tmp2 = wrapperOffset;
    tmp = sharedValue3();
    tmp2 = tmp2(tmp[9])();
    const tmp3 = tmp2(tmp[10])();
    const context = tmp3.useContext(tmp2(tmp[11]));
    const mode = context.mode;
    const pipState = context.pipState;
    const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    const canShowPIP = context.canShowPIP;
    let obj = tmp(tmp[12]);
    const fn = function u() {
      return { mode: mode.get(), windowDimensions: tmp3, canShowPIP: canShowPIP.get() };
    };
    fn.__closure = { mode, windowDimensions: tmp3, canShowPIP };
    fn.__workletHash = 4412661953046;
    fn.__initData = tmp10;
    const fn2 = function p(mode, safeAreaState2) {
      let height;
      let width;
      let obj = mode(tmp[13]);
      let tmp;
      if (null != safeAreaState2) {
        tmp = safeAreaState2;
      }
      if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
        mode = mode.mode;
        if (canShowPIP.PIP === mode) {
          ({ width, height } = mode.canShowPIP ? {} : { aze: false, azj: true });
          obj = { width, height };
          safeAreaState2(tmp[14])(mode, obj);
          const tmp5 = mode.canShowPIP ? {} : { aze: false, azj: true };
        } else if (canShowPIP.DISMISSED === mode) {
          obj = { y: tmp2.height };
          safeAreaState2(tmp[14])(safeAreaState2, obj);
        }
      }
    };
    obj = { cheapWorkletShallowEqual: tmp(tmp[13]).cheapWorkletShallowEqual, MediaPlaybackPanelModes: canShowPIP, updateSharedValueIfChanged: tmp2(tmp[14]), wrapperDimensions, wrapperOffset };
    fn2.__closure = obj;
    fn2.__workletHash = 5458787116551;
    fn2.__initData = maskEmptyElevation;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
    let obj2 = tmp(tmp[12]);
    const sharedValue = obj2.useSharedValue(0);
    const sharedValue1 = tmp(tmp[12]).useSharedValue(0);
    const obj4 = tmp(tmp[12]);
    const sharedValue2 = tmp(tmp[12]).useSharedValue(0);
    const obj5 = tmp(tmp[12]);
    const sharedValue3 = tmp(tmp[12]).useSharedValue(false);
    const tmp10 = pipState((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    const obj6 = tmp(tmp[12]);
    class R {
      constructor() {
        obj = { mode: mode.get(), wrapperDimensions: wrapperDimensions.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), wrapperOffset: wrapperOffset.get(), windowDimensions: closure_4, safeArea: closure_3, pipState: pipState.get() };
        return obj;
      }
    }
    R.__closure = { mode, wrapperDimensions, pipAvoidanceSpecs, wrapperOffset, windowDimensions: tmp3, safeArea: tmp2, pipState };
    R.__workletHash = 4950432193502;
    R.__initData = maskEmptyElevation2;
    class C {
      constructor(arg0, arg1) {
        obj = wrapperDimensions(closure_2[13]);
        tmp = undefined;
        if (null != wrapperOffset) {
          tmp = wrapperOffset;
        }
        if (!obj.cheapWorkletShallowEqual(wrapperDimensions, tmp)) {
          ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = wrapperDimensions);
          ({ x, y } = pipState);
          tmp5 = canShowPIP;
          if (canShowPIP.PIP === mode) {
            tmp7 = wrapperDimensions;
            tmp8 = closure_2;
            num2 = 15;
            obj2 = wrapperDimensions(closure_2[15]);
            obj = {};
            obj.pipX = x;
            obj.pipY = y;
            num3 = 120;
            obj.width = 120;
            obj.height = 120;
            obj.windowDimensions = tmp3;
            tmp9 = closure_3;
            obj.safeArea = closure_3;
            ({ bottom: obj3.bottomAvoidanceRegion, top: obj3.topAvoidanceRegion } = pipAvoidanceSpecs);
            tmp10 = undefined;
            if (tmp4) {
              tmp10 = wrapperOffset;
            }
            obj.positionOffset = tmp10;
            tmp11 = closure_13;
            obj.disableHorizontalSafeAreas = closure_13;
            clampedPIPPosition = obj2.getClampedPIPPosition(obj);
            ({ x: x2, y: y2 } = clampedPIPPosition);
            tmp13 = closure_11;
            num4 = 1;
            result = closure_11.set(1);
          } else {
            tmp6 = canShowPIP;
            num = 0;
            x2 = 0;
            y2 = 0;
            if (canShowPIP.DISMISSED === mode) {
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
          tmp19 = canShowPIP;
          tmp20 = mode === canShowPIP.PIP && tmp17 && !wrapperOffset.gestureActive;
          tmp21 = closure_12;
          if (!tmp20) {
            tmp22 = canShowPIP;
            tmp20 = mode !== canShowPIP.PIP;
          }
          result2 = closure_12.set(tmp20);
          tmp24 = closure_9;
          result3 = closure_9.set(x2);
          tmp26 = closure_10;
          result4 = closure_10.set(y2);
        }
        return;
      }
    }
    obj = { cheapWorkletShallowEqual: tmp(tmp[13]).cheapWorkletShallowEqual, MediaPlaybackPanelModes: canShowPIP, getClampedPIPPosition: tmp(tmp[15]).getClampedPIPPosition, safeArea: tmp2, disableHorizontalSafeAreas: tmp10, wrapperOpacity: sharedValue2, animateWrapperTranslation: sharedValue3, wrapperTranslationX: sharedValue, wrapperTranslationY: sharedValue1 };
    C.__closure = obj;
    C.__workletHash = 10793489581273;
    C.__initData = animatedStyle;
    const animatedReaction1 = tmp(tmp[12]).useAnimatedReaction(R, C);
    if (mode.get() === canShowPIP.PIP) {
      if (sharedValue) {
        let maskEmptyElevation = tmp.maskElevation;
      }
      if (mode.get() === canShowPIP.PIP) {
        if (!sharedValue) {
          let maskEmptyElevation2 = tmp.maskElevation;
        }
        class L {
          constructor() {
            obj = wrapperDimensions(closure_2[16]);
            value = closure_11.get();
            obj = {};
            obj1 = {};
            withTimingResult = obj.withTiming(value, wrapperDimensions(closure_2[17]).timingFast, "respect-motion-settings");
            if (closure_12.get()) {
              tmp5 = wrapperDimensions;
              tmp6 = closure_2;
              num = 18;
              obj4 = wrapperDimensions(closure_2[18]);
              tmp7 = closure_9;
              tmp8 = pipAvoidanceSpecs;
              str = "animate-always";
              withSpringResult = obj4.withSpring(closure_9.get(), pipAvoidanceSpecs, "animate-always");
            } else {
              tmp3 = closure_9;
              withSpringResult = closure_9.get();
            }
            obj1.translateX = withSpringResult;
            items = [, ];
            items[0] = obj1;
            obj2 = {};
            if (closure_12.get()) {
              tmp11 = wrapperDimensions;
              tmp12 = closure_2;
              num2 = 18;
              obj6 = wrapperDimensions(closure_2[18]);
              tmp13 = closure_10;
              tmp16 = closure_12;
              value1 = closure_10.get();
              tmp15 = pipAvoidanceSpecs;
              str2 = "animate-never";
              if (closure_12.get()) {
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
            obj.width = wrapperDimensions.get().width;
            obj.height = wrapperDimensions.get().height;
            merged = Object.assign(maskElevation);
            return obj;
          }
        }
        const obj1 = { withTiming: tmp(tmp[16]).withTiming, wrapperOpacity: sharedValue2, timingFast: tmp(tmp[17]).timingFast, animateWrapperTranslation: sharedValue3, withSpring: tmp(tmp[18]).withSpring, wrapperTranslationX: sharedValue, MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: pipAvoidanceSpecs, wrapperTranslationY: sharedValue1, wrapperDimensions, wrapperElevationStyles: maskEmptyElevation };
        L.__closure = obj1;
        L.__workletHash = 11049335639852;
        L.__initData = xl;
        const animatedStyle = tmp(tmp[12]).useAnimatedStyle(L);
        const xl = tmp2(tmp[8]).radii.xl;
        const obj9 = tmp(tmp[12]);
        class B {
          constructor() {
            obj = {};
            obj2 = wrapperDimensions(closure_2[18]);
            obj.borderRadius = obj2.withSpring(xl, closure_10, "animate-always");
            merged = Object.assign(maskElevation);
            return obj;
          }
        }
        obj2 = { withSpring: tmp(tmp[18]).withSpring, borderRadius: xl, BORDER_RADIUS_PHYSICS: sharedValue1, maskElevationStyles: maskEmptyElevation2 };
        B.__closure = obj2;
        B.__workletHash = 7035830192327;
        B.__initData = animatedStyle1;
        const animatedStyle1 = tmp(tmp[12]).useAnimatedStyle(B);
        const items = [animatedStyle, , ];
        ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp);
        const items1 = [
          tmp3.useMemo(() => {
                const items = [animatedStyle, , ];
                ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp);
                return items;
              }, items),

        ];
        const items2 = [animatedStyle1, tmp.mask];
        items1[1] = tmp3.useMemo(() => {
          const items = [animatedStyle1, tmp.mask];
          return items;
        }, items2);
        return items1;
      }
      maskEmptyElevation2 = tmp.maskEmptyElevation;
    }
    maskEmptyElevation = tmp.maskEmptyElevation;
  }(wrapperDimensions, wrapperOffset), 2);
  let obj1 = arg1(dependencyMap[12]);
  const fn2 = function b() {
    return { backgroundColor: tmp.content.backgroundColor };
  };
  fn2.__closure = { styles: tmp };
  fn2.__workletHash = 8557652955267;
  fn2.__initData = closure_20;
  const animatedStyle1 = obj1.useAnimatedStyle(fn2);
  const context = React.useContext(importDefault(dependencyMap[11]));
  ({ wrapperOffset: wrapperOffset2, pipState } = context);
  obj = { panGestureEnabled: true };
  const tmp5 = callback(function useWrapperStyles(wrapperDimensions, wrapperOffset) {
    let tmp = wrapperDimensions;
    let tmp2 = wrapperOffset;
    tmp = sharedValue3();
    tmp2 = tmp2(tmp[9])();
    const tmp3 = tmp2(tmp[10])();
    const context = tmp3.useContext(tmp2(tmp[11]));
    const mode = context.mode;
    const pipState = context.pipState;
    const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    const canShowPIP = context.canShowPIP;
    let obj = tmp(tmp[12]);
    const fn = function u() {
      return { mode: mode.get(), windowDimensions: tmp3, canShowPIP: canShowPIP.get() };
    };
    fn.__closure = { mode, windowDimensions: tmp3, canShowPIP };
    fn.__workletHash = 4412661953046;
    fn.__initData = tmp10;
    const fn2 = function p(mode, safeAreaState2) {
      let height;
      let width;
      let obj = mode(tmp[13]);
      let tmp;
      if (null != safeAreaState2) {
        tmp = safeAreaState2;
      }
      if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
        mode = mode.mode;
        if (canShowPIP.PIP === mode) {
          ({ width, height } = mode.canShowPIP ? {} : { aze: false, azj: true });
          obj = { width, height };
          safeAreaState2(tmp[14])(mode, obj);
          const tmp5 = mode.canShowPIP ? {} : { aze: false, azj: true };
        } else if (canShowPIP.DISMISSED === mode) {
          obj = { y: tmp2.height };
          safeAreaState2(tmp[14])(safeAreaState2, obj);
        }
      }
    };
    obj = { cheapWorkletShallowEqual: tmp(tmp[13]).cheapWorkletShallowEqual, MediaPlaybackPanelModes: canShowPIP, updateSharedValueIfChanged: tmp2(tmp[14]), wrapperDimensions, wrapperOffset };
    fn2.__closure = obj;
    fn2.__workletHash = 5458787116551;
    fn2.__initData = maskEmptyElevation;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
    let obj2 = tmp(tmp[12]);
    const sharedValue = obj2.useSharedValue(0);
    const sharedValue1 = tmp(tmp[12]).useSharedValue(0);
    const obj4 = tmp(tmp[12]);
    const sharedValue2 = tmp(tmp[12]).useSharedValue(0);
    const obj5 = tmp(tmp[12]);
    const sharedValue3 = tmp(tmp[12]).useSharedValue(false);
    const tmp10 = pipState((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    const obj6 = tmp(tmp[12]);
    class R {
      constructor() {
        obj = { mode: mode.get(), wrapperDimensions: wrapperDimensions.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), wrapperOffset: wrapperOffset.get(), windowDimensions: closure_4, safeArea: closure_3, pipState: pipState.get() };
        return obj;
      }
    }
    R.__closure = { mode, wrapperDimensions, pipAvoidanceSpecs, wrapperOffset, windowDimensions: tmp3, safeArea: tmp2, pipState };
    R.__workletHash = 4950432193502;
    R.__initData = maskEmptyElevation2;
    class C {
      constructor(arg0, arg1) {
        obj = wrapperDimensions(closure_2[13]);
        tmp = undefined;
        if (null != wrapperOffset) {
          tmp = wrapperOffset;
        }
        if (!obj.cheapWorkletShallowEqual(wrapperDimensions, tmp)) {
          ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = wrapperDimensions);
          ({ x, y } = pipState);
          tmp5 = canShowPIP;
          if (canShowPIP.PIP === mode) {
            tmp7 = wrapperDimensions;
            tmp8 = closure_2;
            num2 = 15;
            obj2 = wrapperDimensions(closure_2[15]);
            obj = {};
            obj.pipX = x;
            obj.pipY = y;
            num3 = 120;
            obj.width = 120;
            obj.height = 120;
            obj.windowDimensions = tmp3;
            tmp9 = closure_3;
            obj.safeArea = closure_3;
            ({ bottom: obj3.bottomAvoidanceRegion, top: obj3.topAvoidanceRegion } = pipAvoidanceSpecs);
            tmp10 = undefined;
            if (tmp4) {
              tmp10 = wrapperOffset;
            }
            obj.positionOffset = tmp10;
            tmp11 = closure_13;
            obj.disableHorizontalSafeAreas = closure_13;
            clampedPIPPosition = obj2.getClampedPIPPosition(obj);
            ({ x: x2, y: y2 } = clampedPIPPosition);
            tmp13 = closure_11;
            num4 = 1;
            result = closure_11.set(1);
          } else {
            tmp6 = canShowPIP;
            num = 0;
            x2 = 0;
            y2 = 0;
            if (canShowPIP.DISMISSED === mode) {
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
          tmp19 = canShowPIP;
          tmp20 = mode === canShowPIP.PIP && tmp17 && !wrapperOffset.gestureActive;
          tmp21 = closure_12;
          if (!tmp20) {
            tmp22 = canShowPIP;
            tmp20 = mode !== canShowPIP.PIP;
          }
          result2 = closure_12.set(tmp20);
          tmp24 = closure_9;
          result3 = closure_9.set(x2);
          tmp26 = closure_10;
          result4 = closure_10.set(y2);
        }
        return;
      }
    }
    obj = { cheapWorkletShallowEqual: tmp(tmp[13]).cheapWorkletShallowEqual, MediaPlaybackPanelModes: canShowPIP, getClampedPIPPosition: tmp(tmp[15]).getClampedPIPPosition, safeArea: tmp2, disableHorizontalSafeAreas: tmp10, wrapperOpacity: sharedValue2, animateWrapperTranslation: sharedValue3, wrapperTranslationX: sharedValue, wrapperTranslationY: sharedValue1 };
    C.__closure = obj;
    C.__workletHash = 10793489581273;
    C.__initData = animatedStyle;
    const animatedReaction1 = tmp(tmp[12]).useAnimatedReaction(R, C);
    if (mode.get() === canShowPIP.PIP) {
      if (sharedValue) {
        let maskEmptyElevation = tmp.maskElevation;
      }
      if (mode.get() === canShowPIP.PIP) {
        if (!sharedValue) {
          let maskEmptyElevation2 = tmp.maskElevation;
        }
        class L {
          constructor() {
            obj = wrapperDimensions(closure_2[16]);
            value = closure_11.get();
            obj = {};
            obj1 = {};
            withTimingResult = obj.withTiming(value, wrapperDimensions(closure_2[17]).timingFast, "respect-motion-settings");
            if (closure_12.get()) {
              tmp5 = wrapperDimensions;
              tmp6 = closure_2;
              num = 18;
              obj4 = wrapperDimensions(closure_2[18]);
              tmp7 = closure_9;
              tmp8 = pipAvoidanceSpecs;
              str = "animate-always";
              withSpringResult = obj4.withSpring(closure_9.get(), pipAvoidanceSpecs, "animate-always");
            } else {
              tmp3 = closure_9;
              withSpringResult = closure_9.get();
            }
            obj1.translateX = withSpringResult;
            items = [, ];
            items[0] = obj1;
            obj2 = {};
            if (closure_12.get()) {
              tmp11 = wrapperDimensions;
              tmp12 = closure_2;
              num2 = 18;
              obj6 = wrapperDimensions(closure_2[18]);
              tmp13 = closure_10;
              tmp16 = closure_12;
              value1 = closure_10.get();
              tmp15 = pipAvoidanceSpecs;
              str2 = "animate-never";
              if (closure_12.get()) {
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
            obj.width = wrapperDimensions.get().width;
            obj.height = wrapperDimensions.get().height;
            merged = Object.assign(maskElevation);
            return obj;
          }
        }
        const obj1 = { withTiming: tmp(tmp[16]).withTiming, wrapperOpacity: sharedValue2, timingFast: tmp(tmp[17]).timingFast, animateWrapperTranslation: sharedValue3, withSpring: tmp(tmp[18]).withSpring, wrapperTranslationX: sharedValue, MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: pipAvoidanceSpecs, wrapperTranslationY: sharedValue1, wrapperDimensions, wrapperElevationStyles: maskEmptyElevation };
        L.__closure = obj1;
        L.__workletHash = 11049335639852;
        L.__initData = xl;
        const animatedStyle = tmp(tmp[12]).useAnimatedStyle(L);
        const xl = tmp2(tmp[8]).radii.xl;
        const obj9 = tmp(tmp[12]);
        class B {
          constructor() {
            obj = {};
            obj2 = wrapperDimensions(closure_2[18]);
            obj.borderRadius = obj2.withSpring(xl, closure_10, "animate-always");
            merged = Object.assign(maskElevation);
            return obj;
          }
        }
        obj2 = { withSpring: tmp(tmp[18]).withSpring, borderRadius: xl, BORDER_RADIUS_PHYSICS: sharedValue1, maskElevationStyles: maskEmptyElevation2 };
        B.__closure = obj2;
        B.__workletHash = 7035830192327;
        B.__initData = animatedStyle1;
        const animatedStyle1 = tmp(tmp[12]).useAnimatedStyle(B);
        const items = [animatedStyle, , ];
        ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp);
        const items1 = [
          tmp3.useMemo(() => {
                const items = [animatedStyle, , ];
                ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp);
                return items;
              }, items),

        ];
        const items2 = [animatedStyle1, tmp.mask];
        items1[1] = tmp3.useMemo(() => {
          const items = [animatedStyle1, tmp.mask];
          return items;
        }, items2);
        return items1;
      }
      maskEmptyElevation2 = tmp.maskEmptyElevation;
    }
    maskEmptyElevation = tmp.maskEmptyElevation;
  }(wrapperDimensions, wrapperOffset), 2);
  obj.mode = arg1(dependencyMap[19]).MorphablePanelModes.PIP;
  obj.pipState = pipState;
  obj.wrapperOffset = wrapperOffset2;
  const tmp10 = importDefault(dependencyMap[19]);
  obj = {};
  obj1 = { style: animatedStyle, pointerEvents: "box-none" };
  const obj2 = { style: tmp6 };
  const obj3 = { style: tmp7 };
  const obj4 = { gesture: importDefault(dependencyMap[19])(obj) };
  const obj5 = { style: items };
  const items = [tmp.content, animatedStyle1];
  obj5.children = jsx(importDefault(dependencyMap[22]), {});
  obj4.children = jsx(importDefault(dependencyMap[12]).View, obj5);
  obj3.children = jsx(arg1(dependencyMap[21]).GestureDetector, obj4);
  obj2.children = jsx(importDefault(dependencyMap[12]).View, obj3);
  obj1.children = jsx(importDefault(dependencyMap[12]).View, obj2);
  obj.children = jsx(importDefault(dependencyMap[12]).View, obj1);
  return jsx(arg1(dependencyMap[20]).LayerScope, obj);
};
