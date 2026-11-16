// Module ID: 15069
// Function ID: 15070
// Name: MediaViewerItemTransformPresenter
// Dependencies: [19, 17, 21, 15067, 8945, 15066, 1652, 2]
// Exports: canPresentWithTransforms, default

// Module 15069 (MediaViewerItemTransformPresenter)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let obj2;
let tmp4;
let tmp5;
({ View: closure_4, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let obj = { platformStyles: { position: "absolute", width: "100%", height: "100%" }, presenter: obj2 };
obj2 = { overflow: "hidden", opacity: 1 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let items = [{ code: "(function toScale_MediaViewerItemTransformPresenterTsx1(size,finalSize){let[MIN_SCALE]=this.__closure;return finalSize>0?Math.max(size/finalSize,MIN_SCALE):1;})" }, 0.001];
let c0;
[tmp4, tmp5] = items;
function toScale(arg0, arg1) {
  let num = 1;
  if (arg1 > 0) {
    const _Math = Math;
    num = Math.max(arg0 / arg1, c0);
  }
  return num;
}
let items1 = [tmp5];
toScale.__closure = items1;
toScale.__workletHash = 3407744270152;
toScale.__initData = tmp4;
let closure_9 = { code: "(function MediaViewerItemTransformPresenterTsx2(){let[entranceAnimationDriver,interpolate,Extrapolation,startWidth,sourceWidth,startHeight,sourceHeight,startTranslateX,startTranslateY,startScale,toScale]=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}const width=interpolateProxy([0,1],[startWidth,sourceWidth]);const height=interpolateProxy([0,1],[startHeight,sourceHeight]);const left=interpolateProxy([0,1],[startTranslateX,0]);const top=interpolateProxy([0,1],[startTranslateY,0]);const scale=interpolateProxy([0,1],[startScale,1]);const scaleX=toScale(width,sourceWidth);const scaleY=toScale(height,sourceHeight);return{borderRadius:interpolateProxy([0,0.25],[16,0])/Math.sqrt(scaleX*scaleY),transform:[{translateX:left+(width-sourceWidth)/2},{translateY:top+(height-sourceHeight)/2},{scaleX:scale*scaleX},{scaleY:scale*scaleY}]};})" };
let closure_10 = { code: "(function MediaViewerItemTransformPresenterTsx3(){let[entranceAnimationDriver,toScale,interpolate,startWidth,sourceWidth,Extrapolation,startHeight,sourceHeight]=this.__closure;const entranceValue=entranceAnimationDriver.get();const scaleX=toScale(interpolate(entranceValue,[0,1],[startWidth,sourceWidth],Extrapolation.CLAMP),sourceWidth);const scaleY=toScale(interpolate(entranceValue,[0,1],[startHeight,sourceHeight],Extrapolation.CLAMP),sourceHeight);const cover=Math.max(scaleX,scaleY);return{transform:[{scaleX:cover/scaleX},{scaleY:cover/scaleY}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemTransformPresenter.tsx");

export default function MediaViewerItemTransformPresenter(windowHeight) {
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
  let tmp35;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let useItemVisible;
  let width2;
  let windowWidth;
  ({ source, originLayout, renderMedia, windowWidth } = windowHeight);
  windowHeight = windowHeight.windowHeight;
  ({ entranceAnimationDriver, index } = windowHeight);
  let width;
  let tmp2 = width;
  ({ useItemVisible, panGestureConfig } = windowHeight);
  obj = windowWidth(width[3]);
  const entranceAnimation = obj.useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  let obj2 = windowWidth(width[4]);
  const mediaItemHasSpoiler = obj2.useMediaItemHasSpoiler(index);
  let tmp5 = windowHeight;
  size = windowHeight(width[5])(windowWidth, windowHeight, source);
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
      const obj4 = { key: "0:" + index + ":" + source[0].uri, onLoadStart: handleLoadStart, onLoad: handleLoad, onError: handleError, source: source[0], style: obj.platformStyles, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, onToggleOverlay: callback };
      push2(renderMedia(obj4));
    }
    if (loads >= 1) {
      const _HermesInternal3 = HermesInternal;
      const push3 = items1.push;
      const obj5 = { key: "1:" + index + ":" + source[0].uri, source: source[1], style: obj.platformStyles, onLoad: handleLoad, onError: handleError, pointerEvents: str5, fadeDuration: 0, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, onToggleOverlay: callback };
      str5 = "auto";
      if (loads <= 1) {
        str5 = "none";
      }
      push3(renderMedia(obj5));
    }
  } else {
    const _HermesInternal = HermesInternal;
    const push = items1.push;
    let tmp8 = obj;
    const obj6 = { key: "0:" + index + ":" + source.uri, onLoadStart: handleLoadStart, onLoad: handleLoad, onError: handleError, source, style: obj.platformStyles, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, onToggleOverlay: callback };
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
  const useAnimatedStyle = windowWidth(tmp2[6]).useAnimatedStyle;
  windowWidth(tmp2[6]);
  items2[2] = windowWidth(tmp2[6]).interpolate;
  items2[3] = windowWidth(tmp2[6]).Extrapolation;
  items2[4] = width2;
  items2[5] = width;
  items2[6] = height2;
  items2[7] = height;
  items2[8] = diff;
  items2[9] = diff1;
  items2[10] = num3;
  items2[11] = toScale;
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
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items2;
  class MediaViewerItemTransformPresenterTsx2 {
    constructor() {
      let items5;
      let tmp9;
      const value = _undefined.get();
      const items = [c3, c4];
      const tmp2 = _undefined2(value, [0, 1], items, _undefined3.CLAMP);
      const items1 = [c5, c6];
      const tmp3 = _undefined2(value, [0, 1], items1, _undefined3.CLAMP);
      const items2 = [c7, 0];
      const items3 = [c8, 0];
      const items4 = [c9, 1];
      const tmp4 = _undefined2(value, [0, 1], items2, _undefined3.CLAMP);
      const tmp5 = _undefined2(value, [0, 1], items3, _undefined3.CLAMP);
      const tmp6 = _undefined2(value, [0, 1], items4, _undefined3.CLAMP);
      const tmp7 = _undefined4(tmp2, c4);
      const tmp8 = _undefined4(tmp3, c6);
      obj = { borderRadius: tmp9 / Math.sqrt(tmp7 * tmp8), transform: items5 };
      items5 = [, , , ];
      const obj2 = { translateX: tmp4 + (tmp2 - c4) / 2 };
      items5[0] = obj2;
      items5[1] = { translateY: tmp5 + (tmp3 - c6) / 2 };
      items5[2] = { scaleX: tmp6 * tmp7 };
      items5[3] = { scaleY: tmp6 * tmp8 };
      tmp9 = _undefined2(value, [0, 0.25], [16, 0], _undefined3.CLAMP);
      return obj;
    }
  }
  let items3 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  MediaViewerItemTransformPresenterTsx2.__closure = items3;
  MediaViewerItemTransformPresenterTsx2.__workletHash = 7865873276369;
  MediaViewerItemTransformPresenterTsx2.__initData = tmp24;
  const animatedStyle = useAnimatedStyle(MediaViewerItemTransformPresenterTsx2);
  let items4 = [closure_10, entranceAnimationDriver, toScale, , , , , , ];
  const useAnimatedStyle2 = windowWidth(tmp2[6]).useAnimatedStyle;
  windowWidth(tmp2[6]);
  items4[3] = windowWidth(tmp2[6]).interpolate;
  items4[4] = width2;
  items4[5] = width;
  items4[6] = windowWidth(tmp2[6]).Extrapolation;
  items4[7] = height2;
  items4[8] = height;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46] = items4;
  class MediaViewerItemTransformPresenterTsx3 {
    constructor() {
      let items2;
      const value = _undefined.get();
      const items = [c3, c4];
      const tmp2 = _undefined2(_undefined3(value, [0, 1], items, _undefined4.CLAMP), c4);
      const items1 = [c6, c7];
      const tmp3 = _undefined2(_undefined3(value, [0, 1], items1, _undefined4.CLAMP), c7);
      const bound = Math.max(tmp2, tmp3);
      obj = { transform: items2 };
      items2 = [, ];
      const obj2 = { scaleX: bound / tmp2 };
      items2[0] = obj2;
      items2[1] = { scaleY: bound / tmp3 };
      return obj;
    }
  }
  let items5 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46];
  MediaViewerItemTransformPresenterTsx3.__closure = items5;
  MediaViewerItemTransformPresenterTsx3.__workletHash = 10330717925602;
  MediaViewerItemTransformPresenterTsx3.__initData = tmp38;
  const items6 = [windowWidth, windowHeight, width, height];
  const animatedStyle2 = useAnimatedStyle2(MediaViewerItemTransformPresenterTsx3);
  const memo = obj3.useMemo(() => {
    let size1;
    obj = { container: size, child: size1 };
    size = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    size1 = { width, height };
    return StyleSheet.create(obj);
  }, items6);
  const items7 = [obj.presenter, animatedStyle];
  const View = tmp5(tmp2[6]).View;
  const items8 = [StyleSheet.absoluteFill, animatedStyle2];
  return <overlayEnabled collapsable={false} style={memo.container}>{null}</overlayEnabled>;
};
export function canPresentWithTransforms(source) {
  source = source.source;
  let everyResult = "cover" !== source.originLayout.resizeMode;
  if (!everyResult) {
    const _Array = Array;
    obj = source;
    if (!Array.isArray(source)) {
      const items = [source];
      obj = items;
    }
    everyResult = obj.every((videoURI) => {
      let tmp = null == videoURI.videoURI;
      const embedURI = videoURI.embedURI;
      if (tmp) {
        tmp = null == videoURI.portal;
      }
      if (tmp) {
        tmp = null == embedURI;
      }
      return tmp;
    });
  }
  return everyResult;
}
