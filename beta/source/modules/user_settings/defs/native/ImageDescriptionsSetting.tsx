// Module ID: 16881
// Function ID: 16882
// Name: ImageDescriptionsSetting
// Dependencies: [1193, 8712, 4738, 16882, 11942, 1112, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 16881 (ImageDescriptionsSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import UserSettingsText from "UserSettingsText" /* 16882 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  const obj = UserSettingsText;
  const obj2 = { videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode };
  obj.setImageDescriptions(obj2);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default toggle;
export { onImageDescriptionSettingValueChange };
