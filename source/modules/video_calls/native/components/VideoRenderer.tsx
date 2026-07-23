// Module ID: 10574
// Function ID: 82550
// Name: resetIOSScrollZoom
// Dependencies: [57, 31, 27, 33, 4130, 10575, 10576, 10578, 1450, 477, 8303, 10582, 10583, 10585, 3991, 2]

// Module 10574 (resetIOSScrollZoom)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function resetIOSScrollZoom(scrollResponderZoomTo, width, height) {
  if (!tmp) {
    const obj = { x: 0, y: 0, width, height, animated: false };
    const result = scrollResponderZoomTo.scrollResponderZoomTo(obj);
    scrollResponderZoomTo.scrollTo({ x: 0, y: 0, animated: false });
  }
}
({ View: closure_5, StyleSheet: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ spinner: { height: 32, width: 32 }, center: { alignItems: "center", justifyContent: "center" }, zoomLayoutAndroid: { flex: 1 } });
let obj = { COVER: 0, [0]: "COVER", CONTAIN: 1, [1]: "CONTAIN", AUTO: 2, [2]: "AUTO" };
const memoResult = importAllResult.memo((gestureEnabled) => {
  let c9;
  let paused;
  let renderTag;
  let resizeMode;
  let streamId;
  let streamKey;
  let tmp15;
  let userId;
  let videoSpinnerContext;
  ({ streamId, resizeMode } = gestureEnabled);
  if (resizeMode === undefined) {
    resizeMode = ref.CONTAIN;
  }
  let flag = gestureEnabled.gestureEnabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ renderTag, videoSpinnerContext, userId, paused, streamKey } = gestureEnabled);
  if (paused === undefined) {
    paused = false;
  }
  let first;
  let dependencyMap;
  let first1;
  let importAllResult;
  let first2;
  let c6;
  let first3;
  let callback;
  let callback2;
  let onReady;
  ref = undefined;
  let ref1;
  let closure_13;
  let memo;
  const tmp2 = onReady();
  let obj = resizeMode(10575);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VideoRenderer" });
  const tmp4 = first1(importAllResult.useState(0), 2);
  first = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp6 = first1(importAllResult.useState(0), 2);
  first1 = tmp6[0];
  importAllResult = tmp6[1];
  const tmp8 = first1(importAllResult.useState(0), 2);
  first2 = tmp8[0];
  c6 = tmp10;
  const tmp11 = first1(importAllResult.useState(0), 2);
  first3 = tmp11[0];
  callback = tmp13;
  [tmp15, c9] = first1(importAllResult.useState(true), 2);
  obj = { location: "VideoRenderer", videoSpinnerContext, userId, streamId, paused, loading: tmp15 };
  first(10576)(obj);
  obj = { streamId, userId, videoSpinnerContext, paused, loading: tmp15, streamKey };
  onReady = first(10578)(obj).onReady;
  ref = importAllResult.useRef(null);
  ref1 = importAllResult.useRef(null);
  closure_13 = importAllResult.useRef({ width: 0, height: 0 });
  const items = [tmp8[1], tmp11[1]];
  callback = importAllResult.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent);
    const size = resizeMode(1450).getWindowDimensions();
    const bound = Math.min(Math.sqrt(size.width * size.height * 4 / (width * height)), 1);
    _undefined(width * bound);
    _undefined2(height * bound);
  }, items);
  const items1 = [onReady];
  const callback1 = importAllResult.useCallback(() => {
    _undefined3(false);
    onReady();
  }, items1);
  callback2 = importAllResult.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent.layout);
    dependencyMap(width);
    callback(height);
    closure_13.current = { width, height };
  }, []);
  const items2 = [first, first1, first2, first3, resizeMode];
  const callback3 = importAllResult.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const width = layout.width;
    const height = layout.height;
    let isAndroidResult = resizeMode(477).isAndroid();
    if (!isAndroidResult) {
      isAndroidResult = null == ref.current;
    }
    if (!isAndroidResult) {
      ref1(ref.current, width, height);
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        if (null != outer1_11.current) {
          ref1(outer1_11.current, width, height);
        }
      });
    }
  }, []);
  memo = importAllResult.useMemo(() => {
    if (0 !== first) {
      if (0 !== first1) {
        if (0 !== first2) {
          if (0 !== first3) {
            const result = first / first1;
            const result1 = first2 / first3;
            if (resizeMode !== ref.AUTO) {
              if (tmp20 === ref.CONTAIN) {
                if (result > result1) {
                  let result2 = first1 / first3;
                } else {
                  result2 = first / first2;
                }
              } else if (tmp20 !== ref.COVER) {
                return 0;
              } else if (result1 > result) {
                let result3 = first1 / first3;
              } else {
                result3 = first / first2;
              }
            } else {
              if (result <= 1) {
                if (result >= 1) {
                  const CONTAIN = ref.CONTAIN;
                }
              }
              const COVER = ref.COVER;
            }
          }
        }
      }
    }
    return 0;
  }, items2);
  let obj3 = resizeMode(8303);
  const items3 = [first, first1, first2, first3, memo];
  const store = obj3.useStore((orientation) => orientation.orientation);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let obj = resizeMode(477);
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      isAndroidResult = null != ref1.current;
    }
    if (isAndroidResult) {
      const current = ref1.current;
      if (null != current) {
        obj = { animated: false };
        current.unzoom(obj);
      }
    }
  }, items3);
  const items4 = [first2, first3];
  const layoutEffect1 = importAllResult.useLayoutEffect(() => {
    if (!obj.isAndroid()) {
      if (null != ref.current) {
        if (first2 > 0) {
          if (first3 > 0) {
            const current = ref.current;
            ref1(ref.current, current.width, current.height);
          }
        }
      }
    }
  }, items4);
  const items5 = [memo, first2, first3];
  const memo1 = importAllResult.useMemo(() => ({ width: first2 * memo, height: first3 * memo }), items5);
  const items6 = [memo, first2, first3];
  const items7 = [first2, memo, first, first3, first1];
  const memo2 = importAllResult.useMemo(() => ({ width: first2 * memo, height: first3 * memo }), items6);
  const items8 = [first, first1];
  const memo3 = importAllResult.useMemo(() => {
    const bound = Math.min(first2 * memo, first);
    const bound1 = Math.min(first3 * memo, first1);
    return { position: "absolute", left: (first - bound) / 2, top: (first1 - bound1) / 2, width: bound, height: bound1, alignItems: "center", justifyContent: "center", overflow: "hidden" };
  }, items7);
  const memo4 = importAllResult.useMemo(() => ({ width: first, height: first1 }), items8);
  const items9 = [first2, memo, first, first3, first1];
  let tmp32 = null;
  const memo5 = importAllResult.useMemo(() => {
    const bound = Math.min(first3 * memo, first1);
    return { position: "absolute", top: first1 / 2 - bound / 2, right: first / 2 - Math.min(first2 * memo, first) / 2 };
  }, items9);
  if (tmp15) {
    const obj1 = { animate: true, style: tmp2.spinner };
    tmp32 = callback(first(10582), obj1);
  }
  const tmp36 = store === resizeMode(8303).OrientationType.PORTRAIT;
  let obj5 = resizeMode(477);
  if (obj5.isAndroid()) {
    const obj2 = { onLayout: callback2 };
    const items10 = [tmp2.center, c6.absoluteFillObject];
    obj2.style = items10;
    obj3 = { ref: ref1, style: tmp2.zoomLayoutAndroid, minimumZoomScale: 1, gestureEnabled: flag };
    const obj4 = { collapsable: false };
    obj5 = { width: first, height: first1, alignItems: "center", justifyContent: "center" };
    obj4.style = obj5;
    const obj6 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo2 };
    const items11 = [callback(first(10585), obj6), tmp32];
    obj4.children = items11;
    obj3.children = callback2(first2, obj4);
    const items12 = [callback(first(10583), obj3), ];
    const obj7 = { style: memo5 };
    let tmp64 = null;
    if (!tmp15) {
      tmp64 = null;
      if (flag) {
        tmp64 = null;
        if (tmp36) {
          let renderTagResult;
          if (null != renderTag) {
            renderTagResult = renderTag();
          }
          tmp64 = renderTagResult;
        }
      }
    }
    obj7.children = tmp64;
    items12[1] = callback(first2, obj7);
    obj2.children = items12;
    let tmp44Result = callback2(tmp58, obj2);
    const tmp57 = callback2;
    const tmp60 = callback;
    const tmp63 = first(10583);
  } else if (flag) {
    const obj8 = { ref, onLayout: callback2, style: c6.absoluteFillObject, contentContainerStyle: memo4, bounces: false, pinchGestureEnabled: !tmp15, maximumZoomScale: 8, minimumZoomScale: 1, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, scrollEventThrottle: 16 };
    const obj9 = { collapsable: false, style: memo4, onLayout: callback3 };
    const obj10 = { style: memo3 };
    const obj11 = {};
    const obj12 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo1 };
    obj11.children = callback(first(10585), obj12);
    const items13 = [callback(first(3991).View, obj11), ];
    let tmp51 = null;
    if (tmp36) {
      let renderTagResult1;
      if (null != renderTag) {
        renderTagResult1 = renderTag();
      }
      tmp51 = renderTagResult1;
    }
    items13[1] = tmp51;
    obj10.children = items13;
    const items14 = [callback2(first2, obj10), ];
    let tmp53 = null;
    if (null != tmp32) {
      const obj13 = {};
      const items15 = [c6.absoluteFillObject, tmp2.center];
      obj13.style = items15;
      obj13.children = tmp32;
      tmp53 = callback(first2, obj13);
    }
    items14[1] = tmp53;
    obj9.children = items14;
    obj8.children = callback2(first2, obj9);
    tmp44Result = callback(first3, obj8);
    const tmp44 = callback;
    const tmp45 = first3;
  } else {
    const obj14 = { onLayout: callback2 };
    const items16 = [tmp2.center, c6.absoluteFillObject];
    obj14.style = items16;
    const obj15 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo1 };
    const items17 = [callback(first(10585), obj15), tmp32];
    obj14.children = items17;
    tmp44Result = callback2(first2, obj14);
  }
  return tmp44Result;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/VideoRenderer.tsx");

export default memoResult;
export const ResizeMode = obj;
