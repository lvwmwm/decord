// Module ID: 17272
// Function ID: 17273
// Name: ParentalControlsUseDataForQuests3PSetting
// Dependencies: [7643, 8330, 558, 8125, 16081, 11204, 1128, 2]

// Module 17272 (ParentalControlsUseDataForQuests3PSetting)
import intl2 from "intl" /* 1128 */;
import useSelectedTeen from "useSelectedTeen" /* 8125 */;
import SettingsConstants from "SettingsConstants" /* 8330 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16081 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7643 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataToSupportQuests3PSettingValue() {
  const obj = useSelectedTeen;
  const selectedTeenId = obj.useSelectedTeenId();
  const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
  const useControlledSetting = ParentalControlledQuests3PDataOptedOut.useControlledSetting;
  return !useControlledSetting(selectedTeenId);
}) : (function useDataToSupportQuests3PSettingValue() {
  const obj = useSelectedTeen;
  const selectedTeenId = obj.useSelectedTeenId();
  const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
  const useControlledSetting = ParentalControlledQuests3PDataOptedOut.useControlledSetting;
  return !useControlledSetting(selectedTeenId);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataToSupportQuests3PSettingIsDisabled() {
  const obj = useSelectedTeen;
  const selectedTeenId = obj.useSelectedTeenId();
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  const useControlledSetting = ParentalControlledDropsOptedOut.useControlledSetting;
  return useControlledSetting(selectedTeenId);
}) : (function useDataToSupportQuests3PSettingIsDisabled() {
  const obj = useSelectedTeen;
  const selectedTeenId = obj.useSelectedTeenId();
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  const useControlledSetting = ParentalControlledDropsOptedOut.useControlledSetting;
  return useControlledSetting(selectedTeenId);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.CyLYKZ);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    const updateControlledSetting = ParentalControlledQuests3PDataOptedOut.updateControlledSetting;
    const result = updateControlledSetting(selectedTeenId, !arg0);
  },
  useIsDisabled: tmp3,
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default toggle;
