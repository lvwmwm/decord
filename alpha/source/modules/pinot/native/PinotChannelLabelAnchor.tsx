// Module ID: 11078
// Function ID: 11079
// Name: PinotChannelLabelAnchor
// Dependencies: [32, 19, 570, 558, 576, 2]

// Module 11078 (PinotChannelLabelAnchor)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, dependencyMap, labels;

let closure_4 = module_570.create(() => ({ labels: {} }));
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotChannelLabelAnchor(arg0) {
  let closure_0;
  let closure_1;
  let state;
  let tmp2;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(7);
  dependencyMap = react.useRef(null);
  if (cResult[0] !== arg0) {
    const fn = function t() {
      let ref;
      state.setState((labels) => {
        labels = labels.labels;
        const current = ref.current;
        let num;
        const tmp = closure_1_0;
        if (labels[closure_1_0] != null) {
          num = tmp2.layoutVersion;
        }
        if (num == null) {
          num = 0;
        }
        const labels2 = {};
        const sum = num + 1;
        const merged = Object.assign(labels);
        let tmp5;
        if (null != current) {
          tmp5 = { view: current, layoutVersion: sum };
          const obj = { view: current, layoutVersion: sum };
        }
        labels2[tmp] = tmp5;
        return { labels: labels2 };
      });
    };
    let num = 0;
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  let closure_2 = tmp2;
  if (cResult[2] !== tmp2) {
    const fn2 = function c(current) {
      closure_1.current = current;
      closure_2();
    };
    cResult[2] = tmp2;
    cResult[3] = fn2;
    tmp3 = fn2;
  } else {
    tmp3 = cResult[3];
  }
  if (cResult[4] === tmp2) {
    let tmp4;
    if (cResult[5] === tmp3) {
      tmp4 = cResult[6];
    }
    return tmp4;
  }
  const obj2 = { ref: tmp3, onLayout: tmp2 };
  cResult[4] = tmp2;
  cResult[5] = tmp3;
  cResult[6] = obj2;
  tmp4 = obj2;
}) : (function usePinotChannelLabelAnchor(arg0) {
  let items1;
  let state;
  let closure_0 = arg0;
  let closure_1 = react.useRef(null);
  const items = [arg0];
  const onLayout = react.useCallback(() => {
    let ref;
    state.setState((labels) => {
      labels = labels.labels;
      const current = ref.current;
      let num;
      const tmp = closure_1_0;
      if (labels[closure_1_0] != null) {
        num = tmp2.layoutVersion;
      }
      if (num == null) {
        num = 0;
      }
      const labels2 = {};
      const sum = num + 1;
      const merged = Object.assign(labels);
      let tmp5;
      if (null != current) {
        tmp5 = { view: current, layoutVersion: sum };
        const obj = { view: current, layoutVersion: sum };
      }
      labels2[tmp] = tmp5;
      return { labels: labels2 };
    });
  }, items);
  let obj = {
    ref: react.useCallback((current) => {
      closure_1.current = current;
      callback();
    }, items1),
    onLayout
  };
  items1 = [onLayout];
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotChannelLabelCenter(arg0, arg1) {
  let closure_129_3;
  let first;
  let tmp2;
  let tmp4;
  let tmp7;
  let tmp9;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== arg0) {
    const fn = function s(arg0) {
      let tmp = arg0.labels[closure_0];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = closure_4(tmp2);
  let closure_2 = tmp3;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b(arg0) {
      return arg0 + 1;
    };
    cResult[2] = fn2;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[2];
  }
  [first, tmp7] = react.useReducer(tmp4, 0);
  [tmp9, closure_129_3] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const obj2 = react;
  if (cResult[3] === arg1) {
    let tmp10;
    if (cResult[4] === tmp3) {
      tmp10 = cResult[5];
    }
    if (cResult[6] === first) {
      if (cResult[7] === arg1) {
        let tmp11;
        if (cResult[8] === tmp3) {
          tmp11 = cResult[9];
        }
        const effect = obj2.useEffect(tmp10, tmp11);
        let center = null;
        if (null != tmp3) {
          let label;
          if (tmp9 != null) {
            label = tmp9.label;
          }
          center = null;
          if (label === tmp3) {
            center = tmp9.center;
          }
        }
        if (cResult[10] === center) {
          let tmp16;
          if (cResult[11] === null != tmp3) {
            tmp16 = cResult[12];
          }
          return tmp16;
        }
        const obj3 = { hasLabel: null != tmp3, center, onContainerLayout: tmp7 };
        cResult[10] = center;
        cResult[11] = null != tmp3;
        cResult[12] = obj3;
        tmp16 = obj3;
      }
    }
    const items = [tmp3, arg1, first];
    cResult[6] = first;
    cResult[7] = arg1;
    cResult[8] = tmp3;
    cResult[9] = items;
    tmp11 = items;
  }
  const fn3 = function f() {
    let tmp;
    let current = ref.current;
    if (null != closure_2) {
      if (null != current) {
        const view = tmp.view;
        view.measureInWindow((arg0, arg1, arg2) => {
          let label;
          current = arg0;
          let closure_1 = arg2;
          let tmp = closure_1;
          if (!tmp) {
            tmp = 0 === arg2;
          }
          if (!tmp) {
            current.measureInWindow((arg0) => {
              const tmp = c1;
              if (!tmp) {
                const obj = { label, center: closure_0 - arg0 + closure_1 / 2 };
                closure_3_3(obj);
              }
            });
          }
        });
        return () => {
          c1 = true;
        };
      }
    }
  };
  cResult[3] = arg1;
  cResult[4] = tmp3;
  cResult[5] = fn3;
  tmp10 = fn3;
}) : (function usePinotChannelLabelCenter(arg0, arg1) {
  let closure_129_3;
  let tmp3;
  let tmp4;
  let tmp6;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let tmp = closure_4((arg0) => {
    let tmp = arg0.labels[closure_0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  });
  let closure_2 = tmp;
  const tmp2 = _slicedToArray(react.useReducer((arg0) => arg0 + 1, 0), 2);
  [tmp3, tmp4] = tmp2;
  [tmp6, closure_129_3] = _slicedToArray(react.useState(null), 2);
  const items = [tmp, arg1, tmp3];
  const tmp5 = _slicedToArray(react.useState(null), 2);
  const effect = react.useEffect(() => {
    let tmp;
    let current = ref.current;
    if (null != closure_2) {
      if (null != current) {
        const view = tmp.view;
        view.measureInWindow((arg0, arg1, arg2) => {
          let label;
          current = arg0;
          let closure_1 = arg2;
          let tmp = closure_1;
          if (!tmp) {
            tmp = 0 === arg2;
          }
          if (!tmp) {
            current.measureInWindow((arg0) => {
              const tmp = c1;
              if (!tmp) {
                const obj = { label, center: closure_0 - arg0 + closure_1 / 2 };
                closure_3_3(obj);
              }
            });
          }
        });
        return () => {
          c1 = true;
        };
      }
    }
  }, items);
  let center = null;
  if (null != tmp) {
    let label;
    if (tmp6 != null) {
      label = tmp6.label;
    }
    center = null;
    if (label === tmp) {
      center = tmp6.center;
    }
  }
  let obj = { hasLabel: null != tmp, center, onContainerLayout: tmp4 };
  return obj;
});
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabelAnchor.tsx");

export const usePinotChannelLabelAnchor = tmp2;
export const usePinotChannelLabelCenter = tmp3;
