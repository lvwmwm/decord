// Module ID: 14916
// Function ID: 14917
// Name: route
// Dependencies: [673, 11400, 1233, 9304, 13427, 2]

// Module 14916 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import BoostGemIcon from "BoostGemIcon" /* 9304 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+CbP2v"]);
  },
  parent: null,
  IconComponent: BoostGemIcon.BoostGemIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.GUILD_BOOSTING,
  getComponent() {
    return require(13427) /* componentDidMount */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;
