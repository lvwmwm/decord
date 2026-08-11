// Module ID: 14878
// Function ID: 14879
// Name: route
// Dependencies: [9216, 8084, 676, 589, 14879, 1236, 10452, 14880, 2]

// Module 14878 (route)
import items from "items";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    let obj = require(14879) /* useSecureFramesVerifiedUserIds */;
    const secureFramesVerifiedUserIds = obj.useSecureFramesVerifiedUserIds();
    const intl = require(1236) /* getSystemLocale */.intl;
    obj = { count: secureFramesVerifiedUserIds.length };
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t["6vrePS"], obj);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    const items = [items];
    return require(589) /* initialize */.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.SECURE_FRAMES,
  getComponent() {
    return require(14880) /* UserListItem */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default createToggle;
export const SecureFramesEncryptionSetting = createToggle;
