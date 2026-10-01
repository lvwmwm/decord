// Module ID: 12536
// Function ID: 12537
// Name: MediaViewer
// Dependencies: [32, 19, 17, 21, 1364, 4566, 12537, 12538, 7715, 6073, 6493, 6583, 6603, 7741, 12542, 4837, 7710, 7780, 8839, 4567, 8841, 2]

// Module 12536 (MediaViewer)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import useVideoControls from "useVideoControls" /* 7710 */;
import MediaViewerDimensionsContext from "MediaViewerDimensionsContext" /* 7741 */;
import MediaViewerItem2 from "MediaViewerItem" /* 12538 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function MediaViewer(arg0) {
  let closure_2;
  let dismiss;
  let height;
  let index;
  let items5;
  let items6;
  let onClose;
  let onContentSizeChange;
  let onLongPress;
  let onScroll;
  let originLayout;
  let ref;
  let ref2;
  let renderMedia;
  let renderOverlay;
  let sources;
  let str;
  let swipeVelocityThreshold;
  let syncer;
  let tmp5;
  let tmp6;
  let translatePos;
  let useItemVisible;
  let useViewerProps;
  let width;
  let zoomed;
  ({ onClose, syncer } = arg0);
  ({ index, sources } = syncer);
  height = undefined;
  let sharedValue;
  let sharedValue1;
  translatePos = undefined;
  ref = undefined;
  __initData = undefined;
  ({ onLongPress, originLayout, renderMedia, renderOverlay, swipeVelocityThreshold } = arg0);
  ({ useViewerProps, zoomed } = syncer);
  let tmp = height;
  let tmp3 = height(6583);
  let items = [height(6603).MEDIA_VIEWER];
  const analyticsLocations = tmp3(items).analyticsLocations;
  const tmp4 = sharedValue(sharedValue1.useState(true), 2);
  [tmp5, tmp6] = tmp4;
  const _require = tmp6;
  let obj = require("MediaViewerDimensionsContext");
  const mediaViewerDimensions = obj.useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const tmp9 = height(12542)({ index, onClose, sources, windowHeight: height, windowWidth: width });
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
  ({ dismiss, translatePos } = mediaViewerPanGestureConfig);
  const isClosing = mediaViewerPanGestureConfig.isClosing;
  const isInteracting = mediaViewerPanGestureConfig.isInteracting;
  const overlayEnabled = mediaViewerPanGestureConfig.overlayEnabled;
  const absoluteFillObject = closure_6.absoluteFillObject;
  const obj6 = require("ReanimatedRexport");
  const tmp7 = _require;
  class M {
    constructor() {
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
  }
  M.__closure = { absoluteFillObject, windowHeight: height, entranceAnimationDriver: sharedValue, interpolate: require("ReanimatedRexport").interpolate, translatePos, closePosition: tmp9 };
  M.__workletHash = 10332062530694;
  M.__initData = __initData;
  const obj8 = { backgroundColor: "transparent" };
  ({ absoluteFillObject, windowHeight: height, entranceAnimationDriver: sharedValue, interpolate: require("ReanimatedRexport").interpolate, translatePos, closePosition: tmp9 });
  const animatedStyle = obj6.useAnimatedStyle(M);
  const useState = sharedValue1.useState;
  let merged = Object.assign(closure_6.absoluteFillObject);
  const first = sharedValue(useState(obj8), 1)[0];
  const obj9 = require("ReanimatedRexport");
  class P {
    constructor() {
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
            const obj = c0(closure_2[5]);
            obj.runOnJS(setShowHeader)(false);
          };
          const obj2 = { easing: ReanimatedRexport.Easing.linear, duration: 75 };
          fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShowHeader };
          fn.__workletHash = 11572173694016;
          fn.__initData = __initData;
          const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setShowHeader };
          withTimingResult = withTiming2(0, obj2, "respect-motion-settings", fn);
        }
      }
      return { opacity };
    }
  }
  P.__closure = { isClosing, hideRelayoutSharedValue: sharedValue1, overlayEnabled, isInteracting, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  P.__workletHash = 14874736878670;
  P.__initData = __initData;
  ({ isClosing, hideRelayoutSharedValue: sharedValue1, overlayEnabled, isInteracting, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 });
  const animatedStyle1 = obj9.useAnimatedStyle(P);
  let fn = function x() {
    const value = overlayEnabled.get() && !isInteracting.get();
    if (value) {
      const obj = ReanimatedRexport;
      obj.runOnJS(c0)(true);
    }
  };
  const obj11 = require("ReanimatedRexport");
  fn.__closure = { overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  fn.__workletHash = 2199049578465;
  fn.__initData = __initData3;
  ({ overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 });
  const derivedValue = obj11.useDerivedValue(fn);
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
  le.__workletHash = 8244409104374;
  le.__initData = __initData4;
  ({ absoluteFillObject, translatePos, hideRelayoutSharedValue: sharedValue1, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing });
  const animatedStyle2 = obj13.useAnimatedStyle(le);
  ref = sharedValue1.useRef(null);
  const items1 = [tmp13, animatedRef, sharedValue1];
  sharedValue1.useCallback(() => {
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
  }, items1);
  const items2 = [sharedValue1];
  const callback1 = sharedValue1.useCallback(() => {
    const result = sharedValue1.set(false);
  }, items2);
  __initData = sharedValue1.useRef(false);
  const items3 = [width, height, __initData];
  const effect = sharedValue1.useEffect(() => {
    if (ref2.current) {
      callback();
    } else {
      tmp.current = true;
    }
  }, items3);
  const items4 = [__initData];
  const callback2 = sharedValue1.useCallback((orientation, orientation2) => {
    if (orientation.orientation !== orientation2.orientation) {
      callback();
    }
    const tmp3 = closure_9;
    if (tmp3) {
      const obj = useVideoControls;
      const result = obj.unpauseCurrentVideoIfNeeded();
    }
  }, items4);
  const obj15 = require("DeviceOrientation");
  const orientationListener = obj15.useOrientationListener(callback2);
  const obj16 = { style: closure_6.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1, children: items5 };
  items5 = [, , , , ];
  const obj17 = { barStyle: "light-content", hidden: !tmp5 };
  const tmp28 = translatePos(ref, { entranceAnimationDriver: sharedValue, onContentSizeChange, onScroll, onLongPress, originLayout, panGestureConfig: mediaViewerPanGestureConfig, ref, renderMedia, sources, useItemVisible, windowHeight: height, windowWidth: width, index, zoomed });
  items5[0] = translatePos(height(8839), obj17);
  items5[1] = translatePos(height(4566).View, { style: animatedStyle });
  items5[2] = translatePos(height(4567), { ref: animatedRef, style: animatedStyle2, children: tmp28 });
  const obj18 = { style: items6, pointerEvents: str, children: renderOverlay(dismiss, overlayEnabled) };
  items6 = [first, animatedStyle1];
  str = "none";
  const tmp29 = isClosing;
  const tmp30 = animatedRef;
  const tmp31 = height(4567);
  if (tmp5) {
    str = "box-none";
  }
  items5[3] = translatePos(tmp31, obj18);
  items5[4] = translatePos(tmp(8841), {});
  const children = tmp29(tmp30, obj16);
  return translatePos(tmp7(6583).AnalyticsLocationProvider, { value: analyticsLocations, children });
}
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = PlatformUtils.isAndroid();
let closure_10 = { code: "function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}" };
let closure_11 = { code: "function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
let closure_12 = react.memo((entranceAnimationDriver) => {
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
  let obj = entranceAnimationDriver(originLayout[5]);
  const sharedValue = obj.useSharedValue(false);
  const obj2 = entranceAnimationDriver(originLayout[5]);
  class T {
    constructor() {
      const value = zoomed.get();
      const tmp2 = !value && !sharedValue.get();
      return tmp2;
    }
  }
  T.__closure = { zoomed, pinching: sharedValue };
  T.__workletHash = 9157951736691;
  T.__initData = sharedValue;
  derivedValue = obj2.useDerivedValue(T);
  const items = [sharedValue];
  const items1 = [sharedValue];
  const callback = renderMedia.useCallback((nativeEvent) => sharedValue.set(2 === nativeEvent.nativeEvent.touches.length), items);
  const callback1 = renderMedia.useCallback(() => sharedValue.set(false), items1);
  const obj3 = entranceAnimationDriver(originLayout[6]);
  const mediaViewerPanGesture = obj3.useMediaViewerPanGesture(panGestureConfig, derivedValue);
  panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
  const items2 = [entranceAnimationDriver, onLongPress, originLayout, panGestureConfig, panGestureGenerator, renderMedia, sources, useItemVisible, windowHeight, windowWidth, zoomed];
  const nativeGesture = mediaViewerPanGesture.nativeGesture;
  const callback2 = renderMedia.useCallback((arg0, index) => {
    const obj = { originLayout, renderMedia, onLongPress, windowWidth, windowHeight, panGestureConfig, entranceAnimationDriver, source: sources[index], index, zoomed, panGesture: panGestureGenerator(index), useItemVisible };
    const MediaViewerItem = MediaViewerItem2.MediaViewerItem;
    return metroImportDefault(MediaViewerItem, obj);
  }, items2);
  const obj4 = entranceAnimationDriver(originLayout[5]);
  class H {
    constructor() {
      const obj = { scrollEnabled: derivedValue.get() };
      return obj;
    }
  }
  H.__closure = { scrollEnabled: derivedValue };
  H.__workletHash = 13550782123441;
  H.__initData = derivedValue;
  const animatedProps = obj4.useAnimatedProps(H);
  const obj5 = { gesture: nativeGesture, children: windowWidth(entranceAnimationDriver(originLayout[10]).AnimatedFastList, obj6) };
  const tmp8 = onLongPress(originLayout[8])(index);
  const GestureDetector = entranceAnimationDriver(originLayout[9]).GestureDetector;
  obj6 = { ref, style: useItemVisible.absoluteFill, sections: items3, onTouchStart: callback, onTouchEnd: callback1, onTouchCancel: callback1, initialScrollItem: tmp8, automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, itemSize: windowWidth, renderItem: callback2, onContentSizeChange, pagingEnabled: true, onScroll, scrollEventThrottle: 16, animatedProps, disableLegacyGestureHandling: true, chunkBase: windowWidth, horizontal: true };
  items3 = [sources.length];
  return windowWidth(GestureDetector, obj5);
});
let closure_13 = { code: "function MediaViewerTsx3(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}" };
let __initData = { code: "function MediaViewerTsx4(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}" };
const __initData2 = { code: "function MediaViewerTsx5(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}" };
const __initData3 = { code: "function MediaViewerTsx6(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}" };
const __initData4 = { code: "function MediaViewerTsx7(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}" };
const memoResult = react.memo((arg0) => {
  let obj2;
  const obj = { children: metroImportDefault(MediaViewer, obj2) };
  obj2 = {};
  const MediaViewerDimensionsProvider = MediaViewerDimensionsContext.MediaViewerDimensionsProvider;
  const merged = Object.assign(arg0);
  return metroImportDefault(MediaViewerDimensionsProvider, obj);
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewer.tsx");

export default memoResult;
