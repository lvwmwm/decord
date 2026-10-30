// Module ID: 14757
// Function ID: 14758
// Name: MediaViewer
// Dependencies: [32, 19, 17, 21, 1376, 5090, 14758, 14759, 8833, 5298, 7234, 7320, 7345, 8858, 14764, 14765, 14742, 6017, 5249, 8828, 8894, 11193, 5091, 14766, 11665, 2]

// Module 14757 (MediaViewer)
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import useVideoControls from "useVideoControls" /* 8828 */;
import MediaViewerDimensionsContext from "MediaViewerDimensionsContext" /* 8858 */;
import MediaViewerItem2 from "MediaViewerItem" /* 14759 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
function MediaViewer(arg0) {
  let closure_2;
  let closure_6;
  let height;
  let index;
  let items10;
  let items7;
  let items8;
  let items9;
  let onClose;
  let onContentSizeChange;
  let onLongPress;
  let onScroll;
  let onScrollWorklets;
  let originLayout;
  let pagerIndex;
  let ref;
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
  let width;
  let zoomed;
  ({ onClose, onLongPress, originLayout, renderMedia, syncer } = arg0);
  ({ index, sources, zoomed } = syncer);
  height = undefined;
  let sharedValue;
  let sharedValue1;
  __initData = undefined;
  let tmp = height;
  ({ renderOverlay, swipeVelocityThreshold } = arg0);
  const useViewerProps = syncer.useViewerProps;
  let tmp3 = height(7320);
  let items = [height(7345).MEDIA_VIEWER];
  const analyticsLocations = tmp3(items).analyticsLocations;
  [tmp5, tmp6] = sharedValue(sharedValue1.useState(true), 2);
  _require = tmp6;
  const tmp4 = sharedValue(sharedValue1.useState(true), 2);
  let obj = require("MediaViewerDimensionsContext");
  const mediaViewerDimensions = obj.useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const tmp9 = height(14764)({ index, onClose, sources, windowHeight: height, windowWidth: width });
  dependencyMap = tmp9;
  let obj2 = require("ReanimatedRexport");
  sharedValue = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  sharedValue1 = obj3.useSharedValue(false);
  const obj4 = require("ReanimatedRexport");
  const animatedRef = obj4.useAnimatedRef();
  StyleSheet = tmp13;
  const obj5 = require("MediaViewerImprovementsExperiment");
  const isMediaViewerImprovementsEnabled = obj5.useIsMediaViewerImprovementsEnabled();
  const obj6 = require("MediaViewerEntranceJankExperiment");
  const isMediaViewerEntranceJankFixEnabled = obj6.useIsMediaViewerEntranceJankFixEnabled();
  const viewerProps = useViewerProps(isMediaViewerImprovementsEnabled);
  ({ useItemVisible, ref, onScroll, onScrollWorklets, pagerIndex, onContentSizeChange } = viewerProps);
  const obj7 = require("useMediaViewerPanGesture");
  const mediaViewerPanGestureConfig = obj7.useMediaViewerPanGestureConfig(tmp9, swipeVelocityThreshold, onClose);
  const dismiss = mediaViewerPanGestureConfig.dismiss;
  const translatePos = mediaViewerPanGestureConfig.translatePos;
  const isClosing = mediaViewerPanGestureConfig.isClosing;
  const isInteracting = mediaViewerPanGestureConfig.isInteracting;
  const overlayEnabled = mediaViewerPanGestureConfig.overlayEnabled;
  const items1 = [dismiss, isClosing];
  const tmp18 = height(6017);
  tmp18(sharedValue1.useCallback(() => {
    if (!isClosing.get()) {
      dismiss();
    }
    return true;
  }, items1));
  const items2 = [height];
  const memo = sharedValue1.useMemo(() => {
    const obj = { height, backgroundColor: "black" };
    const merged = Object.assign(StyleSheet.absoluteFillObject);
    return obj;
  }, items2);
  function re() {
    let items;
    let min;
    let obj2;
    let value;
    let tmp = null;
    if (!isMediaViewerEntranceJankFixEnabled) {
      tmp = memo;
    }
    const obj = { opacity: min(value, obj2.interpolate(translatePos.get(), items, [0, 1, 0])) };
    const merged = Object.assign(tmp);
    min = Math.min;
    value = sharedValue.get();
    items = [-closure_2, 0, closure_2];
    obj2 = ReanimatedRexport;
    return obj;
  }
  const obj8 = require("ReanimatedRexport");
  re.__closure = { isEntranceJankFixEnabled: isMediaViewerEntranceJankFixEnabled, backdropLayout: memo, entranceAnimationDriver: sharedValue, interpolate: require("ReanimatedRexport").interpolate, translatePos, closePosition: tmp9 };
  re.__workletHash = 7563599196274;
  re.__initData = __initData;
  const obj10 = { backgroundColor: "transparent" };
  ({ isEntranceJankFixEnabled: isMediaViewerEntranceJankFixEnabled, backdropLayout: memo, entranceAnimationDriver: sharedValue, interpolate: require("ReanimatedRexport").interpolate, translatePos, closePosition: tmp9 });
  const animatedStyle = obj8.useAnimatedStyle(re);
  const useState = sharedValue1.useState;
  let merged = Object.assign(StyleSheet.absoluteFillObject);
  const first = sharedValue(useState(obj10), 1)[0];
  function oe() {
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
  const obj11 = require("ReanimatedRexport");
  oe.__closure = { isClosing, hideRelayoutSharedValue: sharedValue1, overlayEnabled, isInteracting, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  oe.__workletHash = 14874736878670;
  oe.__initData = __initData;
  ({ isClosing, hideRelayoutSharedValue: sharedValue1, overlayEnabled, isInteracting, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 });
  const animatedStyle1 = obj11.useAnimatedStyle(oe);
  function se() {
    const value = overlayEnabled.get() && !isInteracting.get();
    if (value) {
      const obj = ReanimatedRexport;
      obj.runOnJS(c0)(true);
    }
  }
  const obj13 = require("ReanimatedRexport");
  se.__closure = { overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 };
  se.__workletHash = 2199049578465;
  se.__initData = __initData2;
  ({ overlayEnabled, isInteracting, runOnJS: require("ReanimatedRexport").runOnJS, setShowHeader: tmp6 });
  const derivedValue = obj13.useDerivedValue(se);
  function he() {
    let items;
    let num;
    let pan = null;
    if (!isMediaViewerEntranceJankFixEnabled) {
      pan = isClosing.pan;
    }
    const obj = { transform: items, opacity: num };
    const merged = Object.assign(pan);
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
  const obj15 = require("ReanimatedRexport");
  he.__closure = { isEntranceJankFixEnabled: isMediaViewerEntranceJankFixEnabled, styles: isClosing, translatePos, hideRelayoutSharedValue: sharedValue1, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  he.__workletHash = 9249298896824;
  he.__initData = __initData3;
  ({ isEntranceJankFixEnabled: isMediaViewerEntranceJankFixEnabled, styles: isClosing, translatePos, hideRelayoutSharedValue: sharedValue1, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing });
  const animatedStyle2 = obj15.useAnimatedStyle(he);
  sharedValue1.useRef(null);
  const items3 = [tmp13, animatedRef, sharedValue1];
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
  }, items3);
  const items4 = [sharedValue1];
  const callback1 = sharedValue1.useCallback(() => {
    const result = sharedValue1.set(false);
  }, items4);
  __initData = sharedValue1.useRef(false);
  const items5 = [width, height, __initData];
  const effect = sharedValue1.useEffect(() => {
    if (__initData.current) {
      callback();
    } else {
      tmp.current = true;
    }
  }, items5);
  const items6 = [__initData];
  const callback2 = sharedValue1.useCallback((orientation, orientation2) => {
    if (orientation.orientation !== orientation2.orientation) {
      callback();
    }
    const tmp3 = closure_9;
    if (tmp3) {
      const obj = useVideoControls;
      const result = obj.unpauseCurrentVideoIfNeeded();
    }
  }, items6);
  const obj17 = require("DeviceOrientation");
  const orientationListener = obj17.useOrientationListener(callback2);
  let tmp32Result = isMediaViewerEntranceJankFixEnabled(memo, { entranceAnimationDriver: sharedValue, onContentSizeChange, onScroll, onLongPress, originLayout, panGestureConfig: mediaViewerPanGestureConfig, ref, renderMedia, sources, useItemVisible, windowHeight: height, windowWidth: width, index, zoomed });
  const obj18 = { style: StyleSheet.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1, children: items7 };
  items7 = [, , , , ];
  const obj19 = { barStyle: "light-content", hidden: !tmp5 };
  items7[0] = isMediaViewerEntranceJankFixEnabled(height(11193), obj19);
  const obj20 = { style: items8 };
  items8 = [memo, animatedStyle];
  items7[1] = isMediaViewerEntranceJankFixEnabled(height(5090).View, obj20);
  const obj21 = { ref: animatedRef, style: items9, children: tmp32Result };
  items9 = [isClosing.pan, animatedStyle2];
  const tmp34 = dismiss;
  const tmp35 = animatedRef;
  const tmp36 = height(5091);
  const tmp7 = _require;
  if (isMediaViewerImprovementsEnabled) {
    const obj22 = { entranceAnimationDriver: sharedValue, onLongPress, onScrollWorklets, originLayout, pagerIndex, panGestureConfig: mediaViewerPanGestureConfig, renderMedia, sources, useItemVisible, windowWidth: width, windowHeight: height, zoomed };
    tmp32Result = tmp32(tmp(14766), obj22);
  }
  items7[2] = isMediaViewerEntranceJankFixEnabled(tmp36, obj21);
  const obj23 = { style: items10, pointerEvents: str, children: renderOverlay(dismiss, overlayEnabled, sharedValue) };
  items10 = [first, animatedStyle1];
  str = "none";
  const tmpResult = tmp(5091);
  if (tmp5) {
    str = "box-none";
  }
  items7[3] = isMediaViewerEntranceJankFixEnabled(tmpResult, obj23);
  items7[4] = isMediaViewerEntranceJankFixEnabled(tmp(11665), {});
  const children = tmp34(tmp35, obj18);
  return isMediaViewerEntranceJankFixEnabled(tmp7(7320).AnalyticsLocationProvider, { value: analyticsLocations, children });
}
({ View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = PlatformUtils.isAndroid();
let obj = { pan: obj2 };
obj2 = { alignItems: "center", justifyContent: "center" };
const create = StyleSheet.create;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = create(obj);
let closure_11 = { code: "function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}" };
let closure_12 = { code: "function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
let closure_13 = react.memo(function MediaViewer(entranceAnimationDriver) {
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
  ({ onContentSizeChange, onScroll, ref, index } = entranceAnimationDriver);
  let obj = entranceAnimationDriver(originLayout[5]);
  const sharedValue = obj.useSharedValue(false);
  const fn = function k() {
    const value = zoomed.get();
    const tmp2 = !value && !sharedValue.get();
    return tmp2;
  };
  fn.__closure = { zoomed, pinching: sharedValue };
  fn.__workletHash = 9157951736691;
  fn.__initData = derivedValue;
  const obj2 = entranceAnimationDriver(originLayout[5]);
  derivedValue = obj2.useDerivedValue(fn);
  const items = [sharedValue];
  const items1 = [sharedValue];
  const callback = renderMedia.useCallback((nativeEvent) => sharedValue.set(2 === nativeEvent.nativeEvent.touches.length), items);
  const callback1 = renderMedia.useCallback(() => sharedValue.set(false), items1);
  const obj3 = entranceAnimationDriver(originLayout[6]);
  const mediaViewerPanGesture = obj3.useMediaViewerPanGesture(panGestureConfig, derivedValue);
  const panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
  const items2 = [entranceAnimationDriver, onLongPress, originLayout, panGestureConfig, panGestureGenerator, renderMedia, sources, useItemVisible, windowHeight, windowWidth, zoomed];
  const nativeGesture = mediaViewerPanGesture.nativeGesture;
  const callback2 = renderMedia.useCallback((arg0, index) => {
    const obj = { originLayout, renderMedia, onLongPress, windowWidth, windowHeight, panGestureConfig, entranceAnimationDriver, source: sources[index], index, zoomed, panGesture: panGestureGenerator(index), useItemVisible };
    const MediaViewerItem = MediaViewerItem2.MediaViewerItem;
    return metroImportDefault(MediaViewerItem, obj);
  }, items2);
  const obj4 = entranceAnimationDriver(originLayout[5]);
  class M {
    constructor() {
      const obj = { scrollEnabled: derivedValue.get() };
      return obj;
    }
  }
  M.__closure = { scrollEnabled: derivedValue };
  M.__workletHash = 13550782123441;
  M.__initData = panGestureGenerator;
  const animatedProps = obj4.useAnimatedProps(M);
  const obj5 = { gesture: nativeGesture, children: windowWidth(entranceAnimationDriver(originLayout[10]).AnimatedFastList, obj6) };
  const tmp8 = onLongPress(originLayout[8])(index);
  const GestureDetector = entranceAnimationDriver(originLayout[9]).GestureDetector;
  obj6 = { ref, style: useItemVisible.absoluteFill, sections: items3, onTouchStart: callback, onTouchEnd: callback1, onTouchCancel: callback1, initialScrollItem: tmp8, automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, itemSize: windowWidth, renderItem: callback2, onContentSizeChange, pagingEnabled: true, onScroll, scrollEventThrottle: 16, animatedProps, disableLegacyGestureHandling: true, chunkBase: windowWidth, horizontal: true };
  items3 = [sources.length];
  return windowWidth(GestureDetector, obj5);
});
let __initData = { code: "function MediaViewerTsx3(){const{isEntranceJankFixEnabled,backdropLayout,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...(isEntranceJankFixEnabled?null:backdropLayout),opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}" };
let closure_15 = { code: "function MediaViewerTsx4(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}" };
let closure_16 = { code: "function MediaViewerTsx5(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}" };
const __initData2 = { code: "function MediaViewerTsx6(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}" };
const __initData3 = { code: "function MediaViewerTsx7(){const{isEntranceJankFixEnabled,styles,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...(isEntranceJankFixEnabled?null:styles.pan),transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}" };
const memoResult = react.memo(function MediaViewerWithProvider(arg0) {
  let obj2;
  const obj = { children: metroImportDefault(MediaViewer, obj2) };
  obj2 = {};
  const MediaViewerDimensionsProvider = MediaViewerDimensionsContext.MediaViewerDimensionsProvider;
  const merged = Object.assign(arg0);
  return metroImportDefault(MediaViewerDimensionsProvider, obj);
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewer.tsx");

export default memoResult;
