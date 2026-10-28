// Module ID: 17089
// Function ID: 17090
// Name: ImageDescriptionsSetting
// Dependencies: [1206, 8365, 558, 4832, 17090, 11248, 1125, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 17089 (ImageDescriptionsSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import UserSettingsText from "UserSettingsText" /* 17090 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
