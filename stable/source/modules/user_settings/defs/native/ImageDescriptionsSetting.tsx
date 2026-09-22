// Module ID: 15548
// Function ID: 15549
// Name: ImageDescriptionsSetting
// Dependencies: [1183, 8079, 1935, 15549, 11605, 1114, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 15548 (ImageDescriptionsSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import UserSettingsText from "UserSettingsText" /* 15549 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1183 */;

require = fn;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  UserSettingsText.setImageDescriptions({ videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode });
}
const SettingBuilders = fn(11605);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w8j+yW"]);
  },
  parent: fn(8079).MobileUserSettings.CHAT,
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
