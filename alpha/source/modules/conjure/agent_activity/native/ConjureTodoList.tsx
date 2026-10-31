// Module ID: 12717
// Function ID: 12718
// Name: ConjureTodoList
// Dependencies: [19, 17, 21, 5014, 575, 1113, 3868, 12601, 12622, 5624, 6989, 12586, 12718, 2]
// Exports: default

// Module 12717 (ConjureTodoList)
import nativeDefault from "native" /* 575 */;
import intl9 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import Text_Text from "Text/Text" /* 5624 */;
import ConjureTodoState from "ConjureTodoState" /* 12586 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12601 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12622 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let size2;
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
          const obj = { style: items, accessibilityRole: "image", accessibilityLabel: intl.formatToPlainString(_modDef3868.TVvPCJ, obj3) };
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
      let obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: intl.formatToPlainString(items(3868).SPGdDc, obj4), children: "+" + overflow };
      const Text = tmp2(5624).Text;
      intl = tmp2(1113).intl;
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
        stringResult = intl4.string(_modDef3868.KvBdun);
      } else if ("in_progress" === status) {
        const intl3 = intl9.intl;
        stringResult = intl3.string(_modDef3868["m5G9+S"]);
      } else if ("unfinished" === status) {
        const intl2 = intl9.intl;
        stringResult = intl2.string(_modDef3868.lRpwhD);
      } else {
        const intl = intl9.intl;
        stringResult = intl.string(_modDef3868.sPGeWi);
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
    stringResult1 = intl8.string(_modDef3868.KvBdun);
    tmp21 = require;
  } else if ("in_progress" === status) {
    const intl7 = intl9.intl;
    stringResult1 = intl7.string(_modDef3868["m5G9+S"]);
    tmp21 = require;
  } else if ("unfinished" === status) {
    const intl6 = intl9.intl;
    stringResult1 = intl6.string(_modDef3868.lRpwhD);
    tmp21 = require;
  } else {
    tmp21 = require;
    const intl5 = intl9.intl;
    stringResult1 = intl5.string(_modDef3868.sPGeWi);
  }
  obj = { accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult1, children: metroRequire(tmp21(6989).FormCheckbox, { checked: "completed" === status }) };
  ({ accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult1, children: metroRequire(tmp21(6989).FormCheckbox, { checked: "completed" === status }) });
}
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, row: obj3, marker: size, markerUnfinished: obj4, markerInProgress: { borderWidth: 0 }, markerSpinner: size1, text: { flexShrink: 1 }, agents: obj5, agentMark: size2, agentMarkTint0: { backgroundColor: nativeDefault.colors.TEXT_BRAND }, agentMarkTint1: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE }, agentMarkTint2: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING }, agentMarkTint3: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO }, textCompleted: { textDecorationLine: "line-through" } };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
obj4 = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
({ backgroundColor: nativeDefault.colors.TEXT_BRAND });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO });
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureTodoList.tsx");

export default function ConjureTodoList(announceProgress) {
  let ConjureNativeCollapsibleMeta;
  let agents;
  let closure_3;
  let completed;
  let formatToPlainStringResult1;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let obj3;
  let provisional;
  let row;
  let str;
  let todos;
  let total;
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
  let obj = agents(12586);
  ({ completed, total } = obj.todoProgress(todos));
  let items = [agents];
  obj.todoProgress(todos);
  react = react.useMemo(() => {
    let items = agents;
    const groupAgentsByTodo = ConjureTodoAgents.groupAgentsByTodo;
    ConjureTodoAgents;
    if (agents == null) {
      items = [];
    }
    return groupAgentsByTodo(items);
  }, items);
  if (0 === total) {
    let tmp5 = null;
    return null;
  }
  const intl = tmp2(1113).intl;
  const formatToPlainStringResult = intl.formatToPlainString(flag2(3868)["P/I+JW"], { completed, total });
  const intl2 = tmp2(1113).intl;
  let tmp9 = closure_6;
  let obj2 = { title: intl3.string(flag2(3868).RtzECX), meta: tmp9(ConjureNativeCollapsibleMeta, { accessibilityLiveRegion: str, accessibilityLabel: formatToPlainStringResult1, children: formatToPlainStringResult }), showHeader: total > 0, superseded: flag3, expanded: flag4, onToggleExpanded, showLabel: intl4.string(tmp6(3868).RKyN9q), hideLabel: intl5.string(tmp6(3868).xydHoj), children: closure_7(closure_5, obj3) };
  formatToPlainStringResult1 = intl2.formatToPlainString(flag2(3868)["7tzwKB"], { completed, total });
  const tmp10 = flag2(12718);
  intl3 = tmp2(1113).intl;
  str = "none";
  ConjureNativeCollapsibleMeta = tmp2(12718).ConjureNativeCollapsibleMeta;
  if (flag) {
    str = "none";
    if (!flag3) {
      str = "polite";
    }
  }
  intl4 = tmp2(1113).intl;
  intl5 = tmp2(1113).intl;
  obj3 = { style: tmp.list, children: items1 };
  items1 = [
    todos.map((status) => {
      let items;
      let items1;
      let str;
      let tmpResult;
      const obj = ConjureTodoState;
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
      tmpResult = ConjureTodoState;
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
  let tmp11Result = null;
  if (null != provisional) {
    tmp11Result = null;
    if ("" !== provisional) {
      let obj4 = { style: tmp.row, children: items2 };
      items2 = [tmp9(TodoMarker, { status: "pending" }), ];
      const obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
      items2[1] = tmp9(agents(5624).Text, obj5);
      tmp11Result = tmp11(tmp12, obj4);
    }
  }
  items1[1] = tmp11Result;
  return tmp9(tmp10, obj2);
};
