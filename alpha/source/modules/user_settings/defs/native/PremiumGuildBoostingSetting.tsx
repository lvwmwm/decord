// Module ID: 16258
// Function ID: 16259
// Name: PremiumGuildBoostingSetting
// Dependencies: [1087, 11204, 1128, 9807, 14782, 2]

// Module 16258 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import BoostGemIcon from "BoostGemIcon" /* 9807 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
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
