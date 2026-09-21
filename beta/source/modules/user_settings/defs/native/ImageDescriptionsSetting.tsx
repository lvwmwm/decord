// Module ID: 15724
// Function ID: 15725
// Name: ImageDescriptionsSetting
// Dependencies: [1188, 8238, 558, 2023, 15725, 11594, 1119, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 15724 (ImageDescriptionsSetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import UserSettingsText from "UserSettingsText" /* 15725 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1188 */;

require = fn;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  UserSettingsText.setImageDescriptions({ videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode });
}
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(11594);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w8j+yW"]);
  },
  parent: fn(8238).MobileUserSettings.CHAT,
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
