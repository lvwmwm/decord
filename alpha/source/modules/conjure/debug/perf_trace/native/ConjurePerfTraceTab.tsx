// Module ID: 17065
// Function ID: 17066
// Name: ConjurePerfTraceTab
// Dependencies: [19, 17, 17048, 21, 5090, 587, 5940, 17066, 1999, 558, 576, 17068, 17057, 5086, 17067, 6186, 1630, 504, 8600, 2]

// Module 17065 (ConjurePerfTraceTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import Text_Text from "Text/Text" /* 5086 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import Card_Card from "Card/Card" /* 6186 */;
import ConjureTraceFormat from "ConjureTraceFormat" /* 17057 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 17067 */;
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 17068 */;
import react from "react" /* 19 */;
import ConjureDebugStore from "ConjureDebugStore" /* 17048 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, placeholder: obj3, rowSlot: obj4, rowBody: obj5, rowTop: obj6, rowName: { flex: 1 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj4 = { paddingBottom: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_4 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function PerfTraceRow(projectId) {
  let items;
  let items1;
  let rowBody;
  let rowTop;
  let tmp5;
  let obj = projectId(576);
  const cResult = obj.c(39);
  projectId = projectId.projectId;
  const trace = projectId.trace;
  const tmp4 = closure_8();
  if (cResult[0] !== trace.spans) {
    const spans = trace.spans;
    const found = spans.find((error) => null != error.error);
    let error;
    if (found != null) {
      error = found.error;
    }
    cResult[0] = trace.spans;
    cResult[1] = error;
    tmp5 = error;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === projectId) {
    let tmp10;
    let tmp11;
    let tmp13;
    if (cResult[3] === trace.id) {
      tmp10 = cResult[4];
    }
    const name = trace.name;
    ({ rowBody, rowTop } = tmp4);
    if (cResult[5] !== trace) {
      const tmpResult = projectId(17068);
      const perfTraceStatusResult = tmpResult.perfTraceStatus(trace);
      cResult[5] = trace;
      cResult[6] = perfTraceStatusResult;
      tmp11 = perfTraceStatusResult;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp11) {
      let obj2 = { status: tmp11 };
      const tmp15 = closure_6(projectId(17057).TraceStatusDot, obj2);
      cResult[7] = tmp11;
      cResult[8] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp4.rowName) {
      let tmp16;
      let tmp19;
      let tmp21;
      if (cResult[10] === trace.name) {
        tmp16 = cResult[11];
      }
      if (cResult[12] !== trace) {
        const tmpResult3 = projectId(17067);
        let str = tmpResult3.perfTraceDuration(trace);
        if (str == null) {
          str = "still running";
        }
        cResult[12] = trace;
        cResult[13] = str;
        tmp19 = str;
      } else {
        tmp19 = cResult[13];
      }
      if (cResult[14] !== tmp19) {
        const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp19 };
        const tmp23 = closure_6(projectId(5086).Text, obj3);
        cResult[14] = tmp19;
        cResult[15] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[15];
      }
      if (cResult[16] === tmp4.rowTop) {
        if (cResult[17] === tmp21) {
          if (cResult[18] === tmp13) {
            let tmp24;
            let tmp28;
            let tmp30;
            let tmp33;
            if (cResult[19] === tmp16) {
              tmp24 = cResult[20];
            }
            if (cResult[21] !== trace) {
              const tmpResult4 = projectId(17067);
              const perfTraceSummaryResult = tmpResult4.perfTraceSummary(trace);
              cResult[21] = trace;
              cResult[22] = perfTraceSummaryResult;
              tmp28 = perfTraceSummaryResult;
            } else {
              tmp28 = cResult[22];
            }
            if (cResult[23] !== tmp28) {
              const obj4 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: tmp28 };
              const tmp32 = closure_6(projectId(5086).Text, obj4);
              cResult[23] = tmp28;
              cResult[24] = tmp32;
              tmp30 = tmp32;
            } else {
              tmp30 = cResult[24];
            }
            if (cResult[25] !== tmp5) {
              let tmp34 = null;
              if (null != tmp5) {
                const obj5 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: tmp5 };
                tmp34 = closure_6(tmp(5086).Text, obj5);
              }
              cResult[25] = tmp5;
              cResult[26] = tmp34;
              tmp33 = tmp34;
            } else {
              tmp33 = cResult[26];
            }
            if (cResult[27] === tmp4.rowBody) {
              if (cResult[28] === tmp24) {
                if (cResult[29] === tmp30) {
                  let tmp36;
                  if (cResult[30] === tmp33) {
                    tmp36 = cResult[31];
                  }
                  if (cResult[32] === tmp36) {
                    if (cResult[33] === tmp10) {
                      let tmp40;
                      if (cResult[34] === trace.name) {
                        tmp40 = cResult[35];
                      }
                      if (cResult[36] === tmp4.rowSlot) {
                        let tmp43;
                        if (cResult[37] === tmp40) {
                          tmp43 = cResult[38];
                        }
                        return tmp43;
                      }
                      const obj6 = { style: tmp9, children: tmp40 };
                      const tmp46 = closure_6(View, obj6);
                      cResult[36] = tmp4.rowSlot;
                      cResult[37] = tmp40;
                      cResult[38] = tmp46;
                      tmp43 = tmp46;
                    }
                  }
                  const obj7 = { variant: "primary", onPress: tmp10, accessibilityLabel: name, children: tmp36 };
                  cResult[32] = tmp36;
                  cResult[33] = tmp10;
                  cResult[34] = trace.name;
                  const tmp42 = closure_6(projectId(6186).Card, obj7);
                  class T {
                    constructor() {
                      const id = trace.id;
                      const obj = ModalActionCreatorsDefault;
                      const obj2 = { projectId, traceId: id };
                      obj.pushLazy(asyncRequire(17066, dependencyMap.paths), obj2, "CONJURE_PERF_TRACE_MODAL");
                    }
                  }
                  tmp40 = tmp42;
                }
              }
            }
            const obj8 = { style: rowBody, children: items };
            items = [tmp24, tmp30, tmp33];
            const tmp39 = closure_7(View, obj8);
            class T {
              constructor() {
                const id = trace.id;
                const obj = ModalActionCreatorsDefault;
                const obj2 = { projectId, traceId: id };
                obj.pushLazy(asyncRequire(17066, dependencyMap.paths), obj2, "CONJURE_PERF_TRACE_MODAL");
              }
            }
            cResult[27] = tmp4.rowBody;
            cResult[28] = tmp24;
            cResult[29] = tmp30;
            cResult[30] = tmp33;
            cResult[31] = tmp39;
            tmp36 = tmp39;
          }
        }
      }
      const obj9 = { style: rowTop, children: items1 };
      items1 = [tmp13, tmp16, tmp21];
      const tmp27 = closure_7(View, obj9);
      class T {
        constructor() {
          const id = trace.id;
          const obj = ModalActionCreatorsDefault;
          const obj2 = { projectId, traceId: id };
          obj.pushLazy(asyncRequire(17066, dependencyMap.paths), obj2, "CONJURE_PERF_TRACE_MODAL");
        }
      }
      cResult[17] = tmp21;
      cResult[18] = tmp13;
      cResult[19] = tmp16;
      cResult[20] = tmp27;
      tmp24 = tmp27;
    }
    const obj10 = { variant: "text-sm/semibold", color: "text-default", style: tmp4.rowName, lineClamp: 1, children: trace.name };
    const tmp18 = closure_6(projectId(5086).Text, obj10);
    cResult[9] = tmp4.rowName;
    class T {
      constructor() {
        const id = trace.id;
        const obj = ModalActionCreatorsDefault;
        const obj2 = { projectId, traceId: id };
        obj.pushLazy(asyncRequire(17066, dependencyMap.paths), obj2, "CONJURE_PERF_TRACE_MODAL");
      }
    }
    cResult[11] = tmp18;
    tmp16 = tmp18;
  }
  class T {
    constructor() {
      const id = trace.id;
      const obj = ModalActionCreatorsDefault;
      const obj2 = { projectId, traceId: id };
      obj.pushLazy(asyncRequire(17066, dependencyMap.paths), obj2, "CONJURE_PERF_TRACE_MODAL");
    }
  }
  cResult[2] = projectId;
  cResult[3] = trace.id;
  cResult[4] = T;
  tmp10 = T;
}) : (function PerfTraceRow(arg0) {
  let Card;
  let items;
  let items1;
  let obj2;
  let obj3;
  let obj6;
  let projectId;
  let require;
  let tmp6Result;
  let trace;
  ({ projectId: require, trace } = arg0);
  const tmp = closure_8();
  const spans = trace.spans;
  const found = spans.find((error) => null != error.error);
  let error;
  if (found != null) {
    error = found.error;
  }
  let obj = { style: tmp.rowSlot, children: closure_6(Card, obj2) };
  obj2 = {
    variant: "primary",
    onPress() {
      const id = trace.id;
      const obj = ModalActionCreatorsDefault;
      const obj2 = { projectId: require, traceId: id };
      obj.pushLazy(asyncRequire(17066, dependencyMap.paths), obj2, "CONJURE_PERF_TRACE_MODAL");
    },
    accessibilityLabel: trace.name,
    children: closure_7(View, obj3)
  };
  obj3 = { style: tmp.rowBody, children: items1 };
  const obj4 = { style: tmp.rowTop, children: items };
  Card = Card_Card.Card;
  const obj5 = { status: obj6.perfTraceStatus(trace) };
  const TraceStatusDot = ConjureTraceFormat.TraceStatusDot;
  obj6 = ConjurePerfTraceLayout;
  items = [closure_6(TraceStatusDot, obj5), , ];
  const obj7 = { variant: "text-sm/semibold", color: "text-default", style: tmp.rowName, lineClamp: 1, children: trace.name };
  items[1] = closure_6(Text_Text.Text, obj7);
  const Text = Text_Text.Text;
  const obj8 = ConjurePerfTraceFormat;
  let str = obj8.perfTraceDuration(trace);
  if (str == null) {
    str = "still running";
  }
  items[2] = closure_6(Text, { variant: "text-xs/normal", color: "text-subtle", children: str });
  items1 = [closure_7(View, obj4), , ];
  const obj9 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: tmp6Result.perfTraceSummary(trace) };
  const Text2 = tmp6(5086).Text;
  tmp6Result = ConjurePerfTraceFormat;
  items1[1] = closure_6(Text2, obj9);
  let tmp4Result = null;
  if (null != error) {
    const obj10 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: error };
    tmp4Result = tmp4(tmp6(5086).Text, obj10);
  }
  items1[2] = tmp4Result;
  return closure_6(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePerfTraceTab(projectId) {
  let first;
  let items3;
  let tmp10;
  let tmp11;
  let tmp16;
  let tmp9;
  let obj = projectId(576);
  const cResult = obj.c(22);
  projectId = projectId.projectId;
  const tmp5 = closure_8();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function x() {
      return ConjureDebugStore.getTimingTraces(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmp2Result = projectId(504);
  const stateFromStoresArray = tmp2Result.useStateFromStoresArray(first, tmp9, tmp10);
  if (cResult[4] !== stateFromStoresArray) {
    const items2 = [];
    HermesBuiltin.arraySpread(items2, stateFromStoresArray, 0);
    const reversed = items2.reverse();
    cResult[4] = stateFromStoresArray;
    cResult[5] = reversed;
    tmp11 = reversed;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== projectId) {
    const fn2 = function _(trace) {
      const obj = { projectId, trace: trace.item };
      return metroRequire(closure_9, obj);
    };
    cResult[6] = projectId;
    cResult[7] = fn2;
    tmp16 = fn2;
  } else {
    tmp16 = cResult[7];
  }
  if (0 === stateFromStoresArray.length) {
    let tmp26;
    let tmp25;
    let tmp30;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp28 = closure_6(projectId(5086).Text, { variant: "text-sm/medium", color: "text-default", children: "No perf traces yet" });
      const tmp29 = closure_6(projectId(5086).Text, { variant: "text-sm/normal", color: "text-muted", children: "Turns and project operations over 100ms record a timing trace here when they finish." });
      cResult[8] = tmp28;
      cResult[9] = tmp29;
      tmp26 = tmp29;
      tmp25 = tmp28;
    } else {
      tmp25 = cResult[8];
      tmp26 = cResult[9];
    }
    if (cResult[10] !== tmp5.placeholder) {
      const obj2 = { style: tmp5.placeholder, children: items3 };
      items3 = [tmp25, tmp26];
      const tmp33 = closure_7(View, obj2);
      cResult[10] = tmp5.placeholder;
      cResult[11] = tmp33;
      tmp30 = tmp33;
    } else {
      tmp30 = cResult[11];
    }
    return tmp30;
  } else {
    let tmp17;
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(id) {
          return id.id;
        }
      }
      cResult[12] = I;
      tmp17 = I;
    } else {
      class I {
        constructor(id) {
          return id.id;
        }
      }
    }
    const sum = nativeDefault.space.PX_16 + bottom;
    if (cResult[13] !== sum) {
      class I {
        constructor(id) {
          return id.id;
        }
      }
      tmp20[0] = sum;
      cResult[13] = sum;
      cResult[14] = tmp20;
    } else {
      class I {
        constructor(id) {
          return id.id;
        }
      }
    }
    if (cResult[15] === tmp5.list) {
      class I {
        constructor(id) {
          return id.id;
        }
      }
      if (cResult[18] === tmp11) {
        class I {
          constructor(id) {
            return id.id;
          }
        }
      }
      const obj3 = { data: tmp11, keyExtractor: tmp17, renderItem: tmp16, contentContainerStyle: tmp21 };
      cResult[18] = tmp11;
      cResult[19] = tmp16;
      cResult[20] = tmp21;
      cResult[21] = closure_6(projectId(8600).FlashList, obj3);
      const tmp24 = closure_6(projectId(8600).FlashList, obj3);
    }
    const items4 = [tmp5.list, tmp19];
    cResult[15] = tmp5.list;
    cResult[16] = tmp19;
    cResult[17] = items4;
  }
}) : (function ConjurePerfTraceTab(projectId) {
  let items3;
  let items4;
  let tmp8;
  projectId = projectId.projectId;
  let stateFromStoresArray;
  const tmp = closure_8();
  const bottom = stateFromStoresArray(1630)().bottom;
  let obj = projectId(504);
  let items = [ConjureDebugStore];
  const items1 = [projectId];
  const tmp2 = stateFromStoresArray;
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => ConjureDebugStore.getTimingTraces(projectId), items1);
  const items2 = [stateFromStoresArray];
  [][0] = projectId;
  const memo = react.useMemo(() => {
    const items = [...stateFromStoresArray];
    return items.reverse();
  }, items2);
  if (0 === stateFromStoresArray.length) {
    const obj2 = { style: tmp.placeholder, children: items3 };
    items3 = [closure_6(projectId(5086).Text, { variant: "text-sm/medium", color: "text-default", children: "No perf traces yet" }), closure_6(projectId(5086).Text, { variant: "text-sm/normal", color: "text-muted", children: "Turns and project operations over 100ms record a timing trace here when they finish." })];
    tmp8 = closure_7(View, obj2);
  } else {
    const obj3 = {
      data: memo,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: tmp6,
      contentContainerStyle: items4
    };
    items4 = [tmp.list, ];
    const obj4 = { paddingBottom: tmp2(587).space.PX_16 + bottom };
    const FlashList = tmp4(8600).FlashList;
    items4[1] = obj4;
    tmp8 = closure_6(FlashList, obj3);
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceTab.tsx");

export default tmp4;
