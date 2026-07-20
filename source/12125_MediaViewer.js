// Module ID: 12125
// Function ID: 93416
// Name: MediaViewer
// Dependencies: []

// Module 12125 (MediaViewer)
function MediaViewer(arg0) {
  let dismiss;
  let height;
  let index;
  let onClose;
  let onContentSizeChange;
  let onLongPress;
  let onScroll;
  let originLayout;
  let ref;
  let renderMedia;
  let renderOverlay;
  let sources;
  let swipeVelocityThreshold;
  let syncer;
  let translatePos;
  let useItemVisible;
  let useViewerProps;
  let width;
  let zoomed;
  ({ onClose, syncer } = arg0);
  ({ index, sources } = syncer);
  ({ onLongPress, originLayout, renderMedia, renderOverlay, swipeVelocityThreshold } = arg0);
  ({ useViewerProps, zoomed } = syncer);
  const value = [importDefault(dependencyMap[12]).MEDIA_VIEWER];
  const tmp2 = callback(importAllResult.useState(true), 2);
  const first = tmp2[0];
  const arg1 = tmp4;
  let obj = arg1(dependencyMap[13]);
  const mediaViewerDimensions = obj.useMediaViewerDimensions();
  ({ width, height } = mediaViewerDimensions);
  const importDefault = height;
  const tmp6 = importDefault(dependencyMap[14])({ index, onClose, sources, windowHeight: height, windowWidth: width });
  const dependencyMap = tmp6;
  let obj1 = arg1(dependencyMap[5]);
  const sharedValue = obj1.useSharedValue(0);
  let callback = sharedValue;
  let obj2 = arg1(dependencyMap[5]);
  const sharedValue1 = obj2.useSharedValue(false);
  let obj3 = arg1(dependencyMap[5]);
  const animatedRef = obj3.useAnimatedRef();
  const tmp10 = sources.length > 1;
  const viewerProps = useViewerProps();
  ({ ref, onScroll, onContentSizeChange, useItemVisible } = viewerProps);
  let obj4 = arg1(dependencyMap[6]);
  const mediaViewerPanGestureConfig = obj4.useMediaViewerPanGestureConfig(tmp6, swipeVelocityThreshold, onClose);
  ({ dismiss, translatePos } = mediaViewerPanGestureConfig);
  const isClosing = mediaViewerPanGestureConfig.isClosing;
  const isInteracting = mediaViewerPanGestureConfig.isInteracting;
  let closure_9 = isInteracting;
  const overlayEnabled = mediaViewerPanGestureConfig.overlayEnabled;
  let closure_10 = overlayEnabled;
  const absoluteFillObject = tmp10.absoluteFillObject;
  let closure_11 = absoluteFillObject;
  let obj5 = arg1(dependencyMap[5]);
  class M {
    constructor() {
      obj = {};
      merged = Object.assign(absoluteFillObject);
      obj["height"] = height;
      obj["backgroundColor"] = "black";
      value = closure_3.get();
      obj2 = closure_0(closure_2[5]);
      items = [, , ];
      items[0] = -closure_2;
      items[1] = 0;
      items[2] = closure_2;
      obj["opacity"] = Math.min(value, obj2.interpolate(translatePos.get(), items, ["isArray", "\u012E", "isArray"]));
      return obj;
    }
  }
  obj = { absoluteFillObject, windowHeight: height, entranceAnimationDriver: sharedValue, interpolate: arg1(dependencyMap[5]).interpolate, translatePos, closePosition: tmp6 };
  M.__closure = obj;
  M.__workletHash = 10332062530694;
  M.__initData = closure_13;
  obj = {};
  const animatedStyle = obj5.useAnimatedStyle(M);
  const merged = Object.assign(tmp10.absoluteFillObject);
  obj["backgroundColor"] = "transparent";
  const tmp = importDefault(dependencyMap[11]);
  class P {
    constructor() {
      obj = {};
      num = 0;
      if (!isClosing.get()) {
        tmp = useSharedValue;
        num = 0;
        if (!useSharedValue.get()) {
          tmp2 = overlayEnabled;
          if (overlayEnabled.get()) {
            tmp3 = isInteracting;
            if (!isInteracting.get()) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              num2 = 15;
              obj2 = closure_0(closure_2[15]);
              obj = {};
              num3 = 5;
              obj.easing = closure_0(closure_2[5]).Easing.linear;
              num4 = 150;
              obj.duration = 150;
              num5 = 1;
              withTimingResult = obj2.withTiming(1, obj);
            }
            tmp14 = withTimingResult;
          }
          tmp7 = closure_0;
          tmp8 = closure_2;
          num6 = 15;
          obj4 = closure_0(closure_2[15]);
          obj1 = {};
          num7 = 5;
          obj1.easing = closure_0(closure_2[5]).Easing.linear;
          num8 = 75;
          obj1.duration = 75;
          fn = function n() {
            callback(closure_2[5]).runOnJS(callback)(false);
          };
          obj2 = {};
          obj2.runOnJS = closure_0(closure_2[5]).runOnJS;
          tmp9 = closure_0;
          obj2.setShowHeader = closure_0;
          fn.__closure = obj2;
          num9 = 11572173694016;
          fn.__workletHash = 11572173694016;
          tmp10 = closure_15;
          fn.__initData = closure_15;
          str = "respect-motion-settings";
          tmp11 = obj4;
          num10 = 0;
          tmp12 = obj1;
          tmp13 = fn;
          withTimingResult = obj4.withTiming(0, obj1, "respect-motion-settings", fn);
        }
      }
      obj.opacity = num;
      return obj;
    }
  }
  obj1 = { isClosing, hideRelayoutSharedValue: sharedValue1, overlayEnabled, isInteracting, withTiming: arg1(dependencyMap[15]).withTiming, Easing: arg1(dependencyMap[5]).Easing, runOnJS: arg1(dependencyMap[5]).runOnJS, setShowHeader: tmp4 };
  P.__closure = obj1;
  P.__workletHash = 14874736878670;
  P.__initData = closure_14;
  const animatedStyle1 = arg1(dependencyMap[5]).useAnimatedStyle(P);
  const obj9 = arg1(dependencyMap[5]);
  const fn = function x() {
    let value = overlayEnabled.get();
    if (value) {
      value = !isInteracting.get();
    }
    if (value) {
      const tmp6 = tmp6(tmp6[5]).runOnJS(tmp6)(true);
      const obj = tmp6(tmp6[5]);
    }
  };
  obj2 = { overlayEnabled, isInteracting, runOnJS: arg1(dependencyMap[5]).runOnJS, setShowHeader: tmp4 };
  fn.__closure = obj2;
  fn.__workletHash = 2199049578465;
  fn.__initData = closure_16;
  const derivedValue = arg1(dependencyMap[5]).useDerivedValue(fn);
  const obj11 = arg1(dependencyMap[5]);
  function le() {
    let obj = {};
    const merged = Object.assign(absoluteFillObject);
    obj["alignItems"] = "center";
    obj["justifyContent"] = "center";
    obj = { translateY: translatePos.get() };
    const items = [obj];
    obj["transform"] = items;
    let num = 0;
    if (!sharedValue1.get()) {
      obj = { easing: tmp4(tmp6[5]).Easing.linear, duration: 75 };
      num = tmp4(tmp6[15]).withTiming(1, obj);
      const obj3 = tmp4(tmp6[15]);
    }
    obj["opacity"] = num;
    return obj;
  }
  obj3 = { absoluteFillObject, translatePos, hideRelayoutSharedValue: sharedValue1, withTiming: arg1(dependencyMap[15]).withTiming, Easing: arg1(dependencyMap[5]).Easing };
  le.__closure = obj3;
  le.__workletHash = 8244409104374;
  le.__initData = closure_17;
  const animatedStyle2 = arg1(dependencyMap[5]).useAnimatedStyle(le);
  let closure_12 = importAllResult.useRef(null);
  const items1 = [tmp10, animatedRef, sharedValue1];
  callback = importAllResult.useCallback(() => {
    let tmp = tmp10;
    if (tmp10) {
      tmp = null != animatedRef.current;
    }
    if (tmp) {
      const result = sharedValue1.set(true);
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        const result = closure_4.set(false);
      }, 250);
    }
  }, items1);
  closure_13 = callback;
  const items2 = [sharedValue1];
  const callback1 = importAllResult.useCallback(() => {
    const result = sharedValue1.set(false);
  }, items2);
  closure_14 = importAllResult.useRef(false);
  const items3 = [width, height, callback];
  const effect = importAllResult.useEffect(() => {
    if (ref2.current) {
      callback();
    } else {
      ref2.current = true;
    }
  }, items3);
  const items4 = [callback];
  const callback2 = importAllResult.useCallback((orientation, orientation2) => {
    if (orientation.orientation !== orientation2.orientation) {
      callback();
    }
    if (isInteracting) {
      const result = tmp6(tmp6[16]).unpauseCurrentVideoIfNeeded();
      const obj = tmp6(tmp6[16]);
    }
  }, items4);
  const obj13 = arg1(dependencyMap[5]);
  const orientationListener = arg1(dependencyMap[17]).useOrientationListener(callback2);
  obj4 = { style: tmp10.absoluteFill, onAccessibilityEscape: dismiss, onLayout: callback1 };
  const obj15 = arg1(dependencyMap[17]);
  obj5 = { barStyle: "light-content", hidden: !first };
  const items5 = [translatePos(importDefault(dependencyMap[18]), obj5), translatePos(importDefault(dependencyMap[5]).View, { style: animatedStyle }), translatePos(importDefault(dependencyMap[19]), { ref: animatedRef, style: animatedStyle2, children: translatePos(closure_12, { entranceAnimationDriver: sharedValue, onContentSizeChange, onScroll, onLongPress, originLayout, panGestureConfig: mediaViewerPanGestureConfig, ref, renderMedia, sources, useItemVisible, windowHeight: height, windowWidth: width, index, zoomed }) }), , ];
  const obj6 = { style: items6 };
  const items6 = [callback(sharedValue1.useState(obj), 1)[0], animatedStyle1];
  let str = "none";
  const tmp23 = translatePos(closure_12, { entranceAnimationDriver: sharedValue, onContentSizeChange, onScroll, onLongPress, originLayout, panGestureConfig: mediaViewerPanGestureConfig, ref, renderMedia, sources, useItemVisible, windowHeight: height, windowWidth: width, index, zoomed });
  const tmp24 = isClosing;
  const tmp25 = animatedRef;
  const tmp26 = translatePos;
  if (first) {
    str = "box-none";
  }
  obj6.pointerEvents = str;
  obj6.children = renderOverlay(dismiss, overlayEnabled);
  items5[3] = tmp26(importDefault(dependencyMap[19]), obj6);
  items5[4] = translatePos(importDefault(dependencyMap[20]), {});
  obj4.children = items5;
  const children = tmp24(tmp25, obj4);
  return translatePos(arg1(dependencyMap[11]).AnalyticsLocationProvider, { value: tmp(value).analyticsLocations, children });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).isAndroid();
