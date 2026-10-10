// Module ID: 13074
// Function ID: 13075
// Name: MediaViewer
// Dependencies: [32, 19, 17, 21, 1382, 558, 576, 4850, 13075, 13076, 8394, 6760, 6334, 6851, 6878, 8419, 13080, 5372, 5093, 8389, 8450, 10360, 4851, 10829, 2]

// Module 13074 (MediaViewer)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import timing from "timing" /* 5093 */;
import useVideoControls from "useVideoControls" /* 8389 */;
import MediaViewerItem2 from "MediaViewerItem" /* 13076 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const MediaViewerDimensionsContext = tmp(8419);
function MediaViewer(arg0) {
  let closure_2;
  let height;
  let index;
  let items6;
  let items7;
  let onClose;
  let onContentSizeChange;
  let onLongPress;
  let onScroll;
  let originLayout;
  let ref;
  let ref2;
  let renderMedia;
  let renderOverlay;
  let setShowHeader;
  let sources;
  let str;
  let swipeVelocityThreshold;
  let syncer;
  let tmp5;
  let tmp6;
  let useItemVisible;
  let useViewerProps;
  let width;
  let zoomed;
  ({ onClose, syncer } = arg0);
  ({ index, sources } = syncer);
  height = undefined;
  let sharedValue;
  let sharedValue1;
  __initData2 = undefined;
  ({ onLongPress, originLayout, renderMedia, renderOverlay, swipeVelocityThreshold } = arg0);
  ({ useViewerProps, zoomed } = syncer);
  let tmp = height;
  let tmp3 = height(6851);
  let items = [height(6878).MEDIA_VIEWER];
  const analyticsLocations = tmp3(items).analyticsLocations;
  const tmp4 = sharedValue(sharedValue1.useState(true), 2);
  [tmp5, tmp6] = tmp4;
  _require = tmp6;
  let obj = require("MediaViewerDimensionsContext");
  const mediaViewerDimensions = obj.useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const tmp9 = height(13080)({ index, onClose, sources, windowHeight: height, windowWidth: width });
  dependencyMap = tmp9;
  let obj2 = require("ReanimatedRexport");
  sharedValue = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  sharedValue1 = obj3.useSharedValue(false);
  const obj4 = require("ReanimatedRexport");
  const animatedRef = obj4.useAnimatedRef();
  let closure_6 = tmp13;
  const viewerProps = useViewerProps();
  ({ ref, onScroll, onContentSizeChange, useItemVisible } = viewerProps);
  const obj5 = require("useMediaViewerPanGesture");
  const mediaViewerPanGestureConfig = obj5.useMediaViewerPanGestureConfig(tmp9, swipeVelocityThreshold, onClose);
  const dismiss = mediaViewerPanGestureConfig.dismiss;
  const translatePos = mediaViewerPanGestureConfig.translatePos;
  const isClosing = mediaViewerPanGestureConfig.isClosing;
  const isInteracting = mediaViewerPanGestureConfig.isInteracting;
  const overlayEnabled = mediaViewerPanGestureConfig.overlayEnabled;
  const items1 = [dismiss, isClosing];
  const tmp16 = height(5372);
  tmp16(sharedValue1.useCallback(() => {
    if (!isClosing.get()) {
      dismiss();
    }
    return true;
  }, items1));
  const absoluteFillObject = closure_6.absoluteFillObject;
  function ee() {
    let items;
    let min;
    let obj2;
    let value;
    const obj = { height, backgroundColor: "black", opacity: min(value, obj2.interpolate(translatePos.get(), items, [0, 1, 0])) };
    const merged = Object.assign(absoluteFillObject);
    min = Math.min;
    value = sharedValue.get();
    items = [-closure_2, 0, closure_2];
    obj2 = ReanimatedRexport;
    return obj;
  }
  const obj6 = require("ReanimatedRexport");
  ee.__closure = { absoluteFillObject, windowHeight: height, entranceAnimationDriver: sharedValue, interpolate: require("ReanimatedRexport").interpolate, translatePos, closePosition: tmp9 };
  ee.__workletHash = 5943145829824;
  ee.__initData = __initData2;
  const obj8 = { backgroundColor: "transparent" };
  ({ absoluteFillObject, windowHeight: height, entranceAnimationDriver: sharedValue, interpolate: require("ReanimatedRexport").interpolate, translatePos, closePosition: tmp9 });
  const animatedStyle = obj6.useAnimatedStyle(ee);
  const useState = sharedValue1.useState;
  let merged = Object.assign(closure_6.absoluteFillObject);
  const first = sharedValue(useState(obj8), 1)[0];
  function ne() {
    let opacity = 0;
    if (!isClosing.get()) {
      opacity = 0;
      if (!sharedValue1.get()) {
        if (overlayEnabled.get()) {
          let withTimingResult;
          if (!isInteracting.get()) {
            let obj = { easing: ReanimatedRexport.Easing.linear, duration: 150 };
            const withTiming = timing.withTiming;
            timing;
            withTimingResult = withTiming(1, obj);
          }
          opacity = withTimingResult;
        }
        const tmp12 = timing;
        const withTiming2 = tmp12.withTiming;
        const fn = function n() {
          const obj = c0(closure_2[7]);
          obj.runOnJS(setShowHeader)(false);
        };
        const obj2 = { easing: ReanimatedRexport.Easing.linear, duration: 75 };
        fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShowHeader };
        fn.__workletHash = 15904527555202;
        fn.__initData = __initData;
        const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setShowHeader };
        withTimingResult = withTiming2(0, obj2, "respect-motion-settings", fn);
      }
    }
    return { opacity };
  }
  const obj9 = require("ReanimatedRexport");
  ne.__closure = { isClosing, hideRelayoutSharedValue: sharedValue1, overlayEnabled, isInteracting, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  ne.__workletHash = 6649973616396;
  ne.__initData = __initData3;
  ({ isClosing, hideRelayoutSharedValue: sharedValue1, overlayEnabled, isInteracting, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 });
  const animatedStyle1 = obj9.useAnimatedStyle(ne);
  function te() {
    const value = overlayEnabled.get() && !isInteracting.get();
    if (value) {
      const obj = ReanimatedRexport;
      obj.runOnJS(c0)(true);
    }
  }
  const obj11 = require("ReanimatedRexport");
  te.__closure = { overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  te.__workletHash = 1909187618991;
  te.__initData = __initData4;
  ({ overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 });
  const derivedValue = obj11.useDerivedValue(te);
  function le() {
    let items;
    let num;
    const obj = { alignItems: "center", justifyContent: "center", transform: items, opacity: num };
    const merged = Object.assign(absoluteFillObject);
    items = [{ translateY: translatePos.get() }];
    num = 0;
    ({ translateY: translatePos.get() });
    if (!sharedValue1.get()) {
      const obj3 = { easing: ReanimatedRexport.Easing.linear, duration: 75 };
      const withTiming = timing.withTiming;
      timing;
      num = withTiming(1, obj3);
    }
    return obj;
  }
  const obj13 = require("ReanimatedRexport");
  le.__closure = { absoluteFillObject, translatePos, hideRelayoutSharedValue: sharedValue1, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  le.__workletHash = 3255262686776;
  le.__initData = __initData5;
  ({ absoluteFillObject, translatePos, hideRelayoutSharedValue: sharedValue1, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing });
  const animatedStyle2 = obj13.useAnimatedStyle(le);
  ref = sharedValue1.useRef(null);
  const items2 = [tmp13, animatedRef, sharedValue1];
  const callback = sharedValue1.useCallback(() => {
    const tmp = closure_6 && null != animatedRef.current;
    if (tmp) {
      let result = sharedValue1.set(true);
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        const result = sharedValue1.set(false);
      }, 250);
    }
  }, items2);
  const items3 = [sharedValue1];
  const callback1 = sharedValue1.useCallback(() => {
    const result = sharedValue1.set(false);
  }, items3);
  __initData2 = sharedValue1.useRef(false);
  const items4 = [width, height, callback];
  const effect = sharedValue1.useEffect(() => {
    if (ref2.current) {
      callback();
    } else {
      tmp.current = true;
    }
  }, items4);
  const items5 = [callback];
  const callback2 = sharedValue1.useCallback((orientation, orientation2) => {
    if (orientation.orientation !== orientation2.orientation) {
      callback();
    }
    const tmp3 = closure_9;
    if (tmp3) {
      const obj = useVideoControls;
      const result = obj.unpauseCurrentVideoIfNeeded();
    }
  }, items5);
  const obj15 = require("DeviceOrientation");
  const orientationListener = obj15.useOrientationListener(callback2);
  const obj16 = { style: closure_6.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1, children: items6 };
  items6 = [, , , , ];
  const obj17 = { barStyle: "light-content", hidden: !tmp5 };
  const tmp30 = dismiss(callback, { entranceAnimationDriver: sharedValue, onContentSizeChange, onScroll, onLongPress, originLayout, panGestureConfig: mediaViewerPanGestureConfig, ref, renderMedia, sources, useItemVisible, windowHeight: height, windowWidth: width, index, zoomed });
  items6[0] = dismiss(height(10360), obj17);
  items6[1] = dismiss(height(4850).View, { style: animatedStyle });
  items6[2] = dismiss(height(4851), { ref: animatedRef, style: animatedStyle2, children: tmp30 });
  const obj18 = { style: items7, pointerEvents: str, children: renderOverlay(dismiss, overlayEnabled) };
  items7 = [first, animatedStyle1];
  str = "none";
  const tmp31 = translatePos;
  const tmp32 = animatedRef;
  const tmp33 = height(4851);
  const tmp7 = _require;
  if (tmp5) {
    str = "box-none";
  }
  items6[3] = dismiss(tmp33, obj18);
  items6[4] = dismiss(tmp(10829), {});
  const children = tmp31(tmp32, obj16);
  return dismiss(tmp7(6851).AnalyticsLocationProvider, { value: analyticsLocations, children });
}
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = PlatformUtils.isAndroid();
let closure_10 = { code: "function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}" };
let closure_11 = { code: "function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
let closure_12 = { code: "function MediaViewerTsx3(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}" };
const __initData = { code: "function MediaViewerTsx4(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaViewer(entranceAnimationDriver) {
  let onContentSizeChange;
  let onLongPress;
  let onScroll;
  let originLayout;
  let ref;
  let zoomed;
  let tmp2 = originLayout;
  let obj = entranceAnimationDriver(originLayout[6]);
  const cResult = obj.c(32);
  const tmp = entranceAnimationDriver;
  entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
  ({ onContentSizeChange, onLongPress } = entranceAnimationDriver);
  ({ onScroll, originLayout } = entranceAnimationDriver);
  const panGestureConfig = entranceAnimationDriver.panGestureConfig;
  const renderMedia = entranceAnimationDriver.renderMedia;
  const sources = entranceAnimationDriver.sources;
  const useItemVisible = entranceAnimationDriver.useItemVisible;
  const windowWidth = entranceAnimationDriver.windowWidth;
  const windowHeight = entranceAnimationDriver.windowHeight;
  ({ ref, zoomed } = entranceAnimationDriver);
  const obj2 = entranceAnimationDriver(originLayout[7]);
  const sharedValue = obj2.useSharedValue(false);
  const fn = function t() {
    const value = zoomed.get();
    const tmp2 = !value && !sharedValue.get();
    return tmp2;
  };
  fn.__closure = { zoomed, pinching: sharedValue };
  fn.__workletHash = 9157951736691;
  fn.__initData = sharedValue;
  const obj3 = entranceAnimationDriver(originLayout[7]);
  const derivedValue = obj3.useDerivedValue(fn);
  if (cResult[0] !== sharedValue) {
    const fn2 = function o(nativeEvent) {
      return sharedValue.set(2 === nativeEvent.nativeEvent.touches.length);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn2;
  }
  if (cResult[2] !== sharedValue) {
    class D {
      constructor() {
        return sharedValue.set(false);
      }
    }
    cResult[2] = sharedValue;
    cResult[3] = D;
  } else {
    class D {
      constructor() {
        return sharedValue.set(false);
      }
    }
  }
  const tmpResult = tmp(tmp2[8]);
  const mediaViewerPanGesture = tmpResult.useMediaViewerPanGesture(panGestureConfig, derivedValue);
  const panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
  if (cResult[4] === entranceAnimationDriver) {
    class D {
      constructor() {
        return sharedValue.set(false);
      }
    }
  }
  const fn3 = function z(arg0, index) {
    const obj = { originLayout, renderMedia, onLongPress, windowWidth, windowHeight, panGestureConfig, entranceAnimationDriver, source: sources[index], index, zoomed, panGesture: panGestureGenerator(index), useItemVisible };
    const MediaViewerItem = MediaViewerItem2.MediaViewerItem;
    return metroImportDefault(MediaViewerItem, obj);
  };
  cResult[4] = entranceAnimationDriver;
  cResult[5] = onLongPress;
  cResult[6] = originLayout;
  cResult[7] = panGestureConfig;
  cResult[8] = panGestureGenerator;
  cResult[9] = renderMedia;
  cResult[10] = sources;
  cResult[11] = useItemVisible;
  cResult[12] = windowHeight;
  cResult[13] = windowWidth;
  cResult[14] = zoomed;
  cResult[15] = fn3;
}) : (function MediaViewer(entranceAnimationDriver) {
  let index;
  let items3;
  let obj6;
  let onContentSizeChange;
  let onScroll;
  let ref;
  entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
  const onLongPress = entranceAnimationDriver.onLongPress;
  const originLayout = entranceAnimationDriver.originLayout;
  const panGestureConfig = entranceAnimationDriver.panGestureConfig;
  const renderMedia = entranceAnimationDriver.renderMedia;
  const sources = entranceAnimationDriver.sources;
  const useItemVisible = entranceAnimationDriver.useItemVisible;
  const windowWidth = entranceAnimationDriver.windowWidth;
  const windowHeight = entranceAnimationDriver.windowHeight;
  const zoomed = entranceAnimationDriver.zoomed;
  let derivedValue;
  let panGestureGenerator;
  ({ onContentSizeChange, onScroll, ref, index } = entranceAnimationDriver);
  let obj = entranceAnimationDriver(originLayout[7]);
  const sharedValue = obj.useSharedValue(false);
  const obj2 = entranceAnimationDriver(originLayout[7]);
  class M {
    constructor() {
      const value = zoomed.get();
      const tmp2 = !value && !sharedValue.get();
      return tmp2;
    }
  }
  M.__closure = { zoomed, pinching: sharedValue };
  M.__workletHash = 1775226328369;
  M.__initData = panGestureGenerator;
  derivedValue = obj2.useDerivedValue(M);
  const items = [sharedValue];
  const items1 = [sharedValue];
  const callback = renderMedia.useCallback((nativeEvent) => sharedValue.set(2 === nativeEvent.nativeEvent.touches.length), items);
  const callback1 = renderMedia.useCallback(() => sharedValue.set(false), items1);
  const obj3 = entranceAnimationDriver(originLayout[8]);
  const mediaViewerPanGesture = obj3.useMediaViewerPanGesture(panGestureConfig, derivedValue);
  panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
  const items2 = [entranceAnimationDriver, onLongPress, originLayout, panGestureConfig, panGestureGenerator, renderMedia, sources, useItemVisible, windowHeight, windowWidth, zoomed];
  const nativeGesture = mediaViewerPanGesture.nativeGesture;
  const callback2 = renderMedia.useCallback((arg0, index) => {
    const obj = { originLayout, renderMedia, onLongPress, windowWidth, windowHeight, panGestureConfig, entranceAnimationDriver, source: sources[index], index, zoomed, panGesture: panGestureGenerator(index), useItemVisible };
    const MediaViewerItem = MediaViewerItem2.MediaViewerItem;
    return metroImportDefault(MediaViewerItem, obj);
  }, items2);
  const obj4 = entranceAnimationDriver(originLayout[7]);
  class T {
    constructor() {
      const obj = { scrollEnabled: derivedValue.get() };
      return obj;
    }
  }
  T.__closure = { scrollEnabled: derivedValue };
  T.__workletHash = 14892821132407;
  T.__initData = __initData;
  const animatedProps = obj4.useAnimatedProps(T);
  const obj5 = { gesture: nativeGesture, children: windowWidth(entranceAnimationDriver(originLayout[11]).AnimatedFastList, obj6) };
  const tmp8 = onLongPress(originLayout[10])(index);
  const GestureDetector = entranceAnimationDriver(originLayout[12]).GestureDetector;
  obj6 = { ref, style: useItemVisible.absoluteFill, sections: items3, onTouchStart: callback, onTouchEnd: callback1, onTouchCancel: callback1, initialScrollItem: tmp8, automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, itemSize: windowWidth, renderItem: callback2, onContentSizeChange, pagingEnabled: true, onScroll, scrollEventThrottle: 16, animatedProps, disableLegacyGestureHandling: true, chunkBase: windowWidth, horizontal: true };
  items3 = [sources.length];
  return windowWidth(GestureDetector, obj5);
}));
let __initData2 = { code: "function MediaViewerTsx5(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}" };
const __initData3 = { code: "function MediaViewerTsx6(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}" };
let closure_17 = { code: "function MediaViewerTsx7(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}" };
const __initData4 = { code: "function MediaViewerTsx8(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}" };
const __initData5 = { code: "function MediaViewerTsx9(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}" };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaViewerWithProvider(arg0) {
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = { children: metroImportDefault(MediaViewer, obj3) };
    obj3 = {};
    const MediaViewerDimensionsProvider = MediaViewerDimensionsContext.MediaViewerDimensionsProvider;
    const merged = Object.assign(arg0);
    const tmp10 = metroImportDefault(MediaViewerDimensionsProvider, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp10;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function MediaViewerWithProvider(arg0) {
  let obj2;
  const obj = { children: metroImportDefault(MediaViewer, obj2) };
  obj2 = {};
  const MediaViewerDimensionsProvider = MediaViewerDimensionsContext.MediaViewerDimensionsProvider;
  const merged = Object.assign(arg0);
  return metroImportDefault(MediaViewerDimensionsProvider, obj);
}));
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewer.tsx");

export default memo2Result;
