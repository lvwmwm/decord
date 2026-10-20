// Module ID: 17060
// Function ID: 17061
// Name: ParentalControlsUseDataForQuestsSetting
// Dependencies: [7594, 8280, 558, 576, 15912, 1128, 2526, 11111, 2]

// Module 17060 (ParentalControlsUseDataForQuestsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import _modDef2526 from "module_2526" /* 2526 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7594 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

let tmp;
const ParentalControlledUserSettings = tmp(15912);
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
    return intl.string(_modDef2526.ZhaNu8);
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
