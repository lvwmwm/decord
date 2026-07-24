// Module ID: 14564
// Function ID: 111109
// Name: route
// Dependencies: [8937, 7751, 653, 566, 14565, 1212, 10127, 14566, 2]

// Module 14564 (route)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    let obj = require(14565) /* useSecureFramesVerifiedUserIds */;
    const secureFramesVerifiedUserIds = obj.useSecureFramesVerifiedUserIds();
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { count: secureFramesVerifiedUserIds.length };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["6vrePS"], obj);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getPersistentCodesEnabled());
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.SECURE_FRAMES,
  getComponent() {
    return require(14566) /* UserListItem */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default createToggle;
export const SecureFramesEncryptionSetting = createToggle;
