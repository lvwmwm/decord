// Module ID: 17440
// Function ID: 17441
// Name: ParentalControlsUseDataForQuests3PSetting
// Dependencies: [8071, 9414, 8076, 16152, 16156, 11815, 1112, 2]

// Module 17440 (ParentalControlsUseDataForQuests3PSetting)
import intl2 from "intl" /* 1112 */;
import useSelectedTeen from "useSelectedTeen" /* 8076 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16152 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16156 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8071 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
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
