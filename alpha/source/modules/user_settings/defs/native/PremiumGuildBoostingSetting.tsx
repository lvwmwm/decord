// Module ID: 16791
// Function ID: 16792
// Name: PremiumGuildBoostingSetting
// Dependencies: [1084, 11302, 1125, 9874, 15304, 2]

// Module 16791 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import BoostGemIcon from "BoostGemIcon" /* 9874 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
