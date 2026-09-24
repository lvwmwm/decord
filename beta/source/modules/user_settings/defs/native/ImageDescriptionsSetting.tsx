// Module ID: 15734
// Function ID: 15735
// Name: ImageDescriptionsSetting
// Dependencies: [1188, 8270, 558, 2023, 15735, 11630, 1119, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 15734 (ImageDescriptionsSetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import UserSettingsText from "UserSettingsText" /* 15735 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1188 */;

require = fn;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  UserSettingsText.setImageDescriptions({ videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode });
}
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(11630);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w8j+yW"]);
  },
  parent: fn(8270).MobileUserSettings.CHAT,
  useValue: () => {
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default toggle;
export { onImageDescriptionSettingValueChange };
