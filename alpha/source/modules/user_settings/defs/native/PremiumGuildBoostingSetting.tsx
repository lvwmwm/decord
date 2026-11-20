// Module ID: 16170
// Function ID: 16171
// Name: PremiumGuildBoostingSetting
// Dependencies: [1071, 11817, 1112, 9250, 13986, 2]

// Module 16170 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import BoostGemIcon from "BoostGemIcon" /* 9250 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["+CbP2v"]);
  },
  parent: null,
  IconComponent: BoostGemIcon.BoostGemIcon,
  screen: {
    route: UserSettingsSections.GUILD_BOOSTING,
    getComponent() {
      return require("UserSettingsPremiumGuildSubscriptions").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;
