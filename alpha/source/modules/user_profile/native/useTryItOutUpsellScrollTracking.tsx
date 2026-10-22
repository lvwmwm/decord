// Module ID: 15810
// Function ID: 15811
// Name: useTryItOutUpsellScrollTracking
// Dependencies: [19, 558, 576, 5038, 2]

// Module 15810 (useTryItOutUpsellScrollTracking)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5038 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTryItOutUpsellScrollTracking(arg0, arg1) {
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = react2;
  const cResult = obj.c(16);
  const obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { contentHeight: 0, viewportHeight: 0, tryItOutSectionHeight: 0 };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  let closure_3 = react.useRef(first);
  if (cResult[1] === sharedValue) {
    if (cResult[2] === arg1) {
      let tmp4;
      let tmp7;
      let tmp5;
      if (cResult[3] === arg0) {
        tmp4 = cResult[4];
      }
      let closure_4 = tmp4;
      if (cResult[5] !== tmp4) {
        const fn2 = function v(contentHeight) {
          const obj = { contentHeight: contentHeight.contentSize.height, viewportHeight: contentHeight.layoutMeasurement.height };
          return closure_4(obj);
        };
        class S {
          constructor(arg0, contentHeight) {
            const obj = { contentHeight };
            return closure_4(obj);
          }
        }
        const fn3 = function y(nativeEvent) {
          const obj = { viewportHeight: nativeEvent.nativeEvent.layout.height };
          return closure_4(obj);
        };
        class H {
          constructor(nativeEvent) {
            const obj = { tryItOutSectionHeight: nativeEvent.nativeEvent.layout.height };
            return closure_4(obj);
          }
        }
        cResult[5] = tmp4;
        cResult[6] = fn2;
        cResult[7] = S;
        cResult[8] = fn3;
        cResult[9] = H;
        tmp7 = fn3;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[6];
        class S {
          constructor(arg0, contentHeight) {
            const obj = { contentHeight };
            return closure_4(obj);
          }
        }
        tmp7 = cResult[8];
        class H {
          constructor(nativeEvent) {
            const obj = { tryItOutSectionHeight: nativeEvent.nativeEvent.layout.height };
            return closure_4(obj);
          }
        }
      }
      const obj4 = { isScrolledAboveTryItOutSection: sharedValue, onScroll: tmp5, onContentSizeChange: tmp6, onScrollViewLayout: tmp7, onTryItOutSectionLayout: tmp8 };
      cResult[10] = sharedValue;
      cResult[11] = tmp5;
      cResult[12] = tmp6;
      cResult[13] = tmp7;
      cResult[14] = tmp8;
      cResult[15] = obj4;
    }
  }
  const fn = function l(arg0) {
    let contentHeight;
    let viewportHeight;
    const merged = Object.assign(ref.current, arg0);
    ({ contentHeight, viewportHeight } = ref.current);
    if (contentHeight > 0) {
      if (viewportHeight > 0) {
        const _Math = Math;
        const diff = contentHeight - viewportHeight;
        const result = sharedValue.set(Math.max(0, diff - closure_0.get()) > tmp2 + closure_1);
      }
    }
  };
  cResult[1] = sharedValue;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  tmp4 = fn;
}) : (function useTryItOutUpsellScrollTracking(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(true);
  let closure_3 = react.useRef({ contentHeight: 0, viewportHeight: 0, tryItOutSectionHeight: 0 });
  const items = [arg0, sharedValue, arg1];
  const callback = react.useCallback((arg0) => {
    let contentHeight;
    let viewportHeight;
    const merged = Object.assign(ref.current, arg0);
    ({ contentHeight, viewportHeight } = ref.current);
    if (contentHeight > 0) {
      if (viewportHeight > 0) {
        const _Math = Math;
        const diff = contentHeight - viewportHeight;
        const result = sharedValue.set(Math.max(0, diff - closure_0.get()) > tmp2 + closure_1);
      }
    }
  }, items);
  const items1 = [sharedValue, callback];
  return react.useMemo(() => {
    let obj = {
      isScrolledAboveTryItOutSection: sharedValue,
      onScroll(contentHeight) {
        const obj = { contentHeight: contentHeight.contentSize.height, viewportHeight: contentHeight.layoutMeasurement.height };
        return callback(obj);
      },
      onContentSizeChange(arg0, contentHeight) {
        const obj = { contentHeight };
        return callback(obj);
      },
      onScrollViewLayout(nativeEvent) {
        const obj = { viewportHeight: nativeEvent.nativeEvent.layout.height };
        return callback(obj);
      },
      onTryItOutSectionLayout(nativeEvent) {
        const obj = { tryItOutSectionHeight: nativeEvent.nativeEvent.layout.height };
        return callback(obj);
      }
    };
    return obj;
  }, items1);
});
let result = size.fileFinishedImporting("modules/user_profile/native/useTryItOutUpsellScrollTracking.tsx");

export default tmp2;
