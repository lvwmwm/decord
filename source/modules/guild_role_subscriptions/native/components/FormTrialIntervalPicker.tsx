// Module ID: 16325
// Function ID: 125974
// Name: FormTrialIntervalPicker
// Dependencies: []
// Exports: default

// Module 16325 (FormTrialIntervalPicker)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx");

export default function FormTrialIntervalPicker(interval) {
  interval = interval.interval;
  const arg1 = interval;
  ({ onChange: closure_1, trialIntervalOptions: closure_2 } = interval);
  const obj = {};
  if (null == interval) {
    const intl = arg1(dependencyMap[3]).intl;
    let stringResult = intl.string(arg1(dependencyMap[3]).t.WZG1BU);
  } else {
    stringResult = arg1(dependencyMap[4]).formatPlanIntervalDuration(interval);
    const obj2 = arg1(dependencyMap[4]);
  }
  obj.label = stringResult;
  obj.onPress = function onPress() {
    let obj = callback(paths[5]);
    obj = {};
    const intl = interval(paths[3]).intl;
    obj.title = intl.string(interval(paths[3]).t.m1KuWd);
    obj.items = paths;
    obj.onItemSelect = function onItemSelect(arg0) {
      if (null != callback) {
        callback(arg0);
      }
      callback(closure_2[5]).hideActionSheet("GuildRoleSubscriptionTrialIntervalSelect");
    };
    let tmp2 = null;
    if (null != interval) {
      tmp2 = interval;
    }
    obj.selectedItem = tmp2;
    obj.hasIcons = false;
    obj.openLazy(interval(paths[7])(paths[6], paths.paths), "GuildRoleSubscriptionTrialIntervalSelect", obj);
  };
  obj.disabled = interval.disabled;
  return jsx(importDefault(dependencyMap[2]), obj);
};
