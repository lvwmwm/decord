// Module ID: 15001
// Function ID: 15002
// Name: MediaViewer
// Dependencies: [32, 19, 17, 21, 1377, 1652, 15002, 15003, 8933, 5450, 7327, 7410, 7435, 8959, 15008, 15009, 14986, 6180, 5400, 1705, 8928, 8995, 11370, 15010, 11875, 2]

// Module 15001 (MediaViewer)
import useVideoControls from "useVideoControls" /* 8928 */;
import MediaViewerDimensionsContext from "MediaViewerDimensionsContext" /* 8959 */;
import MediaViewerItem2 from "MediaViewerItem" /* 15003 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let _undefined, _undefined2;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
function MediaViewer(arg0) {
  let height;
  let index;
  let isClosing;
  let isInteracting;
  let items15;
  let items16;
  let items17;
  let items18;
  let onClose;
  let onContentSizeChange;
  let onLongPress;
  let onScroll;
  let onScrollWorklets;
  let originLayout;
  let overlayEnabled;
  let pagerIndex;
  let ref;
  let renderMedia;
  let renderOverlay;
  let sources;
  let str;
  let swipeVelocityThreshold;
  let syncer;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
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
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp6;
  let tmp60;
  let tmp61;
  let tmp7;
  let translatePos;
  let useItemVisible;
  let width;
  let zoomed;
  ({ onClose, onLongPress, originLayout, renderMedia, syncer } = arg0);
  ({ index, sources, zoomed } = syncer);
  height = undefined;
  let sharedValue1;
  let animatedRef;
  let closure_3;
  let dismiss;
  isClosing = undefined;
  StyleSheet = undefined;
  let callback;
  let ref2;
  let tmp = sharedValue1;
  ({ renderOverlay, swipeVelocityThreshold } = arg0);
  const useViewerProps = syncer.useViewerProps;
  let tmp3 = sharedValue1(animatedRef[11]);
  let items = [sharedValue1(animatedRef[12]).MEDIA_VIEWER];
  let obj = dismiss;
  const analyticsLocations = tmp3(items).analyticsLocations;
  [tmp6, tmp7] = closure_3(dismiss.useState(true), 2);
  const tmp5 = closure_3(dismiss.useState(true), 2);
  let obj2 = height(animatedRef[13]);
  const mediaViewerDimensions = obj2.useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const tmp10 = sharedValue1(animatedRef[14])({ index, onClose, sources, windowHeight: height, windowWidth: width });
  let obj3 = height(animatedRef[5]);
  const sharedValue = obj3.useSharedValue(0);
  const obj4 = height(animatedRef[5]);
  sharedValue1 = obj4.useSharedValue(false);
  const obj5 = height(animatedRef[5]);
  animatedRef = obj5.useAnimatedRef();
  const tmp14 = sources.length > 1;
  const tmp4 = closure_3;
  closure_3 = tmp14;
  const obj6 = height(animatedRef[15]);
  const isMediaViewerImprovementsEnabled = obj6.useIsMediaViewerImprovementsEnabled();
  const obj7 = height(animatedRef[16]);
  const isMediaViewerEntranceJankFixEnabled = obj7.useIsMediaViewerEntranceJankFixEnabled();
  const viewerProps = useViewerProps(isMediaViewerImprovementsEnabled);
  ({ useItemVisible, ref, onScroll, onScrollWorklets, pagerIndex, onContentSizeChange } = viewerProps);
  const obj8 = height(animatedRef[6]);
  const mediaViewerPanGestureConfig = obj8.useMediaViewerPanGestureConfig(tmp10, swipeVelocityThreshold, onClose);
  dismiss = mediaViewerPanGestureConfig.dismiss;
  ({ translatePos, isClosing } = mediaViewerPanGestureConfig);
  ({ isInteracting, overlayEnabled } = mediaViewerPanGestureConfig);
  let items1 = [dismiss, isClosing];
  const tmp19 = sharedValue1(animatedRef[17]);
  tmp19(dismiss.useCallback(() => {
    if (!isClosing.get()) {
      dismiss();
    }
    return true;
  }, items1));
  const items2 = [height];
  const memo = dismiss.useMemo(() => {
    const obj = { height, backgroundColor: "black" };
    const merged = Object.assign(StyleSheet.absoluteFillObject);
    return obj;
  }, items2);
  const items3 = [closure_14, isMediaViewerEntranceJankFixEnabled, memo, sharedValue, , , ];
  const useAnimatedStyle = height(animatedRef[5]).useAnimatedStyle;
  height(animatedRef[5]);
  items3[4] = height(animatedRef[5]).interpolate;
  items3[5] = translatePos;
  items3[6] = tmp10;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items3;
  class MediaViewerTsx3 {
    constructor() {
      let items;
      let min;
      let value;
      let tmp = null;
      if (!c0) {
        tmp = c1;
      }
      const obj = { opacity: min(value, _undefined2(_undefined3.get(), items, [0, 1, 0])) };
      const merged = Object.assign(tmp);
      min = Math.min;
      value = _undefined.get();
      items = [-c5, 0, c5];
      return obj;
    }
  }
  const items4 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  MediaViewerTsx3.__closure = items4;
  MediaViewerTsx3.__workletHash = 1493258125771;
  MediaViewerTsx3.__initData = tmp23;
  const obj9 = { backgroundColor: "transparent" };
  const animatedStyle = useAnimatedStyle(MediaViewerTsx3);
  const useState = obj.useState;
  let merged = Object.assign(StyleSheet.absoluteFillObject);
  const first = tmp4(useState(obj9), 1)[0];
  const items5 = [closure_16, isClosing, sharedValue1, overlayEnabled, isInteracting, , , , , ];
  const useAnimatedStyle2 = tmp8(tmp2[5]).useAnimatedStyle;
  height(animatedRef[5]);
  items5[5] = height(animatedRef[18]).withTiming;
  items5[6] = height(animatedRef[5]).Easing;
  items5[7] = closure_15;
  items5[8] = height(animatedRef[19]).scheduleOnRN;
  items5[9] = tmp7;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  let c6;
  let c7;
  let c8;
  [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items5;
  const tmp31 = StyleSheet;
  class MediaViewerTsx5 {
    constructor() {
      let tmp12;
      let tmp13;
      let tmp14;
      let opacity = 0;
      if (!_undefined.get()) {
        opacity = 0;
        if (!_undefined2.get()) {
          if (_undefined3.get()) {
            let tmp6;
            if (!_undefined4.get()) {
              const obj = { easing: _undefined6.linear, duration: 150 };
              tmp6 = _undefined5(1, obj);
            }
            opacity = tmp6;
          }
          const items = [c6, c7, c8];
          _undefined = undefined;
          _undefined2 = undefined;
          const obj2 = { easing: _undefined6.linear, duration: 75 };
          [tmp12, tmp13, tmp14] = items;
          class MediaViewerTsx4 {
            constructor() {
              tmp = closure_0(closure_1, false);
              return;
            }
          }
          const items1 = [tmp13, tmp14];
          MediaViewerTsx4.__closure = items1;
          MediaViewerTsx4.__workletHash = 14835611840757;
          MediaViewerTsx4.__initData = tmp12;
          tmp6 = _undefined5(0, obj2, "respect-motion-settings", MediaViewerTsx4);
        }
      }
      return { opacity };
    }
  }
  const items6 = [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
  MediaViewerTsx5.__closure = items6;
  MediaViewerTsx5.__workletHash = 1237930573376;
  MediaViewerTsx5.__initData = tmp35;
  const animatedStyle2 = useAnimatedStyle2(MediaViewerTsx5);
  const items7 = [closure_17, overlayEnabled, isInteracting, , ];
  const useDerivedValue = tmp8(tmp2[5]).useDerivedValue;
  height(animatedRef[5]);
  items7[3] = height(animatedRef[19]).scheduleOnRN;
  items7[4] = tmp7;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp47, tmp48, tmp49, tmp50, tmp51] = items7;
  class MediaViewerTsx6 {
    constructor() {
      const value = _undefined.get() && !_undefined2.get();
      if (value) {
        _undefined3(c3, true);
      }
    }
  }
  const items8 = [tmp48, tmp49, tmp50, tmp51];
  MediaViewerTsx6.__closure = items8;
  MediaViewerTsx6.__workletHash = 15736275157365;
  MediaViewerTsx6.__initData = tmp47;
  const derivedValue = useDerivedValue(MediaViewerTsx6);
  const items9 = [closure_18, isMediaViewerEntranceJankFixEnabled, closure_10, translatePos, sharedValue1, , ];
  const useAnimatedStyle3 = tmp8(tmp2[5]).useAnimatedStyle;
  height(animatedRef[5]);
  items9[5] = height(animatedRef[18]).withTiming;
  items9[6] = height(animatedRef[5]).Easing;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61] = items9;
  const tmp54 = closure_10;
  class MediaViewerTsx7 {
    constructor() {
      let items;
      let num;
      let pan = null;
      if (!c0) {
        pan = _undefined.pan;
      }
      const obj = { transform: items, opacity: num };
      const merged = Object.assign(pan);
      items = [{ translateY: _undefined2.get() }];
      num = 0;
      ({ translateY: _undefined2.get() });
      if (!_undefined3.get()) {
        const obj3 = { easing: _undefined5.linear, duration: 75 };
        num = _undefined4(1, obj3);
      }
      return obj;
    }
  }
  const items10 = [tmp56, tmp57, tmp58, tmp59, tmp60, tmp61];
  MediaViewerTsx7.__closure = items10;
  MediaViewerTsx7.__workletHash = 12989144735041;
  MediaViewerTsx7.__initData = tmp55;
  const animatedStyle3 = useAnimatedStyle3(MediaViewerTsx7);
  StyleSheet = obj.useRef(null);
  const items11 = [tmp14, animatedRef, sharedValue1];
  callback = obj.useCallback(() => {
    const tmp = closure_3 && null != animatedRef.current;
    if (tmp) {
      let result = sharedValue1.set(true);
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        const result = sharedValue1.set(false);
      }, 250);
    }
  }, items11);
  const items12 = [sharedValue1];
  const callback1 = obj.useCallback(() => {
    const result = sharedValue1.set(false);
  }, items12);
  ref2 = obj.useRef(false);
  const items13 = [width, height, callback];
  const effect = obj.useEffect(() => {
    if (ref2.current) {
      callback();
    } else {
      tmp.current = true;
    }
  }, items13);
  const items14 = [callback];
  const callback2 = obj.useCallback((orientation, orientation2) => {
    if (orientation.orientation !== orientation2.orientation) {
      callback();
    }
    const tmp3 = closure_9;
    if (tmp3) {
      const obj = useVideoControls;
      const result = obj.unpauseCurrentVideoIfNeeded();
    }
  }, items14);
  const tmp8Result6 = height(animatedRef[21]);
  const orientationListener = tmp8Result6.useOrientationListener(callback2);
  let tmp68Result = callback(closure_13, { entranceAnimationDriver: sharedValue, onContentSizeChange, onScroll, onLongPress, originLayout, panGestureConfig: mediaViewerPanGestureConfig, ref, renderMedia, sources, useItemVisible, windowHeight: height, windowWidth: width, index, zoomed });
  const obj10 = { style: tmp31.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1, children: items15 };
  items15 = [, , , , ];
  const obj11 = { barStyle: "light-content", hidden: !tmp6 };
  items15[0] = callback(tmp(animatedRef[22]), obj11);
  const obj12 = { style: items16 };
  items16 = [memo, animatedStyle];
  items15[1] = callback(tmp(animatedRef[5]).View, obj12);
  const obj13 = { ref: animatedRef, style: items17, children: tmp68Result };
  items17 = [tmp54.pan, animatedStyle3];
  const View = tmp(tmp2[5]).View;
  const tmp70 = ref2;
  const tmp71 = isClosing;
  if (isMediaViewerImprovementsEnabled) {
    const obj14 = { entranceAnimationDriver: sharedValue, onLongPress, onScrollWorklets, originLayout, pagerIndex, panGestureConfig: mediaViewerPanGestureConfig, renderMedia, sources, useItemVisible, windowWidth: width, windowHeight: height, zoomed };
    tmp68Result = tmp68(tmp(tmp2[23]), obj14);
  }
  items15[2] = callback(View, obj13);
  const obj15 = { style: items18, pointerEvents: str, children: renderOverlay(dismiss, overlayEnabled, sharedValue) };
  items18 = [first, animatedStyle2];
  str = "none";
  const View2 = tmp(tmp2[5]).View;
  if (tmp6) {
    str = "box-none";
  }
  items15[3] = callback(View2, obj15);
  items15[4] = callback(tmp(animatedRef[24]), {});
  const children = tmp70(tmp71, obj10);
  return callback(height(animatedRef[11]).AnalyticsLocationProvider, { value: analyticsLocations, children });
}
({ View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = PlatformUtils.isAndroid();
let obj = { pan: obj2 };
obj2 = { alignItems: "center", justifyContent: "center" };
const create = StyleSheet.create;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = create(obj);
let closure_11 = { code: "(function MediaViewerTsx1(){let[zoomed,pinching]=this.__closure;return!zoomed.get()&&!pinching.get();})" };
let closure_12 = { code: "(function MediaViewerTsx2(){let[scrollEnabled]=this.__closure;return{scrollEnabled:scrollEnabled.get()};})" };
let closure_13 = react.memo(function MediaViewer(entranceAnimationDriver) {
  let index;
  let items7;
  let obj4;
  let onContentSizeChange;
  let onScroll;
  let ref;
  let tmp12;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp6;
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
  let panGestureGenerator;
  let tmp2 = originLayout;
  ({ onContentSizeChange, onScroll, ref, index } = entranceAnimationDriver);
  let obj = entranceAnimationDriver(originLayout[5]);
  const sharedValue = obj.useSharedValue(false);
  const items = [panGestureGenerator, zoomed, sharedValue];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  const obj2 = entranceAnimationDriver(originLayout[5]);
  class MediaViewerTsx1 {
    constructor() {
      const value = _undefined.get();
      const tmp2 = !value && !_undefined2.get();
      return tmp2;
    }
  }
  const items1 = [tmp5, tmp6];
  MediaViewerTsx1.__closure = items1;
  MediaViewerTsx1.__workletHash = 3986226128458;
  MediaViewerTsx1.__initData = tmp4;
  const derivedValue = obj2.useDerivedValue(MediaViewerTsx1);
  const items2 = [sharedValue];
  const items3 = [sharedValue];
  const callback = renderMedia.useCallback((nativeEvent) => sharedValue.set(2 === nativeEvent.nativeEvent.touches.length), items2);
  const callback1 = renderMedia.useCallback(() => sharedValue.set(false), items3);
  const tmpResult = entranceAnimationDriver(tmp2[6]);
  const mediaViewerPanGesture = tmpResult.useMediaViewerPanGesture(panGestureConfig, derivedValue);
  panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
  const items4 = [entranceAnimationDriver, onLongPress, originLayout, panGestureConfig, panGestureGenerator, renderMedia, sources, useItemVisible, windowHeight, windowWidth, zoomed];
  const nativeGesture = mediaViewerPanGesture.nativeGesture;
  const callback2 = renderMedia.useCallback((arg0, index) => {
    const obj = { originLayout, renderMedia, onLongPress, windowWidth, windowHeight, panGestureConfig, entranceAnimationDriver, source: sources[index], index, zoomed, panGesture: panGestureGenerator(index), useItemVisible };
    const MediaViewerItem = MediaViewerItem2.MediaViewerItem;
    return metroImportDefault(MediaViewerItem, obj);
  }, items4);
  const items5 = [closure_12, derivedValue];
  c0 = undefined;
  [tmp12, tmp13] = items5;
  const tmpResult2 = entranceAnimationDriver(tmp2[5]);
  class MediaViewerTsx2 {
    constructor() {
      const obj = { scrollEnabled: _undefined.get() };
      return obj;
    }
  }
  const items6 = [tmp13];
  MediaViewerTsx2.__closure = items6;
  MediaViewerTsx2.__workletHash = 8145051155624;
  MediaViewerTsx2.__initData = tmp12;
  const animatedProps = tmpResult2.useAnimatedProps(MediaViewerTsx2);
  const obj3 = { gesture: nativeGesture, children: windowWidth(entranceAnimationDriver(tmp2[10]).AnimatedFastList, obj4) };
  const tmp15 = onLongPress(tmp2[8])(index);
  const GestureDetector = tmp(tmp2[9]).GestureDetector;
  obj4 = { ref, style: useItemVisible.absoluteFill, sections: items7, onTouchStart: callback, onTouchEnd: callback1, onTouchCancel: callback1, initialScrollItem: tmp15, automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, itemSize: windowWidth, renderItem: callback2, onContentSizeChange, pagingEnabled: true, onScroll, scrollEventThrottle: 16, animatedProps, disableLegacyGestureHandling: true, chunkBase: windowWidth, horizontal: true };
  items7 = [sources.length];
  return windowWidth(GestureDetector, obj3);
});
let closure_14 = { code: "(function MediaViewerTsx3(){let[isEntranceJankFixEnabled,backdropLayout,entranceAnimationDriver,interpolate,translatePos,closePosition]=this.__closure;return{...(isEntranceJankFixEnabled?null:backdropLayout),opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};})" };
let closure_15 = { code: "(function MediaViewerTsx4(){let[scheduleOnRN,setShowHeader]=this.__closure;scheduleOnRN(setShowHeader,false);})" };
let closure_16 = { code: "(function MediaViewerTsx5(){let[isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,_worklet_14835611840757_init_data,scheduleOnRN,setShowHeader]=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function MediaViewerTsx4Factory([_worklet_14835611840757_init_data,scheduleOnRN,setShowHeader]){const MediaViewerTsx4=function(){scheduleOnRN(setShowHeader,false);};MediaViewerTsx4.__closure=[scheduleOnRN,setShowHeader];MediaViewerTsx4.__workletHash=14835611840757;MediaViewerTsx4.__initData=_worklet_14835611840757_init_data;return MediaViewerTsx4;}([_worklet_14835611840757_init_data,scheduleOnRN,setShowHeader]))};})" };
let closure_17 = { code: "(function MediaViewerTsx6(){let[overlayEnabled,isInteracting,scheduleOnRN,setShowHeader]=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){scheduleOnRN(setShowHeader,true);}})" };
let closure_18 = { code: "(function MediaViewerTsx7(){let[isEntranceJankFixEnabled,styles,translatePos,hideRelayoutSharedValue,withTiming,Easing]=this.__closure;return{...(isEntranceJankFixEnabled?null:styles.pan),transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};})" };
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
