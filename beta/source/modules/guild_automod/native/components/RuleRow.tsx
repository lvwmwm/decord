// Module ID: 17313
// Function ID: 17314
// Name: RuleRow
// Dependencies: [19, 17, 11341, 21, 4836, 576, 17314, 4832, 4531, 17316, 17311, 17310, 5281, 1115, 5917, 2]
// Exports: default

// Module 17313 (RuleRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 11341 */;
import getActionInfo from "getActionInfo" /* 17314 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp2;
const Text_Text = tmp2(4832);
function ActionPill(arg0) {
  let action;
  let actionType;
  let headerText;
  let icon;
  let items;
  let items1;
  let triggerType;
  ({ actionType, action, triggerType } = arg0);
  const tmp = closure_8();
  const obj = getActionInfo;
  const actionInfo = obj.getActionInfo(actionType, action, triggerType);
  if (null == actionInfo) {
    return null;
  } else {
    const helperText = actionInfo.helperText;
    const obj2 = { style: tmp.actionPill, children: items };
    ({ headerText, icon } = actionInfo);
    const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    items = [hasOwnProperty(icon, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.actionText, children: items1 };
    items1 = [headerText, , ];
    let str = null;
    const Text = Text_Text.Text;
    const tmp6 = View;
    if (null != helperText) {
      str = " ";
    }
    items1[1] = str;
    items1[2] = helperText;
    items[1] = metroRequire(Text, obj4);
    return metroRequire(tmp6, obj2);
  }
}
const View = react_native.View;
const AutomodTriggerType = Constants.AutomodTriggerType;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { actions: obj2, actionPill: obj3, actionText: { textTransform: "lowercase" } };
obj2 = { marginTop: nativeDefault.space.PX_4, flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/RuleRow.tsx");

export default function RuleRow(triggerType) {
  let Icon;
  let descriptionText;
  let headerSubtext;
  let headerText;
  let icon;
  let intl;
  let items;
  let items1;
  let obj12;
  let onPress;
  let rule;
  triggerType = triggerType.triggerType;
  ({ rule, onPress } = triggerType);
  const tmp = closure_8();
  let obj = triggerType(4531);
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const obj2 = triggerType(4531);
  const token1 = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  const obj3 = triggerType(17316);
  const ruleInfo = obj3.getRuleInfo(triggerType, rule);
  if (null == ruleInfo) {
    return null;
  } else {
    let mapped;
    let tmp16Result;
    ({ headerText, headerSubtext, icon, descriptionText } = ruleInfo);
    if (null != rule) {
      const tmp2Result = triggerType(17311);
      const ruleActionsInOrder = tmp2Result.getRuleActionsInOrder(rule);
      mapped = ruleActionsInOrder.map((actionType) => {
        const obj = { actionType: actionType.type, action: actionType, triggerType };
        return hasOwnProperty(ActionPill, obj, actionType.type);
      });
    } else {
      const tmp2Result2 = triggerType(17310);
      const availableActionTypes = tmp2Result2.getAvailableActionTypes(triggerType);
      mapped = availableActionTypes.map((actionType) => {
        const obj = { actionType, triggerType };
        return hasOwnProperty(ActionPill, obj, actionType);
      });
    }
    let tmp7 = null;
    if (mapped.length > 0) {
      const obj4 = { style: tmp.actions, children: mapped };
      tmp7 = closure_5(View, obj4);
    }
    let tmp10 = tmp7;
    if (null == rule) {
      const obj5 = { children: items };
      const obj6 = { variant: "text-xs/medium", color: "text-subtle", includeFontPadding: true, children: descriptionText };
      items = [closure_5(triggerType(4832).Text, obj6), tmp7];
      tmp10 = closure_6(closure_7, obj5);
    }
    if (null == rule) {
      let oRs6mG;
      const Button = tmp2(5281).Button;
      const intl2 = tmp2(1115).intl;
      const string = intl2.string;
      const tmp16 = closure_5;
      if (triggerType === AutomodTriggerType.KEYWORD) {
        oRs6mG = tmp2(1115).t.CumH4u;
      } else {
        oRs6mG = tmp2(1115).t.oRs6mG;
      }
      const obj7 = { accessibilityRole: "none", size: "sm", variant: "secondary", text: string(oRs6mG), onPress };
      tmp16Result = tmp16(Button, obj7);
    } else if (!rule.enabled) {
      const obj8 = { text: intl.string(triggerType(1115).t.Yl1D84) };
      const TrailingText = tmp2(5917).TableRow.TrailingText;
      intl = tmp2(1115).intl;
      tmp16Result = closure_5(TrailingText, obj8);
    }
    let tmp18 = headerText;
    if ("" !== headerSubtext) {
      const obj9 = { variant: token, color: token1, includeFontPadding: true, children: items1 };
      items1 = [headerText, " ", ];
      const Text = tmp2(4832).Text;
      const obj10 = { variant: "text-sm/normal", color: "interactive-text-default", children: headerSubtext };
      items1[2] = closure_5(triggerType(4832).Text, obj10);
      tmp18 = closure_6(Text, obj9);
    }
    const obj11 = { label: tmp18, subLabel: tmp10, icon: closure_5(Icon, obj12), trailing: tmp16Result, arrow: null != rule, onPress };
    const TableRow = tmp2(5917).TableRow;
    obj12 = {};
    Icon = tmp2(5917).TableRow.Icon;
    const merged = Object.assign(icon);
    return closure_5(TableRow, obj11);
  }
};
