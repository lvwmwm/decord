// Module ID: 14516
// Function ID: 14517
// Name: PremiumGuildBoostingSetting
// Dependencies: [1086, 10874, 1127, 8675, 13041, 2]

// Module 14516 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import BoostGemIcon from "BoostGemIcon" /* 8675 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
