// Module ID: 17521
// Function ID: 17522
// Name: PremiumGuildBoostingSetting
// Dependencies: [1072, 12406, 1113, 9981, 15373, 2]

// Module 17521 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import BoostGemIcon from "BoostGemIcon" /* 9981 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
