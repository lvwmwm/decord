// Module ID: 17892
// Function ID: 17893
// Name: ParentalControlsUseDataForQuests3PSetting
// Dependencies: [7708, 8424, 8363, 16667, 11505, 1114, 2]

// Module 17892 (ParentalControlsUseDataForQuests3PSetting)
import intl2 from "intl" /* 1114 */;
import useSelectedTeen from "useSelectedTeen" /* 8363 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16667 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
    const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    const updateControlledSetting = ParentalControlledQuests3PDataOptedOut.updateControlledSetting;
    const result = updateControlledSetting(selectedTeenId, !arg0);
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
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default toggle;
