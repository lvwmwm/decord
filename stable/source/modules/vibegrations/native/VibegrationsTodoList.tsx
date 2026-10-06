// Module ID: 16381
// Function ID: 16382
// Name: VibegrationsTodoList
// Dependencies: [19, 17, 21, 4837, 588, 1127, 3718, 558, 576, 16378, 16337, 4833, 8737, 10604, 6631, 5436, 16382, 2]
// Exports: todoProgress

// Module 16381 (VibegrationsTodoList)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl5 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import Text_Text from "Text/Text" /* 4833 */;
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine" /* 16337 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 16378 */;
import VibegrationsTodoState from "VibegrationsTodoState" /* 16382 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
const f124675 = (status) => "completed" === status.status;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, header: obj3, headerTrailing: obj4, list: obj5, row: obj6, marker: size, markerCompleted: obj7, markerUnfinished: obj8, markerInProgress: { borderWidth: 0 }, markerSpinner: size1, text: { flexShrink: 1 }, agents: obj9, agentMark: size2, agentMarkTint0: obj10, agentMarkTint1: obj11, agentMarkTint2: obj12, agentMarkTint3: obj13, textCompleted: { textDecorationLine: "line-through" } };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj5 = { gap: nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
obj7 = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
obj8 = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj10 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj11 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj12 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj13 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((agents) => {
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
                    let obj2 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: intl.formatToPlainString(items1(3718).Vpu1Pd, obj3), children: "+" + tmp6 };
                    const Text = tmp(4833).Text;
                    intl = tmp(1127).intl;
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
  const tmpResult = require("VibegrationsTodoAgents");
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
      const obj = { style: items, accessibilityRole: "image", accessibilityLabel: intl.formatToPlainString(_modDef3718.yTB8eu, obj3) };
      items = [agentMark.agentMark, ];
      const obj2 = VibegrationsNativeStatusLine;
      const laneTintIndexForResult = obj2.laneTintIndexFor(key.key);
      items[1] = items1[laneTintIndexForResult % VibegrationsNativeStatusLine.LANE_TINT_COUNT];
      intl = intl5.intl;
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
}) : ((agents) => {
  let agentMark;
  let intl;
  let items1;
  let obj4;
  let overflow;
  let shown;
  agents = agents.agents;
  const tmp = closure_8();
  _require = tmp;
  let obj = require("VibegrationsTodoAgents");
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
          const obj = { style: items, accessibilityRole: "image", accessibilityLabel: intl.formatToPlainString(_modDef3718.yTB8eu, obj3) };
          items = [agentMark.agentMark, ];
          const obj2 = VibegrationsNativeStatusLine;
          const laneTintIndexForResult = obj2.laneTintIndexFor(key.key);
          items[1] = items[laneTintIndexForResult % VibegrationsNativeStatusLine.LANE_TINT_COUNT];
          intl = intl5.intl;
          obj3 = { name: key.name, task: key.task };
          return metroRequire(hasOwnProperty, obj, key.key);
        }),

    ];
    let tmp9 = null;
    const tmp10 = closure_7;
    const tmp11 = closure_5;
    if (overflow > 0) {
      let obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: intl.formatToPlainString(items(3718).Vpu1Pd, obj4), children: "+" + overflow };
      const Text = tmp2(4833).Text;
      intl = tmp2(1127).intl;
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
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((status) => {
  let items;
  const obj = react2;
  const cResult = obj.c(17);
  status = status.status;
  const tmp4 = closure_8();
  if (cResult[0] === tmp4.marker) {
    if (cResult[1] === ("completed" === status && tmp4.markerCompleted)) {
      if (cResult[2] === ("in_progress" === status && tmp4.markerInProgress)) {
        let tmp10;
        let tmp11;
        if (cResult[3] === ("unfinished" === status && tmp4.markerUnfinished)) {
          tmp10 = cResult[4];
        }
        if (cResult[5] !== status) {
          let stringResult;
          if ("completed" === status) {
            const intl4 = tmp(1127).intl;
            stringResult = intl4.string(_modDef3718.TkPGOH);
          } else if ("in_progress" === status) {
            const intl3 = tmp(1127).intl;
            stringResult = intl3.string(_modDef3718["oK+fmd"]);
          } else if ("unfinished" === status) {
            const intl2 = tmp(1127).intl;
            stringResult = intl2.string(_modDef3718["1ley3g"]);
          } else {
            const intl = tmp(1127).intl;
            stringResult = intl.string(_modDef3718.d7lieu);
          }
          cResult[5] = status;
          cResult[6] = stringResult;
          tmp11 = stringResult;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === status) {
          let tmp17;
          let tmp21;
          if (cResult[8] === tmp4.markerSpinner) {
            tmp17 = cResult[9];
          }
          if (cResult[10] !== status) {
            let tmp22 = null;
            if ("completed" === status) {
              const obj2 = { size: "xs", color: nativeDefault.colors.CHECKBOX_ICON_ACTIVE };
              const CheckmarkSmallBoldIcon = tmp(8737).CheckmarkSmallBoldIcon;
              tmp22 = metroRequire(CheckmarkSmallBoldIcon, obj2);
            }
            cResult[10] = status;
            cResult[11] = tmp22;
            tmp21 = tmp22;
          } else {
            tmp21 = cResult[11];
          }
          if (cResult[12] === tmp10) {
            if (cResult[13] === tmp11) {
              if (cResult[14] === tmp17) {
                let tmp25;
                if (cResult[15] === tmp21) {
                  tmp25 = cResult[16];
                }
                return tmp25;
              }
            }
          }
          const obj3 = { style: tmp10, accessibilityRole: "image", accessibilityLabel: tmp11, children: items };
          items = [tmp17, tmp21];
          const tmp28 = metroImportDefault(hasOwnProperty, obj3);
          cResult[12] = tmp10;
          cResult[13] = tmp11;
          cResult[14] = tmp17;
          cResult[15] = tmp21;
          cResult[16] = tmp28;
          tmp25 = tmp28;
        }
        let tmp18 = null;
        if ("in_progress" === status) {
          const obj4 = { size: "small", style: tmp4.markerSpinner };
          tmp18 = metroRequire(React3, obj4);
        }
        cResult[7] = status;
        cResult[8] = tmp4.markerSpinner;
        cResult[9] = tmp18;
        tmp17 = tmp18;
      }
    }
  }
  const items1 = [tmp4.marker, "completed" === status && tmp4.markerCompleted, "in_progress" === status && tmp4.markerInProgress, "unfinished" === status && tmp4.markerUnfinished];
  cResult[0] = tmp4.marker;
  cResult[1] = "completed" === status && tmp4.markerCompleted;
  cResult[2] = "in_progress" === status && tmp4.markerInProgress;
  cResult[3] = "unfinished" === status && tmp4.markerUnfinished;
  cResult[4] = items1;
  tmp10 = items1;
}) : ((status) => {
  let items1;
  let stringResult;
  let tmp11;
  let tmp12;
  status = status.status;
  const tmp = closure_8();
  const items = [tmp.marker, , , ];
  let markerCompleted = tmp4;
  const tmp2 = metroImportDefault;
  const tmp3 = hasOwnProperty;
  if ("completed" === status) {
    markerCompleted = tmp.markerCompleted;
  }
  items[1] = markerCompleted;
  items[2] = "in_progress" === status && tmp.markerInProgress;
  const obj = { style: items, accessibilityRole: "image", accessibilityLabel: stringResult, children: items1 };
  const tmp6 = "unfinished" === status && tmp.markerUnfinished;
  items[3] = tmp6;
  if ("completed" === status) {
    const intl4 = intl5.intl;
    stringResult = intl4.string(_modDef3718.TkPGOH);
    tmp11 = importDefault;
    tmp12 = require;
  } else if ("in_progress" === status) {
    const intl3 = intl5.intl;
    stringResult = intl3.string(_modDef3718["oK+fmd"]);
    tmp11 = importDefault;
    tmp12 = require;
  } else if ("unfinished" === status) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(_modDef3718["1ley3g"]);
    tmp11 = importDefault;
    tmp12 = require;
  } else {
    const intl = intl5.intl;
    stringResult = intl.string(_modDef3718.d7lieu);
    tmp11 = importDefault;
    tmp12 = require;
  }
  let tmp22 = null;
  if ("in_progress" === status) {
    const obj2 = { size: "small", style: tmp.markerSpinner };
    tmp22 = metroRequire(React3, obj2);
  }
  items1 = [tmp22, ];
  let tmp25 = null;
  if ("completed" === status) {
    const obj3 = { size: "xs", color: tmp11(588).colors.CHECKBOX_ICON_ACTIVE };
    const CheckmarkSmallBoldIcon = tmp12(8737).CheckmarkSmallBoldIcon;
    tmp25 = metroRequire(CheckmarkSmallBoldIcon, obj3);
  }
  items1[1] = tmp25;
  return tmp2(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let agents;
  let announceProgress;
  let closure_0;
  let closure_1;
  let expanded;
  let formatToPlainStringResult;
  let formatToPlainStringResult1;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let live;
  let obj11;
  let obj12;
  let onToggleExpanded;
  let provisional;
  let row;
  let string;
  let superseded;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp31Result;
  let tmp9;
  let todos;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(37);
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
        let ChevronSmallRightIcon;
        if (tmp7) {
          ChevronSmallRightIcon = tmp(10604).ChevronSmallDownIcon;
        } else {
          ChevronSmallRightIcon = tmp(6631).ChevronSmallRightIcon;
        }
        if (cResult[12] === ChevronSmallRightIcon) {
          if (cResult[13] === tmp4) {
            if (cResult[14] === tmp7) {
              if (cResult[15] === onToggleExpanded) {
                if (cResult[16] === tmp10) {
                  if (cResult[17] === tmp11) {
                    if (cResult[18] === tmp8.header) {
                      if (cResult[19] === tmp8.headerTrailing) {
                        if (cResult[20] === (undefined !== superseded && superseded)) {
                          let tmp25;
                          if (cResult[21] === tmp13) {
                            tmp25 = cResult[22];
                          }
                          if (cResult[23] === tmp9) {
                            if (cResult[24] === tmp7) {
                              if (cResult[25] === tmp5) {
                                if (cResult[26] === provisional) {
                                  if (cResult[27] === tmp8.list) {
                                    if (cResult[28] === tmp8.row) {
                                      if (cResult[29] === tmp8.text) {
                                        if (cResult[30] === tmp8.textCompleted) {
                                          let tmp34;
                                          if (cResult[31] === todos) {
                                            tmp34 = cResult[32];
                                          }
                                          if (cResult[33] === tmp8.root) {
                                            if (cResult[34] === tmp25) {
                                              let tmp42;
                                              if (cResult[35] === tmp34) {
                                                tmp42 = cResult[36];
                                              }
                                              return tmp42;
                                            }
                                          }
                                          let obj2 = { style: tmp8.root, children: items };
                                          items = [tmp25, tmp34];
                                          const tmp45 = closure_7(closure_5, obj2);
                                          cResult[33] = tmp8.root;
                                          cResult[34] = tmp25;
                                          cResult[35] = tmp34;
                                          cResult[36] = tmp45;
                                          tmp42 = tmp45;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          let tmp37Result2 = null;
                          if (tmp7) {
                            let obj3 = { style: tmp8.list, children: items1 };
                            items1 = [
                              todos.map((status) => {
                                                          let items;
                                                          let items1;
                                                          let str;
                                                          let tmpResult;
                                                          const obj = VibegrationsTodoState;
                                                          const todoMarkResult = obj.todoMark(status.status, closure_1);
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
                                                          tmpResult = VibegrationsTodoState;
                                                          items[1] = metroRequire(Text, obj3);
                                                          let tmp7Result = null;
                                                          if ("completed" !== todoMarkResult) {
                                                            let items2 = closure_0.get(status.id);
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
                            let tmp37Result = null;
                            if (null != provisional) {
                              tmp37Result = null;
                              if ("" !== provisional) {
                                let obj4 = { style: tmp8.row, children: items2 };
                                items2 = [closure_6(closure_10, { status: "pending" }), ];
                                const obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp8.text, children: provisional };
                                items2[1] = closure_6(tmp(4833).Text, obj5);
                                tmp37Result = tmp37(tmp38, obj4);
                              }
                            }
                            items1[1] = tmp37Result;
                            tmp37Result2 = tmp37(tmp38, obj3);
                          }
                          cResult[23] = tmp9;
                          cResult[24] = tmp7;
                          cResult[25] = tmp5;
                          cResult[26] = provisional;
                          cResult[27] = tmp8.list;
                          cResult[28] = tmp8.row;
                          cResult[29] = tmp8.text;
                          cResult[30] = tmp8.textCompleted;
                          cResult[31] = todos;
                          cResult[32] = tmp37Result2;
                          tmp34 = tmp37Result2;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let tmp28Result = null;
        if (tmp13 > 0) {
          const obj6 = { style: tmp8.header, children: items3 };
          const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: intl3.string(_modDef3718.qCRC6c) };
          let Text = tmp(4833).Text;
          intl3 = tmp(1127).intl;
          items3 = [closure_6(Text, obj7), ];
          let str4 = "none";
          const obj8 = { style: tmp8.headerTrailing, children: items4 };
          const Text2 = tmp(4833).Text;
          if (tmp4) {
            str4 = "none";
            if (!(undefined !== superseded && superseded)) {
              str4 = "polite";
            }
          }
          const obj9 = { variant: "text-sm/medium", color: "text-muted", accessibilityLiveRegion: str4, accessibilityLabel: tmp11, children: tmp10 };
          items4 = [closure_6(Text2, obj9), ];
          let tmp30Result = null;
          if (undefined !== superseded && superseded) {
            tmp30Result = null;
            if (null != onToggleExpanded) {
              const obj10 = { accessibilityRole: "button", accessibilityState: obj11, accessibilityLabel: string(tmp7 ? tmp31Result.fIBJas : tmp31Result.SVhXLT), hitSlop: 8, onPress: onToggleExpanded, children: closure_6(ChevronSmallRightIcon, obj12) };
              obj11 = { expanded: tmp7 };
              const PressableOpacity = tmp(5436).PressableOpacity;
              const intl4 = tmp(1127).intl;
              string = intl4.string;
              tmp31Result = _modDef3718;
              obj12 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
              tmp30Result = tmp30(PressableOpacity, obj10);
            }
          }
          items4[1] = tmp30Result;
          items3[1] = closure_7(closure_5, obj8);
          tmp28Result = tmp28(tmp29, obj6);
        }
        cResult[12] = ChevronSmallRightIcon;
        cResult[13] = tmp4;
        cResult[14] = tmp7;
        cResult[15] = onToggleExpanded;
        cResult[16] = tmp10;
        cResult[17] = tmp11;
        cResult[18] = tmp8.header;
        cResult[19] = tmp8.headerTrailing;
        cResult[20] = undefined !== superseded && superseded;
        cResult[21] = tmp13;
        cResult[22] = tmp28Result;
        tmp25 = tmp28Result;
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const length = todos.filter(f124675).length;
  if (cResult[8] !== agents) {
    let items5 = agents;
    if (agents == null) {
      items5 = [];
    }
    cResult[8] = agents;
    cResult[9] = items5;
    tmp15 = items5;
  } else {
    tmp15 = cResult[9];
  }
  if (cResult[10] !== tmp15) {
    let tmpResult = tmp(16378);
    const groupAgentsByTodoResult = tmpResult.groupAgentsByTodo(tmp15);
    cResult[10] = tmp15;
    cResult[11] = groupAgentsByTodoResult;
    tmp17 = groupAgentsByTodoResult;
  } else {
    tmp17 = cResult[11];
  }
  _require = tmp17;
  if (0 !== todos.length) {
    const intl = tmp(1127).intl;
    const obj13 = { completed: length, total: todos.length };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3718.bQvqly, obj13);
    const intl2 = tmp(1127).intl;
    const obj14 = { completed: length, total: todos.length };
    formatToPlainStringResult1 = intl2.formatToPlainString(_modDef3718["QG/EiF"], obj14);
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
  cResult[5] = formatToPlainStringResult1;
  cResult[6] = tmp20;
  cResult[7] = todos.length;
  tmp12 = tmp20;
  tmp11 = formatToPlainStringResult1;
  tmp10 = formatToPlainStringResult;
  tmp13 = length2;
  tmp9 = tmp17;
}) : ((announceProgress) => {
  let ChevronSmallRightIcon;
  let agents;
  let closure_3;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj7;
  let obj8;
  let provisional;
  let row;
  let string;
  let tmp5Result;
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
  const onToggleExpanded = announceProgress.onToggleExpanded;
  react = undefined;
  let tmp = closure_8();
  dependencyMap = tmp;
  const length = todos.filter(f124675).length;
  let items = [agents];
  react = react.useMemo(() => {
    let items = agents;
    const groupAgentsByTodo = VibegrationsTodoAgents.groupAgentsByTodo;
    VibegrationsTodoAgents;
    if (agents == null) {
      items = [];
    }
    return groupAgentsByTodo(items);
  }, items);
  if (0 === todos.length) {
    return null;
  }
  let tmp4 = dependencyMap;
  const intl = agents(1127).intl;
  let tmp5 = flag2;
  const formatToPlainStringResult = intl.formatToPlainString(flag2(3718).bQvqly, { completed: length, total: todos.length });
  const intl2 = agents(1127).intl;
  const formatToPlainStringResult1 = intl2.formatToPlainString(flag2(3718)["QG/EiF"], { completed: length, total: todos.length });
  if (flag4) {
    ChevronSmallRightIcon = tmp3(10604).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp3(6631).ChevronSmallRightIcon;
  }
  let tmp9 = closure_5;
  let obj = { style: tmp.root, children: items3 };
  let tmp8Result = null;
  if (todos.length > 0) {
    let obj2 = { style: tmp.header, children: items1 };
    let obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl3.string(tmp5(3718).qCRC6c) };
    let Text = tmp3(4833).Text;
    intl3 = tmp3(1127).intl;
    items1 = [closure_6(Text, obj3), ];
    let obj4 = { style: tmp.headerTrailing, children: items2 };
    let str = "none";
    let str2 = "none";
    const Text2 = tmp3(4833).Text;
    if (flag) {
      str2 = "none";
      if (!flag3) {
        str2 = "polite";
      }
    }
    const obj5 = { variant: "text-sm/medium", color: "text-muted", accessibilityLiveRegion: str2, accessibilityLabel: formatToPlainStringResult1, children: formatToPlainStringResult };
    items2 = [closure_6(Text2, obj5), ];
    let tmp11Result = null;
    if (flag3) {
      tmp11Result = null;
      if (null != onToggleExpanded) {
        const obj6 = { accessibilityRole: "button", accessibilityState: obj7, accessibilityLabel: string(flag4 ? tmp5Result.fIBJas : tmp5Result.SVhXLT), hitSlop: 8, onPress: onToggleExpanded, children: closure_6(ChevronSmallRightIcon, obj8) };
        obj7 = { expanded: flag4 };
        const PressableOpacity = tmp3(5436).PressableOpacity;
        const intl4 = tmp3(1127).intl;
        string = intl4.string;
        tmp5Result = tmp5(3718);
        obj8 = { size: "xs", color: tmp5(588).colors.ICON_MUTED };
        tmp11Result = tmp11(PressableOpacity, obj6);
      }
    }
    items2[1] = tmp11Result;
    items1[1] = closure_7(tmp9, obj4);
    tmp8Result = tmp8(tmp9, obj2);
  }
  items3 = [tmp8Result, ];
  let tmp8Result4 = null;
  if (flag4) {
    const obj9 = { style: tmp.list, children: items4 };
    items4 = [
      todos.map((status) => {
          let items;
          let items1;
          let str;
          let tmpResult;
          const obj = VibegrationsTodoState;
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
          tmpResult = VibegrationsTodoState;
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
    let tmp8Result3 = null;
    if (null != provisional) {
      tmp8Result3 = null;
      if ("" !== provisional) {
        const obj10 = { style: tmp.row, children: items5 };
        items5 = [closure_6(closure_10, { status: "pending" }), ];
        const obj11 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
        items5[1] = closure_6(agents(4833).Text, obj11);
        tmp8Result3 = tmp8(tmp9, obj10);
      }
    }
    items4[1] = tmp8Result3;
    tmp8Result4 = tmp8(tmp9, obj9);
  }
  items3[1] = tmp8Result4;
  return closure_7(tmp9, obj);
});
function todoProgress(arr) {
  const obj = { completed: arr.filter(f124675).length, total: arr.length };
  return obj;
}
size = size_mod;
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTodoList.tsx");

export default tmp5;
export { todoProgress };
