// Module ID: 15323
// Function ID: 15324
// Name: useFrameMonitor
// Dependencies: [32, 19, 558, 576, 15321, 2]

// Module 15323 (useFrameMonitor)
import startFrameMonitor from "startFrameMonitor" /* 15321 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, cResult;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((cResult) => {
  let ref;
  let ref2;
  let tmp10;
  let tmp13;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  _require = cResult;
  let obj = require("react");
  cResult = obj.c(9);
  [tmp3, dependencyMap] = _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  _slicedToArray = react.useRef(null);
  react = react.useRef(cResult);
  if (cResult[0] !== cResult) {
    const fn = function c() {
      ref2.current = current;
    };
    const items = [cResult];
    cResult[0] = cResult;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      current = ref.current;
      const tmp = ref;
      if (current != null) {
        current.stop();
      }
      const obj = startFrameMonitor;
      tmp.current = obj.startFrameMonitor();
      dependencyMap(true);
    };
    cResult[3] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        current = ref.current;
        if (null != current) {
          ref.current = null;
          const stopResult = current.stop();
          dependencyMap(false);
          ref2.current(stopResult);
        }
      }
    }
    cResult[4] = R;
    tmp8 = R;
  } else {
    class R {
      constructor() {
        current = ref.current;
        if (null != current) {
          ref.current = null;
          const stopResult = current.stop();
          dependencyMap(false);
          ref2.current(stopResult);
        }
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        current = ref.current;
        if (null != current) {
          ref.current = null;
          const stopResult = current.stop();
          dependencyMap(false);
          ref2.current(stopResult);
        }
      }
    }
    const items1 = [];
    cResult[5] = tmp11;
    cResult[6] = items1;
    tmp10 = items1;
    tmp9 = tmp11;
  } else {
    class R {
      constructor() {
        current = ref.current;
        if (null != current) {
          ref.current = null;
          const stopResult = current.stop();
          dependencyMap(false);
          ref2.current(stopResult);
        }
      }
    }
    tmp10 = cResult[6];
  }
  const effect1 = obj2.useEffect(tmp9, tmp10);
  if (cResult[7] !== tmp3) {
    class R {
      constructor() {
        current = ref.current;
        if (null != current) {
          ref.current = null;
          const stopResult = current.stop();
          dependencyMap(false);
          ref2.current(stopResult);
        }
      }
    }
    tmp14[0] = tmp3;
    tmp14[1] = tmp7;
    tmp14[2] = tmp8;
    cResult[7] = tmp3;
    cResult[8] = tmp14;
    tmp13 = tmp14;
  } else {
    class R {
      constructor() {
        current = ref.current;
        if (null != current) {
          ref.current = null;
          const stopResult = current.stop();
          dependencyMap(false);
          ref2.current(stopResult);
        }
      }
    }
  }
  return tmp13;
}) : ((cResult) => {
  let closure_1;
  let monitoring;
  let ref;
  let ref2;
  let current = cResult;
  [monitoring, closure_1] = react.useState(false);
  _slicedToArray = react.useRef(null);
  react = react.useRef(cResult);
  const items = [cResult];
  const effect = react.useEffect(() => {
    ref2.current = current;
  }, items);
  const start = react.useCallback(() => {
    current = ref.current;
    const tmp = ref;
    if (current != null) {
      current.stop();
    }
    const obj = startFrameMonitor;
    tmp.current = obj.startFrameMonitor();
    closure_1(true);
  }, []);
  const stop = react.useCallback(() => {
    current = ref.current;
    if (null != current) {
      ref.current = null;
      const stopResult = current.stop();
      closure_1(false);
      ref2.current(stopResult);
    }
  }, []);
  const effect1 = react.useEffect(() => () => {
    current = ref.current;
    const tmp = ref;
    if (current != null) {
      current.stop();
    }
    tmp.current = null;
  }, []);
  return { monitoring, start, stop };
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useFrameMonitor.tsx");

export default tmp2;
