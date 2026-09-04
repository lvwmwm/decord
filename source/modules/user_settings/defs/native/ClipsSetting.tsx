// Module ID: 14896
// Function ID: 14897
// Name: route
// Dependencies: [673, 11400, 1233, 14897, 14899, 2]

// Module 14896 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ClipsIcon from "ClipsIcon" /* 14897 */;
import createToggle from "createToggle" /* 11400 */;

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
    return require(14899) /* ClipsSettingsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;
