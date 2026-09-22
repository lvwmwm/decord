// Module ID: 15081
// Function ID: 15082
// Name: PremiumGuildBoostingSetting
// Dependencies: [1074, 11605, 1114, 9505, 13590, 2]

// Module 15081 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import BoostGemIcon from "BoostGemIcon" /* 9505 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+CbP2v"]);
  },
  parent: null,
  IconComponent: BoostGemIcon.BoostGemIcon,
  screen: {
    route: Constants.UserSettingsSections.GUILD_BOOSTING,
    getComponent() {
      return require("UserSettingsPremiumGuildSubscriptions").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;
