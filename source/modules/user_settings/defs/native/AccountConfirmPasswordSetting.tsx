// Module ID: 14034
// Function ID: 14035
// Name: route
// Dependencies: [8084, 676, 10452, 1236, 8519, 2]

// Module 14034 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["7qKDrE"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
  getComponent() {
    return require(8519) /* UserSettingsConfirmPasswordWrapped */.UserSettingsConfirmPasswordWrapped;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;
