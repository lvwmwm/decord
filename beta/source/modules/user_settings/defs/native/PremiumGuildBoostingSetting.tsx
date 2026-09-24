// Module ID: 15268
// Function ID: 15269
// Name: PremiumGuildBoostingSetting
// Dependencies: [1078, 11630, 1119, 9519, 13803, 2]

// Module 15268 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import BoostGemIcon from "BoostGemIcon" /* 9519 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
