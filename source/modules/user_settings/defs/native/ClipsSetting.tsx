// Module ID: 14499
// Function ID: 14500
// Name: route
// Dependencies: [676, 10584, 1236, 14500, 14502, 2]

// Module 14499 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ClipsIcon from "ClipsIcon" /* 14500 */;
import createToggle from "createToggle" /* 10584 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.z2jK6X);
  },
  parent: null,
  IconComponent: ClipsIcon.ClipsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CLIPS,
  getComponent() {
    return require(14502) /* ClipsSettingsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;
