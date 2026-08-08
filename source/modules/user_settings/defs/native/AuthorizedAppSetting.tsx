// Module ID: 14184
// Function ID: 14185
// Name: route
// Dependencies: [8082, 676, 10446, 14185, 2]

// Module 14184 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "";
  },
  parent: require("MobileSetting").MobileSetting.AUTHORIZED_APPS,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AUTHORIZED_APP,
  getComponent() {
    return require(14185) /* AuthorizedAppScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;
