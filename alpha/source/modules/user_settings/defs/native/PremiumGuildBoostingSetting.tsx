// Module ID: 15971
// Function ID: 15972
// Name: PremiumGuildBoostingSetting
// Dependencies: [1087, 11003, 1128, 9645, 14503, 2]

// Module 15971 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import BoostGemIcon from "BoostGemIcon" /* 9645 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
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
