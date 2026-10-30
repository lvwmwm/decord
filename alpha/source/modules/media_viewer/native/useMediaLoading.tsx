// Module ID: 14753
// Function ID: 14754
// Name: useMediaLoading
// Dependencies: [32, 19, 7126, 2]
// Exports: default

// Module 14753 (useMediaLoading)
import reactDefault from "react" /* 7126 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaLoading.tsx");

export default function useMediaLoading(onLoad) {
  let c3;
  let closure_4;
  let closure_5;
  let first;
  let first1;
  let items1;
  let items2;
  let items3;
  let tmp2;
  onLoad = onLoad.onLoad;
  const onError = onLoad.onError;
  const onLoadingVisible = onLoad.onLoadingVisible;
  c3 = undefined;
  closure_4 = undefined;
  closure_5 = undefined;
  let tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c3] = tmp;
  [first, closure_4] = react.useState(false);
  [first1, closure_5] = react.useState(0);
  let closure_6 = react.useRef("idle");
  let closure_7 = react.useRef(null);
  const callback = react.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [callback];
  const effect = react.useEffect(() => callback, items);
  const tmp9 = reactDefault(() => {
    let tmp;
    if (onLoadingVisible != null) {
      tmp = onLoadingVisible();
    }
    return tmp;
  });
  let closure_9 = tmp9;
  const obj = {
    hasError: tmp2,
    isLoadingVisible: first,
    progress: first1,
    handleLoadStart: react.useCallback(() => {
      if ("idle" === closure_6.current) {
        tmp.current = "loading";
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          ref.current = null;
          closure_1_4(true);
          closure_1_9();
        }, 1000);
      }
    }, items1),
    handleLoad: react.useCallback(() => {
      const tmp2 = "loaded" !== closure_6.current && "error" !== tmp.current;
      if (tmp2) {
        callback();
        closure_6.current = "loaded";
        closure_4(false);
        if (onLoad != null) {
          onLoad();
        }
      }
    }, items2),
    handleError: react.useCallback(() => {
      if ("error" !== closure_6.current) {
        callback();
        tmp.current = "error";
        _undefined(true);
        closure_4(false);
        if (onError != null) {
          onError();
        }
      }
    }, items3),
    handleProgress: react.useCallback((arg0, arg1) => {
      const tmp = "loaded" !== closure_6.current && "error" !== closure_6.current;
      if (tmp) {
        let num2 = 0;
        const tmp3 = closure_5;
        if (arg1 > 0) {
          const _Math = Math;
          const _Math2 = Math;
          num2 = Math.max(0, Math.min(100, 100 * arg0 / arg1));
        }
        tmp3(num2);
      }
    }, [])
  };
  items1 = [tmp9];
  items2 = [callback, onLoad];
  items3 = [callback, onError];
  return obj;
};
