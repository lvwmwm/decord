// Module ID: 16233
// Function ID: 16234
// Name: ParentalControlsUseDataForQuestsSetting
// Dependencies: [7811, 8265, 15099, 1115, 2482, 11754, 2]

// Module 16233 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1115 */;
import _modDef2482 from "module_2482" /* 2482 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15099 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7811 */;

require = fn;
const SettingBuilders = fn(11754);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2482.ZhaNu8);
  },
  parent: fn(8265).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default toggle;
