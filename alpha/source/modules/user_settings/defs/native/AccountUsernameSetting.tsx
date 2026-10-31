// Module ID: 16591
// Function ID: 16592
// Name: AccountUsernameSetting
// Dependencies: [19, 1383, 8432, 1072, 21, 504, 5068, 13286, 5624, 11539, 1113, 16592, 2]

// Module 16591 (AccountUsernameSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import UserUtilsDefault from "UserUtils" /* 5068 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import AutomodQuarantineUtils from "AutomodQuarantineUtils" /* 13286 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const Text_Text = tmp(5624);
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
      tmp5 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: first });
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
