// Module ID: 16379
// Function ID: 16380
// Name: VibegrationsTodoList
// Dependencies: [19, 17, 21, 4836, 576, 1115, 3715, 16376, 16335, 4832, 8742, 10615, 6630, 5435, 16380, 2]
// Exports: default, todoProgress

// Module 16379 (VibegrationsTodoList)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import Text_Text from "Text/Text" /* 4832 */;
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine" /* 16335 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 16376 */;
import VibegrationsTodoState from "VibegrationsTodoState" /* 16380 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
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
const f104690 = (status) => "completed" === status.status;
function TodoAgents(agents) {
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
          const obj = { style: items, accessibilityRole: "image", accessibilityLabel: intl.formatToPlainString(_modDef3715.yTB8eu, obj3) };
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
      let obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: intl.formatToPlainString(items(3715).Vpu1Pd, obj4), children: "+" + overflow };
      const Text = tmp2(4832).Text;
      intl = tmp2(1115).intl;
      const _HermesInternal = HermesInternal;
      obj4 = { count: overflow };
      tmp9 = closure_6(Text, obj3);
    }
    items1[1] = tmp9;
    tmp10Result = tmp10(tmp11, obj2);
  }
  return tmp10Result;
}
function TodoMarker(status) {
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
    stringResult = intl4.string(_modDef3715.TkPGOH);
    tmp11 = importDefault;
    tmp12 = require;
  } else if ("in_progress" === status) {
    const intl3 = intl5.intl;
    stringResult = intl3.string(_modDef3715["oK+fmd"]);
    tmp11 = importDefault;
    tmp12 = require;
  } else if ("unfinished" === status) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(_modDef3715["1ley3g"]);
    tmp11 = importDefault;
    tmp12 = require;
  } else {
    const intl = intl5.intl;
    stringResult = intl.string(_modDef3715.d7lieu);
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
    const obj3 = { size: "xs", color: tmp11(576).colors.CHECKBOX_ICON_ACTIVE };
    const CheckmarkSmallBoldIcon = tmp12(8742).CheckmarkSmallBoldIcon;
    tmp25 = metroRequire(CheckmarkSmallBoldIcon, obj3);
  }
  items1[1] = tmp25;
  return tmp2(tmp3, obj);
}
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, header: obj3, headerTrailing: obj4, list: obj5, row: obj6, marker: size, markerCompleted: obj7, markerUnfinished: obj8, markerInProgress: { borderWidth: 0 }, markerSpinner: size1, text: { flexShrink: 1 }, agents: obj9, agentMark: size2, agentMarkTint0: obj10, agentMarkTint1: obj11, agentMarkTint2: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING }, agentMarkTint3: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO }, textCompleted: { textDecorationLine: "line-through" } };
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
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO });
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTodoList.tsx");

export default function VibegrationsTodoList(announceProgress) {
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
  const length = todos.filter(f104690).length;
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
  const intl = agents(1115).intl;
  let tmp5 = flag2;
  const formatToPlainStringResult = intl.formatToPlainString(flag2(3715).bQvqly, { completed: length, total: todos.length });
  const intl2 = agents(1115).intl;
  const formatToPlainStringResult1 = intl2.formatToPlainString(flag2(3715)["QG/EiF"], { completed: length, total: todos.length });
  if (flag4) {
    ChevronSmallRightIcon = tmp3(10615).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp3(6630).ChevronSmallRightIcon;
  }
  let tmp9 = closure_5;
  let obj = { style: tmp.root, children: items3 };
  let tmp8Result = null;
  if (todos.length > 0) {
    let obj2 = { style: tmp.header, children: items1 };
    let obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl3.string(tmp5(3715).qCRC6c) };
    let Text = tmp3(4832).Text;
    intl3 = tmp3(1115).intl;
    items1 = [closure_6(Text, obj3), ];
    let obj4 = { style: tmp.headerTrailing, children: items2 };
    let str = "none";
    let str2 = "none";
    const Text2 = tmp3(4832).Text;
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
        const PressableOpacity = tmp3(5435).PressableOpacity;
        const intl4 = tmp3(1115).intl;
        string = intl4.string;
        tmp5Result = tmp5(3715);
        obj8 = { size: "xs", color: tmp5(576).colors.ICON_MUTED };
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
          items = [metroRequire(TodoMarker, { status: todoMarkResult }), , ];
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
            const tmp9 = TodoAgents;
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
        items5 = [closure_6(TodoMarker, { status: "pending" }), ];
        const obj11 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
        items5[1] = closure_6(agents(4832).Text, obj11);
        tmp8Result3 = tmp8(tmp9, obj10);
      }
    }
    items4[1] = tmp8Result3;
    tmp8Result4 = tmp8(tmp9, obj9);
  }
  items3[1] = tmp8Result4;
  return closure_7(tmp9, obj);
};
export const todoProgress = function todoProgress(arr) {
  const obj = { completed: arr.filter(f104690).length, total: arr.length };
  return obj;
};
