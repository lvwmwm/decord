// Module ID: 17188
// Function ID: 17189
// Name: FamilyCenterParentalControlsScreenTime
// Dependencies: [17, 1072, 21, 5170, 575, 11175, 7071, 5783, 1113, 2664, 17146, 1499, 7159, 2]
// Exports: default

// Module 17188 (FamilyCenterParentalControlsScreenTime)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import _modDef2664 from "module_2664" /* 2664 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
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
  let obj = rule(11175);
  const scheduleRuleDateRange = obj.getScheduleRuleDateRange(rule);
  let obj2 = rule(11175);
  const obj3 = { label: scheduleRuleDateRange, subLabel: obj2.formatDays(rule.days), trailing: closure_5(Text, { variant: "body-sm/medium", color: "text-subtle", children: stringResult }), arrow: !readOnly, onPress: fn };
  const TableRow = rule(7071).TableRow;
  Text = rule(5783).Text;
  const enabled = rule.enabled;
  const intl = rule(1113).intl;
  const string = intl.string;
  const tmp4 = _modDef2664;
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
    const obj4 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.header, children: intl.string(require("module_2664")["72CmJd"]) };
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
