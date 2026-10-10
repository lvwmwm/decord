// Module ID: 15251
// Function ID: 15252
// Name: PremiumGuildBoostingSetting
// Dependencies: [1085, 10663, 1126, 9409, 13767, 2]

// Module 15251 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import BoostGemIcon from "BoostGemIcon" /* 9409 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
