// Module ID: 13006
// Function ID: 13007
// Name: useConjurePerfTraceTree
// Dependencies: [32, 19, 10894, 2]
// Exports: default

// Module 13006 (useConjurePerfTraceTree)
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 10894 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let set;
let react = react_mod;
let obj = { collapsed: set, revealed: new Set() };
set = new Set();
new Set();
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/useConjurePerfTraceTree.tsx");

export default function useConjurePerfTraceTree(arg0) {
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
      obj = closure_0(memo[2]);
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
        obj = closure_2_0(memo[2]);
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
        obj = closure_2_0(memo[2]);
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
};
