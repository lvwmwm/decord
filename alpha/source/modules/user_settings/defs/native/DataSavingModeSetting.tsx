// Module ID: 17691
// Function ID: 17692
// Name: DataSavingModeSetting
// Dependencies: [1194, 8573, 504, 17689, 4966, 11728, 1113, 2]

// Module 17691 (DataSavingModeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import UserSettingsText from "UserSettingsText" /* 17689 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ix8XIj);
  },
  parent: MobileUserSettings.CHAT,
  useValue: function useDataSavingModeSettingValue() {
    let dataSavingMode;
    const items = [UnsyncedUserSettingsStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  },
  onValueChange: function onDataSavingModeSettingValueChange(dataSavingMode) {
    let ViewImageDescriptions;
    const obj = { videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions: ViewImageDescriptions.getSetting(), lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode, dataSavingMode };
    const setDataSavingMode = UserSettingsText.setDataSavingMode;
    UserSettingsText;
    ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    setDataSavingMode(obj);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default toggle;
