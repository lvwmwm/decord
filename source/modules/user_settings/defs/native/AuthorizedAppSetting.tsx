// Module ID: 14063
// Function ID: 14064
// Name: route
// Dependencies: [7864, 676, 10333, 14064, 2]

// Module 14063 (route)
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
    return require(14064) /* AuthorizedAppScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;