let closure_10 = { code: "function MediaViewerTsx1(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}" };
let closure_11 = { code: "function MediaViewerTsx2(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
let closure_12 = importAllResult.memo((entranceAnimationDriver) => {
  let index;
  let onContentSizeChange;
  let onScroll;
  let ref;
  entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
  const arg1 = entranceAnimationDriver;
  const onLongPress = entranceAnimationDriver.onLongPress;
  const importDefault = onLongPress;
  const originLayout = entranceAnimationDriver.originLayout;
  const dependencyMap = originLayout;
  const panGestureConfig = entranceAnimationDriver.panGestureConfig;
  let closure_3 = panGestureConfig;
  const renderMedia = entranceAnimationDriver.renderMedia;
  const sources = entranceAnimationDriver.sources;
  const useItemVisible = entranceAnimationDriver.useItemVisible;
  const windowWidth = entranceAnimationDriver.windowWidth;
  const windowHeight = entranceAnimationDriver.windowHeight;
  const zoomed = entranceAnimationDriver.zoomed;
  let closure_9 = zoomed;
  ({ onContentSizeChange, onScroll, ref, index } = entranceAnimationDriver);
  let obj = arg1(dependencyMap[5]);
  const sharedValue = obj.useSharedValue(false);
  let closure_10 = sharedValue;
  class T {
    constructor() {
      tmp = !zoomed.get();
      if (tmp) {
        tmp2 = useSharedValue;
        tmp = !useSharedValue.get();
      }
      return tmp;
    }
  }
  T.__closure = { zoomed, pinching: sharedValue };
  T.__workletHash = 9157951736691;
  T.__initData = closure_10;
  const derivedValue = arg1(dependencyMap[5]).useDerivedValue(T);
  let closure_11 = derivedValue;
  const items = [sharedValue];
  const items1 = [sharedValue];
  const callback = importAllResult.useCallback((nativeEvent) => sharedValue.set(2 === nativeEvent.nativeEvent.touches.length), items);
  const callback1 = importAllResult.useCallback(() => sharedValue.set(false), items1);
  const obj2 = arg1(dependencyMap[5]);
  const mediaViewerPanGesture = arg1(dependencyMap[6]).useMediaViewerPanGesture(panGestureConfig, derivedValue);
  const panGestureGenerator = mediaViewerPanGesture.panGestureGenerator;
  let closure_12 = panGestureGenerator;
  const items2 = [entranceAnimationDriver, onLongPress, originLayout, panGestureConfig, panGestureGenerator, renderMedia, sources, useItemVisible, windowHeight, windowWidth, zoomed];
  const callback2 = importAllResult.useCallback((arg0, index) => {
    const obj = { originLayout, renderMedia, onLongPress, windowWidth, windowHeight, panGestureConfig, entranceAnimationDriver, source: sources[index], index, zoomed, panGesture: panGestureGenerator(index), useItemVisible };
    return windowWidth(entranceAnimationDriver(originLayout[7]).MediaViewerItem, obj);
  }, items2);
  const obj3 = arg1(dependencyMap[6]);
  class H {
    constructor() {
      obj = { scrollEnabled: closure_11.get() };
      return obj;
    }
  }
  H.__closure = { scrollEnabled: derivedValue };
  H.__workletHash = 13550782123441;
  H.__initData = closure_11;
  const animatedProps = arg1(dependencyMap[5]).useAnimatedProps(H);
  const obj4 = arg1(dependencyMap[5]);
  obj = { gesture: mediaViewerPanGesture.nativeGesture };
  obj = { ref, style: useItemVisible.absoluteFill, sections: items3, onTouchStart: callback, onTouchEnd: callback1, onTouchCancel: callback1, initialScrollItem: importDefault(dependencyMap[8])(index), automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, itemSize: windowWidth, renderItem: callback2, onContentSizeChange, pagingEnabled: true, onScroll, scrollEventThrottle: 16, animatedProps, disableLegacyGestureHandling: true, chunkBase: windowWidth, horizontal: true };
  const items3 = [sources.length];
  obj.children = windowWidth(arg1(dependencyMap[10]).AnimatedFastList, obj);
  return windowWidth(arg1(dependencyMap[9]).GestureDetector, obj);
});
let closure_13 = { code: "function MediaViewerTsx3(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}" };
let closure_14 = { code: "function MediaViewerTsx4(){const{isClosing,hideRelayoutSharedValue,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||hideRelayoutSharedValue.get()?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}" };
let closure_15 = { code: "function MediaViewerTsx5(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}" };
let closure_16 = { code: "function MediaViewerTsx6(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}" };
let closure_17 = { code: "function MediaViewerTsx7(){const{absoluteFillObject,translatePos,hideRelayoutSharedValue,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideRelayoutSharedValue.get()?0:withTiming(1,{easing:Easing.linear,duration:75})};}" };
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((arg0) => {
  let obj = {};
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback2(MediaViewer, obj);
  return callback2(arg1(dependencyMap[13]).MediaViewerDimensionsProvider, obj);
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/media_viewer/native/components/MediaViewer.tsx");

export default memoResult;
