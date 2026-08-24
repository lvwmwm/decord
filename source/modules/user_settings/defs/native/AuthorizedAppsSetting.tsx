// Module ID: 14362
// Function ID: 14363
// Name: route
// Dependencies: [676, 10708, 1236, 8634, 14363, 2]

// Module 14362 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import KeyIcon from "KeyIcon" /* 8634 */;
import createToggle from "createToggle" /* 10708 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["f6kk+r"]);
  },
  parent: null,
  IconComponent: KeyIcon.KeyIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APPS,
  getComponent() {
    return require(14363) /* UserSettingsAuthedApps */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;
