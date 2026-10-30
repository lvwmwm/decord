// Module ID: 14766
// Function ID: 14767
// Name: MediaViewerPager
// Dependencies: [32, 19, 21, 8831, 8830, 10174, 14760, 5090, 14758, 5202, 5298, 8826, 1376, 14762, 14767, 14768, 2]

// Module 14766 (MediaViewerPager)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import useMediaViewerSources from "useMediaViewerSources" /* 8826 */;
import MediaViewerItemPresenterDefault from "MediaViewerItemPresenter" /* 14762 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let onStartResult;

const jsx = Fragment.jsx;
let closure_6 = { code: "function MediaViewerPagerTsx1(){const{zoomScale,isClosing}=this.__closure;return zoomScale.get()<=1&&!isClosing.get();}" };
let closure_7 = { code: "function MediaViewerPagerTsx2(_,manager){const{isPaging}=this.__closure;if(isPaging.get())manager.fail();}" };
let closure_8 = { code: "function MediaViewerPagerTsx3(){const{zoomScale}=this.__closure;return zoomScale.get()>1;}" };
let closure_9 = { code: "function MediaViewerPagerTsx4(isZoomed,previous){const{zoomed,isInteracting}=this.__closure;if(previous===isZoomed)return;zoomed.set(isZoomed);isInteracting.set(isZoomed);}" };
const memoResult = react.memo(function MediaViewerPager(entranceAnimationDriver) {
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
  let closure_14;
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
    const obj2 = entranceAnimationDriver(pagerIndex[3]);
    flattenSourceResult = obj2.flattenSource(tmp4);
  }
  c12 = flattenSourceResult;
  const obj3 = entranceAnimationDriver(pagerIndex[4]);
  mediaItemHasSpoiler = obj3.useMediaItemHasSpoiler(first);
  let channelId;
  const tmp12 = onLongPress(pagerIndex[5]);
  if (flattenSourceResult != null) {
    channelId = flattenSourceResult.channelId;
  }
  const tmp12Result = tmp12(channelId);
  closure_14 = tmp12Result;
  ({ width, height, maximumZoomScale } = onLongPress(pagerIndex[6])(windowWidth, windowHeight, sources[first]));
  onLongPress(pagerIndex[6])(windowWidth, windowHeight, sources[first]);
  ref = obj.useRef(null);
  ref1 = obj.useRef(undefined);
  const tmp8Result = entranceAnimationDriver(pagerIndex[7]);
  sharedValue = tmp8Result.useSharedValue(false);
  const tmp8Result5 = entranceAnimationDriver(pagerIndex[7]);
  sharedValue1 = tmp8Result5.useSharedValue(1);
  isInteracting = panGestureConfig.isInteracting;
  isClosing = panGestureConfig.isClosing;
  overlayEnabled = panGestureConfig.overlayEnabled;
  let fn = function z() {
    const tmp = sharedValue1.get() <= 1 && !isClosing.get();
    return tmp;
  };
  fn.__closure = { zoomScale: sharedValue1, isClosing };
  fn.__workletHash = 2867564605891;
  fn.__initData = originLayout;
  const tmp8Result6 = entranceAnimationDriver(pagerIndex[7]);
  const derivedValue = tmp8Result6.useDerivedValue(fn);
  const tmp8Result7 = entranceAnimationDriver(pagerIndex[8]);
  const mediaViewerPanGesture = tmp8Result7.useMediaViewerPanGesture(panGestureConfig, derivedValue);
  const panGestureGeneratorResult = mediaViewerPanGesture.panGestureGenerator(0);
  c22 = panGestureGeneratorResult;
  const effect = obj.useEffect(() => {
    const obj = entranceAnimationDriver(pagerIndex[9]);
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
    const fn = function o(arg0, fail) {
      if (sharedValue.get()) {
        fail.fail();
      }
    };
    const obj = { isPaging: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 119388263678;
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
    const tmp = closure_14;
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
    const Gesture = tmp(5298).Gesture;
    const TapResult = Gesture.Tap();
    const runOnJSResult = TapResult.runOnJS(true);
    const enabledResult = runOnJSResult.enabled(!mediaItemHasSpoiler);
    const numberOfTapsResult = enabledResult.numberOfTaps(2);
    const maxDistanceResult = numberOfTapsResult.maxDistance(num);
    onStartResult = maxDistanceResult.onStart(callback2);
    const Gesture2 = tmp(5298).Gesture;
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
    const Gesture3 = tmp(5298).Gesture;
    const LongPressResult = Gesture3.LongPress();
    const runOnJSResult2 = LongPressResult.runOnJS(true);
    const enabledResult2 = runOnJSResult2.enabled(!mediaItemHasSpoiler);
    const onStartResult2 = enabledResult2.onStart(callback3);
    const Gesture4 = tmp(5298).Gesture;
    const Simultaneous = Gesture4.Simultaneous;
    const Gesture5 = tmp(5298).Gesture;
    const RaceResult = Gesture5.Race(onStartResult, c22);
    const Gesture6 = tmp(5298).Gesture;
    return Simultaneous(RaceResult, Gesture6.Exclusive(onStartResult, onStartResult1), onStartResult2);
  }, items5);
  const tmp8Result8 = entranceAnimationDriver(pagerIndex[7]);
  class Q {
    constructor() {
      return sharedValue1.get() > 1;
    }
  }
  Q.__closure = { zoomScale: sharedValue1 };
  Q.__workletHash = 14368392963786;
  Q.__initData = windowWidth;
  class N {
    constructor(arg0, arg1) {
      if (arg1 !== arg0) {
        const result = zoomed.set(arg0);
        const result1 = isInteracting.set(arg0);
      }
    }
  }
  N.__closure = { zoomed, isInteracting };
  N.__workletHash = 16737291391784;
  N.__initData = windowHeight;
  const animatedReaction = tmp8Result8.useAnimatedReaction(Q, N);
  const items6 = [entranceAnimationDriver, originLayout, panGestureConfig, renderMedia, sources, useItemVisible, windowWidth, windowHeight];
  const callback5 = obj.useCallback((index) => jsx(MediaViewerItemPresenterDefault, { useItemVisible, index, source: sources[index], originLayout, renderMedia, windowWidth, windowHeight, entranceAnimationDriver, panGestureConfig }), items6);
  const obj4 = { ref, zoomScale: sharedValue1, onCreateGesture: callback, gestureEnabled: !mediaItemHasSpoiler, contentWidth: width, contentHeight: height, maximumZoomScale, children: renderMedia(tmp11Result2, obj5) };
  obj5 = { selectedPage: pagerIndex, onPageChanged: tmp3, isPaging: sharedValue, pageCount: sources.length, onCreateGesture: callback4, onRenderPage: callback5, width: windowWidth, height: windowHeight, gestureRef: ref1, gestureEnabled: derivedValue };
  const tmp11Result = onLongPress(pagerIndex[14]);
  tmp11Result2 = onLongPress(pagerIndex[15]);
  const merged = Object.assign(onScrollWorklets);
  return renderMedia(tmp11Result, obj4);
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerPager.tsx");

export default memoResult;
