// Module ID: 14468
// Function ID: 14469
// Name: FamilyCenterParentalControlsScreenTime
// Dependencies: [17, 1074, 21, 4836, 576, 9543, 5917, 4832, 1115, 2487, 14429, 1485, 5999, 2]
// Exports: default

// Module 14468 (FamilyCenterParentalControlsScreenTime)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import _modDef2487 from "module_2487" /* 2487 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function ScheduleRuleRow(rule) {
  let Text;
  let fn;
  let readOnly;
  let stringResult;
  let teenId;
  rule = rule.rule;
  ({ teenId: importDefault, navigation: dependencyMap, readOnly } = rule);
  if (readOnly === undefined) {
    readOnly = false;
  }
  let obj = rule(9543);
  const scheduleRuleDateRange = obj.getScheduleRuleDateRange(rule);
  let obj2 = rule(9543);
  const obj3 = { label: scheduleRuleDateRange, subLabel: obj2.formatDays(rule.days), trailing: closure_5(Text, { variant: "text-sm/medium", color: "text-subtle", children: stringResult }), arrow: !readOnly, onPress: fn };
  const TableRow = rule(5917).TableRow;
  Text = rule(4832).Text;
  const enabled = rule.enabled;
  const intl = rule(1115).intl;
  const string = intl.string;
  const tmp4 = _modDef2487;
  if (enabled) {
    stringResult = string(tmp4["8vDHRq"]);
  } else {
    stringResult = string(tmp4["4z9fN+"]);
  }
  fn = undefined;
  if (!readOnly) {
    fn = () => {
      let obj2;
      const navigate = dependencyMap.navigate;
      const FAMILY_CENTER_SCHEDULE_DOWNTIME = UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME;
      const obj = { teenId: importDefault, rule: obj2 };
      obj2 = {};
      const merged = Object.assign(rule);
      return navigate(FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    };
  }
  return closure_5(TableRow, obj3);
}
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, container: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx");

export default function FamilyCenterParentalControlsScreenTime(readOnly) {
  let intl;
  let items;
  let flag = readOnly.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  let id;
  const tmp = closure_7();
  let obj = flag(id[10]);
  const selectedTeenUser = obj.useSelectedTeenUser();
  const obj2 = flag(id[11]);
  importDefault = obj2.useNavigation();
  id = undefined;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  let rules;
  if (selectedTeenUser != null) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (restrictedSchedule != null) {
      rules = restrictedSchedule.rules;
    }
  }
  if (rules == null) {
    rules = [];
  }
  let tmp6 = null;
  const tmp2Result = flag(id[5]);
  const sortRulesByStartTimeResult = tmp2Result.sortRulesByStartTime(rules);
  if (null != id) {
    const obj3 = { style: tmp.container, children: items };
    const obj4 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.header, children: intl.string(require("module_2487")["72CmJd"]) };
    const Text = tmp2(tmp3[7]).Text;
    intl = tmp2(tmp3[8]).intl;
    items = [closure_5(Text, obj4), ];
    const obj5 = {
      hasIcons: false,
      children: sortRulesByStartTimeResult.map((rule) => {
          const obj = { rule, teenId: id, navigation, readOnly: flag };
          return hasOwnProperty(ScheduleRuleRow, obj, rule.ruleId);
        })
    };
    const TableRowGroup = tmp2(tmp3[12]).TableRowGroup;
    items[1] = closure_5(TableRowGroup, obj5);
    tmp6 = closure_6(View, obj3);
  }
  return tmp6;
};
