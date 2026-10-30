// Module ID: 12966
// Function ID: 12967
// Name: ConjurePerfTraceModal
// Dependencies: [19, 17, 10837, 21, 5009, 575, 12967, 7372, 11377, 5619, 8018, 12968, 12970, 1626, 12971, 10869, 5629, 504, 6992, 6738, 11447, 2]
// Exports: default

// Module 12966 (ConjurePerfTraceModal)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import Text_Text from "Text/Text" /* 5619 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import ChevronSmallRightIcon2 from "ChevronSmallRightIcon" /* 7372 */;
import ConjurePerfTraceStatsHeaderDefault from "ConjurePerfTraceStatsHeader" /* 12967 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 12968 */;
import ConjurePerfTraceStats from "ConjurePerfTraceStats" /* 12970 */;
import useConjurePerfTraceTreeDefault from "useConjurePerfTraceTree" /* 12971 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10837 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, label;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
function WaterfallRow(node) {
  let ChevronSmallDownIcon;
  let Text;
  let closure_4;
  let collapsed;
  let extent;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj14;
  let obj18;
  let obj3;
  let obj7;
  let perfNodeSectionsResult;
  let running;
  let selected;
  let str;
  let tmp12Result;
  let tmp14;
  let tmp2Result;
  let tmp9;
  node = node.node;
  ({ extent, collapsed, selected } = node);
  ({ onSelect: dependencyMap, onToggle: react, onExpandSubtree: closure_4 } = node);
  let tmp = closure_11();
  const detail = tmp;
  let tmp2 = node;
  let tmp3 = dependencyMap;
  let obj = node(12967);
  const perfCategoryColors = obj.usePerfCategoryColors();
  if (collapsed) {
    ChevronSmallDownIcon = tmp2(7372).ChevronSmallRightIcon;
  } else {
    ChevronSmallDownIcon = tmp2(11377).ChevronSmallDownIcon;
  }
  if (node.failed) {
    running = tmp.failed;
  } else if (node.running) {
    running = tmp.running;
  } else {
    running = perfCategoryColors[node.category];
  }
  let items = [tmp.row, ];
  let obj2 = {
    style: items,
    onPress() {
      let key = null;
      const tmp = dependencyMap;
      if (!selected) {
        key = node.key;
      }
      return tmp(key);
    },
    onLongPress() {
      return closure_4(node.key);
    },
    accessibilityRole: "button",
    accessibilityState: obj3,
    children: items4
  };
  const tmp8 = selected && tmp.rowSelected;
  items[1] = tmp8;
  obj3 = { selected, expanded: tmp9 };
  tmp9 = undefined;
  if (node.children.length > 0) {
    tmp9 = !collapsed;
  }
  const obj4 = { style: items1, children: items2 };
  items1 = [tmp.rowTop, { paddingLeft: node.depth * selected(575).space.PX_12 }];
  ({ paddingLeft: node.depth * selected(575).space.PX_12 });
  if (node.children.length > 0) {
    const obj6 = {
      style: tmp.chevron,
      onPress() {
          return react(node.key);
        },
      accessibilityRole: "button",
      accessibilityLabel: str,
      children: closure_8(ChevronSmallDownIcon, obj7)
    };
    str = "Collapse";
    if (collapsed) {
      str = "Expand";
    }
    obj7 = { size: "xs", color: selected(575).colors.ICON_SUBTLE };
    tmp12Result = tmp12(tmp7, obj6);
    tmp14 = tmp12;
  } else {
    const obj8 = { style: tmp.chevron };
    tmp12Result = tmp12(tmp10, obj8);
    tmp14 = tmp12;
  }
  items2 = [tmp12Result, , , , , , , ];
  let tmp14Result = null;
  if (node.descendants > 0) {
    const obj9 = { variant: "text-xs/normal", color: "text-muted", children: node.descendants };
    tmp14Result = tmp14(tmp2(5619).Text, obj9);
  }
  items2[1] = tmp14Result;
  const obj10 = { style: items3 };
  items3 = [tmp.swatch, perfCategoryColors[node.category]];
  items2[2] = tmp14(closure_6, obj10);
  const obj11 = { variant: "text-xs/semibold", color: "text-strong", children: node.service };
  items2[3] = tmp14(tmp2(5619).Text, obj11);
  const obj12 = { variant: "text-xs/normal", color: "text-default", style: tmp.operation, lineClamp: 1, children: node.operation };
  items2[4] = tmp14(tmp2(5619).Text, obj12);
  let tmp14Result4 = null;
  if (node.count > 1) {
    const obj13 = { style: tmp.badge, children: tmp14(Text, obj14) };
    const _HermesInternal = HermesInternal;
    obj14 = { variant: "text-xxs/semibold", color: "text-default", children: "\u00D7" + node.count };
    Text = tmp2(5619).Text;
    tmp14Result4 = tmp14(tmp10, obj13);
  }
  items2[5] = tmp14Result4;
  let tmp14Result5 = null;
  if (node.failed) {
    const obj15 = { size: "xs", color: selected(575).colors.STATUS_DANGER };
    const WarningIcon = tmp2(8018).WarningIcon;
    tmp14Result5 = tmp14(WarningIcon, obj15);
  }
  items2[6] = tmp14Result5;
  const obj16 = { variant: "text-xs/normal", color: "text-muted", children: tmp2Result.perfNodeDuration(node) };
  const Text2 = tmp2(5619).Text;
  tmp2Result = tmp2(12968);
  items2[7] = tmp14(Text2, obj16);
  items4 = [tmp6(closure_6, obj4), , ];
  const obj17 = { style: tmp.track, children: tmp14(closure_6, obj18) };
  obj18 = { style: items5 };
  items5 = [tmp.bar, running, ];
  const obj19 = { left: `${node.start / extent * 100}%`, width: `${(node.end - node.start) / extent * 100}%` };
  items5[2] = obj19;
  items4[1] = tmp14(closure_6, obj17);
  let tmp14Result6 = null;
  if (selected) {
    const obj20 = {
      style: items6,
      children: perfNodeSectionsResult.map((item) => {
          let items;
          let rows;
          let title;
          ({ title, rows } = item);
          let obj = { style: detail.detail, children: items };
          let tmp3 = null;
          let tmp = React4;
          let tmp2 = metroRequire;
          if (null != title) {
            let tmp4 = metroImportAll;
            let obj2 = { variant: "text-xs/semibold", color: "text-strong", children: title };
            tmp3 = metroImportAll(Text_Text.Text, obj2);
          }
          items = [
            tmp3,
            rows.map((label) => {
              let detailLine;
              let items;
              let tmp4;
              label = label.label;
              const value = label.value;
              const tmp = closure_2_9;
              const tmp2 = closure_2_6;
              if (label.block) {
                detailLine = tmp3.detailBlock;
                tmp4 = tmp3;
              } else {
                detailLine = tmp3.detailLine;
                tmp4 = tmp3;
              }
              const obj = { style: detailLine, children: items };
              items = [closure_2_8(node(dependencyMap[9]).Text, { variant: "text-xs/semibold", color: "text-muted", children: label }), ];
              const obj2 = { variant: "text-xs/normal", color: "text-default", style: tmp4.operation, selectable: true, children: value };
              items[1] = closure_2_8(node(dependencyMap[9]).Text, obj2);
              return tmp(tmp2, obj, label);
            })
          ];
          if (title == null) {
            title = "timing";
          }
          return tmp(tmp2, obj, title);
        })
    };
    items6 = [tmp.detail, ];
    items6[1] = { paddingLeft: node.depth * selected(575).space.PX_12 };
    const obj21 = { paddingLeft: node.depth * selected(575).space.PX_12 };
    const tmp2Result2 = tmp2(12968);
    perfNodeSectionsResult = tmp2Result2.perfNodeSections(node);
    tmp14Result6 = tmp14(tmp10, obj20);
  }
  items4[2] = tmp14Result6;
  return closure_9(closure_4, obj2);
}
function SmallerRow(row) {
  let ChevronSmallRightIcon;
  let closure_129_1;
  let extent;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj12;
  let obj6;
  row = row.row;
  ({ extent, onReveal: closure_129_1 } = row);
  const tmp = closure_11();
  const obj = ConjurePerfTraceFormat;
  const perfSmallerLabelResult = obj.perfSmallerLabel(row);
  const obj2 = {
    style: tmp.row,
    onPress() {
      return closure_1_1(row.parentKey);
    },
    accessibilityRole: "button",
    accessibilityLabel: perfSmallerLabelResult,
    children: items3
  };
  const obj3 = { style: items, children: items1 };
  items = [tmp.rowTop, { paddingLeft: row.depth * nativeDefault.space.PX_12 }];
  const obj5 = { style: tmp.chevron, children: metroImportAll(ChevronSmallRightIcon, obj6) };
  obj6 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE };
  ({ paddingLeft: row.depth * nativeDefault.space.PX_12 });
  ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
  items1 = [metroImportAll(metroRequire, obj5), , , ];
  const obj7 = { style: items2 };
  items2 = [, ];
  ({ swatch: arr3[0], smaller: arr3[1] } = tmp);
  items1[1] = metroImportAll(metroRequire, obj7);
  const obj8 = { variant: "text-xs/normal", color: "text-muted", style: tmp.operation, lineClamp: 1, children: perfSmallerLabelResult };
  items1[2] = metroImportAll(Text_Text.Text, obj8);
  const obj9 = { variant: "text-xs/normal", color: "text-muted", children: obj10.formatPerfMs(row.totalMs) };
  const Text = Text_Text.Text;
  obj10 = ConjurePerfTraceFormat;
  items1[3] = metroImportAll(Text, obj9);
  items3 = [React4(metroRequire, obj3), ];
  const obj11 = { style: tmp.smallerTrack, children: metroImportAll(metroRequire, obj12) };
  obj12 = { style: items4 };
  items4 = [, , ];
  ({ bar: arr5[0], smaller: arr5[1] } = tmp);
  const obj13 = { left: `${row.start / extent * 100}%`, width: `${(row.end - row.start) / extent * 100}%` };
  items4[2] = obj13;
  items3[1] = metroImportAll(metroRequire, obj11);
  return React4(React3, obj2);
}
function TraceStats(trace) {
  trace = trace.trace;
  const items = [trace];
  const stats = react.useMemo(() => {
    const obj = ConjurePerfTraceStats;
    return obj.perfTraceStats(trace);
  }, items);
  return closure_8(ConjurePerfTraceStatsHeaderDefault, { stats });
}
function Waterfall(trace) {
  let closure_0;
  let extent;
  let items;
  let items1;
  let items2;
  let items3;
  let obj6;
  let obj8;
  let rows;
  let tmp4Result;
  trace = trace.trace;
  const tmp = closure_11();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp3 = useConjurePerfTraceTreeDefault(trace);
  _require = tmp3;
  let obj = require("ConjurePerfTraceLayout");
  importDefault = obj.perfTraceExtent(trace);
  let tmp5 = closure_9;
  const obj2 = { contentContainerStyle: items, children: items2 };
  items = [tmp.content, ];
  let obj3 = { paddingBottom: nativeDefault.space.PX_16 + bottom };
  items[1] = obj3;
  const obj4 = { style: tmp.section, children: items1 };
  const obj5 = { variant: "text-md/semibold", color: "text-strong", children: obj6.perfTraceDuration(trace) };
  const Text = require("Text/Text").Text;
  obj6 = require("ConjurePerfTraceFormat");
  items1 = [closure_8(Text, obj5), , , ];
  const obj7 = { variant: "text-sm/normal", color: "text-muted", children: obj8.perfTraceSummary(trace) };
  const Text2 = require("Text/Text").Text;
  obj8 = require("ConjurePerfTraceFormat");
  items1[1] = closure_8(Text2, obj7);
  let tmp8Result = null;
  const tmp6 = closure_5;
  if (null != trace.started_by) {
    const _HermesInternal = HermesInternal;
    const obj9 = { variant: "text-sm/normal", color: "text-muted", children: "Started by " + trace.started_by.trace_name };
    const Text3 = tmp4(5619).Text;
    tmp8Result = tmp8(Text3, obj9);
  }
  items1[2] = tmp8Result;
  let tmp8Result2 = null;
  if (0 !== trace.dropped) {
    const obj10 = { variant: "text-sm/normal", color: "text-feedback-warning", children: "" + tmp4Result.formatSpanCount(trace.dropped) + " not recorded" };
    const Text4 = tmp4(5619).Text;
    const _HermesInternal2 = HermesInternal;
    tmp4Result = require("ConjurePerfTraceFormat");
    tmp8Result2 = tmp8(Text4, obj10);
  }
  items1[3] = tmp8Result2;
  items2 = [tmp5(tmp7, obj4), tmp8(TraceStats, { trace }), , , ];
  const obj11 = { style: tmp.toolbar, children: items3 };
  items3 = [, , ];
  const obj12 = { size: "sm", variant: "secondary", text: "Time sinks", onPress: tmp3.reset };
  items3[0] = closure_8(require("components/Button/Button").Button, obj12);
  const obj13 = { size: "sm", variant: "secondary", text: "Expand all", onPress: tmp3.expandAll };
  items3[1] = closure_8(require("components/Button/Button").Button, obj13);
  const obj14 = { size: "sm", variant: "secondary", text: "Collapse all", onPress: tmp3.collapseAll };
  items3[2] = closure_8(require("components/Button/Button").Button, obj14);
  items2[2] = tmp5(closure_6, obj11);
  items2[3] = closure_8(require("Text/Text").Text, { variant: "text-xs/normal", color: "text-muted", children: "Long-press a span to expand everything under it." });
  const obj15 = {
    children: rows.map((kind) => {
      let collapsed;
      let tmp5;
      if ("node" === kind.kind) {
        const obj3 = { node: kind.node, extent, collapsed: collapsed.has(kind.key), selected: kind.key === closure_0.selectedKey, onSelect: null, onToggle: null, onExpandSubtree: null };
        collapsed = closure_0.collapsed;
        ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_0);
        tmp5 = metroImportAll(WaterfallRow, obj3, kind.key);
      } else {
        const obj = { row: kind, extent, onReveal: closure_0.reveal };
        tmp5 = metroImportAll(SmallerRow, obj, kind.key);
      }
      return tmp5;
    })
  };
  rows = tmp3.rows;
  items2[4] = closure_8(closure_6, obj15);
  return tmp5(tmp6, obj2);
}
function PerfTraceScreen(projectId) {
  let tmp6;
  projectId = projectId.projectId;
  const traceId = projectId.traceId;
  const items = [ConjureDebugStore];
  const items1 = [projectId, traceId];
  const obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ConjureDebugStore.getTimingTrace(projectId, traceId), items1);
  const tmp = projectId;
  if (null == stateFromStores) {
    tmp6 = closure_8(tmp(5619).Text, { variant: "text-sm/normal", color: "text-muted", children: "This trace is no longer available." });
  } else {
    const obj2 = { trace: stateFromStores };
    tmp6 = closure_8(Waterfall, obj2);
  }
  return tmp6;
}
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const perf_trace = "perf_trace";
let createStyles = createStyles_mod;
let obj = { content: obj2, section: obj3, toolbar: obj4, row: obj5, rowSelected: obj6, rowTop: obj7, chevron: obj8, operation: { flex: 1 }, badge: obj9, swatch: size, track: { height: 6 }, bar: rect, detail: obj10, detailLine: obj11, detailBlock: obj12, failed: obj13, running: obj14, smaller: obj15, smallerTrack: { height: 3 } };
obj2 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj5 = { paddingVertical: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj8 = { width: nativeDefault.space.PX_16, alignItems: "center" };
obj9 = { paddingHorizontal: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs };
rect = { position: "absolute", top: 0, bottom: 0, minWidth: 2, borderRadius: nativeDefault.radii.xs };
obj10 = { gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_4 };
obj11 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj12 = { gap: nativeDefault.space.PX_4 };
obj13 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj14 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj15 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
let closure_11 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceModal.tsx");

export default function ConjurePerfTraceModal(projectId) {
  projectId = projectId.projectId;
  const traceId = projectId.traceId;
  let stateFromStores;
  let obj = projectId(stateFromStores[17]);
  const items = [ConjureDebugStore];
  const items1 = [projectId, traceId];
  stateFromStores = obj.useStateFromStores(items, () => {
    const timingTrace = ConjureDebugStore.getTimingTrace(projectId, traceId);
    let str;
    if (timingTrace != null) {
      str = timingTrace.name;
    }
    if (str == null) {
      str = "Perf Trace";
    }
    return str;
  }, items1);
  const items2 = [projectId, stateFromStores, traceId];
  const memo = react.useMemo(() => {
    let obj3;
    let obj = {};
    const obj2 = {
      title: stateFromStores,
      headerLeft: obj3.getHeaderCloseButton(() => {
        const arr = traceId(stateFromStores[19]);
        return arr.pop();
      }),
      render() {
        const obj = { projectId, traceId };
        return closure_2_8(PerfTraceScreen, obj);
      }
    };
    obj[perf_trace] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items2);
  let obj2 = { initialRouteName: perf_trace, screens: memo };
  return closure_8(projectId(stateFromStores[20]).Modal, obj2);
};
