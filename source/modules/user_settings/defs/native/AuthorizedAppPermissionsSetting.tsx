// Module ID: 13907
// Function ID: 106489
// Name: route
// Dependencies: [7697, 653, 10059, 1212, 13908, 2]

// Module 13907 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.xrmhRX);
  },
  parent: require("MobileSetting").MobileSetting.AUTHORIZED_APP,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AUTHORIZED_APP_PERMISSIONS,
  getComponent() {
    return require(13908) /* AuthorizedAppPermissionsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx");

export default route;
