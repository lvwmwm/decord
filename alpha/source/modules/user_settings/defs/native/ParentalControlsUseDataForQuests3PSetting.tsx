// Module ID: 17449
// Function ID: 17450
// Name: ParentalControlsUseDataForQuests3PSetting
// Dependencies: [8216, 8593, 9018, 16032, 16036, 11875, 1113, 2]

// Module 17449 (ParentalControlsUseDataForQuests3PSetting)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import useSelectedTeen from "useSelectedTeen" /* 9018 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16032 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16036 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8216 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.CyLYKZ);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const obj = useSelectedTeen;
    const selectedTeenId = obj.useSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    const useControlledSetting = ParentalControlledQuests3PDataOptedOut.useControlledSetting;
    return !useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const showToastIfSaveFails = FamilyCenterSaveErrorUtils.showToastIfSaveFails;
    FamilyCenterSaveErrorUtils;
    const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    const updateControlledSetting = ParentalControlledQuests3PDataOptedOut.updateControlledSetting;
    showToastIfSaveFails(updateControlledSetting(selectedTeenId, !arg0));
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    const obj = useSelectedTeen;
    const selectedTeenId = obj.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    const useControlledSetting = ParentalControlledDropsOptedOut.useControlledSetting;
    return useControlledSetting(selectedTeenId);
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default toggle;
