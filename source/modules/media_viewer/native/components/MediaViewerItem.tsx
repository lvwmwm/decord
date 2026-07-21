// Module ID: 12134
// Function ID: 93484
// Name: MediaViewerItem
// Dependencies: []

// Module 12134 (MediaViewerItem)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).isAndroid();
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((index) => {
  let entranceAnimationDriver;
  let originLayout;
  let renderMedia;
  let source;
  let tmp10;
  let tmp4;
  let useItemVisible;
  let zoomed;
  index = index.index;
  const arg1 = index;
  const onLongPress = index.onLongPress;
  const importDefault = onLongPress;
  const panGestureConfig = index.panGestureConfig;
  const dependencyMap = panGestureConfig;
  const panGesture = index.panGesture;
  let callback = panGesture;
  ({ source, zoomed } = index);
  const windowWidth = index.windowWidth;
  const ScrollView = windowWidth;
  const windowHeight = index.windowHeight;
  const jsx = windowHeight;
  let obscure;
  let field;
  let memo;
  let tmp16;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let closure_24;
  ({ entranceAnimationDriver, originLayout, renderMedia, useItemVisible } = index);
  let closure_7 = importAllResult.useRef(windowWidth);
  let closure_8 = importAllResult.useRef(windowHeight);
  const tmp = callback(zoomed.useState(windowWidth), 2);
  const first = tmp[0];
  let closure_9 = tmp[1];
  [tmp4, closure_10] = callback(zoomed.useState(windowHeight), 2);
  const effect = importAllResult.useEffect(() => index(panGestureConfig[5]).dismissKeyboard(), []);
  const items = [windowWidth, windowHeight];
  const effect1 = importAllResult.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_5);
      callback2(closure_6);
      closure_7.current = closure_5;
      closure_8.current = closure_6;
    }, 20);
    return () => clearTimeout(closure_0);
  }, items);
  const maximumZoomScale = importDefault(dependencyMap[6])(first, tmp4, source).maximumZoomScale;
  const ref = importAllResult.useRef(null);
  const ref1 = importAllResult.useRef(null);
  const tmp3 = callback(zoomed.useState(windowHeight), 2);
  [tmp10, closure_13] = callback(zoomed.useState(false), 2);
  callback = importAllResult.useCallback((arg0, arg1) => {
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
  const callback1 = importAllResult.useCallback(() => {
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
      obj = { width, height, animated: flag };
      const result = scrollResponder.scrollResponderZoomTo(obj);
    } else if (null !== ref1.current) {
      const current = ref1.current;
      obj = { animated: flag };
      current.unzoom(obj);
    }
  }, []);
  const items1 = [zoomed, panGestureConfig];
  const callback2 = importAllResult.useCallback((nativeEvent) => {
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
        callback(false);
      }, 500);
    }
  }, items1);
  let obj = arg1(dependencyMap[8]);
  let flattenSourceResult = obj.flattenSource(source);
  if (null == flattenSourceResult) {
    flattenSourceResult = {};
  }
  obscure = flattenSourceResult.obscure;
  const MediaViewerSourcesStore = arg1(dependencyMap[9]).MediaViewerSourcesStore;
  field = MediaViewerSourcesStore.useField("spoilerIndexes");
  const items2 = [index, field];
  memo = importAllResult.useMemo(() => field.has(index), items2);
  tmp16 = importDefault(dependencyMap[10])(flattenSourceResult.channelId);
  const items3 = [memo, index, onLongPress, tmp16];
  callback3 = importAllResult.useCallback(() => {
    if (memo) {
      index(panGestureConfig[9]).removeSpoiler(index);
      const obj = index(panGestureConfig[9]);
    } else {
      let tmp = tmp16;
      if (!tmp16) {
        tmp = null == onLongPress;
      }
      if (!tmp) {
        onLongPress();
      }
    }
  }, items3);
  const items4 = [zoomed, panGestureConfig];
  callback4 = importAllResult.useCallback(() => {
    let overlayEnabled;
    let overlayEnabled2;
    if (!zoomed.get()) {
      ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = panGestureConfig);
      const result = overlayEnabled.set(!overlayEnabled2.get());
    }
  }, items4);
  const items5 = [callback1, callback, zoomed];
  callback5 = importAllResult.useCallback((arg0) => {
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
  callback6 = importAllResult.useCallback(() => {
    index(panGestureConfig[9]).removeSpoiler(index);
  }, items6);
  const items7 = [callback5, callback3, callback6, memo, obscure, panGesture, callback4];
  const memo1 = importAllResult.useMemo(() => {
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
    const obj5 = index(panGestureConfig[4]);
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
    const obj11 = index(panGestureConfig[4]);
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
    const obj17 = index(panGestureConfig[4]);
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
  closure_24 = importAllResult.useRef(false);
  const items8 = [callback1, first, tmp4];
  const effect2 = importAllResult.useEffect(() => {
    if (ref3.current) {
      callback1(false);
    } else {
      ref3.current = true;
    }
  }, items8);
  obj = { gesture: memo1, children: jsx(importDefault(dependencyMap[12]), { entranceAnimationDriver, index, originLayout, panGestureConfig, renderMedia, source, windowWidth: first, windowHeight: tmp4, useItemVisible }) };
  const tmp23 = jsx(arg1(dependencyMap[11]).GestureDetector, obj);
  if (closure_7) {
    obj = { ref: ref1 };
    const obj1 = { width: first, height: tmp4 };
    obj.style = obj1;
    obj.minimumZoomScale = 1;
    obj.maximumZoomScale = maximumZoomScale;
    obj.onZoomChanged = callback2;
    obj.children = tmp23;
    let tmp24Result = tmp24(importDefault(dependencyMap[13]), obj);
  } else {
    const obj2 = { ref };
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
    tmp24Result = tmp24(ScrollView, obj2);
    const tmp25 = ScrollView;
  }
  return tmp24Result;
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItem.tsx");

export const MediaViewerItem = memoResult;
