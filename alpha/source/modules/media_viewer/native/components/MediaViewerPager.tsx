// Module ID: 14939
// Function ID: 14940
// Name: MediaViewerPager
// Dependencies: [32, 19, 21, 8963, 8962, 10324, 14933, 1652, 14931, 5330, 5426, 8958, 1377, 14935, 14940, 14941, 2]

// Module 14939 (MediaViewerPager)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5426 */;
import useMediaViewerSources from "useMediaViewerSources" /* 8958 */;
import MediaViewerItemPresenterDefault from "MediaViewerItemPresenter" /* 14935 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let failResult;

const jsx = Fragment.jsx;
let closure_6 = { code: "(function MediaViewerPagerTsx1(){let[zoomScale,isClosing]=this.__closure;return zoomScale.get()<=1&&!isClosing.get();})" };
let closure_7 = { code: "(function MediaViewerPagerTsx2(_,manager){let[isPaging]=this.__closure;if(isPaging.get())manager.fail();})" };
let closure_8 = { code: "(function MediaViewerPagerTsx3(){let[zoomScale]=this.__closure;return zoomScale.get()>1;})" };
let closure_9 = { code: "(function MediaViewerPagerTsx4(isZoomed,previous){let[zoomed,isInteracting]=this.__closure;if(previous===isZoomed)return;zoomed.set(isZoomed);isInteracting.set(isZoomed);})" };
const memoResult = react.memo(function MediaViewerPager(entranceAnimationDriver) {
  let height;
  let isClosing;
  let isInteracting;
  let maximumZoomScale;
  let obj5;
  let onScrollWorklets;
  let pagerIndex;
  let tmp11Result2;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
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
  let overlayEnabled;
  let c19;
  let callback1;
  let callback2;
  let callback3;
  let obj = sources;
  let tmp = panGestureConfig(sources.useState(() => pagerIndex.get()), 2);
  const first = tmp[0];
  const tmp4 = sources[first];
  let flattenSourceResult;
  const tmp3 = tmp[1];
  if (null != tmp4) {
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
  ({ width, height, maximumZoomScale } = onLongPress(pagerIndex[6])(windowWidth, windowHeight, tmp4));
  onLongPress(pagerIndex[6])(windowWidth, windowHeight, tmp4);
  ref = obj.useRef(null);
  ref1 = obj.useRef(undefined);
  const tmp8Result = entranceAnimationDriver(pagerIndex[7]);
  sharedValue = tmp8Result.useSharedValue(false);
  const tmp8Result5 = entranceAnimationDriver(pagerIndex[7]);
  const sharedValue1 = tmp8Result5.useSharedValue(1);
  overlayEnabled = panGestureConfig.overlayEnabled;
  ({ isInteracting, isClosing } = panGestureConfig);
  let items = [originLayout, sharedValue1, isClosing];
  let c0;
  let c1;
  [tmp20, tmp21, tmp22] = items;
  const tmp8Result6 = entranceAnimationDriver(pagerIndex[7]);
  class MediaViewerPagerTsx1 {
    constructor() {
      const tmp = _undefined.get() <= 1 && !_undefined2.get();
      return tmp;
    }
  }
  let items1 = [tmp21, tmp22];
  MediaViewerPagerTsx1.__closure = items1;
  MediaViewerPagerTsx1.__workletHash = 2156756597178;
  MediaViewerPagerTsx1.__initData = tmp20;
  const derivedValue = tmp8Result6.useDerivedValue(MediaViewerPagerTsx1);
  const tmp8Result7 = entranceAnimationDriver(pagerIndex[8]);
  const mediaViewerPanGesture = tmp8Result7.useMediaViewerPanGesture(panGestureConfig, derivedValue);
  const panGestureGeneratorResult = mediaViewerPanGesture.panGestureGenerator(0);
  c19 = panGestureGeneratorResult;
  const effect = obj.useEffect(() => {
    const obj = entranceAnimationDriver(pagerIndex[9]);
    return obj.dismissKeyboard();
  }, []);
  const items2 = [first, windowWidth, windowHeight, mediaItemHasSpoiler];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.unzoom({ animated: false });
    }
  }, items2);
  const items3 = [panGestureGeneratorResult, sharedValue];
  const items4 = [mediaItemHasSpoiler, first, zoomed, overlayEnabled];
  const callback = obj.useCallback((simultaneousWithExternalGesture, simultaneousWithExternalGesture2) => {
    let tmp3;
    let tmp4;
    const Gesture = LegacyBaseButton.Gesture;
    const Simultaneous = Gesture.Simultaneous;
    const result = simultaneousWithExternalGesture.simultaneousWithExternalGesture(ref1, c19);
    const items = [closure_7, sharedValue];
    let c0;
    [tmp3, tmp4] = items;
    const tmp = ref1;
    const tmp2 = c19;
    class MediaViewerPagerTsx2 {
      constructor(arg0, arg1) {
        if (closure_0.get()) {
          tmp = simultaneousWithExternalGesture2;
          failResult = simultaneousWithExternalGesture2.fail();
        }
        return;
      }
    }
    const items1 = [tmp4];
    MediaViewerPagerTsx2.__closure = items1;
    MediaViewerPagerTsx2.__workletHash = 6628945464135;
    MediaViewerPagerTsx2.__initData = tmp3;
    const onTouchesDownResult = result.onTouchesDown(MediaViewerPagerTsx2);
    return Simultaneous(onTouchesDownResult, simultaneousWithExternalGesture2.simultaneousWithExternalGesture(tmp, tmp2));
  }, items3);
  callback1 = obj.useCallback(() => {
    const tmp = mediaItemHasSpoiler;
    if (tmp) {
      const obj = useMediaViewerSources;
      obj.removeSpoiler(first);
    } else if (!zoomed.get()) {
      const result = overlayEnabled.set(!overlayEnabled.get());
    }
  }, items4);
  const items5 = [zoomed];
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
  }, items5);
  const items6 = [tmp12Result, onLongPress];
  callback3 = obj.useCallback(() => {
    const tmp = closure_14;
    if (!tmp) {
      if (onLongPress != null) {
        tmp2();
      }
    }
  }, items6);
  const items7 = [mediaItemHasSpoiler, , , , , ];
  let obscure;
  const useCallback = obj.useCallback;
  if (flattenSourceResult != null) {
    obscure = flattenSourceResult.obscure;
  }
  items7[1] = obscure;
  items7[2] = callback2;
  items7[3] = callback1;
  items7[4] = callback3;
  items7[5] = panGestureGeneratorResult;
  const callback4 = useCallback((onFinalizeResult) => {
    let num = 10;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      num = 20;
    }
    const Gesture = tmp(5426).Gesture;
    const TapResult = Gesture.Tap();
    const runOnJSResult = TapResult.runOnJS(true);
    const enabledResult = runOnJSResult.enabled(!mediaItemHasSpoiler);
    const numberOfTapsResult = enabledResult.numberOfTaps(2);
    const maxDistanceResult = numberOfTapsResult.maxDistance(num);
    const onStartResult = maxDistanceResult.onStart(callback2);
    const Gesture2 = tmp(5426).Gesture;
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
    const Gesture3 = tmp(5426).Gesture;
    const LongPressResult = Gesture3.LongPress();
    const runOnJSResult2 = LongPressResult.runOnJS(true);
    const enabledResult2 = runOnJSResult2.enabled(!mediaItemHasSpoiler);
    const onStartResult2 = enabledResult2.onStart(callback3);
    const Gesture4 = tmp(5426).Gesture;
    const Simultaneous = Gesture4.Simultaneous;
    const Gesture5 = tmp(5426).Gesture;
    const RaceResult = Gesture5.Race(onFinalizeResult, c19);
    const Gesture6 = tmp(5426).Gesture;
    return Simultaneous(RaceResult, Gesture6.Exclusive(onStartResult, onStartResult1), onStartResult2);
  }, items7);
  const items8 = [windowWidth, sharedValue1];
  c0 = undefined;
  [tmp33, tmp34] = items8;
  const tmp8Result8 = entranceAnimationDriver(pagerIndex[7]);
  class MediaViewerPagerTsx3 {
    constructor() {
      return _undefined.get() > 1;
    }
  }
  const items9 = [tmp34];
  MediaViewerPagerTsx3.__closure = items9;
  MediaViewerPagerTsx3.__workletHash = 14562595785907;
  MediaViewerPagerTsx3.__initData = tmp33;
  const items10 = [windowHeight, zoomed, isInteracting];
  c0 = undefined;
  c1 = undefined;
  [tmp35, tmp36, tmp37] = items10;
  class MediaViewerPagerTsx4 {
    constructor(arg0, arg1) {
      if (arg1 !== arg0) {
        const result = _undefined.set(arg0);
        const result1 = _undefined2.set(arg0);
      }
    }
  }
  const items11 = [tmp36, tmp37];
  MediaViewerPagerTsx4.__closure = items11;
  MediaViewerPagerTsx4.__workletHash = 3436017293841;
  MediaViewerPagerTsx4.__initData = tmp35;
  const animatedReaction = tmp8Result8.useAnimatedReaction(MediaViewerPagerTsx3, MediaViewerPagerTsx4);
  const items12 = [entranceAnimationDriver, originLayout, panGestureConfig, renderMedia, sources, useItemVisible, windowWidth, windowHeight];
  const callback5 = obj.useCallback((index) => jsx(MediaViewerItemPresenterDefault, { useItemVisible, index, source: sources[index], originLayout, renderMedia, windowWidth, windowHeight, entranceAnimationDriver, panGestureConfig }), items12);
  const obj4 = { ref, zoomScale: sharedValue1, onCreateGesture: callback, gestureEnabled: !mediaItemHasSpoiler, contentWidth: width, contentHeight: height, maximumZoomScale, children: renderMedia(tmp11Result2, obj5) };
  obj5 = { selectedPage: pagerIndex, onPageChanged: tmp3, isPaging: sharedValue, pageCount: sources.length, onCreateGesture: callback4, onRenderPage: callback5, width: windowWidth, height: windowHeight, gestureRef: ref1, gestureEnabled: derivedValue };
  const tmp11Result = onLongPress(pagerIndex[14]);
  tmp11Result2 = onLongPress(pagerIndex[15]);
  const merged = Object.assign(onScrollWorklets);
  return renderMedia(tmp11Result, obj4);
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerPager.tsx");

export default memoResult;
