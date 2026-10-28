// Module ID: 17092
// Function ID: 17093
// Name: DataSavingModeSetting
// Dependencies: [1206, 8365, 558, 576, 504, 17090, 4832, 11248, 1125, 2]

// Module 17092 (DataSavingModeSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import UserSettingsText from "UserSettingsText" /* 17090 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataSavingModeSettingValue() {
  let dataSavingMode;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnsyncedUserSettingsStore];
    const fn = function o() {
      return dataSavingMode.dataSavingMode;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useDataSavingModeSettingValue() {
  let dataSavingMode;
  const items = [UnsyncedUserSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ix8XIj);
  },
  parent: MobileUserSettings.CHAT,
  useValue: tmp2,
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
