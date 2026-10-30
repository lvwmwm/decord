// Module ID: 14763
// Function ID: 14764
// Name: MediaViewerItemTransformPresenter
// Dependencies: [19, 17, 21, 14761, 8830, 14760, 5090, 5091, 2]
// Exports: canPresentWithTransforms, default

// Module 14763 (MediaViewerItemTransformPresenter)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let obj2;
({ View: closure_4, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let obj = { platformStyles: { position: "absolute", width: "100%", height: "100%" }, presenter: obj2 };
obj2 = { overflow: "hidden", opacity: 1 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
function toScale(arg0, arg1) {
  let num = 1;
  if (arg1 > 0) {
    const _Math = Math;
    num = Math.max(arg0 / arg1, 0.001);
  }
  return num;
}
toScale.__closure = { MIN_SCALE: 0.001 };
toScale.__workletHash = 9575629284817;
toScale.__initData = { code: "function toScale_MediaViewerItemTransformPresenterTsx1(size,finalSize){const{MIN_SCALE}=this.__closure;return finalSize>0?Math.max(size/finalSize,MIN_SCALE):1;}" };
let closure_9 = { code: "function MediaViewerItemTransformPresenterTsx2(){const{entranceAnimationDriver,interpolate,Extrapolation,startWidth,sourceWidth,startHeight,sourceHeight,startTranslateX,startTranslateY,startScale,toScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}const width=interpolateProxy([0,1],[startWidth,sourceWidth]);const height=interpolateProxy([0,1],[startHeight,sourceHeight]);const left=interpolateProxy([0,1],[startTranslateX,0]);const top=interpolateProxy([0,1],[startTranslateY,0]);const scale=interpolateProxy([0,1],[startScale,1]);const scaleX=toScale(width,sourceWidth);const scaleY=toScale(height,sourceHeight);return{borderRadius:interpolateProxy([0,0.25],[16,0])/Math.sqrt(scaleX*scaleY),transform:[{translateX:left+(width-sourceWidth)/2},{translateY:top+(height-sourceHeight)/2},{scaleX:scale*scaleX},{scaleY:scale*scaleY}]};}" };
let closure_10 = { code: "function MediaViewerItemTransformPresenterTsx3(){const{entranceAnimationDriver,toScale,interpolate,startWidth,sourceWidth,Extrapolation,startHeight,sourceHeight}=this.__closure;const entranceValue=entranceAnimationDriver.get();const scaleX=toScale(interpolate(entranceValue,[0,1],[startWidth,sourceWidth],Extrapolation.CLAMP),sourceWidth);const scaleY=toScale(interpolate(entranceValue,[0,1],[startHeight,sourceHeight],Extrapolation.CLAMP),sourceHeight);const cover=Math.max(scaleX,scaleY);return{transform:[{scaleX:cover/scaleX},{scaleY:cover/scaleY}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemTransformPresenter.tsx");

export default function MediaViewerItemTransformPresenter(windowHeight) {
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let items3;
  let items4;
  let loads;
  let obj10;
  let obj11;
  let obj12;
  let originLayout;
  let panGestureConfig;
  let renderMedia;
  let source;
  let str5;
  let tmp19;
  let tmp20;
  let tmp5Result;
  let useItemVisible;
  let windowWidth;
  ({ source, originLayout, renderMedia, windowWidth } = windowHeight);
  windowHeight = windowHeight.windowHeight;
  const entranceAnimationDriver = windowHeight.entranceAnimationDriver;
  const index = windowHeight.index;
  let num3;
  let diff2;
  let diff3;
  let width2;
  let height2;
  let tmp2 = entranceAnimationDriver;
  ({ useItemVisible, panGestureConfig } = windowHeight);
  obj = windowWidth(entranceAnimationDriver[3]);
  const entranceAnimation = obj.useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  let obj2 = windowWidth(entranceAnimationDriver[4]);
  const mediaItemHasSpoiler = obj2.useMediaItemHasSpoiler(index);
  size = windowHeight(entranceAnimationDriver[5])(windowWidth, windowHeight, source);
  const width = size.width;
  const height = size.height;
  const itemVisible = useItemVisible(index);
  const overlayEnabled = panGestureConfig.overlayEnabled;
  let obj3 = width;
  let items = [overlayEnabled];
  const callback = width.useCallback(() => {
    const result = overlayEnabled.set(!overlayEnabled.get());
  }, items);
  let items1 = [];
  if (Array.isArray(source)) {
    let num = 1;
    if (loads <= 1) {
      let obj4 = { key: "0:" + index + ":" + source[0].uri, onLoadStart: handleLoadStart, onLoad: handleLoad, onError: handleError, source: source[0], style: diff2.platformStyles, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, onToggleOverlay: callback };
      const _HermesInternal2 = HermesInternal;
      const push2 = items1.push;
      const tmp11 = diff2;
      push2(renderMedia(obj4));
    }
    if (loads >= 1) {
      let obj5 = { key: "1:" + index + ":" + source[0].uri, source: source[1], style: diff2.platformStyles, onLoad: handleLoad, onError: handleError, pointerEvents: str5, fadeDuration: 0, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, onToggleOverlay: callback };
      const _HermesInternal3 = HermesInternal;
      const push3 = items1.push;
      str5 = "auto";
      if (loads <= 1) {
        str5 = "none";
      }
      push3(renderMedia(obj5));
    }
  } else {
    let obj6 = { key: "0:" + index + ":" + source.uri, onLoadStart: handleLoadStart, onLoad: handleLoad, onError: handleError, source, style: diff2.platformStyles, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, onToggleOverlay: callback };
    const _HermesInternal = HermesInternal;
    const push = items1.push;
    push(renderMedia(obj6));
  }
  let result = width / height;
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
    tmp19 = height2;
    tmp20 = width2;
    diff1 = diff3;
    diff = diff2;
    num3 = 1;
  } else {
    let num2 = 1;
    if (result > tmp15) {
      num2 = result;
    }
    num3 = originLayout.width / width * num2;
    tmp19 = height;
    tmp20 = width;
  }
  const tmpResult = windowWidth(tmp2[6]);
  class G {
    constructor() {
      let interpolateResult5;
      let items5;
      const value = entranceAnimationDriver.get();
      const items = [width2, width];
      obj = ReanimatedRexport;
      const interpolateResult = obj.interpolate(value, [0, 1], items, ReanimatedRexport.Extrapolation.CLAMP);
      const items1 = [height2, height];
      const obj2 = ReanimatedRexport;
      const interpolateResult1 = obj2.interpolate(value, [0, 1], items1, ReanimatedRexport.Extrapolation.CLAMP);
      const items2 = [diff2, 0];
      const items3 = [diff3, 0];
      const obj3 = ReanimatedRexport;
      const items4 = [num3, ];
      let num = 1;
      items4[1] = 1;
      const interpolateResult2 = obj3.interpolate(value, [0, 1], items2, ReanimatedRexport.Extrapolation.CLAMP);
      const obj4 = ReanimatedRexport;
      const interpolateResult3 = obj4.interpolate(value, [0, 1], items3, ReanimatedRexport.Extrapolation.CLAMP);
      const obj5 = ReanimatedRexport;
      const interpolateResult4 = obj5.interpolate(value, [0, 1], items4, ReanimatedRexport.Extrapolation.CLAMP);
      if (typeof toScale === "function") {
        let bound = num;
        if (width > 0) {
          const _Math = Math;
          bound = Math.max(interpolateResult / tmp2, 0.001);
        }
        if (typeof tmp11 === "function") {
          if (height > 0) {
            const _Math2 = Math;
            num = Math.max(interpolateResult1 / tmp6, 0.001);
          }
          const obj6 = { borderRadius: interpolateResult5 / Math.sqrt(bound * num), transform: items5 };
          const _Math3 = Math;
          const tmp3Result = ReanimatedRexport;
          items5 = [{ translateX: interpolateResult2 + (interpolateResult - width) / 2 }, , , ];
          const obj7 = { translateX: interpolateResult2 + (interpolateResult - width) / 2 };
          const obj8 = { translateY: interpolateResult3 + (interpolateResult1 - height) / 2 };
          items5[1] = obj8;
          const obj9 = { scaleX: interpolateResult4 * bound };
          items5[2] = obj9;
          const obj10 = { scaleY: interpolateResult4 * num };
          items5[3] = obj10;
          interpolateResult5 = tmp3Result.interpolate(value, [0, 0.25], [16, 0], ReanimatedRexport.Extrapolation.CLAMP);
          return obj6;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  let obj7 = { entranceAnimationDriver, interpolate: tmp(tmp2[6]).interpolate, Extrapolation: tmp(tmp2[6]).Extrapolation, startWidth: tmp20, sourceWidth: width, startHeight: tmp19, sourceHeight: height, startTranslateX: diff, startTranslateY: diff1, startScale: num3, toScale: diff3 };
  G.__closure = obj7;
  G.__workletHash = 512853979336;
  G.__initData = width2;
  const animatedStyle = tmpResult.useAnimatedStyle(G);
  const tmpResult2 = windowWidth(tmp2[6]);
  class B {
    constructor() {
      let items2;
      const value = entranceAnimationDriver.get();
      ReanimatedRexport;
      const items = [width2, width];
      const tmp2 = toScale;
      if (typeof toScale === "function") {
        let num2 = 1;
        num3 = 1;
        if (width > 0) {
          const _Math = Math;
          num3 = Math.max(tmp7 / tmp6, 0.001);
        }
        const items1 = [height2, height];
        const interpolate = ReanimatedRexport.interpolate;
        const tmp3Result = ReanimatedRexport;
        if (typeof tmp2 === "function") {
          if (height > 0) {
            const _Math2 = Math;
            num2 = Math.max(tmp15 / tmp11, 0.001);
          }
          const _Math3 = Math;
          const bound = Math.max(num3, num2);
          obj = { transform: items2 };
          items2 = [{ scaleX: bound / num3 }, ];
          const obj2 = { scaleX: bound / num3 };
          const obj3 = { scaleY: bound / num2 };
          items2[1] = obj3;
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  let obj8 = { entranceAnimationDriver, toScale: diff3, interpolate: tmp(tmp2[6]).interpolate, startWidth: tmp20, sourceWidth: width, Extrapolation: tmp(tmp2[6]).Extrapolation, startHeight: tmp19, sourceHeight: height };
  B.__closure = obj8;
  B.__workletHash = 7705932751771;
  B.__initData = height2;
  let items2 = [windowWidth, windowHeight, width, height];
  const animatedStyle1 = tmpResult2.useAnimatedStyle(B);
  const memo = obj3.useMemo(() => {
    let size1;
    obj = { container: size, child: size1 };
    size = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    size1 = { width, height };
    return StyleSheet.create(obj);
  }, items2);
  let obj9 = { collapsable: false, style: memo.container, children: num3(height, obj10) };
  obj10 = { style: memo.child, children: num3(tmp5Result, obj11) };
  obj11 = { style: items3, children: num3(windowHeight(tmp2[7]), obj12) };
  items3 = [diff2.presenter, animatedStyle];
  obj12 = { style: items4, children: items1 };
  items4 = [overlayEnabled.absoluteFill, animatedStyle1];
  tmp5Result = windowHeight(tmp2[7]);
  return num3(height, obj9);
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
