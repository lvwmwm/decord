// Module ID: 17067
// Function ID: 17068
// Name: ConjurePerfTraceFormat
// Dependencies: [32, 17058, 17068, 17061, 2]
// Exports: formatSpanCount, perfNodeDetails, perfSmallerLabel, perfTickLabel, perfTraceDuration, perfTraceSummary

// Module 17067 (ConjurePerfTraceFormat)
import debug_ConjureTraceFormat from "debug/ConjureTraceFormat" /* 17058 */;
import ConjureTimeFormat from "ConjureTimeFormat" /* 17061 */;
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 17068 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function formatPerfMs(ms) {
  const obj = debug_ConjureTraceFormat;
  return obj.formatDuration(Math.round(ms));
}
function perfNodeDuration(node) {
  let totalMs;
  if (node.count > 1) {
    totalMs = node.totalMs;
  } else {
    totalMs = node.end - node.start;
  }
  const obj = debug_ConjureTraceFormat;
  return obj.formatDuration(Math.round(totalMs));
}
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceFormat.tsx");

export const PERF_CATEGORY_LABELS = { op: "Operation", model: "Model", tool: "Tool", setup: "Setup", worktree: "Git worktree", sandbox: "Sandbox", build: "Build", platform: "Platform", other: "Other" };
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
    const _Math = Math;
    const obj = debug_ConjureTraceFormat;
    str = obj.formatDuration(Math.round(arg0));
  }
  return str;
};
export const perfNodeDetails = function perfNodeDetails(node) {
  const items = [{ label: "Start", value: "+" + formatPerfMs(node.start) }, ];
  ({ label: "Start", value: "+" + formatPerfMs(node.start) });
  items[1] = { label: "Duration", value: perfNodeDuration(node) };
  ({ label: "Duration", value: perfNodeDuration(node) });
  if (node.count > 1) {
    const _String = String;
    const push = items.push;
    const obj3 = { label: "Calls", value: String(node.count) };
    const obj4 = { label: "Longest call", value: formatPerfMs(node.maxMs) };
    const obj5 = { label: "Spread over", value: formatPerfMs(node.end - node.start) };
    push(obj3, obj4, obj5);
  } else if (node.children.length > 0) {
    const push5 = items.push;
    const obj6 = { label: "Self time", value: formatPerfMs(node.selfMs) };
    push5(obj6);
  }
  let attrs = node.span.attrs;
  const _Object = Object;
  if (attrs == null) {
    attrs = {};
  }
  const entries1 = entries(attrs);
  const tmp4 = entries1[Symbol.iterator]();
  while (tmp4 !== undefined) {
    let tmp7 = _slicedToArray(tmp5, 2);
    let obj7 = { label: tmp7[0], value: String(tmp7[1]) };
    let _String2 = String;
    let push2 = items.push;
    let push2Result = push2(obj7);
    continue;
  }
  const waits_on = node.span.waits_on;
  if (null != waits_on) {
    const _HermesInternal = HermesInternal;
    const push3 = items.push;
    const obj8 = { label: "Waited on", value: "" + waits_on.span_name + " in " + waits_on.trace_name };
    push3(obj8);
  }
  let str3 = null;
  if (node.parallel) {
    str3 = "ran in parallel with a sibling";
  }
  const items1 = [str3, , ];
  let str4 = null;
  if (node.running) {
    str4 = "still running";
  }
  items1[1] = str4;
  let str5 = null;
  if (node.outlivedParent) {
    str5 = "outlived its parent";
  }
  items1[2] = str5;
  const found = items1.filter((item) => null != item);
  if (found.length > 0) {
    const push4 = items.push;
    const obj9 = { label: "Notes", value: found.join(", ") };
    push4(obj9);
  }
  if (null != node.span.error) {
    const obj10 = { label: "Error", value: node.span.error };
    items.push(obj10);
  }
  return items;
};
export const perfTraceDuration = function perfTraceDuration(trace) {
  const obj = ConjurePerfTraceLayout;
  const perfTraceRootResult = obj.perfTraceRoot(trace);
  let end;
  if (perfTraceRootResult != null) {
    end = perfTraceRootResult.end;
  }
  let formatDurationResult = null;
  if (null != end) {
    const tmpResult = debug_ConjureTraceFormat;
    formatDurationResult = tmpResult.formatDuration(end);
  }
  return formatDurationResult;
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
