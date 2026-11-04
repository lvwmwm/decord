// Module ID: 18187
// Function ID: 18188
// Name: ParentalControlsUseDataForQuestsSetting
// Dependencies: [7855, 8573, 16957, 1113, 2667, 11728, 2]

// Module 18187 (ParentalControlsUseDataForQuestsSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2667 from "module_2667" /* 2667 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16957 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2667.ZhaNu8);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    const useControlledSetting = ParentalControlledDropsOptedOut.useControlledSetting;
    return !useControlledSetting(selectedTeenId);
  },
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
