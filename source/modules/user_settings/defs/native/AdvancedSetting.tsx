// Module ID: 15355
// Function ID: 15356
// Name: route
// Dependencies: [673, 11288, 1233, 6249, 15356, 2]

// Module 15355 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import SettingsIcon from "SettingsIcon" /* 6249 */;
import createToggle from "createToggle" /* 11288 */;

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
    return require(15356).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
