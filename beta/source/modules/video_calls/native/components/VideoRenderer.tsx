// Module ID: 8880
// Function ID: 8881
// Name: VideoRenderer
// Dependencies: [32, 19, 17, 21, 4836, 8881, 8882, 8884, 1479, 1364, 7780, 8889, 8890, 8892, 4566, 2]

// Module 8880 (VideoRenderer)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useWindowDimensions from "useWindowDimensions" /* 1479 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ spinner: { height: 32, width: 32 }, center: { alignItems: "center", justifyContent: "center" }, zoomLayoutAndroid: { flex: 1 } });
const ResizeMode = { COVER: 0, [0]: "COVER", CONTAIN: 1, [1]: "CONTAIN", AUTO: 2, [2]: "AUTO" };
const memoResult = react.memo((gestureEnabled) => {
  let _undefined;
  let c9;
  let closure_2;
  let closure_4;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let obj10;
  let obj13;
  let obj6;
  let paused;
  let ref;
  let renderTag;
  let resizeMode;
  let streamId;
  let streamKey;
  let tmp17;
  let tmp43Result1;
  let tmp56;
  let userId;
  let videoSpinnerContext;
  ({ streamId, resizeMode } = gestureEnabled);
  if (resizeMode === undefined) {
    let tmp = ref;
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
  dependencyMap = undefined;
  let first1;
  react = undefined;
  c9 = undefined;
  let onReady;
  let tmp2 = onReady();
  let tmp3 = resizeMode;
  const tmp4 = dependencyMap;
  let obj = resizeMode(8881);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "VideoRenderer" });
  let tmp6 = first1(react.useState(0), 2);
  let width = tmp6[0];
  dependencyMap = tmp6[1];
  const tmp8 = first1(react.useState(0), 2);
  first1 = tmp8[0];
  react = tmp8[1];
  const tmp10 = first1(react.useState(0), 2);
  const first2 = tmp10[0];
  let closure_6 = tmp12;
  const tmp13 = first1(react.useState(0), 2);
  const first3 = tmp13[0];
  let closure_8 = tmp15;
  [tmp17, c9] = first1(react.useState(true), 2);
  first1(react.useState(true), 2);
  width(8882)({ location: "VideoRenderer", videoSpinnerContext, userId, streamId, paused, loading: tmp17 });
  onReady = width(8884)({ streamId, userId, videoSpinnerContext, paused, loading: tmp17, streamKey }).onReady;
  react.useRef(null);
  const ref1 = react.useRef(null);
  ref = react.useRef({ width: 0, height: 0 });
  const items = [tmp10[1], tmp13[1]];
  const callback = react.useCallback((nativeEvent) => {
    let height;
    ({ width, height } = nativeEvent.nativeEvent);
    const obj = useWindowDimensions;
    size = obj.getWindowDimensions();
    const bound = Math.min(Math.sqrt(size.width * size.height * 4 / (width * height)), 1);
    closure_6(width * bound);
    closure_8(height * bound);
  }, items);
  const items1 = [onReady];
  const callback1 = react.useCallback(() => {
    _undefined(false);
    onReady();
  }, items1);
  const callback2 = react.useCallback((nativeEvent) => {
    let height;
    ({ width, height } = nativeEvent.nativeEvent.layout);
    closure_2(width);
    closure_4(height);
    ref.current = { width, height };
  }, []);
  const items2 = [width, first1, first2, first3, resizeMode];
  const callback3 = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    width = layout.width;
    const height = layout.height;
    const obj = resizeMode(closure_2[9]);
    let isAndroidResult = obj.isAndroid();
    if (!isAndroidResult) {
      const tmp2 = ref;
      let tmp3 = null;
      isAndroidResult = null == ref.current;
    }
    if (!isAndroidResult) {
      let current = ref.current;
      const tmp5 = width <= 0 || height <= 0;
      if (!tmp5) {
        size = { x: 0, y: 0, width, height, animated: false };
        let result = current.scrollResponderZoomTo(size);
        current.scrollTo({ x: 0, y: 0, animated: false });
      }
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        if (null != ref.current) {
          const current = ref.current;
          let tmp3 = width <= 0;
          const tmp = width;
          if (!tmp3) {
            tmp3 = tmp2 <= 0;
          }
          if (!tmp3) {
            size = { x: 0, y: 0, width: tmp, height, animated: false };
            const result = current.scrollResponderZoomTo(size);
            current.scrollTo({ x: 0, y: 0, animated: false });
          }
        }
      });
    }
  }, []);
  const memo = react.useMemo(() => {
    let COVER;
    if (0 !== first) {
      if (0 !== first1) {
        if (0 !== first2) {
          if (0 !== first3) {
            let num2;
            let tmp2 = resizeMode;
            const result = tmp / tmp3;
            const result1 = tmp4 / tmp5;
            if (resizeMode === obj.AUTO) {
              if (result <= 1) {
                if (result < 1) {
                  tmp2 = COVER;
                }
                COVER = tmp8.CONTAIN;
              }
              COVER = tmp8.COVER;
            }
            if (tmp2 === obj.CONTAIN) {
              num2 = result > result1 ? tmp3 / tmp5 : tmp / tmp4;
            } else {
              num2 = 0;
              if (tmp2 === obj.COVER) {
                num2 = result1 > result ? tmp3 / tmp5 : tmp / tmp4;
              }
            }
            return num2;
          }
        }
      }
    }
    return 0;
  }, items2);
  const items3 = [width, first1, first2, first3, memo];
  const obj2 = resizeMode(7780);
  const store = obj2.useStore((orientation) => orientation.orientation);
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = PlatformUtils;
    const isAndroidResult = obj.isAndroid() && null != ref1.current;
    if (isAndroidResult) {
      const current = ref1.current;
      if (current != null) {
        current.unzoom({ animated: false });
      }
    }
  }, items3);
  const items4 = [first2, first3];
  const layoutEffect1 = react.useLayoutEffect(() => {
    let height;
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      if (null != ref.current) {
        if (first2 > 0) {
          if (first3 > 0) {
            ({ width, height } = ref.current);
            const current = tmp.current;
            const tmp6 = width <= 0 || height <= 0;
            if (!tmp6) {
              size = { x: 0, y: 0, width, height, animated: false };
              const result = current.scrollResponderZoomTo(size);
              current.scrollTo({ x: 0, y: 0, animated: false });
            }
          }
        }
      }
    }
  }, items4);
  const items5 = [memo, first2, first3];
  const memo1 = react.useMemo(() => {
    size = { width: first2 * memo, height: first3 * memo };
    return size;
  }, items5);
  const items6 = [memo, first2, first3];
  const items7 = [first2, memo, width, first3, first1];
  const memo2 = react.useMemo(() => {
    size = { width: first2 * memo, height: first3 * memo };
    return size;
  }, items6);
  const items8 = [width, first1];
  const memo3 = react.useMemo(() => {
    const bound = Math.min(first2 * memo, first);
    const bound1 = Math.min(first3 * memo, first1);
    size = { position: "absolute", left: (first - bound) / 2, top: (first1 - bound1) / 2, width: bound, height: bound1, alignItems: "center", justifyContent: "center", overflow: "hidden" };
    return size;
  }, items7);
  const memo4 = react.useMemo(() => {
    size = { width, height: first1 };
    return size;
  }, items8);
  const items9 = [first2, memo, width, first3, first1];
  let tmp35 = null;
  const memo5 = react.useMemo(() => {
    const bound = Math.min(first3 * memo, first1);
    const rect = { position: "absolute", top: first1 / 2 - bound / 2, right: first / 2 - Math.min(first2 * memo, first) / 2 };
    return rect;
  }, items9);
  if (tmp17) {
    const obj3 = { animate: true, style: tmp2.spinner };
    tmp35 = closure_8(tmp18(8889), obj3);
  }
  const tmp37 = store === tmp3(7780).OrientationType.PORTRAIT;
  const tmp3Result = tmp3(1364);
  if (tmp3Result.isAndroid()) {
    const obj4 = { onLayout: callback2, style: items10, children: items12 };
    items10 = [tmp2.center, closure_6.absoluteFillObject];
    const obj5 = { ref: ref1, style: tmp2.zoomLayoutAndroid, minimumZoomScale: 1, gestureEnabled: flag, children: c9(first2, obj6) };
    obj6 = { collapsable: false, style: size, children: items11 };
    size = { width, height: first1, alignItems: "center", justifyContent: "center" };
    items11 = [, ];
    const obj7 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo2 };
    const tmp18Result = width(8890);
    items11[0] = closure_8(width(8892), obj7);
    items11[1] = tmp35;
    items12 = [closure_8(tmp18Result, obj5), ];
    const obj8 = { style: memo5, children: tmp56 };
    tmp56 = null;
    const tmp51 = c9;
    const tmp54 = closure_8;
    if (!tmp17) {
      tmp56 = null;
      if (flag) {
        tmp56 = null;
        if (tmp37) {
          let renderTagResult;
          if (renderTag != null) {
            renderTagResult = renderTag();
          }
          tmp56 = renderTagResult;
        }
      }
    }
    items12[1] = tmp54(first2, obj8);
    tmp43Result1 = tmp51(tmp52, obj4);
  } else if (flag) {
    const obj9 = { ref, onLayout: callback2, style: closure_6.absoluteFillObject, contentContainerStyle: memo4, bounces: false, pinchGestureEnabled: !tmp17, maximumZoomScale: 8, minimumZoomScale: 1, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, scrollEventThrottle: 16, children: c9(first2, obj10) };
    obj10 = { collapsable: false, style: memo4, onLayout: callback3, children: items14 };
    const obj11 = { style: memo3, children: items13 };
    const obj12 = { children: closure_8(width(8892), obj13) };
    const View = tmp18(4566).View;
    obj13 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo1 };
    items13 = [closure_8(View, obj12), ];
    let tmp48 = null;
    const tmp44 = first3;
    const tmp45 = closure_6;
    if (tmp37) {
      let renderTagResult1;
      if (renderTag != null) {
        renderTagResult1 = renderTag();
      }
      tmp48 = renderTagResult1;
    }
    items13[1] = tmp48;
    items14 = [c9(first2, obj11), ];
    let tmp43Result = null;
    if (null != tmp35) {
      const obj14 = { style: items15, children: tmp35 };
      items15 = [tmp45.absoluteFillObject, tmp2.center];
      tmp43Result = tmp43(tmp47, obj14);
    }
    items14[1] = tmp43Result;
    tmp43Result1 = tmp43(tmp44, obj9);
  } else {
    const obj15 = { onLayout: callback2, style: items16, children: items17 };
    items16 = [tmp2.center, closure_6.absoluteFillObject];
    const obj16 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, onSize: callback, onReady: callback1, style: memo1 };
    items17 = [closure_8(width(8892), obj16), tmp35];
    tmp43Result1 = c9(first2, obj15);
  }
  return tmp43Result1;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/VideoRenderer.tsx");

export default memoResult;
export { ResizeMode };
