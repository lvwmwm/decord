// Module ID: 14117
// Function ID: 14118
// Name: route
// Dependencies: [8022, 676, 10380, 1236, 14118, 2]

// Module 14117 (route)
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
    return require(14118) /* AuthorizedAppPermissionsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx");

export default route;
