// Module ID: 17414
// Function ID: 17415
// Name: ParentalControlsUseDataForQuests3PSetting
// Dependencies: [8335, 8712, 9138, 16131, 16135, 11942, 1112, 2]

// Module 17414 (ParentalControlsUseDataForQuests3PSetting)
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import useSelectedTeen from "useSelectedTeen" /* 9138 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16131 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16135 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8335 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
