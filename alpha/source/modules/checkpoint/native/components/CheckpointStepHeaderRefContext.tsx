// Module ID: 13259
// Function ID: 13260
// Name: CheckpointStepHeaderRefContext
// Dependencies: [19, 21, 558, 576, 5304, 6009, 2]

// Module 13259 (CheckpointStepHeaderRefContext)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const context = react.createContext(undefined);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointStepFocusProvider(arg0) {
  let children;
  let closure_0;
  let first;
  let isScreenReaderEnabled;
  let route;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(8);
  ({ route, children } = arg0);
  let obj2 = react;
  const tmp = _require;
  _require = react.useRef(null);
  const tmp2 = isScreenReaderEnabled;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(current) {
      closure_0.current = current;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(tmp2[4]);
  isScreenReaderEnabled = tmpResult.useIsScreenReaderEnabled();
  if (cResult[1] !== isScreenReaderEnabled) {
    const fn2 = function p() {
      if (isScreenReaderEnabled) {
        const _setTimeout = setTimeout;
        const ref = setTimeout(() => {
          const obj = ref(isScreenReaderEnabled[5]);
          const obj2 = { ref };
          return obj.setAccessibilityFocus(obj2);
        }, 100);
        return () => clearTimeout(ref);
      }
    };
    cResult[1] = isScreenReaderEnabled;
    cResult[2] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === isScreenReaderEnabled) {
    let tmp7;
    let tmp9;
    if (cResult[4] === route) {
      tmp7 = cResult[5];
    }
    const effect = obj2.useEffect(tmp6, tmp7);
    if (cResult[6] !== children) {
      const tmp12 = <context.Provider value={first}>{children}</context.Provider>;
      cResult[6] = children;
      cResult[7] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[7];
    }
    return tmp9;
  }
  const items = [route, isScreenReaderEnabled];
  cResult[3] = isScreenReaderEnabled;
  cResult[4] = route;
  cResult[5] = items;
  tmp7 = items;
}) : (function CheckpointStepFocusProvider(arg0) {
  let children;
  let closure_0;
  let route;
  let isScreenReaderEnabled;
  ({ route, children } = arg0);
  _require = react.useRef(null);
  const value = react.useCallback((current) => {
    closure_0.current = current;
  }, []);
  let obj = require("useIsScreenReaderEnabled");
  isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const items = [route, isScreenReaderEnabled];
  const effect = react.useEffect(() => {
    if (isScreenReaderEnabled) {
      const _setTimeout = setTimeout;
      const ref = setTimeout(() => {
        const obj = ref(isScreenReaderEnabled[5]);
        const obj2 = { ref };
        return obj.setAccessibilityFocus(obj2);
      }, 100);
      return () => clearTimeout(ref);
    }
  }, items);
  return <context.Provider value={value}>{children}</context.Provider>;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStepHeaderRefContext.tsx");

export default context;
export const CheckpointStepFocusProvider = tmp3;
