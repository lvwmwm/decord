// Module ID: 17215
// Function ID: 17216
// Name: EncryptionSetting
// Dependencies: [5553, 8592, 1071, 504, 17216, 1112, 11817, 17217, 2]

// Module 17215 (EncryptionSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import useSecureFramesVerifiedUsers from "useSecureFramesVerifiedUsers" /* 17216 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 5553 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    const obj = useSecureFramesVerifiedUsers;
    const secureFramesVerifiedUserIds = obj.useSecureFramesVerifiedUserIds();
    const intl = intl2.intl;
    const obj2 = { count: secureFramesVerifiedUserIds.length };
    return intl.formatToPlainString(intl2.t["6vrePS"], obj2);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    let persistentCodesEnabled;
    const items = [SecureFramesPersistedStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  screen: {
    route: UserSettingsSections.SECURE_FRAMES,
    getComponent() {
      return require("SettingsSecureFramesScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default route;
export const SecureFramesEncryptionSetting = route;
