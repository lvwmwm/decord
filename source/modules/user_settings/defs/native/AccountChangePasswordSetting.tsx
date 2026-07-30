// Module ID: 13801
// Function ID: 13802
// Name: route
// Dependencies: [7753, 676, 10116, 1236, 13802, 2]

// Module 13801 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["CIGa+7"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
  getComponent() {
    return require(13802).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;
