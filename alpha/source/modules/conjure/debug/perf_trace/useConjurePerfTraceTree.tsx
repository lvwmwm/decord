// Module ID: 17069
// Function ID: 17070
// Name: useConjurePerfTraceTree
// Dependencies: [32, 19, 558, 576, 17068, 2]

// Module 17069 (useConjurePerfTraceTree)
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 17068 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let set;
let react = react_mod;
let obj = { collapsed: set, revealed: new Set() };
set = new Set();
new Set();
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePerfTraceTree(spans) {
  let selectedKey;
  let tmp21;
  let tmp4;
  let tmp6;
  let tmp8;
  let visiblePerfTraceRowsResult;
  const tmp = _require;
  obj = require("react");
  const cResult = obj.c(31);
  if (cResult[0] !== spans) {
    let perfTraceTreeResult = null;
    if (null != spans) {
      const tmpResult = tmp(17068);
      perfTraceTreeResult = tmpResult.perfTraceTree(spans);
    }
    cResult[0] = spans;
    cResult[1] = perfTraceTreeResult;
    tmp4 = perfTraceTreeResult;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] !== tmp4) {
    const fn = function t() {
      let overviewViewResult;
      if (null == closure_0) {
        overviewViewResult = obj;
      } else {
        obj = ConjurePerfTraceLayout;
        overviewViewResult = obj.overviewView(tmp);
      }
      return overviewViewResult;
    };
    cResult[2] = tmp4;
    cResult[3] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[3];
  }
  [tmp8, dependencyMap] = selectedKey(react.useState(tmp6), 2);
  const tmp7 = selectedKey(react.useState(tmp6), 2);
  const tmp9 = selectedKey(react.useState(null), 2);
  selectedKey = tmp9[0];
  if (cResult[4] === tmp4) {
    let arr;
    let tmp14;
    let tmp15;
    let tmp22;
    if (cResult[5] === tmp8) {
      arr = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function _(arg0) {
        closure_0 = arg0;
        dependencyMap((collapsed) => {
          set = new Set(collapsed.collapsed);
          if (set.has(closure_0)) {
            set.delete(closure_0);
          } else {
            set.add(closure_0);
          }
          obj = { collapsed: set };
          const merged = Object.assign(collapsed);
          return obj;
        });
      };
      cResult[7] = fn2;
      tmp14 = fn2;
    } else {
      tmp14 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          closure_0 = arg0;
          dependencyMap((revealed) => {
            obj = { revealed: set.add(closure_0) };
            const merged = Object.assign(revealed);
            set = new Set(revealed.revealed);
            return obj;
          });
        }
      }
      cResult[8] = V;
      tmp15 = V;
    } else {
      class V {
        constructor(arg0) {
          closure_0 = arg0;
          dependencyMap((revealed) => {
            obj = { revealed: set.add(closure_0) };
            const merged = Object.assign(revealed);
            set = new Set(revealed.revealed);
            return obj;
          });
        }
      }
    }
    if (cResult[9] !== tmp4) {
      class V {
        constructor(arg0) {
          closure_0 = arg0;
          dependencyMap((revealed) => {
            obj = { revealed: set.add(closure_0) };
            const merged = Object.assign(revealed);
            set = new Set(revealed.revealed);
            return obj;
          });
        }
      }
      cResult[9] = tmp4;
      cResult[10] = tmp17;
    } else {
      class V {
        constructor(arg0) {
          closure_0 = arg0;
          dependencyMap((revealed) => {
            obj = { revealed: set.add(closure_0) };
            const merged = Object.assign(revealed);
            set = new Set(revealed.revealed);
            return obj;
          });
        }
      }
    }
    if (cResult[11] !== tmp4) {
      class A {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.expandedView(tmp));
          }
        }
      }
      cResult[11] = tmp4;
      cResult[12] = A;
    } else {
      class A {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.expandedView(tmp));
          }
        }
      }
    }
    if (cResult[13] !== tmp4) {
      class R {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.collapsedView(tmp));
          }
        }
      }
      cResult[13] = tmp4;
      cResult[14] = R;
    } else {
      class R {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.collapsedView(tmp));
          }
        }
      }
    }
    if (cResult[15] !== tmp4) {
      class N {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.overviewView(tmp));
          }
        }
      }
      cResult[15] = tmp4;
      cResult[16] = N;
    } else {
      class N {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.overviewView(tmp));
          }
        }
      }
    }
    if (cResult[17] === arr) {
      class N {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.overviewView(tmp));
          }
        }
      }
      if (tmp21 != null) {
        class N {
          constructor() {
            if (null != closure_0) {
              obj = ConjurePerfTraceLayout;
              dependencyMap(obj.overviewView(tmp));
            }
          }
        }
      }
      if ("node" === undefined) {
        class N {
          constructor() {
            if (null != closure_0) {
              obj = ConjurePerfTraceLayout;
              dependencyMap(obj.overviewView(tmp));
            }
          }
        }
      }
      if (cResult[22] === tmp19) {
        class N {
          constructor() {
            if (null != closure_0) {
              obj = ConjurePerfTraceLayout;
              dependencyMap(obj.overviewView(tmp));
            }
          }
        }
      }
      const obj2 = { rows: arr, collapsed: tmp8.collapsed, selectedKey, selected: null, toggle: tmp14, reveal: tmp15, expandSubtree: tmp16, select: tmp11, expandAll: tmp18, collapseAll: tmp19, reset: tmp20 };
      cResult[22] = tmp19;
      cResult[23] = tmp18;
      cResult[24] = tmp16;
      cResult[25] = tmp20;
      cResult[26] = arr;
      cResult[27] = selectedKey;
      cResult[28] = null;
      cResult[29] = tmp8.collapsed;
      cResult[30] = obj2;
    }
    if (cResult[20] !== selectedKey) {
      class I {
        constructor(key) {
          return key.key === first;
        }
      }
      cResult[20] = selectedKey;
      cResult[21] = I;
      tmp22 = I;
    } else {
      class I {
        constructor(key) {
          return key.key === first;
        }
      }
    }
    const found = arr.find(tmp22);
    cResult[17] = arr;
    cResult[18] = selectedKey;
    cResult[19] = found;
    tmp21 = found;
  }
  if (null == tmp4) {
    class I {
      constructor(key) {
        return key.key === first;
      }
    }
  } else {
    class I {
      constructor(key) {
        return key.key === first;
      }
    }
    visiblePerfTraceRowsResult = obj3.visiblePerfTraceRows(tmp4, tmp8);
  }
  cResult[4] = tmp4;
  cResult[5] = tmp8;
  cResult[6] = visiblePerfTraceRowsResult;
  arr = visiblePerfTraceRowsResult;
}) : (function useConjurePerfTraceTree(arg0) {
  let closure_3;
  let first;
  let node;
  let closure_0 = arg0;
  let items = [arg0];
  const memo = react.useMemo(() => {
    let perfTraceTreeResult = null;
    if (null != closure_0) {
      obj = ConjurePerfTraceLayout;
      perfTraceTreeResult = obj.perfTraceTree(tmp);
    }
    return perfTraceTreeResult;
  }, items);
  const tmp2 = first(react.useState(() => {
    let overviewViewResult;
    if (null == memo) {
      overviewViewResult = obj;
    } else {
      obj = ConjurePerfTraceLayout;
      overviewViewResult = obj.overviewView(tmp);
    }
    return overviewViewResult;
  }), 2);
  first = tmp2[0];
  react = tmp2[1];
  const tmp4 = first(react.useState(null), 2);
  const first1 = tmp4[0];
  const items1 = [memo, first];
  const tmp6 = tmp4[1];
  const memo1 = react.useMemo(() => {
    let items;
    if (null == memo) {
      items = [];
    } else {
      obj = ConjurePerfTraceLayout;
      items = obj.visiblePerfTraceRows(tmp, first);
    }
    return items;
  }, items1);
  const callback = react.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3((collapsed) => {
      set = new Set(collapsed.collapsed);
      if (set.has(closure_0)) {
        set.delete(closure_0);
      } else {
        set.add(closure_0);
      }
      obj = { collapsed: set };
      const merged = Object.assign(collapsed);
      return obj;
    });
  }, []);
  const items2 = [memo];
  const callback1 = react.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3((revealed) => {
      obj = { revealed: set.add(closure_0) };
      const merged = Object.assign(revealed);
      set = new Set(revealed.revealed);
      return obj;
    });
  }, []);
  const items3 = [memo];
  const callback2 = react.useCallback((arg0) => {
    let findPerfTraceNodeResult = null;
    if (null != memo) {
      obj = ConjurePerfTraceLayout;
      findPerfTraceNodeResult = obj.findPerfTraceNode(tmp, arg0);
    }
    if (null != findPerfTraceNodeResult) {
      closure_3((collapsed) => {
        obj = closure_2_0(memo[4]);
        return obj.expandSubtree(collapsed, findPerfTraceNodeResult);
      });
    }
  }, items2);
  const items4 = [memo];
  const callback3 = react.useCallback(() => {
    if (null != memo) {
      obj = ConjurePerfTraceLayout;
      closure_3(obj.expandedView(tmp));
    }
  }, items3);
  const items5 = [memo];
  const callback4 = react.useCallback(() => {
    if (null != memo) {
      obj = ConjurePerfTraceLayout;
      closure_3(obj.collapsedView(tmp));
    }
  }, items4);
  const callback5 = react.useCallback(() => {
    if (null != memo) {
      obj = ConjurePerfTraceLayout;
      closure_3(obj.overviewView(tmp));
    }
  }, items5);
  const found = memo1.find((key) => key.key === first1);
  obj = { rows: memo1, collapsed: first.collapsed, selectedKey: first1, selected: node, toggle: callback, reveal: callback1, expandSubtree: callback2, select: tmp6, expandAll: callback3, collapseAll: callback4, reset: callback5 };
  let kind;
  if (found != null) {
    kind = found.kind;
  }
  node = null;
  if ("node" === kind) {
    node = found.node;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/useConjurePerfTraceTree.tsx");

export default tmp4;
