// Module ID: 17282
// Function ID: 17283
// Name: useConjurePerfTraceTree
// Dependencies: [32, 19, 558, 576, 13224, 2]

// Module 17282 (useConjurePerfTraceTree)
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 13224 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, tmp3, tmp5;

let set;
let react = react_mod;
let obj = { collapsed: set, revealed: new Set() };
set = new Set();
new Set();
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePerfTraceTree(spans) {
  let ref;
  let selectedKey;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp27;
  let tmp4;
  let tmp6;
  let tmp8;
  let visiblePerfTraceRowsResult;
  const tmp = _require;
  obj = require("react");
  const cResult = obj.c(38);
  if (cResult[0] !== spans) {
    let perfTraceTreeResult = null;
    if (null != spans) {
      const tmpResult = tmp(13224);
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
    const fn = function o() {
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
  const tmp11 = tmp9[1];
  if (cResult[4] !== tmp4) {
    if (null == tmp4) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
    } else {
      const tmpResult2 = tmp(13224);
      set = tmpResult2.perfTraceKeys(tmp4);
    }
    cResult[4] = tmp4;
    cResult[5] = set;
    tmp12 = set;
  } else {
    tmp12 = cResult[5];
  }
  react = obj3.useRef(tmp12);
  if (cResult[6] !== tmp4) {
    class C {
      constructor() {
        if (null != current) {
          tmp2 = closure_3;
          current = closure_3.current;
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj = closure_0(closure_1[4]);
          closure_3.current = obj.perfTraceKeys(tmp);
          tmp5 = closure_1;
          tmp6 = closure_1((collapsed) => {
            obj = ConjurePerfTraceLayout;
            return obj.extendView(collapsed, closure_0, current);
          });
        }
        return;
      }
    }
    const items = [tmp4];
    cResult[6] = tmp4;
    cResult[7] = C;
    cResult[8] = items;
    tmp16 = items;
    tmp15 = C;
  } else {
    class C {
      constructor() {
        if (null != current) {
          tmp2 = closure_3;
          current = closure_3.current;
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj = closure_0(closure_1[4]);
          closure_3.current = obj.perfTraceKeys(tmp);
          tmp5 = closure_1;
          tmp6 = closure_1((collapsed) => {
            obj = ConjurePerfTraceLayout;
            return obj.extendView(collapsed, closure_0, current);
          });
        }
        return;
      }
    }
    tmp16 = cResult[8];
  }
  const effect = obj3.useEffect(tmp15, tmp16);
  if (cResult[9] === tmp4) {
    let tmp21;
    let tmp28;
    class C {
      constructor() {
        if (null != current) {
          tmp2 = closure_3;
          current = closure_3.current;
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj = closure_0(closure_1[4]);
          closure_3.current = obj.perfTraceKeys(tmp);
          tmp5 = closure_1;
          tmp6 = closure_1((collapsed) => {
            obj = ConjurePerfTraceLayout;
            return obj.extendView(collapsed, closure_0, current);
          });
        }
        return;
      }
    }
    if (cResult[12] !== tmp4) {
      class K {
        constructor(arg0) {
          findPerfTraceNodeResult = null;
          if (null != closure_0) {
            tmp3 = spans;
            tmp4 = closure_0;
            tmp5 = closure_1;
            obj = closure_0(closure_1[4]);
            findPerfTraceNodeResult = obj.findPerfTraceNode(tmp, spans);
          }
          closure_0 = findPerfTraceNodeResult;
          if (null != findPerfTraceNodeResult) {
            tmp6 = closure_1;
            tmp7 = closure_1((collapsed) => {
              obj = closure_2_0(closure_2_1[4]);
              return obj.toggleNode(collapsed, findPerfTraceNodeResult);
            });
          }
          return;
        }
      }
      cResult[12] = tmp4;
      cResult[13] = K;
    } else {
      class K {
        constructor(arg0) {
          findPerfTraceNodeResult = null;
          if (null != closure_0) {
            tmp3 = spans;
            tmp4 = closure_0;
            tmp5 = closure_1;
            obj = closure_0(closure_1[4]);
            findPerfTraceNodeResult = obj.findPerfTraceNode(tmp, spans);
          }
          closure_0 = findPerfTraceNodeResult;
          if (null != findPerfTraceNodeResult) {
            tmp6 = closure_1;
            tmp7 = closure_1((collapsed) => {
              obj = closure_2_0(closure_2_1[4]);
              return obj.toggleNode(collapsed, findPerfTraceNodeResult);
            });
          }
          return;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class K {
        constructor(arg0) {
          findPerfTraceNodeResult = null;
          if (null != closure_0) {
            tmp3 = spans;
            tmp4 = closure_0;
            tmp5 = closure_1;
            obj = closure_0(closure_1[4]);
            findPerfTraceNodeResult = obj.findPerfTraceNode(tmp, spans);
          }
          closure_0 = findPerfTraceNodeResult;
          if (null != findPerfTraceNodeResult) {
            tmp6 = closure_1;
            tmp7 = closure_1((collapsed) => {
              obj = closure_2_0(closure_2_1[4]);
              return obj.toggleNode(collapsed, findPerfTraceNodeResult);
            });
          }
          return;
        }
      }
      cResult[14] = tmp22;
      tmp21 = tmp22;
    } else {
      class K {
        constructor(arg0) {
          findPerfTraceNodeResult = null;
          if (null != closure_0) {
            tmp3 = spans;
            tmp4 = closure_0;
            tmp5 = closure_1;
            obj = closure_0(closure_1[4]);
            findPerfTraceNodeResult = obj.findPerfTraceNode(tmp, spans);
          }
          closure_0 = findPerfTraceNodeResult;
          if (null != findPerfTraceNodeResult) {
            tmp6 = closure_1;
            tmp7 = closure_1((collapsed) => {
              obj = closure_2_0(closure_2_1[4]);
              return obj.toggleNode(collapsed, findPerfTraceNodeResult);
            });
          }
          return;
        }
      }
    }
    if (cResult[15] !== tmp4) {
      class A {
        constructor(arg0) {
          findPerfTraceNodeResult = null;
          if (null != closure_0) {
            tmp3 = spans;
            tmp4 = closure_0;
            tmp5 = closure_1;
            obj = closure_0(closure_1[4]);
            findPerfTraceNodeResult = obj.findPerfTraceNode(tmp, spans);
          }
          closure_0 = findPerfTraceNodeResult;
          if (null != findPerfTraceNodeResult) {
            tmp6 = closure_1;
            tmp7 = closure_1((collapsed) => {
              obj = closure_2_0(closure_2_1[4]);
              return obj.expandSubtree(collapsed, findPerfTraceNodeResult);
            });
          }
          return;
        }
      }
      cResult[15] = tmp4;
      cResult[16] = A;
    } else {
      class A {
        constructor(arg0) {
          findPerfTraceNodeResult = null;
          if (null != closure_0) {
            tmp3 = spans;
            tmp4 = closure_0;
            tmp5 = closure_1;
            obj = closure_0(closure_1[4]);
            findPerfTraceNodeResult = obj.findPerfTraceNode(tmp, spans);
          }
          closure_0 = findPerfTraceNodeResult;
          if (null != findPerfTraceNodeResult) {
            tmp6 = closure_1;
            tmp7 = closure_1((collapsed) => {
              obj = closure_2_0(closure_2_1[4]);
              return obj.expandSubtree(collapsed, findPerfTraceNodeResult);
            });
          }
          return;
        }
      }
    }
    if (cResult[17] !== tmp4) {
      class M {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.expandedView(tmp));
          }
        }
      }
      cResult[17] = tmp4;
      cResult[18] = M;
    } else {
      class M {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.expandedView(tmp));
          }
        }
      }
    }
    if (cResult[19] !== tmp4) {
      class F {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.collapsedView(tmp));
          }
        }
      }
      cResult[19] = tmp4;
      cResult[20] = F;
    } else {
      class F {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.collapsedView(tmp));
          }
        }
      }
    }
    if (cResult[21] !== tmp4) {
      class O {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.overviewView(tmp));
          }
        }
      }
      cResult[21] = tmp4;
      cResult[22] = O;
    } else {
      class O {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.overviewView(tmp));
          }
        }
      }
    }
    if (cResult[23] === arr2) {
      class O {
        constructor() {
          if (null != closure_0) {
            obj = ConjurePerfTraceLayout;
            dependencyMap(obj.overviewView(tmp));
          }
        }
      }
      if (tmp27 != null) {
        class O {
          constructor() {
            if (null != closure_0) {
              obj = ConjurePerfTraceLayout;
              dependencyMap(obj.overviewView(tmp));
            }
          }
        }
      }
      if ("node" === undefined) {
        class O {
          constructor() {
            if (null != closure_0) {
              obj = ConjurePerfTraceLayout;
              dependencyMap(obj.overviewView(tmp));
            }
          }
        }
      }
      if (cResult[28] === tmp25) {
        class O {
          constructor() {
            if (null != closure_0) {
              obj = ConjurePerfTraceLayout;
              dependencyMap(obj.overviewView(tmp));
            }
          }
        }
      }
      const obj2 = { rows: arr2, collapsed: tmp8.collapsed, selectedKey, selected: null, toggle: tmp19, reveal: tmp21, expandSubtree: tmp23, select: tmp11, expandAll: tmp24, collapseAll: tmp25, reset: tmp26 };
      cResult[28] = tmp25;
      cResult[29] = tmp24;
      cResult[30] = tmp23;
      cResult[31] = tmp26;
      cResult[32] = arr2;
      cResult[33] = selectedKey;
      cResult[34] = null;
      cResult[35] = tmp19;
      cResult[36] = tmp8.collapsed;
      cResult[37] = obj2;
    }
    if (cResult[26] !== selectedKey) {
      class B {
        constructor(key) {
          return key.key === first;
        }
      }
      cResult[26] = selectedKey;
      cResult[27] = B;
      tmp28 = B;
    } else {
      class B {
        constructor(key) {
          return key.key === first;
        }
      }
    }
    const found = arr2.find(tmp28);
    cResult[23] = arr2;
    cResult[24] = selectedKey;
    cResult[25] = found;
    tmp27 = found;
  }
  if (null == tmp4) {
    class B {
      constructor(key) {
        return key.key === first;
      }
    }
  } else {
    class B {
      constructor(key) {
        return key.key === first;
      }
    }
    visiblePerfTraceRowsResult = obj5.visiblePerfTraceRows(tmp4, tmp8);
  }
  cResult[9] = tmp4;
  cResult[10] = tmp8;
  cResult[11] = visiblePerfTraceRowsResult;
}) : (function useConjurePerfTraceTree(arg0) {
  let closure_3;
  let first;
  let node;
  _require = arg0;
  obj = react;
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
  const useRef = react.useRef;
  const tmp6 = tmp4[1];
  if (null == memo) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
  } else {
    const obj2 = require("ConjurePerfTraceLayout");
    set = obj2.perfTraceKeys(memo);
  }
  const ref = useRef(set);
  const items1 = [memo];
  const effect = obj.useEffect(() => {
    if (null != memo) {
      const current = ref.current;
      obj = closure_0(memo[4]);
      ref.current = obj.perfTraceKeys(tmp);
      closure_3((collapsed) => {
        obj = ConjurePerfTraceLayout;
        return obj.extendView(collapsed, memo, current);
      });
    }
  }, items1);
  const items2 = [memo, first];
  const memo1 = obj.useMemo(() => {
    let items;
    if (null == memo) {
      items = [];
    } else {
      obj = ConjurePerfTraceLayout;
      items = obj.visiblePerfTraceRows(tmp, first);
    }
    return items;
  }, items2);
  const items3 = [memo];
  const callback = obj.useCallback((arg0) => {
    let findPerfTraceNodeResult = null;
    if (null != memo) {
      obj = ConjurePerfTraceLayout;
      findPerfTraceNodeResult = obj.findPerfTraceNode(tmp, arg0);
    }
    if (null != findPerfTraceNodeResult) {
      closure_3((collapsed) => {
        obj = closure_2_0(memo[4]);
        return obj.toggleNode(collapsed, findPerfTraceNodeResult);
      });
    }
  }, items3);
  const items4 = [memo];
  const callback1 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3((revealed) => {
      obj = { revealed: set.add(closure_0) };
      const merged = Object.assign(revealed);
      set = new Set(revealed.revealed);
      return obj;
    });
  }, []);
  const items5 = [memo];
  const callback2 = obj.useCallback((arg0) => {
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
  }, items4);
  const items6 = [memo];
  const callback3 = obj.useCallback(() => {
    if (null != memo) {
      obj = ConjurePerfTraceLayout;
      closure_3(obj.expandedView(tmp));
    }
  }, items5);
  const items7 = [memo];
  const callback4 = obj.useCallback(() => {
    if (null != memo) {
      obj = ConjurePerfTraceLayout;
      closure_3(obj.collapsedView(tmp));
    }
  }, items6);
  const callback5 = obj.useCallback(() => {
    if (null != memo) {
      obj = ConjurePerfTraceLayout;
      closure_3(obj.overviewView(tmp));
    }
  }, items7);
  const found = memo1.find((key) => key.key === first1);
  let kind;
  const obj3 = { rows: memo1, collapsed: first.collapsed, selectedKey: first1, selected: node, toggle: callback, reveal: callback1, expandSubtree: callback2, select: tmp6, expandAll: callback3, collapseAll: callback4, reset: callback5 };
  if (found != null) {
    kind = found.kind;
  }
  node = null;
  if ("node" === kind) {
    node = found.node;
  }
  return obj3;
});
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/useConjurePerfTraceTree.tsx");

export default tmp4;
