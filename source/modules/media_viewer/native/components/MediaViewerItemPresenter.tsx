// Module ID: 12137
// Function ID: 93504
// Name: MediaViewerItemPresenter
// Dependencies: []
// Exports: default

// Module 12137 (MediaViewerItemPresenter)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let closure_7 = { platformStyles: { "Null": null, "Null": null, "Null": null } };
let closure_8 = { code: "function MediaViewerItemPresenterTsx1(){const{entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,0]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}" };
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemPresenter.tsx");

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
  const arg1 = windowWidth;
  windowHeight = windowHeight.windowHeight;
  const importDefault = windowHeight;
  const entranceAnimationDriver = windowHeight.entranceAnimationDriver;
  const dependencyMap = entranceAnimationDriver;
  const index = windowHeight.index;
  const React = index;
  const panGestureConfig = windowHeight.panGestureConfig;
  let closure_7;
  let closure_8;
  let diff3;
  let width2;
  let height2;
  let obj = arg1(dependencyMap[3]);
  const entranceAnimation = obj.useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  const MediaViewerSourcesStore = arg1(dependencyMap[4]).MediaViewerSourcesStore;
  const field = MediaViewerSourcesStore.useField("spoilerIndexes");
  const items = [index, field];
  const memo = React.useMemo(() => field.has(index), items);
  const size = importDefault(dependencyMap[5])(windowWidth, windowHeight, source);
  const width = size.width;
  const height = size.height;
  const jsx = height;
  const itemVisible = windowHeight.useItemVisible(index);
  const items1 = [];
  if (Array.isArray(source)) {
    if (loads <= 1) {
      obj = {};
      const _HermesInternal2 = HermesInternal;
      obj.key = "0:" + index + ":" + source[0].uri;
      obj.onLoadStart = handleLoadStart;
      obj.onLoad = handleLoad;
      obj.onError = handleError;
      obj.source = source[0];
      obj.style = closure_7.platformStyles;
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
      obj.style = closure_7.platformStyles;
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
    obj1.style = closure_7.platformStyles;
    obj1.index = index;
    obj1.hasSpoiler = memo;
    obj1.visible = itemVisible;
    obj1.panGestureConfig = panGestureConfig;
    items1.push(renderMedia(obj1));
  }
  const result = width / height;
  let diff = originLayout.x - (width - originLayout.width) / 2 - (windowWidth - width) / 2;
  closure_8 = diff;
  const result1 = (windowHeight - height) / 2;
  let diff1 = originLayout.y - (height - originLayout.height) / 2 - result1;
  diff3 = diff1;
  width2 = width;
  height2 = height;
  if ("cover" === originLayout.resizeMode) {
    width2 = originLayout.width;
    height2 = originLayout.height;
    const diff2 = originLayout.x - (windowWidth - width) / 2;
    closure_8 = diff2;
    diff3 = originLayout.y - result1;
    closure_7 = 1;
    let num4 = 1;
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
    closure_7 = num4;
    tmp16 = width;
    tmp17 = height;
  }
  let obj3 = arg1(dependencyMap[6]);
  class O {
    constructor() {
      interpolateProxy = function interpolateProxy(arg0, items) {
        return callback(closure_2[6]).interpolate(callback, arg0, items, callback(closure_2[6]).Extrapolation.CLAMP);
      };
      windowWidth = entranceAnimationDriver.get();
      obj = { height: interpolateProxy(["Text", "lc"], items), width: interpolateProxy(["Text", "lc"], items1), top: interpolateProxy(["Text", "lc"], items2), left: interpolateProxy(["Text", "lc"], items3), borderRadius: interpolateProxy([null, null], [0.532, 0.22]) };
      items = [, ];
      items[0] = height;
      items[1] = height;
      items1 = [, ];
      items1[0] = width;
      items1[1] = width;
      items2 = [, ];
      items2[0] = y;
      items2[1] = 0;
      items3 = [, ];
      items3[0] = width;
      items3[1] = 0;
      obj = { scale: interpolateProxy(["Text", "lc"], items4) };
      items4 = [, ];
      items4[0] = closure_7;
      items4[1] = 1;
      items5 = [];
      items5[0] = obj;
      obj.transform = items5;
      return obj;
    }
  }
  const obj2 = { entranceAnimationDriver, interpolate: arg1(dependencyMap[6]).interpolate, Extrapolation: arg1(dependencyMap[6]).Extrapolation, startHeight: tmp17, sourceHeight: height, startWidth: tmp16, sourceWidth: width, startTranslateY: diff1, startTranslateX: diff, startScale: num4 };
  O.__closure = obj2;
  O.__workletHash = 15052076990644;
  O.__initData = closure_8;
  const items2 = [windowWidth, windowHeight, width, height];
  const animatedStyle = obj3.useAnimatedStyle(O);
  const memo1 = React.useMemo(() => {
    const container = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    const child = { width, height };
    return width.create({ container, child, presenter: {} });
  }, items2);
  obj3 = { collapsable: false, style: memo1.container };
  const items3 = [memo1.presenter, animatedStyle];
  obj3.children = <field style={memo1.child}>{jsx(importDefault(dependencyMap[7]), { style: items3, children: items1 })}</field>;
  return <field {...obj3} />;
};
