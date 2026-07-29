// Module ID: 13737
// Function ID: 13738
// Name: UserProfileLegacyUsernameSwitch
// Dependencies: [19, 21, 3862, 13717, 1236, 9226, 7941, 2]
// Exports: default

// Module 13737 (UserProfileLegacyUsernameSwitch)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("explicitContentFromProto").fileFinishedImporting("modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx");

export default function UserProfileLegacyUsernameSwitch(username) {
  const pendingLegacyUsernameDisabled = username.pendingLegacyUsernameDisabled;
  let setting;
  const LegacyUsernameDisabled = setting(3862).LegacyUsernameDisabled;
  setting = LegacyUsernameDisabled.useSetting();
  let tmp4 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp4 = pendingLegacyUsernameDisabled;
  }
  let obj = { value: !tmp4, label: null, subLabel: null, onValueChange: null };
  const intl = tmp(1236).intl;
  obj[1] = intl.string(setting(1236).t["3cWDuO"]);
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.formatToPlainString(setting(1236).t.aYhclf, { username: username.legacyUsername });
  obj[3] = function onValueChange(arg0) {
    if (!arg0 === setting) {
      const result = setting(outer1_1[5]).resetPendingLegacyUsernameDisabled();
      const obj3 = setting(outer1_1[5]);
    } else {
      let obj = setting(outer1_1[6]);
      obj = { legacyUsernameDisabled: null };
      obj[0] = !arg0;
      obj.setPendingChanges(obj);
    }
  };
  return jsx(setting(13717).UserProfileEditFormSwitch, { value: !tmp4, label: null, subLabel: null, onValueChange: null });
};
