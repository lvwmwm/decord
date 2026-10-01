// Module ID: 14431
// Function ID: 14432
// Name: FamilyCenterActivityTotal
// Dependencies: [19, 17, 21, 4836, 576, 14430, 7012, 4832, 2]
// Exports: default

// Module 14431 (FamilyCenterActivityTotal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7012 */;
import useFamilyCenterActivities from "useFamilyCenterActivities" /* 14430 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2 };
obj2 = { display: "flex", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, padding: 12, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LEDGE);
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityTotal.tsx");

export default function FamilyCenterActivityTotal(displayType) {
  let items;
  displayType = displayType.displayType;
  const tmp = closure_5();
  const obj = useFamilyCenterActivities;
  const actionTotalsForDisplayType = obj.useActionTotalsForDisplayType(displayType);
  const obj2 = useFamilyCenterActivities;
  let num = obj2.useFormattedTotalForDisplayType(displayType);
  let str = "text-muted";
  if (actionTotalsForDisplayType > 0) {
    str = "text-brand";
  }
  const tmp2Result = FamilyCenterUtils;
  const activityTypeTextConfigs = tmp2Result.getActivityTypeTextConfigs();
  const value = activityTypeTextConfigs.get(displayType);
  let tooltipHeaderResult;
  if (value != null) {
    tooltipHeaderResult = value.tooltipHeader();
  }
  const obj3 = { style: tmp.container, children: items };
  const obj4 = { variant: "heading-xxl/medium", color: str, children: num };
  const Text = tmp2(4832).Text;
  const tmp6 = React3;
  const tmp7 = View;
  if (num == null) {
    num = 0;
  }
  items = [_false(Text, obj4), _false(Text_Text.Text, { variant: "text-sm/semibold", children: tooltipHeaderResult })];
  return tmp6(tmp7, obj3);
};
