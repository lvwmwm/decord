// Module ID: 16490
// Function ID: 128476
// Name: FormTrialActiveUserLimitPicker
// Dependencies: [31, 33, 16491, 12955, 1212, 4098, 8426, 1934, 2]
// Exports: default

// Module 16490 (FormTrialActiveUserLimitPicker)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useTrialActiveUserLimitOptions").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx");

export default function FormTrialActiveUserLimitPicker(activeTrialUserlimit) {
  const str = activeTrialUserlimit.activeTrialUserlimit;
  const onChange = activeTrialUserlimit.onChange;
  const dependencyMap = onChange(16491)();
  let obj = {};
  if (null == str) {
    let intl = str(1212).intl;
    let stringResult = intl.string(str(1212).t.zHfL6o);
  } else {
    stringResult = str.toString();
  }
  obj.label = stringResult;
  obj.onPress = function onPress() {
    let obj = onChange(paths[5]);
    obj = {};
    const intl = str(paths[4]).intl;
    obj.title = intl.string(str(paths[4]).t["/JD9oe"]);
    obj.items = paths;
    obj.onItemSelect = function onItemSelect(arg0) {
      outer1_1(arg0);
      onChange(table[5]).hideActionSheet("GuildRoleSubscriptionTrialActiveUserLimitSelect");
    };
    obj.selectedItem = str;
    obj.hasIcons = false;
    obj.openLazy(str(paths[7])(paths[6], paths.paths), "GuildRoleSubscriptionTrialActiveUserLimitSelect", obj);
  };
  obj.disabled = activeTrialUserlimit.disabled;
  return jsx(onChange(12955), {});
};
