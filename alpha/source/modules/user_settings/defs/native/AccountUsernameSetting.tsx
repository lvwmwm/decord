// Module ID: 17111
// Function ID: 17112
// Name: AccountUsernameSetting
// Dependencies: [19, 1385, 9136, 1072, 21, 504, 5309, 14072, 5866, 12317, 1113, 17112, 2]

// Module 17111 (AccountUsernameSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import UserUtilsDefault from "UserUtils" /* 5309 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import AutomodQuarantineUtils from "AutomodQuarantineUtils" /* 14072 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const Text_Text = tmp(5866);
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
