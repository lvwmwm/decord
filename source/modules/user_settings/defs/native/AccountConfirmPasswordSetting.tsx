// Module ID: 14091
// Function ID: 14092
// Name: route
// Dependencies: [8123, 676, 10493, 1236, 8558, 2]

// Module 14091 (route)
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
    return require(8558) /* UserSettingsConfirmPasswordWrapped */.UserSettingsConfirmPasswordWrapped;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;
