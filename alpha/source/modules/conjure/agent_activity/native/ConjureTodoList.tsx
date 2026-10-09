// Module ID: 17166
// Function ID: 17167
// Name: ConjureTodoList
// Dependencies: [19, 17, 21, 5091, 587, 1126, 3827, 558, 576, 17147, 17063, 5087, 6184, 17081, 17167, 2]
// Exports: todoProgress

// Module 17166 (ConjureTodoList)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import Text_Text from "Text/Text" /* 5087 */;
import FormCheckbox from "FormCheckbox" /* 6184 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 17063 */;
import ConjureNativeCollapsibleSectionDefault from "ConjureNativeCollapsibleSection" /* 17081 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 17147 */;
import ConjureTodoState from "ConjureTodoState" /* 17167 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, obj1, str2, tmp2, value;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let size1;
let size2;
const f127970 = (status) => "completed" === status.status;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, row: obj3, marker: size, markerUnfinished: obj4, markerInProgress: { borderWidth: 0 }, markerSpinner: size1, text: { flexShrink: 1 }, agents: obj5, agentMark: size2, agentMarkTint0: obj6, agentMarkTint1: obj7, agentMarkTint2: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING }, agentMarkTint3: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO }, textCompleted: { textDecorationLine: "line-through" } };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
obj4 = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj6 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj7 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO });
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function TodoAgents(agents) {
  let agentMark;
  let intl;
  let items;
  let items1;
  let obj3;
  let overflow;
  let shown;
  let obj = require("react");
  const cResult = obj.c(19);
  agents = agents.agents;
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] === agents) {
    if (cResult[1] === tmp4.agentMark) {
      if (cResult[2] === tmp4.agentMarkTint0) {
        if (cResult[3] === tmp4.agentMarkTint1) {
          if (cResult[4] === tmp4.agentMarkTint2) {
            if (cResult[5] === tmp4.agentMarkTint3) {
              let tmp5;
              let tmp6;
              let tmp7;
              let tmp8;
              let tmp9;
              if (cResult[6] === tmp4.agents) {
                tmp5 = cResult[7];
                tmp6 = cResult[8];
                tmp7 = cResult[9];
                tmp8 = cResult[10];
                tmp9 = cResult[11];
              }
              const _Symbol = Symbol;
              if (tmp9 === Symbol.for("react.early_return_sentinel")) {
                let tmp17;
                if (cResult[12] !== tmp6) {
                  let tmp18 = null;
                  if (tmp6 > 0) {
                    let obj2 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: intl.formatToPlainString(items1(3827).SPGdDc, obj3), children: "+" + tmp6 };
                    const Text = tmp(5087).Text;
                    intl = tmp(1126).intl;
                    obj3 = { count: tmp6 };
                    const _HermesInternal = HermesInternal;
                    tmp18 = closure_6(Text, obj2);
                  }
                  cResult[12] = tmp6;
                  cResult[13] = tmp18;
                  tmp17 = tmp18;
                } else {
                  tmp17 = cResult[13];
                }
                if (cResult[14] === tmp5) {
                  if (cResult[15] === tmp7) {
                    if (cResult[16] === tmp8) {
                      let tmp21;
                      if (cResult[17] === tmp17) {
                        tmp21 = cResult[18];
                      }
                      tmp9 = tmp21;
                    }
                  }
                }
                const obj4 = { style: tmp7, children: items };
                items = [tmp8, tmp17];
                const tmp23 = closure_7(tmp5, obj4);
                cResult[14] = tmp5;
                cResult[15] = tmp7;
                cResult[16] = tmp8;
                cResult[17] = tmp17;
                cResult[18] = tmp23;
                tmp21 = tmp23;
              }
              return tmp9;
            }
          }
        }
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult = require("ConjureTodoAgents");
  ({ shown, overflow } = tmpResult.splitAgentOverflow(agents));
  items1 = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp4);
  let tmp12 = null;
  let mapped;
  let agents1;
  let tmp15;
  tmpResult.splitAgentOverflow(agents);
  if (0 !== shown.length) {
    tmp15 = closure_5;
    agents1 = tmp4.agents;
    mapped = shown.map((key) => {
      let intl;
      let items;
      let obj3;
      const obj = { style: items, accessibilityRole: "image", accessibilityLabel: intl.formatToPlainString(_modDef3827.TVvPCJ, obj3) };
      items = [agentMark.agentMark, ];
      const obj2 = ConjureNativeStatusLine;
      const laneTintIndexForResult = obj2.laneTintIndexFor(key.key);
      items[1] = items1[laneTintIndexForResult % ConjureNativeStatusLine.LANE_TINT_COUNT];
      intl = intl9.intl;
      obj3 = { name: key.name, task: key.task };
      return metroRequire(hasOwnProperty, obj, key.key);
    });
    tmp12 = forResult;
  }
  cResult[0] = agents;
  cResult[1] = tmp4.agentMark;
  cResult[2] = tmp4.agentMarkTint0;
  cResult[3] = tmp4.agentMarkTint1;
  cResult[4] = tmp4.agentMarkTint2;
  cResult[5] = tmp4.agentMarkTint3;
  cResult[6] = tmp4.agents;
  cResult[7] = tmp15;
  cResult[8] = overflow;
  cResult[9] = agents1;
  cResult[10] = mapped;
  cResult[11] = tmp12;
  tmp9 = tmp12;
  tmp8 = mapped;
  tmp7 = agents1;
  tmp5 = tmp15;
  tmp6 = overflow;
}) : (function TodoAgents(agents) {
  let agentMark;
  let intl;
  let items1;
  let obj4;
  let overflow;
  let shown;
  agents = agents.agents;
  const tmp = closure_8();
  _require = tmp;
  let obj = require("ConjureTodoAgents");
  ({ shown, overflow } = obj.splitAgentOverflow(agents));
  let items = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp);
  let tmp10Result = null;
  obj.splitAgentOverflow(agents);
  if (0 !== shown.length) {
    let obj2 = { style: tmp.agents, children: items1 };
    items1 = [
      shown.map((key) => {
          let intl;
          let obj3;
          const obj = { style: items, accessibilityRole: "image", accessibilityLabel: intl.formatToPlainString(_modDef3827.TVvPCJ, obj3) };
          items = [agentMark.agentMark, ];
          const obj2 = ConjureNativeStatusLine;
          const laneTintIndexForResult = obj2.laneTintIndexFor(key.key);
          items[1] = items[laneTintIndexForResult % ConjureNativeStatusLine.LANE_TINT_COUNT];
          intl = intl9.intl;
          obj3 = { name: key.name, task: key.task };
          return metroRequire(hasOwnProperty, obj, key.key);
        }),

    ];
    let tmp9 = null;
    const tmp10 = closure_7;
    const tmp11 = closure_5;
    if (overflow > 0) {
      let obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: intl.formatToPlainString(items(3827).SPGdDc, obj4), children: "+" + overflow };
      const Text = tmp2(5087).Text;
      intl = tmp2(1126).intl;
      const _HermesInternal = HermesInternal;
      obj4 = { count: overflow };
      tmp9 = closure_6(Text, obj3);
    }
    items1[1] = tmp9;
    tmp10Result = tmp10(tmp11, obj2);
  }
  return tmp10Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function TodoMarker(status) {
  let tmp23;
  let tmp29;
  const obj = react2;
  const cResult = obj.c(20);
  status = status.status;
  const tmp4 = closure_8();
  if ("completed" !== status) {
    if ("pending" !== status) {
      if (cResult[7] === tmp4.marker) {
        if (cResult[8] === ("in_progress" === status && tmp4.markerInProgress)) {
          let tmp8;
          let tmp9;
          if (cResult[9] === ("unfinished" === status && tmp4.markerUnfinished)) {
            tmp8 = cResult[10];
          }
          if (cResult[11] !== status) {
            let stringResult;
            if ("completed" === status) {
              const intl4 = tmp(1126).intl;
              stringResult = intl4.string(_modDef3827.KvBdun);
            } else if ("in_progress" === status) {
              const intl3 = tmp(1126).intl;
              stringResult = intl3.string(_modDef3827["m5G9+S"]);
            } else if ("unfinished" === status) {
              const intl2 = tmp(1126).intl;
              stringResult = intl2.string(_modDef3827.lRpwhD);
            } else {
              const intl = tmp(1126).intl;
              stringResult = intl.string(_modDef3827.sPGeWi);
            }
            cResult[11] = status;
            cResult[12] = stringResult;
            tmp9 = stringResult;
          } else {
            tmp9 = cResult[12];
          }
          if (cResult[13] === status) {
            let tmp15;
            if (cResult[14] === tmp4.markerSpinner) {
              tmp15 = cResult[15];
            }
            if (cResult[16] === tmp8) {
              if (cResult[17] === tmp9) {
                let tmp19;
                if (cResult[18] === tmp15) {
                  tmp19 = cResult[19];
                }
                return tmp19;
              }
            }
            const obj2 = { style: tmp8, accessibilityRole: "image", accessibilityLabel: tmp9, children: tmp15 };
            const tmp22 = metroRequire(hasOwnProperty, obj2);
            cResult[16] = tmp8;
            cResult[17] = tmp9;
            cResult[18] = tmp15;
            cResult[19] = tmp22;
            tmp19 = tmp22;
          }
          let tmp16 = null;
          if ("in_progress" === status) {
            const obj3 = { size: "small", style: tmp4.markerSpinner };
            tmp16 = metroRequire(React3, obj3);
          }
          cResult[13] = status;
          cResult[14] = tmp4.markerSpinner;
          cResult[15] = tmp16;
          tmp15 = tmp16;
        }
      }
      const items = [tmp4.marker, "in_progress" === status && tmp4.markerInProgress, "unfinished" === status && tmp4.markerUnfinished];
      cResult[7] = tmp4.marker;
      cResult[8] = "in_progress" === status && tmp4.markerInProgress;
      cResult[9] = "unfinished" === status && tmp4.markerUnfinished;
      cResult[10] = items;
      tmp8 = items;
    }
  }
  if (cResult[0] !== status) {
    let stringResult1;
    if ("completed" === status) {
      const intl8 = tmp(1126).intl;
      stringResult1 = intl8.string(_modDef3827.KvBdun);
    } else if ("in_progress" === status) {
      const intl7 = tmp(1126).intl;
      stringResult1 = intl7.string(_modDef3827["m5G9+S"]);
    } else if ("unfinished" === status) {
      const intl6 = tmp(1126).intl;
      stringResult1 = intl6.string(_modDef3827.lRpwhD);
    } else {
      const intl5 = tmp(1126).intl;
      stringResult1 = intl5.string(_modDef3827.sPGeWi);
    }
    cResult[0] = status;
    cResult[1] = stringResult1;
    tmp23 = stringResult1;
  } else {
    tmp23 = cResult[1];
  }
  if (cResult[2] !== ("completed" === status)) {
    const obj4 = { checked: "completed" === status };
    const tmp31 = metroRequire(FormCheckbox.FormCheckbox, obj4);
    cResult[2] = "completed" === status;
    cResult[3] = tmp31;
    tmp29 = tmp31;
  } else {
    tmp29 = cResult[3];
  }
  if (cResult[4] === tmp23) {
    let tmp32;
    if (cResult[5] === tmp29) {
      tmp32 = cResult[6];
    }
    return tmp32;
  }
  const tmp33 = metroRequire(hasOwnProperty, { accessible: true, accessibilityRole: "image", accessibilityLabel: tmp23, children: tmp29 });
  cResult[4] = tmp23;
  cResult[5] = tmp29;
  cResult[6] = tmp33;
  tmp32 = tmp33;
}) : (function TodoMarker(status) {
  let stringResult;
  let stringResult1;
  let tmp21;
  let tmp2Result;
  status = status.status;
  const tmp = closure_8();
  if ("completed" !== status) {
    let obj;
    if ("pending" !== status) {
      const items = [tmp.marker, "in_progress" === status && tmp.markerInProgress, ];
      obj = { style: items, accessibilityRole: "image", accessibilityLabel: stringResult, children: tmp2Result };
      const tmp5 = "unfinished" === status && tmp.markerUnfinished;
      items[2] = tmp5;
      if ("completed" === status) {
        const intl4 = intl9.intl;
        stringResult = intl4.string(_modDef3827.KvBdun);
      } else if ("in_progress" === status) {
        const intl3 = intl9.intl;
        stringResult = intl3.string(_modDef3827["m5G9+S"]);
      } else if ("unfinished" === status) {
        const intl2 = intl9.intl;
        stringResult = intl2.string(_modDef3827.lRpwhD);
      } else {
        const intl = intl9.intl;
        stringResult = intl.string(_modDef3827.sPGeWi);
      }
      tmp2Result = null;
      if ("in_progress" === status) {
        const obj2 = { size: "small", style: tmp.markerSpinner };
        tmp2Result = tmp2(React3, obj2);
      }
    }
    return metroRequire(tmp3, obj);
  }
  if ("completed" === status) {
    const intl8 = intl9.intl;
    stringResult1 = intl8.string(_modDef3827.KvBdun);
    tmp21 = require;
  } else if ("in_progress" === status) {
    const intl7 = intl9.intl;
    stringResult1 = intl7.string(_modDef3827["m5G9+S"]);
    tmp21 = require;
  } else if ("unfinished" === status) {
    const intl6 = intl9.intl;
    stringResult1 = intl6.string(_modDef3827.lRpwhD);
    tmp21 = require;
  } else {
    tmp21 = require;
    const intl5 = intl9.intl;
    stringResult1 = intl5.string(_modDef3827.sPGeWi);
  }
  obj = { accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult1, children: metroRequire(tmp21(6184).FormCheckbox, { checked: "completed" === status }) };
  ({ accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult1, children: metroRequire(tmp21(6184).FormCheckbox, { checked: "completed" === status }) });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTodoList(arg0) {
  let agents;
  let announceProgress;
  let closure_0;
  let closure_1;
  let expanded;
  let formatToPlainStringResult;
  let items;
  let items1;
  let live;
  let onToggleExpanded;
  let provisional;
  let row;
  let superseded;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp24Result;
  let tmp9;
  let todos;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(47);
  ({ todos, provisional, agents, announceProgress, live, superseded, expanded, onToggleExpanded } = arg0);
  let tmp4 = undefined === announceProgress || announceProgress;
  let tmp5 = undefined === live || live;
  importDefault = tmp5;
  const tmp7 = undefined === expanded || expanded;
  const tmp8 = closure_8();
  dependencyMap = tmp8;
  if (cResult[0] === agents) {
    if (cResult[1] === provisional) {
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      if (cResult[2] === todos) {
        _require = cResult[3];
        tmp10 = cResult[4];
        tmp11 = cResult[5];
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const _Symbol = Symbol;
      if (tmp12 !== Symbol.for("react.early_return_sentinel")) {
        return tmp12;
      } else {
        let tmp26;
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(_modDef3827.RtzECX);
          cResult[12] = stringResult;
          tmp26 = stringResult;
        } else {
          tmp26 = cResult[12];
        }
        let str4 = "none";
        if (tmp4) {
          str4 = "none";
          if (!(undefined !== superseded && superseded)) {
            str4 = "polite";
          }
        }
        if (cResult[13] === tmp10) {
          if (cResult[14] === tmp11) {
            let tmp29;
            let tmp33;
            let tmp32;
            let tmp38;
            if (cResult[15] === str4) {
              tmp29 = cResult[16];
            }
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult1 = intl4.string(_modDef3827.RKyN9q);
              const intl5 = tmp(1126).intl;
              const stringResult2 = intl5.string(_modDef3827.xydHoj);
              class W {
                constructor(arg0) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[14]);
                  todoMarkResult = obj.todoMark(arg0.status, live);
                  obj1 = { style: closure_2.row, children: null };
                  tmp6 = closure_2;
                  tmp7 = jsx;
                  tmp4 = jsxs;
                  tmp5 = View;
                  items = [, , ];
                  items[0] = jsx(TodoMarker, { status: todoMarkResult });
                  Text = closure_0(closure_2[11]).Text;
                  if ("in_progress" === todoMarkResult) {
                    str = "text-default";
                  } else {
                    str = "text-muted";
                    str2 = "pending";
                  }
                  obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                  items1 = [, ];
                  items1[0] = tmp6.text;
                  items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                  obj6.style = items1;
                  tmpResult = tmp(tmp2[14]);
                  obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                  items[1] = tmp7(Text, obj6);
                  tmp7Result = null;
                  if ("completed" !== todoMarkResult) {
                    tmp10 = closure_0;
                    tmp9 = TodoAgents;
                    value = closure_0.get(arg0.id);
                    if (value == null) {
                      value = [];
                    }
                    obj7 = { agents: null };
                    obj7.agents = value;
                    tmp7Result = tmp7(tmp9, obj7);
                  }
                  items[2] = tmp7Result;
                  obj1.children = items;
                  return tmp4(tmp5, obj1, arg0.id);
                }
              }
              cResult[18] = stringResult2;
              tmp33 = stringResult2;
              tmp32 = stringResult1;
            } else {
              tmp32 = cResult[17];
              tmp33 = cResult[18];
            }
            if (cResult[19] === tmp9) {
              if (cResult[20] === tmp5) {
                if (cResult[21] === tmp8.row) {
                  if (cResult[22] === tmp8.text) {
                    if (cResult[23] === tmp8.textCompleted) {
                      if (cResult[24] === todos) {
                        tmp38 = cResult[25];
                      }
                      if (cResult[32] === provisional) {
                        if (cResult[33] === tmp8.row) {
                          let tmp41;
                          if (cResult[34] === tmp8.text) {
                            tmp41 = cResult[35];
                          }
                          if (cResult[36] === tmp8.list) {
                            if (cResult[37] === tmp38) {
                              let tmp49;
                              if (cResult[38] === tmp41) {
                                tmp49 = cResult[39];
                              }
                              if (cResult[40] === tmp7) {
                                if (cResult[41] === onToggleExpanded) {
                                  if (cResult[42] === (undefined !== superseded && superseded)) {
                                    if (cResult[43] === tmp13 > 0) {
                                      if (cResult[44] === tmp49) {
                                        let tmp53;
                                        if (cResult[45] === tmp29) {
                                          tmp53 = cResult[46];
                                        }
                                        return tmp53;
                                      }
                                    }
                                  }
                                }
                              }
                              let obj2 = { title: tmp26, meta: tmp29, showHeader: tmp13 > 0, superseded: null, expanded: tmp7, onToggleExpanded, showLabel: tmp32, hideLabel: tmp33, children: tmp49 };
                              class W {
                                constructor(arg0) {
                                  tmp = closure_0;
                                  tmp2 = closure_2;
                                  obj = closure_0(closure_2[14]);
                                  todoMarkResult = obj.todoMark(arg0.status, live);
                                  obj1 = { style: closure_2.row, children: null };
                                  tmp6 = closure_2;
                                  tmp7 = jsx;
                                  tmp4 = jsxs;
                                  tmp5 = View;
                                  items = [, , ];
                                  items[0] = jsx(TodoMarker, { status: todoMarkResult });
                                  Text = closure_0(closure_2[11]).Text;
                                  if ("in_progress" === todoMarkResult) {
                                    str = "text-default";
                                  } else {
                                    str = "text-muted";
                                    str2 = "pending";
                                  }
                                  obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                                  items1 = [, ];
                                  items1[0] = tmp6.text;
                                  items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                                  obj6.style = items1;
                                  tmpResult = tmp(tmp2[14]);
                                  obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                                  items[1] = tmp7(Text, obj6);
                                  tmp7Result = null;
                                  if ("completed" !== todoMarkResult) {
                                    tmp10 = closure_0;
                                    tmp9 = TodoAgents;
                                    value = closure_0.get(arg0.id);
                                    if (value == null) {
                                      value = [];
                                    }
                                    obj7 = { agents: null };
                                    obj7.agents = value;
                                    tmp7Result = tmp7(tmp9, obj7);
                                  }
                                  items[2] = tmp7Result;
                                  obj1.children = items;
                                  return tmp4(tmp5, obj1, arg0.id);
                                }
                              }
                              const tmp56 = closure_6(ConjureNativeCollapsibleSectionDefault, obj2);
                              cResult[40] = tmp7;
                              cResult[41] = onToggleExpanded;
                              cResult[42] = undefined !== superseded && superseded;
                              cResult[43] = tmp13 > 0;
                              cResult[44] = tmp49;
                              cResult[45] = tmp29;
                              cResult[46] = tmp56;
                              tmp53 = tmp56;
                            }
                          }
                          let obj3 = { style: tmp37, children: items };
                          items = [tmp38, ];
                          class W {
                            constructor(arg0) {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj = closure_0(closure_2[14]);
                              todoMarkResult = obj.todoMark(arg0.status, live);
                              obj1 = { style: closure_2.row, children: null };
                              tmp6 = closure_2;
                              tmp7 = jsx;
                              tmp4 = jsxs;
                              tmp5 = View;
                              items = [, , ];
                              items[0] = jsx(TodoMarker, { status: todoMarkResult });
                              Text = closure_0(closure_2[11]).Text;
                              if ("in_progress" === todoMarkResult) {
                                str = "text-default";
                              } else {
                                str = "text-muted";
                                str2 = "pending";
                              }
                              obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                              items1 = [, ];
                              items1[0] = tmp6.text;
                              items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                              obj6.style = items1;
                              tmpResult = tmp(tmp2[14]);
                              obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                              items[1] = tmp7(Text, obj6);
                              tmp7Result = null;
                              if ("completed" !== todoMarkResult) {
                                tmp10 = closure_0;
                                tmp9 = TodoAgents;
                                value = closure_0.get(arg0.id);
                                if (value == null) {
                                  value = [];
                                }
                                obj7 = { agents: null };
                                obj7.agents = value;
                                tmp7Result = tmp7(tmp9, obj7);
                              }
                              items[2] = tmp7Result;
                              obj1.children = items;
                              return tmp4(tmp5, obj1, arg0.id);
                            }
                          }
                          const tmp52 = closure_7(closure_5, obj3);
                          cResult[36] = tmp8.list;
                          cResult[37] = tmp38;
                          cResult[38] = tmp41;
                          cResult[39] = tmp52;
                          tmp49 = tmp52;
                        }
                      }
                      let tmp43 = null;
                      if (null != provisional) {
                        tmp43 = null;
                        if ("" !== provisional) {
                          let obj4 = { style: tmp8.row, children: items1 };
                          items1 = [closure_6(closure_10, { status: "pending" }), ];
                          class W {
                            constructor(arg0) {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj = closure_0(closure_2[14]);
                              todoMarkResult = obj.todoMark(arg0.status, live);
                              obj1 = { style: closure_2.row, children: null };
                              tmp6 = closure_2;
                              tmp7 = jsx;
                              tmp4 = jsxs;
                              tmp5 = View;
                              items = [, , ];
                              items[0] = jsx(TodoMarker, { status: todoMarkResult });
                              Text = closure_0(closure_2[11]).Text;
                              if ("in_progress" === todoMarkResult) {
                                str = "text-default";
                              } else {
                                str = "text-muted";
                                str2 = "pending";
                              }
                              obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                              items1 = [, ];
                              items1[0] = tmp6.text;
                              items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                              obj6.style = items1;
                              tmpResult = tmp(tmp2[14]);
                              obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                              items[1] = tmp7(Text, obj6);
                              tmp7Result = null;
                              if ("completed" !== todoMarkResult) {
                                tmp10 = closure_0;
                                tmp9 = TodoAgents;
                                value = closure_0.get(arg0.id);
                                if (value == null) {
                                  value = [];
                                }
                                obj7 = { agents: null };
                                obj7.agents = value;
                                tmp7Result = tmp7(tmp9, obj7);
                              }
                              items[2] = tmp7Result;
                              obj1.children = items;
                              return tmp4(tmp5, obj1, arg0.id);
                            }
                          }
                          tmp48[2] = tmp8.text;
                          tmp48[3] = provisional;
                          items1[1] = closure_6(tmp(5087).Text, tmp48);
                          tmp43 = closure_7(closure_5, obj4);
                        }
                      }
                      cResult[32] = provisional;
                      class W {
                        constructor(arg0) {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[14]);
                          todoMarkResult = obj.todoMark(arg0.status, live);
                          obj1 = { style: closure_2.row, children: null };
                          tmp6 = closure_2;
                          tmp7 = jsx;
                          tmp4 = jsxs;
                          tmp5 = View;
                          items = [, , ];
                          items[0] = jsx(TodoMarker, { status: todoMarkResult });
                          Text = closure_0(closure_2[11]).Text;
                          if ("in_progress" === todoMarkResult) {
                            str = "text-default";
                          } else {
                            str = "text-muted";
                            str2 = "pending";
                          }
                          obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                          items1 = [, ];
                          items1[0] = tmp6.text;
                          items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                          obj6.style = items1;
                          tmpResult = tmp(tmp2[14]);
                          obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                          items[1] = tmp7(Text, obj6);
                          tmp7Result = null;
                          if ("completed" !== todoMarkResult) {
                            tmp10 = closure_0;
                            tmp9 = TodoAgents;
                            value = closure_0.get(arg0.id);
                            if (value == null) {
                              value = [];
                            }
                            obj7 = { agents: null };
                            obj7.agents = value;
                            tmp7Result = tmp7(tmp9, obj7);
                          }
                          items[2] = tmp7Result;
                          obj1.children = items;
                          return tmp4(tmp5, obj1, arg0.id);
                        }
                      }
                      cResult[34] = tmp8.text;
                      cResult[35] = tmp43;
                      tmp41 = tmp43;
                    }
                  }
                }
              }
            }
            if (cResult[26] === tmp9) {
              if (cResult[27] === tmp5) {
                if (cResult[28] === tmp8.row) {
                  if (cResult[29] === tmp8.text) {
                    let tmp39;
                    if (cResult[30] === tmp8.textCompleted) {
                      tmp39 = cResult[31];
                    }
                    const mapped = todos.map(tmp39);
                    cResult[19] = tmp9;
                    cResult[20] = tmp5;
                    cResult[21] = tmp8.row;
                    class W {
                      constructor(arg0) {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj = closure_0(closure_2[14]);
                        todoMarkResult = obj.todoMark(arg0.status, live);
                        obj1 = { style: closure_2.row, children: null };
                        tmp6 = closure_2;
                        tmp7 = jsx;
                        tmp4 = jsxs;
                        tmp5 = View;
                        items = [, , ];
                        items[0] = jsx(TodoMarker, { status: todoMarkResult });
                        Text = closure_0(closure_2[11]).Text;
                        if ("in_progress" === todoMarkResult) {
                          str = "text-default";
                        } else {
                          str = "text-muted";
                          str2 = "pending";
                        }
                        obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                        items1 = [, ];
                        items1[0] = tmp6.text;
                        items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                        obj6.style = items1;
                        tmpResult = tmp(tmp2[14]);
                        obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                        items[1] = tmp7(Text, obj6);
                        tmp7Result = null;
                        if ("completed" !== todoMarkResult) {
                          tmp10 = closure_0;
                          tmp9 = TodoAgents;
                          value = closure_0.get(arg0.id);
                          if (value == null) {
                            value = [];
                          }
                          obj7 = { agents: null };
                          obj7.agents = value;
                          tmp7Result = tmp7(tmp9, obj7);
                        }
                        items[2] = tmp7Result;
                        obj1.children = items;
                        return tmp4(tmp5, obj1, arg0.id);
                      }
                    }
                    cResult[22] = tmp8.text;
                    cResult[23] = tmp8.textCompleted;
                    cResult[24] = todos;
                    cResult[25] = mapped;
                    tmp38 = mapped;
                  }
                }
              }
            }
            class W {
              constructor(arg0) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[14]);
                todoMarkResult = obj.todoMark(arg0.status, live);
                obj1 = { style: closure_2.row, children: null };
                tmp6 = closure_2;
                tmp7 = jsx;
                tmp4 = jsxs;
                tmp5 = View;
                items = [, , ];
                items[0] = jsx(TodoMarker, { status: todoMarkResult });
                Text = closure_0(closure_2[11]).Text;
                if ("in_progress" === todoMarkResult) {
                  str = "text-default";
                } else {
                  str = "text-muted";
                  str2 = "pending";
                }
                obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                items1 = [, ];
                items1[0] = tmp6.text;
                items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                obj6.style = items1;
                tmpResult = tmp(tmp2[14]);
                obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                items[1] = tmp7(Text, obj6);
                tmp7Result = null;
                if ("completed" !== todoMarkResult) {
                  tmp10 = closure_0;
                  tmp9 = TodoAgents;
                  value = closure_0.get(arg0.id);
                  if (value == null) {
                    value = [];
                  }
                  obj7 = { agents: null };
                  obj7.agents = value;
                  tmp7Result = tmp7(tmp9, obj7);
                }
                items[2] = tmp7Result;
                obj1.children = items;
                return tmp4(tmp5, obj1, arg0.id);
              }
            }
            cResult[26] = tmp9;
            cResult[27] = tmp5;
            cResult[28] = tmp8.row;
            cResult[29] = tmp8.text;
            cResult[30] = tmp8.textCompleted;
            cResult[31] = W;
            tmp39 = W;
          }
        }
        const obj5 = { accessibilityLiveRegion: str4, accessibilityLabel: tmp11, children: tmp10 };
        const tmp30 = closure_6(tmp(17081).ConjureNativeCollapsibleMeta, obj5);
        cResult[13] = tmp10;
        cResult[14] = tmp11;
        cResult[15] = str4;
        cResult[16] = tmp30;
        tmp29 = tmp30;
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const length = todos.filter(f127970).length;
  if (cResult[8] !== agents) {
    let items2 = agents;
    if (agents == null) {
      items2 = [];
    }
    cResult[8] = agents;
    cResult[9] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[9];
  }
  if (cResult[10] !== tmp15) {
    let tmpResult = tmp(17147);
    const groupAgentsByTodoResult = tmpResult.groupAgentsByTodo(tmp15);
    cResult[10] = tmp15;
    cResult[11] = groupAgentsByTodoResult;
    tmp17 = groupAgentsByTodoResult;
  } else {
    tmp17 = cResult[11];
  }
  _require = tmp17;
  if (0 !== todos.length) {
    const intl = tmp(1126).intl;
    const obj6 = { completed: length, total: todos.length };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3827["P/I+JW"], obj6);
    const intl2 = tmp(1126).intl;
    class W {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[14]);
        todoMarkResult = obj.todoMark(arg0.status, live);
        obj1 = { style: closure_2.row, children: null };
        tmp6 = closure_2;
        tmp7 = jsx;
        tmp4 = jsxs;
        tmp5 = View;
        items = [, , ];
        items[0] = jsx(TodoMarker, { status: todoMarkResult });
        Text = closure_0(closure_2[11]).Text;
        if ("in_progress" === todoMarkResult) {
          str = "text-default";
        } else {
          str = "text-muted";
          str2 = "pending";
        }
        obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
        items1 = [, ];
        items1[0] = tmp6.text;
        items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
        obj6.style = items1;
        tmpResult = tmp(tmp2[14]);
        obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
        items[1] = tmp7(Text, obj6);
        tmp7Result = null;
        if ("completed" !== todoMarkResult) {
          tmp10 = closure_0;
          tmp9 = TodoAgents;
          value = closure_0.get(arg0.id);
          if (value == null) {
            value = [];
          }
          obj7 = { agents: null };
          obj7.agents = value;
          tmp7Result = tmp7(tmp9, obj7);
        }
        items[2] = tmp7Result;
        obj1.children = items;
        return tmp4(tmp5, obj1, arg0.id);
      }
    }
    const obj7 = { completed: length, total: todos.length };
    tmp24Result = tmp24(_modDef3827["7tzwKB"], obj7);
    tmp20 = forResult;
  } else {
    tmp20 = null;
    if (null != provisional) {
      let str = "";
      tmp20 = null;
    }
  }
  cResult[0] = agents;
  cResult[1] = provisional;
  cResult[2] = todos;
  cResult[3] = tmp17;
  cResult[4] = formatToPlainStringResult;
  cResult[5] = tmp24Result;
  cResult[6] = tmp20;
  cResult[7] = todos.length;
  tmp12 = tmp20;
  tmp11 = tmp24Result;
  tmp10 = formatToPlainStringResult;
  tmp13 = length2;
  tmp9 = tmp17;
}) : (function ConjureTodoList(announceProgress) {
  let ConjureNativeCollapsibleMeta;
  let agents;
  let closure_3;
  let formatToPlainStringResult1;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let obj2;
  let provisional;
  let row;
  let str;
  let todos;
  ({ todos, provisional, agents } = announceProgress);
  let flag = announceProgress.announceProgress;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = announceProgress.live;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = announceProgress.superseded;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = announceProgress.expanded;
  if (flag4 === undefined) {
    flag4 = true;
  }
  react = undefined;
  const onToggleExpanded = announceProgress.onToggleExpanded;
  let tmp = closure_8();
  dependencyMap = tmp;
  const length = todos.filter(f127970).length;
  let items = [agents];
  react = react.useMemo(() => {
    let items = agents;
    const groupAgentsByTodo = ConjureTodoAgents.groupAgentsByTodo;
    ConjureTodoAgents;
    if (agents == null) {
      items = [];
    }
    return groupAgentsByTodo(items);
  }, items);
  if (0 === todos.length) {
    return null;
  }
  let tmp4 = dependencyMap;
  const intl = agents(1126).intl;
  let tmp5 = flag2;
  const formatToPlainStringResult = intl.formatToPlainString(flag2(3827)["P/I+JW"], { completed: length, total: todos.length });
  const intl2 = agents(1126).intl;
  let obj = { title: intl3.string(flag2(3827).RtzECX), meta: closure_6(ConjureNativeCollapsibleMeta, { accessibilityLiveRegion: str, accessibilityLabel: formatToPlainStringResult1, children: formatToPlainStringResult }), showHeader: todos.length > 0, superseded: flag3, expanded: flag4, onToggleExpanded, showLabel: intl4.string(tmp5(3827).RKyN9q), hideLabel: intl5.string(tmp5(3827).xydHoj), children: tmp10(closure_5, obj2) };
  formatToPlainStringResult1 = intl2.formatToPlainString(flag2(3827)["7tzwKB"], { completed: length, total: todos.length });
  let tmp9 = flag2(17081);
  intl3 = agents(1126).intl;
  str = "none";
  ConjureNativeCollapsibleMeta = agents(17081).ConjureNativeCollapsibleMeta;
  if (flag) {
    str = "none";
    if (!flag3) {
      str = "polite";
    }
  }
  intl4 = tmp3(1126).intl;
  intl5 = tmp3(1126).intl;
  obj2 = { style: tmp.list, children: items1 };
  items1 = [
    todos.map((status) => {
      let items;
      let items1;
      let str;
      let tmpResult;
      const obj = ConjureTodoState;
      const todoMarkResult = obj.todoMark(status.status, flag2);
      const obj2 = { style: row.row, children: items };
      items = [metroRequire(closure_10, { status: todoMarkResult }), , ];
      const Text = Text_Text.Text;
      const tmp4 = metroImportDefault;
      const tmp5 = hasOwnProperty;
      if ("in_progress" === todoMarkResult) {
        str = "text-default";
      } else {
        str = "text-muted";
      }
      const obj3 = { variant: "text-sm/normal", color: str, style: items1, children: tmpResult.todoLabel(status, todoMarkResult) };
      items1 = [row.text, "completed" === todoMarkResult && row.textCompleted];
      tmpResult = ConjureTodoState;
      items[1] = metroRequire(Text, obj3);
      let tmp7Result = null;
      if ("completed" !== todoMarkResult) {
        let items2 = closure_3.get(status.id);
        const tmp9 = closure_9;
        if (items2 == null) {
          items2 = [];
        }
        const obj4 = { agents: items2 };
        tmp7Result = tmp7(tmp9, obj4);
      }
      items[2] = tmp7Result;
      return tmp4(tmp5, obj2, status.id);
    }),

  ];
  let tmp10Result = null;
  if (null != provisional) {
    tmp10Result = null;
    if ("" !== provisional) {
      let obj3 = { style: tmp.row, children: items2 };
      items2 = [closure_6(closure_10, { status: "pending" }), ];
      let obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
      items2[1] = closure_6(agents(5087).Text, obj4);
      tmp10Result = tmp10(tmp11, obj3);
    }
  }
  items1[1] = tmp10Result;
  return closure_6(tmp9, obj);
});
function todoProgress(arr) {
  const obj = { completed: arr.filter(f127970).length, total: arr.length };
  return obj;
}
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureTodoList.tsx");

export default tmp5;
export { todoProgress };
