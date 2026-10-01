// Module ID: 16400
// Function ID: 16401
// Name: VibegrationsUsageSheet
// Dependencies: [19, 17, 12643, 21, 4836, 576, 4832, 5371, 504, 6618, 6570, 1115, 3715, 5279, 2]
// Exports: default

// Module 16400 (VibegrationsUsageSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef3715 from "module_3715" /* 3715 */;
import Text_Text from "Text/Text" /* 4832 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5371 */;
import react from "react" /* 19 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 12643 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
function RoleRow(arg0) {
  let items;
  let label;
  let runeCountResult;
  let usage;
  ({ label, usage } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.row, children: items };
  items = [, ];
  const obj2 = { style: tmp.label, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label }) };
  items[0] = hasOwnProperty(View, obj2);
  const obj3 = { variant: "text-sm/normal", color: "text-muted", children: runeCountResult.toLocaleString() };
  const Text = Text_Text.Text;
  const obj4 = VibegrationsTypes;
  runeCountResult = obj4.runeCount(usage);
  items[1] = hasOwnProperty(Text, obj3);
  return metroRequire(View, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { row: obj2, label: { flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsUsageSheet.tsx");

export default function VibegrationsUsageSheet(projectId) {
  let BottomSheetTitleHeader;
  let Stack;
  let Text2;
  let formatToPlainString;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items2;
  let items3;
  let items4;
  let obj15;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let round;
  let runesFromUsdResult;
  let tmp2Result10;
  let tmp2Result11;
  let tmp2Result12;
  let v4PFO2p;
  projectId = projectId.projectId;
  const tmp = closure_7();
  const items = [VibegrationsChatStore];
  const items1 = [projectId];
  const obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => VibegrationsChatStore.getProjectUsage(projectId), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const sumTokenUsage = projectId(5371).sumTokenUsage;
    projectId(5371);
    const tmp2Result7 = projectId(5371);
    const sumTokenUsageResult = tmp2Result7.sumTokenUsage(stateFromStores.orchestrator, stateFromStores.codegen);
    const tmp2Result8 = projectId(5371);
    const obj2 = { header: closure_5(BottomSheetTitleHeader, obj3), children: closure_5(View, obj4) };
    const sumTokenUsageResult1 = sumTokenUsage(sumTokenUsageResult, tmp2Result8.usageOrEmpty(stateFromStores.compaction));
    const ActionSheet = tmp2(6618).ActionSheet;
    obj3 = { title: intl.string(_modDef3715["9yoLWZ"]) };
    BottomSheetTitleHeader = tmp2(6570).BottomSheetTitleHeader;
    intl = tmp2(1115).intl;
    obj4 = { children: closure_6(Stack, obj5) };
    obj5 = { direction: "vertical", spacing: nativeDefault.space.PX_12, children: items2 };
    Stack = tmp2(5279).Stack;
    const obj6 = { variant: "text-md/semibold", color: "text-default", children: formatToPlainString(v4PFO2p, obj7) };
    const Text = tmp2(4832).Text;
    const intl2 = tmp2(1115).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj7 = { runes: runesFromUsdResult.toLocaleString() };
    v4PFO2p = _modDef3715["4PFO2p"];
    const tmp2Result9 = projectId(5371);
    runesFromUsdResult = tmp2Result9.runesFromUsd(stateFromStores.cost_usd);
    items2 = [closure_5(Text, obj6), , ];
    const obj8 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: items3 };
    const Stack2 = tmp2(5279).Stack;
    const obj9 = { label: intl3.string(_modDef3715.hk4jJr), usage: stateFromStores.orchestrator };
    intl3 = tmp2(1115).intl;
    items3 = [closure_5(RoleRow, obj9), , , ];
    const obj10 = { label: intl4.string(_modDef3715.R9aduM), usage: stateFromStores.codegen };
    intl4 = tmp2(1115).intl;
    items3[1] = closure_5(RoleRow, obj10);
    const obj11 = { label: intl5.string(_modDef3715.Tj6b30), usage: tmp2Result10.usageOrEmpty(stateFromStores.compaction) };
    intl5 = tmp2(1115).intl;
    tmp2Result10 = projectId(5371);
    items3[2] = closure_5(RoleRow, obj11);
    const obj12 = { label: intl6.string(_modDef3715.vVUMwj), usage: tmp2Result11.usageOrEmpty(stateFromStores.classifier) };
    intl6 = tmp2(1115).intl;
    tmp2Result11 = projectId(5371);
    items3[3] = closure_5(RoleRow, obj12);
    items2[1] = closure_6(Stack2, obj8);
    const obj13 = { style: tmp.row, children: items4 };
    const obj14 = { style: tmp.label, children: closure_5(Text2, obj15) };
    obj15 = { variant: "text-sm/normal", color: "text-muted", children: intl7.string(_modDef3715["kILb+R"]) };
    Text2 = tmp2(4832).Text;
    intl7 = tmp2(1115).intl;
    items4 = [closure_5(View, obj14), ];
    const _Math = Math;
    const obj16 = { variant: "text-sm/medium", color: "text-default", children: "" + round(100 * tmp2Result12.cacheHitRate(sumTokenUsageResult1)) + "%" };
    const Text3 = tmp2(4832).Text;
    round = Math.round;
    const _HermesInternal = HermesInternal;
    tmp2Result12 = projectId(5371);
    items4[1] = closure_5(Text3, obj16);
    items2[2] = closure_6(View, obj13);
    return closure_5(ActionSheet, obj2);
  }
};
export const VIBEGRATIONS_USAGE_SHEET_KEY = "VibegrationsUsageSheet";
