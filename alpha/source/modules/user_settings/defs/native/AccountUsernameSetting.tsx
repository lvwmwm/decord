// Module ID: 16213
// Function ID: 16214
// Name: AccountUsernameSetting
// Dependencies: [19, 1387, 9556, 1071, 21, 504, 5099, 12539, 5634, 11970, 1112, 16214, 2]

// Module 16213 (AccountUsernameSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import UserUtilsDefault from "UserUtils" /* 5099 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import AutomodQuarantineUtils from "AutomodQuarantineUtils" /* 12539 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1387 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const Text_Text = tmp(5634);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.IEpCBQ);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountUsernameSettingTrailing() {
    let currentUser;
    let obj = get_initialized;
    const items = [UserStore];
    return obj.useStateFromStores(items, () => {
      const obj = UserUtilsDefault;
      return obj.getUserTag(currentUser.getCurrentUser(), { decoration: "never" });
    });
  },
  useDescription: function useAccountUsernameSettingDescription() {
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
      tmp5 = jsx(Text_Text.Text, { variant: "body-xs/medium", color: "text-feedback-warning", children: first });
    }
    return tmp5;
  },
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
