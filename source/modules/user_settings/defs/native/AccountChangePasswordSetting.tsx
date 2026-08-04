// Module ID: 13926
// Function ID: 13927
// Name: route
// Dependencies: [7892, 676, 10361, 1236, 13927, 2]

// Module 13926 (route)
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
    return require(13927).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;
