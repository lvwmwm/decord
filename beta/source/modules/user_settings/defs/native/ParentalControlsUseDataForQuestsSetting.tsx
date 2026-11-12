// Module ID: 18314
// Function ID: 18315
// Name: ParentalControlsUseDataForQuestsSetting
// Dependencies: [7824, 8536, 17070, 17074, 1113, 2664, 11717, 2]

// Module 18314 (ParentalControlsUseDataForQuestsSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2664 from "module_2664" /* 2664 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17070 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17074 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7824 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2664.ZhaNu8);
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
