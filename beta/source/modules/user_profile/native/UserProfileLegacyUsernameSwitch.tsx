// Module ID: 14200
// Function ID: 14201
// Name: UserProfileLegacyUsernameSwitch
// Dependencies: [19, 21, 2021, 14175, 1115, 6405, 7609, 2]
// Exports: default

// Module 14200 (UserProfileLegacyUsernameSwitch)
import Fragment from "Fragment" /* 21 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6405 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7609 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx");

export default function UserProfileLegacyUsernameSwitch(pendingLegacyUsernameDisabled) {
  let intl;
  let intl3;
  let stringResult;
  pendingLegacyUsernameDisabled = pendingLegacyUsernameDisabled.pendingLegacyUsernameDisabled;
  let setting;
  const legacyUsername = pendingLegacyUsernameDisabled.legacyUsername;
  const LegacyUsernameDisabled = setting(2021).LegacyUsernameDisabled;
  setting = LegacyUsernameDisabled.useSetting();
  let tmp4 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp4 = pendingLegacyUsernameDisabled;
  }
  let obj = {
    value: !tmp4,
    label: intl.string(tmp(1115).t["3cWDuO"]),
    subLabel: stringResult,
    accessibilityLabel: intl3.string(tmp(1115).t["3cWDuO"]),
    onValueChange(arg0) {
      if (!arg0 === setting) {
        const obj3 = UserSettingsAccountActionCreators;
        const result = obj3.resetPendingLegacyUsernameDisabled();
      } else {
        const obj2 = { legacyUsernameDisabled: !arg0 };
        const obj = UserProfileSettingsActionCreators;
        obj.setPendingChanges(obj2);
      }
    }
  };
  const UserProfileEditFormSwitch = tmp(14175).UserProfileEditFormSwitch;
  intl = tmp(1115).intl;
  const intl2 = tmp(1115).intl;
  const tmp5 = jsx;
  if (tmp4) {
    stringResult = intl2.string(tmp(1115).t.eD6Yq0);
  } else {
    let obj2 = { username: legacyUsername };
    stringResult = intl2.formatToPlainString(tmp(1115).t.aYhclf, obj2);
  }
  intl3 = tmp(1115).intl;
  return tmp5(UserProfileEditFormSwitch, obj);
};
