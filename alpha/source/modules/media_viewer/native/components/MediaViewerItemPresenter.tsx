// Module ID: 14935
// Function ID: 14936
// Name: MediaViewerItemPresenter
// Dependencies: [19, 17, 21, 1377, 5098, 14934, 8962, 14933, 1652, 14915, 14936, 2]
// Exports: default

// Module 14935 (MediaViewerItemPresenter)
import Fragment from "Fragment" /* 21 */;
import DeviceUtils from "DeviceUtils" /* 5098 */;
import MediaViewerEntranceJankExperiment from "MediaViewerEntranceJankExperiment" /* 14915 */;
import MediaViewerItemTransformPresenterDefault from "MediaViewerItemTransformPresenter" /* 14936 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let tmp;
const MediaViewerItemTransformPresenter = tmp(14936);
function MediaViewerItemPresenter(windowHeight) {
  let diff;
  let diff1;
  let entranceAnimationDriver;
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let height2;
  let index;
  let loads;
  let num3;
  let originLayout;
  let panGestureConfig;
  let renderMedia;
  let source;
  let str5;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let useItemVisible;
  let width2;
  let windowWidth;
  ({ source, originLayout, renderMedia, windowWidth } = windowHeight);
  windowHeight = windowHeight.windowHeight;
  ({ entranceAnimationDriver, index } = windowHeight);
  let width;
  ({ useItemVisible, panGestureConfig } = windowHeight);
  let obj = windowWidth(width[5]);
  const entranceAnimation = obj.useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  const obj2 = windowWidth(width[6]);
  const mediaItemHasSpoiler = obj2.useMediaItemHasSpoiler(index);
  size = windowHeight(width[7])(windowWidth, windowHeight, source);
  width = size.width;
  const height = size.height;
  const itemVisible = useItemVisible(index);
  const overlayEnabled = panGestureConfig.overlayEnabled;
  let items = [overlayEnabled];
  const callback = height.useCallback(() => {
    const result = overlayEnabled.set(!overlayEnabled.get());
  }, items);
  let items1 = [];
  const obj3 = height;
  if (Array.isArray(source)) {
    if (loads <= 1) {
      const _HermesInternal2 = HermesInternal;
      const push2 = items1.push;
      const obj4 = { key: "0:" + index + ":" + source[0].uri, onLoadStart: handleLoadStart, onLoad: handleLoad, onError: handleError, source: source[0], style: closure_7.platformStyles, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, onToggleOverlay: callback };
      push2(renderMedia(obj4));
    }
    if (loads >= 1) {
      const _HermesInternal3 = HermesInternal;
      const push3 = items1.push;
      const obj5 = { key: "1:" + index + ":" + source[0].uri, source: source[1], style: closure_7.platformStyles, onLoad: handleLoad, onError: handleError, pointerEvents: str5, fadeDuration: 0, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, onToggleOverlay: callback };
      str5 = "auto";
      if (loads <= 1) {
        str5 = "none";
      }
      push3(renderMedia(obj5));
    }
  } else {
    const _HermesInternal = HermesInternal;
    const push = items1.push;
    const obj6 = { key: "0:" + index + ":" + source.uri, onLoadStart: handleLoadStart, onLoad: handleLoad, onError: handleError, source, style: closure_7.platformStyles, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, onToggleOverlay: callback };
    push(renderMedia(obj6));
  }
  let result = width / height;
  const result1 = (windowHeight - height) / 2;
  if ("cover" === originLayout.resizeMode) {
    ({ width: width2, height: height2 } = originLayout);
    diff = originLayout.x - (windowWidth - width) / 2;
    diff1 = originLayout.y - result1;
    num3 = 1;
  } else {
    let num2 = 1;
    if (result > tmp15) {
      num2 = result;
    }
    diff = tmp16 - tmp17;
    diff1 = tmp19 - result1;
    num3 = originLayout.width / width * num2;
    height2 = height;
    width2 = width;
  }
  let items2 = [closure_9, entranceAnimationDriver, , , , , , , , , , ];
  const useAnimatedStyle = windowWidth(width[8]).useAnimatedStyle;
  windowWidth(width[8]);
  items2[2] = windowWidth(width[8]).interpolate;
  items2[3] = windowWidth(width[8]).Extrapolation;
  items2[4] = height2;
  items2[5] = height;
  items2[6] = width2;
  items2[7] = width;
  items2[8] = diff1;
  items2[9] = diff;
  items2[10] = num;
  items2[11] = num3;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items2;
  class MediaViewerItemPresenterTsx1 {
    constructor() {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      const value = _undefined.get();
      size = { height: uri(value, [0, 1], items, _undefined2.CLAMP), width: uri(value, [0, 1], items1, _undefined2.CLAMP), top: uri(value, [0, 1], items2, _undefined2.CLAMP), left: uri(value, [0, 1], items3, _undefined2.CLAMP), borderRadius: uri(value, [0, 0.25], items4, _undefined2.CLAMP), transform: items6 };
      items = [c3, c4];
      items1 = [c5, c6];
      items2 = [c7, 0];
      items3 = [c8, 0];
      items4 = [16, c9];
      const obj = { scale: uri(value, [0, 1], items5, _undefined2.CLAMP) };
      items5 = [c10, 1];
      items6 = [obj];
      return size;
    }
  }
  let items3 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
  MediaViewerItemPresenterTsx1.__closure = items3;
  MediaViewerItemPresenterTsx1.__workletHash = 5465877012081;
  MediaViewerItemPresenterTsx1.__initData = tmp23;
  let items4 = [windowWidth, windowHeight, width, height];
  const animatedStyle = useAnimatedStyle(MediaViewerItemPresenterTsx1);
  const memo = obj3.useMemo(() => {
    let size1;
    const obj = { container: size, child: size1, presenter: { position: "relative", overflow: "hidden", opacity: 1 } };
    size = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    size1 = { width, height };
    return StyleSheet.create(obj);
  }, items4);
  let items5 = [memo.presenter, animatedStyle];
  return <overlayEnabled collapsable={false} style={memo.container}>{null}</overlayEnabled>;
}
({ View: closure_4, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let closure_7 = { platformStyles: { position: "absolute", width: "100%", height: "100%" } };
let num = 0;
if (PlatformUtils.isAndroid()) {
  const _parseInt = parseInt;
  const _module2 = DeviceUtils;
  let num2 = 29;
  num = 0;
  if (29 === parseInt(_module2.getSystemVersion())) {
    num = StyleSheet.hairlineWidth;
  }
}
let closure_9 = { code: "(function MediaViewerItemPresenterTsx1(){let[entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,BORDER_RADIUS_END,startScale]=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,BORDER_RADIUS_END]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemPresenter.tsx");

export default function MediaViewerItemPresenterGuard(source) {
  const obj = MediaViewerEntranceJankExperiment;
  if (obj.useIsMediaViewerEntranceJankFixEnabled()) {
    let tmp4;
    const tmpResult = MediaViewerItemTransformPresenter;
    if (tmpResult.canPresentWithTransforms(source)) {
      MediaViewerItemTransformPresenterDefault;
      const merged = Object.assign(source);
      tmp4 = <tmp7 />;
    }
    return tmp4;
  }
  const merged1 = Object.assign(source);
  tmp4 = <MediaViewerItemPresenter />;
};
