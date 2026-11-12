// Module ID: 13666
// Function ID: 13667
// Name: ConjureUsageSheet
// Dependencies: [19, 17, 7257, 21, 5243, 575, 5866, 7304, 504, 7885, 7847, 1113, 4079, 6274, 2]
// Exports: default

// Module 13666 (ConjureUsageSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4079 from "module_4079" /* 4079 */;
import Text_Text from "Text/Text" /* 5866 */;
import ConjureUsageTypes from "ConjureUsageTypes" /* 7304 */;
import react from "react" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 7257 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
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
  const obj2 = { style: tmp.label, children: hasOwnProperty(Text_Text.Text, { variant: "body-sm/medium", color: "text-default", children: label }) };
  items[0] = hasOwnProperty(View, obj2);
  const obj3 = { variant: "body-sm/normal", color: "text-muted", children: runeCountResult.toLocaleString() };
  const Text = Text_Text.Text;
  const obj4 = ConjureUsageTypes;
  runeCountResult = obj4.runeCount(usage);
  items[1] = hasOwnProperty(Text, obj3);
  return metroRequire(View, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { row: obj2, label: { flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/usage/native/ConjureUsageSheet.tsx");

export default function ConjureUsageSheet(projectId) {
  let BottomSheetTitleHeader;
  let Stack;
  let Text2;
  let formatToPlainString;
  let gMuw5d;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items2;
  let items3;
  let items4;
  let obj16;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let round;
  let runesFromUsdResult;
  let tmp2Result11;
  let tmp2Result12;
  let tmp2Result13;
  let tmp2Result14;
  projectId = projectId.projectId;
  const tmp = closure_7();
  const items = [ConjureChatStore];
  const items1 = [projectId];
  const obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ConjureChatStore.getProjectUsage(projectId), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const sumTokenUsage = projectId(7304).sumTokenUsage;
    projectId(7304);
    const tmp2Result8 = projectId(7304);
    const sumTokenUsageResult = tmp2Result8.sumTokenUsage(stateFromStores.orchestrator, stateFromStores.codegen);
    const tmp2Result9 = projectId(7304);
    const obj2 = { header: closure_5(BottomSheetTitleHeader, obj3), children: closure_5(View, obj4) };
    const sumTokenUsageResult1 = sumTokenUsage(sumTokenUsageResult, tmp2Result9.usageOrEmpty(stateFromStores.compaction));
    const ActionSheet = tmp2(7885).ActionSheet;
    obj3 = { title: intl.string(_modDef4079.p5EGzq) };
    BottomSheetTitleHeader = tmp2(7847).BottomSheetTitleHeader;
    intl = tmp2(1113).intl;
    obj4 = { children: closure_6(Stack, obj5) };
    obj5 = { direction: "vertical", spacing: nativeDefault.space.PX_12, children: items2 };
    Stack = tmp2(6274).Stack;
    const obj6 = { variant: "body-md/semibold", color: "text-default", children: formatToPlainString(gMuw5d, obj7) };
    const Text = tmp2(5866).Text;
    const intl2 = tmp2(1113).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj7 = { runes: runesFromUsdResult.toLocaleString() };
    gMuw5d = _modDef4079.gMuw5d;
    const tmp2Result10 = projectId(7304);
    runesFromUsdResult = tmp2Result10.runesFromUsd(stateFromStores.cost_usd);
    items2 = [closure_5(Text, obj6), , ];
    const obj8 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: items3 };
    const Stack2 = tmp2(6274).Stack;
    const obj9 = { label: intl3.string(_modDef4079.xtxP0e), usage: stateFromStores.orchestrator };
    intl3 = tmp2(1113).intl;
    items3 = [closure_5(RoleRow, obj9), , , , ];
    const obj10 = { label: intl4.string(_modDef4079["9Sj3SX"]), usage: stateFromStores.codegen };
    intl4 = tmp2(1113).intl;
    items3[1] = closure_5(RoleRow, obj10);
    const obj11 = { label: intl5.string(_modDef4079.ANCEo3), usage: tmp2Result11.usageOrEmpty(stateFromStores.compaction) };
    intl5 = tmp2(1113).intl;
    tmp2Result11 = projectId(7304);
    items3[2] = closure_5(RoleRow, obj11);
    const obj12 = { label: intl6.string(_modDef4079.ugL6D4), usage: tmp2Result12.usageOrEmpty(stateFromStores.classifier) };
    intl6 = tmp2(1113).intl;
    tmp2Result12 = projectId(7304);
    items3[3] = closure_5(RoleRow, obj12);
    const obj13 = { label: intl7.string(_modDef4079.DHr5On), usage: tmp2Result13.usageOrEmpty(stateFromStores.image) };
    intl7 = tmp2(1113).intl;
    tmp2Result13 = projectId(7304);
    items3[4] = closure_5(RoleRow, obj13);
    items2[1] = closure_6(Stack2, obj8);
    const obj14 = { style: tmp.row, children: items4 };
    const obj15 = { style: tmp.label, children: closure_5(Text2, obj16) };
    obj16 = { variant: "body-sm/normal", color: "text-muted", children: intl8.string(_modDef4079["8OUg09"]) };
    Text2 = tmp2(5866).Text;
    intl8 = tmp2(1113).intl;
    items4 = [closure_5(View, obj15), ];
    const _Math = Math;
    const obj17 = { variant: "body-sm/medium", color: "text-default", children: "" + round(100 * tmp2Result14.cacheHitRate(sumTokenUsageResult1)) + "%" };
    const Text3 = tmp2(5866).Text;
    round = Math.round;
    const _HermesInternal = HermesInternal;
    tmp2Result14 = projectId(7304);
    items4[1] = closure_5(Text3, obj17);
    items2[2] = closure_6(View, obj14);
    return closure_5(ActionSheet, obj2);
  }
};
export const CONJURE_USAGE_SHEET_KEY = "ConjureUsageSheet";
