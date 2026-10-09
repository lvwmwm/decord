// Module ID: 14899
// Function ID: 14900
// Name: AccountUsernameSetting
// Dependencies: [19, 1390, 7974, 1085, 21, 558, 576, 4923, 504, 11412, 5087, 10629, 1126, 14900, 2]

// Module 14899 (AccountUsernameSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4923 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import AutomodQuarantineUtils from "AutomodQuarantineUtils" /* 11412 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const get_initialized = tmp(504);
const Text_Text = tmp(5087);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountUsernameSettingTrailing() {
  let currentUser;
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      const obj = UserUtilsDefault;
      return obj.getUserTag(currentUser.getCurrentUser(), { decoration: "never" });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useAccountUsernameSettingTrailing() {
  let currentUser;
  let obj = get_initialized;
  const items = [UserStore];
  return obj.useStateFromStores(items, () => {
    const obj = UserUtilsDefault;
    return obj.getUserTag(currentUser.getCurrentUser(), { decoration: "never" });
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountUsernameSettingDescription() {
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = AutomodQuarantineUtils;
  const guildAutomodProfileQuarantineErrors = obj2.useGuildAutomodProfileQuarantineErrors();
  let first;
  if (guildAutomodProfileQuarantineErrors != null) {
    const nick = guildAutomodProfileQuarantineErrors.nick;
    if (nick != null) {
      first = nick[0];
    }
  }
  let tmp6 = null;
  if (null != first) {
    let tmp7;
    if (cResult[0] !== first) {
      const tmp9 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: first });
      cResult[0] = first;
      cResult[1] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[1];
    }
    tmp6 = tmp7;
  }
  return tmp6;
}) : (function useAccountUsernameSettingDescription() {
  const obj = AutomodQuarantineUtils;
  const guildAutomodProfileQuarantineErrors = obj.useGuildAutomodProfileQuarantineErrors();
  let first;
  if (guildAutomodProfileQuarantineErrors != null) {
    const nick = guildAutomodProfileQuarantineErrors.nick;
    if (nick != null) {
      first = nick[0];
    }
  }
  let tmp5 = null;
  if (null != first) {
    tmp5 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: first });
  }
  return tmp5;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.IEpCBQ);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: tmp3,
  useDescription: tmp4,
  screen: {
    route: UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
    getComponent() {
      return require("UserSettingsChangeUsername").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default route;
