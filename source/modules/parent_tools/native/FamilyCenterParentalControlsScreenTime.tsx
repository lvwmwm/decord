// Module ID: 13721
// Function ID: 103783
// Name: ScheduleRuleRow
// Dependencies: []
// Exports: default

// Module 13721 (ScheduleRuleRow)
function ScheduleRuleRow(rule) {
  let readOnly;
  rule = rule.rule;
  const require = rule;
  ({ teenId: closure_1, navigation: closure_2, readOnly } = rule);
  if (readOnly === undefined) {
    readOnly = false;
  }
  let obj = require(dependencyMap[5]);
  const scheduleRuleDateRange = obj.getScheduleRuleDateRange(rule);
  const obj2 = require(dependencyMap[5]);
  obj = { label: scheduleRuleDateRange, subLabel: require(dependencyMap[5]).formatDays(rule.days) };
  obj = { cachedAt: true, edpbxy: true };
  const intl = require(dependencyMap[8]).intl;
  const string = intl.string;
  const tmp5 = importDefault(dependencyMap[9]);
  if (rule.enabled) {
    let stringResult = string(tmp5.8vDHRq);
  } else {
    stringResult = string(tmp5.4z9fN+);
  }
  obj.children = stringResult;
  obj.trailing = closure_5(require(dependencyMap[7]).Text, obj);
  obj.arrow = !readOnly;
  let fn;
  if (!readOnly) {
    fn = () => {
      let obj = { teenId: closure_1 };
      obj = {};
      const merged = Object.assign(rule);
      obj.rule = obj;
      return navigation.navigate(constants.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    };
  }
  obj.onPress = fn;
  return closure_5(require(dependencyMap[6]).TableRow, obj);
}
const View = require(dependencyMap[0]).View;
const UserSettingsSections = require(dependencyMap[1]).UserSettingsSections;
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = { paddingTop: importDefault(dependencyMap[4]).space.PX_24 };
obj.header = obj;
obj.container = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, gap: importDefault(dependencyMap[4]).space.PX_8 };
let closure_7 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[13]);
const result = _module2.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx");

export default function FamilyCenterParentalControlsScreenTime(readOnly) {
  let flag = readOnly.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  const require = flag;
  let importDefault;
  let dependencyMap;
  const tmp = callback3();
  let obj = require(dependencyMap[10]);
  const selectedTeenUser = obj.useSelectedTeenUser();
  let obj1 = require(dependencyMap[11]);
  importDefault = obj1.useNavigation();
  let id;
  if (null != selectedTeenUser) {
    id = selectedTeenUser.id;
  }
  dependencyMap = id;
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
  const obj3 = require(dependencyMap[5]);
  let tmp4 = null;
  if (null != id) {
    obj = { style: tmp.container };
    obj = { cachedAt: true, edpbxy: true, style: tmp.header };
    const intl = require(dependencyMap[8]).intl;
    obj.children = intl.string(importDefault(dependencyMap[9]).72CmJd);
    const items = [callback(require(dependencyMap[7]).Text, obj), ];
    obj1 = { hasIcons: false, children: sortRulesByStartTimeResult.map((rule) => callback(closure_8, { rule, teenId: id, navigation: closure_1, readOnly: flag }, rule.ruleId)) };
    items[1] = callback(require(dependencyMap[12]).TableRowGroup, obj1);
    obj.children = items;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
};
