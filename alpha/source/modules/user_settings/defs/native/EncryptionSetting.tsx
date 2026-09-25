// Module ID: 15438
// Function ID: 15439
// Name: EncryptionSetting
// Dependencies: [9153, 7412, 1074, 504, 15439, 1115, 10993, 15440, 2]

// Module 15438 (EncryptionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import useSecureFramesVerifiedUsers from "useSecureFramesVerifiedUsers" /* 15439 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9153 */;

require = fn;
const SettingBuilders = fn(10993);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    const secureFramesVerifiedUserIds = useSecureFramesVerifiedUsers.useSecureFramesVerifiedUserIds();
    const intl = util.intl;
    return intl.formatToPlainString(util.t["6vrePS"], { count: secureFramesVerifiedUserIds.length });
  },
  parent: fn(7412).MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    const items = [SecureFramesPersistedStore];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  screen: {
    route: fn(1074).UserSettingsSections.SECURE_FRAMES,
    getComponent() {
      return require("SettingsSecureFramesScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default route;
export const SecureFramesEncryptionSetting = route;
