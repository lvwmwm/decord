// Module ID: 14931
// Function ID: 14932
// Name: route
// Dependencies: [676, 10516, 1236, 6120, 14932, 2]

// Module 14931 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import SettingsIcon from "SettingsIcon" /* 6120 */;
import createToggle from "createToggle" /* 10516 */;

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
    return require(14932).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
