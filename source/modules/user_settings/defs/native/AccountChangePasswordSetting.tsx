// Module ID: 14100
// Function ID: 14101
// Name: route
// Dependencies: [8148, 676, 10421, 1236, 14101, 2]

// Module 14100 (route)
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
    return require(14101).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;
