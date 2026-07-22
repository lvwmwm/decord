// Module ID: 16326
// Function ID: 125978
// Name: FormTrialActiveUserLimitPicker
// Dependencies: [699334656, 131072, 552599552, 57, 31, 27, 1348, 5067, 3756]
// Exports: default

// Module 16326 (FormTrialActiveUserLimitPicker)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx");

export default function FormTrialActiveUserLimitPicker(activeTrialUserlimit) {
  const arg1 = str;
  const importDefault = activeTrialUserlimit.onChange;
  closure_2 = importDefault(closure_2[2])();
  const obj = {};
  if (null == activeTrialUserlimit.activeTrialUserlimit) {
    const intl = arg1(closure_2[4]).intl;
    let stringResult = intl.string(arg1(closure_2[4]).t.zHfL6o);
  } else {
    stringResult = str.toString();
  }
  obj.label = stringResult;
  obj.onPress = function onPress() {
    let obj = onChange(paths[5]);
    obj = {};
    const intl = str(paths[4]).intl;
    obj.title = intl.string(str(paths[4]).t./JD9oe);
    obj.items = paths;
    obj.onItemSelect = function onItemSelect(arg0) {
      callback(arg0);
      callback(closure_2[5]).hideActionSheet("GuildRoleSubscriptionTrialActiveUserLimitSelect");
    };
    obj.selectedItem = str;
    obj.hasIcons = false;
    obj.openLazy(str(paths[7])(paths[6], paths.paths), "GuildRoleSubscriptionTrialActiveUserLimitSelect", obj);
  };
  obj.disabled = activeTrialUserlimit.disabled;
  return jsx(importDefault(closure_2[3]), obj);
};
