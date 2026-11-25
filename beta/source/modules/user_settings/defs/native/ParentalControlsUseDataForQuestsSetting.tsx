// Module ID: 17409
// Function ID: 17410
// Name: ParentalControlsUseDataForQuestsSetting
// Dependencies: [8335, 8712, 16127, 16131, 1112, 2824, 11942, 2]

// Module 17409 (ParentalControlsUseDataForQuestsSetting)
import intl2 from "intl" /* 1112 */;
import _modDef2824 from "module_2824" /* 2824 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16127 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16131 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8335 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2824.ZhaNu8);
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
    const showToastIfSaveFails = FamilyCenterSaveErrorUtils.showToastIfSaveFails;
    FamilyCenterSaveErrorUtils;
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    const updateControlledSetting = ParentalControlledDropsOptedOut.updateControlledSetting;
    showToastIfSaveFails(updateControlledSetting(selectedTeenId, !arg0));
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default toggle;
