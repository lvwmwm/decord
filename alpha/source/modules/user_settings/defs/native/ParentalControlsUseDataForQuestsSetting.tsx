// Module ID: 16948
// Function ID: 16949
// Name: ParentalControlsUseDataForQuestsSetting
// Dependencies: [7479, 8214, 558, 576, 15794, 1128, 2571, 11003, 2]

// Module 16948 (ParentalControlsUseDataForQuestsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import _modDef2571 from "module_2571" /* 2571 */;
import SettingsConstants from "SettingsConstants" /* 8214 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7479 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
import size from "module_2" /* 2 */;

let tmp;
const ParentalControlledUserSettings = tmp(15794);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataToSupportQuestsSettingValue() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    cResult[0] = selectedTeenId;
    first = selectedTeenId;
  } else {
    first = cResult[0];
  }
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  const useControlledSetting = ParentalControlledDropsOptedOut.useControlledSetting;
  return !useControlledSetting(first);
}) : (function useDataToSupportQuestsSettingValue() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  const useControlledSetting = ParentalControlledDropsOptedOut.useControlledSetting;
  return !useControlledSetting(selectedTeenId);
});
let obj = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2571.ZhaNu8);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    const updateControlledSetting = ParentalControlledDropsOptedOut.updateControlledSetting;
    const result = updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default toggle;
