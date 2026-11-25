// Module ID: 16880
// Function ID: 16881
// Name: DataSavingModeSetting
// Dependencies: [1193, 8712, 504, 16878, 4738, 11942, 1112, 2]

// Module 16880 (DataSavingModeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import UserSettingsText from "UserSettingsText" /* 16878 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
