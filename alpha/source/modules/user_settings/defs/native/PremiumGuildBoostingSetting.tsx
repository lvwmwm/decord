// Module ID: 16845
// Function ID: 16846
// Name: PremiumGuildBoostingSetting
// Dependencies: [1072, 11505, 1114, 9899, 15344, 2]

// Module 16845 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import BoostGemIcon from "BoostGemIcon" /* 9899 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
