// Module ID: 17275
// Function ID: 17276
// Name: ParentalControlsUseDataForQuestsSetting
// Dependencies: [8215, 8592, 15996, 16000, 1112, 2725, 11817, 2]

// Module 17275 (ParentalControlsUseDataForQuestsSetting)
import intl2 from "intl" /* 1112 */;
import _modDef2725 from "module_2725" /* 2725 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15996 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16000 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8215 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2725.ZhaNu8);
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
