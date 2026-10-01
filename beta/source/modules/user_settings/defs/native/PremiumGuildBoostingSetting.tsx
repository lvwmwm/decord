// Module ID: 14528
// Function ID: 14529
// Name: PremiumGuildBoostingSetting
// Dependencies: [1074, 11006, 1115, 8678, 13039, 2]

// Module 14528 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import BoostGemIcon from "BoostGemIcon" /* 8678 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
