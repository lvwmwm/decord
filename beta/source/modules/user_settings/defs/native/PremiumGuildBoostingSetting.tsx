// Module ID: 16305
// Function ID: 16306
// Name: PremiumGuildBoostingSetting
// Dependencies: [1071, 11942, 1112, 9370, 14112, 2]

// Module 16305 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import BoostGemIcon from "BoostGemIcon" /* 9370 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
