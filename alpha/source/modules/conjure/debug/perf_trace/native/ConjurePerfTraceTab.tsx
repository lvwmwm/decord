// Module ID: 13000
// Function ID: 13001
// Name: ConjurePerfTraceTab
// Dependencies: [32, 5, 19, 17, 10857, 21, 5014, 575, 6744, 13001, 1994, 6977, 13007, 10894, 5624, 13003, 1266, 8778, 13008, 11100, 1625, 504, 13005, 7294, 7218, 12568, 5733, 13002, 2]
// Exports: default, openPerfTrace

// Module 13000 (ConjurePerfTraceTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import v1 from "v1" /* 1266 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import Text_Text from "Text/Text" /* 5624 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import Card_Card from "Card/Card" /* 6977 */;
import FileManagerUtils from "FileManagerUtils" /* 8778 */;
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 10894 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 13003 */;
import ConjurePerfTraceStats from "ConjurePerfTraceStats" /* 13005 */;
import ConjurePerfTraceList from "ConjurePerfTraceList" /* 13008 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10857 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c1, c2;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
function PerfTraceRow(arg0) {
  let Card;
  let items;
  let items1;
  let obj11;
  let obj2;
  let obj3;
  let obj6;
  let obj9;
  let projectId;
  let tmp8;
  let trace;
  ({ projectId: require, trace } = arg0);
  const tmp = closure_10();
  const spans = trace.spans;
  const found = spans.find((error) => null != error.error);
  let error;
  if (found != null) {
    error = found.error;
  }
  let obj = { style: tmp.rowSlot, children: closure_8(Card, obj2) };
  obj2 = {
    variant: "primary",
    onPress() {
      const id = trace.id;
      const obj = ModalActionCreatorsDefault;
      const obj2 = { projectId: require, traceId: id };
      obj.pushLazy(asyncRequire(13001, dependencyMap.paths), obj2, "CONJURE_PERF_TRACE_MODAL");
    },
    accessibilityLabel: trace.name,
    children: tmp8(View, obj3)
  };
  obj3 = { style: tmp.rowBody, children: items1 };
  const obj4 = { style: tmp.rowTop, children: items };
  Card = Card_Card.Card;
  const obj5 = { status: obj6.perfTraceStatus(trace) };
  const tmp9 = trace(13007);
  obj6 = ConjurePerfTraceLayout;
  items = [closure_8(tmp9, obj5), , ];
  const obj7 = { variant: "text-sm/semibold", color: "text-default", style: tmp.rowName, lineClamp: 1, children: trace.name };
  items[1] = closure_8(Text_Text.Text, obj7);
  const obj8 = { variant: "text-xs/normal", color: "text-subtle", children: obj9.perfTraceDuration(trace) };
  const Text = Text_Text.Text;
  obj9 = ConjurePerfTraceFormat;
  items[2] = closure_8(Text, obj8);
  items1 = [closure_9(View, obj4), , ];
  const obj10 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: obj11.perfTraceSummary(trace) };
  const Text2 = Text_Text.Text;
  obj11 = ConjurePerfTraceFormat;
  items1[1] = closure_8(Text2, obj10);
  let tmp4Result = null;
  tmp8 = closure_9;
  if (null != error) {
    const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: error };
    tmp4Result = tmp4(Text_Text.Text, obj12);
  }
  items1[2] = tmp4Result;
  return closure_8(View, obj);
}
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, placeholder: obj3, header: obj4, tools: obj5, search: { flex: 1 }, rowSlot: obj6, rowBody: obj7, rowTop: obj8, rowName: { flex: 1 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj6 = { paddingBottom: nativeDefault.space.PX_8 };
obj7 = { gap: nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceTab.tsx");

export default function ConjurePerfTraceTab(projectId) {
  let items6;
  let items7;
  let items8;
  let items9;
  let obj4;
  let obj7;
  let tmp17Result2;
  let tmp18;
  let tmp19;
  projectId = projectId.projectId;
  let stateFromStoresArray;
  let first;
  let memo;
  let tmp = closure_10();
  let tmp2 = stateFromStoresArray;
  let tmp3 = first;
  const bottom = stateFromStoresArray(first[20])().bottom;
  let obj = projectId(first[21]);
  let items = [ConjureDebugStore];
  const items1 = [projectId];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => ConjureDebugStore.getTimingTraces(projectId), items1);
  let tmp5 = memo(react.useState(""), 2);
  first = tmp5[0];
  const items2 = [stateFromStoresArray, first];
  const tmp7 = tmp5[1];
  memo = react.useMemo(() => {
    const obj = ConjurePerfTraceList;
    return obj.filterPerfTraces(stateFromStoresArray, first);
  }, items2);
  const items3 = [memo];
  const memo1 = react.useMemo(() => {
    const items = [...memo];
    return items.reverse();
  }, items3);
  const items4 = [memo];
  const items5 = [projectId, memo];
  const memo2 = react.useMemo(() => {
    const obj = ConjurePerfTraceStats;
    return obj.sumPerfTraceStats(memo);
  }, items4);
  [][0] = projectId;
  const callback = react.useCallback(() => {
    let combined = "conjure-traces-" + projectId + ".json";
    let obj = v1;
    const combined1 = "conjure-traces-" + obj.v4();
    const tmp3 = FileManagerUtils;
    const writeFile = tmp3.writeFile;
    const combined2 = "" + combined1 + "/" + combined;
    const perfTraceExport = ConjurePerfTraceList.perfTraceExport;
    const date = new Date();
    const writeFileResult = writeFile("cache", combined2, perfTraceExport(projectId, memo, date.toISOString()), "utf8");
    const nextPromise = writeFileResult.then(function(result) {
      let items;
      if (null == result) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("trace file was not written");
        throw error;
      } else {
        const _encodeURI = encodeURI;
        const _HermesInternal = HermesInternal;
        combined = "file://" + encodeURI(result.replace(/^file:\/*/, "/"));
        const obj2 = { sourceUris: items, fileName: combined, mimeType: "application/json", copy: true };
        items = [combined];
        const obj = projectId(first[19]);
        return obj.saveDocuments(obj2);
      }
    });
    const cleanupPromise = nextPromise.finally(_asyncToGenerator(async (arg0, value) => {
      let closure_0;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              combined = tmp3;
              c1 = 1;
              const obj5 = combined(c2[17]);
              c2 = 1;
              const obj6 = { value: obj5.clearFolder("cache", combined1), done: false };
              return obj6;
            }
          } else if (1 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              c1 = 2;
              const obj2 = combined(c2[17]);
              c2 = 1;
              const obj8 = { value: obj2.removeFile("cache", closure_128_1), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp11) {
          c2 = 3;
          throw tmp11;
        }
      }
    }));
    cleanupPromise.catch((error) => {
      const obj = projectId(first[19]);
      const isErrorWithCodeResult = obj.isErrorWithCode(error);
      const tmp = projectId;
      const tmp2 = first;
      if (isErrorWithCodeResult) {
        const code = error.code;
        const OPERATION_CANCELED = tmp(tmp2[19]).errorCodes.OPERATION_CANCELED;
      }
    });
  }, items5);
  if (0 === stateFromStoresArray.length) {
    let obj2 = { style: tmp.placeholder, children: items6 };
    items6 = [closure_8(tmp4(tmp3[14]).Text, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }), closure_8(tmp4(tmp3[14]).Text, { variant: "text-sm/normal", color: "text-muted", children: "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail." })];
    tmp17Result2 = closure_9(View, obj2);
  } else {
    let obj3 = {
      data: memo1,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: tmp11,
      ListHeaderComponent: tmp18(tmp19, obj4),
      contentContainerStyle: items9
    };
    obj4 = { style: tmp.header, children: items8 };
    let obj5 = { style: tmp.tools, children: items7 };
    let obj6 = { style: tmp.search, children: closure_8(tmp4(tmp3[24]).SearchBar, obj7) };
    const FlashList = tmp4(tmp3[23]).FlashList;
    obj7 = { accessibilityLabel: "Search traces", placeholder: "Search traces", size: "sm", onChange: tmp7 };
    items7 = [closure_8(View, obj6), ];
    let obj8 = { IconComponent: tmp4(tmp3[26]).DownloadIcon, onPress: callback, accessibilityLabel: "Export as JSON" };
    const tmp2Result = tmp2(tmp3[25]);
    items7[1] = closure_8(tmp2Result, obj8);
    items8 = [closure_9(View, obj5), , ];
    const obj9 = { stats: memo2 };
    items8[1] = closure_8(tmp2(tmp3[27]), obj9);
    let tmp17Result = null;
    tmp18 = closure_9;
    tmp19 = View;
    if (0 === memo1.length) {
      tmp17Result = tmp17(tmp4(tmp3[14]).Text, { variant: "text-sm/normal", color: "text-muted", children: "No traces match this search." });
    }
    items8[2] = tmp17Result;
    items9 = [tmp.list, ];
    items9[1] = { paddingBottom: tmp2(tmp3[7]).space.PX_16 + bottom };
    const obj10 = { paddingBottom: tmp2(tmp3[7]).space.PX_16 + bottom };
    tmp17Result2 = tmp17(FlashList, obj3);
  }
  return tmp17Result2;
};
export function openPerfTrace(projectId, traceId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { projectId, traceId };
  obj.pushLazy(asyncRequire(13001, dependencyMap.paths), obj2, "CONJURE_PERF_TRACE_MODAL");
}
