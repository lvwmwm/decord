// Module ID: 14187
// Function ID: 14188
// Name: route
// Dependencies: [8082, 676, 10446, 1236, 14188, 2]

// Module 14187 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.xrmhRX);
  },
  parent: require("MobileSetting").MobileSetting.AUTHORIZED_APP,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AUTHORIZED_APP_PERMISSIONS,
  getComponent() {
    return require(14188) /* AuthorizedAppPermissionsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx");

export default route;
