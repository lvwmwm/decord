// Module ID: 14939
// Function ID: 14940
// Name: route
// Dependencies: [7975, 1074, 11468, 14940, 2]

// Module 14939 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11468 */;

obj = {
  useTitle() {
    return "";
  },
  parent: MobileUserSettings.MobileUserSettings.AUTHORIZED_APPS,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APP,
  getComponent() {
    return require(14940) /* AuthorizedAppScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;
