// Module ID: 14650
// Function ID: 14651
// Name: route
// Dependencies: [7756, 676, 10120, 1236, 14651, 2]

// Module 14650 (route)
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
    return require(14651) /* VerificationListItem */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;
