// Module ID: 13835
// Function ID: 105939
// Name: ScheduleRuleRow
// Dependencies: [27, 653, 33, 4130, 689, 10222, 5165, 4126, 1212, 2198, 13796, 1456, 5503, 2]
// Exports: default

// Module 13835 (ScheduleRuleRow)
import { View } from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
function ScheduleRuleRow(rule) {
  let dependencyMap;
  let importDefault;
  let readOnly;
  rule = rule.rule;
  ({ teenId: importDefault, navigation: dependencyMap, readOnly } = rule);
  if (readOnly === undefined) {
    readOnly = false;
  }
  let obj = rule(10222);
  const scheduleRuleDateRange = obj.getScheduleRuleDateRange(rule);
  const obj2 = rule(10222);
  obj = { label: scheduleRuleDateRange, subLabel: rule(10222).formatDays(rule.days) };
  obj = { variant: "text-sm/medium", color: "text-subtle" };
  const intl = rule(1212).intl;
  const string = intl.string;
  const tmp5 = importDefault(2198);
  if (rule.enabled) {
    let stringResult = string(tmp5["8vDHRq"]);
  } else {
    stringResult = string(tmp5["4z9fN+"]);
  }
  obj.children = stringResult;
  obj.trailing = closure_5(rule(4126).Text, obj);
  obj.arrow = !readOnly;
  let fn;
  if (!readOnly) {
    fn = () => {
      let obj = { teenId: closure_1 };
      obj = {};
      const merged = Object.assign(rule);
      obj.rule = obj;
      return navigation.navigate(outer1_4.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    };
  }
  obj.onPress = fn;
  return closure_5(rule(5165).TableRow, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.header = obj;
obj.container = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx");

export default function FamilyCenterParentalControlsScreenTime(readOnly) {
  let flag = readOnly.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let id;
  const tmp = callback3();
  let obj = flag(id[10]);
  const selectedTeenUser = obj.useSelectedTeenUser();
  let obj1 = flag(id[11]);
  importDefault = obj1.useNavigation();
  id = undefined;
  if (null != selectedTeenUser) {
    id = selectedTeenUser.id;
  }
  let rules;
  if (null != selectedTeenUser) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (null != restrictedSchedule) {
      rules = restrictedSchedule.rules;
    }
  }
  if (null == rules) {
    rules = [];
  }
  const obj3 = flag(id[5]);
  let tmp4 = null;
  if (null != id) {
    obj = { style: tmp.container };
    obj = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.header };
    const intl = flag(id[8]).intl;
    obj.children = intl.string(importDefault(id[9])["72CmJd"]);
    const items = [callback(flag(id[7]).Text, obj), ];
    obj1 = { hasIcons: false, children: sortRulesByStartTimeResult.map((rule) => outer1_5(outer1_8, { rule, teenId: id, navigation: closure_1, readOnly: flag }, rule.ruleId)) };
    items[1] = callback(flag(id[12]).TableRowGroup, obj1);
    obj.children = items;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
};
