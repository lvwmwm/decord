// Module ID: 17817
// Function ID: 17818
// Name: DataSavingModeSetting
// Dependencies: [1194, 8536, 504, 17815, 4995, 11717, 1113, 2]

// Module 17817 (DataSavingModeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import UserSettingsText from "UserSettingsText" /* 17815 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
