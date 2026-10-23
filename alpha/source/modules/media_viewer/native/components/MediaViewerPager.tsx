// Module ID: 14218
// Function ID: 14219
// Name: MediaViewerPager
// Dependencies: [32, 19, 21, 558, 576, 8755, 8754, 10079, 14213, 5050, 14211, 5157, 5295, 8750, 1384, 14215, 14219, 14220, 2]

// Module 14218 (MediaViewerPager)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5295 */;
import useMediaViewerSources from "useMediaViewerSources" /* 8750 */;
import MediaViewerItemPresenterDefault from "MediaViewerItemPresenter" /* 14215 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let __initData, onStartResult;

const jsx = Fragment.jsx;
let closure_6 = { code: "function MediaViewerPagerTsx1(){const{zoomScale,isClosing}=this.__closure;return zoomScale.get()<=1&&!isClosing.get();}" };
let closure_7 = { code: "function MediaViewerPagerTsx2(_,manager){const{isPaging}=this.__closure;if(isPaging.get()){manager.fail();}}" };
let closure_8 = { code: "function MediaViewerPagerTsx3(t13){const{zoomed,zoomRef}=this.__closure;var x=t13.x,y=t13.y;if(zoomed.get()){var _zoomRef$current;(_zoomRef$current=zoomRef.current)===null||_zoomRef$current===void 0||_zoomRef$current.unzoom();}else{var _zoomRef$current2;(_zoomRef$current2=zoomRef.current)===null||_zoomRef$current2===void 0||_zoomRef$current2.zoomTo({x:x,y:y});}}" };
let closure_9 = { code: "function MediaViewerPagerTsx4(){const{hasSpoiler,removeSpoiler,currentPage,zoomed,overlayEnabled}=this.__closure;if(hasSpoiler){removeSpoiler(currentPage);}else{if(!zoomed.get()){overlayEnabled.set(!overlayEnabled.get());}}}" };
let closure_10 = { code: "function MediaViewerPagerTsx5(){const{shouldHideMediaOptions,onLongPress}=this.__closure;if(!shouldHideMediaOptions){var _onLongPress;(_onLongPress=onLongPress)===null||_onLongPress===void 0||_onLongPress();}}" };
let closure_11 = { code: "function MediaViewerPagerTsx6(){const{zoomScale}=this.__closure;return zoomScale.get()>1;}" };
let closure_12 = { code: "function MediaViewerPagerTsx7(isZoomed,previous){const{zoomed,isInteracting}=this.__closure;if(previous===isZoomed){return;}zoomed.set(isZoomed);isInteracting.set(isZoomed);}" };
let closure_13 = { code: "function MediaViewerPagerTsx8(){const{zoomScale,isClosing}=this.__closure;return zoomScale.get()<=1&&!isClosing.get();}" };
let closure_14 = { code: "function MediaViewerPagerTsx9(_,manager){const{isPaging}=this.__closure;if(isPaging.get())manager.fail();}" };
let closure_15 = { code: "function MediaViewerPagerTsx10(){const{zoomScale}=this.__closure;return zoomScale.get()>1;}" };
let closure_16 = { code: "function MediaViewerPagerTsx11(isZoomed,previous){const{zoomed,isInteracting}=this.__closure;if(previous===isZoomed)return;zoomed.set(isZoomed);isInteracting.set(isZoomed);}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaViewerPager(entranceAnimationDriver) {
  let isPaging;
  let onScrollWorklets;
  let pagerIndex;
  let ref;
  let tmp4;
  let tmp = entranceAnimationDriver;
  const tmp2 = pagerIndex;
  let obj = entranceAnimationDriver(pagerIndex[4]);
  const cResult = obj.c(65);
  entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
  const onLongPress = entranceAnimationDriver.onLongPress;
  ({ onScrollWorklets, pagerIndex } = entranceAnimationDriver);
  const panGestureConfig = entranceAnimationDriver.panGestureConfig;
  const sources = entranceAnimationDriver.sources;
  const renderMedia = entranceAnimationDriver.renderMedia;
  const originLayout = entranceAnimationDriver.originLayout;
  const useItemVisible = entranceAnimationDriver.useItemVisible;
  const windowWidth = entranceAnimationDriver.windowWidth;
  const windowHeight = entranceAnimationDriver.windowHeight;
  const zoomed = entranceAnimationDriver.zoomed;
  if (cResult[0] !== pagerIndex) {
    class S {
      constructor() {
        return pagerIndex.get();
      }
    }
    let num = 0;
    cResult[0] = pagerIndex;
    cResult[1] = S;
    tmp4 = S;
  } else {
    class S {
      constructor() {
        return pagerIndex.get();
      }
    }
  }
  const first = panGestureConfig(sources.useState(tmp4), 2)[0];
  const tmp5 = panGestureConfig(sources.useState(tmp4), 2);
  if (cResult[2] !== sources[first]) {
    class S {
      constructor() {
        return pagerIndex.get();
      }
    }
    let flattenSourceResult;
    if (null != sources[first]) {
      class S {
        constructor() {
          return pagerIndex.get();
        }
      }
      flattenSourceResult = obj2.flattenSource(tmp7);
    }
    cResult[2] = sources[first];
    cResult[3] = flattenSourceResult;
  } else {
    class S {
      constructor() {
        return pagerIndex.get();
      }
    }
  }
  flattenSourceResult = tmp8;
  const tmpResult = tmp(tmp2[6]);
  const mediaItemHasSpoiler = tmpResult.useMediaItemHasSpoiler(first);
  const tmp12 = onLongPress(tmp2[7]);
  if (tmp8 != null) {
    class S {
      constructor() {
        return pagerIndex.get();
      }
    }
  }
  closure_14 = tmp12(undefined);
  tmp12(undefined);
  if (cResult[4] === sources[first]) {
    class S {
      constructor() {
        return pagerIndex.get();
      }
    }
  }
  cResult[4] = sources[first];
  cResult[5] = windowHeight;
  cResult[6] = windowWidth;
  cResult[7] = onLongPress(tmp2[8])(windowWidth, windowHeight, sources[first]);
  onLongPress(tmp2[8])(windowWidth, windowHeight, sources[first]);
}) : (function MediaViewerPager(entranceAnimationDriver) {
  let height;
  let maximumZoomScale;
  let obj5;
  let onScrollWorklets;
  let pagerIndex;
  let tmp11Result2;
  let width;
  entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
  const onLongPress = entranceAnimationDriver.onLongPress;
  ({ onScrollWorklets, pagerIndex } = entranceAnimationDriver);
  const panGestureConfig = entranceAnimationDriver.panGestureConfig;
  const sources = entranceAnimationDriver.sources;
  const renderMedia = entranceAnimationDriver.renderMedia;
  const originLayout = entranceAnimationDriver.originLayout;
  const useItemVisible = entranceAnimationDriver.useItemVisible;
  const windowWidth = entranceAnimationDriver.windowWidth;
  const windowHeight = entranceAnimationDriver.windowHeight;
  const zoomed = entranceAnimationDriver.zoomed;
  let c12;
  let mediaItemHasSpoiler;
  __initData = undefined;
  let ref;
  let ref1;
  let sharedValue;
  let sharedValue1;
  let isInteracting;
  let isClosing;
  let overlayEnabled;
  let c22;
  let callback1;
  let callback2;
  let callback3;
  let obj = sources;
  let tmp = panGestureConfig(sources.useState(() => pagerIndex.get()), 2);
  const first = tmp[0];
  let flattenSourceResult;
  const tmp3 = tmp[1];
  if (null != sources[first]) {
    let tmp6 = entranceAnimationDriver;
    const obj2 = entranceAnimationDriver(pagerIndex[5]);
    flattenSourceResult = obj2.flattenSource(tmp4);
  }
  c12 = flattenSourceResult;
  const obj3 = entranceAnimationDriver(pagerIndex[6]);
  mediaItemHasSpoiler = obj3.useMediaItemHasSpoiler(first);
  let channelId;
  const tmp12 = onLongPress(pagerIndex[7]);
  if (flattenSourceResult != null) {
    channelId = flattenSourceResult.channelId;
  }
  const tmp12Result = tmp12(channelId);
  __initData = tmp12Result;
  ({ width, height, maximumZoomScale } = onLongPress(pagerIndex[8])(windowWidth, windowHeight, sources[first]));
  onLongPress(pagerIndex[8])(windowWidth, windowHeight, sources[first]);
  ref = obj.useRef(null);
  ref1 = obj.useRef(undefined);
  const tmp8Result = entranceAnimationDriver(pagerIndex[9]);
  sharedValue = tmp8Result.useSharedValue(false);
  const tmp8Result5 = entranceAnimationDriver(pagerIndex[9]);
  sharedValue1 = tmp8Result5.useSharedValue(1);
  isInteracting = panGestureConfig.isInteracting;
  isClosing = panGestureConfig.isClosing;
  overlayEnabled = panGestureConfig.overlayEnabled;
  const tmp8Result6 = entranceAnimationDriver(pagerIndex[9]);
  class C {
    constructor() {
      const tmp = sharedValue1.get() <= 1 && !isClosing.get();
      return tmp;
    }
  }
  C.__closure = { zoomScale: sharedValue1, isClosing };
  C.__workletHash = 14916863344010;
  C.__initData = mediaItemHasSpoiler;
  const derivedValue = tmp8Result6.useDerivedValue(C);
  const tmp8Result7 = entranceAnimationDriver(pagerIndex[10]);
  const mediaViewerPanGesture = tmp8Result7.useMediaViewerPanGesture(panGestureConfig, derivedValue);
  const panGestureGeneratorResult = mediaViewerPanGesture.panGestureGenerator(0);
  c22 = panGestureGeneratorResult;
  const effect = obj.useEffect(() => {
    const obj = entranceAnimationDriver(pagerIndex[11]);
    return obj.dismissKeyboard();
  }, []);
  const items = [first, windowWidth, windowHeight, mediaItemHasSpoiler];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.unzoom({ animated: false });
    }
  }, items);
  const items1 = [panGestureGeneratorResult, sharedValue];
  const items2 = [mediaItemHasSpoiler, first, zoomed, overlayEnabled];
  const callback = obj.useCallback((simultaneousWithExternalGesture, simultaneousWithExternalGesture2) => {
    const Gesture = LegacyBaseButton.Gesture;
    const Simultaneous = Gesture.Simultaneous;
    const result = simultaneousWithExternalGesture.simultaneousWithExternalGesture(ref1, c22);
    const fn = function t(arg0, fail) {
      if (sharedValue.get()) {
        fail.fail();
      }
    };
    const obj = { isPaging: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 6857879304501;
    fn.__initData = __initData;
    const onTouchesDownResult = result.onTouchesDown(fn);
    return Simultaneous(onTouchesDownResult, simultaneousWithExternalGesture2.simultaneousWithExternalGesture(ref1, c22));
  }, items1);
  callback1 = obj.useCallback(() => {
    const tmp = mediaItemHasSpoiler;
    if (tmp) {
      const obj = useMediaViewerSources;
      obj.removeSpoiler(first);
    } else if (!zoomed.get()) {
      const result = overlayEnabled.set(!overlayEnabled.get());
    }
  }, items2);
  const items3 = [zoomed];
  callback2 = obj.useCallback((arg0) => {
    let x;
    let y;
    ({ x, y } = arg0);
    const current = ref.current;
    if (zoomed.get()) {
      if (current != null) {
        current.unzoom();
      }
    } else if (current != null) {
      const point = { x, y };
      current.zoomTo(point);
    }
  }, items3);
  const items4 = [tmp12Result, onLongPress];
  callback3 = obj.useCallback(() => {
    const tmp = __initData;
    if (!tmp) {
      if (onLongPress != null) {
        tmp2();
      }
    }
  }, items4);
  const items5 = [mediaItemHasSpoiler, , , , , ];
  let obscure;
  const useCallback = obj.useCallback;
  if (flattenSourceResult != null) {
    obscure = flattenSourceResult.obscure;
  }
  items5[1] = obscure;
  items5[2] = callback2;
  items5[3] = callback1;
  items5[4] = callback3;
  items5[5] = panGestureGeneratorResult;
  const callback4 = useCallback((onStartResult) => {
    let num = 10;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      num = 20;
    }
    const Gesture = tmp(5295).Gesture;
    const TapResult = Gesture.Tap();
    const runOnJSResult = TapResult.runOnJS(true);
    const enabledResult = runOnJSResult.enabled(!mediaItemHasSpoiler);
    const numberOfTapsResult = enabledResult.numberOfTaps(2);
    const maxDistanceResult = numberOfTapsResult.maxDistance(num);
    onStartResult = maxDistanceResult.onStart(callback2);
    const Gesture2 = tmp(5295).Gesture;
    const TapResult1 = Gesture2.Tap();
    let tmp6 = !mediaItemHasSpoiler;
    const enabled = TapResult1.runOnJS(true).enabled;
    TapResult1.runOnJS(true);
    if (mediaItemHasSpoiler) {
      obscure = undefined;
      if (obscure != null) {
        obscure = obscure.obscure;
      }
      tmp6 = true !== obscure;
    }
    const enabledResult1 = enabled(tmp6);
    const maxDistanceResult1 = enabledResult1.maxDistance(num);
    const onStartResult1 = maxDistanceResult1.onStart(callback1);
    const Gesture3 = tmp(5295).Gesture;
    const LongPressResult = Gesture3.LongPress();
    const runOnJSResult2 = LongPressResult.runOnJS(true);
    const enabledResult2 = runOnJSResult2.enabled(!mediaItemHasSpoiler);
    const onStartResult2 = enabledResult2.onStart(callback3);
    const Gesture4 = tmp(5295).Gesture;
    const Simultaneous = Gesture4.Simultaneous;
    const Gesture5 = tmp(5295).Gesture;
    const RaceResult = Gesture5.Race(onStartResult, c22);
    const Gesture6 = tmp(5295).Gesture;
    return Simultaneous(RaceResult, Gesture6.Exclusive(onStartResult, onStartResult1), onStartResult2);
  }, items5);
  const tmp8Result8 = entranceAnimationDriver(pagerIndex[9]);
  class N {
    constructor() {
      return sharedValue1.get() > 1;
    }
  }
  N.__closure = { zoomScale: sharedValue1 };
  N.__workletHash = 5407919468888;
  N.__initData = ref;
  class B {
    constructor(arg0, arg1) {
      if (arg1 !== arg0) {
        const result = zoomed.set(arg0);
        const result1 = isInteracting.set(arg0);
      }
    }
  }
  B.__closure = { zoomed, isInteracting };
  B.__workletHash = 8295874676092;
  B.__initData = ref1;
  const animatedReaction = tmp8Result8.useAnimatedReaction(N, B);
  const items6 = [entranceAnimationDriver, originLayout, panGestureConfig, renderMedia, sources, useItemVisible, windowWidth, windowHeight];
  const callback5 = obj.useCallback((index) => jsx(MediaViewerItemPresenterDefault, { useItemVisible, index, source: sources[index], originLayout, renderMedia, windowWidth, windowHeight, entranceAnimationDriver, panGestureConfig }), items6);
  const obj4 = { ref, zoomScale: sharedValue1, onCreateGesture: callback, gestureEnabled: !mediaItemHasSpoiler, contentWidth: width, contentHeight: height, maximumZoomScale, children: renderMedia(tmp11Result2, obj5) };
  obj5 = { selectedPage: pagerIndex, onPageChanged: tmp3, isPaging: sharedValue, pageCount: sources.length, onCreateGesture: callback4, onRenderPage: callback5, width: windowWidth, height: windowHeight, gestureRef: ref1, gestureEnabled: derivedValue };
  const tmp11Result = onLongPress(pagerIndex[17]);
  tmp11Result2 = onLongPress(pagerIndex[16]);
  const merged = Object.assign(onScrollWorklets);
  return renderMedia(tmp11Result, obj4);
}));
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerPager.tsx");

export default memoResult;
