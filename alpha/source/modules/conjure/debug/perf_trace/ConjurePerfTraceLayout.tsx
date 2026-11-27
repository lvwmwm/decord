// Module ID: 7717
// Function ID: 7718
// Name: ConjurePerfTraceLayout
// Dependencies: [32, 7718, 2]
// Exports: collapsedView, expandSubtree, expandedView, extendView, findPerfTraceNode, formatSpanAttrs, overviewView, perfSpanSelfTimes, perfTimelineTicks, perfTraceExtent, perfTraceFinished, perfTraceInterrupted, perfTraceKeys, perfTraceRoot, perfTraceStatus, perfTraceTree, toggleNode, visiblePerfTraceRows

// Module 7717 (ConjurePerfTraceLayout)
import ConjurePerfTraceFrameLaunch from "ConjurePerfTraceFrameLaunch" /* 7718 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map, marker, set, set2;

const f92081 = (parent) => null == parent.parent;
const f92082 = (end) => null != end.end;
const f920832 = (depth) => {
  let tmp = depth.depth > 0;
  if (tmp) {
    const children = depth.children;
    tmp = !children.some((significant) => significant.significant);
  }
  return tmp;
};
const f92084 = (item) => {
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
  str5 = closure_3[substr];
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
    const mapped = entries.map(f92084);
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
  let closure_1 = arg2;
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
let closure_3 = { op: "op", ws: "op", turn: "op", alarm: "op", side_chat: "op", session: "op", step: "op", model: "model", version_note: "model", tool: "tool", mcp: "tool", sandbox: "sandbox", worktree: "worktree", build: "build", deps: "build", api: "platform", state: "platform", publish: "platform", preview: "platform", healthcheck: "platform", usage: "platform", live: "platform", replay: "platform", launch: "op", request: "platform", template: "setup", workspace: "setup", declarations: "setup", manifest: "setup", storage: "setup", conversation: "setup", runtime: "setup", attachments: "setup", upstream: "setup", remix: "setup", repo: "setup" };
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceLayout.tsx");

export const PERF_TRACE_MARKER_NAMES = ConjurePerfTraceFrameLaunch.FRAME_LAUNCH_MOMENT_SPAN_NAMES;
export const PERF_CATEGORIES = ["op", "model", "tool", "setup", "worktree", "sandbox", "build", "platform", "other"];
export function perfTraceRoot(spans) {
  spans = spans.spans;
  let found = spans.find(f92081);
  if (found == null) {
    found = null;
  }
  return found;
}
export function perfTraceExtent(trace) {
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
}
export function perfTraceStatus(trace) {
  const spans = trace.spans;
  let str = "error";
  if (!spans.some((error) => null != error.error)) {
    const spans1 = trace.spans;
    let found = spans1.find(f92081);
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
        tmp4 = !spans2.every(f92082);
      }
      str = "error";
      if (!tmp4) {
        const spans3 = trace.spans;
        let str2 = "running";
        if (spans3.every(f92082)) {
          str2 = "ok";
        }
        str = str2;
      }
    }
  }
  return str;
}
export function perfTraceFinished(timingTrace) {
  const spans = timingTrace.spans;
  return spans.every(f92082);
}
export function perfTraceInterrupted(live) {
  let tmp = !live.live;
  if (tmp) {
    const spans = live.spans;
    tmp = !spans.every(f92082);
  }
  return tmp;
}
export function perfTraceTree(spans) {
  function isLeaf(id) {
    const hasItem = map.has(id.id);
    return !hasItem && null != id.end && null == id.error;
  }
  map = childrenByParent(spans);
  spans = spans.spans;
  let found = spans.find(f92081);
  if (found == null) {
    found = null;
  }
  if (null == found) {
    return null;
  } else {
    function build(buildResult, depth, arg2, arg3) {
      let children;
      let closure_2;
      let combined;
      let diff;
      let item10139;
      let items2;
      let items3;
      spans = buildResult;
      map = depth;
      isLeaf = arg2;
      const first = buildResult[0];
      let items = [...buildResult.map((start) => start.start)];
      const applyResult = Math.min.apply(items);
      const items1 = [
        ...buildResult.map((end) => {
          let as_of = end.end;
          if (as_of == null) {
            as_of = buildResult.as_of;
          }
          return as_of;
        })
      ];
      const applyResult1 = Math.max.apply(items1);
      let mapped = buildResult.map((end) => {
        let as_of = end.end;
        if (as_of == null) {
          as_of = buildResult.as_of;
        }
        return as_of - end.start;
      });
      if (1 === buildResult.length) {
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
      let hasItem = 1 === buildResult.length;
      if (hasItem) {
        const FRAME_LAUNCH_MOMENT_SPAN_NAMES = spans(map[1]).FRAME_LAUNCH_MOMENT_SPAN_NAMES;
        hasItem = FRAME_LAUNCH_MOMENT_SPAN_NAMES.has(first.name);
      }
      if (1 === buildResult.length) {
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
        count: buildResult.length,
        start: applyResult,
        end: applyResult1,
        totalMs: mapped.reduce((acc, item) => acc + item, 0),
        maxMs: Math.max.apply(items3),
        selfMs: diff - coveredMs(spans, items2, applyResult, applyResult1),
        running: null == first.end,
        failed: null != first.error,
        parallel: buildResult.some((item) => closure_2.some((end) => {
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
        marker: hasItem,
        children: [],
        descendants: children.reduce((acc, count) => acc + count.count + count.descendants, 0)
      };
      items3 = [...mapped];
      diff = applyResult1 - applyResult;
      const merged = Object.assign(describePerfSpan(first));
      map = new Map();
      for (const item10113 of items2) {
        let tmp12 = item10113;
        if (isLeaf(item10113)) {
          set = map.set;
          let tmp16 = foldKey(tmp12);
          let num = map.get(foldKey(tmp12)) ?? 0;
          let result = set(tmp16, num + 1);
        }
        continue;
      }
      const set1 = new Set();
      let num2 = Infinity;
      if (!obj.marker) {
        num2 = applyResult1;
      }
      for (const item10139 of items2) {
        let tmp19Result = tmp19();
        continue;
      }
      children = obj.children;
      return obj;
    }
    let items = [found];
    let num = Infinity;
    let num2 = 0;
    let tmp2 = items;
    const buildResult = build(items, 0, [], Infinity);
    closure_3 = 0.1 * (buildResult.end - buildResult.start);
    let tmp4 = build;
    let tmp5 = build(buildResult, (marker) => {
      marker = marker.marker;
      if (!marker) {
        let totalMs;
        if (marker.count > 1) {
          totalMs = marker.totalMs;
        } else {
          totalMs = marker.end - marker.start;
        }
        marker = totalMs >= closure_3;
      }
      marker.significant = marker;
    });
    return buildResult;
  }
}
export function visiblePerfTraceRows(key, arg1) {
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
  walk(key);
  return items;
}
export function overviewView(children) {
  const f92083 = f920832;
  const obj = { collapsed: set, revealed: new Set() };
  function walk(children) {
    const tmp = children.children.length > 0 && f92099(children);
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
}
export function extendView(collapsed, memo, current) {
  const f92083 = f920832;
  function walk(children) {
    const tmp = children.children.length > 0 && f92099(children);
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
}
export function perfTraceKeys(memo) {
  set = new Set();
  walkNodes(memo, (key) => set.add(key.key));
  return set;
}
export function expandedView(children) {
  let set1;
  const f92098 = () => true;
  const obj = { collapsed: new Set(), revealed: set1 };
  new Set();
  set1 = new Set();
  function walk(children) {
    const tmp = children.children.length > 0 && f92099(children);
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
}
export function collapsedView(children) {
  const f92099 = (depth) => depth.depth > 0;
  const obj = { collapsed: set, revealed: new Set() };
  set = new Set();
  function walk(children) {
    const tmp = children.children.length > 0 && f92099(children);
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
}
export function toggleNode(collapsed, findPerfTraceNodeResult) {
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
}
export function expandSubtree(collapsed, findPerfTraceNodeResult) {
  collapsed = new Set(collapsed.collapsed);
  const revealed = new Set(collapsed.revealed);
  walkNodes(findPerfTraceNodeResult, (key) => {
    collapsed.delete(key.key);
    revealed.add(key.key);
  });
  return { collapsed, revealed };
}
export function findPerfTraceNode(findPerfTraceNodeResult, arg1) {
  let closure_0 = arg1;
  let c1 = null;
  walkNodes(findPerfTraceNodeResult, (key) => {
    if (key.key === closure_0) {
      c1 = key;
    }
  });
  return c1;
}
export function perfSpanSelfTimes(spans) {
  let closure_0 = spans;
  let closure_1 = childrenByParent(spans);
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
}
export function perfTimelineTicks(arg0) {
  let num;
  const result = arg0 / 6;
  require = result;
  let closure_1 = 10 ** Math.floor(Math.log10(result));
  const items = [1, 2, 5, 10];
  const mapped = items.map((item) => item * closure_1);
  let found = mapped.find((item) => item >= require);
  if (found == null) {
    found = result;
  }
  const items1 = [];
  for (let num = 0; num <= arg0; num = num + found) {
    let arr = items1.push(num);
  }
  return items1;
}
export function formatSpanAttrs(attrs) {
  let str = "";
  if (null != attrs) {
    const _Object = Object;
    const entries = Object.entries(attrs);
    const mapped = entries.map(f92084);
    str = mapped.join(" ");
  }
  return str;
}
export { describePerfSpan };
