// Module ID: 13660
// Function ID: 104884
// Name: UserProfileLegacyUsernameSwitch
// Dependencies: [31, 33, 3803, 13640, 1212, 9266, 7933, 2]
// Exports: default

// Module 13660 (UserProfileLegacyUsernameSwitch)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("explicitContentFromProto").fileFinishedImporting("modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx");

export default function UserProfileLegacyUsernameSwitch(username) {
  const pendingLegacyUsernameDisabled = username.pendingLegacyUsernameDisabled;
  const LegacyUsernameDisabled = setting(3803).LegacyUsernameDisabled;
  setting = LegacyUsernameDisabled.useSetting();
  let tmp2 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp2 = pendingLegacyUsernameDisabled;
  }
  let obj = { value: !tmp2 };
  const intl = setting(1212).intl;
  obj.label = intl.string(setting(1212).t["3cWDuO"]);
  const intl2 = setting(1212).intl;
  obj.subLabel = intl2.formatToPlainString(setting(1212).t.aYhclf, { username: username.legacyUsername });
  obj.onValueChange = function onValueChange(arg0) {
    if (!arg0 === setting) {
      const result = setting(outer1_1[5]).resetPendingLegacyUsernameDisabled();
      const obj3 = setting(outer1_1[5]);
    } else {
      let obj = setting(outer1_1[6]);
      obj = { legacyUsernameDisabled: !arg0 };
      obj.setPendingChanges(obj);
    }
  };
  return jsx(setting(13640).UserProfileEditFormSwitch, { value: !tmp2 });
};
