// Module ID: 13677
// Function ID: 103550
// Name: FamilyCenterActivityTotal
// Dependencies: []
// Exports: default

// Module 13677 (FamilyCenterActivityTotal)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: importDefault(dependencyMap[4]).radii.md };
const merged = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_LEDGE);
obj.container = obj;
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityTotal.tsx");

export default function FamilyCenterActivityTotal(displayType) {
  displayType = displayType.displayType;
  let obj = arg1(dependencyMap[5]);
  const actionTotalsForDisplayType = obj.useActionTotalsForDisplayType(displayType);
  let obj1 = arg1(dependencyMap[5]);
  const formattedTotalForDisplayType = obj1.useFormattedTotalForDisplayType(displayType);
  let str = "text-muted";
  if (actionTotalsForDisplayType > 0) {
    str = "text-brand";
  }
  const tmp = callback2();
  const activityTypeTextConfigs = arg1(dependencyMap[6]).getActivityTypeTextConfigs();
  const value = activityTypeTextConfigs.get(displayType);
  let tooltipHeaderResult;
  if (null != value) {
    tooltipHeaderResult = value.tooltipHeader();
  }
  obj = { style: tmp.container };
  obj = { variant: "heading-xxl/medium", color: str };
  let num = 0;
  if (null != formattedTotalForDisplayType) {
    num = formattedTotalForDisplayType;
  }
  obj.children = num;
  const items = [callback(arg1(dependencyMap[7]).Text, obj), ];
  obj1 = { variant: "text-sm/semibold", children: tooltipHeaderResult };
  items[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  obj.children = items;
  return closure_4(View, obj);
};
