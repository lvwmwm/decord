// Module ID: 15673
// Function ID: 15674
// Name: EncryptionSetting
// Dependencies: [9363, 7612, 1074, 504, 15674, 1115, 11211, 15675, 2]

// Module 15673 (EncryptionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import useSecureFramesVerifiedUsers from "useSecureFramesVerifiedUsers" /* 15674 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9363 */;

require = fn;
const SettingBuilders = fn(11211);
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
  parent: fn(7612).MobileUserSettings.DATA_AND_PRIVACY,
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
