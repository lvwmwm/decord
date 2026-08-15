// Module ID: 14132
// Function ID: 14133
// Name: route
// Dependencies: [8198, 676, 10669, 1236, 14133, 2]

// Module 14132 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["CIGa+7"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
  getComponent() {
    return require(14133).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;
