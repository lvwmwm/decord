// Module ID: 15738
// Function ID: 15739
// Name: DataSavingModeSetting
// Dependencies: [1184, 8233, 504, 15736, 2019, 11725, 1115, 2]

// Module 15738 (DataSavingModeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import UserSettingsText from "UserSettingsText" /* 15736 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;

require = fn;
const SettingBuilders = fn(11725);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.ix8XIj);
  },
  parent: fn(8233).MobileUserSettings.CHAT,
  useValue: function useDataSavingModeSettingValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  },
  onValueChange: function onDataSavingModeSettingValueChange(dataSavingMode) {
    const obj2 = { videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj2.viewImageDescriptions = ViewImageDescriptions.getSetting();
    obj2.lowQualityImageMode = UnsyncedUserSettingsStore.lowQualityImageMode;
    obj2.dataSavingMode = dataSavingMode;
    UserSettingsText.setDataSavingMode(obj2);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default toggle;
