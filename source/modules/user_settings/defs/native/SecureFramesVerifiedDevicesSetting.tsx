// Module ID: 14747
// Function ID: 14748
// Name: route
// Dependencies: [7864, 676, 10333, 1236, 14748, 2]

// Module 14747 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["5b3FNI"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
  getComponent() {
    return require(14748) /* VerificationListItem */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;
