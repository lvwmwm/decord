// Module ID: 13174
// Function ID: 13175
// Name: ConjurePerfTraceLayout
// Dependencies: [32, 2]
// Exports: collapsedView, expandSubtree, expandedView, extendView, findPerfTraceNode, formatSpanAttrs, overviewView, perfSpanSelfTimes, perfTimelineTicks, perfTraceExtent, perfTraceFinished, perfTraceInterrupted, perfTraceKeys, perfTraceRoot, perfTraceStatus, perfTraceTree, toggleNode, visiblePerfTraceRows

// Module 13174 (ConjurePerfTraceLayout)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map, set, set2;

const f114500 = (parent) => null == parent.parent;
const f114501 = (end) => null != end.end;
const f1145022 = (depth) => {
  let tmp = depth.depth > 0;
  if (tmp) {
    const children = depth.children;
    tmp = !children.some((significant) => significant.significant);
  }
  return tmp;
};
const f114503 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  combined = tmp;
  if (true !== tmp2) {
    const _String = String;
    const _HermesInternal = HermesInternal;
    combined = "" + tmp + "=" + String(tmp2);
  }
  return combined;
};
function walkNodes(findPerfTraceNodeResult, fn) {
  fn(findPerfTraceNodeResult);
  const tmp2 = findPerfTraceNodeResult.children[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = walkNodes(tmp3, fn);
    continue;
  }
}
function describePerfSpan(nextResult) {
  let combined;
  let str5;
  let substr;
  const name = nextResult.name;
  const searchResult = name.search(/[.:]/);
  const name1 = nextResult.name;
  if (-1 === searchResult) {
    substr = name1;
  } else {
    substr = name1.slice(0, searchResult);
  }
  let str = "";
  if (-1 !== searchResult) {
    const name2 = nextResult.name;
    str = name2.slice(searchResult + 1);
  }
  const str2 = str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  const str3 = str2.replace(/_/g, " ");
  const formatted = str3.toLowerCase();
  const attrs = nextResult.attrs;
  let cmd;
  if (attrs != null) {
    cmd = attrs.cmd;
  }
  if (cmd == null) {
    const attrs2 = nextResult.attrs;
    let model;
    if (attrs2 != null) {
      model = attrs2.model;
    }
    cmd = model;
  }
  const obj = { service: substr, operation: combined, category: str5 };
  combined = formatted;
  if (typeof cmd === "string") {
    combined = formatted;
    if ("" !== cmd) {
      const _HermesInternal = HermesInternal;
      combined = "" + formatted + " \u00B7 " + cmd;
    }
  }
  str5 = closure_1[substr];
  if (str5 == null) {
    str5 = "other";
  }
  return obj;
}
function foldKey(attrs) {
  attrs = attrs.attrs;
  let str = "";
  const name = attrs.name;
  if (null != attrs) {
    const _Object = Object;
    const entries = Object.entries(attrs);
    const mapped = entries.map(f114503);
    str = mapped.join(" ");
  }
  return "" + name + " " + str;
}
function childrenByParent(spans) {
  map = new Map();
  const iter = spans.spans[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let items = map.get(nextResult.parent);
    if (items == null) {
      items = [];
    }
    let arr = items.push(tmp2);
    let result = map.set(tmp2.parent, items);
    continue;
  }
  const values = map.values();
  for (const item10032 of values) {
    let sorted = item10032.sort((start, start2) => start.start - start2.start);
    continue;
  }
  return map;
}
function coveredMs(arg0, arr, arg2, arg3) {
  let tmp6;
  let tmp7;
  let closure_0 = arg0;
  closure_1 = arg2;
  let closure_2 = arg3;
  const mapped = arr.map((start) => {
    const items = [Math.max(start.start, closure_1), ];
    as_of = start.end;
    const _Math = Math;
    if (as_of == null) {
      as_of = as_of.as_of;
    }
    items[1] = min(as_of, closure_2);
    return items;
  });
  const found = mapped.filter((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return tmp2 > tmp;
  });
  const sorted = found.sort((arg0, arg1) => arg0[0] - arg1[0]);
  let num = 0;
  let num2 = -Infinity;
  const tmp2 = sorted[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    if (tmp7 > num2) {
      let _Math = Math;
      num = num + (tmp8 - Math.max(tmp6, num2));
      num2 = tmp8;
    }
    continue;
  }
  return num;
}
let _slicedToArray = _slicedToArray_mod;
let closure_1 = { op: "op", ws: "op", turn: "op", alarm: "op", side_chat: "op", session: "op", step: "op", model: "model", version_note: "model", tool: "tool", mcp: "tool", sandbox: "sandbox", worktree: "worktree", build: "build", deps: "build", api: "platform", state: "platform", publish: "platform", preview: "platform", healthcheck: "platform", usage: "platform", live: "platform", replay: "platform", template: "setup", workspace: "setup", declarations: "setup", manifest: "setup", storage: "setup", conversation: "setup", runtime: "setup", attachments: "setup", upstream: "setup", remix: "setup", repo: "setup" };
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceLayout.tsx");

