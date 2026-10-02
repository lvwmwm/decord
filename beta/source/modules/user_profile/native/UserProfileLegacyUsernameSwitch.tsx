// Module ID: 14188
// Function ID: 14189
// Name: UserProfileLegacyUsernameSwitch
// Dependencies: [19, 21, 558, 576, 2027, 1127, 6405, 7613, 14163, 2]

// Module 14188 (UserProfileLegacyUsernameSwitch)
import Fragment from "Fragment" /* 21 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6405 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7613 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let legacyUsername;
  let pendingLegacyUsernameDisabled;
  let setting;
  let stringResult2;
  let obj = setting(576);
  const cResult = obj.c(11);
  ({ legacyUsername, pendingLegacyUsernameDisabled } = arg0);
  const LegacyUsernameDisabled = setting(2027).LegacyUsernameDisabled;
  setting = LegacyUsernameDisabled.useSetting();
  let tmp5 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp5 = pendingLegacyUsernameDisabled;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(setting(1127).t["3cWDuO"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp5) {
    let tmp9;
    let tmp11;
    let tmp13;
    if (cResult[2] === legacyUsername) {
      tmp9 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1127).intl;
      const stringResult1 = intl3.string(setting(1127).t["3cWDuO"]);
      cResult[4] = stringResult1;
      tmp11 = stringResult1;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== setting) {
      const fn = function o(arg0) {
        if (!arg0 === setting) {
          const obj3 = UserSettingsAccountActionCreators;
          const result = obj3.resetPendingLegacyUsernameDisabled();
        } else {
          const obj2 = { legacyUsernameDisabled: !arg0 };
          const obj = UserProfileSettingsActionCreators;
          obj.setPendingChanges(obj2);
        }
      };
      cResult[5] = setting;
      cResult[6] = fn;
      tmp13 = fn;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === !tmp5) {
      if (cResult[8] === tmp9) {
        let tmp14;
        if (cResult[9] === tmp13) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
    }
    const tmp16 = jsx(setting(14163).UserProfileEditFormSwitch, { value: !tmp5, label: first, subLabel: tmp9, accessibilityLabel: tmp11, onValueChange: tmp13 });
    cResult[7] = !tmp5;
    cResult[8] = tmp9;
    cResult[9] = tmp13;
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  const intl2 = tmp(1127).intl;
  if (tmp5) {
    stringResult2 = intl2.string(tmp(1127).t.eD6Yq0);
  } else {
    let obj3 = { username: legacyUsername };
    stringResult2 = intl2.formatToPlainString(tmp(1127).t.aYhclf, obj3);
  }
  cResult[1] = tmp5;
  cResult[2] = legacyUsername;
  cResult[3] = stringResult2;
  tmp9 = stringResult2;
}) : ((pendingLegacyUsernameDisabled) => {
  let intl;
  let intl3;
  let stringResult;
  pendingLegacyUsernameDisabled = pendingLegacyUsernameDisabled.pendingLegacyUsernameDisabled;
  let setting;
  const legacyUsername = pendingLegacyUsernameDisabled.legacyUsername;
  const LegacyUsernameDisabled = setting(2027).LegacyUsernameDisabled;
  setting = LegacyUsernameDisabled.useSetting();
  let tmp4 = setting;
  if (undefined !== pendingLegacyUsernameDisabled) {
    tmp4 = pendingLegacyUsernameDisabled;
  }
  let obj = {
    value: !tmp4,
    label: intl.string(tmp(1127).t["3cWDuO"]),
    subLabel: stringResult,
    accessibilityLabel: intl3.string(tmp(1127).t["3cWDuO"]),
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
  const UserProfileEditFormSwitch = tmp(14163).UserProfileEditFormSwitch;
  intl = tmp(1127).intl;
  const intl2 = tmp(1127).intl;
  const tmp5 = jsx;
  if (tmp4) {
    stringResult = intl2.string(tmp(1127).t.eD6Yq0);
  } else {
    let obj2 = { username: legacyUsername };
    stringResult = intl2.formatToPlainString(tmp(1127).t.aYhclf, obj2);
  }
  intl3 = tmp(1127).intl;
  return tmp5(UserProfileEditFormSwitch, obj);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx");

export default tmp3;
