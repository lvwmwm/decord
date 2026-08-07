// Module ID: 13954
// Function ID: 13955
// Name: route
// Dependencies: [8022, 676, 10380, 1236, 8453, 2]

// Module 13954 (route)
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
    return require(8453) /* UserSettingsConfirmPasswordWrapped */.UserSettingsConfirmPasswordWrapped;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;
