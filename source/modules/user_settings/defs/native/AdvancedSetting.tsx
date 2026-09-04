// Module ID: 15451
// Function ID: 15452
// Name: route
// Dependencies: [673, 11400, 1233, 7318, 15452, 2]

// Module 15451 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import SettingsIcon from "SettingsIcon" /* 7318 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8/udY0"]);
  },
  parent: null,
  IconComponent: SettingsIcon.SettingsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.ADVANCED,
  getComponent() {
    return require(15452).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
