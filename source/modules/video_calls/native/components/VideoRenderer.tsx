// Module ID: 10563
// Function ID: 82487
// Name: resetIOSScrollZoom
// Dependencies: []

// Module 10563 (resetIOSScrollZoom)
function resetIOSScrollZoom(scrollResponderZoomTo, width, height) {
  if (!tmp) {
    const obj = { width, height };
    const result = scrollResponderZoomTo.scrollResponderZoomTo(obj);
    scrollResponderZoomTo.scrollTo({});
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[4]).createStyles({ spinner: { y: false, isArray: false }, center: { "Null": null, "Null": null }, zoomLayoutAndroid: { flex: 1 } });
const obj = { COVER: 0, [0]: "COVER", CONTAIN: 1, [1]: "CONTAIN", AUTO: 2, [2]: "AUTO" };
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((gestureEnabled) => {
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
    resizeMode = obj.CONTAIN;
  }
  const arg1 = resizeMode;
  let flag = gestureEnabled.gestureEnabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ renderTag, videoSpinnerContext, userId, paused, streamKey } = gestureEnabled);
  if (paused === undefined) {
    paused = false;
  }
  let importDefault;
  let closure_2;
  let callback;
  let React;
  let first2;
  let tmp10;
  let first3;
  let tmp13;
  let callback2;
  let callback3;
  let obj;
  let resetIOSScrollZoom;
  let closure_13;
  let memo;
  const tmp2 = callback3();
  obj = arg1(closure_2[5]);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VideoRenderer" });
  const tmp4 = callback(React.useState(0), 2);
  const first = tmp4[0];
  importDefault = first;
  closure_2 = tmp4[1];
  const tmp6 = callback(React.useState(0), 2);
  const first1 = tmp6[0];
  callback = first1;
  React = tmp6[1];
  const tmp8 = callback(React.useState(0), 2);
  first2 = tmp8[0];
  tmp10 = tmp8[1];
  const tmp11 = callback(React.useState(0), 2);
  first3 = tmp11[0];
  tmp13 = tmp11[1];
  [tmp15, closure_9] = callback(React.useState(true), 2);
  obj = { location: "VideoRenderer", videoSpinnerContext, userId, streamId, paused, loading: tmp15 };
  importDefault(closure_2[6])(obj);
  obj = { streamId, userId, videoSpinnerContext, paused, loading: tmp15, streamKey };
  const onReady = importDefault(closure_2[7])(obj).onReady;
  callback3 = onReady;
  const ref = React.useRef(null);
  obj = ref;
  const ref1 = React.useRef(null);
  resetIOSScrollZoom = ref1;
  closure_13 = React.useRef({ "Null": -536870861, "Null": -299892737 });
  const items = [tmp10, tmp13];
  callback = React.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent);
    const size = resizeMode(closure_2[8]).getWindowDimensions();
    const bound = Math.min(Math.sqrt(size.width * size.height * 4 / (width * height)), 1);
    tmp10(width * bound);
    tmp13(height * bound);
  }, items);
  const items1 = [onReady];
  const callback1 = React.useCallback(() => {
    _undefined(false);
    onReady();
  }, items1);
  callback2 = React.useCallback((nativeEvent) => {
    let height;
    let width;
    ({ width, height } = nativeEvent.nativeEvent.layout);
    callback(width);
    callback2(height);
    closure_13.current = { width, height };
  }, []);
  const items2 = [first, first1, first2, first3, resizeMode];
  callback3 = React.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const width = layout.width;
    const resizeMode = width;
    const height = layout.height;
    const first = height;
    let isAndroidResult = resizeMode(closure_2[9]).isAndroid();
    if (!isAndroidResult) {
      isAndroidResult = null == ref.current;
    }
    if (!isAndroidResult) {
      ref1(ref.current, width, height);
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        if (null != ref.current) {
          callback(ref.current, width, height);
        }
      });
    }
  }, []);
  memo = React.useMemo(() => {
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
  let obj3 = arg1(closure_2[10]);
  const items3 = [first, first1, first2, first3, memo];
  const store = obj3.useStore((orientation) => orientation.orientation);
  const layoutEffect = React.useLayoutEffect(() => {
    let obj = resizeMode(closure_2[9]);
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
  const layoutEffect1 = React.useLayoutEffect(() => {
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
  const memo1 = React.useMemo(() => ({ width: first2 * memo, height: first3 * memo }), items5);
  const items6 = [memo, first2, first3];
  const items7 = [first2, memo, first, first3, first1];
  const memo2 = React.useMemo(() => ({ width: first2 * memo, height: first3 * memo }), items6);
  const items8 = [first, first1];
  const memo3 = React.useMemo(() => {
    const bound = Math.min(first2 * memo, first);
    const bound1 = Math.min(first3 * memo, first1);
    return { position: "absolute", left: (first - bound) / 2, top: (first1 - bound1) / 2, width: bound, height: bound1, alignItems: "center", justifyContent: "center", overflow: "hidden" };
  }, items7);
  const memo4 = React.useMemo(() => ({ width: first, height: first1 }), items8);
  const items9 = [first2, memo, first, first3, first1];
  let tmp32 = null;
  const memo5 = React.useMemo(() => {
    const bound = Math.min(first3 * memo, first1);
    return { position: "absolute", top: first1 / 2 - bound / 2, right: first / 2 - Math.min(first2 * memo, first) / 2 };
  }, items9);
  if (tmp15) {
    const obj1 = { animate: true, style: tmp2.spinner };
    tmp32 = tmp13(importDefault(closure_2[11]), obj1);
  }
  const tmp36 = store === arg1(closure_2[10]).OrientationType.PORTRAIT;
  let obj5 = arg1(closure_2[9]);
  if (obj5.isAndroid()) {
    const obj2 = { onLayout: callback2 };
    const items10 = [tmp2.center, tmp10.absoluteFillObject];
    obj2.style = items10;
    obj3 = { ref: ref1, style: tmp2.zoomLayoutAndroid, minimumZoomScale: 1, gestureEnabled: flag };
    const obj4 = { collapsable: false };
    obj5 = { width: first, height: first1, alignItems: "center", justifyContent: "center" };
    obj4.style = obj5;
    const obj6 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo2 };
    const items11 = [tmp13(importDefault(closure_2[13]), obj6), tmp32];
    obj4.children = items11;
    obj3.children = callback2(first2, obj4);
    const items12 = [tmp13(importDefault(closure_2[12]), obj3), ];
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
    items12[1] = tmp13(first2, obj7);
    obj2.children = items12;
    let tmp44Result = callback2(tmp58, obj2);
    const tmp57 = callback2;
    const tmp60 = tmp13;
    const tmp63 = importDefault(closure_2[12]);
  } else if (flag) {
    const obj8 = { ref, onLayout: callback2, style: tmp10.absoluteFillObject, contentContainerStyle: memo4, bounces: false, pinchGestureEnabled: !tmp15, maximumZoomScale: 8, minimumZoomScale: 1, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, scrollEventThrottle: 16 };
    const obj9 = { collapsable: false, style: memo4, onLayout: callback3 };
    const obj10 = { style: memo3 };
    const obj11 = {};
    const obj12 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo1 };
    obj11.children = tmp13(importDefault(closure_2[13]), obj12);
    const items13 = [tmp13(importDefault(closure_2[14]).View, obj11), ];
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
      const items15 = [tmp10.absoluteFillObject, tmp2.center];
      obj13.style = items15;
      obj13.children = tmp32;
      tmp53 = tmp13(first2, obj13);
    }
    items14[1] = tmp53;
    obj9.children = items14;
    obj8.children = callback2(first2, obj9);
    tmp44Result = tmp13(first3, obj8);
    const tmp44 = tmp13;
    const tmp45 = first3;
  } else {
    const obj14 = { onLayout: callback2 };
    const items16 = [tmp2.center, tmp10.absoluteFillObject];
    obj14.style = items16;
    const obj15 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo1 };
    const items17 = [tmp13(importDefault(closure_2[13]), obj15), tmp32];
    obj14.children = items17;
    tmp44Result = callback2(first2, obj14);
  }
  return tmp44Result;
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/video_calls/native/components/VideoRenderer.tsx");

export default memoResult;
export const ResizeMode = obj;
