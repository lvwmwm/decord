// Module ID: 17453
// Function ID: 17454
// Name: DataSavingModeSetting
// Dependencies: [1194, 8432, 504, 17451, 4839, 11540, 1113, 2]

// Module 17453 (DataSavingModeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4839 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import UserSettingsText from "UserSettingsText" /* 17451 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