export const PERF_CATEGORIES = ["op", "model", "tool", "setup", "worktree", "sandbox", "build", "platform", "other"];
export const perfTraceRoot = function perfTraceRoot(spans) {
  spans = spans.spans;
  let found = spans.find(f114500);
  if (found == null) {
    found = null;
  }
  return found;
};
export const perfTraceExtent = function perfTraceExtent(trace) {
  const spans = trace.spans;
  const items = [
    1,
    ...spans.map((end) => {
      let as_of = end.end;
      if (as_of == null) {
        as_of = trace.as_of;
      }
      return as_of;
    })
  ];
  return Math.max.apply(items);
};
export const perfTraceStatus = function perfTraceStatus(trace) {
  const spans = trace.spans;
  let str = "error";
  if (!spans.some((error) => null != error.error)) {
    const spans1 = trace.spans;
    let found = spans1.find(f114500);
    if (found == null) {
      found = null;
    }
    let ok;
    if (found != null) {
      const attrs = found.attrs;
      if (attrs != null) {
        ok = attrs.ok;
      }
    }
    str = "error";
    if (false !== ok) {
      let tmp4 = !trace.live;
      if (tmp4) {
        const spans2 = trace.spans;
        tmp4 = !spans2.every(f114501);
      }
      str = "error";
      if (!tmp4) {
        const spans3 = trace.spans;
        let str2 = "running";
        if (spans3.every(f114501)) {
          str2 = "ok";
        }
        str = str2;
      }
    }
  }
  return str;
};
export const perfTraceFinished = function perfTraceFinished(timingTrace) {
  const spans = timingTrace.spans;
  return spans.every(f114501);
};
export const perfTraceInterrupted = function perfTraceInterrupted(live) {
  let tmp = !live.live;
  if (tmp) {
    const spans = live.spans;
    tmp = !spans.every(f114501);
  }
  return tmp;
};
export const perfTraceTree = function perfTraceTree(spans) {
  let closure_0 = spans;
  function isLeaf(buildResult) {
    const hasItem = map.has(buildResult.id);
    return !hasItem && null != buildResult.end && null == buildResult.error;
  }
  map = childrenByParent(spans);
  spans = spans.spans;
  let found = spans.find(f114500);
  if (found == null) {
    found = null;
  }
  if (null == found) {
    return null;
  } else {
    function build(items, depth, arg2, arg3) {
      let children;
      let closure_2;
      let combined;
      let diff;
      let item10128;
      let items2;
      let items3;
      map = depth;
      isLeaf = arg2;
      const first = items[0];
      items = [...items.map((start) => start.start)];
      const applyResult = Math.min.apply(items);
      const items1 = [
        ...items.map((end) => {
          let as_of = end.end;
          if (as_of == null) {
            as_of = items.as_of;
          }
          return as_of;
        })
      ];
      const applyResult1 = Math.max.apply(items1);
      let mapped = items.map((end) => {
        let as_of = end.end;
        if (as_of == null) {
          as_of = items.as_of;
        }
        return as_of - end.start;
      });
      if (1 === items.length) {
        let tmp4 = map;
        let items4 = map.get(first.id);
        let tmp5 = null;
        if (items4 == null) {
          items4 = [];
        }
        items2 = items4;
      } else {
        items2 = [];
      }
      if (1 === items.length) {
        const _HermesInternal2 = HermesInternal;
        let str2 = "span-";
        combined = "span-" + first.id;
      } else {
        let _HermesInternal = HermesInternal;
        let str = "fold-";
        combined = "fold-" + first.id;
      }
      const obj = {
        key: combined,
        depth,
        span: first,
        count: items.length,
        start: applyResult,
        end: applyResult1,
        totalMs: mapped.reduce((acc, item) => acc + item, 0),
        maxMs: Math.max.apply(items3),
        selfMs: diff - coveredMs(items, items2, applyResult, applyResult1),
        running: null == first.end,
        failed: null != first.error,
        parallel: items.some((item) => closure_2.some((end) => {
          const hasItem = item.includes(end);
          let tmp2 = !hasItem;
          if (tmp2) {
            let as_of = end.end;
            const start = item.start;
            const tmp4 = item;
            if (as_of == null) {
              as_of = tmp3.as_of;
            }
            let tmp6 = start < as_of;
            if (tmp6) {
              let as_of2 = tmp4.end;
              const start2 = end.start;
              if (as_of2 == null) {
                as_of2 = tmp3.as_of;
              }
              tmp6 = start2 < as_of2;
            }
            tmp2 = tmp6;
          }
          return tmp2;
        })),
        outlivedParent: applyResult1 > arg3,
        significant: false,
        children: [],
        descendants: children.reduce((acc, count) => acc + count.count + count.descendants, 0)
      };
      items3 = [...mapped];
      diff = applyResult1 - applyResult;
      const merged = Object.assign(closure_3(first));
      map = new Map();
      for (const item10104 of items2) {
        let tmp9 = item10104;
        if (isLeaf(item10104)) {
          set = map.set;
          let tmp13 = build(tmp9);
          let num = map.get(build(tmp9)) ?? 0;
          let result = set(tmp13, num + 1);
        }
        continue;
      }
      const set1 = new Set();
      for (const item10128 of items2) {
        let tmp16Result = tmp16();
        continue;
      }
      children = obj.children;
      return obj;
    }
    let items = [found];
    let num = Infinity;
    let tmp2 = items;
    const buildResult = build(items, 0, [], Infinity);
    let closure_3 = 0.1 * (buildResult.end - buildResult.start);
    let tmp4 = isLeaf;
    let tmp5 = isLeaf(buildResult, (count) => {
      let totalMs;
      if (count.count > 1) {
        totalMs = count.totalMs;
      } else {
        totalMs = count.end - count.start;
      }
      count.significant = totalMs >= closure_3;
    });
    return buildResult;
  }
};
export const visiblePerfTraceRows = function visiblePerfTraceRows(cResult, arg1) {
  let collapsed = arg1;
  let items = [];
  function walk(key) {
    collapsed = key;
    function flush() {
      let items1;
      let max;
      let min;
      if (1 === closure_1.length) {
        walk(closure_1[0]);
      } else if (closure_1.length > 1) {
        const _HermesInternal = HermesInternal;
        const push = items.push;
        const _Math = Math;
        const obj = {
          kind: "smaller",
          key: "smaller-" + closure_1[0].key,
          parentKey: key.key,
          depth: key.depth + 1,
          count: closure_1.reduce((acc, count) => acc + count.count, 0),
          start: HermesBuiltin.apply(min, items, Math),
          end: HermesBuiltin.apply(max, items1, Math),
          totalMs: closure_1.reduce((acc, count) => {
              let totalMs;
              if (count.count > 1) {
                totalMs = count.totalMs;
              } else {
                totalMs = count.end - count.start;
              }
              return acc + totalMs;
            }, 0)
        };
        min = Math.min;
        items = [];
        HermesBuiltin.arraySpread(items, closure_1.map((start) => start.start), 0);
        const _Math2 = Math;
        const _Math3 = Math;
        max = Math.max;
        items1 = [];
        HermesBuiltin.arraySpread(items1, closure_1.map((end) => end.end), 0);
        const _Math4 = Math;
        push(obj);
      }
      closure_1 = [];
    }
    let obj = { kind: "node", key: key.key, node: key };
    items.push(obj);
    collapsed = collapsed.collapsed;
    const tmp2 = collapsed;
    if (!collapsed.has(key.key)) {
      const revealed = tmp2.revealed;
      items = [];
      const children = key.children;
      const hasItem = revealed.has(key.key);
      const iter = children[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult;
        if (!hasItem) {
          if (!tmp8.significant) {
            let arr2 = items.push(tmp8);
          }
          continue;
        }
        let flushResult = flush();
        let tmp16 = walk(tmp8);
      }
      flush();
    }
  }
  walk(cResult);
  return items;
};
export const overviewView = function overviewView(children) {
  const f114502 = f1145022;
  const obj = { collapsed: set, revealed: new Set() };
  function walk(children) {
    const tmp = children.children.length > 0 && f114518(children);
    if (tmp) {
      set.add(children.key);
    }
    children = children.children;
    for (const item10016 of children) {
      let tmp6 = walk(item10016);
      continue;
    }
  }
  set = new Set();
  walk(children);
  new Set();
  return obj;
};
export const extendView = function extendView(collapsed, memo, current) {
  const f114502 = f1145022;
  function walk(children) {
    const tmp = children.children.length > 0 && f114518(children);
    if (tmp) {
      set.add(children.key);
    }
    children = children.children;
    for (const item10016 of children) {
      let tmp6 = walk(item10016);
      continue;
    }
  }
  set = new Set();
  walk(memo);
  const self = this;
  new Set();
  const items = [...set];
  const found = items.filter((item) => !current.has(item));
  let tmp4 = collapsed;
  if (0 !== found.length) {
    const obj = { collapsed: set2 };
    const merged = Object.assign(collapsed);
    const _Set = Set;
    const items1 = [];
    HermesBuiltin.arraySpread(items1, found, HermesBuiltin.arraySpread(items1, collapsed.collapsed, 0));
    const self2 = this;
    const self3 = this;
    tmp4 = obj;
    set2 = new Set(items1);
  }
  return tmp4;
};
export const perfTraceKeys = function perfTraceKeys(cResult) {
  set = new Set();
  walkNodes(cResult, (key) => set.add(key.key));
  return set;
};
export const expandedView = function expandedView(children) {
  let set1;
  const f114517 = () => true;
  const obj = { collapsed: new Set(), revealed: set1 };
  new Set();
  set1 = new Set();
  function walk(children) {
    const tmp = children.children.length > 0 && f114518(children);
    if (tmp) {
      set.add(children.key);
    }
    children = children.children;
    for (const item10016 of children) {
      let tmp6 = walk(item10016);
      continue;
    }
  }
  walk(children);
  return obj;
};
export const collapsedView = function collapsedView(children) {
  const f114518 = (depth) => depth.depth > 0;
  const obj = { collapsed: set, revealed: new Set() };
  set = new Set();
  function walk(children) {
    const tmp = children.children.length > 0 && f114518(children);
    if (tmp) {
      set.add(children.key);
    }
    children = children.children;
    for (const item10016 of children) {
      let tmp6 = walk(item10016);
      continue;
    }
  }
  walk(children);
  new Set();
  return obj;
};
export const toggleNode = function toggleNode(collapsed, findPerfTraceNodeResult) {
  let revealed;
  collapsed = collapsed.collapsed;
  if (collapsed.has(findPerfTraceNodeResult.key)) {
    const _Set2 = Set;
    const self3 = this;
    const self4 = this;
    set = new Set(collapsed.collapsed);
    set.delete(findPerfTraceNodeResult.key);
    const children = findPerfTraceNodeResult.children;
    const obj2 = { collapsed: set, revealed };
    if (children.some((significant) => significant.significant)) {
      revealed = collapsed.revealed;
    } else {
      const _Set3 = Set;
      const self5 = this;
      const self6 = this;
      const set1 = new Set(collapsed.revealed);
      revealed = set1.add(findPerfTraceNodeResult.key);
    }
    return obj2;
  } else {
    const obj = { collapsed: set2.add(findPerfTraceNodeResult.key) };
    const merged = Object.assign(collapsed);
    const _Set = Set;
    const self = this;
    const self2 = this;
    set2 = new Set(collapsed.collapsed);
    return obj;
  }
};
export const expandSubtree = function expandSubtree(collapsed, findPerfTraceNodeResult) {
  collapsed = new Set(collapsed.collapsed);
  const revealed = new Set(collapsed.revealed);
  walkNodes(findPerfTraceNodeResult, (key) => {
    collapsed.delete(key.key);
    revealed.add(key.key);
  });
  return { collapsed, revealed };
};
export const findPerfTraceNode = function findPerfTraceNode(findPerfTraceNodeResult, arg1) {
  let closure_0 = arg1;
  let c1 = null;
  walkNodes(findPerfTraceNodeResult, (key) => {
    if (key.key === closure_0) {
      c1 = key;
    }
  });
  return c1;
};
export const perfSpanSelfTimes = function perfSpanSelfTimes(spans) {
  let closure_0 = spans;
  closure_1 = childrenByParent(spans);
  spans = spans.spans;
  map = new Map(spans.map((end) => {
    let as_of = end.end;
    if (as_of == null) {
      as_of = tmp.as_of;
    }
    const items = [end.id, ];
    const diff = as_of - end.start;
    let items1 = closure_1.get(end.id);
    const tmp3 = coveredMs;
    if (items1 == null) {
      items1 = [];
    }
    items[1] = diff - tmp3(spans, items1, end.start, as_of);
    return items;
  }));
  return map;
};
export const perfTimelineTicks = function perfTimelineTicks(arg0) {
  let num;
  const result = arg0 / 6;
  _slicedToArray = result;
  closure_1 = 10 ** Math.floor(Math.log10(result));
  const items = [1, 2, 5, 10];
  const mapped = items.map((item) => item * closure_1);
  let found = mapped.find((item) => item >= _slicedToArray);
  if (found == null) {
    found = result;
  }
  const items1 = [];
  for (let num = 0; num <= arg0; num = num + found) {
    let arr = items1.push(num);
  }
  return items1;
};
export const formatSpanAttrs = function formatSpanAttrs(attrs) {
  let str = "";
  if (null != attrs) {
    const _Object = Object;
    const entries = Object.entries(attrs);
    const mapped = entries.map(f114503);
    str = mapped.join(" ");
  }
  return str;
};
export { describePerfSpan };
