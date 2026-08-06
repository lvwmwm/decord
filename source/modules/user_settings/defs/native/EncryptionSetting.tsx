// Module ID: 14780
// Function ID: 14781
// Name: route
// Dependencies: [9133, 8005, 676, 589, 14781, 1236, 10364, 14782, 2]

// Module 14780 (route)
import items from "items";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    let obj = require(14781) /* useSecureFramesVerifiedUserIds */;
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
    return require(14782) /* UserListItem */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default createToggle;
export const SecureFramesEncryptionSetting = createToggle;
