// Module ID: 17279
// Function ID: 17280
// Name: ConjurePerfTraceFormat
// Dependencies: [32, 13224, 17280, 2]
// Exports: formatDuration, formatSpanCount, formatTokens, perfCategoryTotal, perfModelSummary, perfNodeSections, perfSmallerLabel, perfTickLabel, perfTraceDuration, perfTraceSummary

// Module 17279 (ConjurePerfTraceFormat)
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 13224 */;
import ConjureTimeFormat from "ConjureTimeFormat" /* 17280 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map, set;

function formatPerfMs(totalMs) {
  let combined;
  const rounded = Math.round(totalMs);
  if (rounded < 1000) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + rounded + "ms";
  } else {
    const result = rounded / 1000;
    const _HermesInternal = HermesInternal;
    combined = "" + result.toFixed(1) + "s";
  }
  return combined;
}
function perfNodeDuration(node) {
  let combined;
  let totalMs;
  if (node.count > 1) {
    totalMs = node.totalMs;
  } else {
    totalMs = node.end - node.start;
  }
  const rounded = Math.round(totalMs);
  if (rounded < 1000) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + rounded + "ms";
  } else {
    const result = rounded / 1000;
    const _HermesInternal = HermesInternal;
    combined = "" + result.toFixed(1) + "s";
  }
  return combined;
}
function sectionFor(service, str) {
  str = "Arguments";
  if ("args" !== str) {
    str = "Arguments";
    if (!str.startsWith("arg ")) {
      let str5 = "Result";
      if ("result" !== str) {
        str5 = "Result";
        if ("result_chars" !== str) {
          let str7 = "Details";
          if ("model" === service.service) {
            str7 = "Usage";
          }
          str5 = str7;
        }
      }
      str = str5;
    }
  }
  return str;
}
function detail(Duration, value) {
  let hasItem;
  const obj = { label: Duration, value, block: hasItem };
  hasItem = value.length > 80 || value.includes("\n");
  return obj;
}
function formatUsd(toFixed) {
  let num = 2;
  toFixed = toFixed.toFixed;
  if (toFixed < 1) {
    num = 3;
  }
  return "$" + toFixed(num);
}
let closure_5 = ["Arguments", "Result", "Usage", "Details"];
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceFormat.tsx");

export const PERF_CATEGORY_LABELS = { op: "Operation", model: "Model", tool: "Tool", setup: "Setup", worktree: "Git worktree", sandbox: "Sandbox", build: "Build", platform: "Platform", other: "Other" };
export const PERF_STATUS_LABELS = { running: "Running", ok: "Done", error: "Failed" };
export const formatDuration = function formatDuration(arg0) {
  let combined;
  if (arg0 < 1000) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + arg0 + "ms";
  } else {
    const result = arg0 / 1000;
    const _HermesInternal = HermesInternal;
    combined = "" + result.toFixed(1) + "s";
  }
  return combined;
};
export const formatTokens = function formatTokens(arg0) {
  if (arg0 < 1000) {
    const _String = String;
    return String(arg0);
  } else if (arg0 >= 1000000) {
    const result = arg0 / 1000000;
    const _HermesInternal2 = HermesInternal;
    return "" + result.toFixed(1) + "M";
  } else {
    let toFixedResult;
    const result1 = arg0 / 1000;
    if (result1 < 10) {
      toFixedResult = result1.toFixed(1);
    } else {
      const _Math = Math;
      toFixedResult = Math.round(result1);
    }
    const _HermesInternal = HermesInternal;
    return "" + toFixedResult + "k";
  }
};
export { formatPerfMs };
export const formatSpanCount = function formatSpanCount(dropped) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "span";
  }
  let str2 = "s";
  if (1 === dropped) {
    str2 = "";
  }
  return "" + dropped + " " + str + str2;
};
export { perfNodeDuration };
export const perfSmallerLabel = function perfSmallerLabel(row) {
  const count = row.count;
  let str = "s";
  if (1 === count) {
    str = "";
  }
  return "" + count + " " + "smaller span" + str;
};
export const perfTickLabel = function perfTickLabel(arg0) {
  let str = "0";
  if (0 !== arg0) {
    let combined;
    const _Math = Math;
    const rounded = Math.round(arg0);
    if (rounded < 1000) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + rounded + "ms";
    } else {
      const result = rounded / 1000;
      const _HermesInternal = HermesInternal;
      combined = "" + result.toFixed(1) + "s";
    }
    str = combined;
  }
  return str;
};
export const perfNodeSections = function perfNodeSections(node) {
  let first;
  let tmp23;
  let items = [detail("Start", "+" + formatPerfMs(node.start)), detail("Duration", perfNodeDuration(node))];
  if (node.count > 1) {
    const _String = String;
    const push = items.push;
    const tmp2Result = detail("Calls", String(node.count));
    const tmp2Result2 = detail("Longest call", formatPerfMs(node.maxMs));
    push(tmp2Result, tmp2Result2, detail("Spread over", formatPerfMs(node.end - node.start)));
  } else if (node.children.length > 0) {
    items.push(detail("Self time", formatPerfMs(node.selfMs)));
  }
  const waits_on = node.span.waits_on;
  if (null != waits_on) {
    const _HermesInternal = HermesInternal;
    items.push(detail("Waited on", "" + waits_on.span_name + " in " + waits_on.trace_name));
  }
  let str7 = null;
  if (node.parallel) {
    str7 = "ran in parallel with a sibling";
  }
  const items1 = [str7, , ];
  let str8 = null;
  if (node.running) {
    str8 = "still running";
  }
  items1[1] = str8;
  let str9 = null;
  if (node.outlivedParent) {
    str9 = "outlived its parent";
  }
  items1[2] = str9;
  const found = items1.filter((item) => null != item);
  if (found.length > 0) {
    items.push(detail("Notes", found.join(", ")));
  }
  if (null != node.span.error) {
    items.push(detail("Error", node.span.error));
  }
  map = new Map();
  let obj = {};
  const merged = Object.assign(node.span.attrs);
  let details = null;
  if (1 === node.count) {
    details = node.span.details;
  }
  const merged1 = Object.assign(details);
  const entries = Object.entries(obj);
  const tmp18 = entries[Symbol.iterator]();
  while (tmp18 !== undefined) {
    let StringResult;
    [first, tmp23] = tmp19;
    let str13 = first;
    let tmp25 = sectionFor(node, first);
    if ("cost_usd" === first) {
      let _Number = Number;
      StringResult = formatUsd(Number(tmp23));
    } else {
      let _String2 = String;
      StringResult = String(tmp23);
    }
    let tmp30 = StringResult;
    set = map.set;
    let items4 = map.get(tmp25);
    if (items4 == null) {
      items4 = [];
    }
    let items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items2, items4, 0);
    items2[arraySpreadResult] = detail(str13.replace(/_/g, " "), tmp30);
    let result = set(tmp25, items2);
    continue;
  }
  const items3 = [
    { title: null, rows: items },
    ...closure_5.flatMap((title) => {
      let items;
      const value = map.get(title);
      if (null == value) {
        items = [];
      } else {
        items = [{ title, rows: value }];
        const obj = { title, rows: value };
      }
      return items;
    })
  ];
  return items3;
};
export const perfCategoryTotal = function perfCategoryTotal(stats, item) {
  let closure_0 = item;
  const categories = stats.categories;
  const found = categories.find((category) => category.category === item);
  let num;
  if (found != null) {
    num = found.ms;
  }
  if (num == null) {
    num = 0;
  }
  let combined1 = null;
  if (0 !== num) {
    combined1 = null;
    if (0 !== stats.busyMs) {
      let combined;
      const _Math = Math;
      const _Math2 = Math;
      const rounded = Math.round(num / stats.busyMs * 100);
      const rounded1 = Math.round(num);
      if (rounded1 < 1000) {
        const _HermesInternal2 = HermesInternal;
        combined = "" + rounded1 + "ms";
      } else {
        const result = rounded1 / 1000;
        const _HermesInternal = HermesInternal;
        combined = "" + result.toFixed(1) + "s";
      }
      const _HermesInternal3 = HermesInternal;
      combined1 = "" + rounded + "% \u00B7 " + combined;
    }
  }
  return combined1;
};
export const perfModelSummary = function perfModelSummary(stats) {
  const model = stats.model;
  let joined = null;
  if (0 !== model.calls) {
    let StringResult;
    let StringResult1;
    let StringResult2;
    let StringResult3;
    const calls = model.calls;
    let str = "s";
    if (1 === calls) {
      str = "";
    }
    const _HermesInternal = HermesInternal;
    const items = ["" + calls + " " + "model call" + str, , , , , ];
    const input = model.input;
    if (input < 1000) {
      const _String = String;
      StringResult = String(input);
    } else if (input >= 1000000) {
      const result = input / 1000000;
      const _HermesInternal3 = HermesInternal;
      StringResult = "" + result.toFixed(1) + "M";
    } else {
      let toFixedResult;
      const result1 = input / 1000;
      if (result1 < 10) {
        toFixedResult = result1.toFixed(1);
      } else {
        const _Math = Math;
        toFixedResult = Math.round(result1);
      }
      const _HermesInternal2 = HermesInternal;
      StringResult = "" + toFixedResult + "k";
    }
    const _HermesInternal4 = HermesInternal;
    items[1] = "" + StringResult + " in";
    const output = model.output;
    if (output < 1000) {
      const _String2 = String;
      StringResult1 = String(output);
    } else if (output >= 1000000) {
      const result2 = output / 1000000;
      const _HermesInternal6 = HermesInternal;
      StringResult1 = "" + result2.toFixed(1) + "M";
    } else {
      let toFixedResult1;
      const result3 = output / 1000;
      if (result3 < 10) {
        toFixedResult1 = result3.toFixed(1);
      } else {
        const _Math2 = Math;
        toFixedResult1 = Math.round(result3);
      }
      const _HermesInternal5 = HermesInternal;
      StringResult1 = "" + toFixedResult1 + "k";
    }
    const _HermesInternal7 = HermesInternal;
    items[2] = "" + StringResult1 + " out";
    const cacheRead = model.cacheRead;
    if (cacheRead < 1000) {
      const _String3 = String;
      StringResult2 = String(cacheRead);
    } else if (cacheRead >= 1000000) {
      const result4 = cacheRead / 1000000;
      const _HermesInternal9 = HermesInternal;
      StringResult2 = "" + result4.toFixed(1) + "M";
    } else {
      let toFixedResult2;
      const result5 = cacheRead / 1000;
      if (result5 < 10) {
        toFixedResult2 = result5.toFixed(1);
      } else {
        const _Math3 = Math;
        toFixedResult2 = Math.round(result5);
      }
      const _HermesInternal8 = HermesInternal;
      StringResult2 = "" + toFixedResult2 + "k";
    }
    const _HermesInternal10 = HermesInternal;
    items[3] = "" + StringResult2 + " cache read";
    const cacheWrite = model.cacheWrite;
    if (cacheWrite < 1000) {
      const _String4 = String;
      StringResult3 = String(cacheWrite);
    } else if (cacheWrite >= 1000000) {
      const result6 = cacheWrite / 1000000;
      const _HermesInternal12 = HermesInternal;
      StringResult3 = "" + result6.toFixed(1) + "M";
    } else {
      let toFixedResult3;
      const result7 = cacheWrite / 1000;
      if (result7 < 10) {
        toFixedResult3 = result7.toFixed(1);
      } else {
        const _Math4 = Math;
        toFixedResult3 = Math.round(result7);
      }
      const _HermesInternal11 = HermesInternal;
      StringResult3 = "" + toFixedResult3 + "k";
    }
    const _HermesInternal13 = HermesInternal;
    items[4] = "" + StringResult3 + " cache write";
    const costUsd = model.costUsd;
    let num10 = 2;
    const toFixed = costUsd.toFixed;
    if (costUsd < 1) {
      num10 = 3;
    }
    const _HermesInternal14 = HermesInternal;
    items[5] = "$" + toFixed(num10);
    joined = items.join(" \u00B7 ");
  }
  return joined;
};
export const perfTraceDuration = function perfTraceDuration(trace) {
  let str;
  const obj = ConjurePerfTraceLayout;
  const perfTraceRootResult = obj.perfTraceRoot(trace);
  let end;
  if (perfTraceRootResult != null) {
    end = perfTraceRootResult.end;
  }
  if (null != end) {
    let combined;
    if (end < 1000) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + end + "ms";
    } else {
      const result = end / 1000;
      const _HermesInternal = HermesInternal;
      combined = "" + result.toFixed(1) + "s";
    }
    str = combined;
  } else {
    str = "still running";
    const tmpResult = ConjurePerfTraceLayout;
    if (tmpResult.perfTraceInterrupted(trace)) {
      str = "interrupted";
    }
  }
  return str;
};
export const perfTraceSummary = function perfTraceSummary(trace) {
  const formatClockTime = ConjureTimeFormat.formatClockTime;
  ConjureTimeFormat;
  const date = new Date(trace.started_at);
  let str = formatClockTime(date.toISOString());
  if (str == null) {
    str = "";
  }
  const items = [str, , ];
  let str2 = "s";
  if (1 === trace.spans.length) {
    str2 = "";
  }
  items[1] = "" + trace.spans.length + " " + "span" + str2;
  const formatSpanAttrs = ConjurePerfTraceLayout.formatSpanAttrs;
  ConjurePerfTraceLayout;
  const tmpResult2 = ConjurePerfTraceLayout;
  const perfTraceRootResult = tmpResult2.perfTraceRoot(trace);
  let attrs;
  if (perfTraceRootResult != null) {
    attrs = perfTraceRootResult.attrs;
  }
  items[2] = formatSpanAttrs(attrs);
  const found = items.filter((item) => "" !== item);
  return found.join(" \u00B7 ");
};
