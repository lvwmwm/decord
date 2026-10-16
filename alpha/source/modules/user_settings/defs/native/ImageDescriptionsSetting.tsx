// Module ID: 16440
// Function ID: 16441
// Name: ImageDescriptionsSetting
// Dependencies: [1209, 8213, 558, 2044, 16441, 11006, 1128, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 16440 (ImageDescriptionsSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import UserSettingsText from "UserSettingsText" /* 16441 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  const obj = UserSettingsText;
  const obj2 = { videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode };
  obj.setImageDescriptions(obj2);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["w8j+yW"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default toggle;
export { onImageDescriptionSettingValueChange };
