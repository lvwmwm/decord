// Module ID: 12279
// Function ID: 95901
// Name: MediaViewerItem
// Dependencies: [57, 31, 27, 33, 477, 3989, 12280, 12281, 8320, 8319, 9573, 5217, 12282, 10612, 2]

// Module 12279 (MediaViewerItem)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import set from "get ActivityIndicator";

const require = arg1;
set = set.isAndroid();
let result = set.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItem.tsx");

export const MediaViewerItem = importAllResult.memo((index) => {
  let closure_10;
  let closure_13;
  let entranceAnimationDriver;
  let originLayout;
  let renderMedia;
  let source;
  let tmp10;
  let tmp4;
  let useItemVisible;
  let zoomed;
  index = index.index;
  const onLongPress = index.onLongPress;
  const panGestureConfig = index.panGestureConfig;
  const panGesture = index.panGesture;
  ({ source, zoomed } = index);
  const windowWidth = index.windowWidth;
  const windowHeight = index.windowHeight;
  let obscure;
  let field;
  let memo;
  let c19;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let closure_24;
  ({ entranceAnimationDriver, originLayout, renderMedia, useItemVisible } = index);
  let closure_7 = zoomed.useRef(windowWidth);
  let closure_8 = zoomed.useRef(windowHeight);
  let tmp = panGesture(zoomed.useState(windowWidth), 2);
  const first = tmp[0];
  let closure_9 = tmp[1];
  [tmp4, closure_10] = panGesture(zoomed.useState(windowHeight), 2);
  const effect = zoomed.useEffect(() => index(panGestureConfig[5]).dismissKeyboard(), []);
  const items = [windowWidth, windowHeight];
  const effect1 = zoomed.useEffect(() => {
    const timeout = setTimeout(() => {
      outer1_9(outer1_5);
      outer1_10(outer1_6);
      outer1_7.current = outer1_5;
      outer1_8.current = outer1_6;
    }, 20);
    return () => clearTimeout(closure_0);
  }, items);
  const maximumZoomScale = onLongPress(panGestureConfig[6])(first, tmp4, source).maximumZoomScale;
  const ref = zoomed.useRef(null);
  const ref1 = zoomed.useRef(null);
  let tmp3 = panGesture(zoomed.useState(windowHeight), 2);
  [tmp10, closure_13] = panGesture(zoomed.useState(false), 2);
  const callback = zoomed.useCallback((arg0, arg1) => {
    if (null != ref.current) {
      const size = { width: ref.current, height: ref2.current };
      const result = size.width / 2;
      const result1 = size.height / 2;
      const current = ref.current;
      const scrollResponder = current.getScrollResponder();
      let obj = { x: arg0 - result / 2, y: arg1 - result1 / 2, width: result, height: result1, animated: true };
      const result2 = scrollResponder.scrollResponderZoomTo(obj);
    } else if (null !== ref1.current) {
      const current2 = ref1.current;
      if (null != current2) {
        obj = { x: arg0, y: arg1 };
        current2.zoomTo(obj);
      }
    }
  }, []);
  const callback1 = zoomed.useCallback(() => {
    let height;
    let width;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    if (null != ref.current) {
      let obj = { width: ref.current, height: ref2.current };
      const current2 = ref.current;
      ({ width, height } = obj);
      const scrollResponder = current2.getScrollResponder();
      obj = { x: 0, y: 0, width, height, animated: flag };
      const result = scrollResponder.scrollResponderZoomTo(obj);
    } else if (null !== ref1.current) {
      const current = ref1.current;
      obj = { animated: flag };
      current.unzoom(obj);
    }
  }, []);
  const items1 = [zoomed, panGestureConfig];
  const callback2 = zoomed.useCallback((nativeEvent) => {
    const result = zoomed.set(tmp);
    const isInteracting = panGestureConfig.isInteracting;
    const result1 = isInteracting.set(tmp);
    let tmp4 = closure_7;
    if (!closure_7) {
      const useEntranceAnimationState = index(panGestureConfig[7]).useEntranceAnimationState;
      tmp4 = !useEntranceAnimationState.getState().isComplete;
    }
    if (!tmp4) {
      tmp4 = tmp;
    }
    if (!tmp4) {
      callback(true);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        outer1_13(false);
      }, 500);
    }
  }, items1);
  let obj = index(panGestureConfig[8]);
  let flattenSourceResult = obj.flattenSource(source);
  if (null == flattenSourceResult) {
    flattenSourceResult = {};
  }
  obscure = flattenSourceResult.obscure;
  const MediaViewerSourcesStore = index(panGestureConfig[9]).MediaViewerSourcesStore;
  field = MediaViewerSourcesStore.useField("spoilerIndexes");
  const items2 = [index, field];
  memo = zoomed.useMemo(() => field.has(index), items2);
  const tmp16 = onLongPress(panGestureConfig[10])(flattenSourceResult.channelId);
  c19 = tmp16;
  const items3 = [memo, index, onLongPress, tmp16];
  callback3 = zoomed.useCallback(() => {
    if (memo) {
      index(panGestureConfig[9]).removeSpoiler(index);
      const obj = index(panGestureConfig[9]);
    } else {
      let tmp = c19;
      if (!c19) {
        tmp = null == onLongPress;
      }
      if (!tmp) {
        onLongPress();
      }
    }
  }, items3);
  const items4 = [zoomed, panGestureConfig];
  callback4 = zoomed.useCallback(() => {
    let overlayEnabled;
    let overlayEnabled2;
    if (!zoomed.get()) {
      ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = panGestureConfig);
      const result = overlayEnabled.set(!overlayEnabled2.get());
    }
  }, items4);
  const items5 = [callback1, callback, zoomed];
  callback5 = zoomed.useCallback((arg0) => {
    let absoluteX;
    let absoluteY;
    ({ absoluteX, absoluteY } = arg0);
    if (zoomed.get()) {
      callback1();
    } else if (!zoomed.get()) {
      callback(absoluteX, absoluteY);
    }
  }, items5);
  const items6 = [index];
  callback6 = zoomed.useCallback(() => {
    index(panGestureConfig[9]).removeSpoiler(index);
  }, items6);
  const items7 = [callback5, callback3, callback6, memo, obscure, panGesture, callback4];
  const memo1 = zoomed.useMemo(() => {
    const Gesture = index(panGestureConfig[11]).Gesture;
    const TapResult = Gesture.Tap();
    const runOnJSResult = Gesture.Tap().runOnJS(true);
    const enabledResult = Gesture.Tap().runOnJS(true).enabled(!memo);
    const numberOfTapsResult = Gesture.Tap().runOnJS(true).enabled(!memo).numberOfTaps(2);
    let num = 10;
    let num2 = 10;
    if (obj5.isAndroid()) {
      num2 = 20;
    }
    obj5 = index(panGestureConfig[4]);
    const maxDistanceResult = numberOfTapsResult.maxDistance(num2);
    const Gesture2 = index(panGestureConfig[11]).Gesture;
    const onStartResult = numberOfTapsResult.maxDistance(num2).onStart(callback5);
    const TapResult1 = Gesture2.Tap();
    const runOnJSResult1 = Gesture2.Tap().runOnJS(true);
    const enabledResult1 = Gesture2.Tap().runOnJS(true).enabled(!memo);
    const numberOfTapsResult1 = Gesture2.Tap().runOnJS(true).enabled(!memo).numberOfTaps(1);
    let num3 = num;
    if (obj11.isAndroid()) {
      num3 = 20;
    }
    obj11 = index(panGestureConfig[4]);
    const maxDistanceResult1 = numberOfTapsResult1.maxDistance(num3);
    const Gesture3 = index(panGestureConfig[11]).Gesture;
    const onStartResult1 = numberOfTapsResult1.maxDistance(num3).onStart(callback4);
    const TapResult2 = Gesture3.Tap();
    let tmp3 = memo;
    if (memo) {
      tmp3 = !obscure;
    }
    const runOnJSResult2 = Gesture3.Tap().runOnJS(true);
    const enabledResult2 = Gesture3.Tap().runOnJS(true).enabled(tmp3);
    const numberOfTapsResult2 = Gesture3.Tap().runOnJS(true).enabled(tmp3).numberOfTaps(1);
    if (obj17.isAndroid()) {
      num = 20;
    }
    obj17 = index(panGestureConfig[4]);
    const maxDistanceResult2 = numberOfTapsResult2.maxDistance(num);
    const Gesture4 = index(panGestureConfig[11]).Gesture;
    const onStartResult2 = numberOfTapsResult2.maxDistance(num).onStart(callback6);
    const Gesture5 = index(panGestureConfig[11]).Gesture;
    const ExclusiveResult = Gesture4.Exclusive(numberOfTapsResult2.maxDistance(num).onStart(callback6), onStartResult, onStartResult1);
    const LongPressResult = Gesture5.LongPress();
    const runOnJSResult3 = Gesture5.LongPress().runOnJS(true);
    const enabledResult3 = Gesture5.LongPress().runOnJS(true).enabled(!memo);
    const Gesture6 = index(panGestureConfig[11]).Gesture;
    return Gesture6.Simultaneous(ExclusiveResult, Gesture5.LongPress().runOnJS(true).enabled(!memo).onStart(callback3), panGesture);
  }, items7);
  closure_24 = zoomed.useRef(false);
  const items8 = [callback1, first, tmp4];
  const effect2 = zoomed.useEffect(() => {
    if (ref3.current) {
      callback1(false);
    } else {
      ref3.current = true;
    }
  }, items8);
  obj = { gesture: memo1, children: windowHeight(onLongPress(panGestureConfig[12]), { entranceAnimationDriver, index, originLayout, panGestureConfig, renderMedia, source, windowWidth: first, windowHeight: tmp4, useItemVisible }) };
  const tmp23 = windowHeight(index(panGestureConfig[11]).GestureDetector, obj);
  if (closure_7) {
    obj = { ref: ref1 };
    const obj1 = { width: first, height: tmp4 };
    obj.style = obj1;
    obj.minimumZoomScale = 1;
    obj.maximumZoomScale = maximumZoomScale;
    obj.onZoomChanged = callback2;
    obj.children = tmp23;
    let tmp24Result = tmp24(onLongPress(panGestureConfig[13]), obj);
  } else {
    const obj2 = { ref, style: null, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, minimumZoomScale: 1, maximumZoomScale: null, centerContent: true, scrollEventThrottle: 16 };
    const obj3 = { width: first, height: tmp4 };
    obj2.style = obj3;
    obj2.maximumZoomScale = maximumZoomScale;
    obj2.onScroll = callback2;
    let str = "auto";
    if (tmp10) {
      str = "none";
    }
    obj2.pointerEvents = str;
    obj2.children = tmp23;
    tmp24Result = tmp24(windowWidth, obj2);
    const tmp25 = windowWidth;
  }
  return tmp24Result;
});
