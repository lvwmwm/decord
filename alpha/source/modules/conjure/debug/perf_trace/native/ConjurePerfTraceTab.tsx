// Module ID: 17211
// Function ID: 17212
// Name: ConjurePerfTraceTab
// Dependencies: [32, 5, 19, 17, 13165, 21, 5091, 587, 5941, 17212, 2000, 558, 576, 13174, 17218, 5087, 17214, 6188, 1279, 8315, 17219, 12749, 1631, 504, 17216, 6737, 16970, 5046, 17213, 8608, 2]

// Module 17211 (ConjurePerfTraceTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import v1 from "v1" /* 1279 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import Text_Text from "Text/Text" /* 5087 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import Card_Card from "Card/Card" /* 6188 */;
import FileManagerUtils from "FileManagerUtils" /* 8315 */;
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 13174 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 17214 */;
import ConjurePerfTraceStats from "ConjurePerfTraceStats" /* 17216 */;
import ConjurePerfTraceList from "ConjurePerfTraceList" /* 17219 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13165 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, catchPromise, importDefault;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let tmp6;
const ConjureHeaderIconButtonDefault = tmp6(16970);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function PerfTraceRow(projectId) {
  let items;
  let items1;
  let rowBody;
  let rowTop;
  let tmp5;
  let obj = projectId(576);
  const cResult = obj.c(39);
  projectId = projectId.projectId;
  const trace = projectId.trace;
  const tmp4 = closure_10();
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
      const tmpResult = projectId(13174);
      const perfTraceStatusResult = tmpResult.perfTraceStatus(trace);
      cResult[5] = trace;
      cResult[6] = perfTraceStatusResult;
      tmp11 = perfTraceStatusResult;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp11) {
      let obj2 = { status: tmp11 };
      const tmp16 = closure_8(trace(17218), obj2);
      cResult[7] = tmp11;
      cResult[8] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp4.rowName) {
      let tmp17;
      let tmp20;
      let tmp22;
      if (cResult[10] === trace.name) {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== trace) {
        const tmpResult3 = projectId(17214);
        const perfTraceDurationResult = tmpResult3.perfTraceDuration(trace);
        cResult[12] = trace;
        cResult[13] = perfTraceDurationResult;
        tmp20 = perfTraceDurationResult;
      } else {
        tmp20 = cResult[13];
      }
      if (cResult[14] !== tmp20) {
        const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp20 };
        const tmp24 = closure_8(projectId(5087).Text, obj3);
        cResult[14] = tmp20;
        cResult[15] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[15];
      }
      if (cResult[16] === tmp4.rowTop) {
        if (cResult[17] === tmp22) {
          if (cResult[18] === tmp13) {
            let tmp25;
            let tmp29;
            let tmp31;
            let tmp34;
            if (cResult[19] === tmp17) {
              tmp25 = cResult[20];
            }
            if (cResult[21] !== trace) {
              const tmpResult4 = projectId(17214);
              const perfTraceSummaryResult = tmpResult4.perfTraceSummary(trace);
              cResult[21] = trace;
              cResult[22] = perfTraceSummaryResult;
              tmp29 = perfTraceSummaryResult;
            } else {
              tmp29 = cResult[22];
            }
            if (cResult[23] !== tmp29) {
              const obj4 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: tmp29 };
              const tmp33 = closure_8(projectId(5087).Text, obj4);
              cResult[23] = tmp29;
              cResult[24] = tmp33;
              tmp31 = tmp33;
            } else {
              tmp31 = cResult[24];
            }
            if (cResult[25] !== tmp5) {
              let tmp35 = null;
              if (null != tmp5) {
                const obj5 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: tmp5 };
                tmp35 = closure_8(tmp(5087).Text, obj5);
              }
              cResult[25] = tmp5;
              cResult[26] = tmp35;
              tmp34 = tmp35;
            } else {
              tmp34 = cResult[26];
            }
            if (cResult[27] === tmp4.rowBody) {
              if (cResult[28] === tmp25) {
                if (cResult[29] === tmp31) {
                  let tmp37;
                  if (cResult[30] === tmp34) {
                    tmp37 = cResult[31];
                  }
                  if (cResult[32] === tmp37) {
                    if (cResult[33] === tmp10) {
                      let tmp41;
                      if (cResult[34] === trace.name) {
                        tmp41 = cResult[35];
                      }
                      if (cResult[36] === tmp4.rowSlot) {
                        let tmp44;
                        if (cResult[37] === tmp41) {
                          tmp44 = cResult[38];
                        }
                        return tmp44;
                      }
                      const obj6 = { style: tmp9, children: tmp41 };
                      const tmp47 = closure_8(View, obj6);
                      cResult[36] = tmp4.rowSlot;
                      cResult[37] = tmp41;
                      cResult[38] = tmp47;
                      tmp44 = tmp47;
                    }
                  }
                  const obj7 = { variant: "primary", onPress: tmp10, accessibilityLabel: name, children: tmp37 };
                  const tmp43 = closure_8(projectId(6188).Card, obj7);
                  cResult[32] = tmp37;
                  cResult[33] = tmp10;
                  cResult[34] = trace.name;
                  cResult[35] = tmp43;
                  tmp41 = tmp43;
                }
              }
            }
            const obj8 = { style: rowBody, children: items };
            items = [tmp25, tmp31, tmp34];
            const tmp40 = closure_9(View, obj8);
            cResult[27] = tmp4.rowBody;
            cResult[28] = tmp25;
            cResult[29] = tmp31;
            cResult[30] = tmp34;
            cResult[31] = tmp40;
            tmp37 = tmp40;
          }
        }
      }
      const obj9 = { style: rowTop, children: items1 };
      items1 = [tmp13, tmp17, tmp22];
      const tmp28 = closure_9(View, obj9);
      cResult[16] = tmp4.rowTop;
      cResult[17] = tmp22;
      cResult[18] = tmp13;
      cResult[19] = tmp17;
      cResult[20] = tmp28;
      tmp25 = tmp28;
    }
    const obj10 = { variant: "text-sm/semibold", color: "text-default", style: tmp4.rowName, lineClamp: 1, children: trace.name };
    const tmp19 = closure_8(projectId(5087).Text, obj10);
    cResult[9] = tmp4.rowName;
    cResult[10] = trace.name;
    cResult[11] = tmp19;
    tmp17 = tmp19;
  }
  const fn = function f() {
    const id = trace.id;
    const obj = ModalActionCreatorsDefault;
    const obj2 = { projectId, traceId: id };
    obj.pushLazy(asyncRequire(17212, dependencyMap.paths), obj2, "CONJURE_PERF_TRACE_MODAL");
  };
  cResult[2] = projectId;
  cResult[3] = trace.id;
  cResult[4] = fn;
  tmp10 = fn;
}) : (function PerfTraceRow(arg0) {
  let Card;
  let items;
  let items1;
  let obj11;
  let obj2;
  let obj3;
  let obj6;
  let obj9;
  let projectId;
  let require;
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
      obj.pushLazy(asyncRequire(17212, dependencyMap.paths), obj2, "CONJURE_PERF_TRACE_MODAL");
    },
    accessibilityLabel: trace.name,
    children: tmp8(View, obj3)
  };
  obj3 = { style: tmp.rowBody, children: items1 };
  const obj4 = { style: tmp.rowTop, children: items };
  Card = Card_Card.Card;
  const obj5 = { status: obj6.perfTraceStatus(trace) };
  const tmp9 = trace(17218);
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePerfTraceTab(projectId) {
  let closure_1;
  let first;
  let items3;
  let items4;
  let tmp10;
  let tmp9;
  let obj = projectId(576);
  const cResult = obj.c(49);
  projectId = projectId.projectId;
  const tmp5 = closure_10();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function f() {
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
  const first1 = _slicedToArray(react.useState(""), 2)[0];
  _slicedToArray(react.useState(""), 2);
  if (cResult[4] === first1) {
    let tmp13;
    if (cResult[5] === stateFromStoresArray) {
      tmp13 = cResult[6];
    }
    importDefault = tmp13;
    if (cResult[7] !== tmp13) {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, tmp13, 0);
      class F {
        constructor() {
          combined = "conjure-traces-" + projectId + ".json";
          closure_0 = combined;
          obj = closure_0(closure_2[18]);
          combined1 = "conjure-traces-" + obj.v4();
          closure_1 = combined1;
          tmp3 = closure_0(closure_2[19]);
          writeFile = tmp3.writeFile;
          combined2 = "" + combined1 + "/" + combined;
          tmp5 = closure_0(closure_2[20]);
          perfTraceExport = tmp5.perfTraceExport;
          date = new Date();
          writeFileResult = writeFile("cache", combined2, perfTraceExport(projectId, closure_1, date.toISOString()), "utf8");
          nextPromise = writeFileResult.then(function(result) {
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
              const obj = projectId(first[21]);
              return obj.saveDocuments(obj2);
            }
          });
          cleanupPromise = nextPromise.finally(closure_4(async (arg0, value) => {
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
                return { value: "IconComponent", done: null };
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
                    const obj5 = combined(c2[19]);
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
                    const obj2 = combined(c2[19]);
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
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp11) {
                c2 = 3;
                throw tmp11;
              }
            }
          }));
          catchPromise = cleanupPromise.catch((error) => {
            const obj = projectId(first[21]);
            const isErrorWithCodeResult = obj.isErrorWithCode(error);
            const tmp = projectId;
            const tmp2 = first;
            if (isErrorWithCodeResult) {
              const code = error.code;
              const OPERATION_CANCELED = tmp(tmp2[21]).errorCodes.OPERATION_CANCELED;
            }
          });
          return;
        }
      }
      cResult[7] = tmp13;
      cResult[8] = tmp19;
    }
    if (cResult[9] !== tmp13) {
      cResult[9] = tmp13;
      const tmp2Result3 = projectId(17216);
      tmp2Result3.sumPerfTraceStats(tmp13);
      class F {
        constructor() {
          combined = "conjure-traces-" + projectId + ".json";
          closure_0 = combined;
          obj = closure_0(closure_2[18]);
          combined1 = "conjure-traces-" + obj.v4();
          closure_1 = combined1;
          tmp3 = closure_0(closure_2[19]);
          writeFile = tmp3.writeFile;
          combined2 = "" + combined1 + "/" + combined;
          tmp5 = closure_0(closure_2[20]);
          perfTraceExport = tmp5.perfTraceExport;
          date = new Date();
          writeFileResult = writeFile("cache", combined2, perfTraceExport(projectId, closure_1, date.toISOString()), "utf8");
          nextPromise = writeFileResult.then(function(result) {
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
              const obj = projectId(first[21]);
              return obj.saveDocuments(obj2);
            }
          });
          cleanupPromise = nextPromise.finally(closure_4(async (arg0, value) => {
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
                return { value: "IconComponent", done: null };
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
                    const obj5 = combined(c2[19]);
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
                    const obj2 = combined(c2[19]);
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
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp11) {
                c2 = 3;
                throw tmp11;
              }
            }
          }));
          catchPromise = cleanupPromise.catch((error) => {
            const obj = projectId(first[21]);
            const isErrorWithCodeResult = obj.isErrorWithCode(error);
            const tmp = projectId;
            const tmp2 = first;
            if (isErrorWithCodeResult) {
              const code = error.code;
              const OPERATION_CANCELED = tmp(tmp2[21]).errorCodes.OPERATION_CANCELED;
            }
          });
          return;
        }
      }
    }
    if (cResult[11] === tmp13) {
      let tmp22;
      if (cResult[12] === projectId) {
        tmp22 = cResult[13];
      }
      if (cResult[14] !== projectId) {
        class B {
          constructor(trace) {
            const obj = { projectId, trace: trace.item };
            return metroImportAll(closure_11, obj);
          }
        }
        cResult[14] = projectId;
        cResult[15] = B;
        class F {
          constructor() {
            combined = "conjure-traces-" + projectId + ".json";
            closure_0 = combined;
            obj = closure_0(closure_2[18]);
            combined1 = "conjure-traces-" + obj.v4();
            closure_1 = combined1;
            tmp3 = closure_0(closure_2[19]);
            writeFile = tmp3.writeFile;
            combined2 = "" + combined1 + "/" + combined;
            tmp5 = closure_0(closure_2[20]);
            perfTraceExport = tmp5.perfTraceExport;
            date = new Date();
            writeFileResult = writeFile("cache", combined2, perfTraceExport(projectId, closure_1, date.toISOString()), "utf8");
            nextPromise = writeFileResult.then(function(result) {
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
                const obj = projectId(first[21]);
                return obj.saveDocuments(obj2);
              }
            });
            cleanupPromise = nextPromise.finally(closure_4(async (arg0, value) => {
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
                  return { value: "IconComponent", done: null };
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
                      const obj5 = combined(c2[19]);
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
                      const obj2 = combined(c2[19]);
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
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp11) {
                  c2 = 3;
                  throw tmp11;
                }
              }
            }));
            catchPromise = cleanupPromise.catch((error) => {
              const obj = projectId(first[21]);
              const isErrorWithCodeResult = obj.isErrorWithCode(error);
              const tmp = projectId;
              const tmp2 = first;
              if (isErrorWithCodeResult) {
                const code = error.code;
                const OPERATION_CANCELED = tmp(tmp2[21]).errorCodes.OPERATION_CANCELED;
              }
            });
            return;
          }
        }
      } else {
        class B {
          constructor(trace) {
            const obj = { projectId, trace: trace.item };
            return metroImportAll(closure_11, obj);
          }
        }
      }
      if (0 === stateFromStoresArray.length) {
        let tmp36;
        let tmp40;
        class B {
          constructor(trace) {
            const obj = { projectId, trace: trace.item };
            return metroImportAll(closure_11, obj);
          }
        }
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor(trace) {
              const obj = { projectId, trace: trace.item };
              return metroImportAll(closure_11, obj);
            }
          }
          const tmp38 = closure_8(projectId(5087).Text, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" });
          const tmp39 = closure_8(projectId(5087).Text, { variant: "text-sm/normal", color: "text-muted", children: "Turns and project operations over 100ms show up here as they run." });
          cResult[16] = tmp39;
          class F {
            constructor() {
              combined = "conjure-traces-" + projectId + ".json";
              closure_0 = combined;
              obj = closure_0(closure_2[18]);
              combined1 = "conjure-traces-" + obj.v4();
              closure_1 = combined1;
              tmp3 = closure_0(closure_2[19]);
              writeFile = tmp3.writeFile;
              combined2 = "" + combined1 + "/" + combined;
              tmp5 = closure_0(closure_2[20]);
              perfTraceExport = tmp5.perfTraceExport;
              date = new Date();
              writeFileResult = writeFile("cache", combined2, perfTraceExport(projectId, closure_1, date.toISOString()), "utf8");
              nextPromise = writeFileResult.then(function(result) {
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
                  const obj = projectId(first[21]);
                  return obj.saveDocuments(obj2);
                }
              });
              cleanupPromise = nextPromise.finally(closure_4(async (arg0, value) => {
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
                    return { value: "IconComponent", done: null };
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
                        const obj5 = combined(c2[19]);
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
                        const obj2 = combined(c2[19]);
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
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp11) {
                    c2 = 3;
                    throw tmp11;
                  }
                }
              }));
              catchPromise = cleanupPromise.catch((error) => {
                const obj = projectId(first[21]);
                const isErrorWithCodeResult = obj.isErrorWithCode(error);
                const tmp = projectId;
                const tmp2 = first;
                if (isErrorWithCodeResult) {
                  const code = error.code;
                  const OPERATION_CANCELED = tmp(tmp2[21]).errorCodes.OPERATION_CANCELED;
                }
              });
              return;
            }
          }
          cResult[17] = tmp38;
          tmp36 = tmp39;
        } else {
          class B {
            constructor(trace) {
              const obj = { projectId, trace: trace.item };
              return metroImportAll(closure_11, obj);
            }
          }
        }
        if (cResult[18] !== tmp5.placeholder) {
          class B {
            constructor(trace) {
              const obj = { projectId, trace: trace.item };
              return metroImportAll(closure_11, obj);
            }
          }
          const obj2 = { style: tmp5.placeholder, children: items3 };
          items3 = [, ];
          class F {
            constructor() {
              combined = "conjure-traces-" + projectId + ".json";
              closure_0 = combined;
              obj = closure_0(closure_2[18]);
              combined1 = "conjure-traces-" + obj.v4();
              closure_1 = combined1;
              tmp3 = closure_0(closure_2[19]);
              writeFile = tmp3.writeFile;
              combined2 = "" + combined1 + "/" + combined;
              tmp5 = closure_0(closure_2[20]);
              perfTraceExport = tmp5.perfTraceExport;
              date = new Date();
              writeFileResult = writeFile("cache", combined2, perfTraceExport(projectId, closure_1, date.toISOString()), "utf8");
              nextPromise = writeFileResult.then(function(result) {
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
                  const obj = projectId(first[21]);
                  return obj.saveDocuments(obj2);
                }
              });
              cleanupPromise = nextPromise.finally(closure_4(async (arg0, value) => {
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
                    return { value: "IconComponent", done: null };
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
                        const obj5 = combined(c2[19]);
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
                        const obj2 = combined(c2[19]);
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
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp11) {
                    c2 = 3;
                    throw tmp11;
                  }
                }
              }));
              catchPromise = cleanupPromise.catch((error) => {
                const obj = projectId(first[21]);
                const isErrorWithCodeResult = obj.isErrorWithCode(error);
                const tmp = projectId;
                const tmp2 = first;
                if (isErrorWithCodeResult) {
                  const code = error.code;
                  const OPERATION_CANCELED = tmp(tmp2[21]).errorCodes.OPERATION_CANCELED;
                }
              });
              return;
            }
          }
          items3[1] = tmp36;
          const tmp42 = closure_9(View, obj2);
          cResult[18] = tmp5.placeholder;
          cResult[19] = tmp42;
          tmp40 = tmp42;
        } else {
          class B {
            constructor(trace) {
              const obj = { projectId, trace: trace.item };
              return metroImportAll(closure_11, obj);
            }
          }
        }
        return tmp40;
      } else {
        class B {
          constructor(trace) {
            const obj = { projectId, trace: trace.item };
            return metroImportAll(closure_11, obj);
          }
        }
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(id) {
              return id.id;
            }
          }
          cResult[20] = M;
        } else {
          class M {
            constructor(id) {
              return id.id;
            }
          }
        }
        const _Symbol = Symbol;
        class F {
          constructor() {
            combined = "conjure-traces-" + projectId + ".json";
            closure_0 = combined;
            obj = closure_0(closure_2[18]);
            combined1 = "conjure-traces-" + obj.v4();
            closure_1 = combined1;
            tmp3 = closure_0(closure_2[19]);
            writeFile = tmp3.writeFile;
            combined2 = "" + combined1 + "/" + combined;
            tmp5 = closure_0(closure_2[20]);
            perfTraceExport = tmp5.perfTraceExport;
            date = new Date();
            writeFileResult = writeFile("cache", combined2, perfTraceExport(projectId, closure_1, date.toISOString()), "utf8");
            nextPromise = writeFileResult.then(function(result) {
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
                const obj = projectId(first[21]);
                return obj.saveDocuments(obj2);
              }
            });
            cleanupPromise = nextPromise.finally(closure_4(async (arg0, value) => {
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
                  return { value: "IconComponent", done: null };
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
                      const obj5 = combined(c2[19]);
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
                      const obj2 = combined(c2[19]);
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
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp11) {
                  c2 = 3;
                  throw tmp11;
                }
              }
            }));
            catchPromise = cleanupPromise.catch((error) => {
              const obj = projectId(first[21]);
              const isErrorWithCodeResult = obj.isErrorWithCode(error);
              const tmp = projectId;
              const tmp2 = first;
              if (isErrorWithCodeResult) {
                const code = error.code;
                const OPERATION_CANCELED = tmp(tmp2[21]).errorCodes.OPERATION_CANCELED;
              }
            });
            return;
          }
        }
        if (cResult[22] !== tmp5.search) {
          class M {
            constructor(id) {
              return id.id;
            }
          }
          class F {
            constructor() {
              combined = "conjure-traces-" + projectId + ".json";
              closure_0 = combined;
              obj = closure_0(closure_2[18]);
              combined1 = "conjure-traces-" + obj.v4();
              closure_1 = combined1;
              tmp3 = closure_0(closure_2[19]);
              writeFile = tmp3.writeFile;
              combined2 = "" + combined1 + "/" + combined;
              tmp5 = closure_0(closure_2[20]);
              perfTraceExport = tmp5.perfTraceExport;
              date = new Date();
              writeFileResult = writeFile("cache", combined2, perfTraceExport(projectId, closure_1, date.toISOString()), "utf8");
              nextPromise = writeFileResult.then(function(result) {
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
                  const obj = projectId(first[21]);
                  return obj.saveDocuments(obj2);
                }
              });
              cleanupPromise = nextPromise.finally(closure_4(async (arg0, value) => {
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
                    return { value: "IconComponent", done: null };
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
                        const obj5 = combined(c2[19]);
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
                        const obj2 = combined(c2[19]);
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
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp11) {
                    c2 = 3;
                    throw tmp11;
                  }
                }
              }));
              catchPromise = cleanupPromise.catch((error) => {
                const obj = projectId(first[21]);
                const isErrorWithCodeResult = obj.isErrorWithCode(error);
                const tmp = projectId;
                const tmp2 = first;
                if (isErrorWithCodeResult) {
                  const code = error.code;
                  const OPERATION_CANCELED = tmp(tmp2[21]).errorCodes.OPERATION_CANCELED;
                }
              });
              return;
            }
          }
          cResult[22] = tmp5.search;
          cResult[23] = tmp28;
        } else {
          class M {
            constructor(id) {
              return id.id;
            }
          }
        }
        if (cResult[24] !== tmp22) {
          class M {
            constructor(id) {
              return id.id;
            }
          }
          ({ IconComponent: projectId(5046).DownloadIcon, onPress: tmp22, accessibilityLabel: "Export as JSON" });
          ConjureHeaderIconButtonDefault;
          class F {
            constructor() {
              combined = "conjure-traces-" + projectId + ".json";
              closure_0 = combined;
              obj = closure_0(closure_2[18]);
              combined1 = "conjure-traces-" + obj.v4();
              closure_1 = combined1;
              tmp3 = closure_0(closure_2[19]);
              writeFile = tmp3.writeFile;
              combined2 = "" + combined1 + "/" + combined;
              tmp5 = closure_0(closure_2[20]);
              perfTraceExport = tmp5.perfTraceExport;
              date = new Date();
              writeFileResult = writeFile("cache", combined2, perfTraceExport(projectId, closure_1, date.toISOString()), "utf8");
              nextPromise = writeFileResult.then(function(result) {
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
                  const obj = projectId(first[21]);
                  return obj.saveDocuments(obj2);
                }
              });
              cleanupPromise = nextPromise.finally(closure_4(async (arg0, value) => {
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
                    return { value: "IconComponent", done: null };
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
                        const obj5 = combined(c2[19]);
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
                        const obj2 = combined(c2[19]);
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
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp11) {
                    c2 = 3;
                    throw tmp11;
                  }
                }
              }));
              catchPromise = cleanupPromise.catch((error) => {
                const obj = projectId(first[21]);
                const isErrorWithCodeResult = obj.isErrorWithCode(error);
                const tmp = projectId;
                const tmp2 = first;
                if (isErrorWithCodeResult) {
                  const code = error.code;
                  const OPERATION_CANCELED = tmp(tmp2[21]).errorCodes.OPERATION_CANCELED;
                }
              });
              return;
            }
          }
          cResult[24] = tmp22;
          cResult[25] = tmp31;
        } else {
          class M {
            constructor(id) {
              return id.id;
            }
          }
        }
        if (cResult[26] === tmp5.tools) {
          class M {
            constructor(id) {
              return id.id;
            }
          }
        }
        const obj5 = { style: tmp5.tools, children: items4 };
        items4 = [tmp26, tmp29];
        cResult[26] = tmp5.tools;
        cResult[27] = tmp26;
        cResult[28] = tmp29;
        cResult[29] = closure_9(View, obj5);
        const tmp35 = closure_9(View, obj5);
      }
    }
    class F {
      constructor() {
        combined = "conjure-traces-" + projectId + ".json";
        closure_0 = combined;
        obj = closure_0(closure_2[18]);
        combined1 = "conjure-traces-" + obj.v4();
        closure_1 = combined1;
        tmp3 = closure_0(closure_2[19]);
        writeFile = tmp3.writeFile;
        combined2 = "" + combined1 + "/" + combined;
        tmp5 = closure_0(closure_2[20]);
        perfTraceExport = tmp5.perfTraceExport;
        date = new Date();
        writeFileResult = writeFile("cache", combined2, perfTraceExport(projectId, closure_1, date.toISOString()), "utf8");
        nextPromise = writeFileResult.then(function(result) {
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
            const obj = projectId(first[21]);
            return obj.saveDocuments(obj2);
          }
        });
        cleanupPromise = nextPromise.finally(closure_4(async (arg0, value) => {
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
              return { value: "IconComponent", done: null };
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
                  const obj5 = combined(c2[19]);
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
                  const obj2 = combined(c2[19]);
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
                return { value: "IconComponent", done: null };
              }
            } catch (tmp11) {
              c2 = 3;
              throw tmp11;
            }
          }
        }));
        catchPromise = cleanupPromise.catch((error) => {
          const obj = projectId(first[21]);
          const isErrorWithCodeResult = obj.isErrorWithCode(error);
          const tmp = projectId;
          const tmp2 = first;
          if (isErrorWithCodeResult) {
            const code = error.code;
            const OPERATION_CANCELED = tmp(tmp2[21]).errorCodes.OPERATION_CANCELED;
          }
        });
        return;
      }
    }
    cResult[11] = tmp13;
    cResult[12] = projectId;
    cResult[13] = F;
    tmp22 = F;
  }
  const tmp2Result4 = projectId(17219);
  const filterPerfTracesResult = tmp2Result4.filterPerfTraces(stateFromStoresArray, first1);
  cResult[4] = first1;
  cResult[5] = stateFromStoresArray;
  cResult[6] = filterPerfTracesResult;
  tmp13 = filterPerfTracesResult;
}) : (function ConjurePerfTraceTab(projectId) {
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
  const bottom = stateFromStoresArray(first[22])().bottom;
  let obj = projectId(first[23]);
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
        const obj = projectId(first[21]);
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
          return { value: "IconComponent", done: null };
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
              const obj5 = combined(c2[19]);
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
              const obj2 = combined(c2[19]);
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c2 = 3;
          throw tmp11;
        }
      }
    }));
    cleanupPromise.catch((error) => {
      const obj = projectId(first[21]);
      const isErrorWithCodeResult = obj.isErrorWithCode(error);
      const tmp = projectId;
      const tmp2 = first;
      if (isErrorWithCodeResult) {
        const code = error.code;
        const OPERATION_CANCELED = tmp(tmp2[21]).errorCodes.OPERATION_CANCELED;
      }
    });
  }, items5);
  if (0 === stateFromStoresArray.length) {
    let obj2 = { style: tmp.placeholder, children: items6 };
    items6 = [closure_8(tmp4(tmp3[15]).Text, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }), closure_8(tmp4(tmp3[15]).Text, { variant: "text-sm/normal", color: "text-muted", children: "Turns and project operations over 100ms show up here as they run." })];
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
    let obj6 = { style: tmp.search, children: closure_8(tmp4(tmp3[25]).SearchField, obj7) };
    const FlashList = tmp4(tmp3[29]).FlashList;
    obj7 = { accessibilityLabel: "Search traces", placeholder: "Search traces", size: "sm", onChange: tmp7 };
    items7 = [closure_8(View, obj6), ];
    let obj8 = { IconComponent: tmp4(tmp3[27]).DownloadIcon, onPress: callback, accessibilityLabel: "Export as JSON" };
    const tmp2Result = tmp2(tmp3[26]);
    items7[1] = closure_8(tmp2Result, obj8);
    items8 = [closure_9(View, obj5), , ];
    const obj9 = { stats: memo2 };
    items8[1] = closure_8(tmp2(tmp3[28]), obj9);
    let tmp17Result = null;
    tmp18 = closure_9;
    tmp19 = View;
    if (0 === memo1.length) {
      tmp17Result = tmp17(tmp4(tmp3[15]).Text, { variant: "text-sm/normal", color: "text-muted", children: "No traces match this search." });
    }
    items8[2] = tmp17Result;
    items9 = [tmp.list, ];
    items9[1] = { paddingBottom: tmp2(tmp3[7]).space.PX_16 + bottom };
    const obj10 = { paddingBottom: tmp2(tmp3[7]).space.PX_16 + bottom };
    tmp17Result2 = tmp17(FlashList, obj3);
  }
  return tmp17Result2;
});
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceTab.tsx");

export default tmp4;
