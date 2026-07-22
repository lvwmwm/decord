// Module ID: 13495
// Function ID: 102404
// Name: UserProfileLegacyUsernameSwitch
// Dependencies: []
// Exports: default

// Module 13495 (UserProfileLegacyUsernameSwitch)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx");

export default function UserProfileLegacyUsernameSwitch(username) {
  const pendingLegacyUsernameDisabled = username.pendingLegacyUsernameDisabled;
  const LegacyUsernameDisabled = arg1(dependencyMap[2]).LegacyUsernameDisabled;
  const setting = LegacyUsernameDisabled.useSetting();
  const arg1 = setting;
  let tmp2 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp2 = pendingLegacyUsernameDisabled;
  }
  const obj = { value: !tmp2 };
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.3cWDuO);
  const intl2 = arg1(dependencyMap[4]).intl;
  obj.subLabel = intl2.formatToPlainString(arg1(dependencyMap[4]).t.aYhclf, { username: username.legacyUsername });
  obj.onValueChange = function onValueChange(arg0) {
    if (!arg0 === setting) {
      const result = setting(closure_1[5]).resetPendingLegacyUsernameDisabled();
      const obj3 = setting(closure_1[5]);
    } else {
      let obj = setting(closure_1[6]);
      obj = { legacyUsernameDisabled: !arg0 };
      obj.setPendingChanges(obj);
    }
  };
  return jsx(arg1(dependencyMap[3]).UserProfileEditFormSwitch, obj);
};
