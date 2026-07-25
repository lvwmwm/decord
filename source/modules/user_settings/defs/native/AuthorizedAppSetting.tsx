// Module ID: 13904
// Function ID: 106459
// Name: route
// Dependencies: [7697, 653, 10059, 13905, 2]

// Module 13904 (route)
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
    return require(13905) /* AuthorizedAppScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;
