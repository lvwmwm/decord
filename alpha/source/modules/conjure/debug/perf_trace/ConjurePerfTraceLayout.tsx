// Module ID: 17068
// Function ID: 17069
// Name: ConjurePerfTraceLayout
// Dependencies: [32, 2]
// Exports: collapsedView, expandSubtree, expandedView, findPerfTraceNode, formatSpanAttrs, overviewView, perfTimelineTicks, perfTraceExtent, perfTraceRoot, perfTraceSelfTimes, perfTraceStatus, perfTraceTree, visiblePerfTraceRows

// Module 17068 (ConjurePerfTraceLayout)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map, set;

const f127884 = (parent) => null == parent.parent;
const f127885 = (item) => {
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
function describeName(name) {
  let combined;
  let str5;
  let substr;
  name = name.name;
  const searchResult = name.search(/[.:]/);
  const name1 = name.name;
  if (-1 === searchResult) {
    substr = name1;
  } else {
    substr = name1.slice(0, searchResult);
  }
  let str = "";
  if (-1 !== searchResult) {
    const name2 = name.name;
    str = name2.slice(searchResult + 1);
  }
  const str2 = str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  const str3 = str2.replace(/_/g, " ");
  const formatted = str3.toLowerCase();
  const attrs = name.attrs;
  let cmd;
  if (attrs != null) {
    cmd = attrs.cmd;
  }
  if (cmd == null) {
    const attrs2 = name.attrs;
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
    const mapped = entries.map(f127885);
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
function spanEnd(reported_at, end) {
  reported_at = end.end;
  if (reported_at == null) {
    reported_at = reported_at.reported_at;
  }
  return reported_at;
}
function coveredMs(arg0, arr, arg2, arg3) {
  let tmp6;
  let tmp7;
  let closure_0 = arg0;
  closure_1 = arg2;
  let closure_2 = arg3;
  const mapped = arr.map((start) => {
    const items = [Math.max(start.start, closure_1), ];
    reported_at = start.end;
    const _Math = Math;
    if (reported_at == null) {
      reported_at = reported_at.reported_at;
    }
    items[1] = min(reported_at, closure_2);
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
  let found = spans.find(f127884);
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
      let reported_at = end.end;
      if (reported_at == null) {
        reported_at = trace.reported_at;
      }
      return reported_at;
    })
  ];
  return Math.max.apply(items);
};
export const perfTraceStatus = function perfTraceStatus(trace) {
  const spans = trace.spans;
  let str = "error";
  if (!spans.some((error) => null != error.error)) {
    const spans1 = trace.spans;
    let found = spans1.find(f127884);
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
      const spans2 = trace.spans;
      let str2 = "ok";
      if (spans2.some((end) => null == end.end)) {
        str2 = "started";
      }
      str = str2;
    }
  }
  return str;
};
export const perfTraceTree = function perfTraceTree(spans) {
  let closure_0 = spans;
  function isLeaf(buildResult) {
    const hasItem = map.has(buildResult.id);
    return !hasItem && null != buildResult.end && null == buildResult.error;
  }
  map = childrenByParent(spans);
  spans = spans.spans;
  let found = spans.find(f127884);
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
          let reported_at = end.end;
          if (reported_at == null) {
            reported_at = items.reported_at;
          }
          return reported_at;
        })
      ];
      const applyResult1 = Math.max.apply(items1);
      let mapped = items.map((end) => {
        let reported_at = end.end;
        if (reported_at == null) {
          reported_at = items.reported_at;
        }
        return reported_at - end.start;
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
            let reported_at = end.end;
            const start = item.start;
            const tmp4 = item;
            if (reported_at == null) {
              reported_at = tmp3.reported_at;
            }
            let tmp6 = start < reported_at;
            if (tmp6) {
              let reported_at2 = tmp4.end;
              const start2 = end.start;
              if (reported_at2 == null) {
                reported_at2 = tmp3.reported_at;
              }
              tmp6 = start2 < reported_at2;
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
  const f127898 = (depth) => {
    let tmp = depth.depth > 0;
    if (tmp) {
      const children = depth.children;
      tmp = !children.some((significant) => significant.significant);
    }
    return tmp;
  };
  const obj = { collapsed: set, revealed: new Set() };
  function walk(children) {
    const tmp = children.children.length > 0 && f127900(children);
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
export const expandedView = function expandedView(children) {
  let set1;
  const f127899 = () => true;
  const obj = { collapsed: new Set(), revealed: set1 };
  new Set();
  set1 = new Set();
  function walk(children) {
    const tmp = children.children.length > 0 && f127900(children);
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
  const f127900 = (depth) => depth.depth > 0;
  const obj = { collapsed: set, revealed: new Set() };
  set = new Set();
  function walk(children) {
    const tmp = children.children.length > 0 && f127900(children);
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
export const perfTraceSelfTimes = function perfTraceSelfTimes(trace, arg1) {
  const obj = childrenByParent(trace);
  map = new Map();
  const iter = trace.spans[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.parent) {
      let tmp15 = spanEnd(trace, tmp2);
      let tmp16 = tmp15;
      let diff = tmp15 - tmp2.start;
      let tmp18 = coveredMs;
      let items1 = obj.get(tmp2.id);
      if (items1 == null) {
        items1 = [];
      }
      let diff1 = diff - tmp18(trace, items1, tmp2.start, tmp16);
      let tmp9 = describeName(tmp2);
      let _HermesInternal = HermesInternal;
      let combined = "" + tmp9.service + " " + tmp9.operation;
      set = map.set;
      let num2 = map.get(combined);
      if (num2 == null) {
        num2 = 0;
      }
      let result = set(combined, num2 + diff1);
    }
    continue;
  }
  const items = [...map.entries()];
  const mapped = items.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return { name, ms };
  });
  const sorted = mapped.sort((ms, ms2) => ms2.ms - ms.ms);
  return sorted.slice(0, arg1);
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
    const mapped = entries.map(f127885);
    str = mapped.join(" ");
  }
  return str;
};
