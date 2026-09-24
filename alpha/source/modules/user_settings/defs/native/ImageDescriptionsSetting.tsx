// Module ID: 15815
// Function ID: 15816
// Name: ImageDescriptionsSetting
// Dependencies: [1184, 8323, 2020, 15816, 11811, 1115, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 15815 (ImageDescriptionsSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import UserSettingsText from "UserSettingsText" /* 15816 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;

require = fn;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  UserSettingsText.setImageDescriptions({ videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode });
}
const SettingBuilders = fn(11811);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w8j+yW"]);
  },
  parent: fn(8323).MobileUserSettings.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default toggle;
export { onImageDescriptionSettingValueChange };
