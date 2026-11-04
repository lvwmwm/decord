// Module ID: 18143
// Function ID: 18144
// Name: SecureFramesPersistentCodesSetting
// Dependencies: [5916, 8573, 504, 18144, 11729, 1113, 2]

// Module 18143 (SecureFramesPersistentCodesSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import updatePersistentCodesEnabled from "updatePersistentCodesEnabled" /* 18144 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 5916 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["opi/XK"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.opw5ls);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useSecureFramesPersistentCodesValue() {
    let persistentCodesEnabled;
    const items = [SecureFramesPersistedStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const obj = updatePersistentCodesEnabled;
    const result = obj.updatePersistentCodesEnabled(arg0);
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx");

export default toggle;
export const DataAndPrivacySecureFramesPersistentCodesSetting = toggle;
