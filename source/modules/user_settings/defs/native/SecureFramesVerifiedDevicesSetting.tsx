// Module ID: 14519
// Function ID: 110820
// Name: route
// Dependencies: [7662, 653, 10095, 1212, 14520, 2]

// Module 14519 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["5b3FNI"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
  getComponent() {
    return require(14520) /* VerificationListItem */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;
