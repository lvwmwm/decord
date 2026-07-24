// Module ID: 12282
// Function ID: 95933
// Name: MediaViewerItemPresenter
// Dependencies: [31, 27, 33, 12281, 8319, 12280, 3991, 3992, 2]
// Exports: default

// Module 12282 (MediaViewerItemPresenter)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ View: closure_4, StyleSheet: closure_5 } = get_ActivityIndicator);
let closure_7 = { platformStyles: { position: "absolute", width: "100%", height: "100%" } };
let closure_8 = { code: "function MediaViewerItemPresenterTsx1(){const{entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,0]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}" };
let result = require("jsxProd").fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemPresenter.tsx");

export default function MediaViewerItemPresenter(windowHeight) {
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let loads;
  let originLayout;
  let renderMedia;
  let source;
  let windowWidth;
  ({ source, originLayout, renderMedia, windowWidth } = windowHeight);
  windowHeight = windowHeight.windowHeight;
  const entranceAnimationDriver = windowHeight.entranceAnimationDriver;
  const index = windowHeight.index;
  const panGestureConfig = windowHeight.panGestureConfig;
  let num4;
  let diff2;
  let diff3;
  let width2;
  let height2;
  let obj = windowWidth(entranceAnimationDriver[3]);
  const entranceAnimation = obj.useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  const MediaViewerSourcesStore = windowWidth(entranceAnimationDriver[4]).MediaViewerSourcesStore;
  const field = MediaViewerSourcesStore.useField("spoilerIndexes");
  let items = [index, field];
  const memo = index.useMemo(() => field.has(index), items);
  const size = windowHeight(entranceAnimationDriver[5])(windowWidth, windowHeight, source);
  const width = size.width;
  const height = size.height;
  const itemVisible = windowHeight.useItemVisible(index);
  let items1 = [];
  if (Array.isArray(source)) {
    if (loads <= 1) {
      obj = {};
      const _HermesInternal2 = HermesInternal;
      obj.key = "0:" + index + ":" + source[0].uri;
      obj.onLoadStart = handleLoadStart;
      obj.onLoad = handleLoad;
      obj.onError = handleError;
      obj.source = source[0];
      obj.style = num4.platformStyles;
      obj.index = index;
      obj.hasSpoiler = memo;
      obj.visible = itemVisible;
      obj.panGestureConfig = panGestureConfig;
      items1.push(renderMedia(obj));
    }
    if (loads >= 1) {
      obj = {};
      const _HermesInternal3 = HermesInternal;
      obj.key = "1:" + index + ":" + source[0].uri;
      obj.source = source[1];
      obj.style = num4.platformStyles;
      obj.onLoad = handleLoad;
      obj.onError = handleError;
      let str5 = "auto";
      if (tmp7) {
        str5 = "none";
      }
      obj.pointerEvents = str5;
      obj.fadeDuration = 0;
      obj.fade = false;
      obj.index = index;
      obj.hasSpoiler = memo;
      obj.visible = itemVisible;
      obj.panGestureConfig = panGestureConfig;
      items1.push(renderMedia(obj));
    }
  } else {
    const obj1 = {};
    const _HermesInternal = HermesInternal;
    obj1.key = "0:" + index + ":" + source.uri;
    obj1.onLoadStart = handleLoadStart;
    obj1.onLoad = handleLoad;
    obj1.onError = handleError;
    obj1.source = source;
    obj1.style = num4.platformStyles;
    obj1.index = index;
    obj1.hasSpoiler = memo;
    obj1.visible = itemVisible;
    obj1.panGestureConfig = panGestureConfig;
    items1.push(renderMedia(obj1));
  }
  const result = width / height;
  let diff = originLayout.x - (width - originLayout.width) / 2 - (windowWidth - width) / 2;
  diff2 = diff;
  const result1 = (windowHeight - height) / 2;
  let diff1 = originLayout.y - (height - originLayout.height) / 2 - result1;
  diff3 = diff1;
  width2 = width;
  height2 = height;
  if ("cover" === originLayout.resizeMode) {
    width2 = originLayout.width;
    height2 = originLayout.height;
    diff2 = originLayout.x - (windowWidth - width) / 2;
    diff3 = originLayout.y - result1;
    num4 = 1;
    num4 = 1;
    diff = diff2;
    diff1 = diff3;
    let tmp16 = width2;
    let tmp17 = height2;
  } else {
    let num3 = 1;
    if (result > tmp12) {
      num3 = result;
    }
    num4 = originLayout.width / width * num3;
    tmp16 = width;
    tmp17 = height;
  }
  let obj3 = windowWidth(entranceAnimationDriver[6]);
  class O {
    constructor() {
      interpolateProxy = function interpolateProxy(arg0, items) {
        return windowWidth(entranceAnimationDriver[6]).interpolate(closure_0, arg0, items, windowWidth(entranceAnimationDriver[6]).Extrapolation.CLAMP);
      };
      get = entranceAnimationDriver.get();
      obj = { height: interpolateProxy([0, 1], items), width: interpolateProxy([0, 1], items1), top: interpolateProxy([0, 1], items2), left: interpolateProxy([0, 1], items3), borderRadius: interpolateProxy([0, 0.25], [16, 0]) };
      items = [, ];
      items[0] = height;
      items[1] = height;
      items1 = [, ];
      items1[0] = width;
      items1[1] = width;
      items2 = [, ];
      items2[0] = closure_9;
      items2[1] = 0;
      items3 = [, ];
      items3[0] = width;
      items3[1] = 0;
      obj = { scale: interpolateProxy([0, 1], items4) };
      items4 = [, ];
      items4[0] = c7;
      items4[1] = 1;
      items5 = [];
      items5[0] = obj;
      obj.transform = items5;
      return obj;
    }
  }
  const obj2 = { entranceAnimationDriver, interpolate: windowWidth(entranceAnimationDriver[6]).interpolate, Extrapolation: windowWidth(entranceAnimationDriver[6]).Extrapolation, startHeight: tmp17, sourceHeight: height, startWidth: tmp16, sourceWidth: width, startTranslateY: diff1, startTranslateX: diff, startScale: num4 };
  O.__closure = obj2;
  O.__workletHash = 15052076990644;
  O.__initData = diff2;
  let items2 = [windowWidth, windowHeight, width, height];
  const animatedStyle = obj3.useAnimatedStyle(O);
  const memo1 = index.useMemo(() => {
    const container = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    const child = { width, height };
    return width.create({ container, child, presenter: { position: "relative", overflow: "hidden", opacity: 1 } });
  }, items2);
  obj3 = { collapsable: false, style: memo1.container };
  let items3 = [memo1.presenter, animatedStyle];
  obj3.children = height(field, { style: memo1.child, children: height(windowHeight(entranceAnimationDriver[7]), { style: items3, children: items1 }) });
  return height(field, obj3);
};
