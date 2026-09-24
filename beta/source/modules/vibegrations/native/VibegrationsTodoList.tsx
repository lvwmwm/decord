// Module ID: 17054
// Function ID: 17055
// Name: VibegrationsTodoList
// Dependencies: [19, 17, 21, 4790, 580, 1119, 3714, 558, 568, 17053, 17034, 4786, 9581, 2]
// Exports: todoProgress

// Module 17054 (VibegrationsTodoList)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import _modDef3714 from "module_3714" /* 3714 */;
import Text_Text from "Text/Text" /* 4786 */;
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine" /* 17034 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 17053 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { root: { gap: nativeDefault.space.PX_8 }, header: null, list: null, row: null, marker: null, markerCompleted: null, markerInProgress: null, markerSpinner: null, text: null, agents: null, agentMark: null, agentMarkTint0: null, agentMarkTint1: null, agentMarkTint2: null, agentMarkTint3: null, textCompleted: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.list = { gap: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.row = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.marker = size;
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj2.markerCompleted = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
obj2.markerInProgress = { borderWidth: 0 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj2.markerSpinner = size1;
obj2.text = { flexShrink: 1 };
let obj7 = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
obj2.agents = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
const size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj2.agentMark = size2;
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
obj2.agentMarkTint0 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
let obj9 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.agentMarkTint1 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let obj10 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.agentMarkTint2 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
const obj11 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj2.agentMarkTint3 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO };
obj2.textCompleted = { textDecorationLine: "line-through" };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((agents) => {
  const cResult = require("c").c(19);
  agents = agents.agents;
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] === agents) {
    if (cResult[1] === tmp4.agentMark) {
      if (cResult[2] === tmp4.agentMarkTint0) {
        if (cResult[3] === tmp4.agentMarkTint1) {
          if (cResult[4] === tmp4.agentMarkTint2) {
            if (cResult[5] === tmp4.agentMarkTint3) {
              if (cResult[6] === tmp4.agents) {
                let tmp5 = cResult[7];
                let tmp6 = cResult[8];
                let tmp7 = cResult[9];
                let tmp8 = cResult[10];
                let tmp9 = cResult[11];
              }
              const _Symbol = Symbol;
              if (tmp9 !== Symbol.for("react.early_return_sentinel")) {
                return tmp9;
              } else {
                if (cResult[12] !== tmp6) {
                  let tmp18 = null;
                  if (tmp6 > 0) {
                    let obj2 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
                    let intl = tmp(1119).intl;
                    const obj3 = { count: tmp6 };
                    obj2.accessibilityLabel = intl.formatToPlainString(items1(3714).Vpu1Pd, obj3);
                    const _HermesInternal = HermesInternal;
                    obj2.children = "+" + tmp6;
                    tmp18 = closure_6(tmp(4786).Text, obj2);
                  }
                  cResult[12] = tmp6;
                  cResult[13] = tmp18;
                  let tmp17 = tmp18;
                } else {
                  tmp17 = cResult[13];
                }
                if (cResult[14] === tmp5) {
                  if (cResult[15] === tmp7) {
                    if (cResult[16] === tmp8) {
                    }
                  }
                }
                const obj4 = { style: tmp7, children: null };
                let items = [tmp8, tmp17];
                obj4.children = items;
                const tmp23 = closure_7(tmp5, obj4);
                cResult[14] = tmp5;
                cResult[15] = tmp7;
                cResult[16] = tmp8;
                cResult[17] = tmp17;
                cResult[18] = tmp23;
              }
            }
          }
        }
      }
    }
  }
  let obj = require("c");
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult = require("VibegrationsTodoAgents");
  ({ shown, overflow } = require("VibegrationsTodoAgents").splitAgentOverflow(agents));
  items1 = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp4);
  let tmp12 = null;
  let mapped;
  let agents1;
  let tmp15;
  if (0 !== shown.length) {
    tmp15 = closure_5;
    agents1 = tmp4.agents;
    mapped = shown.map((key) => {
      const obj = { style: null, accessibilityRole: "image", accessibilityLabel: null };
      const items = [agentMark.agentMark, ];
      items[1] = items1[VibegrationsNativeStatusLine.laneTintIndexFor(key.key) % VibegrationsNativeStatusLine.LANE_TINT_COUNT];
      obj.style = items;
      const intl = util.intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3714.yTB8eu, { name: key.name, task: key.task });
      return timestampProducer(hasOwnProperty, obj, key.key);
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
  const tmp = closure_8();
  _require = tmp;
  let obj = require("VibegrationsTodoAgents");
  ({ shown, overflow } = require("VibegrationsTodoAgents").splitAgentOverflow(agents.agents));
  let items = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp);
  let tmp10Result = null;
  if (0 !== shown.length) {
    let obj2 = { style: tmp.agents, children: null };
    const items1 = [
      shown.map((key) => {
          const obj = { style: null, accessibilityRole: "image", accessibilityLabel: null };
          items = [agentMark.agentMark, ];
          items[1] = items[VibegrationsNativeStatusLine.laneTintIndexFor(key.key) % VibegrationsNativeStatusLine.LANE_TINT_COUNT];
          obj.style = items;
          const intl = util.intl;
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3714.yTB8eu, { name: key.name, task: key.task });
          return timestampProducer(hasOwnProperty, obj, key.key);
        }),

    ];
    let tmp9 = null;
    if (overflow > 0) {
      const obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
      let intl = tmp2(1119).intl;
      const obj4 = { count: overflow };
      obj3.accessibilityLabel = intl.formatToPlainString(items(3714).Vpu1Pd, obj4);
      const _HermesInternal = HermesInternal;
      obj3.children = "+" + overflow;
      tmp9 = closure_6(tmp2(4786).Text, obj3);
    }
    items1[1] = tmp9;
    obj2.children = items1;
    tmp10Result = closure_7(closure_5, obj2);
  }
  return tmp10Result;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((status) => {
  const cResult = c.c(16);
  status = status.status;
  const tmp4 = closure_8();
  let markerCompleted = tmp5;
  if ("completed" === status) {
    markerCompleted = tmp4.markerCompleted;
  }
  let markerInProgress = tmp6;
  if ("in_progress" === status) {
    markerInProgress = tmp4.markerInProgress;
  }
  if (cResult[0] === tmp4.marker) {
    if (cResult[1] === markerCompleted) {
      if (cResult[2] === markerInProgress) {
        let tmp7 = cResult[3];
      }
      if (cResult[4] !== status) {
        if ("completed" === status) {
          const intl3 = tmp(1119).intl;
          let stringResult = intl3.string(_modDef3714.TkPGOH);
          cResult[4] = status;
          cResult[5] = stringResult;
        } else if ("in_progress" !== status) {
          const intl = tmp(1119).intl;
          stringResult = intl.string(_modDef3714.d7lieu);
        }
        const intl2 = tmp(1119).intl;
        stringResult = intl2.string(_modDef3714["oK+fmd"]);
      } else {
        if (cResult[6] === status) {
          if (cResult[7] === tmp4.markerSpinner) {
            let tmp14 = cResult[8];
          }
          if (cResult[9] !== status) {
            let tmp19 = null;
            if (tmp5) {
              const obj2 = { size: "xs", color: nativeDefault.colors.CHECKBOX_ICON_ACTIVE };
              tmp19 = timestampProducer(tmp(9581).CheckmarkSmallBoldIcon, obj2);
            }
            cResult[9] = status;
            cResult[10] = tmp19;
            let tmp18 = tmp19;
          } else {
            tmp18 = cResult[10];
          }
          if (cResult[11] === tmp7) {
            if (cResult[12] === tmp8) {
              if (cResult[13] === tmp14) {
                if (cResult[14] === tmp18) {
                  let tmp22 = cResult[15];
                }
                return tmp22;
              }
            }
          }
          const obj3 = { style: tmp7, accessibilityRole: "image", accessibilityLabel: tmp8, children: null };
          const items = [tmp14, tmp18];
          obj3.children = items;
          const tmp25 = React5(hasOwnProperty, obj3);
          cResult[11] = tmp7;
          cResult[12] = tmp8;
          cResult[13] = tmp14;
          cResult[14] = tmp18;
          cResult[15] = tmp25;
          tmp22 = tmp25;
        }
        let tmp15 = null;
        if (tmp6) {
          const obj4 = { size: "small", style: tmp4.markerSpinner };
          tmp15 = timestampProducer(React4, obj4);
        }
        cResult[6] = status;
        cResult[7] = tmp4.markerSpinner;
        cResult[8] = tmp15;
        tmp14 = tmp15;
      }
    }
  }
  const items1 = [tmp4.marker, markerCompleted, markerInProgress];
  cResult[0] = tmp4.marker;
  cResult[1] = markerCompleted;
  cResult[2] = markerInProgress;
  cResult[3] = items1;
  tmp7 = items1;
}) : ((status) => {
  status = status.status;
  const tmp = closure_8();
  const items = [tmp.marker, , ];
  let markerCompleted = tmp4;
  if ("completed" === status) {
    markerCompleted = tmp.markerCompleted;
  }
  items[1] = markerCompleted;
  let markerInProgress = tmp5;
  if ("in_progress" === status) {
    markerInProgress = tmp.markerInProgress;
  }
  const obj = { style: items, accessibilityRole: "image", accessibilityLabel: null, children: null };
  items[2] = markerInProgress;
  if ("completed" === status) {
    const intl3 = util.intl;
    let stringResult = intl3.string(_modDef3714.TkPGOH);
    let tmp10 = importDefault;
    let tmp11 = require;
  } else if ("in_progress" === status) {
    const intl2 = util.intl;
    stringResult = intl2.string(_modDef3714["oK+fmd"]);
    tmp10 = importDefault;
    tmp11 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef3714.d7lieu);
    tmp10 = importDefault;
    tmp11 = require;
  }
  obj.accessibilityLabel = stringResult;
  let tmp18 = null;
  if ("in_progress" === status) {
    const obj2 = { size: "small", style: tmp.markerSpinner };
    tmp18 = timestampProducer(React4, obj2);
  }
  const items1 = [tmp18, ];
  let tmp21 = null;
  if ("completed" === status) {
    const obj3 = { size: "xs", color: tmp10(580).colors.CHECKBOX_ICON_ACTIVE };
    tmp21 = timestampProducer(tmp11(9581).CheckmarkSmallBoldIcon, obj3);
  }
  items1[1] = tmp21;
  obj.children = items1;
  return React5(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
const obj12 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO };
function todoProgress(arr) {
  return { completed: arr.filter((status) => "completed" === status.status).length, total: arr.length };
}
size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTodoList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(38);
  ({ todos, provisional, agents, announceProgress } = arg0);
  const tmp5 = closure_8();
  importDefault = tmp5;
  if (cResult[0] === agents) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === provisional) {
        if (cResult[3] === tmp5) {
          if (cResult[4] === todos) {
            let tmp6 = cResult[5];
            _require = cResult[6];
            let tmp7 = cResult[7];
            let tmp8 = cResult[8];
            let tmp9 = cResult[9];
          }
          const _Symbol = Symbol;
          if (tmp9 !== Symbol.for("react.early_return_sentinel")) {
            return tmp9;
          } else {
            if (cResult[14] === textCompleted) {
              if (cResult[15] === tmp5.row) {
                if (cResult[16] === tmp5.text) {
                  if (cResult[17] === tmp5.textCompleted) {
                    if (cResult[18] === todos) {
                      if (cResult[25] === provisional) {
                        if (cResult[26] === tmp5.row) {
                          if (cResult[27] === tmp5.text) {
                            let tmp29 = cResult[28];
                          }
                          if (cResult[29] === tmp5.list) {
                            if (cResult[30] === tmp25) {
                              if (cResult[31] === tmp29) {
                                let tmp36 = cResult[32];
                              }
                              if (cResult[33] === tmp6) {
                                if (cResult[34] === tmp7) {
                                  if (cResult[35] === tmp8) {
                                    if (cResult[36] === tmp36) {
                                      let tmp40 = cResult[37];
                                    }
                                    return tmp40;
                                  }
                                }
                              }
                              const obj2 = { style: tmp7, children: null };
                              let items = [tmp8, tmp36];
                              obj2.children = items;
                              const tmp42 = closure_7(tmp6, obj2);
                              cResult[33] = tmp6;
                              cResult[34] = tmp7;
                              cResult[35] = tmp8;
                              cResult[36] = tmp36;
                              cResult[37] = tmp42;
                              tmp40 = tmp42;
                            }
                          }
                          let obj3 = { style: tmp43, children: null };
                          let items1 = [tmp25, tmp29];
                          obj3.children = items1;
                          const tmp39 = closure_7(closure_5, obj3);
                          cResult[29] = tmp5.list;
                          cResult[30] = tmp25;
                          cResult[31] = tmp29;
                          cResult[32] = tmp39;
                          tmp36 = tmp39;
                        }
                      }
                      let tmp31 = null;
                      if (null != provisional) {
                        tmp31 = null;
                        if ("" !== provisional) {
                          let obj4 = { style: tmp5.row, children: null };
                          let items2 = [closure_6(closure_10, { status: "pending" }), ];
                          const obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp5.text, children: provisional };
                          items2[1] = closure_6(tmp(4786).Text, obj5);
                          obj4.children = items2;
                          tmp31 = closure_7(closure_5, obj4);
                        }
                      }
                      cResult[25] = provisional;
                      cResult[26] = tmp5.row;
                      cResult[27] = tmp5.text;
                      cResult[28] = tmp31;
                      tmp29 = tmp31;
                    }
                  }
                }
              }
            }
            if (cResult[20] === textCompleted) {
              if (cResult[21] === tmp5.row) {
                if (cResult[22] === tmp5.text) {
                  if (cResult[23] === tmp5.textCompleted) {
                    let tmp26 = cResult[24];
                  }
                  const mapped = todos.map(tmp26);
                  cResult[14] = textCompleted;
                  cResult[15] = tmp5.row;
                  ({ text: tmp3[16], textCompleted } = tmp5);
                  cResult[17] = textCompleted;
                  cResult[18] = todos;
                  cResult[19] = mapped;
                }
              }
            }
            const fn = function w(status) {
              const obj = { style: row.row, children: null };
              const items = [timestampProducer(closure_10, { status: status.status }), , ];
              let str = "text-default";
              if ("completed" === status.status) {
                str = "text-muted";
              }
              const obj3 = { variant: "text-sm/normal", color: str, style: null, children: status.text };
              const items1 = [row.text, "completed" === status.status && row.textCompleted];
              obj3.style = items1;
              items[1] = timestampProducer(Text_Text.Text, obj3);
              let tmp4Result = null;
              if ("in_progress" === status.status) {
                let items2 = closure_0.get(status.id);
                if (items2 == null) {
                  items2 = [];
                }
                const obj4 = { agents: items2 };
                tmp4Result = tmp4(closure_9, obj4);
              }
              items[2] = tmp4Result;
              obj.children = items;
              return React5(hasOwnProperty, obj, status.id);
            };
            cResult[20] = textCompleted;
            cResult[21] = tmp5.row;
            cResult[22] = tmp5.text;
            cResult[23] = tmp5.textCompleted;
            cResult[24] = fn;
            tmp26 = fn;
          }
        }
      }
    }
  }
  let obj = require("c");
  const length = todos.filter((status) => "completed" === status.status).length;
  if (cResult[10] !== agents) {
    let items3 = agents;
    if (agents == null) {
      items3 = [];
    }
    cResult[10] = agents;
    cResult[11] = items3;
    let tmp11 = items3;
  } else {
    tmp11 = cResult[11];
  }
  if (cResult[12] !== tmp11) {
    const groupAgentsByTodoResult = tmp(17053).groupAgentsByTodo(tmp11);
    cResult[12] = tmp11;
    cResult[13] = groupAgentsByTodoResult;
    let tmp13 = groupAgentsByTodoResult;
    const tmpResult = tmp(17053);
  } else {
    tmp13 = cResult[13];
  }
  _require = tmp13;
  if (0 !== todos.length) {
    let tmp21Result = null;
    if (length2 > 0) {
      const obj6 = { style: tmp5.header, children: null };
      const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      const intl = tmp(1119).intl;
      obj7.children = intl.string(_modDef3714.qCRC6c);
      const items4 = [closure_6(tmp(4786).Text, obj7), ];
      let str2 = "none";
      if (tmp4) {
        str2 = "polite";
      }
      const obj8 = { variant: "text-sm/medium", color: "text-muted", accessibilityLiveRegion: str2, accessibilityLabel: null, children: null };
      const intl2 = tmp(1119).intl;
      const obj9 = { completed: length, total: length2 };
      obj8.accessibilityLabel = intl2.formatToPlainString(_modDef3714["QG/EiF"], obj9);
      const intl3 = tmp(1119).intl;
      const obj10 = { completed: length, total: length2 };
      obj8.children = intl3.formatToPlainString(_modDef3714.bQvqly, obj10);
      items4[1] = closure_6(tmp(4786).Text, obj8);
      obj6.children = items4;
      tmp21Result = closure_7(tmp19, obj6);
    }
    let tmp16 = forResult;
    const root = tmp5.root;
  } else {
    tmp16 = null;
    if (null != provisional) {
      tmp16 = null;
    }
  }
  cResult[0] = agents;
  cResult[1] = undefined === announceProgress || announceProgress;
  cResult[2] = provisional;
  cResult[3] = tmp5;
  cResult[4] = todos;
  cResult[5] = tmp18;
  cResult[6] = tmp13;
  cResult[7] = root;
  cResult[8] = tmp17;
  cResult[9] = tmp16;
  tmp9 = tmp16;
  tmp8 = tmp17;
  tmp7 = root;
  tmp6 = tmp18;
  textCompleted = tmp13;
}) : ((announceProgress) => {
  ({ todos, provisional, agents } = announceProgress);
  let flag = announceProgress.announceProgress;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_8();
  importDefault = tmp;
  const length = todos.filter((status) => "completed" === status.status).length;
  let items = [agents];
  dependencyMap = noop.useMemo(() => {
    let items = agents;
    if (agents == null) {
      items = [];
    }
    return VibegrationsTodoAgents.groupAgentsByTodo(items);
  }, items);
  if (0 !== todos.length) {
    let obj = { style: tmp.root, children: null };
    let tmp4Result = null;
    if (length2 > 0) {
      const obj2 = { style: tmp.header, children: null };
      let obj3 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      const intl = agents(1119).intl;
      obj3.children = intl.string(_modDef3714.qCRC6c);
      let items1 = [closure_6(agents(4786).Text, obj3), ];
      let str2 = "none";
      if (flag) {
        str2 = "polite";
      }
      let obj4 = { variant: "text-sm/medium", color: "text-muted", accessibilityLiveRegion: str2, accessibilityLabel: null, children: null };
      const intl2 = tmp9(1119).intl;
      const obj5 = { completed: length, total: length2 };
      obj4.accessibilityLabel = intl2.formatToPlainString(_modDef3714["QG/EiF"], obj5);
      const intl3 = tmp9(1119).intl;
      const obj6 = { completed: length, total: length2 };
      obj4.children = intl3.formatToPlainString(_modDef3714.bQvqly, obj6);
      items1[1] = closure_6(agents(4786).Text, obj4);
      obj2.children = items1;
      tmp4Result = tmp4(tmp5, obj2);
    }
    let items2 = [tmp4Result, ];
    const obj7 = { style: tmp.list, children: null };
    const items3 = [
      todos.map((status) => {
          const obj = { style: row.row, children: null };
          const items = [timestampProducer(closure_10, { status: status.status }), , ];
          let str = "text-default";
          if ("completed" === status.status) {
            str = "text-muted";
          }
          const obj3 = { variant: "text-sm/normal", color: str, style: null, children: status.text };
          const items1 = [row.text, "completed" === status.status && row.textCompleted];
          obj3.style = items1;
          items[1] = timestampProducer(Text_Text.Text, obj3);
          let tmp4Result = null;
          if ("in_progress" === status.status) {
            let items2 = closure_2.get(status.id);
            if (items2 == null) {
              items2 = [];
            }
            const obj4 = { agents: items2 };
            tmp4Result = tmp4(closure_9, obj4);
          }
          items[2] = tmp4Result;
          obj.children = items;
          return React5(hasOwnProperty, obj, status.id);
        }),

    ];
    let tmp4Result3 = null;
    if (null != provisional) {
      tmp4Result3 = null;
      if ("" !== provisional) {
        const obj8 = { style: tmp.row, children: null };
        const items4 = [closure_6(closure_10, { status: "pending" }), ];
        const obj9 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
        items4[1] = closure_6(agents(4786).Text, obj9);
        obj8.children = items4;
        tmp4Result3 = tmp4(tmp5, obj8);
      }
    }
    items3[1] = tmp4Result3;
    obj7.children = items3;
    items2[1] = closure_7(closure_5, obj7);
    obj.children = items2;
    let tmp4Result4 = tmp4(tmp5, obj);
  } else {
    tmp4Result4 = null;
    if (null != provisional) {
      tmp4Result4 = null;
    }
  }
  return tmp4Result4;
});
export { todoProgress };
